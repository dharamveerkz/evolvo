import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const cssQuizMeta: QuizMeta = {
  id: "css",
  category: "webdev",
  subcategory: "css",
  title: "CSS Fundamentals",
  description: "Master selectors, properties, and layout",
  icon: "🎨",
  level: "Beginner",
  questionCount: 5,
  color: "#264de4",
  featured: true,
  rating: 5,
  estimatedTime: "15 min",
};

export const cssQuizQuestions: QuizQuestion[] = [
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    correctIndex: 2,
  },
  {
    question: "Which property changes text color?",
    options: ["font-color", "text-color", "color", "text-style"],
    correctIndex: 2,
  },
  {
    question: "How do you select an element with id 'demo'?",
    options: [".demo", "#demo", "demo", "*demo"],
    correctIndex: 1,
  },
  {
    question: "Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "bg-color"],
    correctIndex: 2,
  },
  {
    question: "How do you add a comment in a CSS file?",
    options: ["// this", "/* this */", "' this", "# this"],
    correctIndex: 1,
  },
];

export const loadCssQuiz = async (): Promise<QuizModule> => ({
  meta: cssQuizMeta,
  questions: cssQuizQuestions,
});
