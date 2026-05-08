export interface BlogPost {
  id: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 HTML5 Features You're Not Using",
    category: "Web Dev",
    readTime: "4 min",
    date: "2026-05-08",
    excerpt: "Boost performance and accessibility with hidden HTML5 gems.",
    tags: ["HTML", "Tips"],
  },
  {
    id: 2,
    title: "CSS Grid vs Flexbox: The Short Guide",
    category: "Web Dev",
    readTime: "5 min",
    date: "2026-05-06",
    excerpt: "When to use which layout system for modern responsive design.",
    tags: ["CSS", "Layout"],
  },
  {
    id: 3,
    title: "AI in Education: 2026 Trends",
    category: "AI & Tech",
    readTime: "6 min",
    date: "2026-05-04",
    excerpt: "How adaptive learning and AI tutors are reshaping classrooms.",
    tags: ["AI", "Future"],
  },
];
