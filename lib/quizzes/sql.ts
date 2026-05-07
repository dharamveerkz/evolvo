import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const sqlQuizMeta: QuizMeta = {
  id: "sql",
  category: "datascience",
  subcategory: "sql",
  title: "SQL Essentials",
  description: "Database querying fundamentals",
  icon: "🗄️",
  level: "Beginner",
  questionCount: 5,
  color: "#336791",
  featured: true,
  rating: 4,
  estimatedTime: "18 min",
};

export const sqlQuizQuestions: QuizQuestion[] = [
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Question Language",
      "System Query List",
      "Sequential Query Logic",
    ],
    correctIndex: 0,
  },
  {
    question: "Which statement extracts data from a database?",
    options: ["OPEN", "GET", "SELECT", "EXTRACT"],
    correctIndex: 2,
  },
  {
    question: "Which clause filters records?",
    options: ["WHERE", "FILTER", "ORDER BY", "HAVING"],
    correctIndex: 0,
  },
  {
    question: "Which keyword removes duplicate values?",
    options: ["REMOVE", "DIFFERENT", "DISTINCT", "UNIQUE"],
    correctIndex: 2,
  },
  {
    question: "Which function returns the number of rows?",
    options: ["SUM()", "COUNT()", "TOTAL()", "NUMBER()"],
    correctIndex: 1,
  },
];

export const loadSqlQuiz = async (): Promise<QuizModule> => ({
  meta: sqlQuizMeta,
  questions: sqlQuizQuestions,
});
