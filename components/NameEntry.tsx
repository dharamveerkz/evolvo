"use client";
import { useState } from "react";

export default function NameEntry({
  score,
  total,
  quizTitle,
  onSubmit,
}: {
  score: number;
  total: number;
  quizTitle: string;
  onSubmit: (name: string) => void;
}) {
  const [name, setName] = useState("");
  const pct = Math.round((score / total) * 100);
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 480, width: "100%" }}>
        <div style={{ fontSize: 72, marginBottom: 16 }}>🏆</div>
        <h1
          style={{
            fontSize: 34,
            color: "#f5d78e",
            margin: "0 0 8px",
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
          }}
        >
          Congratulations!
        </h1>
        <div
          style={{
            width: 60,
            height: 3,
            background: "linear-gradient(90deg, #c9a84c, #f5d78e)",
            margin: "0 auto 16px",
            borderRadius: 2,
          }}
        />
        <div
          style={{
            background: "rgba(201,168,76,0.15)",
            border: "1px solid rgba(201,168,76,0.4)",
            borderRadius: 16,
            padding: 20,
            marginBottom: 28,
          }}
        >
          <div style={{ fontSize: 48, fontWeight: 900, color: "#f5d78e" }}>
            {score}/{total}
          </div>
          <div
            style={{
              color: "#c9a84c",
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {pct}% Correct • {quizTitle}
          </div>
        </div>
        <p style={{ color: "#c9c9e0", fontSize: 15, marginBottom: 24 }}>
          Enter your name to generate your personalized certificate:
        </p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && name.trim() && onSubmit(name.trim())
          }
          placeholder="Your full name"
          style={{
            width: "100%",
            padding: "14px 20px",
            fontSize: 18,
            borderRadius: 12,
            border: "2px solid #c9a84c",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
            outline: "none",
            marginBottom: 16,
            boxSizing: "border-box",
            textAlign: "center",
            fontFamily: "Georgia, serif",
          }}
        />
        <button
          onClick={() => name.trim() && onSubmit(name.trim())}
          disabled={!name.trim()}
          style={{
            background: name.trim()
              ? "linear-gradient(135deg, #c9a84c, #f5d78e)"
              : "#555",
            border: "none",
            borderRadius: 30,
            padding: "14px 48px",
            fontSize: 16,
            fontWeight: 700,
            color: name.trim() ? "#1a0a00" : "#999",
            cursor: name.trim() ? "pointer" : "default",
            letterSpacing: 1,
            boxShadow: name.trim() ? "0 4px 20px rgba(201,168,76,0.4)" : "none",
            transition: "all 0.3s",
          }}
        >
          📜 Generate Certificate
        </button>
      </div>
    </div>
  );
}
