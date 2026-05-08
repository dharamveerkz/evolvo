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
    question:
      "Where is the metadata of the document, such as the title and character set, stored?",
    options: ["<body>", "<header>", "<meta>", "<head>"],
    correctIndex: 3,
  },
  {
    question: "What is the primary purpose of Semantic HTML?",
    options: [
      "To make the code look prettier",
      "To provide meaning and structure to web content for browsers and developers",
      "To speed up the loading time of images",
      "To replace CSS for styling purposes",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which semantic tag is best suited for the main navigation links?",
    options: ["<menu>", "<nav>", "<links>", "<header>"],
    correctIndex: 1,
  },
  {
    question:
      "Which tag should be used for the most important heading on a page?",
    options: ["<h0>", "<heading>", "<h1>", "<head>"],
    correctIndex: 2,
  },
  {
    question:
      "Which element represents a self-contained composition like a blog post or news story?",
    options: ["<section>", "<div>", "<article>", "<aside>"],
    correctIndex: 2,
  },
  {
    question: "What is the purpose of the <aside> tag?",
    options: [
      "To put content on the left side only",
      "To define content indirectly related to the main content, like a sidebar",
      "To define the footer of a page",
      "To hide content from the user",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which semantic element is used to group the introductory content of a page or section?",
    options: ["<top>", "<header>", "<head>", "<section>"],
    correctIndex: 1,
  },
  {
    question: "What does the <footer> element typically contain?",
    options: [
      "The main navigation menu",
      "The primary heading of the site",
      "Author info, copyright data, or contact links",
      "The main article text",
    ],
    correctIndex: 2,
  },
  {
    question:
      "Which tag is used to define a thematic grouping of content, typically with a heading?",
    options: ["<section>", "<div>", "<group>", "<article>"],
    correctIndex: 0,
  },
  {
    question: "What does ARIA stand for in web accessibility?",
    options: [
      "Accessible Real-time Internet Applications",
      "Accessible Rich Internet Applications",
      "Automated Responsive Interface Assets",
      "Alternative Resource for Internet Accessibility",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the role of the 'alt' attribute in an <img> tag?",
    options: [
      "To define the alignment of the image",
      "To provide a text description for screen readers and if the image fails to load",
      "To link the image to another page",
      "To set the alternative source for the image",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which ARIA role should be used to identify a collection of navigation links?",
    options: [
      "role='navigation'",
      "role='link'",
      "role='menu'",
      "role='button'",
    ],
    correctIndex: 0,
  },
  {
    question:
      "How do you associate a <label> with an <input> field for accessibility?",
    options: [
      "By placing them next to each other",
      "By using the 'for' attribute on the label matching the 'id' of the input",
      "By using the 'name' attribute on both",
      "By putting the label inside the input tag",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the purpose of the 'aria-label' attribute?",
    options: [
      "To style the label with CSS",
      "To provide a string that labels the current element for assistive technology",
      "To create a visible tooltip",
      "To define the input type",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which attribute is used to indicate that a form field is mandatory?",
    options: ["important", "needed", "required", "aria-mandatory"],
    correctIndex: 2,
  },
  {
    question: "Which tag is used to create a dropdown list in a form?",
    options: ["<dropdown>", "<select>", "<list>", "<input type='list'>"],
    correctIndex: 1,
  },
  {
    question: "Which <input> type is best for entering a password?",
    options: [
      "type='text'",
      "type='hidden'",
      "type='password'",
      "type='secret'",
    ],
    correctIndex: 2,
  },
  {
    question: "What does the <fieldset> tag do in a form?",
    options: [
      "It creates a text area",
      "It groups related elements and draws a box around them",
      "It submits the form data",
      "It validates the input data",
    ],
    correctIndex: 1,
  },
  {
    question: "Which tag provides a caption for a <fieldset>?",
    options: ["<caption>", "<label>", "<legend>", "<title>"],
    correctIndex: 2,
  },
  {
    question: "What is the purpose of the 'placeholder' attribute?",
    options: [
      "To set a permanent value for the input",
      "To show a short hint that describes the expected value of an input field",
      "To act as a label for screen readers",
      "To disable the input field",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which attribute in a <form> tag specifies where to send the form data?",
    options: ["method", "action", "target", "src"],
    correctIndex: 1,
  },
  {
    question: "Which form method is more secure for sending sensitive data?",
    options: ["GET", "POST", "SEND", "SECURE"],
    correctIndex: 1,
  },
  {
    question: "What is the correct syntax for a custom data attribute?",
    options: ["custom-*", "data-*", "attr-*", "x-*"],
    correctIndex: 1,
  },
  {
    question:
      "How can you access a data attribute named 'data-user-id' in JavaScript?",
    options: [
      "element.dataUserId",
      "element.dataset.userId",
      "element.getUserID()",
      "element.id",
    ],
    correctIndex: 1,
  },
  {
    question: "Which tag is used to define an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correctIndex: 1,
  },
  {
    question: "What is the correct HTML for a line break?",
    options: ["<lb>", "<break>", "<br>", "<hr>"],
    correctIndex: 2,
  },
  {
    question: "Which element is used to group inline elements for styling?",
    options: ["<div>", "<span>", "<section>", "<p>"],
    correctIndex: 1,
  },
  {
    question:
      "Which attribute is used to provide a unique identifier for an element?",
    options: ["class", "id", "name", "key"],
    correctIndex: 1,
  },
  {
    question: "What is the purpose of the <main> tag?",
    options: [
      "To hold the navigation",
      "To define the unique content of the document",
      "To contain the header and footer",
      "To wrap the entire body",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which element is used to represent a range of numerical values (like disk usage)?",
    options: ["<progress>", "<range>", "<meter>", "<level>"],
    correctIndex: 2,
  },
  {
    question: "How do you create a comment in HTML?",
    options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
    correctIndex: 2,
  },
  {
    question:
      "Which attribute specifies that an input field should automatically get focus when the page loads?",
    options: ["focus", "autofocus", "start", "active"],
    correctIndex: 1,
  },
  {
    question:
      "What does the 'target=\"_blank\"' attribute do in an anchor tag?",
    options: [
      "Opens the link in the same window",
      "Opens the link in a new tab or window",
      "Closes the current window",
      "Makes the link invisible",
    ],
    correctIndex: 1,
  },
  {
    question: "Which tag is used to display a preformatted block of text?",
    options: ["<code>", "<text>", "<pre>", "<format>"],
    correctIndex: 2,
  },
  {
    question: "Which tag is used to create a table row?",
    options: ["<td>", "<th>", "<tr>", "<table>"],
    correctIndex: 2,
  },
  {
    question:
      "Which element is used to define the title of a work (e.g., book, movie)?",
    options: ["<title>", "<i>", "<cite>", "<em>"],
    correctIndex: 2,
  },
  {
    question: "What is the default display value of a <div> element?",
    options: ["inline", "block", "inline-block", "none"],
    correctIndex: 1,
  },
  {
    question: "Which element is used to embed an image in a page?",
    options: ["<image>", "<src>", "<img>", "<pic>"],
    correctIndex: 2,
  },
  {
    question: "What is the purpose of the <time> tag?",
    options: [
      "To create a clock on the page",
      "To represent a specific period in time or a date",
      "To measure page load speed",
      "To set an expiration date for the page",
    ],
    correctIndex: 1,
  },
  {
    question: "Which tag is used to define a list item?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correctIndex: 2,
  },
  {
    question: "What is the purpose of the 'href' attribute?",
    options: [
      "To define the height of an element",
      "To specify the URL of a page a link goes to",
      "To define a header reference",
      "To import a script",
    ],
    correctIndex: 1,
  },
  {
    question: "Which tag is used to define a table header cell?",
    options: ["<td>", "<th>", "<thead>", "<tr>"],
    correctIndex: 1,
  },
  {
    question: "Which HTML5 tag is used to embed a video?",
    options: ["<movie>", "<media>", "<video>", "<embed>"],
    correctIndex: 2,
  },
  {
    question:
      "Which attribute is used to specify the character encoding in the <meta> tag?",
    options: ["charset", "encoding", "type", "content"],
    correctIndex: 0,
  },
  {
    question:
      "Which element represents a part of the document that is quoted from another source?",
    options: ["<quote>", "<blockquote>", "<cite>", "<q>"],
    correctIndex: 1,
  },
  {
    question: "What is the correct way to make a checkbox in HTML?",
    options: [
      "<checkbox>",
      "<input type='check'>",
      "<input type='checkbox'>",
      "<check>",
    ],
    correctIndex: 2,
  },
  {
    question: "Which tag is used to show the progress of a task?",
    options: ["<meter>", "<progress>", "<loader>", "<status>"],
    correctIndex: 1,
  },
  {
    question:
      "What is the purpose of the <button> tag's 'type' attribute when set to 'reset'?",
    options: [
      "To restart the browser",
      "To clear all the values in a form",
      "To submit the form",
      "To undo the last character typed",
    ],
    correctIndex: 1,
  },
];

export const loadHtmlQuiz = async (): Promise<QuizModule> => ({
  meta: htmlQuizMeta,
  questions: htmlQuizQuestions,
});
