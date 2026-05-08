import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const tailwindQuizMeta: QuizMeta = {
  id: "tailwind",
  category: "webdev",
  subcategory: "css",
  title: "Tailwind CSS Mastery",
  description:
    "Test your speed and knowledge of utility-first styling with Tailwind CSS",
  icon: "🌊",
  level: "Beginner",
  questionCount: 50,
  color: "#38bdf8",
  featured: true,
  rating: 5,
  passThreshold: 35,
  showCertificate: true,
  estimatedTime: "20 min",
};

export const tailwindQuizQuestions: QuizQuestion[] = [
  {
    question: "What is the primary philosophy of Tailwind CSS?",
    options: [
      "Component-based styling",
      "Utility-first styling",
      "Inline styling only",
      "Semantic CSS classes",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which class is used to apply a margin of 1rem (16px) to all sides?",
    options: ["margin-4", "p-4", "m-4", "m-16"],
    correctIndex: 2,
  },
  {
    question: "How do you apply a background color of blue with a 500 weight?",
    options: ["bg-blue-500", "color-blue-500", "background-blue", "blue-500"],
    correctIndex: 0,
  },
  {
    question:
      "Which prefix is used to apply a style only on medium-sized screens (768px and up)?",
    options: ["sm:", "md:", "lg:", "tablet:"],
    correctIndex: 1,
  },
  {
    question:
      "How do you change the text color to white when a user hovers over an element?",
    options: [
      "hover-text-white",
      "onhover:text-white",
      "hover:text-white",
      "text-white:hover",
    ],
    correctIndex: 2,
  },
  {
    question: "Which class is used to set an element's display to flex?",
    options: ["display-flex", "d-flex", "flex", "flexbox"],
    correctIndex: 2,
  },
  {
    question:
      "Which class would you use to add space between child elements in a flex container?",
    options: ["gap-4", "space-between", "m-4", "inner-space-4"],
    correctIndex: 0,
  },
  {
    question: "How do you set the font weight to bold in Tailwind?",
    options: ["text-bold", "font-bold", "font-700", "bold"],
    correctIndex: 1,
  },
  {
    question:
      "What is the utility class for setting an element's width to 50%?",
    options: ["w-1/2", "width-50", "w-50%", "w-half"],
    correctIndex: 0,
  },
  {
    question: "Which class is used to center text inside an element?",
    options: ["align-center", "text-center", "justify-center", "items-center"],
    correctIndex: 1,
  },
  {
    question:
      "How do you apply padding only to the top and bottom (vertical axis)?",
    options: ["px-4", "ptb-4", "py-4", "pv-4"],
    correctIndex: 2,
  },
  {
    question:
      "Which class makes an element's corners fully rounded (pill shape)?",
    options: ["rounded-full", "rounded-circle", "rounded-lg", "circle"],
    correctIndex: 0,
  },
  {
    question: "How do you define a 3-column grid in Tailwind?",
    options: ["grid-cols-3", "columns-3", "display-grid-3", "grid-3"],
    correctIndex: 0,
  },
  {
    question:
      "Which utility is used to justify flex items to the end of the main axis?",
    options: ["justify-start", "justify-end", "items-end", "content-end"],
    correctIndex: 1,
  },
  {
    question: "How do you hide an element in Tailwind?",
    options: ["hidden", "display-none", "invisible", "opacity-0"],
    correctIndex: 0,
  },
  {
    question: "Which class sets the z-index to 50?",
    options: ["index-50", "z-50", "layer-50", "stack-50"],
    correctIndex: 1,
  },
  {
    question: "What class is used to set the font size to 1.125rem (18px)?",
    options: ["text-lg", "text-md", "font-lg", "text-18"],
    correctIndex: 0,
  },
  {
    question: "How do you apply a border with a width of 2px?",
    options: ["border-2", "b-2", "border-w-2", "border-solid-2"],
    correctIndex: 0,
  },
  {
    question: "Which responsive prefix targets screens from 1024px and up?",
    options: ["md:", "lg:", "xl:", "max-lg:"],
    correctIndex: 1,
  },
  {
    question: "How do you set a fixed height of 10rem (160px)?",
    options: ["h-160", "height-40", "h-40", "h-10"],
    correctIndex: 2,
  },
  {
    question:
      "Which class is used to make an image or video cover its container?",
    options: ["object-fit", "object-cover", "bg-cover", "fit-cover"],
    correctIndex: 1,
  },
  {
    question: "How do you apply a shadow effect to an element?",
    options: ["box-shadow", "shadow-md", "elevation-2", "drop-shadow"],
    correctIndex: 1,
  },
  {
    question: "Which class centers a fixed-width block element horizontally?",
    options: ["m-center", "mx-auto", "justify-self-center", "align-center"],
    correctIndex: 1,
  },
  {
    question: "How do you make text italic?",
    options: ["text-italic", "font-italic", "italic", "i"],
    correctIndex: 2,
  },
  {
    question: "Which class is used to prevent text from wrapping?",
    options: ["whitespace-nowrap", "text-nowrap", "no-wrap", "truncate"],
    correctIndex: 0,
  },
  {
    question: "What does the class 'truncate' do?",
    options: [
      "Removes the element",
      "Shortens text with an ellipsis if it overflows",
      "Cuts off the bottom of an image",
      "Minifies the CSS",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you change the opacity of an element to 50%?",
    options: ["opacity-50", "alpha-50", "o-50", "transparent-50"],
    correctIndex: 0,
  },
  {
    question:
      "Which class is used to set the position of an element to 'absolute'?",
    options: ["absolute", "pos-absolute", "top-0", "static"],
    correctIndex: 0,
  },
  {
    question: "How do you add space between columns in a grid layout?",
    options: ["gap-x-4", "col-gap-4", "space-x-4", "grid-gap-4"],
    correctIndex: 0,
  },
  {
    question:
      "Which class is used to align items along the cross-axis in a flex container?",
    options: ["justify-items", "align-items", "items-center", "content-center"],
    correctIndex: 2,
  },
  {
    question: "How do you change the border color to red-600?",
    options: [
      "border-red-600",
      "b-red-600",
      "border-color-red-600",
      "stroke-red-600",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Which class sets the maximum width of an element to 32rem (512px)?",
    options: ["max-w-md", "max-w-lg", "w-md", "max-w-32"],
    correctIndex: 0,
  },
  {
    question: "How do you apply a dark mode specific style in Tailwind?",
    options: [
      "@dark:bg-black",
      "dark:bg-black",
      "night:bg-black",
      "mode-dark:bg-black",
    ],
    correctIndex: 1,
  },
  {
    question: "What class is used to make an element sticky?",
    options: ["sticky", "pos-sticky", "fixed-top", "pin"],
    correctIndex: 0,
  },
  {
    question: "How do you change the cursor to a pointer (hand icon)?",
    options: ["pointer", "cursor-pointer", "mouse-pointer", "select-pointer"],
    correctIndex: 1,
  },
  {
    question: "Which utility class is used to set the line height?",
    options: ["line-height", "leading-tight", "tracking-tight", "text-spacing"],
    correctIndex: 1,
  },
  {
    question: "Which utility class is used to set letter spacing?",
    options: [
      "leading-wide",
      "tracking-widest",
      "text-space",
      "letter-spacing",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you apply a transition effect to an element?",
    options: ["transition", "animate", "duration-300", "Both 0 and 2"],
    correctIndex: 3,
  },
  {
    question: "Which class is used to set the flex-grow property to 1?",
    options: ["flex-1", "grow", "flex-grow", "grow-1"],
    correctIndex: 1,
  },
  {
    question: "How do you set an element to have a full-screen height?",
    options: ["h-full", "h-screen", "h-100vh", "max-h-screen"],
    correctIndex: 1,
  },
  {
    question: "Which class is used to rotate an element by 45 degrees?",
    options: ["rotate-45", "transform-45", "deg-45", "turn-45"],
    correctIndex: 0,
  },
  {
    question: "How do you apply a scale effect on focus?",
    options: [
      "focus-scale-110",
      "focus:scale-110",
      "onfocus:scale-110",
      "scale-110:focus",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which class is used to make a flex container stack items vertically?",
    options: ["flex-vertical", "flex-col", "flex-row-v", "stack"],
    correctIndex: 1,
  },
  {
    question: "How do you remove the outline from a focused element?",
    options: ["no-outline", "outline-none", "focus:no-border", "shadow-none"],
    correctIndex: 1,
  },
  {
    question:
      "What is the standard base unit size in Tailwind (e.g., what is '1' in 'm-1')?",
    options: ["1px", "4px", "1rem", "10px"],
    correctIndex: 1,
  },
  {
    question: "Which class is used to span an item across 2 columns in a grid?",
    options: ["col-span-2", "grid-span-2", "span-2", "w-2/grid"],
    correctIndex: 0,
  },
  {
    question: "How do you set the background to be transparent?",
    options: ["bg-none", "bg-transparent", "bg-0", "opacity-0"],
    correctIndex: 1,
  },
  {
    question: "Which class is used to change the font to a monospace stack?",
    options: ["font-mono", "font-code", "text-mono", "mono"],
    correctIndex: 0,
  },
  {
    question:
      "How do you apply styles to an element only when a parent is hovered (using a group)?",
    options: [
      "parent-hover:child",
      "group-hover:text-black",
      "hover-group:text-black",
      "group:hover-text-black",
    ],
    correctIndex: 1,
  },
  {
    question:
      "What utility is used to add a blur effect to an element's background?",
    options: ["blur", "backdrop-blur", "bg-blur", "filter-blur"],
    correctIndex: 1,
  },
];

export const loadTailwindQuiz = async (): Promise<QuizModule> => ({
  meta: tailwindQuizMeta,
  questions: tailwindQuizQuestions,
});
