"use client";

import { useState } from "react";
import Link from "next/link";
import { searchQuizzes } from "../lib/quizzes";

const SEARCH_ICONS: Record<string, string> = {
  html: "🧱",
  css: "🎨",
  sql: "🗄️",
  js: "⚡",
  python: "🐍",
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
        {/* Logo */}
        <Link href="/" className="logo">
          <div className="ldot" /> Evolvo
        </Link>

        {/* Search Bar */}
        <div className="sw">
          <span className="si">🔍</span>
          <input
            id="search" // 👈 Added for mobile nav scroll-to-search
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

          {/* Search Results Dropdown */}
          {showSR && filtered.length > 0 && (
            <div className="sr-drop">
              {filtered.map((s) => (
                <Link
                  key={s.id}
                  href={`/quiz/${s.category}/${s.subcategory}`}
                  className="sr-item"
                  onClick={() => {
                    setShowSR(false);
                    setSearch("");
                  }}
                >
                  <span style={{ fontSize: 15, marginRight: 8 }}>
                    {SEARCH_ICONS[s.subcategory] ||
                      SEARCH_ICONS[s.category] ||
                      "📚"}
                  </span>
                  <span style={{ fontSize: 13.5, color: "var(--tx)", flex: 1 }}>
                    {s.title}
                  </span>
                  <span
                    style={{ fontSize: 11, color: "var(--mu)", marginLeft: 8 }}
                  >
                    {s.category}
                  </span>
                </Link>
              ))}
            </div>
          )}

          {/* Empty State */}
          {showSR && search && filtered.length === 0 && (
            <div
              className="sr-item"
              style={{ cursor: "default", color: "var(--mu)" }}
            >
              No results for "{search}"
            </div>
          )}
        </div>

        {/* Header Actions */}
        <div className="hacts">
          <Link
            href="/about"
            className="btn-g"
            style={{ textDecoration: "none" }}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="btn-p"
            style={{ textDecoration: "none" }}
          >
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}
