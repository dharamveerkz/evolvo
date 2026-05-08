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
        }}
      >
        Quiz not found.
      </div>
    );
  }
  // Data is fetched on the server → zero loading delay
  return <QuizFlow quiz={quiz} />;
}
