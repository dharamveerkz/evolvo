import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const pythonQuizMeta: QuizMeta = {
  id: "python-basics",
  category: "programming",
  subcategory: "python",
  title: "Python Mastery",
  description:
    "Test your knowledge of Python fundamentals, syntax, and programming concepts.",
  icon: "🐍",
  level: "Beginner",
  questionCount: 50,
  color: "#3776ab",
  featured: true,
  rating: 5,
  estimatedTime: "25 min",
  passThreshold: 25,
  showCertificate: true,
};

export const pythonQuizQuestions: QuizQuestion[] = [
  {
    question: "Who developed Python language?",
    options: [
      "Dennis Ritchie",
      "James Gosling",
      "Guido van Rossum",
      "Bjarne Stroustrup",
    ],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["func", "define", "def", "function"],
    correctIndex: 2,
  },
  {
    question: "Which symbol is used for comments in Python?",
    options: ["//", "/*", "#", "<!--"],
    correctIndex: 2,
  },
  {
    question: "Which data type is immutable?",
    options: ["List", "Dictionary", "Set", "Tuple"],
    correctIndex: 3,
  },
  {
    question: "Which function is used to print output in Python?",
    options: ["echo()", "print()", "output()", "show()"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used for conditional statements?",
    options: ["when", "if", "case", "switch"],
    correctIndex: 1,
  },
  {
    question: "Which loop is used to iterate over a sequence?",
    options: ["for", "repeat", "loop", "iterate"],
    correctIndex: 0,
  },
  {
    question: "Which keyword is used to exit a loop?",
    options: ["stop", "exit", "break", "return"],
    correctIndex: 2,
  },
  {
    question: "Which operator is used for exponentiation?",
    options: ["^", "**", "//", "%"],
    correctIndex: 1,
  },
  {
    question: "What is the correct file extension for Python files?",
    options: [".pt", ".pyt", ".py", ".python"],
    correctIndex: 2,
  },
  {
    question: "Which function is used to get user input?",
    options: ["scan()", "input()", "read()", "get()"],
    correctIndex: 1,
  },
  {
    question: "Which data type stores True or False values?",
    options: ["int", "str", "bool", "float"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to create a class?",
    options: ["object", "struct", "class", "define"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to inherit a class?",
    options: ["inherits", "extends", "super", "No keyword needed"],
    correctIndex: 3,
  },
  {
    question: "Which collection type stores key-value pairs?",
    options: ["List", "Tuple", "Set", "Dictionary"],
    correctIndex: 3,
  },
  {
    question: "Which method adds an item to a list?",
    options: ["insert()", "push()", "append()", "add()"],
    correctIndex: 2,
  },
  {
    question: "Which method removes an item from a list?",
    options: ["delete()", "remove()", "discard()", "clear()"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to handle exceptions?",
    options: ["catch", "error", "try", "final"],
    correctIndex: 2,
  },
  {
    question: "Which block always executes in exception handling?",
    options: ["except", "final", "finally", "default"],
    correctIndex: 2,
  },
  {
    question: "Which function returns the length of an object?",
    options: ["size()", "count()", "len()", "length()"],
    correctIndex: 2,
  },
  {
    question: "Which operator is used for equality comparison?",
    options: ["=", "==", "!=", "==="],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to import modules?",
    options: ["include", "using", "import", "require"],
    correctIndex: 2,
  },
  {
    question: "Which built-in function converts a string to integer?",
    options: ["str()", "float()", "int()", "bool()"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to define anonymous functions?",
    options: ["lambda", "anonymous", "func", "def"],
    correctIndex: 0,
  },
  {
    question: "Which data type does range() return?",
    options: ["list", "tuple", "range", "set"],
    correctIndex: 2,
  },
  {
    question: "Which method converts a string to lowercase?",
    options: ["lower()", "small()", "down()", "casefold()"],
    correctIndex: 0,
  },
  {
    question: "Which keyword is used to continue the next loop iteration?",
    options: ["next", "continue", "skip", "pass"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used as a placeholder in Python?",
    options: ["skip", "empty", "pass", "void"],
    correctIndex: 2,
  },
  {
    question: "Which function is used to open a file?",
    options: ["file()", "open()", "read()", "load()"],
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
    question: "Which keyword is used to return a value from a function?",
    options: ["output", "yield", "return", "send"],
    correctIndex: 2,
  },
  {
    question: "Which function is used to get the type of a variable?",
    options: ["type()", "typeof()", "datatype()", "var()"],
    correctIndex: 0,
  },
  {
    question: "Which symbol is used for floor division?",
    options: ["/", "%", "//", "**"],
    correctIndex: 2,
  },
  {
    question: "Which Python collection does not allow duplicate values?",
    options: ["List", "Tuple", "Dictionary", "Set"],
    correctIndex: 3,
  },
  {
    question: "Which keyword is used to define a generator?",
    options: ["return", "yield", "generate", "lambda"],
    correctIndex: 1,
  },
  {
    question: "Which method sorts a list in place?",
    options: ["arrange()", "sort()", "order()", "sorted()"],
    correctIndex: 1,
  },
  {
    question: "Which function creates an object iterator?",
    options: ["iter()", "next()", "loop()", "range()"],
    correctIndex: 0,
  },
  {
    question: "Which function gets the next item from an iterator?",
    options: ["iter()", "loop()", "next()", "fetch()"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to define asynchronous functions?",
    options: ["await", "async", "sync", "thread"],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used with async functions to wait?",
    options: ["wait", "pause", "await", "hold"],
    correctIndex: 2,
  },
  {
    question: "Which module is commonly used for mathematical operations?",
    options: ["random", "math", "calc", "numbers"],
    correctIndex: 1,
  },
  {
    question: "Which function generates random numbers?",
    options: ["math()", "rand()", "random()", "generate()"],
    correctIndex: 2,
  },
  {
    question:
      "Which statement is used to stop program execution with an error?",
    options: ["throw", "raise", "error", "stop"],
    correctIndex: 1,
  },
  {
    question: "Which keyword checks membership in a sequence?",
    options: ["inside", "contains", "has", "in"],
    correctIndex: 3,
  },
  {
    question: "Which operator is used for logical AND?",
    options: ["&&", "&", "and", "AND"],
    correctIndex: 2,
  },
  {
    question: "Which operator is used for logical OR?",
    options: ["||", "|", "or", "OR"],
    correctIndex: 2,
  },
  {
    question: "Which keyword is used to delete a variable?",
    options: ["remove", "delete", "del", "clear"],
    correctIndex: 2,
  },
  {
    question: "Which built-in function converts values into a list?",
    options: ["tuple()", "dict()", "set()", "list()"],
    correctIndex: 3,
  },
  {
    question: "Which statement is true about Python?",
    options: [
      "Python is compiled only",
      "Python is interpreted",
      "Python does not support OOP",
      "Python is not portable",
    ],
    correctIndex: 1,
  },
];

export const loadPythonQuiz = async (): Promise<QuizModule> => ({
  meta: pythonQuizMeta,
  questions: pythonQuizQuestions,
});
