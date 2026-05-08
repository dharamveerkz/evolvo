"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { blogPosts } from "@/lib/blogPosts";

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "calc(100vh - 120px)",
          background: "var(--bg)",
          color: "var(--tx)",
          padding: "40px 20px",
        }}
      >
        <div
          style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 60px" }}
        >
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              marginBottom: 12,
            }}
          >
            Latest from Our <span style={{ color: "var(--ac)" }}>Blog</span>
          </h1>
          <p style={{ color: "var(--mu)", fontSize: 16 }}>
            Short reads on tech, learning, and growth.
          </p>
        </div>

        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {sortedPosts.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <article
                style={{
                  background: "var(--sf)",
                  border: "1px solid var(--bd)",
                  borderRadius: 16,
                  padding: 24,
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--ac)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--bd)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--ac2)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  {post.category}
                </span>
                <h2
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    margin: "10px 0",
                    lineHeight: 1.4,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    color: "var(--mu)",
                    fontSize: 14,
                    lineHeight: 1.5,
                    marginBottom: 16,
                  }}
                >
                  {post.excerpt}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 12,
                    color: "var(--mu2)",
                  }}
                >
                  <span>📅 {post.date}</span>
                  <span>⏱ {post.readTime}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
