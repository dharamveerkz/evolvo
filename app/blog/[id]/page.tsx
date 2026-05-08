import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

// Pre-build routes at build time for fast loading
export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id.toString() }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));
  if (!post) notFound();

  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "calc(100vh - 120px)",
          background: "var(--bg)",
          color: "var(--tx)",
          padding: "40px 20px",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        <article
          style={{
            background: "var(--sf)",
            border: "1px solid var(--bd)",
            borderRadius: 16,
            padding: 32,
          }}
        >
          <span
            style={{
              fontSize: 12,
              color: "var(--ac2)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            {post.category}
          </span>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              margin: "12px 0",
            }}
          >
            {post.title}
          </h1>

          <div
            style={{
              display: "flex",
              gap: 16,
              fontSize: 13,
              color: "var(--mu)",
              marginBottom: 24,
              flexWrap: "wrap",
            }}
          >
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime}</span>
            <span>🏷️ {post.tags.join(", ")}</span>
          </div>

          <div style={{ borderTop: "1px solid var(--bd)", paddingTop: 24 }}>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--tx)",
                marginBottom: 16,
              }}
            >
              {post.excerpt}
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--mu)" }}>
              (Full article content would be stored here. In production, connect
              to a Markdown/MDX parser or CMS to render long-form posts.)
            </p>
          </div>
        </article>

        <BackButton />
      </main>
      <Footer />
    </>
  );
}
