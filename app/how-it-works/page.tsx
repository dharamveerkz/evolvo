"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HowItWorksPage() {
  const steps = [
    {
      step: 1,
      icon: "📝",
      title: "50 Adaptive Questions",
      desc: "Each quiz contains 50 carefully crafted questions. Questions and answer options shuffle every attempt to ensure genuine learning.",
      detail: "No two attempts are the same. Master the topic, not the order.",
    },
    {
      step: 2,
      icon: "⏱️",
      title: "Self-Paced Timing",
      desc: "Take your time! Most quizzes take 20-45 minutes. There's no strict timer—learn at your own pace.",
      detail: "Average completion: 25 min • Pause anytime • Resume later",
    },
    {
      step: 3,
      icon: "✍️",
      title: "Enter Your Name",
      desc: "After passing (70%+), enter your full name exactly as you want it to appear on your certificate.",
      detail:
        "This name is permanently linked to your certificate ID for verification.",
    },
    {
      step: 4,
      icon: "🎓",
      title: "Earn Your Certificate",
      desc: "Instantly generate a beautiful, professional certificate with your name, score, quiz title, and unique verification ID.",
      detail: "Each certificate is cryptographically signed and tamper-proof.",
    },
    {
      step: 5,
      icon: "📥",
      title: "Download & Share",
      desc: "Download your certificate as a high-quality PDF. Share it on LinkedIn, add to your resume, or print for your wall.",
      detail:
        "PDF is print-ready • Includes verification URL • Works everywhere",
    },
  ];

  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "calc(100vh - 120px)",
          background: "var(--bg)",
          color: "var(--tx)",
          padding: "40px 20px 60px",
        }}
      >
        {/* Hero */}
        <div
          style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 60px" }}
        >
          <h1
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              marginBottom: 16,
              letterSpacing: "-0.5px",
            }}
          >
            How <span style={{ color: "var(--ac)" }}>Evolvo</span> Works
          </h1>
          <p style={{ color: "var(--mu)", fontSize: 16, lineHeight: 1.7 }}>
            From first question to verified certificate — here's your journey in
            5 simple steps.
          </p>
        </div>

        {/* Visual Flow Timeline */}
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto 60px",
            position: "relative",
          }}
        >
          {/* Connecting line (desktop) */}
          <div
            style={{
              position: "absolute",
              top: 40,
              left: "10%",
              right: "10%",
              height: 2,
              background:
                "linear-gradient(90deg, var(--bd), var(--ac), var(--bd))",
              borderRadius: 2,
              display: "none",
            }}
          />

          {/* Steps Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              position: "relative",
              zIndex: 1,
            }}
          >
            {steps.map((s, i) => (
              <div
                key={s.step}
                style={{
                  background: "var(--sf)",
                  border: "1px solid var(--bd)",
                  borderRadius: 16,
                  padding: 24,
                  position: "relative",
                  transition: "all 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--ac)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--bd)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Step Number Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: 20,
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "var(--ac)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 14,
                    boxShadow: "0 4px 16px rgba(108,99,255,0.4)",
                    border: "3px solid var(--bg)",
                  }}
                >
                  {s.step}
                </div>

                {/* Icon */}
                <div
                  style={{
                    fontSize: 32,
                    marginBottom: 16,
                    textAlign: "center",
                  }}
                >
                  {s.icon}
                </div>

                {/* Content */}
                <h3
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 10,
                    textAlign: "center",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    color: "var(--mu)",
                    fontSize: 14,
                    lineHeight: 1.6,
                    textAlign: "center",
                    marginBottom: 12,
                  }}
                >
                  {s.desc}
                </p>
                <div
                  style={{
                    background: "var(--s2)",
                    borderRadius: 8,
                    padding: "8px 12px",
                    fontSize: 12,
                    color: "var(--mu2)",
                    textAlign: "center",
                    border: "1px dashed var(--bd2)",
                  }}
                >
                  {s.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo Preview */}
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto 60px",
            background: "var(--sf)",
            border: "1px solid var(--bd)",
            borderRadius: 20,
            padding: 32,
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: 24,
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            🎬 See It In Action
          </h2>
          <div
            style={{
              background: "var(--s2)",
              borderRadius: 12,
              padding: 24,
              marginBottom: 20,
              border: "1px solid var(--bd2)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: n === 1 ? "var(--ac)" : "var(--bd2)",
                    transition: "background 0.3s",
                  }}
                />
              ))}
            </div>
            <p style={{ color: "var(--mu)", fontSize: 14 }}>
              <strong style={{ color: "var(--tx)" }}>Quiz Flow:</strong> Start →
              Answer Questions → Pass Threshold → Enter Name → Generate
              Certificate → Download PDF
            </p>
          </div>
          <Link
            href="/quiz/webdev/html"
            style={{
              display: "inline-block",
              background: "var(--ac)",
              color: "#fff",
              padding: "12px 32px",
              borderRadius: 12,
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
              boxShadow: "0 0 20px var(--gl)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--ac2)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--ac)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Try a Demo Quiz →
          </Link>
        </div>

        {/* FAQ Accordion (Optional) */}
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: 24,
              fontWeight: 700,
              marginBottom: 24,
              textAlign: "center",
            }}
          >
            ❓ Common Questions
          </h2>
          {[
            {
              q: "Can I retake a quiz?",
              a: "Yes! Every attempt shuffles questions and answer orders. Your best score is saved, and you can earn a new certificate each time you pass.",
            },
            {
              q: "Are certificates verified?",
              a: "Absolutely. Each certificate has a unique ID and cryptographic signature. Employers can verify authenticity instantly at evolvo.academy/verify.",
            },
            {
              q: "Is Evolvo free?",
              a: "100% free. All quizzes, certificates, progress tracking, and features are free for learners forever.",
            },
            {
              q: "What if I don't pass?",
              a: "No problem! Review the feedback, study the topics, and try again. There's no limit on attempts.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              style={{
                background: "var(--sf)",
                border: "1px solid var(--bd)",
                borderRadius: 12,
                padding: "16px 20px",
                marginBottom: 12,
                cursor: "pointer",
              }}
            >
              <summary
                style={{
                  fontWeight: 600,
                  color: "var(--tx)",
                  fontSize: 15,
                  listStyle: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {faq.q}
                <span style={{ color: "var(--ac)", fontSize: 18 }}>+</span>
              </summary>
              <p
                style={{
                  color: "var(--mu)",
                  fontSize: 14,
                  lineHeight: 1.6,
                  marginTop: 12,
                  paddingLeft: 4,
                }}
              >
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "var(--sf)",
              color: "var(--tx)",
              padding: "10px 24px",
              borderRadius: 10,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
              border: "1px solid var(--bd)",
              transition: "all 0.2s",
              marginRight: 12,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--ac)";
              e.currentTarget.style.color = "var(--ac2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--bd)";
              e.currentTarget.style.color = "var(--tx)";
            }}
          >
            ← Back to Home
          </Link>
          <Link
            href="/quiz"
            style={{
              display: "inline-block",
              background: "var(--ac)",
              color: "#fff",
              padding: "10px 24px",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
              boxShadow: "0 0 16px var(--gl)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--ac2)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--ac)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Start Learning Now →
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
