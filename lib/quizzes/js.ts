import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const jsQuizMeta: QuizMeta = {
  id: "javascript",
  category: "webdev",
  subcategory: "javascript",
  title: "JavaScript Mastery",
  description: "Test your knowledge of ES6+, DOM manipulation, and Async JS",
  icon: "🟨",
  level: "Beginner",
  questionCount: 50,
  color: "#f7df1e",
  featured: true,
  rating: 5,
  passThreshold: 35,
  showCertificate: true,
  estimatedTime: "30 min",
};

export const jsQuizQuestions: QuizQuestion[] = [
  {
    question:
      "Which keyword is used to declare a block-scoped variable that can be reassigned?",
    options: ["var", "let", "const", "fixed"],
    correctIndex: 1,
  },
  {
    question: "What is the result of '2' + 2 in JavaScript?",
    options: ["4", "22", "NaN", "Error"],
    correctIndex: 1,
  },
  {
    question: "Which arrow function syntax is correct?",
    options: ["() => {}", "function => {}", "arg -> {}", "() =>> {}"],
    correctIndex: 0,
  },
  {
    question: "What does the 'map()' array method return?",
    options: [
      "A single value",
      "The original array",
      "A new array with transformed elements",
      "A boolean",
    ],
    correctIndex: 2,
  },
  {
    question: "Which method is used to remove the last element from an array?",
    options: ["shift()", "unshift()", "push()", "pop()"],
    correctIndex: 3,
  },
  {
    question: "What is the purpose of the 'filter()' method?",
    options: [
      "To change every element",
      "To sort the array",
      "To create a new array with elements that pass a test",
      "To empty the array",
    ],
    correctIndex: 2,
  },
  {
    question:
      "Which keyword is used to wait for a Promise to resolve inside an async function?",
    options: ["wait", "hold", "await", "defer"],
    correctIndex: 2,
  },
  {
    question: "What is the correct way to write a template literal?",
    options: [
      "'Hello ${name}'",
      '"Hello ${name}"',
      "`Hello ${name}`",
      "<Hello ${name}>",
    ],
    correctIndex: 2,
  },
  {
    question: "Which method is used to select an element by its ID?",
    options: [
      "querySelector()",
      "getElementById()",
      "getElementByClass()",
      "pickId()",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you add a click event listener to a button?",
    options: [
      "button.onclick()",
      "button.addEvent('click')",
      "button.addEventListener('click', fn)",
      "button.listen('click')",
    ],
    correctIndex: 2,
  },
  {
    question: "What does the 'fetch()' API return?",
    options: [
      "The actual data",
      "A JSON string",
      "A Promise",
      "An XML document",
    ],
    correctIndex: 2,
  },
  {
    question: "Which method converts a JavaScript object into a JSON string?",
    options: [
      "JSON.parse()",
      "JSON.convert()",
      "JSON.stringify()",
      "JSON.toString()",
    ],
    correctIndex: 2,
  },
  {
    question: "What is the use of the spread operator '...' in arrays?",
    options: [
      "To delete elements",
      "To expand an array into individual elements",
      "To sum elements",
      "To reverse an array",
    ],
    correctIndex: 1,
  },
  {
    question: "Which operator checks for both value and type equality?",
    options: ["==", "=", "===", "!=="],
    correctIndex: 2,
  },
  {
    question: "What is the value of 'null' in a boolean context?",
    options: ["true", "false", "undefined", "NaN"],
    correctIndex: 1,
  },
  {
    question: "Which array method reduces an array to a single value?",
    options: ["map", "filter", "reduce", "forEach"],
    correctIndex: 2,
  },
  {
    question: "How do you create a new element in the DOM?",
    options: [
      "document.newElement()",
      "document.createElement()",
      "element.add()",
      "document.build()",
    ],
    correctIndex: 1,
  },
  {
    question: "What does 'DOM' stand for?",
    options: [
      "Data Object Model",
      "Document Object Model",
      "Digital Object Management",
      "Document Order Model",
    ],
    correctIndex: 1,
  },
  {
    question: "Which statement is used to handle errors in async code?",
    options: ["try...catch", "if...else", "error...handle", "throw...new"],
    correctIndex: 0,
  },
  {
    question: "What is the default value of an uninitialized variable?",
    options: ["null", "0", "undefined", "NaN"],
    correctIndex: 2,
  },
  {
    question: "How do you add a class to an element?",
    options: [
      "el.class = 'new'",
      "el.classList.add('new')",
      "el.addClass('new')",
      "el.style.class = 'new'",
    ],
    correctIndex: 1,
  },
  {
    question: "Which method is used to combine two or more arrays?",
    options: ["append()", "concat()", "attach()", "join()"],
    correctIndex: 1,
  },
  {
    question: "What is the result of typeof NaN?",
    options: ["'number'", "'string'", "'NaN'", "'undefined'"],
    correctIndex: 0,
  },
  {
    question:
      "Which ES6 feature allows you to extract properties from objects into variables?",
    options: ["Extraction", "Destructuring", "Spreading", "Mapping"],
    correctIndex: 1,
  },
  {
    question: "What does 'self' refer to in a global scope in a browser?",
    options: ["The function", "The Window object", "The document", "The user"],
    correctIndex: 1,
  },
  {
    question:
      "Which function is used to execute a piece of code after a specified delay?",
    options: ["setInterval()", "wait()", "setTimeout()", "delay()"],
    correctIndex: 2,
  },
  {
    question: "How can you find the number of elements in an array?",
    options: ["array.count", "array.size", "array.length", "array.index"],
    correctIndex: 2,
  },
  {
    question: "What does 'Promise.all()' do?",
    options: [
      "Resolves the first promise",
      "Resolves when all promises in an array resolve",
      "Rejects all promises",
      "Runs promises sequentially",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which property is used to change the internal HTML of an element?",
    options: ["textContent", "innerText", "innerHTML", "htmlContent"],
    correctIndex: 2,
  },
  {
    question: "What is a 'closure' in JavaScript?",
    options: [
      "A way to close the browser",
      "A function with access to its outer scope",
      "A private class",
      "A loop that never ends",
    ],
    correctIndex: 1,
  },
  {
    question: "Which keyword is used to inherit a class in ES6?",
    options: ["inherits", "extends", "prototype", "parent"],
    correctIndex: 1,
  },
  {
    question: "What does 'this' refer to inside an arrow function?",
    options: [
      "The function itself",
      "The object it belongs to",
      "The surrounding lexical scope",
      "The global object",
    ],
    correctIndex: 2,
  },
  {
    question:
      "Which method is used to find an element in an array that matches a condition?",
    options: ["find()", "search()", "locate()", "get()"],
    correctIndex: 0,
  },
  {
    question: "How do you prevent a form from submitting automatically?",
    options: ["e.stop()", "e.preventDefault()", "form.halt()", "return false"],
    correctIndex: 1,
  },
  {
    question: "What is the purpose of 'use strict'?",
    options: [
      "To speed up execution",
      "To enforce stricter parsing and error handling",
      "To enable ES6 features",
      "To allow global variables",
    ],
    correctIndex: 1,
  },
  {
    question: "Which method removes the first element from an array?",
    options: ["pop()", "shift()", "unshift()", "slice()"],
    correctIndex: 1,
  },
  {
    question: "What is an IIFE?",
    options: [
      "An internal function",
      "Immediately Invoked Function Expression",
      "Interactive Interface",
      "Inline Function",
    ],
    correctIndex: 1,
  },
  {
    question: "Which operator is used for exponentiation?",
    options: ["^", "exp", "**", "pow"],
    correctIndex: 2,
  },
  {
    question: "How do you check if an array includes a certain value?",
    options: ["contains()", "exists()", "includes()", "has()"],
    correctIndex: 2,
  },
  {
    question: "What does JSON stand for?",
    options: [
      "JavaScript Object Notation",
      "Java Standard Object Network",
      "JavaScript Online Node",
      "Joint System Object Name",
    ],
    correctIndex: 0,
  },
  {
    question: "Which property tells you the parent of a DOM node?",
    options: ["parent", "parentNode", "rootNode", "superNode"],
    correctIndex: 1,
  },
  {
    question: "What is the result of 10 / 0 in JavaScript?",
    options: ["Error", "0", "Infinity", "NaN"],
    correctIndex: 2,
  },
  {
    question: "Which method merges two objects in ES6?",
    options: [
      "Object.merge()",
      "Object.assign()",
      "Object.combine()",
      "Object.concat()",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the purpose of the 'finally' block in a promise chain?",
    options: [
      "To handle errors",
      "To run code regardless of success or failure",
      "To return data",
      "To stop execution",
    ],
    correctIndex: 1,
  },
  {
    question: "Which method converts a string to an integer?",
    options: ["Number()", "parseInt()", "toInteger()", "Both 0 and 1"],
    correctIndex: 3,
  },
  {
    question: "How do you select all elements with the class 'box'?",
    options: [
      "document.getElements('box')",
      "document.querySelectorAll('.box')",
      "document.get('.box')",
      "document.find('.box')",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which property is used to get the text content of an element without HTML tags?",
    options: ["innerHTML", "outerHTML", "textContent", "val()"],
    correctIndex: 2,
  },
  {
    question: "What is the result of 'false == 0'?",
    options: ["true", "false", "undefined", "NaN"],
    correctIndex: 0,
  },
  {
    question: "Which method creates a shallow copy of a portion of an array?",
    options: ["splice()", "slice()", "cut()", "split()"],
    correctIndex: 1,
  },
  {
    question: "What does 'const' prevent?",
    options: [
      "Reassignment of the variable name",
      "Mutation of an object's properties",
      "Accessing the variable",
      "Hoisting",
    ],
    correctIndex: 0,
  },
];

export const loadJsQuiz = async (): Promise<QuizModule> => ({
  meta: jsQuizMeta,
  questions: jsQuizQuestions,
});
