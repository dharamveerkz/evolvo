"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  getAllQuizMetadata,
  getFeaturedQuizzes,
  getQuizzesByCategory,
} from "../lib/quizzes";
import type { QuizMeta } from "../lib/quizzes/types";

const CATEGORY_CONFIG: Record<
  string,
  { icon: string; name: string; color: string; glow: string; desc: string }
> = {
  webdev: {
    icon: "🌐",
    name: "Web Development",
    color: "#6c63ff",
    glow: "rgba(108,99,255,0.14)",
    desc: "Frontend, backend & full-stack",
  },
  datascience: {
    icon: "📊",
    name: "Data Analytics",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.14)",
    desc: "Data, insights & visualization",
  },
};

const LEVEL_STYLE = {
  Beginner: { bg: "rgba(16,185,129,0.13)", color: "#34d399" },
  Intermediate: { bg: "rgba(245,158,11,0.13)", color: "#fbbf24" },
  Advanced: { bg: "rgba(239,68,68,0.13)", color: "#f87171" },
};

export default function Home() {
  // ✅ EXISTING STATE
  const [mounted, setMounted] = useState(false);
  const [openProf, setOpenProf] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState("home");

  // ✅ NEW STATE FOR EXPLORE DROPDOWN
  const [showExplore, setShowExplore] = useState(false);

  const profRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);

  // Existing mount effect
  useEffect(() => setMounted(true), []);

  // ✅ NEW EFFECT: Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(e.target as Node)
      ) {
        setShowExplore(false);
      }
    };
    if (showExplore) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showExplore]);

  const toggleProf = (id: string) => {
    const next = openProf === id ? null : id;
    setOpenProf(next);
    if (next) {
      setTimeout(
        () =>
          profRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          }),
        60,
      );
    }
  };

  const byCategory = getQuizzesByCategory();
  const featured = getFeaturedQuizzes(6);

  const professions = Object.entries(byCategory).map(([catId, quizzes]) => {
    const config = CATEGORY_CONFIG[catId] || {
      icon: "📚",
      name: catId,
      color: "#6c63ff",
      glow: "rgba(108,99,255,0.14)",
      desc: "Explore topics",
    };
    return {
      id: catId,
      icon: config.icon,
      name: config.name,
      color: config.color,
      glow: config.glow,
      desc: config.desc,
      quizCount: quizzes.reduce((sum, q) => sum + q.questionCount, 0),
      subtopics: quizzes.map((q: QuizMeta) => ({
        name: q.title,
        icon: q.icon,
        level: q.level,
        questions: q.questionCount,
        color: q.color,
        link: `/quiz/${q.category}/${q.subcategory}`,
      })),
    };
  });

  const featuredQuizzes = featured.map((q: QuizMeta) => ({
    tag: q.subcategory.toUpperCase(),
    tc: q.color,
    tb: `${q.color}1f`,
    title: q.title,
    q: q.questionCount,
    t: q.estimatedTime || "15 min",
    diff: "★".repeat(q.rating || 3) + "☆".repeat(5 - (q.rating || 3)),
    r: q.rating || 3,
    link: `/quiz/${q.category}/${q.subcategory}`,
  }));

  return (
    <div
      className="app"
      style={{ opacity: mounted ? 1 : 0, transition: "opacity .4s" }}
    >
      <Header />

      {/* Hero */}
      <div className="hero">
        <div className="badge">
          <span className="bdot" />
          100+ Topics · Every Profession
        </div>
        <h1 className="h1">
          Test. Learn. <br />
          <em>Improve.</em> Repeat.
        </h1>
        <p className="hsub">
          Adaptive quizzes for every field — from web development to medicine.
          Track growth, earn certificates, master every topic.
        </p>

        {/* ✅ FIXED: Single .hcta with dropdown + How it works link */}
        <div className="hcta" style={{ position: "relative" }}>
          {/* Explore Quizzes Button */}
          <button
            className="blg blg-p"
            onClick={() => setShowExplore(!showExplore)}
            style={{ position: "relative", zIndex: 2 }}
          >
            Explore Quizzes →
          </button>

          {/* Dropdown Menu */}
          {showExplore && (
            <div
              ref={exploreRef}
              style={{
                position: "absolute",
                top: "calc(100% + 10px)",
                left: 0,
                background: "var(--s2)",
                border: "1px solid var(--bd)",
                borderRadius: 14,
                padding: 12,
                zIndex: 50,
                boxShadow: "0 20px 48px rgba(0,0,0,0.6)",
                minWidth: 260,
                animation: "fadeIn 0.2s ease",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: "var(--mu)",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  marginBottom: 10,
                  paddingLeft: 4,
                }}
              >
                Select a Category
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  {
                    id: "webdev",
                    name: "Web Development",
                    icon: "🌐",
                    color: "#6c63ff",
                  },
                  {
                    id: "datascience",
                    name: "Data Analytics",
                    icon: "📊",
                    color: "#f59e0b",
                  },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setShowExplore(false);
                      if (openProf === cat.id) {
                        profRef.current?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      } else {
                        setOpenProf(cat.id);
                        setTimeout(
                          () =>
                            profRef.current?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            }),
                          60,
                        );
                      }
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 14px",
                      borderRadius: 10,
                      background: "var(--sf)",
                      border: "1px solid var(--bd)",
                      color: "var(--tx)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      fontWeight: 500,
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = cat.color;
                      e.currentTarget.style.transform = "translateX(4px)";
                      e.currentTarget.style.background = "var(--s3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--bd)";
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.background = "var(--sf)";
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ✅ How it works - NOW A PROPER LINK */}
          <Link href="/how-it-works">
            <button className="blg blg-o">How it works</button>
          </Link>
        </div>

        {/* Stats */}
        <div className="stats">
          {[
            ["50K+", "Learners"],
            ["1,200+", "Quizzes"],
            ["30+", "Professions"],
            ["4.9★", "Rating"],
          ].map(([n, l], i, a) => (
            <div
              key={l}
              style={{
                display: "flex",
                alignItems: "center",
                gap: i === a.length - 1 ? 0 : 28,
              }}
            >
              <div>
                <div className="snum">{n}</div>
                <div className="slbl">{l}</div>
              </div>
              {i < a.length - 1 && <div className="sdiv" />}
            </div>
          ))}
        </div>
      </div>

      {/* First Quiz / Resume Strip */}
      <div className="resume">
        <div className="rstrip">
          <div style={{ fontSize: 34 }}>🔥</div>
          <div>
            <div className="rtitle">Start from the basics</div>
            <div className="rsub">HTML Mastery —</div>
          </div>
          <Link
            href="/quiz/webdev/html"
            style={{
              marginLeft: "auto",
              flexShrink: 0,
              display: "inline-block",
            }}
          >
            <button className="rbtn">Html Quiz →</button>
          </Link>
        </div>
      </div>

      {/* Browse by Profession */}
      <section className="sec" ref={profRef}>
        <div className="sec-hdr">
          <div>
            <div className="sec-ttl">Browse by Profession</div>
            <div className="sec-note">
              Click any field to explore its subtopics
            </div>
          </div>
          <span className="sec-lnk">View all →</span>
        </div>

        <div className="pgrid">
          {professions.map((prof) => (
            <div
              key={prof.id}
              className={`pcard${openProf === prof.id ? " active" : ""}`}
              style={
                { "--pc": prof.color, "--pg": prof.glow } as React.CSSProperties
              }
              onClick={() => toggleProf(prof.id)}
            >
              <div
                className="pcard-glow"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${prof.glow}, transparent 70%)`,
                }}
              />
              <span className="picon">{prof.icon}</span>
              <div className="pname">{prof.name}</div>
              <div className="pdesc">{prof.desc}</div>
              <div className="pmeta">
                <span className="ptag">{prof.quizCount} quizzes</span>
                <span className="parr">▼</span>
              </div>
            </div>
          ))}
        </div>

        {/* Subtopics Panel */}
        <div className={`panel-wrap${openProf ? " open" : ""}`}>
          {openProf && (
            <div className="panel">
              <div className="panel-head">
                <span className="panel-icon">
                  {professions.find((p) => p.id === openProf)?.icon}
                </span>
                <div>
                  <div className="panel-title">
                    {professions.find((p) => p.id === openProf)?.name}
                  </div>
                  <div className="panel-sub">
                    Pick a subtopic to start quizzing
                  </div>
                </div>
                <button
                  className="panel-close"
                  onClick={() => setOpenProf(null)}
                >
                  ✕ Close
                </button>
              </div>
              <div className="sgrid">
                {professions
                  .find((p) => p.id === openProf)
                  ?.subtopics.map((sub, i) => {
                    const lv =
                      LEVEL_STYLE[sub.level as keyof typeof LEVEL_STYLE];
                    return (
                      <div
                        className="scard"
                        key={i}
                        style={{ "--sc": sub.color } as React.CSSProperties}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="scard-top">
                          <span className="sicon">{sub.icon}</span>
                          <span
                            className="slvl"
                            style={{ background: lv.bg, color: lv.color }}
                          >
                            {sub.level}
                          </span>
                        </div>
                        <div className="sname">{sub.name}</div>
                        <div className="smeta">
                          <span className="sq">
                            📝 {sub.questions} questions
                          </span>
                          <Link href={sub.link}>
                            <button className="sbtn2">Start →</button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Quizzes */}
      <section className="sec">
        <div className="sec-hdr">
          <div className="sec-ttl">Featured Quizzes</div>
          <span className="sec-lnk">See all →</span>
        </div>
        <div className="fgrid">
          {featuredQuizzes.map((q, i) => (
            <div className="qcard" key={i}>
              <div className="qtop">
                <span
                  className="qtag"
                  style={{ color: q.tc, background: q.tb }}
                >
                  {q.tag}
                </span>
                <span className="qdiff">{q.diff}</span>
              </div>
              <div className="qtitle">{q.title}</div>
              <div className="qmeta">
                <span className="qmi">📝 {q.q} questions</span>
                <span className="qmi">⏱ {q.t}</span>
              </div>
              <div className="qfoot">
                <span className="qstars">
                  {"★".repeat(q.r)}
                  {"☆".repeat(5 - q.r)}
                </span>
                <Link href={q.link}>
                  <button className="qbtn">Start Quiz →</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Mobile Nav */}
      <nav className="mnav">
        <div className="mnav-in">
          {[
            {
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
              ),
              label: "Home",
              href: "/",
            },
            {
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              ),
              label: "Search",
              href: "#search",
              action: "focus-search",
            },
            {
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
              ),
              label: "Categories",
              href: "#categories",
              action: "scroll-categories",
            },
            {
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ),
              label: "Leaderboard",
              href: "/about",
            },
            {
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              ),
              label: "Profile",
              href: "/blog",
            },
          ].map((item, i) => {
            const isActive = activeNav === item.label.toLowerCase();

            // Special actions for non-route items
            const handleClick = (e: React.MouseEvent) => {
              e.preventDefault();
              setActiveNav(item.label.toLowerCase());

              if (item.action === "focus-search") {
                const searchInput = document.querySelector(
                  ".sinput",
                ) as HTMLInputElement;
                if (searchInput) {
                  searchInput.focus();
                  searchInput.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }
              }
              if (item.action === "scroll-categories") {
                profRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                // Adjust for fixed header
                setTimeout(
                  () => window.scrollBy({ top: -60, behavior: "smooth" }),
                  100,
                );
              }
            };

            // Direct route links
            if (item.href.startsWith("/") && !item.action) {
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`mni${isActive ? " active" : ""}`}
                  onClick={() => setActiveNav(item.label.toLowerCase())}
                >
                  <span
                    className="mni-ico"
                    style={{ color: isActive ? "var(--ac2)" : "var(--mu)" }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="mni-lbl"
                    style={{ color: isActive ? "var(--ac2)" : "var(--mu)" }}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            }

            // Action-based items (search, categories)
            return (
              <div
                key={i}
                className={`mni${isActive ? " active" : ""}`}
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              >
                <span
                  className="mni-ico"
                  style={{ color: isActive ? "var(--ac2)" : "var(--mu)" }}
                >
                  {item.icon}
                </span>
                <span
                  className="mni-lbl"
                  style={{ color: isActive ? "var(--ac2)" : "var(--mu)" }}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
