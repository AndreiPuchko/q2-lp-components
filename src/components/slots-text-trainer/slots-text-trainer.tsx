import React, { useEffect, useRef, useState } from "react";
import "./slots-text-trainer.css";

interface WordDragExerciseProps {
  data: {
    slot_text: string[];
    wrong_answers?: string[];
  };
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

interface SelectedBlank {
  sid: number; // Sentence Index
  bid: number; // Blank ID
}

export const SlotsTextTrainer: React.FC<WordDragExerciseProps> = ({ data }) => {
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [masterWords, setMasterWords] = useState<Word[]>([]);
  const [availableIds, setAvailableIds] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);


  const [selectedBlank, setSelectedBlank] = useState<SelectedBlank | null>(null);
  const dragRef = useRef<{ id: number; source: { type: "pool" | "blank"; sid?: number; bid?: number } } | null>(null);
  const touchMoveRef = useRef<{ lastX: number; lastY: number } | null>(null);
  const [dragGhost, setDragGhost] = useState<{ text: string; x: number; y: number } | null>(null);

  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const lastTapRef = useRef<number | null>(null);
  const TAP_MOVE_THRESHOLD = 8;   // px
  const TAP_TIME_THRESHOLD = 300; // ms

  // --- Parse input once ---
  useEffect(() => {
    if (!data?.slot_text?.length) return;

    const lines = data.slot_text.map((l) => l.trim()).filter(Boolean);
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

    if (data.wrong_answers) {
      data.wrong_answers.forEach((el: string, idx: number) => {
        allWords.push({ id: wordIdCounter + idx, text: el });
      })
    }

    // shuffle words
    const shuffled = allWords.map((w) => w.id);
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setMasterWords(allWords);
    setSentences(parsedSentences);
    setAvailableIds(shuffled);
    setChecked(false);

    const si = parsedSentences.findIndex((el) => { return el.blanks.length > 0; })
    setSelectedBlank({ sid: si, bid: 1 });
  }, [data]);

  // --- Helpers ---
  const getWordText = (id: number | null) =>
    id == null ? null : masterWords.find((w) => w.id === id)?.text || null;

  // --- Unified move (drag-drop logic) ---
  const handleMove = (
    wordId: number,
    source: { type: "pool" | "blank"; sid?: number; bid?: number },
    target: { type: "pool" | "blank"; sid?: number; bid?: number }
  ) => {
    // setSelectedBlank(null);
    const newSentences = sentences.map((s) => ({
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
        if (blank.placedId && !newAvailable.includes(blank.placedId)) {
          newAvailable.push(blank.placedId);
        }
        blank.placedId = wordId;
      }
    }
    setSentences(newSentences);
    setAvailableIds(newAvailable);
    window.dispatchEvent(new Event("resize"));
  };

  const handleBlankClick = (si: number, blank: Blank) => {
    const isSelected = selectedBlank?.sid === si && selectedBlank?.bid === blank.id;
    if (isSelected) {
      setSelectedBlank(null);
    }
    else {
      setSelectedBlank({ sid: si, bid: blank.id });
    }
  };

  const handleWordClick = (wordId: number) => {
    if (!selectedBlank) return; // Only act if a blank is selected
    const { sid, bid } = selectedBlank;
    handleMove(
      wordId,
      { type: "pool" },
      { type: "blank", sid, bid }
    );
    const si = sentences.findIndex((el, idx) => { return idx >= selectedBlank.sid && el.blanks.find((el2) => el2.id > bid) });
    if (si) {
      const bi = sentences[si].blanks.find((el) => el.id > bid);
      if (bi)
        setSelectedBlank({ sid: si, bid: bi.id })
    }
  };

  // --- Desktop drag handlers ---
  const onDragStart = (e: React.DragEvent, wordId: number, source: any) => {
    e.dataTransfer.setData("wordId", wordId.toString());
    e.dataTransfer.setData("source", JSON.stringify(source));
    try {
      e.dataTransfer.effectAllowed = "move";
    } catch { }
  };

  const onDrop = (e: React.DragEvent, target: any) => {
    e.preventDefault();
    const wordId = parseInt(e.dataTransfer.getData("wordId"), 10);
    const source = JSON.parse(e.dataTransfer.getData("source"));
    if (!Number.isNaN(wordId)) handleMove(wordId, source, target);
  };

  const onDragOver = (e: React.DragEvent) => e.preventDefault();

  // --- Touch drag logic ---
  const startTouchDrag = (wordId: number, source: any, touch: React.Touch) => {
    // --- RECORD TOUCH START ---
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };

    const onTouchMove = (ev: TouchEvent) => {
      const t = ev.touches[0];
      touchMoveRef.current = { lastX: t.clientX, lastY: t.clientY };

      setDragGhost({
        text: masterWords.find((w) => w.id === wordId)?.text || "",
        x: t.clientX,
        y: t.clientY,
      });
      ev.preventDefault();
    };

    const onTouchEnd = (ev: TouchEvent) => {
      const t = (ev.changedTouches && ev.changedTouches[0]) || touch;
      // --- CHECK IF THIS WAS A TAP ---
      if (touchStartRef.current) {
        const dx = Math.abs(t.clientX - touchStartRef.current.x);
        const dy = Math.abs(t.clientY - touchStartRef.current.y);
        const dt = Date.now() - touchStartRef.current.time;

        const isTap =
          dx < TAP_MOVE_THRESHOLD &&
          dy < TAP_MOVE_THRESHOLD &&
          dt < TAP_TIME_THRESHOLD;

        const target = ev.target as HTMLElement | null;
        if (isTap && target) {
          const now = Date.now();
          const isDoubleTap =
            lastTapRef.current &&
            now - lastTapRef.current < TAP_TIME_THRESHOLD;
          if (isDoubleTap) {
            // 👉 DOUBLE TAP → CALL handleMove
            handleMove(wordId, source, { type: "pool" });
            lastTapRef.current = null;
            cleanup();
            return;
          }
          lastTapRef.current = now;
          if (target.className.includes("word")) handleWordClick(wordId);
          cleanup();
          return;
        }
      }
      const el = document.elementFromPoint(t.clientX, t.clientY) as HTMLElement | null;
      resolveTouchDrop(el, wordId, source);
      setDragGhost(null);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("touchmove", onTouchMove, { passive: false } as any);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
    };

    window.addEventListener("touchmove", onTouchMove, { passive: false } as any);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchcancel", onTouchEnd);

    dragRef.current = { id: wordId, source };
    touchMoveRef.current = { lastX: touch.clientX, lastY: touch.clientY };
  };

