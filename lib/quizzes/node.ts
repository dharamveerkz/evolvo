import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const nodeQuizMeta: QuizMeta = {
  id: "nodejs",
  category: "webdev",
  subcategory: "backend",
  title: "Node.js & Express",
  description:
    "Master server-side JS, REST APIs, Middleware, and JWT Authentication",
  icon: "🟢",
  level: "Intermediate",
  questionCount: 50,
  color: "#339933",
  featured: true,
  rating: 5,
  passThreshold: 35,
  showCertificate: true,
  estimatedTime: "25 min",
};

export const nodeQuizQuestions: QuizQuestion[] = [
  {
    question: "What is Node.js?",
    options: [
      "A frontend framework",
      "A JavaScript runtime built on Chrome's V8 engine",
      "A type of database",
      "A programming language",
    ],
    correctIndex: 1,
  },
  {
    question: "What is Express.js?",
    options: [
      "A database management tool",
      "A minimal and flexible Node.js web application framework",
      "A browser-based editor",
      "A CSS library",
    ],
    correctIndex: 0,
  },
  {
    question: "Which command is used to initialize a new Node.js project?",
    options: ["npm start", "npm init", "node start", "npm install"],
    correctIndex: 1,
  },
  {
    question: "What is the purpose of the 'package.json' file?",
    options: [
      "To store the app's images",
      "To list project dependencies, scripts, and metadata",
      "To write the backend logic",
      "To store the user's database",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which HTTP method is typically used to retrieve data from a server?",
    options: ["POST", "PUT", "GET", "DELETE"],
    correctIndex: 2,
  },
  {
    question:
      "Which HTTP method is used to create a new resource on the server?",
    options: ["GET", "POST", "UPDATE", "FETCH"],
    correctIndex: 1,
  },
  {
    question: "Which HTTP method is used to update an existing resource?",
    options: ["GET", "PUT", "ADD", "DELETE"],
    correctIndex: 1,
  },
  {
    question: "What does the HTTP status code 200 represent?",
    options: ["Created", "Internal Server Error", "OK (Success)", "Not Found"],
    correctIndex: 2,
  },
  {
    question: "Which status code is returned when a resource is not found?",
    options: ["400", "401", "404", "500"],
    correctIndex: 2,
  },
  {
    question: "What does the 500 status code mean?",
    options: [
      "Unauthorized",
      "Bad Request",
      "Internal Server Error",
      "Forbidden",
    ],
    correctIndex: 2,
  },
  {
    question: "What is Middleware in Express?",
    options: [
      "A type of database",
      "Functions that have access to the request, response, and the next function",
      "The user interface of the app",
      "A hardware component",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which function is called to pass control to the next middleware in the stack?",
    options: ["continue()", "next()", "forward()", "skip()"],
    correctIndex: 1,
  },
  {
    question: "What is the purpose of 'npm install'?",
    options: [
      "To run the project",
      "To download and install dependencies listed in package.json",
      "To create a new file",
      "To host the server",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you access URL parameters in Express (e.g., /user/:id)?",
    options: ["req.body", "req.params", "req.query", "req.url"],
    correctIndex: 1,
  },
  {
    question:
      "How do you access query string parameters (e.g., /search?q=node)?",
    options: ["req.params", "req.query", "req.body", "req.data"],
    correctIndex: 1,
  },
  {
    question: "What is JWT?",
    options: [
      "Java Web Tool",
      "JSON Web Token",
      "Joint Web Transmission",
      "JavaScript Work Task",
    ],
    correctIndex: 1,
  },
  {
    question: "Which part of a JWT contains the user's claims/data?",
    options: ["Header", "Payload", "Signature", "Footer"],
    correctIndex: 1,
  },
  {
    question: "What is the primary benefit of using JWT for authentication?",
    options: [
      "It encrypts the entire database",
      "It allows for stateless authentication",
      "It makes the website load faster",
      "It replaces the need for a server",
    ],
    correctIndex: 1,
  },
  {
    question:
      "In Express, which method is used to start the server and listen for connections?",
    options: ["app.start()", "app.listen()", "app.run()", "app.host()"],
    correctIndex: 1,
  },
  {
    question: "What is the purpose of 'dotenv' in a Node.js project?",
    options: [
      "To manage CSS",
      "To load environment variables from a .env file",
      "To optimize images",
      "To compress the code",
    ],
    correctIndex: 1,
  },
  {
    question: "Which status code represents 'Unauthorized' access?",
    options: ["403", "401", "400", "404"],
    correctIndex: 1,
  },
  {
    question:
      "Which status code represents 'Forbidden' access (even if logged in)?",
    options: ["401", "403", "503", "201"],
    correctIndex: 1,
  },
  {
    question: "How do you send a JSON response in Express?",
    options: ["res.send()", "res.json()", "res.write()", "res.output()"],
    correctIndex: 1,
  },
  {
    question:
      "What is 'body-parser' (or the built-in express.json()) used for?",
    options: [
      "To parse CSS files",
      "To parse incoming request bodies in a middleware",
      "To clean the database",
      "To render HTML",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which HTTP status code is used for 'Created' (after a successful POST)?",
    options: ["200", "201", "202", "204"],
    correctIndex: 1,
  },
  {
    question: "Which Node.js module is used to handle file paths?",
    options: ["fs", "path", "url", "http"],
    correctIndex: 1,
  },
  {
    question: "What does 'npm' stand for?",
    options: [
      "Node Package Manager",
      "New Project Mode",
      "Network Protocol Module",
      "Node Programming Method",
    ],
    correctIndex: 0,
  },
  {
    question: "What is a 'CORS' error?",
    options: [
      "A database connection error",
      "A security feature that blocks requests from a different origin",
      "A syntax error in JavaScript",
      "A server timeout",
    ],
    correctIndex: 1,
  },
  {
    question: "Which function is used to securely hash passwords in Node.js?",
    options: [
      "bcrypt.hash()",
      "crypto.random()",
      "password.seal()",
      "hash.create()",
    ],
    correctIndex: 0,
  },
  {
    question: "What is the 'node_modules' folder?",
    options: [
      "A folder for your custom routes",
      "A folder containing all installed project dependencies",
      "A folder for HTML templates",
      "A temporary cache folder",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which object in Express is used to send a response back to the client?",
    options: ["req", "res", "next", "app"],
    correctIndex: 1,
  },
  {
    question: "How do you import the 'express' module in ES6 syntax?",
    options: [
      "require('express')",
      "import express from 'express'",
      "get 'express'",
      "include express",
    ],
    correctIndex: 1,
  },
  {
    question: "What is an 'Event Loop' in Node.js?",
    options: [
      "A way to repeat code 10 times",
      "The mechanism that handles asynchronous callbacks",
      "A graphical tool for developers",
      "A type of database query",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Nodemon'?",
    options: [
      "A database provider",
      "A tool that automatically restarts the node application when file changes are detected",
      "A testing library",
      "A CSS preprocessor",
    ],
    correctIndex: 1,
  },
  {
    question: "Which HTTP method is used to remove a resource?",
    options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
    correctIndex: 1,
  },
  {
    question: "What is the purpose of 'module.exports'?",
    options: [
      "To export data to a database",
      "To make code in one file available to be used in other files",
      "To export the app to a mobile phone",
      "To finish the program",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Where should you store a JWT on the client side for better security against XSS?",
    options: [
      "localStorage",
      "sessionStorage",
      "HTTP-only Cookie",
      "Global Variable",
    ],
    correctIndex: 2,
  },
  {
    question: "What is 'Routing' in Express?",
    options: [
      "The way the internet works",
      "Determining how an application responds to a client request to a particular endpoint",
      "The physical wires connecting servers",
      "A method to compress images",
    ],
    correctIndex: 1,
  },
  {
    question: "What does the 204 status code mean?",
    options: [
      "Not Found",
      "No Content (Success but nothing to return)",
      "Created",
      "Accepted",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which built-in Node.js module allows you to work with the file system?",
    options: ["file", "system", "fs", "disk"],
    correctIndex: 2,
  },
  {
    question: "What is the purpose of 'app.use()'?",
    options: [
      "To use a specific database",
      "To mount middleware functions",
      "To update the app",
      "To start the server",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'asynchronous' programming in Node.js?",
    options: [
      "Running one line at a time and waiting",
      "Executing tasks without blocking the main thread",
      "Writing code in reverse order",
      "A way to write HTML",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the 'Signature' part of a JWT used for?",
    options: [
      "To store the username",
      "To verify that the sender of the JWT is who it says it is and ensure the message wasn't changed",
      "To define the expiration date",
      "To style the token",
    ],
    correctIndex: 1,
  },
  {
    question: "Which HTTP status code is used for 'Bad Request'?",
    options: ["400", "401", "403", "404"],
    correctIndex: 0,
  },
  {
    question: "What is the 'npm start' script usually used for?",
    options: [
      "To install a package",
      "To execute the main entry point of the application",
      "To stop the server",
      "To delete the project",
    ],
    correctIndex: 1,
  },
  {
    question:
      "In Express, how do you group related routes into a separate file?",
    options: [
      "express.Path()",
      "express.Router()",
      "express.Group()",
      "express.Link()",
    ],
    correctIndex: 1,
  },
  {
    question:
      "What is the default port number for most Node.js local tutorials?",
    options: ["80", "443", "3000", "21"],
    correctIndex: 2,
  },
  {
    question:
      "How do you sign a JWT in Node.js using the 'jsonwebtoken' library?",
    options: ["jwt.create()", "jwt.sign()", "jwt.hash()", "jwt.encode()"],
    correctIndex: 1,
  },
  {
    question: "What is a 'Stream' in Node.js?",
    options: [
      "A way to watch movies",
      "Handling data that is being read or written bit by bit",
      "A type of database",
      "A real-time chat feature",
    ],
    correctIndex: 1,
  },
  {
    question:
      "What is the significance of the 'node_modules' folder in .gitignore?",
    options: [
      "It is too small to upload",
      "It contains large, regeneratable dependencies that shouldn't be tracked by version control",
      "It contains the database",
      "It is private code",
    ],
    correctIndex: 1,
  },
];

export const loadNodeQuiz = async (): Promise<QuizModule> => ({
  meta: nodeQuizMeta,
  questions: nodeQuizQuestions,
});
