import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const nextjsQuizMeta: QuizMeta = {
  id: "nextjs",
  category: "webdev",
  subcategory: "react",
  title: "Next.js Mastery",
  description:
    "Master the App Router, Server Components, and full-stack React patterns",
  icon: "▲",
  level: "Advanced",
  questionCount: 50,
  color: "#000000",
  featured: true,
  rating: 5,
  passThreshold: 35,
  showCertificate: true,
  estimatedTime: "30 min",
};

export const nextjsQuizQuestions: QuizQuestion[] = [
  {
    question: "What is Next.js?",
    options: [
      "A CSS-in-JS library",
      "A React framework for building full-stack web applications",
      "A database management system",
      "A testing utility for JavaScript",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which directory is used for the modern file-based routing system in Next.js 13+?",
    options: ["/routes", "/pages", "/app", "/src"],
    correctIndex: 2,
  },
  {
    question:
      "What is the default component type in the Next.js 'app' directory?",
    options: [
      "Client Components",
      "Server Components",
      "Shared Components",
      "Static Components",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which directive must be placed at the top of a file to make it a Client Component?",
    options: [
      "'use client'",
      "'client side'",
      "import { Client } from 'next'",
      "useClient()",
    ],
    correctIndex: 0,
  },
  {
    question: "What is a major benefit of React Server Components (RSC)?",
    options: [
      "They increase the JavaScript bundle size",
      "They allow fetching data directly on the server, reducing client-side JS",
      "They enable the use of useState in every file",
      "They only work with CSS-modules",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which file is used to define the UI that is shared across multiple pages in a route segment?",
    options: ["page.tsx", "layout.tsx", "template.tsx", "global.tsx"],
    correctIndex: 1,
  },
  {
    question: "How do you create a dynamic route segment in Next.js?",
    options: [
      "Using a colon (:id)",
      "Using brackets ([id])",
      "Using a dollar sign ($id)",
      "Using a folder named 'dynamic'",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the purpose of the 'loading.tsx' file?",
    options: [
      "To show a progress bar in the browser console",
      "To automatically create a loading state using React Suspense",
      "To pre-load images",
      "To handle API timeouts",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which file is used to define the unique UI for a specific route?",
    options: ["index.tsx", "view.tsx", "page.tsx", "route.tsx"],
    correctIndex: 2,
  },
  {
    question: "How do you define an API route in the App Router?",
    options: [
      "Creating an api.ts file",
      "Creating a route.ts or route.js file inside a directory",
      "Using the useApi() hook",
      "Defining it inside page.tsx",
    ],
    correctIndex: 1,
  },
  {
    question: "Which of the following cannot be used in a Server Component?",
    options: [
      "async/await",
      "Database queries",
      "useState and useEffect hooks",
      "Fetching data with fetch()",
    ],
    correctIndex: 2,
  },
  {
    question:
      "What is 'Static Site Generation' (SSG) in the context of Next.js?",
    options: [
      "Generating HTML at build time",
      "Generating HTML on every request",
      "Generating HTML only on the client",
      "Using only static CSS",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Server-Side Rendering' (SSR)?",
    options: [
      "Rendering components on the client after load",
      "Generating HTML for each request on the server",
      "Rendering images on a separate server",
      "Caching HTML for 24 hours",
    ],
    correctIndex: 1,
  },
  {
    question:
      "What does 'Incremental Static Regeneration' (ISR) allow you to do?",
    options: [
      "Update static content after the site has been built and deployed",
      "Speed up client-side transitions",
      "Delete old pages automatically",
      "Convert React to Vue",
    ],
    correctIndex: 0,
  },
  {
    question: "Which Next.js component is used for optimized image rendering?",
    options: [
      "<img>",
      "<NextImage>",
      "<Image /> from 'next/image'",
      "<Graphic />",
    ],
    correctIndex: 2,
  },
  {
    question: "What is the purpose of the 'next/link' component?",
    options: [
      "To link external CSS files",
      "To enable client-side navigation between routes",
      "To connect to a database",
      "To download files",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which function was used in the Pages Router to fetch data on every request (SSR)?",
    options: [
      "getStaticProps",
      "getServerSideProps",
      "getInitialProps",
      "useEffect",
    ],
    correctIndex: 1,
  },
  {
    question:
      "In the App Router, how is data usually fetched in a Server Component?",
    options: [
      "Using an async function with the native fetch() API",
      "Using the useFetch() hook",
      "Using getStaticProps",
      "Using axios in a useEffect",
    ],
    correctIndex: 0,
  },
  {
    question: "How do you revalidate cached data in Next.js?",
    options: [
      "refreshData()",
      "Using the revalidateTag or revalidatePath functions",
      "Deleting the .next folder",
      "Restarting the server",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a 'Catch-all' route segment syntax?",
    options: ["[[...folder]]", "[...folder]", "[*folder]", "folder-*"],
    correctIndex: 1,
  },
  {
    question: "What is the benefit of the 'next/font' module?",
    options: [
      "It makes fonts bigger",
      "It automatically optimizes and self-hosts fonts",
      "It provides a list of all Google Fonts in a dropdown",
      "It changes font colors automatically",
    ],
  },
  {
    question: "How do you handle 404 errors in a specific route segment?",
    options: ["404.tsx", "not-found.tsx", "error.tsx", "missing.tsx"],
    correctIndex: 1,
  },
  {
    question: "What is the 'next.config.js' file used for?",
    options: [
      "To write your React components",
      "To configure custom Next.js settings and environment variables",
      "To manage your database connection",
      "To style the application",
    ],
    correctIndex: 1,
  },
  {
    question: "Which component is used to optimize third-party scripts?",
    options: [
      "<Script /> from 'next/script'",
      "<Header />",
      "<LoadScript />",
      "<External />",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Streaming' in Next.js?",
    options: [
      "Watching videos on the site",
      "Breaking down a page's HTML into smaller chunks and progressively sending them to the client",
      "Live-coding in the browser",
      "Sending data via WebSockets only",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which file is used to define error boundaries for a route segment?",
    options: ["catch.tsx", "fail.tsx", "error.tsx", "layout.tsx"],
    correctIndex: 2,
  },
  {
    question: "What is 'Partial Prerendering' (PPR)?",
    options: [
      "A feature that combines static and dynamic rendering on the same page",
      "Rendering only the header of a page",
      "Rendering a page in black and white",
      "Using only half of the server's CPU",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Which hook is used to get the current pathname in a Client Component?",
    options: ["useRouter()", "usePathname()", "useLocation()", "getUrl()"],
    correctIndex: 1,
  },
  {
    question: "What is the 'public' folder used for?",
    options: [
      "To store private API keys",
      "To store static assets like images, robots.txt, and icons",
      "To host the node_modules",
      "To make your code open source",
    ],
    correctIndex: 1,
  },
  {
    question:
      "In Next.js, how do you handle form submissions using the latest patterns?",
    options: [
      "API Routes",
      "Server Actions",
      "onClick handlers only",
      "Local storage",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which attribute is used to optimize images with the <Image /> component?",
    options: [
      "width and height",
      "priority",
      "placeholder",
      "All of the above",
    ],
    correctIndex: 3,
  },
  {
    question: "What happens during 'Pre-fetching'?",
    options: [
      "Next.js downloads the linked page's code in the background as the link enters the viewport",
      "The server restarts",
      "Images are blurred",
      "The user is charged for data",
    ],
    correctIndex: 0,
  },
  {
    question: "What is the 'Hydration' process in Next.js?",
    options: [
      "Cleaning the code",
      "Turning the static HTML into a fully interactive React application on the client",
      "Saving data to the database",
      "Compressing the CSS",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which file allows you to modify the <head> of a page dynamically?",
    options: [
      "head.tsx",
      "layout.tsx",
      "Metadata API in page.tsx or layout.tsx",
      "index.html",
    ],
    correctIndex: 2,
  },
  {
    question: "What are 'Parallel Routes'?",
    options: [
      "Routes that run on different servers",
      "A feature that allows you to simultaneously render one or more pages in the same layout",
      "A way to copy a folder",
      "Using two routers at once",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Intercepting Routes'?",
    options: [
      "Stopping a user from visiting a page",
      "Loading a route within the current layout while keeping the context of the current page",
      "Redirecting all traffic to Google",
      "Hacking the URL",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which CSS approach is natively supported and optimized by Next.js?",
    options: ["CSS Modules", "Tailwind CSS", "Sass", "All of the above"],
    correctIndex: 3,
  },
  {
    question: "What is the purpose of 'generateStaticParams'?",
    options: [
      "To generate random numbers",
      "To specify which dynamic routes should be pre-rendered at build time",
      "To create new API keys",
      "To validate form input",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which environment variable prefix is required to expose a variable to the browser?",
    options: ["SECRET_", "NEXT_PUBLIC_", "BROWSER_", "APP_"],
    correctIndex: 1,
  },
  {
    question: "What does the 'middleware.ts' file allow you to do?",
    options: [
      "Style your components",
      "Run code before a request is completed (e.g., for authentication or redirects)",
      "Connect to MongoDB",
      "Create a global store",
    ],
    correctIndex: 1,
  },
  {
    question: "Which Next.js feature helps reduce the First Input Delay (FID)?",
    options: [
      "Static rendering and Streaming",
      "Using more images",
      "Disabling JavaScript",
      "Using large CSS files",
    ],
    correctIndex: 0,
  },
  {
    question: "What is the 'Force Dynamic' export used for?",
    options: [
      "To speed up the build",
      "To ensure a page is always rendered on the server for every request",
      "To disable CSS",
      "To force the user to refresh",
    ],
    correctIndex: 1,
  },
  {
    question:
      "How do you define metadata like 'title' and 'description' for SEO?",
    options: [
      "Using the <meta> tag manually in every component",
      "Exporting a 'metadata' object or 'generateMetadata' function",
      "Creating an seo.json file",
      "It's handled automatically by Google",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the 'Server-only' package used for?",
    options: [
      "To make the server faster",
      "To prevent server-side code from being accidentally imported into Client Components",
      "To host the app on a private server",
      "To disable the client",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which hook is used to access search parameters in a Client Component?",
    options: [
      "useParams()",
      "useSearchParams()",
      "useQuery()",
      "useRouter().query",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Route Segment Config'?",
    options: [
      "Variables like 'revalidate' or 'dynamic' that control the behavior of a page/layout",
      "A way to name your routes",
      "A CSS setting",
      "A database configuration",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Instrumentation' (instrumentation.ts) used for?",
    options: [
      "To play music on the site",
      "To integrate monitoring and logging tools into the Next.js lifecycle",
      "To debug CSS",
      "To create animations",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which caching layer in Next.js stores data across multiple requests?",
    options: [
      "Request Memoization",
      "Data Cache",
      "Full Route Cache",
      "Both 1 and 2",
    ],
    correctIndex: 3,
  },
  {
    question: "What is a 'Draft Mode'?",
    options: [
      "A mode for writing blog posts",
      "A feature to preview unpublished content from a CMS",
      "A way to see the code before it's minified",
      "A low-quality image mode",
    ],
    correctIndex: 1,
  },
  {
    question: "Which command builds the Next.js application for production?",
    options: ["next dev", "next build", "next start", "next export"],
    correctIndex: 1,
  },
];

export const loadNextjsQuiz = async (): Promise<QuizModule> => ({
  meta: nextjsQuizMeta,
  questions: nextjsQuizQuestions,
});
