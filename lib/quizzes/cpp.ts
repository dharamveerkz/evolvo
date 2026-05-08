import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const cppQuizMeta: QuizMeta = {
  id: "cpp-basics",
  category: "programming",
  subcategory: "cpp",
  title: "C++ Basics",
  description:
    "Test your knowledge of C++ fundamentals, OOP concepts, syntax, and STL basics.",
  icon: "⚡",
  level: "Beginner",
  questionCount: 50,
  color: "#00599c",
  featured: true,
  rating: 5,
  estimatedTime: "25 min",
  passThreshold: 25,
  showCertificate: true,
};

export const cppQuizQuestions: QuizQuestion[] = [
  {
    question: "Who developed C++?",
    options: [
      "Dennis Ritchie",
      "James Gosling",
      "Bjarne Stroustrup",
      "Guido van Rossum",
    ],
    correctIndex: 2,
  },
  {
    question: "Which symbol is used for single-line comments in C++?",
    options: ["#", "//", "/*", "<!--"],
    correctIndex: 1,
  },
  {
    question: "Which header file is used for input and output in C++?",
    options: ["stdio.h", "iostream", "stdlib.h", "string"],
    correctIndex: 1,
  },
  {
    question: "Which object is used for output in C++?",
    options: ["cin", "cout", "print", "echo"],
    correctIndex: 1,
  },
  {
    question: "Which object is used for input in C++?",
    options: ["scanf", "cin", "input", "read"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to define a class?",
    options: ["Class", "object", "class", "define"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used for inheritance?",
    options: ["inherits", "extends", "super", "public"],
    correctIndex: 3,
  },
  {
    question: "Which function is the entry point of a C++ program?",
    options: ["start()", "run()", "main()", "init()"],
    correctIndex: 2,
  },
  {
    question: "Which symbol ends statements in C++?",
    options: [":", ".", ";", ","],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to create objects dynamically?",
    options: ["malloc", "alloc", "new", "create"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to free dynamically allocated memory?",
    options: ["free", "remove", "delete", "clear"],
    correctIndex: 2,
  },
  {
    question: "Which access specifier makes members accessible everywhere?",
    options: ["private", "protected", "public", "internal"],
    correctIndex: 2,
  },
  {
    question: "Which access specifier restricts access within the class only?",
    options: ["public", "private", "protected", "global"],
    correctIndex: 1,
  },
  {
    question: "Which keyword refers to the current object?",
    options: ["self", "this", "current", "super"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used for constants?",
    options: ["constant", "const", "fixed", "static"],
    correctIndex: 1,
  },
  {
    question: "Which operator is used for scope resolution?",
    options: [".", "::", "->", ":"],
    correctIndex: 1,
  },
  {
    question: "Which operator is used to access members through pointers?",
    options: [".", "::", "->", "&"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used for function overriding?",
    options: ["override", "virtual", "extends", "friend"],
    correctIndex: 1,
  },
  {
    question: "Which keyword creates abstract classes in C++?",
    options: ["abstract", "virtual", "pure", "No special keyword"],
    correctIndex: 3,
  },
  {
    question: "Which concept allows multiple functions with same name?",
    options: ["Overloading", "Overriding", "Inheritance", "Encapsulation"],
    correctIndex: 0,
  },
  {
    question: "Which operator is overloaded for stream output?",
    options: [">>", "<<", "::", "&&"],
    correctIndex: 1,
  },
  {
    question: "Which operator is overloaded for stream input?",
    options: [">>", "<<", "::", "||"],
    correctIndex: 0,
  },
  {
    question: "Which container stores duplicate elements in STL?",
    options: ["set", "map", "vector", "unordered_set"],
    correctIndex: 2,
  },
  {
    question: "Which STL container does not allow duplicates?",
    options: ["vector", "list", "set", "deque"],
    correctIndex: 2,
  },
  {
    question: "Which loop is commonly used for fixed iterations?",
    options: ["while", "for", "repeat", "loop"],
    correctIndex: 1,
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
    question: "Which keyword is used to define namespaces?",
    options: ["space", "namespace", "scope", "module"],
    correctIndex: 1,
  },
  {
    question: "Which namespace is commonly used for standard library objects?",
    options: ["core", "default", "std", "system"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used for exception handling?",
    options: ["error", "try", "catch", "throw"],
    correctIndex: 1,
  },
  {
    question: "Which keyword throws exceptions?",
    options: ["throw", "raise", "except", "error"],
    correctIndex: 0,
  },
  {
    question: "Which block catches exceptions?",
    options: ["try", "catch", "finally", "throw"],
    correctIndex: 1,
  },
  {
    question: "Which header file provides string class?",
    options: ["cstring", "string", "text", "str"],
    correctIndex: 1,
  },
  {
    question: "Which data type stores whole numbers?",
    options: ["float", "char", "int", "double"],
    correctIndex: 2,
  },
  {
    question: "Which data type stores decimal values?",
    options: ["bool", "int", "float", "char"],
    correctIndex: 2,
  },
  {
    question: "Which keyword defines no return value?",
    options: ["null", "empty", "void", "none"],
    correctIndex: 2,
  },
  {
    question: "Which operator gets the address of a variable?",
    options: ["*", "&", "%", "#"],
    correctIndex: 1,
  },
  {
    question: "Which operator dereferences a pointer?",
    options: ["*", "&", "%", "@"],
    correctIndex: 0,
  },
  {
    question: "Which keyword is used to inherit privately?",
    options: ["private", "protected", "public", "friend"],
    correctIndex: 0,
  },
  {
    question: "Which keyword is used to prevent inheritance?",
    options: ["const", "final", "static", "sealed"],
    correctIndex: 1,
  },
  {
    question: "Which file extension is used for C++ source files?",
    options: [".cpp", ".class", ".java", ".py"],
    correctIndex: 0,
  },
  {
    question: "Which function calculates square roots?",
    options: ["pow()", "sqrt()", "root()", "square()"],
    correctIndex: 1,
  },
  {
    question: "Which header file contains mathematical functions?",
    options: ["math", "cmath", "calc", "stdlib"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to define templates?",
    options: ["generic", "template", "typename", "class"],
    correctIndex: 1,
  },
  {
    question: "Which STL container works like a dynamic array?",
    options: ["set", "queue", "vector", "map"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to define friend functions?",
    options: ["ally", "partner", "friend", "associate"],
    correctIndex: 2,
  },
  {
    question: "Which concept combines data and methods together?",
    options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
    correctIndex: 1,
  },
  {
    question: "Which statement is true about C++?",
    options: [
      "C++ is procedural only",
      "C++ supports OOP",
      "C++ does not support templates",
      "C++ cannot use pointers",
    ],
    correctIndex: 1,
  },
];

export const loadCppQuiz = async (): Promise<QuizModule> => ({
  meta: cppQuizMeta,
  questions: cppQuizQuestions,
});
