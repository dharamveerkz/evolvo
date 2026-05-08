import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const tsQuizMeta: QuizMeta = {
  id: "typescript",
  category: "webdev",
  subcategory: "typescript",
  title: "TypeScript Mastery",
  description:
    "Master static typing, Interfaces, Generics, and React integration",
  icon: "🔷",
  level: "Intermediate",
  questionCount: 50,
  color: "#3178c6",
  featured: true,
  rating: 5,
  passThreshold: 35,
  showCertificate: true,
  estimatedTime: "25 min",
};

export const tsQuizQuestions: QuizQuestion[] = [
  {
    question:
      "What is the primary benefit of using TypeScript over JavaScript?",
    options: [
      "It makes the code run faster in the browser",
      "It provides static type checking to catch errors at compile-time",
      "It removes the need for CSS",
      "It automatically minifies code",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which type is used when you don't want to specify a particular type for a variable?",
    options: ["unknown", "any", "never", "void"],
    correctIndex: 1,
  },
  {
    question: "What is the difference between 'interface' and 'type' alias?",
    options: [
      "Interfaces are only for classes",
      "Type aliases can define unions and primitives, while interfaces are primarily for object shapes and are extendable",
      "There is no difference",
      "Interfaces are removed in the final JavaScript",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you define an optional property in an interface?",
    options: ["property!", "property?", "optional property", "property: void"],
    correctIndex: 1,
  },
  {
    question: "What are Generics in TypeScript?",
    options: [
      "Types that are only used for numbers",
      "A way to create reusable components that work with a variety of types",
      "A specific type of array",
      "The default types like string and boolean",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which utility type makes all properties of an interface optional?",
    options: ["Omit", "Pick", "Partial", "Readonly"],
    correctIndex: 2,
  },
  {
    question:
      "Which utility type allows you to create a new type by choosing specific keys from an existing one?",
    options: ["Extract", "Pick", "Exclude", "Partial"],
    correctIndex: 1,
  },
  {
    question:
      "Which utility type creates a new type by removing specific keys from an existing one?",
    options: ["Remove", "Pick", "Omit", "Delete"],
    correctIndex: 2,
  },
  {
    question: "How do you type a React functional component using TypeScript?",
    options: [
      "React.FC or React.FunctionComponent",
      "React.Component",
      "const Component: HTML",
      "const Component: JSX",
    ],
    correctIndex: 0,
  },
  {
    question:
      "What is the correct way to type a click event in a React button component?",
    options: [
      "e: Event",
      "e: React.MouseEvent<HTMLButtonElement>",
      "e: MouseEvent",
      "e: any",
    ],
    correctIndex: 1,
  },
  {
    question: "What does the 'unknown' type represent?",
    options: [
      "A type that is identical to any",
      "A type-safe version of any that requires a type check before performing operations",
      "A type for variables that will never have a value",
      "A type used only for API responses",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a 'Union Type' in TypeScript?",
    options: [
      "A type that combines multiple interfaces",
      "A value that can be one of several types (e.g., string | number)",
      "A type used for database joins",
      "A type that only allows strings",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you define an array of strings in TypeScript?",
    options: ["string[]", "Array<string>", "list[string]", "Both 0 and 1"],
    correctIndex: 3,
  },
  {
    question: "What is the 'never' type used for?",
    options: [
      "For variables that are null",
      "To represent values that will never occur (e.g., a function that always throws an error)",
      "For optional parameters",
      "To disable a variable",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Type Assertion' (using the 'as' keyword)?",
    options: [
      "A way to change the actual value of a variable",
      "Telling the compiler to treat a value as a specific type",
      "A method to convert strings to numbers",
      "A way to check if a type exists at runtime",
    ],
    correctIndex: 1,
  },
  {
    question:
      "How do you type the return value of a function that doesn't return anything?",
    options: ["null", "undefined", "void", "never"],
    correctIndex: 2,
  },
  {
    question: "Which TypeScript file configuration manages compiler options?",
    options: ["package.json", "tsconfig.json", "ts-config.js", "types.d.ts"],
    correctIndex: 1,
  },
  {
    question: "What are 'Tuples' in TypeScript?",
    options: [
      "Arrays with a fixed number of elements and specific types at each position",
      "A type of object",
      "A mathematical function",
      "A way to loop through data",
    ],
    correctIndex: 0,
  },
  {
    question:
      "How do you define a constant that cannot be changed in TypeScript (at the type level)?",
    options: ["let", "readonly", "static", "fixed"],
    correctIndex: 1,
  },
  {
    question: "What is an 'Enum'?",
    options: [
      "A way to define a set of named constants",
      "A loop structure",
      "A type of CSS class",
      "An asynchronous function",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Which operator is used to check if a property exists in an object (Type Guarding)?",
    options: ["has", "exists", "in", "typeof"],
    correctIndex: 2,
  },
  {
    question: "What is the purpose of '.d.ts' files?",
    options: [
      "To write actual JavaScript code",
      "To hold type definitions without implementation code",
      "To store data in JSON format",
      "To debug TypeScript errors",
    ],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to extend an interface?",
    options: ["extends", "implements", "inherits", "plus"],
    correctIndex: 0,
  },
  {
    question: "How do you define a Generic function?",
    options: [
      "function name(T) {}",
      "function name<T>(arg: T): T {}",
      "function name(arg: any) {}",
      "function<Generic> name() {}",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Intersection Type' (&)?",
    options: [
      "A type that can be one of two things",
      "A type that combines multiple types into one (must satisfy all)",
      "A way to compare types",
      "A type for mathematical intersections",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you type the 'children' prop in a React component?",
    options: [
      "children: string",
      "children: React.ReactNode",
      "children: JSX.Element",
      "children: any",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Type Narrowing'?",
    options: [
      "Reducing the number of variables in a file",
      "Moving from a less specific type to a more specific type using logic",
      "Deleting types to save memory",
      "Restricting an interface to one property",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which TypeScript feature allows you to extract the type of a variable or property?",
    options: ["typeof", "keyof", "instanceof", "typeget"],
    correctIndex: 0,
  },
  {
    question: "What does the 'keyof' operator do?",
    options: [
      "Returns the values of an object",
      "Creates a union type of all keys in an object type",
      "Checks if a key is present",
      "Lists the methods of a class",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the 'Record' utility type used for?",
    options: [
      "To record a video",
      "To construct an object type with specific keys and a specific value type",
      "To save data to a database",
      "To keep a log of type changes",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which React hook needs a generic type for complex state (e.g., an object that might be null)?",
    options: [
      "useState<User | null>(null)",
      "useEffect()",
      "useRef()",
      "Both 0 and 2",
    ],
    correctIndex: 3,
  },
  {
    question: "How do you type a change event for an HTML input element?",
    options: [
      "e: ChangeEvent",
      "e: React.ChangeEvent<HTMLInputElement>",
      "e: FormEvent",
      "e: InputEvent",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a 'Mapped Type'?",
    options: [
      "A type that creates a Map object",
      "A way to create new types based on an old one by transforming properties",
      "A type used for geographic coordinates",
      "A list of all types in a project",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which keyword allows a class to ensure it adheres to an interface structure?",
    options: ["extends", "implements", "adheres", "follows"],
    correctIndex: 1,
  },
  {
    question:
      "What happens if you try to assign a string to a variable typed as number?",
    options: [
      "It works fine",
      "TypeScript throws a compilation error",
      "The string is converted to a number",
      "The program crashes at runtime",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which utility type makes all properties of an object 'readonly'?",
    options: ["Readonly<T>", "Final<T>", "Const<T>", "Locked<T>"],
    correctIndex: 0,
  },
  {
    question:
      "How do you define a type that is exactly one of three specific strings?",
    options: [
      "type Direction = 'Up' | 'Down' | 'Left'",
      "interface Direction { val: 'Up' }",
      "type Direction = string",
      "enum Direction { Up }",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'strict' mode in tsconfig.json?",
    options: [
      "It enables JavaScript strict mode only",
      "It enables a suite of type-checking behaviors that result in stronger guarantees of program correctness",
      "It prevents the use of comments",
      "It makes the compiler run slower",
    ],
    correctIndex: 1,
  },
  {
    question: "Which operator is used for 'Optional Chaining'?",
    options: ["??", "?.", "!!", "&&"],
    correctIndex: 1,
  },
  {
    question: "What is the 'Nullish Coalescing' operator?",
    options: ["?.", "&&", "??", "||"],
    correctIndex: 2,
  },
  {
    question:
      "How do you type a function that accepts any number of arguments as an array?",
    options: [
      "(...args: any[])",
      "(args: Array)",
      "(args: ...any)",
      "function(any)",
    ],
    correctIndex: 0,
  },
  {
    question: "What is the default visibility of class members in TypeScript?",
    options: ["private", "protected", "public", "internal"],
    correctIndex: 2,
  },
  {
    question:
      "Which keyword is used to prevent a class member from being accessed outside the class?",
    options: ["hidden", "private", "secret", "locked"],
    correctIndex: 1,
  },
  {
    question:
      "How do you use an Interface to type an object with dynamic keys?",
    options: [
      "{ [key: string]: number }",
      "{ key: any }",
      "interface Dynamic { keys: string[] }",
      "type Dynamic = Map<string, any>",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Which utility type extracts types from a union that are assignable to another type?",
    options: ["Extract<T, U>", "Exclude<T, U>", "Pick<T, U>", "Omit<T, U>"],
    correctIndex: 0,
  },
  {
    question:
      "Which utility type excludes types from a union that are assignable to another type?",
    options: ["Extract<T, U>", "Exclude<T, U>", "Omit<T, U>", "NonNullable<T>"],
    correctIndex: 1,
  },
  {
    question: "What does 'non-null assertion operator' (!) do?",
    options: [
      "Converts a value to boolean",
      "Tells the compiler that a value is definitely not null or undefined",
      "Checks if a variable is empty",
      "Throws an error if the value is null",
    ],
    correctIndex: 1,
  },
  {
    question:
      "How can you make a property of a type required, even if it was optional in the original type?",
    options: ["Required<T>", "Partial<T>", "Pick<T>", "Omit<T>"],
    correctIndex: 0,
  },
  {
    question: "What is the purpose of 'as const' (const assertions)?",
    options: [
      "To declare a variable as const",
      "To signal to the compiler that an expression has a literal type that shouldn't be widened",
      "To prevent garbage collection",
      "To make an object immutable at runtime",
    ],
    correctIndex: 1,
  },
  {
    question: "Which utility type extracts the return type of a function type?",
    options: ["ReturnType<T>", "FunctionType<T>", "GetReturn<T>", "Result<T>"],
    correctIndex: 0,
  },
];

export const loadTsQuiz = async (): Promise<QuizModule> => ({
  meta: tsQuizMeta,
  questions: tsQuizQuestions,
});
