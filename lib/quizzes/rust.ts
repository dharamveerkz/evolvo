import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const rustQuizMeta: QuizMeta = {
  id: "rust-basics",
  category: "programming",
  subcategory: "rust",
  title: "Rust Basics",
  description:
    "Test your knowledge of Rust fundamentals, ownership, memory safety, and syntax.",
  icon: "🦀",
  level: "Beginner",
  questionCount: 50,
  color: "#dea584",
  featured: true,
  rating: 5,
  estimatedTime: "25 min",
  passThreshold: 25,
  showCertificate: true,
};

export const rustQuizQuestions: QuizQuestion[] = [
  {
    question: "Who created the Rust programming language?",
    options: [
      "Bjarne Stroustrup",
      "Graydon Hoare",
      "Dennis Ritchie",
      "Guido van Rossum",
    ],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to declare a variable in Rust?",
    options: ["var", "let", "mut", "define"],
    correctIndex: 1,
  },
  {
    question: "Which keyword makes a variable mutable?",
    options: ["change", "mutable", "var", "mut"],
    correctIndex: 3,
  },
  {
    question: "Which function is the entry point of a Rust program?",
    options: ["start()", "run()", "main()", "init()"],
    correctIndex: 2,
  },
  {
    question: "Which macro is used to print output in Rust?",
    options: ["print()", "println!", "echo()", "cout"],
    correctIndex: 1,
  },
  {
    question: "Which symbol is used for single-line comments?",
    options: ["#", "//", "/*", "<!--"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to define constants?",
    options: ["const", "constant", "fixed", "static"],
    correctIndex: 0,
  },
  {
    question: "Which data type stores whole numbers?",
    options: ["f32", "char", "i32", "bool"],
    correctIndex: 2,
  },
  {
    question: "Which data type stores true or false values?",
    options: ["bool", "boolean", "bit", "logic"],
    correctIndex: 0,
  },
  {
    question: "Which keyword is used for conditional statements?",
    options: ["if", "when", "case", "switch"],
    correctIndex: 0,
  },
  {
    question: "Which loop iterates over collections in Rust?",
    options: ["repeat", "foreach", "for", "iterate"],
    correctIndex: 2,
  },
  {
    question: "Which keyword exits a loop?",
    options: ["stop", "exit", "break", "return"],
    correctIndex: 2,
  },
  {
    question: "Which keyword skips the current loop iteration?",
    options: ["continue", "pass", "next", "skip"],
    correctIndex: 0,
  },
  {
    question: "Which operator is used for equality comparison?",
    options: ["=", "==", ":=", "==="],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to define functions?",
    options: ["function", "def", "fn", "func"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to return values?",
    options: ["yield", "send", "return", "output"],
    correctIndex: 2,
  },
  {
    question: "What is Rust mainly known for?",
    options: ["Web design", "Memory safety", "Database storage", "Animation"],
    correctIndex: 1,
  },
  {
    question: "Which concept ensures memory safety in Rust?",
    options: [
      "Garbage Collection",
      "Ownership",
      "Manual Allocation",
      "Pointers Only",
    ],
    correctIndex: 1,
  },
  {
    question: "Which keyword creates references in Rust?",
    options: ["*", "&", "%", "#"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used for pattern matching?",
    options: ["switch", "match", "case", "select"],
    correctIndex: 1,
  },
  {
    question: "Which collection type stores multiple values?",
    options: ["vector", "array", "Vec", "list"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to define structures?",
    options: ["object", "record", "struct", "class"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to define enumerations?",
    options: ["enum", "variant", "choice", "union"],
    correctIndex: 0,
  },
  {
    question: "Which keyword is used to implement methods?",
    options: ["method", "impl", "implement", "extend"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to define traits?",
    options: ["interface", "trait", "abstract", "protocol"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to import modules?",
    options: ["using", "import", "use", "include"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used for error handling with Result?",
    options: ["match", "try", "catch", "throw"],
    correctIndex: 0,
  },
  {
    question: "Which type represents optional values?",
    options: ["Maybe", "Result", "Option", "Nullable"],
    correctIndex: 2,
  },
  {
    question: "Which keyword creates immutable variables by default?",
    options: ["const", "let", "mut", "static"],
    correctIndex: 1,
  },
  {
    question: "Which macro formats text without printing?",
    options: ["println!", "format!", "write!", "text!"],
    correctIndex: 1,
  },
  {
    question: "Which symbol is used for mutable references?",
    options: ["&mut", "*mut", "mut&", "&"],
    correctIndex: 0,
  },
  {
    question: "Which keyword defines modules?",
    options: ["module", "mod", "package", "crate"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to create asynchronous functions?",
    options: ["await", "async", "thread", "sync"],
    correctIndex: 1,
  },
  {
    question: "Which keyword waits for async operations?",
    options: ["pause", "wait", "await", "hold"],
    correctIndex: 2,
  },
  {
    question: "Which package manager is used in Rust?",
    options: ["npm", "cargo", "pip", "composer"],
    correctIndex: 1,
  },
  {
    question: "Which file contains Rust package metadata?",
    options: ["package.json", "Cargo.toml", "rust.config", "project.yaml"],
    correctIndex: 1,
  },
  {
    question: "Which command builds a Rust project?",
    options: ["cargo build", "rust build", "cargo run", "compile"],
    correctIndex: 0,
  },
  {
    question: "Which command runs a Rust project?",
    options: ["cargo build", "cargo execute", "cargo run", "rust run"],
    correctIndex: 2,
  },
  {
    question: "Which operator is used for logical AND?",
    options: ["&&", "&", "AND", "and"],
    correctIndex: 0,
  },
  {
    question: "Which operator is used for logical OR?",
    options: ["||", "|", "OR", "or"],
    correctIndex: 0,
  },
  {
    question: "Which keyword is used for loops without conditions?",
    options: ["forever", "repeat", "loop", "iterate"],
    correctIndex: 2,
  },
  {
    question: "Which type stores UTF-8 text?",
    options: ["char", "String", "text", "str[]"],
    correctIndex: 1,
  },
  {
    question: "Which type stores a single Unicode character?",
    options: ["char", "String", "letter", "unicode"],
    correctIndex: 0,
  },
  {
    question: "Which operator dereferences a pointer?",
    options: ["&", "*", "%", "#"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to create static variables?",
    options: ["const", "let", "static", "fixed"],
    correctIndex: 2,
  },
  {
    question: "Which concept allows one owner at a time?",
    options: ["Inheritance", "Ownership", "Encapsulation", "Borrowing"],
    correctIndex: 1,
  },
  {
    question: "Which concept allows temporary access without ownership?",
    options: ["Borrowing", "Inheritance", "Cloning", "Casting"],
    correctIndex: 0,
  },
  {
    question: "Which keyword is used to derive traits automatically?",
    options: ["derive", "#[derive]", "@derive", "trait"],
    correctIndex: 1,
  },
  {
    question: "Which file extension is used for Rust source files?",
    options: [".rust", ".rs", ".r", ".rt"],
    correctIndex: 1,
  },
  {
    question: "Which statement is true about Rust?",
    options: [
      "Rust uses garbage collection",
      "Rust focuses on memory safety",
      "Rust does not support concurrency",
      "Rust is interpreted only",
    ],
    correctIndex: 1,
  },
];

export const loadRustQuiz = async (): Promise<QuizModule> => ({
  meta: rustQuizMeta,
  questions: rustQuizQuestions,
});
