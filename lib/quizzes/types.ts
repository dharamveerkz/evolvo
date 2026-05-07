export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface QuizMeta {
  id: string;
  category: string;
  subcategory: string;
  title: string;
  description?: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  questionCount: number; // Total questions in this quiz
  color: string;
  featured?: boolean;
  rating?: number;
  estimatedTime?: string;
  passThreshold?: number; // Minimum correct to pass (default: 70)
  showCertificate?: boolean; // Show certificate on pass? (default: true)
}

export interface QuizModule {
  meta: QuizMeta;
  questions: QuizQuestion[];
}

export interface QuizLoader {
  meta: QuizMeta;
  loader: () => Promise<QuizModule>;
}
