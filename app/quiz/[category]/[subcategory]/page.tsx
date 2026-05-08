import { getQuizByPath } from "@/lib/quizzes";
import QuizFlow from "./QuizFlow";

export default async function QuizPage({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  const quiz = await getQuizByPath(params.category, params.subcategory);

  if (!quiz) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          color: "var(--mu)",
          background: "var(--bg)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 24, color: "var(--tx)", marginBottom: 8 }}>
            Quiz Not Found
          </h1>
          <p style={{ color: "var(--mu)" }}>
            The quiz you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  // ✅ Data fetched on server → zero loading delay
  // ✅ QuizFlow is a Client Component that handles interactivity
  return <QuizFlow quiz={quiz} />;
}
