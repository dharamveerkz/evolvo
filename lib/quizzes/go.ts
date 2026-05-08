import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const goQuizMeta: QuizMeta = {
  id: "go-basics",
  category: "programming",
  subcategory: "go",
  title: "Go Basics",
  description:
    "Test your knowledge of Go fundamentals, syntax, concurrency, and core programming concepts.",
  icon: "🐹",
  level: "Beginner",
  questionCount: 50,
  color: "#00add8",
  featured: true,
  rating: 5,
  estimatedTime: "25 min",
  passThreshold: 25,
  showCertificate: true,
};

export const goQuizQuestions: QuizQuestion[] = [
  {
    question: "Who developed the Go programming language?",
    options: ["Microsoft", "Apple", "Google", "Mozilla"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to declare variables in Go?",
    options: ["var", "let", "define", "mut"],
    correctIndex: 0,
  },
  {
    question: "Which function is the entry point of a Go program?",
    options: ["start()", "run()", "main()", "init()"],
    correctIndex: 2,
  },
  {
    question: "Which package is required for formatted I/O?",
    options: ["io", "fmt", "main", "print"],
    correctIndex: 1,
  },
  {
    question: "Which function prints output with a new line in Go?",
    options: ["fmt.Print()", "fmt.Println()", "print()", "println()"],
    correctIndex: 1,
  },
  {
    question: "Which symbol is used for single-line comments?",
    options: ["#", "//", "/*", "<!--"],
    correctIndex: 1,
  },
  {
    question: "Which keyword defines constants?",
    options: ["const", "constant", "fixed", "static"],
    correctIndex: 0,
  },
  {
    question: "Which data type stores whole numbers?",
    options: ["float64", "string", "int", "bool"],
    correctIndex: 2,
  },
  {
    question: "Which data type stores true or false values?",
    options: ["bit", "bool", "boolean", "logic"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used for conditional statements?",
    options: ["if", "when", "case", "switchif"],
    correctIndex: 0,
  },
  {
    question: "Which loop keyword exists in Go?",
    options: ["while", "repeat", "for", "loop"],
    correctIndex: 2,
  },
  {
    question: "Which keyword exits a loop?",
    options: ["stop", "break", "exit", "return"],
    correctIndex: 1,
  },
  {
    question: "Which keyword skips the current loop iteration?",
    options: ["continue", "skip", "pass", "next"],
    correctIndex: 0,
  },
  {
    question: "Which operator is used for equality comparison?",
    options: ["=", "==", ":=", "==="],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to define functions?",
    options: ["function", "func", "fn", "define"],
    correctIndex: 1,
  },
  {
    question: "Which keyword returns values from functions?",
    options: ["yield", "output", "send", "return"],
    correctIndex: 3,
  },
  {
    question: "Which operator is used for short variable declaration?",
    options: ["=>", ":=", "==", "="],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to import packages?",
    options: ["include", "require", "using", "import"],
    correctIndex: 3,
  },
  {
    question: "Which keyword is used to define structures?",
    options: ["class", "object", "struct", "record"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to define interfaces?",
    options: ["trait", "abstract", "interface", "protocol"],
    correctIndex: 2,
  },
  {
    question: "Which keyword starts a goroutine?",
    options: ["thread", "async", "go", "goroutine"],
    correctIndex: 2,
  },
  {
    question: "What are goroutines mainly used for?",
    options: ["Memory allocation", "Concurrency", "File storage", "Graphics"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used with channels?",
    options: ["pipe", "channel", "chan", "stream"],
    correctIndex: 2,
  },
  {
    question: "Which operator sends data into a channel?",
    options: ["<-", "->", "=>", "<<"],
    correctIndex: 0,
  },
  {
    question: "Which package provides HTTP functionality?",
    options: ["http", "web", "net/http", "server"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used for switch statements?",
    options: ["case", "match", "switch", "select"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to defer execution?",
    options: ["delay", "later", "defer", "wait"],
    correctIndex: 2,
  },
  {
    question: "Which keyword handles multiple channel operations?",
    options: ["switch", "choose", "select", "pick"],
    correctIndex: 2,
  },
  {
    question: "Which type stores text values?",
    options: ["char", "String", "string", "text"],
    correctIndex: 2,
  },
  {
    question: "Which collection stores ordered values?",
    options: ["map", "slice", "set", "struct"],
    correctIndex: 1,
  },
  {
    question: "Which collection stores key-value pairs?",
    options: ["slice", "map", "array", "list"],
    correctIndex: 1,
  },
  {
    question: "Which keyword defines packages in Go?",
    options: ["module", "package", "namespace", "library"],
    correctIndex: 1,
  },
  {
    question: "Which package is automatically executed first?",
    options: ["main", "core", "fmt", "base"],
    correctIndex: 0,
  },
  {
    question: "Which built-in function gets the length of collections?",
    options: ["size()", "count()", "len()", "length()"],
    correctIndex: 2,
  },
  {
    question: "Which built-in function appends elements to slices?",
    options: ["push()", "append()", "add()", "insert()"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used for error handling in Go?",
    options: ["try", "catch", "error", "No special keyword"],
    correctIndex: 3,
  },
  {
    question: "Which type is commonly used for errors in Go?",
    options: ["Error", "exception", "error", "err"],
    correctIndex: 2,
  },
  {
    question: "Which keyword creates arrays with fixed size?",
    options: ["array", "slice", "var", "make"],
    correctIndex: 2,
  },
  {
    question: "Which function allocates slices, maps, and channels?",
    options: ["new()", "create()", "make()", "alloc()"],
    correctIndex: 2,
  },
  {
    question: "Which keyword allocates memory for a type?",
    options: ["make", "new", "alloc", "malloc"],
    correctIndex: 1,
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
    question: "Which keyword exits a function immediately?",
    options: ["break", "exit", "stop", "return"],
    correctIndex: 3,
  },
  {
    question: "Which keyword is used to continue loops?",
    options: ["continue", "next", "pass", "skip"],
    correctIndex: 0,
  },
  {
    question: "Which command initializes a Go module?",
    options: ["go init", "go mod init", "go create", "go start"],
    correctIndex: 1,
  },
  {
    question: "Which command runs a Go program?",
    options: ["go build", "go run", "go execute", "go start"],
    correctIndex: 1,
  },
  {
    question: "Which file stores Go module information?",
    options: ["package.json", "go.mod", "Cargo.toml", "pom.xml"],
    correctIndex: 1,
  },
  {
    question: "Which file extension is used for Go source files?",
    options: [".go", ".golang", ".g", ".mod"],
    correctIndex: 0,
  },
  {
    question: "Which company maintains Go?",
    options: ["Meta", "Google", "Amazon", "Microsoft"],
    correctIndex: 1,
  },
  {
    question: "Which statement is true about Go?",
    options: [
      "Go does not support concurrency",
      "Go is interpreted only",
      "Go supports goroutines",
      "Go does not support packages",
    ],
    correctIndex: 2,
  },
];

export const loadGoQuiz = async (): Promise<QuizModule> => ({
  meta: goQuizMeta,
  questions: goQuizQuestions,
});
