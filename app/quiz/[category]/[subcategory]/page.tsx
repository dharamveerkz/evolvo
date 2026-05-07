"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizPlayer, { type QuizResult } from "@/components/QuizPlayer";
import { getQuizByPath } from "@/lib/quizzes";
import type { QuizModule } from "@/lib/quizzes/types";

// Simple Certificate Component (expand as needed)
function Certificate({
  name,
  score,
  total,
  onRetry,
}: {
  name: string;
  score: number;
  total: number;
  onRetry: () => void;
}) {
  const percentage = Math.round((score / total) * 100);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        background: "linear-gradient(135deg, #0f0c29, #302b63)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(145deg, #fffdf5, #fff8e1)",
          border: "8px solid #c9a84c",
          borderRadius: 4,
          padding: "40px 32px",
          textAlign: "center",
          maxWidth: 500,
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: 3,
            color: "#8a6a00",
            marginBottom: 8,
            textTransform: "uppercase",
          }}
        >
          Certificate of Achievement
        </div>
        <h2
          style={{
            fontSize: 28,
            color: "#1a0a00",
            margin: "16px 0",
            fontFamily: "Georgia, serif",
          }}
        >
          {name}
        </h2>
        <p style={{ color: "#8a6a00", fontSize: 14 }}>has passed</p>
        <h3 style={{ fontSize: 20, color: "#1a0a00", margin: "8px 0" }}>
          HTML Mastery Quiz
        </h3>
        <div
          style={{
            background: "rgba(201,168,76,0.15)",
            border: "1px solid #c9a84c",
            borderRadius: 8,
            padding: "12px 24px",
            display: "inline-block",
            margin: "20px 0",
          }}
        >
          <div style={{ fontSize: 32, fontWeight: 900, color: "#1a0a00" }}>
            {score}/{total}
          </div>
          <div style={{ fontSize: 11, color: "#8a6a00", letterSpacing: 1 }}>
            {percentage}% Correct
          </div>
        </div>
        <p style={{ fontSize: 12, color: "#8a6a00", marginBottom: 24 }}>
          Issued on {new Date().toLocaleDateString()}
        </p>
        <button className="btn-p" onClick={onRetry}>
          🔄 Retake Quiz
        </button>
      </div>
    </div>
  );
}

export default function QuizPage() {
  const params = useParams();
  const [quiz, setQuiz] = useState<QuizModule | null>(null);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const load = async () => {
      const q = await getQuizByPath(
        params.category as string,
        params.subcategory as string,
      );
      setQuiz(q);
      setLoading(false);
    };
    load();
  }, [params]);

  const handleComplete = (res: QuizResult) => {
    if (res.showCertificate) {
      setShowCertificate(true);
    } else if (res.passed) {
      setResult(res);
    } else {
      setResult(res); // Show fail state
    }
  };

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setShowCertificate(true);
  };

  if (loading) {
    return (
      <>
        <Header />
        <main
          style={{
            minHeight: "calc(100vh - 120px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ color: "var(--mu)" }}>Loading quiz...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (!quiz) {
    return (
      <>
        <Header />
        <main
          style={{
            minHeight: "calc(100vh - 120px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ color: "var(--mu)" }}>Quiz not found.</p>
        </main>
        <Footer />
      </>
    );
  }

  // Show certificate
  if (showCertificate && result?.passed) {
    return (
      <>
        <Header />
        <Certificate
          name={userName || "Learner"}
          score={result.score}
          total={result.total}
          onRetry={() => window.location.reload()}
        />
        <Footer />
      </>
    );
  }

  // Show name entry if passed and certificate enabled
  if (result?.passed && quiz.meta.showCertificate && !userName) {
    return (
      <>
        <Header />
        <main
          style={{
            minHeight: "calc(100vh - 120px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div style={{ textAlign: "center", maxWidth: 400 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🏆</div>
            <h2 style={{ fontSize: 24, marginBottom: 8 }}>Congratulations!</h2>
            <p style={{ color: "var(--mu)", marginBottom: 24 }}>
              You scored{" "}
              <strong>
                {result.score}/{result.total}
              </strong>{" "}
              ({Math.round((result.score / result.total) * 100)}%)
            </p>
            <p style={{ marginBottom: 16 }}>
              Enter your name for the certificate:
            </p>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                userName.trim() &&
                handleNameSubmit(userName.trim())
              }
              placeholder="Your full name"
              style={{
                width: "100%",
                padding: "12px 16px",
                fontSize: 16,
                borderRadius: 10,
                border: "1px solid var(--bd2)",
                background: "var(--s2)",
                color: "var(--tx)",
                marginBottom: 16,
                textAlign: "center",
              }}
            />
            <button
              className="btn-p"
              onClick={() =>
                userName.trim() && handleNameSubmit(userName.trim())
              }
              disabled={!userName.trim()}
            >
              Generate Certificate
            </button>
            <button
              className="btn-g"
              onClick={() => window.location.reload()}
              style={{ marginTop: 12, marginLeft: 8 }}
            >
              Skip & Retake
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Show fail state
  if (result && !result.passed) {
    return (
      <>
        <Header />
        <main
          style={{
            minHeight: "calc(100vh - 120px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div style={{ textAlign: "center", maxWidth: 400 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>💪</div>
            <h2 style={{ fontSize: 24, marginBottom: 8 }}>Keep Practicing!</h2>
            <p style={{ color: "var(--mu)", marginBottom: 24 }}>
              You scored{" "}
              <strong style={{ color: "#f87171" }}>
                {result.score}/{result.total}
              </strong>{" "}
              ({Math.round((result.score / result.total) * 100)}%)
            </p>
            <p style={{ color: "var(--mu)", marginBottom: 24 }}>
              You need <strong>{quiz.meta.passThreshold ?? 70}+</strong> correct
              to pass.
            </p>
            <button className="btn-p" onClick={() => window.location.reload()}>
              🔄 Try Again
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Show quiz
  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 120px)", padding: "20px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <h1 style={{ fontSize: 24, fontFamily: "'Syne', sans-serif" }}>
            {quiz.meta.title}
          </h1>
          <p style={{ color: "var(--mu)" }}>{quiz.meta.description}</p>
          <p style={{ fontSize: 13, color: "var(--mu2)" }}>
            Pass threshold:{" "}
            <strong>
              {quiz.meta.passThreshold ?? 70}/{quiz.meta.questionCount}
            </strong>{" "}
            correct
          </p>
        </div>
        <QuizPlayer
          questions={quiz.questions}
          meta={quiz.meta}
          onComplete={handleComplete}
        />
      </main>
      <Footer />
    </>
  );
}
