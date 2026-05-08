"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizPlayer from "@/components/QuizPlayer";
import NameEntry from "@/components/NameEntry";
import Certificate from "@/components/Certificate";
import FailView from "@/components/FailView";
import type { QuizModule } from "@/lib/quizzes/types";

export default function QuizFlow({ quiz }: { quiz: QuizModule }) {
  const [phase, setPhase] = useState<
    "quiz" | "nameEntry" | "certificate" | "fail"
  >("quiz");
  const [result, setResult] = useState<{ score: number; total: number } | null>(
    null,
  );
  const [userName, setUserName] = useState("");
  const [retryKey, setRetryKey] = useState(0);

  const handleComplete = (res: {
    score: number;
    total: number;
    answers: (number | null)[];
  }) => {
    setResult({ score: res.score, total: res.total });
    const threshold = quiz.meta.passThreshold ?? 70;
    setPhase(res.score >= threshold ? "nameEntry" : "fail");
  };

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setPhase("certificate");
  };

  const handleRetry = () => {
    setRetryKey((k) => k + 1); // Forces fresh mount & auto-shuffle
    setPhase("quiz");
    setResult(null);
    setUserName("");
  };

  if (phase === "nameEntry")
    return (
      <NameEntry
        score={result!.score}
        total={result!.total}
        quizTitle={quiz.meta.title}
        onSubmit={handleNameSubmit}
      />
    );
  if (phase === "certificate")
    return (
      <Certificate
        name={userName}
        score={result!.score}
        total={result!.total}
        quizTitle={quiz.meta.title}
        onRetry={handleRetry}
      />
    );
  if (phase === "fail")
    return (
      <FailView
        score={result!.score}
        total={result!.total}
        passThreshold={quiz.meta.passThreshold ?? 70}
        quizTitle={quiz.meta.title}
        onRetry={handleRetry}
      />
    );

  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 120px)", paddingTop: 20 }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <h1 style={{ fontSize: 24, fontFamily: "'Syne', sans-serif" }}>
            {quiz.meta.title}
          </h1>
          <p style={{ color: "var(--mu)" }}>{quiz.meta.description}</p>
        </div>
        {/* key forces remount → fresh shuffle on every retry */}
        <QuizPlayer
          key={retryKey}
          questions={quiz.questions}
          meta={quiz.meta}
          onComplete={handleComplete}
        />
      </main>
      <Footer />
    </>
  );
}
