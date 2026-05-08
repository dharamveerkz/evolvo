import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const htmlQuizMeta: QuizMeta = {
  id: "html-basics",
  category: "webdev",
  subcategory: "html",
  title: "HTML Mastery",
  description:
    "Test your knowledge of HTML fundamentals, semantics, and accessibility.",
  icon: "🧱",
  level: "Beginner",
  questionCount: 50,
  color: "#e34c26",
  featured: true,
  rating: 4,
  estimatedTime: "20 min",
  passThreshold: 35,
  showCertificate: true,
};

export const htmlQuizQuestions: QuizQuestion[] = [
  {
    question:
      "Which declaration must be the very first thing in your HTML5 document?",
    options: ["<html>", "<head>", "<!DOCTYPE html>", "<meta charset='UTF-8'>"],
    correctIndex: 2,
  },
  {
    question: "Which element is considered the root of an HTML document?",
    options: ["<body>", "<html>", "<head>", "<root>"],
    correctIndex: 1,
  },
  {
    question: "Which tag is used to create a paragraph?",
    options: ["<p>", "<para>", "<text>", "<paragraph>"],
    correctIndex: 0,
  },
  {
    question: "Which tag creates the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    correctIndex: 2,
  },
  {
    question: "Which tag is used to insert an image?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    correctIndex: 0,
  },
  {
    question: "Which attribute is used with <img> to define image source?",
    options: ["href", "src", "link", "path"],
    correctIndex: 1,
  },
  {
    question: "Which tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correctIndex: 0,
  },
  {
    question: "Which attribute specifies the URL in an anchor tag?",
    options: ["src", "url", "href", "path"],
    correctIndex: 2,
  },
  {
    question: "Which tag is used for line break?",
    options: ["<lb>", "<br>", "<break>", "<line>"],
    correctIndex: 1,
  },
  {
    question: "Which tag creates a horizontal line?",
    options: ["<hr>", "<line>", "<br>", "<border>"],
    correctIndex: 0,
  },
  {
    question: "Which tag is used to make text bold?",
    options: ["<strong>", "<bold>", "<b>", "Both <strong> and <b>"],
    correctIndex: 3,
  },
  {
    question: "Which tag is used to make text italic?",
    options: ["<italic>", "<i>", "<em>", "Both <i> and <em>"],
    correctIndex: 3,
  },
  {
    question: "Which HTML element is used for unordered lists?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correctIndex: 0,
  },
  {
    question: "Which HTML element is used for ordered lists?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correctIndex: 1,
  },
  {
    question: "Which tag represents a list item?",
    options: ["<item>", "<li>", "<list>", "<ul>"],
    correctIndex: 1,
  },
  {
    question: "Which tag is used to create a table?",
    options: ["<tb>", "<table>", "<tr>", "<td>"],
    correctIndex: 1,
  },
  {
    question: "Which tag defines a table row?",
    options: ["<td>", "<th>", "<tr>", "<row>"],
    correctIndex: 2,
  },
  {
    question: "Which tag defines a table cell?",
    options: ["<cell>", "<td>", "<tr>", "<th>"],
    correctIndex: 1,
  },
  {
    question: "Which tag defines a table heading cell?",
    options: ["<thead>", "<th>", "<head>", "<td>"],
    correctIndex: 1,
  },
  {
    question: "Which tag is used to create a form?",
    options: ["<form>", "<input>", "<fieldset>", "<label>"],
    correctIndex: 0,
  },
  {
    question: "Which tag is used for user input fields?",
    options: ["<textarea>", "<form>", "<input>", "<button>"],
    correctIndex: 2,
  },
  {
    question: "Which input type hides entered characters?",
    options: ["text", "password", "hidden", "secure"],
    correctIndex: 1,
  },
  {
    question: "Which button type submits a form?",
    options: ["submit", "send", "click", "push"],
    correctIndex: 0,
  },
  {
    question: "Which tag is used for multi-line text input?",
    options: ["<input>", "<textbox>", "<textarea>", "<text>"],
    correctIndex: 2,
  },
  {
    question: "Which tag creates a dropdown list?",
    options: ["<dropdown>", "<list>", "<select>", "<optionlist>"],
    correctIndex: 2,
  },
  {
    question: "Which tag defines an option in a dropdown?",
    options: ["<item>", "<option>", "<choice>", "<select>"],
    correctIndex: 1,
  },
  {
    question: "Which tag is used to create a button?",
    options: ["<btn>", "<button>", "<click>", "<inputbutton>"],
    correctIndex: 1,
  },
  {
    question: "Which semantic element represents navigation links?",
    options: ["<section>", "<nav>", "<aside>", "<footer>"],
    correctIndex: 1,
  },
  {
    question: "Which semantic element represents the footer section?",
    options: ["<bottom>", "<footer>", "<end>", "<section>"],
    correctIndex: 1,
  },
  {
    question: "Which semantic element represents introductory content?",
    options: ["<top>", "<header>", "<head>", "<intro>"],
    correctIndex: 1,
  },
  {
    question: "Which tag is used to embed a video?",
    options: ["<media>", "<movie>", "<video>", "<mp4>"],
    correctIndex: 2,
  },
  {
    question: "Which tag is used to embed audio?",
    options: ["<audio>", "<sound>", "<music>", "<mp3>"],
    correctIndex: 0,
  },
  {
    question: "Which attribute allows a video to play automatically?",
    options: ["play", "autoplay", "start", "auto"],
    correctIndex: 1,
  },
  {
    question: "Which tag is used to define metadata?",
    options: ["<meta>", "<data>", "<info>", "<head>"],
    correctIndex: 0,
  },
  {
    question: "Where is the page title defined?",
    options: ["<meta>", "<title>", "<head>", "<body>"],
    correctIndex: 1,
  },
  {
    question: "Which tag is used to link an external CSS file?",
    options: ["<style>", "<css>", "<link>", "<script>"],
    correctIndex: 2,
  },
  {
    question: "Which attribute is commonly used for unique identification?",
    options: ["class", "name", "id", "key"],
    correctIndex: 2,
  },
  {
    question: "Which attribute is used for applying CSS classes?",
    options: ["style", "class", "css", "font"],
    correctIndex: 1,
  },
  {
    question: "Which tag is used to write JavaScript in HTML?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    correctIndex: 2,
  },
  {
    question: "Which tag is used for inline CSS?",
    options: ["<css>", "<style>", "<design>", "<script>"],
    correctIndex: 1,
  },
  {
    question: "Which tag is used to highlight important text semantically?",
    options: ["<b>", "<important>", "<strong>", "<mark>"],
    correctIndex: 2,
  },
  {
    question: "Which tag is used to emphasize text semantically?",
    options: ["<i>", "<italic>", "<em>", "<highlight>"],
    correctIndex: 2,
  },
  {
    question: "Which tag is used for comments in HTML?",
    options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
    correctIndex: 2,
  },
  {
    question: "Which HTML attribute provides alternative text for images?",
    options: ["title", "alt", "description", "name"],
    correctIndex: 1,
  },
  {
    question: "Which tag groups block elements together?",
    options: ["<span>", "<div>", "<group>", "<section>"],
    correctIndex: 1,
  },
  {
    question: "Which tag groups inline elements together?",
    options: ["<div>", "<inline>", "<span>", "<group>"],
    correctIndex: 2,
  },
  {
    question: "Which input type allows selecting a date?",
    options: ["calendar", "datetime", "date", "time"],
    correctIndex: 2,
  },
  {
    question: "Which input type allows selecting a file?",
    options: ["document", "upload", "file", "attachment"],
    correctIndex: 2,
  },
  {
    question: "Which attribute makes an input field mandatory?",
    options: ["required", "validate", "must", "needed"],
    correctIndex: 0,
  },
  {
    question: "Which HTML element is used for the main content of a document?",
    options: ["<main>", "<content>", "<section>", "<article>"],
    correctIndex: 0,
  },
  {
    question: "Which semantic tag represents independent content?",
    options: ["<article>", "<div>", "<section>", "<aside>"],
    correctIndex: 0,
  },
];

export const loadHtmlQuiz = async (): Promise<QuizModule> => ({
  meta: htmlQuizMeta,
  questions: htmlQuizQuestions,
});
