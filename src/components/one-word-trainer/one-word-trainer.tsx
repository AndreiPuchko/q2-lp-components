import React from "react";
import "./one-word-trainer.css";
import { GetQ2AppInstance } from "q2-web";

type WordEntry = {
    key: string;
    sentence: string;
    words: [string, ...string[]];
};

interface OneWordTrainerData {
    data: WordEntry[];
}

type SentencePart = {
    isBlank: boolean;
    text: string;
    index: number;
};

async function makeHash(data: any): Promise<string> {
    const stableStringify = (obj: any): string => {
        if (Array.isArray(obj)) {
            return `[${obj.map(stableStringify).join(",")}]`;
        } else if (obj && typeof obj === "object") {
            return `{${Object.keys(obj)
                .sort()
                .map((k) => `${JSON.stringify(k)}:${stableStringify(obj[k])}`)
                .join(",")}}`;
        } else {
            return JSON.stringify(obj);
        }
    };
    const str = stableStringify(data);
    const buf = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(str.slice(0, 1024))
    );
    return Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}

const saveStatsToStorage = (
    hashKey: string,
    answers: Record<
        number,
        { correct: boolean; lastPassNumber?: number; correctCount?: number }
    >,
    passCount: number
) => {
    const data = { answers, passCount };
    try {
        localStorage.setItem(`trainer_stats_${hashKey}`, JSON.stringify(data));
    } catch (e) {
        console.error("Failed to save stats to localStorage:", e);
    }
};

const loadStatsFromStorage = (hashKey: string) => {
    const stored = localStorage.getItem(`trainer_stats_${hashKey}`);
    if (stored) {
        try {
            const data = JSON.parse(stored);
            return {
                answers: data.answers ?? {},
                passCount: data.passCount ?? 0,
            };
        } catch {
            return { answers: {}, passCount: 0 };
        }
    }
    return { answers: {}, passCount: 0 };
};

const ANSWER_DELIMITER = "...";
const EMPTY_SLOT_INDICATOR = "-";

