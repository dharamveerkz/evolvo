import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const cssQuizMeta: QuizMeta = {
  id: "css",
  category: "webdev",
  subcategory: "css",
  title: "CSS Fundamentals",
  description:
    "Master selectors, Box Model, Flexbox, Grid, and Responsive Design",
  icon: "🎨",
  level: "Beginner",
  questionCount: 50,
  color: "#264de4",
  featured: true,
  rating: 5,
  passThreshold: 35,
  showCertificate: true,
  estimatedTime: "25 min",
};

export const cssQuizQuestions: QuizQuestion[] = [
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    correctIndex: 2,
  },
  {
    question: "Which property is used to change the text color of an element?",
    options: ["font-color", "text-color", "color", "fgcolor"],
    correctIndex: 2,
  },
  {
    question:
      "In the Box Model, which layer is between the padding and the margin?",
    options: ["Content", "Border", "Outline", "Spacing"],
    correctIndex: 1,
  },
  {
    question: "Which property is used to change the background color?",
    options: ["color", "background-color", "bgcolor", "back-color"],
    correctIndex: 1,
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    correctIndex: 2,
  },
  {
    question: "How do you select an element with the class name 'container'?",
    options: ["#container", "container", ".container", "*container"],
    correctIndex: 2,
  },
  {
    question: "How do you select an element with the id 'header'?",
    options: [".header", "#header", "header", "*header"],
    correctIndex: 1,
  },
  {
    question:
      "Which property is used to create space inside an element, between content and border?",
    options: ["margin", "border", "padding", "spacing"],
    correctIndex: 2,
  },
  {
    question:
      "Which property is used to create space outside an element's border?",
    options: ["padding", "margin", "border", "gap"],
    correctIndex: 1,
  },
  {
    question: "What is the default value of the 'position' property?",
    options: ["relative", "fixed", "absolute", "static"],
    correctIndex: 3,
  },
  {
    question: "Which Flexbox property defines the main axis direction?",
    options: ["flex-wrap", "justify-content", "flex-direction", "align-items"],
    correctIndex: 2,
  },
  {
    question: "In Flexbox, which property aligns items along the main axis?",
    options: ["align-items", "justify-content", "align-content", "flex-flow"],
    correctIndex: 1,
  },
  {
    question: "Which value of 'display' starts a Flexbox container?",
    options: ["box", "flex", "grid", "block-flex"],
    correctIndex: 1,
  },
  {
    question:
      "Which Flexbox property allows items to wrap onto multiple lines?",
    options: ["flex-flow", "flex-wrap", "wrap-content", "line-wrap"],
    correctIndex: 1,
  },
  {
    question: "Which property aligns flex items along the cross axis?",
    options: ["justify-content", "align-items", "align-self", "flex-axis"],
    correctIndex: 1,
  },
  {
    question: "CSS Grid is primarily used for which type of layout?",
    options: [
      "1D (Linear)",
      "2D (Rows and Columns)",
      "Text only",
      "3D Modeling",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which property is used to define the number and size of columns in CSS Grid?",
    options: [
      "grid-columns",
      "grid-template-columns",
      "grid-layout-cols",
      "columns",
    ],
    correctIndex: 1,
  },
  {
    question: "What does the 'fr' unit stand for in CSS Grid?",
    options: [
      "Fixed Ratio",
      "Fractional unit",
      "Final Result",
      "Font Relative",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which property creates space between rows and columns in a Grid?",
    options: ["margin", "padding", "gap", "spacing"],
    correctIndex: 2,
  },
  {
    question: "Which property allows a grid item to span multiple columns?",
    options: ["grid-column", "grid-row", "grid-area", "column-span"],
    correctIndex: 0,
  },
  {
    question:
      "Which CSS rule is used to apply styles based on device characteristics like width?",
    options: ["@import", "@device", "@media", "@responsive"],
    correctIndex: 2,
  },
  {
    question:
      "What is the correct syntax for a media query targeting screens wider than 600px?",
    options: [
      "@media (width > 600px)",
      "@media screen and (min-width: 600px)",
      "@media (max-width: 600px)",
      "@media 600px",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you define a CSS variable?",
    options: [
      "$variable-name",
      "var-variable-name",
      "--variable-name",
      "@variable-name",
    ],
    correctIndex: 2,
  },
  {
    question: "How do you use a CSS variable?",
    options: ["use(--name)", "var(--name)", "get(--name)", "$name"],
    correctIndex: 1,
  },
  {
    question:
      "Where is the best place to define global CSS variables for high scope?",
    options: ["body", "html", ":root", "div"],
    correctIndex: 2,
  },
  {
    question: "Which property is used to change the font of an element?",
    options: ["font-style", "font-family", "font-weight", "text-font"],
    correctIndex: 1,
  },
  {
    question: "How do you make the text bold in CSS?",
    options: [
      "font-style: bold",
      "text-decoration: bold",
      "font-weight: bold",
      "bold: true",
    ],
    correctIndex: 2,
  },
  {
    question: "Which property is used to center text inside an element?",
    options: [
      "text-align: center",
      "align: center",
      "margin: auto",
      "vertical-align: middle",
    ],
    correctIndex: 0,
  },
  {
    question: "How do you remove the default underline from a hyperlink?",
    options: [
      "text-decoration: none",
      "text-style: no-underline",
      "decoration: none",
      "underline: none",
    ],
    correctIndex: 0,
  },
  {
    question: "Which property controls the stack order of elements?",
    options: ["order", "z-index", "stack-level", "position-index"],
    correctIndex: 1,
  },
  {
    question: "What does 'box-sizing: border-box' do?",
    options: [
      "Adds a border to every element",
      "Includes padding and border in the element's total width and height",
      "Excludes padding from the width",
      "Makes the box invisible",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which value of 'position' keeps an element in the same place even when scrolling?",
    options: ["absolute", "relative", "static", "fixed"],
    correctIndex: 3,
  },
  {
    question: "How do you add a comment in CSS?",
    options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
    correctIndex: 1,
  },
  {
    question:
      "Which property is used to change the mouse cursor when hovering?",
    options: ["mouse-style", "pointer", "cursor", "hover-icon"],
    correctIndex: 2,
  },
  {
    question: "Which property sets the transparency of an element?",
    options: ["visibility", "opacity", "filter", "display"],
    correctIndex: 1,
  },
  {
    question: "In Flexbox, what is the default value of 'flex-direction'?",
    options: ["column", "row", "row-reverse", "column-reverse"],
    correctIndex: 1,
  },
  {
    question:
      "Which Flexbox property is a shorthand for grow, shrink, and basis?",
    options: ["flex-items", "flex", "flex-shorthand", "flex-set"],
    correctIndex: 1,
  },
  {
    question: "How do you make a list not show bullet points?",
    options: [
      "list-style-type: none",
      "text-decoration: none",
      "bullet: none",
      "list-style: hidden",
    ],
    correctIndex: 0,
  },
  {
    question: "Which property is used to round the corners of an element?",
    options: ["corner-radius", "border-radius", "round-border", "border-style"],
    correctIndex: 1,
  },
  {
    question: "Which property is used to change the capitalization of text?",
    options: ["text-transform", "font-variant", "text-style", "capitalize"],
    correctIndex: 0,
  },
  {
    question:
      "Which value of 'display' hides an element completely from the layout?",
    options: ["hidden", "none", "invisible", "collapse"],
    correctIndex: 1,
  },
  {
    question: "What is the correct way to set an external CSS file?",
    options: [
      "<style src='style.css'>",
      "<link rel='stylesheet' href='style.css'>",
      "<css href='style.css'>",
      "<script src='style.css'>",
    ],
    correctIndex: 1,
  },
  {
    question: "Which property sets the space between lines of text?",
    options: ["line-spacing", "letter-spacing", "line-height", "text-indent"],
    correctIndex: 2,
  },
  {
    question:
      "Which selector is used to style an element only when the mouse is over it?",
    options: [":active", ":focus", ":hover", ":visited"],
    correctIndex: 2,
  },
  {
    question: "Which property specifies the type of list item marker?",
    options: [
      "list-item-style",
      "list-style-type",
      "marker-style",
      "bullet-type",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you group multiple selectors to apply the same style?",
    options: [
      "Separate them with a plus (+)",
      "Separate them with a comma (,)",
      "Separate them with a space",
      "Separate them with a dot (.)",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the purpose of 'justify-self' in CSS Grid?",
    options: [
      "Aligns all items",
      "Aligns a single grid item inside its cell along the inline axis",
      "Aligns the grid container",
      "Creates a new row",
    ],
    correctIndex: 1,
  },
  {
    question: "Which property is used to set the minimum width of an element?",
    options: ["min-width", "width-min", "limit-width", "small-width"],
    correctIndex: 0,
  },
  {
    question: "What is the result of 'margin: 10px 20px 30px 40px'?",
    options: [
      "Top 10, Right 20, Bottom 30, Left 40",
      "Top 10, Left 20, Bottom 30, Right 40",
      "All sides 10",
      "Top/Bottom 10, Left/Right 20",
    ],
    correctIndex: 0,
  },
  {
    question: "Which CSS unit is relative to the font-size of the element?",
    options: ["px", "vh", "em", "rem"],
    correctIndex: 2,
  },
];

export const loadCssQuiz = async (): Promise<QuizModule> => ({
  meta: cssQuizMeta,
  questions: cssQuizQuestions,
});
