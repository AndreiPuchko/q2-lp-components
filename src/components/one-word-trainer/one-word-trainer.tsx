import React from "react";
import "./one-word-trainer.css";
import { GetQ2AppInstance } from "q2-web";

// --- Types ---
type WordEntry = {
    key: string;
    sentence: string;
    words: [string, ...string[]];
};

interface OneWordTrainerData {
    data: WordEntry[];
}

// --- Cache key generation ---
async function makeCacheHash(data: any): Promise<string> {
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

// --- Storage helpers ---
const saveStatsToStorage = (
    cacheKey: string,
    answers: Record<
        number,
        { correct: boolean; lastPassNumber?: number; correctCount?: number }
    >,
    passCount: number
) => {
    const data = { answers, passCount };
    try {
        localStorage.setItem(`trainer_stats_${cacheKey}`, JSON.stringify(data));
    } catch (e) {
        console.error("Failed to save stats to localStorage:", e);
    }
};

const loadStatsFromStorage = (cacheKey: string) => {
    const stored = localStorage.getItem(`trainer_stats_${cacheKey}`);
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

// --- Component ---
export const OneWordTrainer: React.FC<OneWordTrainerData> = ({ data }) => {
    const [cacheKey, setCacheKey] = React.useState<string | null>(null);

    const [currentIndex, setCurrentIndex] = React.useState(() =>
        Math.floor(Math.random() * data.length)
    );
    const [selectedWord, setSelectedWord] = React.useState("");
    const [isChecked, setIsChecked] = React.useState(false);
    const [shuffledWords, setShuffledWords] = React.useState<string[]>([]);

    const [passCount, setPassCount] = React.useState(0);
    const [answers, setAnswers] = React.useState<
        Record<number, { correct: boolean; lastPassNumber?: number; correctCount?: number }>
    >({});

    // Compute cache key from data
    React.useEffect(() => {
        (async () => {
            const hash = await makeCacheHash(data);
            setCacheKey(hash);
            const stored = loadStatsFromStorage(hash);
            setAnswers(stored.answers);
            setPassCount(stored.passCount);
        })();
    }, [data]);

    // --- Derived stats ---
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

    // --- Logic ---
    const ex = data[currentIndex];
    let answer = "";

    const processSentence = (sentence: string) => {
        const parts = sentence.split(/(\{.*?\})/);
        const match = sentence.match(/\{(.*?)\}/);
        if (match) answer = match[1];
        return parts.map((part) => ({
            isBlank: part.startsWith("{") && part.endsWith("}"),
            text: part,
        }));
    };

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

    const handleCheck = () => {
        setIsChecked(true);
        const isCorrect = selectedWord === answer;
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
        if (cacheKey) saveStatsToStorage(cacheKey, newAnswers, passCount);
        return isCorrect;
    };

    const handleNext = async () => {
        if (selectedWord && !isChecked) {
            const isCorrect = handleCheck();
            const msgForm = await GetQ2AppInstance()?.showMsg(
                `${ex.sentence}\n\n${isCorrect ? "Richtig! 👍" : `Falsch! Die richtige Antwort ist: ${answer}`}`,
                isCorrect ? "success" : "error"
            );
            if (msgForm) setTimeout(() => msgForm.closeDialog(), 2000);
        }

        setPassCount((prev) => {
            const next = prev + 1;
            if (cacheKey) saveStatsToStorage(cacheKey, answers, next);
            return next;
        });

        const nextIndex = getRandomIndex();
        setCurrentIndex(nextIndex);
        setShuffledWords([...data[nextIndex].words].sort(() => Math.random() - 0.5));
        setSelectedWord("");
        setIsChecked(false);
    };

    const handleWordClick = (word: string) => setSelectedWord(word);

    React.useEffect(() => {
        if (selectedWord && !isChecked) handleCheck();
    }, [selectedWord]);

    React.useEffect(() => {
        if (shuffledWords.length === 0)
            setShuffledWords([...ex.words].sort(() => Math.random() - 0.5));
    }, [ex.words, shuffledWords.length]);

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
            setShuffledWords([...data[currentIndex].words].sort(() => Math.random() - 0.5));
            if (cacheKey) saveStatsToStorage(cacheKey, {}, 0);
        }
    };

    const sentenceParts = processSentence(ex.sentence);
    return (
        <div className="exercise-container">
            <div className="stats">
                <span>Correct: {stats.correct}</span>
                <span>Wrong: {stats.wrong}</span>
                <span>Total: {stats.total}</span>
                <span>Success Rate: {stats.percentage}%</span>
            </div>

            <div className="one-word-sentence">
                {sentenceParts.map((part, index) =>
                    part.isBlank ? (
                        <div
                            key={index}
                            className={`blank ${isChecked
                                    ? selectedWord === answer
                                        ? "correct"
                                        : "wrong"
                                    : ""
                                }`}
                        >
                            {selectedWord}
                        </div>
                    ) : (
                        part.text
                    )
                )}
            </div>

            <div className="key">
                <h3>{ex.key}</h3> [{answers[currentIndex]?.correctCount}]
            </div>

            <div className="word-pool">
                {shuffledWords.map((w, i) => (
                    <div key={`${w}-${i}`} className="word" onClick={() => handleWordClick(w)}>
                        {w}
                    </div>
                ))}
            </div>

            <div className="buttons">
                <button onClick={handleNext}>Next</button>
                <button onClick={handleReset}>Reset</button>
            </div>

            {selectedWord && selectedWord !== answer && (
                <div className="error-message">
                    Du hast einen Fehler gemacht. Versuch es noch mal.
                </div>
            )}
        </div>
    );
};

export default OneWordTrainer;
