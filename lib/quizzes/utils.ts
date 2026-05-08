import type { QuizQuestion } from "./types";

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function prepareQuizQuestions(
  questions: QuizQuestion[],
): QuizQuestion[] {
  // 1. Shuffle questions order
  const shuffledQuestions = shuffleArray(questions);

  // 2. Shuffle options per question & track correct answer
  return shuffledQuestions.map((q) => {
    const indexed = q.options.map((opt, i) => ({
      text: opt,
      isCorrect: i === q.correctIndex,
    }));
    const shuffledOptions = shuffleArray(indexed);
    const newCorrectIndex = shuffledOptions.findIndex((o) => o.isCorrect);

    return {
      ...q,
      options: shuffledOptions.map((o) => o.text),
      correctIndex: newCorrectIndex,
    };
  });
}
