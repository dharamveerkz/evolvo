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
  const [mounted, setMounted] = useState(false);
  const [openProf, setOpenProf] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState("home");
  const profRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

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

  const allQuizzes = getAllQuizMetadata();
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
        <div className="hcta">
          <button className="blg blg-p">Explore Quizzes →</button>
          <button className="blg blg-o">How it works</button>
        </div>
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

      {/* Resume Strip */}
      <div className="resume">
        <div className="rstrip">
          <div style={{ fontSize: 34 }}>🔥</div>
          <div>
            <div className="rtitle">Continue where you left off</div>
            <div className="rsub">
              HTML Mastery — 64 of 100 questions completed
            </div>
          </div>
          <button className="rbtn">Resume →</button>
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
            { icon: "🏠", label: "Home", id: "home" },
            { icon: "🔍", label: "Explore", id: "explore" },
            { icon: "📚", label: "My Quizzes", id: "mine" },
            { icon: "🏆", label: "Leaderboard", id: "rank" },
            { icon: "👤", label: "Profile", id: "profile" },
          ].map((n) => (
            <div
              key={n.id}
              className={`mni${activeNav === n.id ? " active" : ""}`}
              onClick={() => setActiveNav(n.id)}
            >
              <span className="mni-ico">{n.icon}</span>
              <span className="mni-lbl">{n.label}</span>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