export const OneWordTrainer: React.FC<OneWordTrainerData> = ({ data }) => {
    const [hashKey, setHashKey] = React.useState<string | null>(null);

    const [currentIndex, setCurrentIndex] = React.useState(() =>
        Math.floor(Math.random() * data.length)
    );
    const [selectedWord, setSelectedWord] = React.useState("");
    const [isChecked, setIsChecked] = React.useState(false);

    const [passCount, setPassCount] = React.useState(0);
    const [answers, setAnswers] = React.useState<
        Record<number, { correct: boolean; lastPassNumber?: number; correctCount?: number }>
    >({});

    React.useEffect(() => {
        (async () => {
            const hash = await makeHash(data);
            setHashKey(hash);
            const stored = loadStatsFromStorage(hash);
            setAnswers(stored.answers);
            setPassCount(stored.passCount);
        })();
    }, [data]);

    const stats = React.useMemo(() => {
        const total = Object.values(answers).length;
        const correct = Object.values(answers).filter((a) => a.correct).length;
        return {
            total,
            correct,
            wrong: total - correct,
            percentage: total ? Math.round((correct / total) * 100) : 0,
        };
    }, [answers]);

    const ex = data[currentIndex];

    const getFilledSlots = (compositeWord: string) => {
        const parts = compositeWord.split(ANSWER_DELIMITER);
        // Map parts: "-" becomes empty string, others are used directly
        return parts.map(p => p === EMPTY_SLOT_INDICATOR ? "" : p);
    }

    const processSentence = (ex: WordEntry) => {
        const blankRegex = /\{.*?\}/g;
        const parts = ex.sentence.split(blankRegex);
        const matches = [...ex.sentence.matchAll(blankRegex)];

        const _correctAnswer = matches.map(el =>
            (el[0] === "{}" ? "-" : el[0]).replace(/[{}]/g, "")
        );
        const answer = _correctAnswer.join("...");

        const words = ex.words.includes(answer)
            ? [...ex.words]
            : [...ex.words, answer];

        const result = [];
        for (let i = 0; i < parts.length; i++) {
            result.push({ isBlank: false, text: parts[i], index: i });
            if (i < matches.length) {
                result.push({ isBlank: true, text: matches[i][0], index: i });
            }
        }
        return { sentenceParts: result, correctAnswer: answer, words };
    };

    const { sentenceParts, correctAnswer: correctAnswer, words } = processSentence(ex);
    const correctSlots = correctAnswer.split(ANSWER_DELIMITER);

    const selectedSlots = getFilledSlots(selectedWord);

    const getRandomIndex = () => {
        if (passCount > 0 && (passCount + 1) % 4 === 0) {
            const unanswered = data
                .map((_, i) => i)
                .filter((i) => !answers[i] && i !== currentIndex);
            if (unanswered.length > 0)
                return unanswered[Math.floor(Math.random() * unanswered.length)];
        }

        if (passCount > 0 && (passCount + 1) % 3 === 0) {
            const incorrect = data
                .map((_, i) => i)
                .filter((i) => answers[i] && !answers[i].correct && i !== currentIndex);
            if (incorrect.length > 0)
                return incorrect[Math.floor(Math.random() * incorrect.length)];
        }

        const available = data
            .map((_, i) => i)
            .filter((i) => {
                const a = answers[i];
                if (i === currentIndex) return false;
                if (a?.correctCount && a?.correctCount >= 6) return false;
                if (a?.correct && a.lastPassNumber !== undefined && passCount - a.lastPassNumber < 100)
                    return false;
                return true;
            });

        const pool = available.length > 0 ? available : data.map((_, i) => i).filter((i) => i !== currentIndex);
        return pool[Math.floor(Math.random() * pool.length)];
    };

    const handleNext = async () => {
        setPassCount((prev) => {
            const next = prev + 1;
            if (hashKey) saveStatsToStorage(hashKey, answers, next);
            return next;
        });

        const nextIndex = getRandomIndex();
        setCurrentIndex(nextIndex);
        setSelectedWord("");
        setIsChecked(false);
    };

    const handleWordClick = (word: string) => {
        setSelectedWord(word)
    };

    const handleCheck = () => {
        const isCorrect = selectedWord === correctAnswer;
        setIsChecked(true);

        const newAnswers = {
            ...answers,
            [currentIndex]: {
                correct: isCorrect,
                lastPassNumber: isCorrect ? passCount : undefined,
                correctCount: isCorrect
                    ? (answers[currentIndex]?.correctCount ?? 0) + 1
                    : undefined,
            },
        };
        setAnswers(newAnswers);
        if (hashKey) saveStatsToStorage(hashKey, newAnswers, passCount);
        return isCorrect;
    };

    React.useEffect(() => {
        if (selectedWord && !isChecked) handleCheck();
    }, [selectedWord]);

    const handleReset = async () => {
        const ask = await GetQ2AppInstance()?.showMsg(
            "Darf ich die Statistik zurücksetzen?",
            "Question",
            ["Ok", "Cancel"]
        );
        await ask?.waitForClose();
        if (ask?.payload["button"] === 0) {
            setIsChecked(false);
            setSelectedWord("");
            setAnswers({});
            setPassCount(0);
            if (hashKey) saveStatsToStorage(hashKey, {}, 0);
        }
    };

    return (
        <div className="exercise-container">
            <div className="stats">
                <span>Correct: {stats.correct}</span>
                <span>Wrong: {stats.wrong}</span>
                <span>Total: {stats.total}</span>
                <span>Success Rate: {stats.percentage}%</span>
            </div>

            <div className="one-word-sentence">
                {sentenceParts.map((part: SentencePart, index) => {
                    if (part.isBlank) {
                        const filledWord = selectedSlots[part.index] || '';
                        let className = "blank";

                        if (isChecked) {
                            const isSlotCorrect = filledWord === ((part && correctSlots[part.index] === "-" ? "" : correctSlots[part.index]) || '');
                            if (isSlotCorrect) {
                                className += " correct";
                            } else {
                                className += " wrong";
                            }
                        }

                        return (
                            <div
                                key={index}
                                className={className}
                            >
                                {filledWord}
                            </div>
                        );
                    } else {
                        return (
                            <span key={index}>
                                {part.text}
                            </span>
                        );
                    }
                })}
            </div>

            <div className="key">
                <h3>{ex.key}</h3> [{answers[currentIndex]?.correctCount}]
            </div>

            <div className="word-pool">
                {[...words].sort(() => Math.random() - 0.5).map((w, i) => (
                    <div
                        key={`${w}-${i}`}
                        className={`word ${w === selectedWord ? 'selected' : ''}`}
                        onClick={() => handleWordClick(w)}
                    >
                        {w}
                    </div>
                ))}
            </div>

            <div className="buttons">
                <button onClick={handleNext}>Next</button>
                <button onClick={handleReset}>Reset</button>
            </div>

            {selectedWord && selectedWord !== correctAnswer && (
                <div className="error-message">
                    Du hast einen Fehler gemacht. Versuch es noch mal.
                </div>
            )}
        </div>
    );
};

export default OneWordTrainer;
