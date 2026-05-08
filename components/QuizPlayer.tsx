"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import type { QuizQuestion, QuizMeta } from "@/lib/quizzes/types";

// ─── Shuffle Utility (keeps correctIndex in sync) ───
function shuffleQuiz(questions: QuizQuestion[]): QuizQuestion[] {
  const qArr = [...questions];
  for (let i = qArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [qArr[i], qArr[j]] = [qArr[j], qArr[i]];
  }
  return qArr.map((q) => {
    const indexed = q.options.map((opt, idx) => ({
      text: opt,
      isCorrect: idx === q.correctIndex,
    }));
    const shuffled = [...indexed];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return {
      ...q,
      options: shuffled.map((s) => s.text),
      correctIndex: shuffled.findIndex((s) => s.isCorrect),
    };
  });
}

interface Props {
  questions: QuizQuestion[];
  meta: QuizMeta;
  onComplete: (result: {
    score: number;
    total: number;
    answers: (number | null)[];
  }) => void;
}

export default function QuizPlayer({ questions, meta, onComplete }: Props) {
  // Shuffle once per mount (key change in parent triggers remount)
  const shuffledQuestions = useMemo(() => shuffleQuiz(questions), []);

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  const q = shuffledQuestions[idx];
  const total = shuffledQuestions.length;
  const progress = (idx / total) * 100;

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleSelect = (optionIdx: number) => {
    if (selected !== null) return;
    setSelected(optionIdx);
    setShowFeedback(true);
    const correct = optionIdx === q.correctIndex;
    if (correct) setScore((s) => s + 1);

    const newAnswers = [...answers, optionIdx];
    timerRef.current = setTimeout(() => {
      if (idx + 1 >= total) {
        setAnswers(newAnswers);
        onComplete({
          score: correct ? score + 1 : score,
          total,
          answers: newAnswers,
        });
      } else {
        setAnswers(newAnswers);
        setIdx((i) => i + 1);
        setSelected(null);
        setShowFeedback(false);
      }
    }, 800);
  };

  if (!q) return null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>
      {/* Header Stats */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          borderBottom: "1px solid #2a2a4a",
          padding: "14px 20px",
          position: "sticky",
          top: 0,
          zIndex: 10,
          borderRadius: "12px 12px 0 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 3,
                color: "#7c7caa",
                textTransform: "uppercase",
              }}
            >
              {meta.title}
            </div>
            <div style={{ fontSize: 11, color: "#555580", marginTop: 2 }}>
              Question {idx + 1} of {total}
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#4ade80" }}>
                {score}
              </div>
              <div style={{ fontSize: 10, color: "#555580" }}>CORRECT</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#f87171" }}>
                {answers.length - score}
              </div>
              <div style={{ fontSize: 10, color: "#555580" }}>WRONG</div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 10,
            background: "#1e1e3a",
            borderRadius: 4,
            height: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, #6c63ff88, #6c63ff)",
              borderRadius: 4,
              transition: "width 0.4s ease",
            }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div
        style={{
          background: "linear-gradient(145deg, #1a1a2e, #1e1e38)",
          border: "1px solid #2e2e50",
          borderRadius: "20px",
          padding: "28px",
          marginBottom: 20,
          marginTop: 20,
          boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          <div
            style={{
              background: "linear-gradient(135deg, #6c63ff22, #6c63ff44)",
              border: "1px solid #6c63ff55",
              borderRadius: 10,
              padding: "6px 12px",
              fontSize: 13,
              fontWeight: 900,
              color: "#8b85ff",
              flexShrink: 0,
            }}
          >
            Q{idx + 1}
          </div>
          <div style={{ fontSize: 18, lineHeight: 1.55, color: "#e8e8f8" }}>
            {q.question}
          </div>
        </div>
      </div>

      {/* Options */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginBottom: 28,
        }}
      >
        {q.options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = i === q.correctIndex;
          const showCorrect = showFeedback && isCorrect;
          const showWrong = showFeedback && isSelected && !isCorrect;
          let bg = "linear-gradient(145deg, #181828, #1e1e34)";
          let border = "#2e2e50";
          let color = "#c0c0e0";
          if (showCorrect) {
            bg = "linear-gradient(145deg, #052e16, #064e20)";
            border = "#4ade80";
            color = "#4ade80";
          } else if (showWrong) {
            bg = "linear-gradient(145deg, #2d0010, #3d0015)";
            border = "#f87171";
            color = "#f87171";
          } else if (isSelected) {
            bg = "linear-gradient(145deg, #1e1e48, #252550)";
            border = "#818cf8";
            color = "#c7d2fe";
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              style={{
                background: bg,
                border: `2px solid ${border}`,
                borderRadius: 14,
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                gap: 14,
                cursor: selected !== null ? "default" : "pointer",
                transition: "all 0.2s",
                textAlign: "left",
                boxShadow:
                  showCorrect || showWrong
                    ? `0 0 16px ${showCorrect ? "rgba(74,222,128,0.25)" : "rgba(248,113,113,0.25)"}`
                    : "none",
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  border: `1.5px solid ${border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 900,
                  color,
                  flexShrink: 0,
                  background: showCorrect
                    ? "rgba(74,222,128,0.15)"
                    : showWrong
                      ? "rgba(248,113,113,0.15)"
                      : "transparent",
                }}
              >
                {showCorrect ? "✓" : showWrong ? "✗" : ["A", "B", "C", "D"][i]}
              </div>
              <span style={{ fontSize: 15, color, lineHeight: 1.4 }}>
                {opt}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
