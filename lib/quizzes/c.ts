import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const cQuizMeta: QuizMeta = {
  id: "c-basics",
  category: "programming",
  subcategory: "c",
  title: "C Programming Basics",
  description:
    "Test your knowledge of C programming fundamentals, syntax, and core concepts.",
  icon: "💻",
  level: "Beginner",
  questionCount: 50,
  color: "#00599c",
  featured: true,
  rating: 5,
  estimatedTime: "25 min",
  passThreshold: 25,
  showCertificate: true,
};

export const cQuizQuestions: QuizQuestion[] = [
  {
    question: "Who developed the C programming language?",
    options: [
      "Bjarne Stroustrup",
      "James Gosling",
      "Dennis Ritchie",
      "Guido van Rossum",
    ],
    correctIndex: 2,
  },
  {
    question: "Which symbol is used for single-line comments in C?",
    options: ["#", "//", "/*", "<!--"],
    correctIndex: 1,
  },
  {
    question: "Which header file is used for input and output functions?",
    options: ["stdlib.h", "math.h", "stdio.h", "string.h"],
    correctIndex: 2,
  },
  {
    question: "Which function is used to print output in C?",
    options: ["print()", "cout", "printf()", "echo()"],
    correctIndex: 2,
  },
  {
    question: "Which function is used to take input in C?",
    options: ["input()", "scanf()", "cin", "read()"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to define a constant?",
    options: ["const", "constant", "define", "fixed"],
    correctIndex: 0,
  },
  {
    question: "Which data type stores whole numbers?",
    options: ["float", "char", "int", "double"],
    correctIndex: 2,
  },
  {
    question: "Which data type stores decimal numbers?",
    options: ["int", "char", "float", "void"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used for conditional statements?",
    options: ["if", "when", "case", "switchif"],
    correctIndex: 0,
  },
  {
    question: "Which loop is commonly used for fixed iterations?",
    options: ["while", "for", "repeat", "loop"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to exit a loop?",
    options: ["stop", "break", "exit", "return"],
    correctIndex: 1,
  },
  {
    question: "Which operator is used for equality comparison?",
    options: ["=", "==", ":=", "==="],
    correctIndex: 1,
  },
  {
    question: "Which symbol ends statements in C?",
    options: [":", ".", ";", ","],
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
    question: "Which keyword is used to return a value from a function?",
    options: ["output", "send", "return", "yield"],
    correctIndex: 2,
  },
  {
    question: "Which function is the entry point of a C program?",
    options: ["start()", "main()", "run()", "init()"],
    correctIndex: 1,
  },
  {
    question: "Which operator is used to get the address of a variable?",
    options: ["*", "&", "%", "#"],
    correctIndex: 1,
  },
  {
    question: "Which operator is used to access the value at an address?",
    options: ["*", "&", "%", "#"],
    correctIndex: 0,
  },
  {
    question: "What is a pointer in C?",
    options: [
      "A keyword",
      "A variable storing an address",
      "A loop",
      "A function",
    ],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to define structures?",
    options: ["class", "object", "struct", "record"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to define unions?",
    options: ["merge", "union", "combine", "struct"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to define enumerations?",
    options: ["enum", "enumerate", "const", "typedef"],
    correctIndex: 0,
  },
  {
    question: "Which library function calculates string length?",
    options: ["strlen()", "length()", "size()", "count()"],
    correctIndex: 0,
  },
  {
    question: "Which function copies one string to another?",
    options: ["copy()", "strcopy()", "strcpy()", "assign()"],
    correctIndex: 2,
  },
  {
    question: "Which function compares two strings?",
    options: ["strcmp()", "compare()", "check()", "equal()"],
    correctIndex: 0,
  },
  {
    question:
      "Which storage class keeps variable value between function calls?",
    options: ["auto", "register", "static", "extern"],
    correctIndex: 2,
  },
  {
    question: "Which keyword declares external variables?",
    options: ["global", "extern", "external", "static"],
    correctIndex: 1,
  },
  {
    question: "Which loop executes at least once?",
    options: ["for", "while", "do-while", "foreach"],
    correctIndex: 2,
  },
  {
    question: "Which statement skips the current loop iteration?",
    options: ["pass", "continue", "skip", "next"],
    correctIndex: 1,
  },
  {
    question: "Which symbol is used for preprocessor directives?",
    options: ["$", "@", "#", "%"],
    correctIndex: 2,
  },
  {
    question: "Which function dynamically allocates memory?",
    options: ["alloc()", "malloc()", "memory()", "new()"],
    correctIndex: 1,
  },
  {
    question: "Which function frees dynamically allocated memory?",
    options: ["remove()", "delete()", "free()", "clear()"],
    correctIndex: 2,
  },
  {
    question: "Which operator is used for modulus operation?",
    options: ["/", "%", "//", "**"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to define no return value?",
    options: ["null", "void", "empty", "none"],
    correctIndex: 1,
  },
  {
    question: "Which function opens a file in C?",
    options: ["open()", "fopen()", "file()", "load()"],
    correctIndex: 1,
  },
  {
    question: "Which mode is used to read a file?",
    options: ["w", "a", "r", "x"],
    correctIndex: 2,
  },
  {
    question: "Which mode is used to append data to a file?",
    options: ["r", "w", "a", "x"],
    correctIndex: 2,
  },
  {
    question: "Which function closes a file?",
    options: ["close()", "fclose()", "end()", "shutdown()"],
    correctIndex: 1,
  },
  {
    question: "Which header file contains malloc()?",
    options: ["stdio.h", "math.h", "stdlib.h", "string.h"],
    correctIndex: 2,
  },
  {
    question: "Which operator increases a variable by 1?",
    options: ["+", "--", "++", "**"],
    correctIndex: 2,
  },
  {
    question: "Which operator decreases a variable by 1?",
    options: ["+", "--", "++", "**"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used for type definition aliases?",
    options: ["typedef", "define", "alias", "rename"],
    correctIndex: 0,
  },
  {
    question: "Which data structure stores multiple values of same type?",
    options: ["Array", "Pointer", "Function", "Structure"],
    correctIndex: 0,
  },
  {
    question: "Which function calculates square root values?",
    options: ["sqrt()", "pow()", "root()", "square()"],
    correctIndex: 0,
  },
  {
    question: "Which library contains mathematical functions?",
    options: ["math.h", "calc.h", "stdlib.h", "stdio.h"],
    correctIndex: 0,
  },
  {
    question: "Which operator is used for bitwise AND?",
    options: ["&&", "&", "|", "^"],
    correctIndex: 1,
  },
  {
    question: "Which operator is used for bitwise OR?",
    options: ["||", "|", "&", "^"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to jump to a labeled statement?",
    options: ["goto", "jump", "label", "break"],
    correctIndex: 0,
  },
  {
    question: "Which statement is true about C language?",
    options: [
      "C is platform dependent only",
      "C supports low-level programming",
      "C does not support functions",
      "C is purely object-oriented",
    ],
    correctIndex: 1,
  },
];

export const loadCQuiz = async (): Promise<QuizModule> => ({
  meta: cQuizMeta,
  questions: cQuizQuestions,
});
