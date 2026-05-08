import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const javaQuizMeta: QuizMeta = {
  id: "java-basics",
  category: "programming",
  subcategory: "java",
  title: "Java Basics",
  description:
    "Test your knowledge of Java fundamentals, OOP concepts, and syntax.",
  icon: "☕",
  level: "Beginner",
  questionCount: 50,
  color: "#f89820",
  featured: true,
  rating: 5,
  estimatedTime: "25 min",
  passThreshold: 25,
  showCertificate: true,
};

export const javaQuizQuestions: QuizQuestion[] = [
  {
    question: "Who developed Java?",
    options: [
      "Dennis Ritchie",
      "James Gosling",
      "Guido van Rossum",
      "Bjarne Stroustrup",
    ],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to define a class in Java?",
    options: ["class", "Class", "define", "object"],
    correctIndex: 0,
  },
  {
    question: "Which method is the entry point of a Java program?",
    options: ["start()", "run()", "main()", "init()"],
    correctIndex: 2,
  },
  {
    question: "Which symbol is used to end statements in Java?",
    options: [":", ".", ";", ","],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    options: ["inherits", "implements", "extends", "super"],
    correctIndex: 2,
  },
  {
    question: "Which data type stores whole numbers?",
    options: ["float", "char", "int", "boolean"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to create an object?",
    options: ["create", "new", "object", "make"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used for conditional statements?",
    options: ["if", "when", "case", "switchif"],
    correctIndex: 0,
  },
  {
    question: "Which loop is best for iterating a fixed number of times?",
    options: ["while", "for", "loop", "repeat"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to stop a loop?",
    options: ["exit", "return", "break", "stop"],
    correctIndex: 2,
  },
  {
    question: "Which operator is used for comparison?",
    options: ["=", "==", ":=", "=>"],
    correctIndex: 1,
  },
  {
    question: "Which data type stores true or false values?",
    options: ["bool", "boolean", "logical", "bit"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to define constants?",
    options: ["constant", "final", "static", "fixed"],
    correctIndex: 1,
  },
  {
    question: "Which package is automatically imported in Java?",
    options: ["java.io", "java.util", "java.lang", "java.net"],
    correctIndex: 2,
  },
  {
    question: "Which keyword refers to the current object?",
    options: ["self", "current", "this", "super"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to call the parent class constructor?",
    options: ["parent", "base", "super", "this"],
    correctIndex: 2,
  },
  {
    question: "Which access modifier makes members accessible everywhere?",
    options: ["private", "protected", "default", "public"],
    correctIndex: 3,
  },
  {
    question: "Which keyword is used to handle exceptions?",
    options: ["catch", "try", "throw", "final"],
    correctIndex: 1,
  },
  {
    question: "Which block always executes in exception handling?",
    options: ["except", "finally", "throw", "default"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to throw exceptions?",
    options: ["throws", "error", "throw", "catch"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used in method overriding?",
    options: ["override", "@Override", "virtual", "extends"],
    correctIndex: 1,
  },
  {
    question: "Which collection stores duplicate elements?",
    options: ["Set", "Map", "List", "HashSet"],
    correctIndex: 2,
  },
  {
    question: "Which collection does not allow duplicates?",
    options: ["ArrayList", "LinkedList", "Set", "Vector"],
    correctIndex: 2,
  },
  {
    question: "Which class is used to take user input?",
    options: ["Input", "Scanner", "Reader", "ConsoleInput"],
    correctIndex: 1,
  },
  {
    question: "Which package contains Scanner class?",
    options: ["java.io", "java.util", "java.lang", "java.text"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used for interfaces?",
    options: ["interface", "implements", "abstract", "extends"],
    correctIndex: 0,
  },
  {
    question: "Which keyword is used to implement an interface?",
    options: ["inherits", "extends", "implements", "instanceof"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used for abstraction?",
    options: ["virtual", "abstract", "hidden", "static"],
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
    question: "Which keyword is used to import packages?",
    options: ["include", "using", "import", "require"],
    correctIndex: 2,
  },
  {
    question: "Which function prints output in Java?",
    options: ["print()", "System.out.print()", "echo()", "console.log()"],
    correctIndex: 1,
  },
  {
    question: "Which method prints output with a new line?",
    options: [
      "System.out.println()",
      "System.print()",
      "printline()",
      "echo()",
    ],
    correctIndex: 0,
  },
  {
    question: "Which data structure stores key-value pairs?",
    options: ["List", "Set", "Map", "Array"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to return a value?",
    options: ["send", "yield", "return", "output"],
    correctIndex: 2,
  },
  {
    question:
      "Which type of inheritance is not supported with classes in Java?",
    options: ["Single", "Multilevel", "Hierarchical", "Multiple"],
    correctIndex: 3,
  },
  {
    question: "Which class is the parent of all Java classes?",
    options: ["Main", "Object", "Parent", "Base"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to create subclasses?",
    options: ["extends", "implements", "inherits", "super"],
    correctIndex: 0,
  },
  {
    question: "Which keyword prevents inheritance?",
    options: ["constant", "static", "final", "private"],
    correctIndex: 2,
  },
  {
    question: "Which memory area stores objects in Java?",
    options: ["Stack", "Heap", "Cache", "Register"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used for multithreading?",
    options: ["thread", "Runnable", "synchronized", "async"],
    correctIndex: 2,
  },
  {
    question: "Which class is used to create threads?",
    options: ["Process", "Thread", "Runnable", "Executor"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to synchronize methods?",
    options: ["sync", "synchronized", "threadsafe", "lock"],
    correctIndex: 1,
  },
  {
    question: "Which operator is used to create objects dynamically?",
    options: ["new", "malloc", "alloc", "create"],
    correctIndex: 0,
  },
  {
    question: "Which file extension is used for Java source files?",
    options: [".java", ".jav", ".class", ".jar"],
    correctIndex: 0,
  },
  {
    question: "Which file extension contains compiled Java bytecode?",
    options: [".java", ".class", ".jar", ".byte"],
    correctIndex: 1,
  },
  {
    question: "Which JVM component executes bytecode?",
    options: ["Compiler", "Interpreter", "Assembler", "Loader"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to check object type?",
    options: ["typeof", "instanceof", "check", "is"],
    correctIndex: 1,
  },
  {
    question: "Which method converts a string to integer?",
    options: ["Integer.parseInt()", "toInt()", "parse()", "convertInt()"],
    correctIndex: 0,
  },
  {
    question: "Which statement is true about Java?",
    options: [
      "Java is platform dependent",
      "Java supports OOP",
      "Java does not use JVM",
      "Java is procedural only",
    ],
    correctIndex: 1,
  },
];

export const loadJavaQuiz = async (): Promise<QuizModule> => ({
  meta: javaQuizMeta,
  questions: javaQuizQuestions,
});
