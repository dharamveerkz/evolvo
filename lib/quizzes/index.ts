import type { QuizMeta, QuizModule, QuizLoader } from "./types";

// Import all quiz modules
import { htmlQuizMeta, loadHtmlQuiz } from "./html";
import { cssQuizMeta, loadCssQuiz } from "./css";
import { sqlQuizMeta, loadSqlQuiz } from "./sql";

// Central registry - ONLY EDIT HERE TO ADD QUIZZES
export const QUIZ_REGISTRY: QuizLoader[] = [
  { meta: htmlQuizMeta, loader: loadHtmlQuiz },
  { meta: cssQuizMeta, loader: loadCssQuiz },
  { meta: sqlQuizMeta, loader: loadSqlQuiz },
];

// Helpers for UI components
export const getAllQuizMetadata = (): QuizMeta[] =>
  QUIZ_REGISTRY.map((reg) => reg.meta);

export const getQuizByPath = async (
  category: string,
  subcategory: string,
): Promise<QuizModule | null> => {
  const entry = QUIZ_REGISTRY.find(
    (q) => q.meta.category === category && q.meta.subcategory === subcategory,
  );
  if (!entry) return null;
  return await entry.loader();
};

export const searchQuizzes = (query: string): QuizMeta[] => {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return getAllQuizMetadata().filter(
    (meta) =>
      meta.title.toLowerCase().includes(q) ||
      meta.subcategory.toLowerCase().includes(q) ||
      meta.category.toLowerCase().includes(q) ||
      meta.description?.toLowerCase().includes(q),
  );
};

export const getFeaturedQuizzes = (limit = 6): QuizMeta[] =>
  getAllQuizMetadata()
    .filter((q) => q.featured)
    .slice(0, limit);

export const getQuizzesByCategory = () => {
  const quizzes = getAllQuizMetadata();
  return quizzes.reduce(
    (acc, quiz) => {
      if (!acc[quiz.category]) acc[quiz.category] = [];
      acc[quiz.category].push(quiz);
      return acc;
    },
    {} as Record<string, QuizMeta[]>,
  );
};
