import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const reactQuizMeta: QuizMeta = {
  id: "react",
  category: "webdev",
  subcategory: "react",
  title: "React Mastery",
  description: "Test your skills in Hooks, Props, State, Routing, and Zustand",
  icon: "⚛️",
  level: "Intermediate",
  questionCount: 50,
  color: "#61dafb",
  featured: true,
  rating: 5,
  passThreshold: 35,
  showCertificate: true,
  estimatedTime: "30 min",
};

export const reactQuizQuestions: QuizQuestion[] = [
  {
    question: "What is JSX?",
    options: [
      "A CSS framework",
      "A syntax extension for JavaScript that looks like HTML",
      "A specific type of database",
      "A React-specific browser",
    ],
    correctIndex: 1,
  },
  {
    question:
      "How do you pass data from a parent component to a child component?",
    options: ["Using state", "Using props", "Using effects", "Using refs"],
    correctIndex: 1,
  },
  {
    question: "Which hook is used to manage functional component local state?",
    options: ["useEffect", "useContext", "useState", "useReducer"],
    correctIndex: 2,
  },
  {
    question:
      "What is the purpose of the dependency array in the useEffect hook?",
    options: [
      "To list all variables used in the component",
      "To specify when the effect should re-run",
      "To define the initial state",
      "To speed up the rendering process",
    ],
    correctIndex: 1,
  },
  {
    question: "Which hook allows you to consume a Context value directly?",
    options: ["useState", "useProvider", "useContext", "useConsumer"],
    correctIndex: 2,
  },
  {
    question: "In React, what is 'lifting state up'?",
    options: [
      "Moving state to a child component",
      "Moving state to a parent component to share it between siblings",
      "Using a global state management library",
      "Deleting state to improve performance",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the 'key' prop used for when rendering lists?",
    options: [
      "To style list items uniquely",
      "To help React identify which items have changed, been added, or removed",
      "To set the index of the array",
      "To encrypt the data",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which hook is used to create a reference to a DOM element or persist values between renders?",
    options: ["useMemo", "useCallback", "useRef", "useEffect"],
    correctIndex: 2,
  },
  {
    question: "What does the 'useMemo' hook return?",
    options: [
      "A memoized function",
      "A memoized value",
      "A new component",
      "A boolean indicating if data changed",
    ],
    correctIndex: 1,
  },
  {
    question:
      "What is the primary library used for routing in React applications?",
    options: ["React Routing", "React Router", "NavigationJS", "RouteMaster"],
    correctIndex: 1,
  },
  {
    question:
      "Which component is used to define a single route in React Router?",
    options: ["<Path>", "<Link>", "<Route>", "<Switch>"],
    correctIndex: 2,
  },
  {
    question:
      "How do you programmatically navigate to a different page in React Router v6?",
    options: [
      "useHistory.push()",
      "useNavigate()",
      "window.location",
      "Router.navigate()",
    ],
    correctIndex: 1,
  },
  {
    question: "What is Zustand?",
    options: [
      "A styling library",
      "A small, fast, and scalable state management solution",
      "A React testing framework",
      "A replacement for Next.js",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you define a store in Zustand?",
    options: ["createStore()", "create()", "initStore()", "useStore()"],
    correctIndex: 1,
  },
  {
    question:
      "Which React hook is used to handle side effects like data fetching?",
    options: ["useState", "useEffect", "useLayoutEffect", "useSideEffect"],
    correctIndex: 1,
  },
  {
    question: "What happens when a component's state changes?",
    options: [
      "The page reloads",
      "The component and its children re-render",
      "Nothing happens until the user clicks",
      "The component is deleted",
    ],
    correctIndex: 1,
  },
  {
    question:
      "How can you prevent a component from re-rendering when props haven't changed?",
    options: [
      "React.memo()",
      "useMemo()",
      "useCallback()",
      "ShouldComponentUpdate",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Which hook would you use to memoize a function definition to prevent unnecessary child renders?",
    options: ["useMemo", "useCallback", "useRef", "useEffect"],
    correctIndex: 1,
  },
  {
    question: "What is a 'Fragment' in React?",
    options: [
      "A piece of a broken component",
      "A wrapper that lets you group a list of children without adding extra nodes to the DOM",
      "A specific type of error",
      "A way to split code",
    ],
    correctIndex: 1,
  },
  {
    question:
      "How do you access URL parameters (like /user/:id) in React Router?",
    options: ["useParams()", "useQuery()", "useLocation()", "getParams()"],
    correctIndex: 0,
  },
  {
    question: "What is the correct way to update a state object in React?",
    options: [
      "state.value = newValue",
      "setState({ ...state, value: newValue })",
      "setState(newValue)",
      "this.update(newValue)",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which hook is used to access the current location object in React Router?",
    options: ["useHistory", "useLocation", "usePath", "useNavigate"],
    correctIndex: 1,
  },
  {
    question: "What is the benefit of using Zustand over Redux?",
    options: [
      "It is more complex",
      "It has less boilerplate and a simpler API",
      "It is built-in to React",
      "It only works with class components",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you get a specific state value from a Zustand store?",
    options: [
      "const value = useStore.get('value')",
      "const value = useStore(state => state.value)",
      "const value = state.value",
      "const value = useStore().value",
    ],
    correctIndex: 1,
  },
  {
    question: "What does the cleanup function in useEffect do?",
    options: [
      "Deletes the component",
      "Clears out temporary variables to prevent memory leaks",
      "Resets the state to initial values",
      "It doesn't exist",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which tag is used for navigation links in React Router to prevent page refreshes?",
    options: ["<a>", "<Href>", "<Link>", "<Navigate>"],
    correctIndex: 2,
  },
  {
    question: "What is a 'Pure Component'?",
    options: [
      "A component without CSS",
      "A component that renders the same output for the same props and state",
      "A component that doesn't use hooks",
      "A component that only uses HTML",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you provide a Context to a component tree?",
    options: [
      "Context.Provide",
      "<Context.Provider>",
      "<Provider>",
      "useProvider",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the Virtual DOM?",
    options: [
      "A direct copy of the browser's DOM",
      "A lightweight representation of the real DOM kept in memory",
      "A type of browser plugin",
      "A server-side database",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which hook is a suitable alternative to useState for complex state logic?",
    options: ["useReducer", "useEffect", "useContext", "useMemo"],
    correctIndex: 0,
  },
  {
    question: "What is the 'children' prop?",
    options: [
      "A list of component IDs",
      "A special prop that passes components/elements located between opening and closing tags",
      "The age of the user",
      "A function that returns state",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you update a Zustand store from outside a component?",
    options: [
      "useStore.setState()",
      "store.update()",
      "dispatch()",
      "Zustand doesn't allow this",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Which component acts as a wrapper for all your routes in React Router v6?",
    options: ["<Router>", "<BrowserRouter>", "<RouteConfig>", "<Main>"],
    correctIndex: 1,
  },
  {
    question: "What is the purpose of the 'useLayoutEffect' hook?",
    options: [
      "To fetch data from an API",
      "To perform DOM measurements and re-render synchronously before the browser paints",
      "To style the layout",
      "To handle routing",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'prop drilling'?",
    options: [
      "A way to speed up props",
      "Passing props through many layers of components to reach a deep child",
      "Using props to create a list",
      "Deleting props",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you create a custom hook in React?",
    options: [
      "By using the 'newHook' keyword",
      "By creating a function that starts with the word 'use'",
      "By extending React.Hook",
      "By using the useStore function",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the 'Strict Mode' in React?",
    options: [
      "A mode that prevents coding errors",
      "A tool for highlighting potential problems in an application during development",
      "A way to make the app load faster",
      "A security feature for forms",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which library is most commonly used with Zustand for persisting state to localStorage?",
    options: ["persist", "storage", "save", "local"],
    correctIndex: 0,
  },
  {
    question:
      "In React Router v6, which component is used to render child routes?",
    options: ["<Child />", "<Outlet />", "<Route />", "<SubView />"],
    correctIndex: 1,
  },
  {
    question: "How do you set an initial value for a piece of state?",
    options: [
      "By passing it as an argument to useState",
      "By calling setState(initialValue)",
      "By defining it in the props",
      "By using the init() function",
    ],
    correctIndex: 0,
  },
  {
    question: "What does 'unmounting' mean in React?",
    options: [
      "The component is being rendered for the first time",
      "The component is being removed from the DOM",
      "The component is updating",
      "The component is being hidden with CSS",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which hook is used for performance optimization by memoizing expensive calculations?",
    options: ["useMemo", "useCallback", "useRef", "useReducer"],
    correctIndex: 0,
  },
  {
    question: "What is the main difference between useMemo and useCallback?",
    options: [
      "useMemo returns a value, useCallback returns a function",
      "useMemo is faster than useCallback",
      "useMemo is for state, useCallback is for effects",
      "There is no difference",
    ],
    correctIndex: 0,
  },
  {
    question: "Which of the following is a rule for React Hooks?",
    options: [
      "Hooks can be called inside loops",
      "Hooks must only be called at the top level of functional components",
      "Hooks can be called in standard JS functions",
      "Hooks must be called after all other logic",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Hydration' in the context of React?",
    options: [
      "Adding water to servers",
      "The process of attaching event listeners to static HTML sent from the server",
      "Converting JSX to HTML",
      "Clearing the cache",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you handle a 404 page in React Router?",
    options: [
      "By using path='*'",
      "By creating a 404.html file",
      "By using path='404'",
      "React Router handles it automatically",
    ],
    correctIndex: 0,
  },
  {
    question: "What is the purpose of 'useId' hook?",
    options: [
      "To find the user's ID",
      "To generate unique IDs for accessibility attributes",
      "To login the user",
      "To identify the component type",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which hook is used to access the router's current search parameters (query strings)?",
    options: ["useQuery", "useSearchParams", "useParams", "useLocation"],
    correctIndex: 1,
  },
  {
    question: "Can Zustand be used outside of React?",
    options: ["Yes", "No"],
    correctIndex: 0,
  },
  {
    question:
      "How do you define multiple routes that should be checked for a match?",
    options: ["<Routes>", "<Switch>", "<Group>", "<AllRoutes>"],
    correctIndex: 0,
  },
];

export const loadReactQuiz = async (): Promise<QuizModule> => ({
  meta: reactQuizMeta,
  questions: reactQuizQuestions,
});
