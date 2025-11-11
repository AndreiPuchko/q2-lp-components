import React, { useEffect, useRef, useState } from "react";
import "./slots-text-trainer.css";

interface WordDragExerciseProps {
  text: string;
}

interface Blank {
  id: number;
  correctWord: string;
  placedId: number | null;
}

interface Sentence {
  parts: string[];
  blanks: Blank[];
}

interface Word {
  id: number;
  text: string;
}

export const WordDragExercise: React.FC<WordDragExerciseProps> = ({ text }) => {
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [masterWords, setMasterWords] = useState<Word[]>([]);
  const [availableIds, setAvailableIds] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);

  const dragRef = useRef<{ id: number; source: { type: "pool" | "blank"; sid?: number; bid?: number } } | null>(null);
  const touchMoveRef = useRef<{ lastX: number; lastY: number } | null>(null);
  const [dragGhost, setDragGhost] = useState<{ text: string; x: number; y: number } | null>(null);

  // Parse input once
  useEffect(() => {
    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);

    let wordIdCounter = 1;
    let blankIdCounter = 1;
    const allWords: Word[] = [];
    const parsedSentences: Sentence[] = [];

    for (const line of lines) {
      const regex = /\{(.*?)\}/g;
      const blanks: Blank[] = [];
      const parts: string[] = [];
      let lastIndex = 0;
      let match: RegExpExecArray | null;

      while ((match = regex.exec(line))) {
        parts.push(line.slice(lastIndex, match.index));
        const correctWord = match[1];
        allWords.push({ id: wordIdCounter, text: correctWord });
        blanks.push({ id: blankIdCounter, correctWord, placedId: null });
        wordIdCounter++;
        blankIdCounter++;
        lastIndex = regex.lastIndex;
      }
      parts.push(line.slice(lastIndex));
      parsedSentences.push({ parts, blanks });
    }

    const shuffled = [...allWords.map((w) => w.id)];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setMasterWords(allWords);
    setSentences(parsedSentences);
    setAvailableIds(shuffled);
    setChecked(false);
  }, [text]);

  const getWordText = (id: number | null) =>
    id == null ? null : masterWords.find((w) => w.id === id)?.text || null;

  // Unified move that updates sentences + availableIds atomically
  const handleMove = (
    wordId: number,
    source: { type: "pool" | "blank"; sid?: number; bid?: number },
    target: { type: "pool" | "blank"; sid?: number; bid?: number }
  ) => {
    let newSentences = sentences.map((s) => ({
      ...s,
      blanks: s.blanks.map((b) => ({ ...b })),
    }));
    let newAvailable = [...availableIds];

    // Remove from source
    if (source.type === "pool") {
      newAvailable = newAvailable.filter((id) => id !== wordId);
    } else if (source.type === "blank" && source.sid != null && source.bid != null) {
      const blank = newSentences[source.sid].blanks.find((b) => b.id === source.bid);
      if (blank) blank.placedId = null;
    }

    // Place into target
    if (target.type === "pool") {
      if (!newAvailable.includes(wordId)) newAvailable.push(wordId);
    } else if (target.type === "blank" && target.sid != null && target.bid != null) {
      const blank = newSentences[target.sid].blanks.find((b) => b.id === target.bid);
      if (blank) {
        // return existing placed to pool
        if (blank.placedId && !newAvailable.includes(blank.placedId)) {
          newAvailable.push(blank.placedId);
        }
        blank.placedId = wordId;
      }
    }

    setSentences(newSentences);
    setAvailableIds(newAvailable);
    window.dispatchEvent(new Event('resize'));
  };

  // Desktop drag handlers
  const onDragStart = (
    e: React.DragEvent,
    wordId: number,
    source: { type: "pool" | "blank"; sid?: number; bid?: number }
  ) => {
    e.dataTransfer.setData("wordId", wordId.toString());
    e.dataTransfer.setData("source", JSON.stringify(source));
    try {
      e.dataTransfer.effectAllowed = "move";
    } catch { }
  };

  const onDragOver = (e: React.DragEvent) => e.preventDefault();

  const onDrop = (e: React.DragEvent, target: { type: "pool" | "blank"; sid?: number; bid?: number }) => {
    e.preventDefault();
    const wordId = parseInt(e.dataTransfer.getData("wordId"), 10);
    const source = JSON.parse(e.dataTransfer.getData("source"));
    if (!Number.isNaN(wordId)) handleMove(wordId, source, target);
  };

  // TOUCH: robust touch drag using elementFromPoint on touchend
  useEffect(() => {
    // nothing to set up globally initially
    return () => {
      // cleanup if any (safety)
      dragRef.current = null;
      touchMoveRef.current = null;
    };
  }, []);

  const startTouchDrag = (wordId: number, source: { type: "pool" | "blank"; sid?: number; bid?: number }, touch: Touch) => {
    // prevent page scroll while dragging
    if (touch && (touch as any).target) {
      // add listeners
      const onTouchMove = (ev: TouchEvent) => {
        if (ev.touches && ev.touches[0]) {
          touchMoveRef.current = { lastX: ev.touches[0].clientX, lastY: ev.touches[0].clientY };
          setDragGhost({
            text: masterWords.find((w) => w.id === wordId)?.text || "",
            x: ev.touches[0].clientX,
            y: ev.touches[0].clientY,
          });
        }
        ev.preventDefault();
      };
      const onTouchEndGlobal = (ev: TouchEvent) => {
        // use changedTouches to get final position
        const touchEnd = (ev.changedTouches && ev.changedTouches[0]) || touch;
        const x = touchEnd.clientX;
        const y = touchEnd.clientY;
        const el = document.elementFromPoint(x, y) as HTMLElement | null;
        resolveTouchDrop(el, wordId, source);
        // cleanup
        setDragGhost(null);
        window.removeEventListener("touchmove", onTouchMove, { passive: false } as any);
        window.removeEventListener("touchend", onTouchEndGlobal);
        window.removeEventListener("touchcancel", onTouchEndGlobal);
      };

      window.addEventListener("touchmove", onTouchMove, { passive: false } as any);
      window.addEventListener("touchend", onTouchEndGlobal);
      window.addEventListener("touchcancel", onTouchEndGlobal);

      // store drag info
      dragRef.current = { id: wordId, source };
      touchMoveRef.current = { lastX: touch.clientX, lastY: touch.clientY };
    }
  };

  const resolveTouchDrop = (el: HTMLElement | null, wordId: number, source: { type: "pool" | "blank"; sid?: number; bid?: number }) => {
    // find closest blank
    if (!el) {
      // if no element found, return word to pool
      handleMove(wordId, source, { type: "pool" });
      dragRef.current = null;
      touchMoveRef.current = null;
      return;
    }

    const blankEl = el.closest<HTMLElement>(".blank[data-sid][data-bid]");
    if (blankEl) {
      const sidAttr = blankEl.getAttribute("data-sid");
      const bidAttr = blankEl.getAttribute("data-bid");
      const sid = sidAttr ? parseInt(sidAttr, 10) : undefined;
      const bid = bidAttr ? parseInt(bidAttr, 10) : undefined;
      if (sid !== undefined && bid !== undefined) {
        handleMove(wordId, source, { type: "blank", sid, bid });
        dragRef.current = null;
        touchMoveRef.current = null;
        return;
      }
    }

    // if dropped inside pool area
    const poolEl = el.closest<HTMLElement>(".word-pool");
    if (poolEl) {
      handleMove(wordId, source, { type: "pool" });
      dragRef.current = null;
      touchMoveRef.current = null;
      return;
    }

    // else return to pool by default
    handleMove(wordId, source, { type: "pool" });
    dragRef.current = null;
    touchMoveRef.current = null;
  };

  // called on touchstart of a pool word or a placed blank
  const onTouchStartWord = (ev: React.TouchEvent, wordId: number, source: { type: "pool" | "blank"; sid?: number; bid?: number }) => {
    // prevent scroll
    ev.preventDefault();
    const touch = ev.touches && ev.touches[0];
    if (touch) startTouchDrag(wordId, source, touch as unknown as Touch);
  };

  // Small helpers for generating pool words list
  const poolWords = availableIds.map((id) => ({ id, text: getWordText(id)! }));

  // Buttons
  const onCheck = () => setChecked(true);
  const onReset = () => {
    const allIds = masterWords.map((w) => w.id);
    const shuffled = [...allIds];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const resetSentences = sentences.map((s) => ({
      ...s,
      blanks: s.blanks.map((b) => ({ ...b, placedId: null })),
    }));

    setSentences(resetSentences);
    setAvailableIds(shuffled);
    setChecked(false);
    window.dispatchEvent(new Event('resize'));
  };

  return (
    <div className="exercise-container">
      <h2>Ziehe die Wörter in die Lücken</h2>

      <div className="sentence-list q2-scroll">
        {sentences.map((s, si) => (
          <div key={si} className="sentence">
            {s.parts.map((part, pi) => (
              <React.Fragment key={pi}>
                <span>{part}</span>
                {pi < s.blanks.length && (
                  <div
                    className={
                      "blank" +
                      (s.blanks[pi].placedId
                        ? checked
                          ? getWordText(s.blanks[pi].placedId) === s.blanks[pi].correctWord
                            ? " correct"
                            : " wrong"
                          : " filled"
                        : "")
                    }
                    data-sid={si}
                    data-bid={s.blanks[pi].id}
                    draggable={!!s.blanks[pi].placedId}
                    onDragStart={(e) =>
                      s.blanks[pi].placedId &&
                      onDragStart(e, s.blanks[pi].placedId!, { type: "blank", sid: si, bid: s.blanks[pi].id })
                    }
                    onDrop={(e) => onDrop(e, { type: "blank", sid: si, bid: s.blanks[pi].id })}
                    onDragOver={onDragOver}
                    onTouchStart={(e) =>
                      s.blanks[pi].placedId &&
                      onTouchStartWord(e, s.blanks[pi].placedId!, { type: "blank", sid: si, bid: s.blanks[pi].id })
                    }
                  >
                    {getWordText(s.blanks[pi].placedId) || "____"}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      <div
        className="word-pool"
        onDrop={(e) => onDrop(e, { type: "pool" })}
        onDragOver={onDragOver}
        onTouchStart={(e) => {
          /* prevent pool scroll on touch when starting drag on pool area */
          e.preventDefault();
        }}
      >
        {poolWords.length ? (
          poolWords.map((w) => (
            <div
              key={w.id}
              className="word"
              draggable
              onDragStart={(e) => onDragStart(e, w.id, { type: "pool" })}
              onTouchStart={(e) => onTouchStartWord(e, w.id, { type: "pool" })}
            >
              {w.text}
            </div>
          ))
        ) : (
          <div className="empty-msg">Alle Wörter verwendet</div>
        )}
      </div>

      <div className="buttons">
        <button onClick={onCheck}>Prüfen</button>
        <button onClick={onReset}>Zurücksetzen</button>
      </div>

      {dragGhost && (
        <div
          className="drag-ghost"
          style={{
            position: "fixed",
            left: dragGhost.x - 25,
            top: dragGhost.y - 25,
            background: "#fff",
            border: "1px solid #999",
            borderRadius: "8px",
            padding: "4px 8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          {dragGhost.text}
        </div>
      )}
    </div>
  );
};

export default WordDragExercise;