  const resolveTouchDrop = (el: HTMLElement | null, wordId: number, source: any) => {
    if (!el) return handleMove(wordId, source, { type: "pool" });

    const blankEl = el.closest<HTMLElement>(".blank[data-sid][data-bid]");
    if (blankEl) {
      const sid = parseInt(blankEl.getAttribute("data-sid")!, 10);
      const bid = parseInt(blankEl.getAttribute("data-bid")!, 10);
      return handleMove(wordId, source, { type: "blank", sid, bid });
    }

    const poolEl = el.closest<HTMLElement>(".word-pool");
    if (poolEl) return handleMove(wordId, source, { type: "pool" });

    handleMove(wordId, source, { type: "pool" });
  };

  const onTouchStartWord = (ev: React.TouchEvent, wordId: number, source: any) => {
    // ev.preventDefault();
    const touch = ev.touches[0];
    if (touch) startTouchDrag(wordId, source, touch);
  };

  // --- Derived values ---
  const poolWords = availableIds.map((id) => ({ id, text: getWordText(id)! }));

  const onCheck = () => setChecked(true);

  const onReset = () => {
    const shuffled = masterWords.map((w) => w.id).sort(() => Math.random() - 0.5);
    const resetSentences = sentences.map((s) => ({
      ...s,
      blanks: s.blanks.map((b) => ({ ...b, placedId: null })),
    }));
    setSentences(resetSentences);
    setAvailableIds(shuffled);
    setChecked(false);
    setSelectedBlank(null);
    window.dispatchEvent(new Event("resize"));
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
                        : "") +
                      // NEW: Selection class
                      (selectedBlank?.sid === si && selectedBlank?.bid === s.blanks[pi].id ? " selectedSlot" : "")
                    }
                    data-sid={si}
                    data-bid={s.blanks[pi].id}
                    draggable={!!s.blanks[pi].placedId}
                    onClick={() => handleBlankClick(si, s.blanks[pi])}
                    onDoubleClick={() => {
                      handleMove(s.blanks[pi].placedId!, { type: "blank", sid: si, bid: s.blanks[pi].id }, { type: "pool" })
                    }}
                    onDragStart={(e) =>
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
      // onTouchStart={(e) => e.preventDefault()}
      >
        {poolWords.length ? (
          poolWords.map((w) => (
            <div
              key={w.id}
              className="word"
              draggable
              onDragStart={(e) => onDragStart(e, w.id, { type: "pool" })}
              onClick={(_) => handleWordClick(w.id)}
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
            left: dragGhost.x - 25,
            top: dragGhost.y - 25
          }}
        >
          {dragGhost.text}
        </div>
      )}
    </div>
  );
};

export default SlotsTextTrainer;
