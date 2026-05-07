"use client";

import { useState } from "react";
import type { QuizQuestion, QuizMeta } from "@/lib/quizzes/types";

interface Props {
  questions: QuizQuestion[];
  meta: QuizMeta;
  onComplete: (result: QuizResult) => void;
}

export interface QuizResult {
  score: number;
  total: number;
  passed: boolean;
  answers: (number | null)[];
}

export default function QuizPlayer({ questions, meta, onComplete }: Props) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const q = questions[idx];
  const total = questions.length;
  const progress = ((idx + (answers.length === total ? 1 : 0)) / total) * 100;
  const passThreshold = meta.passThreshold ?? 70; // Default 70%

  const handleSelect = (optionIndex: number) => {
    if (selected !== null) return; // Prevent multiple answers
    setSelected(optionIndex);
    setShowFeedback(true);

    const isCorrect = optionIndex === q.correctIndex;
    if (isCorrect) setScore((s) => s + 1);

    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    // Auto-advance after short delay
    setTimeout(() => {
      if (idx + 1 >= total) {
        // Quiz finished
        const finalScore = newAnswers.filter((_, i) => {
          const userAns = newAnswers[i];
          return userAns !== null && userAns === questions[i].correctIndex;
        }).length;

        const passed = finalScore >= passThreshold;
        onComplete({
          score: finalScore,
          total,
          passed,
          answers: newAnswers,
        });
      } else {
        // Next question
        setIdx((i) => i + 1);
        setSelected(null);
        setShowFeedback(false);
      }
    }, 800);
  };

  // ─── RESULT SCREEN ─────────────────────────────────────
  if (answers.length === total) {
    const finalScore = answers.filter((_, i) => {
      const userAns = answers[i];
      return userAns !== null && userAns === questions[i].correctIndex;
    }).length;
    const passed = finalScore >= passThreshold;
    const percentage = Math.round((finalScore / total) * 100);

    return (
      <div
        className="panel"
        style={{
          maxWidth: 600,
          margin: "40px auto",
          border: "1px solid var(--bd2)",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 16 }}>
          {passed ? "🎉" : "💪"}
        </div>
        <h2 style={{ fontSize: 24, marginBottom: 8 }}>
          {passed ? "Quiz Passed!" : "Keep Practicing!"}
        </h2>

        {/* Score Display */}
        <div
          style={{
            background: passed
              ? "rgba(16,185,129,0.15)"
              : "rgba(239,68,68,0.15)",
            border: `1px solid ${passed ? "#34d399" : "#f87171"}`,
            borderRadius: 16,
            padding: "20px 24px",
            margin: "24px 0",
          }}
        >
          <div
            style={{
              fontSize: 42,
              fontWeight: 900,
              color: passed ? "#34d399" : "#f87171",
            }}
          >
            {finalScore}{" "}
            <span style={{ fontSize: 20, color: "var(--mu)" }}>out of</span>{" "}
            {total}
          </div>
          <div style={{ fontSize: 14, color: "var(--mu)", marginTop: 4 }}>
            {percentage}% correct • Needed {passThreshold}+ to pass
          </div>
        </div>

        {/* Certificate / Retry Buttons */}
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {passed && meta.showCertificate && (
            <button
              className="btn-p"
              onClick={() =>
                onComplete({
                  score: finalScore,
                  total,
                  passed: true,
                  answers,
                  showCertificate: true,
                })
              }
              style={{ minWidth: 140 }}
            >
              📜 Get Certificate
            </button>
          )}
          <button
            className="btn-g"
            onClick={() => window.location.reload()}
            style={{ minWidth: 140 }}
          >
            🔄 Retake Quiz
          </button>
        </div>

        {/* Review Answers (Optional) */}
        <details
          style={{
            marginTop: 24,
            textAlign: "left",
            borderTop: "1px solid var(--bd)",
            paddingTop: 16,
          }}
        >
          <summary
            style={{ cursor: "pointer", color: "var(--mu)", fontSize: 13 }}
          >
            Review your answers
          </summary>
          <div
            style={{
              marginTop: 12,
              maxHeight: 300,
              overflowY: "auto",
              fontSize: 13,
            }}
          >
            {questions.map((question, i) => {
              const userAns = answers[i];
              const isCorrect = userAns === question.correctIndex;
              return (
                <div
                  key={i}
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid var(--bd)",
                    display: "flex",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      color: isCorrect ? "#34d399" : "#f87171",
                      fontWeight: 600,
                    }}
                  >
                    {isCorrect ? "✓" : "✗"}
                  </span>
                  <span>{question.question}</span>
                  <span style={{ color: "var(--mu)", marginLeft: "auto" }}>
                    Your:{" "}
                    {userAns !== null ? question.options[userAns] : "Skipped"}
                  </span>
                </div>
              );
            })}
          </div>
        </details>
      </div>
    );
  }

  // ─── QUESTION SCREEN ───────────────────────────────────
  return (
    <div
      className="panel"
      style={{
        maxWidth: 600,
        margin: "40px auto",
        border: "1px solid var(--bd2)",
      }}
    >
      {/* Progress Bar + Live Score */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
          padding: "0 4px",
        }}
      >
        <div style={{ fontSize: 13, color: "var(--mu)" }}>
          Question {idx + 1} of {total}
        </div>
        <div
          style={{
            background: "var(--s2)",
            padding: "4px 12px",
            borderRadius: 20,
            fontSize: 13,
            border: `1px solid ${score >= passThreshold ? "#34d399" : "var(--bd2)"}`,
            color: score >= passThreshold ? "#34d399" : "var(--mu)",
          }}
        >
          {score} / {idx + 1} correct
        </div>
      </div>

      <div
        style={{
          background: "var(--s2)",
          height: 4,
          borderRadius: 2,
          overflow: "hidden",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "var(--ac)",
            transition: "width .3s",
          }}
        />
      </div>

      <h3 style={{ fontSize: 18, marginBottom: 20, lineHeight: 1.4 }}>
        {q.question}
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {q.options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = i === q.correctIndex;
          const showCorrect = showFeedback && isCorrect;
          const showWrong = showFeedback && isSelected && !isCorrect;

          let bg = "var(--sf)";
          let border = "var(--bd2)";
          let color = "var(--tx)";

          if (showCorrect) {
            bg = "rgba(16,185,129,0.15)";
            border = "#34d399";
            color = "#34d399";
          } else if (showWrong) {
            bg = "rgba(239,68,68,0.15)";
            border = "#f87171";
            color = "#f87171";
          } else if (isSelected) {
            bg = "var(--s3)";
            border = "var(--ac)";
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              style={{
                padding: "14px 16px",
                background: bg,
                border: `1px solid ${border}`,
                borderRadius: 10,
                color: color,
                cursor: selected !== null ? "default" : "pointer",
                textAlign: "left",
                fontSize: 14,
                transition: "all .2s",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  border: `1px solid ${border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {showCorrect
                  ? "✓"
                  : showWrong
                    ? "✗"
                    : String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
