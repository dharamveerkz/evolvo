"use client";

import { useState } from "react";
import Link from "next/link";
import { searchQuizzes } from "../lib/quizzes";

const SEARCH_ICONS: Record<string, string> = {
  html: "🧱",
  css: "🎨",
  sql: "🗄️",
  webdev: "🌐",
  datascience: "📊",
};

export default function Header() {
  const [search, setSearch] = useState("");
  const [showSR, setShowSR] = useState(false);

  const filtered = searchQuizzes(search);

  return (
    <header className="hdr">
      <div className="hdr-in">
        <Link href="/" className="logo">
          <div className="ldot" /> Evolvo
        </Link>
        <div className="sw">
          <span className="si">🔍</span>
          <input
            className="sinput"
            placeholder="Search topics, quizzes..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSR(true);
            }}
            onFocus={() => setShowSR(true)}
            onBlur={() => setTimeout(() => setShowSR(false), 160)}
          />
          {showSR && filtered.length > 0 && (
            <div className="sr-drop">
              {filtered.map((s) => (
                <Link
                  key={s.id}
                  href={`/quiz/${s.category}/${s.subcategory}`}
                  className="sr-item"
                >
                  <span style={{ fontSize: 15 }}>
                    {SEARCH_ICONS[s.subcategory] || "📚"}
                  </span>
                  <span style={{ fontSize: 13.5, color: "var(--tx)" }}>
                    {s.title}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "var(--mu)",
                      marginLeft: "auto",
                    }}
                  >
                    {s.category}
                  </span>
                </Link>
              ))}
            </div>
          )}
          {showSR && search && filtered.length === 0 && (
            <div
              className="sr-item"
              style={{ cursor: "default", color: "var(--mu)" }}
            >
              No results found
            </div>
          )}
        </div>
        <div className="hacts">
          <a href="/about" className="btn-p" style={{ textDecoration: "none" }}>
            About
          </a>
          <Link
            href="/blog"
            className="btn-p"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: 13,
              marginRight: 10,
            }}
          >
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}
