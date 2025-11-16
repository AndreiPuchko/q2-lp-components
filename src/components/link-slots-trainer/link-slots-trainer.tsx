import React, { useState, useEffect, useRef } from "react";
import "./link-slots-trainer.css";

type Slots1 = Record<string, string>;
type Slots2 = Record<string, string>;
type Answers = Record<string, string>;

interface LinkTrainerData {
    data: {
        slots_1: Slots1;
        slots_2: Slots2;
        answers: Answers;
    };
}

export const LinkSlotsTrainer: React.FC<LinkTrainerData> = ({ data }) => {
    const { slots_1, slots_2, answers } = data;

    const slot1Keys = Object.keys(slots_1);
    const slot2Keys = Object.keys(slots_2);

    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
    const [notes, setNotes] = useState<Record<string, string>>({});
    const [checked, setChecked] = useState(false);

    // Dynamic height
    const containerRef = useRef<HTMLDivElement>(null);
    const slot1Ref = useRef<HTMLDivElement>(null);
    const slot2Ref = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState<number>(400);

    const updateMaxHeight = () => {
        if (containerRef.current) {
            const availableHeight = window.innerHeight - containerRef.current.getBoundingClientRect().top - 120;
            setMaxHeight(availableHeight > 200 ? availableHeight : 200);
        }
    };

    useEffect(() => {
        updateMaxHeight();
        window.addEventListener("resize", updateMaxHeight);
        return () => window.removeEventListener("resize", updateMaxHeight);
    }, []);

    const handleSelect = (key: string, value: string) => {
        setUserAnswers({ ...userAnswers, [key]: value });
    };

    const handleNote = (key: string, value: string) => {
        setNotes({ ...notes, [key]: value });
    };

    const reset = () => {
        setUserAnswers({});
        setNotes({});
        setChecked(false);
    };

    const getBorderColor = (slot1Key: string) => {
        if (!checked) return "border-gray";
        const target = userAnswers[`${slot1Key}`];
        if (!target) return "border-gray";

        const index = slot2Keys.indexOf(target);
        const colors = ["cyan", "blue", "green", "purple", "orange", "teal"];
        return `border-${colors[index % colors.length]}`;
    };

    const getBackground = (slot1Key: string) => {
        if (!checked) return "";
        const correctAnswer = answers[`_${slot1Key}`];
        const user = userAnswers[slot1Key];
        if (!user) return "";
        return user === correctAnswer ? "bg-correct" : "bg-wrong";
    };

    const getBorderColor2 = (slot2Key: string) => {
        if (!checked) return "border-gray";

        // Find all slot1 keys that selected this slot2 key
        const matchingSlot1 = Object.keys(userAnswers).filter(
            k => userAnswers[k] === slot2Key
        );

        if (matchingSlot1.length === 0) return "border-gray";

        // Use the first matched slot1 key to determine color
        const index = slot1Keys.indexOf(matchingSlot1[0]);
        const colors = ["cyan", "blue", "green", "purple", "orange", "teal"];
        return `border-${colors[index % colors.length]}`;
    };

    // --- Background for slots_2 ---
    const getBackground2 = (slot2Key: string) => {
        if (!checked) return "";

        // Find all slot1 keys that selected this slot2 key
        const matchingSlot1 = Object.keys(userAnswers).filter(
            k => userAnswers[k] === slot2Key
        );

        if (matchingSlot1.length === 0) return "";

        // Determine if selection was correct
        const correct = matchingSlot1.some(
            k => answers[`_${k}`] === slot2Key
        );

        return correct ? "bg-correct" : "bg-wrong";
    };

    // Scroll handlers
    const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };
    const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="lt-container" ref={containerRef}>
            {/* Slots 1 */}
            <div style={{ position: "relative" }}>
                <button className="lt-arrow lt-arrow-left" onClick={() => scrollLeft(slot1Ref)}>⟵</button>
                <button className="lt-arrow lt-arrow-right" onClick={() => scrollRight(slot1Ref)}>⟶</button>

                <div className="lt-col" ref={slot1Ref} style={{ maxHeight: `${maxHeight}px` }}>
                    {slot1Keys.map((k) => (
                        <div key={k} className={`lt-card ${getBorderColor(k)} ${getBackground(k)}`}>
                            <div className="lt-content">
                                <div className="lt-inputs">
                                    <select
                                        className="lt-select"
                                        value={userAnswers[k] || ""}
                                        onChange={(e) => handleSelect(k, e.target.value)}
                                    >
                                        <option value="">Select...</option>
                                        {slot2Keys.map((sk) => (
                                            <option key={sk} value={sk}>{sk}</option>
                                        ))}
                                    </select>

                                    <input
                                        type="text"
                                        className="lt-input1"
                                        placeholder="Notes..."
                                        value={notes[k] || ""}
                                        onChange={(e) => handleNote(k, e.target.value)}
                                    />
                                </div>
                                <div className="lt-text q2-scroll">{k}. {slots_1[k]}</div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Slots 2 */}
            <div style={{ position: "relative" }}>
                <button className="lt-arrow lt-arrow-left" onClick={() => scrollLeft(slot2Ref)}>⟵</button>
                <button className="lt-arrow lt-arrow-right" onClick={() => scrollRight(slot2Ref)}>⟶</button>

                <div className="lt-col" ref={slot2Ref} style={{ maxHeight: `${maxHeight}px` }}>
                    {slot2Keys.map((k) => (
                        <div key={k} className={`lt-card ${getBorderColor2(k)} ${getBackground2(k)}`}>

                            <div className="lt-content">
                                <input
                                    type="text"
                                    className="lt-input2"
                                    placeholder="Notes..."
                                    value={notes[k] || ""}
                                    onChange={(e) => handleNote(k, e.target.value)}
                                />
                                <div className="lt-text q2-scroll">{k}. {slots_2[k]}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Buttons */}
            <div className="lt-buttons">
                <button className="lt-btn lt-btn-primary" onClick={() => setChecked(true)}>
                    Check
                </button>

                <button className="lt-btn lt-btn-secondary" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default LinkSlotsTrainer;
