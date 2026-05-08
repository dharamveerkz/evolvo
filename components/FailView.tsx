"use client";

export default function FailView({
  score,
  total,
  passThreshold,
  quizTitle,
  onRetry,
}: {
  score: number;
  total: number;
  passThreshold: number;
  quizTitle: string;
  onRetry: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a0005, #2d0010, #1a0820)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <div style={{ fontSize: 80, marginBottom: 16 }}>😔</div>
        <h1
          style={{
            fontSize: 36,
            color: "#ff6b8a",
            margin: "0 0 8px",
            fontStyle: "italic",
          }}
        >
          Better Luck Next Time!
        </h1>
        <div
          style={{
            width: 60,
            height: 3,
            background: "linear-gradient(90deg, #ff6b8a, #ff2d55)",
            margin: "0 auto 24px",
            borderRadius: 2,
          }}
        />
        <div
          style={{
            background: "rgba(255,107,138,0.1)",
            border: "1px solid rgba(255,107,138,0.3)",
            borderRadius: 16,
            padding: 24,
            marginBottom: 24,
          }}
        >
          <div style={{ fontSize: 48, fontWeight: 900, color: "#ff6b8a" }}>
            {score}/{total} ({pct}%)
          </div>
          <div style={{ color: "#ffb3c6", fontSize: 14, marginTop: 12 }}>
            You need{" "}
            <strong style={{ color: "#ff6b8a" }}>{passThreshold}+</strong>{" "}
            correct to earn a certificate for {quizTitle}.
          </div>
        </div>
        <div
          style={{
            color: "#c77a8e",
            fontSize: 14,
            marginBottom: 28,
            lineHeight: 1.7,
          }}
        >
          Every attempt shuffles questions and answer orders — no memorizing
          shortcuts! Study the concepts and try again. 💪
        </div>
        <button
          onClick={onRetry}
          style={{
            background: "linear-gradient(135deg, #ff2d55, #ff6b8a)",
            border: "none",
            borderRadius: 30,
            padding: "14px 40px",
            fontSize: 15,
            fontWeight: 700,
            color: "#fff",
            cursor: "pointer",
            letterSpacing: 1,
            boxShadow: "0 4px 24px rgba(255,45,85,0.4)",
          }}
        >
          🔄 Try Again
        </button>
      </div>
    </div>
  );
}
