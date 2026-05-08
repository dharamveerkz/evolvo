"use client"; // 👈 Required for interactivity

import { useState } from "react";
import Certificate from "@/components/Certificate"; // ✅ Default import
import type { QuizModule } from "@/lib/quizzes/types";

export default function QuizFlow({ quiz }: { quiz: QuizModule }) {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");

  // Start quiz
  const handleStart = () => setStarted(true);

  // Complete quiz with score
  const handleComplete = (finalScore: number) => {
    setScore(finalScore);
    setCompleted(true);
  };

  // Retry quiz
  const handleRetry = () => {
    setStarted(true);
    setCompleted(false);
    setScore(0);
    setUserName("");
  };

  // Show certificate when completed + name entered
  if (completed && userName.trim()) {
    return (
      <Certificate
        name={userName}
        score={score}
        total={quiz.questions.length}
        quizTitle={quiz.meta.title}
        onRetry={handleRetry}
      />
    );
  }

  // Show name input after completion
  if (completed) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "var(--bg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div
          style={{
            background: "var(--sf)",
            border: "1px solid var(--bd)",
            borderRadius: 16,
            padding: 32,
            maxWidth: 400,
            width: "100%",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: 24,
              color: "var(--tx)",
              marginBottom: 16,
            }}
          >
            🎉 Quiz Completed!
          </h2>
          <p style={{ color: "var(--mu)", marginBottom: 24 }}>
            You scored{" "}
            <strong style={{ color: "var(--ac2)" }}>
              {score}/{quiz.questions.length}
            </strong>{" "}
            ({Math.round((score / quiz.questions.length) * 100)}%)
          </p>
          <input
            type="text"
            placeholder="Enter your full name for certificate"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: 8,
              border: "1px solid var(--bd2)",
              background: "var(--s2)",
              color: "var(--tx)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              marginBottom: 16,
              outline: "none",
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && userName.trim()) {
                // Trigger certificate
              }
            }}
          />
          <button
            onClick={() => userName.trim() && setCompleted(true)}
            disabled={!userName.trim()}
            style={{
              background: userName.trim() ? "var(--ac)" : "var(--bd2)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 24px",
              fontSize: 14,
              fontWeight: 600,
              cursor: userName.trim() ? "pointer" : "not-allowed",
              transition: "all 0.2s",
              width: "100%",
            }}
            onMouseEnter={(e) => {
              if (userName.trim()) {
                e.currentTarget.style.background = "var(--ac2)";
              }
            }}
            onMouseLeave={(e) => {
              if (userName.trim()) {
                e.currentTarget.style.background = "var(--ac)";
              }
            }}
          >
            Generate Certificate →
          </button>
          <button
            onClick={handleRetry}
            style={{
              background: "transparent",
              color: "var(--mu)",
              border: "1px solid var(--bd2)",
              borderRadius: 8,
              padding: "10px 20px",
              fontSize: 13,
              marginTop: 12,
              cursor: "pointer",
              transition: "all 0.2s",
              width: "100%",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--ac)";
              e.currentTarget.style.color = "var(--ac2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--bd2)";
              e.currentTarget.style.color = "var(--mu)";
            }}
          >
            ← Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  // Show start screen
  if (!started) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "var(--bg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div
          style={{
            background: "var(--sf)",
            border: "1px solid var(--bd)",
            borderRadius: 16,
            padding: 32,
            maxWidth: 500,
            width: "100%",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 40, marginBottom: 16 }}>{quiz.meta.icon}</div>
          <h1
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: 28,
              color: "var(--tx)",
              marginBottom: 12,
            }}
          >
            {quiz.meta.title}
          </h1>
          <p style={{ color: "var(--mu)", marginBottom: 24 }}>
            {quiz.meta.description}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              marginBottom: 24,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                background: "var(--s2)",
                padding: "6px 12px",
                borderRadius: 6,
                fontSize: 12,
                color: "var(--mu)",
              }}
            >
              📝 {quiz.questions.length} questions
            </span>
            <span
              style={{
                background: "var(--s2)",
                padding: "6px 12px",
                borderRadius: 6,
                fontSize: 12,
                color: "var(--mu)",
              }}
            >
              ⏱ {quiz.meta.estimatedTime}
            </span>
            <span
              style={{
                background: "var(--s2)",
                padding: "6px 12px",
                borderRadius: 6,
                fontSize: 12,
                color: "var(--mu)",
              }}
            >
              {quiz.meta.level}
            </span>
          </div>
          <button
            onClick={handleStart}
            style={{
              background: "var(--ac)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 32px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: "0 0 16px var(--gl)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--ac2)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--ac)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Start Quiz →
          </button>
        </div>
      </div>
    );
  }

  // 👇 Render your actual quiz UI here (questions, answers, scoring)
  // This is a placeholder - replace with your real quiz logic
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        padding: 20,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Your quiz questions UI goes here */}
        <div style={{ textAlign: "center", padding: 60, color: "var(--mu)" }}>
          <p>🎯 Quiz in progress...</p>
          <p style={{ fontSize: 12, marginTop: 8 }}>
            (Replace this with your actual quiz question rendering logic)
          </p>
          {/* Demo complete button for testing */}
          <button
            onClick={() => handleComplete(quiz.questions.length)} // Demo: perfect score
            style={{
              marginTop: 24,
              background: "var(--ac)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "10px 24px",
              cursor: "pointer",
            }}
          >
            ✅ Complete Quiz (Demo)
          </button>
        </div>
      </div>
    </div>
  );
}
