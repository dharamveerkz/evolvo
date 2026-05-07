import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const htmlQuizMeta: QuizMeta = {
  id: "html",
  category: "webdev",
  subcategory: "html",
  title: "HTML Mastery",
  description: "Test your knowledge of HTML fundamentals",
  icon: "🧱",
  level: "Beginner",
  questionCount: 100, // ✅ Total questions
  color: "#e34c26",
  featured: true,
  rating: 4,
  estimatedTime: "25 min",
  passThreshold: 90, // ✅ Need 90/100 to pass & get certificate
  showCertificate: true, // ✅ Show certificate on pass
};

export const htmlQuizQuestions: QuizQuestion[] = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Tool Markup Language",
    ],
    correctIndex: 1,
  },
  {
    question: "Root element of HTML?",
    options: ["<body>", "<html>", "<head>", "<div>"],
    correctIndex: 1,
  },
  {
    question: "Largest heading tag?",
    options: ["<h6>", "<h4>", "<h1>", "<h2>"],
    correctIndex: 2,
  },
  {
    question: "Paragraph tag?",
    options: ["<div>", "<p>", "<span>", "<br>"],
    correctIndex: 1,
  },
  {
    question: "Line break tag?",
    options: ["<hr>", "<lb>", "<br>", "<break>"],
    correctIndex: 2,
  },
  {
    question: "Image tag?",
    options: ["<img>", "<picture>", "<source>", "<media>"],
    correctIndex: 0,
  },
  {
    question: "Attribute for image path?",
    options: ["href", "src", "link", "path"],
    correctIndex: 1,
  },
  {
    question: "Hyperlink tag?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correctIndex: 0,
  },
  {
    question: "Attribute used in <a> for URL?",
    options: ["src", "link", "href", "url"],
    correctIndex: 2,
  },
  {
    question: "HTML file extension?",
    options: [".ht", ".html", ".web", ".doc"],
    correctIndex: 1,
  },
  {
    question: "Tag for page title?",
    options: ["<meta>", "<title>", "<head>"],
    correctIndex: 1,
  },
  {
    question: "Unordered list tag?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correctIndex: 1,
  },
  {
    question: "Ordered list tag?",
    options: ["<ul>", "<ol>", "<dl>", "<list>"],
    correctIndex: 1,
  },
  {
    question: "List item tag?",
    options: ["<ul>", "<li>", "<item>", "<list>"],
    correctIndex: 1,
  },
  {
    question: "Bold text tag?",
    options: ["<b>", "<strong>", "<bold>", "Both <b> and <strong>"],
    correctIndex: 3,
  },
  {
    question: "Italic text tag?",
    options: ["<i>", "<em>", "<italic>", "<slant>"],
    correctIndex: 0,
  },
  {
    question: "<em> represents?",
    options: ["Bold", "Italic emphasis", "Underline", "Font size"],
    correctIndex: 1,
  },
  {
    question: "Block container tag?",
    options: ["<span>", "<div>", "<p>", "<b>"],
    correctIndex: 1,
  },
  {
    question: "Inline container tag?",
    options: ["<span>", "<div>", "<section>", "<article>"],
    correctIndex: 0,
  },
  {
    question: "Visible content is inside?",
    options: ["<head>", "<meta>", "<body>", "<html>"],
    correctIndex: 2,
  },
  {
    question: "HTML comments syntax?",
    options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
    correctIndex: 2,
  },
  {
    question: "Horizontal line tag?",
    options: ["<br>", "<hr>", "<line>", "<rule>"],
    correctIndex: 1,
  },
  {
    question: "Which is a self-closing tag?",
    options: ["<p>", "<div>", "<img>", "<span>"],
    correctIndex: 2,
  },
  {
    question: "HTML is a?",
    options: [
      "Programming language",
      "Markup language",
      "Database",
      "Framework",
    ],
    correctIndex: 1,
  },
  {
    question: "Navigation semantic tag?",
    options: ["<nav>", "<menu>", "<dir>", "<ul>"],
    correctIndex: 0,
  },
  {
    question: "Main content tag?",
    options: ["<main>", "<section>", "<article>", "<div>"],
    correctIndex: 0,
  },
  {
    question: "<article> is used for?",
    options: ["Header", "Independent content", "Footer", "Navigation"],
    correctIndex: 1,
  },
  {
    question: "Footer tag?",
    options: ["<head>", "<footer>", "<bottom>", "<end>"],
    correctIndex: 1,
  },
  {
    question: "Section tag?",
    options: ["<div>", "<section>", "<block>", "<area>"],
    correctIndex: 1,
  },
  {
    question: "Input field tag?",
    options: ["<input>", "<field>", "<text>", "<form>"],
    correctIndex: 0,
  },
  {
    question: "Multiline input tag?",
    options: ["<input>", "<textarea>", "<multiline>", "<text>"],
    correctIndex: 1,
  },
  {
    question: "Dropdown list tag?",
    options: ["<input>", "<select>", "<option>", "<dropdown>"],
    correctIndex: 1,
  },
  {
    question: "Button tag?",
    options: ["<input>", "<button>", "<btn>", "<action>"],
    correctIndex: 1,
  },
  {
    question: "Label tag purpose?",
    options: ["Styling", "Form labeling", "Animation", "Linking"],
    correctIndex: 1,
  },
  {
    question: "Input type for email validation?",
    options: ["text", "email", "mail", "input-email"],
    correctIndex: 1,
  },
  {
    question: "Required attribute makes a field?",
    options: ["Optional", "Mandatory", "Hidden", "Disabled"],
    correctIndex: 1,
  },
  {
    question: "Pattern attribute is used for?",
    options: ["Styling", "Regex validation", "Animation", "Linking"],
    correctIndex: 1,
  },
  {
    question: "min/max attributes apply to?",
    options: ["Text", "Number/date", "Image", "Video"],
    correctIndex: 1,
  },
  {
    question: "Placeholder shows?",
    options: ["Value", "Hint text", "Error", "Label"],
    correctIndex: 1,
  },
  {
    question: "Table row tag?",
    options: ["<tr>", "<td>", "<th>", "<row>"],
    correctIndex: 0,
  },
  {
    question: "Table data (cell) tag?",
    options: ["<th>", "<td>", "<tr>", "<cell>"],
    correctIndex: 1,
  },
  {
    question: "Table header cell tag?",
    options: ["<th>", "<td>", "<tr>", "<header>"],
    correctIndex: 0,
  },
  {
    question: "Table head section tag?",
    options: ["<thead>", "<tbody>", "<tfoot>", "<head>"],
    correctIndex: 0,
  },
  {
    question: "Video tag?",
    options: ["<media>", "<video>", "<movie>", "<play>"],
    correctIndex: 1,
  },
  {
    question: "Audio tag?",
    options: ["<sound>", "<audio>", "<music>", "<mp3>"],
    correctIndex: 1,
  },
  {
    question: "<source> tag used for?",
    options: ["Styling", "Multiple media sources", "Script", "Layout"],
    correctIndex: 1,
  },
  {
    question: "<iframe> is used for?",
    options: ["Animation", "Embedding pages", "Styling", "Forms"],
    correctIndex: 1,
  },
  {
    question: "alt attribute purpose?",
    options: ["Style", "Accessibility", "Animation", "Layout"],
    correctIndex: 1,
  },
  {
    question: "Meta charset defines?",
    options: ["Layout", "Character encoding", "Script", "Style"],
    correctIndex: 1,
  },
  {
    question: "Meta viewport is used for?",
    options: ["SEO", "Responsive design", "Animation", "Forms"],
    correctIndex: 1,
  },
  {
    question: "<link> tag used for?",
    options: ["JavaScript", "External CSS", "Images", "Forms"],
    correctIndex: 1,
  },
];

export const loadHtmlQuiz = async (): Promise<QuizModule> => ({
  meta: htmlQuizMeta,
  questions: htmlQuizQuestions,
});
