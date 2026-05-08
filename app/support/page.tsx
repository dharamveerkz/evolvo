"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SupportPage() {
  const sections = [
    { id: "help", label: "Help Center" },
    { id: "contact", label: "Contact" },
    { id: "privacy", label: "Privacy" },
    { id: "terms", label: "Terms" },
  ];

  const faqs = [
    {
      q: "How do I start a quiz?",
      a: "Navigate to the Home page, choose a profession, click a subtopic, and hit 'Start Quiz'. Questions shuffle automatically every attempt.",
    },
    {
      q: "How are certificates verified?",
      a: "Each certificate includes a unique ID and timestamp. Employers can verify them instantly at evolvo.academy/verify.",
    },
    {
      q: "Can I retake a quiz?",
      a: "Yes! Every attempt shuffles questions and answer orders. The pass threshold is usually 70% unless specified otherwise.",
    },
    {
      q: "Is Evolvo free?",
      a: "Absolutely. All quizzes, certificates, progress tracking, and features are 100% free for learners.",
    },
    {
      q: "How do I download my certificate?",
      a: "After passing, enter your full name and click 'Download PDF'. You can print, save, or share it instantly.",
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
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* Hero */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                marginBottom: 12,
              }}
            >
              Support & <span style={{ color: "var(--ac)" }}>Resources</span>
            </h1>
            <p style={{ color: "var(--mu)", fontSize: 16 }}>
              Everything you need to know about Evolvo Academy
            </p>
          </div>

          {/* Quick Nav */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              marginBottom: 48,
              flexWrap: "wrap",
            }}
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  background: "var(--sf)",
                  border: "1px solid var(--bd)",
                  borderRadius: 20,
                  padding: "8px 20px",
                  color: "var(--mu)",
                  textDecoration: "none",
                  fontSize: 14,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--ac)";
                  e.currentTarget.style.color = "var(--tx)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--bd)";
                  e.currentTarget.style.color = "var(--mu)";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Help Center */}
          <section id="help" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 20,
                color: "var(--tx)",
              }}
            >
              🎯 Help Center
            </h2>
            <div style={{ display: "grid", gap: 16 }}>
              {faqs.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--sf)",
                    border: "1px solid var(--bd)",
                    borderRadius: 12,
                    padding: "16px 20px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "var(--tx)",
                      marginBottom: 6,
                    }}
                  >
                    {item.q}
                  </h3>
                  <p
                    style={{
                      color: "var(--mu)",
                      fontSize: 14,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 20,
                color: "var(--tx)",
              }}
            >
              📬 Contact Us
            </h2>
            <div
              style={{
                background: "var(--sf)",
                border: "1px solid var(--bd)",
                borderRadius: 12,
                padding: 24,
              }}
            >
              <p
                style={{
                  color: "var(--mu)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                Have questions, feedback, or partnership inquiries? We'd love to
                hear from you.
              </p>
              <div style={{ display: "grid", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 20 }}>📧</span>
                  <span style={{ color: "var(--tx)", fontSize: 14 }}>
                    support@evolvo.academy
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 20 }}>💬</span>
                  <span style={{ color: "var(--tx)", fontSize: 14 }}>
                    @evolvoacademy on all social platforms
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 20 }}>🌐</span>
                  <span style={{ color: "var(--tx)", fontSize: 14 }}>
                    Evolvo Academy Community Discord
                  </span>
                </div>
              </div>
              <div
                style={{
                  marginTop: 20,
                  padding: "12px 16px",
                  background: "rgba(108,99,255,0.08)",
                  borderRadius: 8,
                  border: "1px solid rgba(108,99,255,0.2)",
                }}
              >
                <p style={{ color: "var(--ac2)", fontSize: 13, margin: 0 }}>
                  ⚡ We typically respond within 24 hours on business days.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Policy */}
          <section id="privacy" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 20,
                color: "var(--tx)",
              }}
            >
              🔒 Privacy Policy
            </h2>
            <div
              style={{
                background: "var(--sf)",
                border: "1px solid var(--bd)",
                borderRadius: 12,
                padding: 24,
                fontSize: 14,
                lineHeight: 1.7,
                color: "var(--mu)",
              }}
            >
              <p style={{ marginBottom: 12 }}>
                At Evolvo, your privacy is a priority. This summary outlines how
                we handle your information:
              </p>
              <ul style={{ paddingLeft: 20, margin: "12px 0" }}>
                <li>
                  <strong style={{ color: "var(--tx)" }}>
                    Data Collection:
                  </strong>{" "}
                  We only collect your name (for certificates) and quiz progress
                  (to track improvement). No personal identifiers are required
                  to use the platform.
                </li>
                <li>
                  <strong style={{ color: "var(--tx)" }}>Usage:</strong> Data is
                  used solely to generate certificates, improve quiz quality,
                  and provide personalized learning suggestions.
                </li>
                <li>
                  <strong style={{ color: "var(--tx)" }}>Security:</strong> All
                  data is encrypted in transit and stored securely. We never
                  sell, share, or monetize user data.
                </li>
                <li>
                  <strong style={{ color: "var(--tx)" }}>Cookies:</strong> We
                  use essential cookies for session management and analytics to
                  improve performance. You can disable them in your browser
                  settings.
                </li>
                <li>
                  <strong style={{ color: "var(--tx)" }}>Your Rights:</strong>{" "}
                  You can request data deletion or export at any time by
                  contacting support.
                </li>
              </ul>
              <p style={{ fontSize: 12, color: "var(--mu2)", marginTop: 12 }}>
                Last updated: May 2026
              </p>
            </div>
          </section>

          {/* Terms of Service */}
          <section id="terms" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 20,
                color: "var(--tx)",
              }}
            >
              📜 Terms of Service
            </h2>
            <div
              style={{
                background: "var(--sf)",
                border: "1px solid var(--bd)",
                borderRadius: 12,
                padding: 24,
                fontSize: 14,
                lineHeight: 1.7,
                color: "var(--mu)",
              }}
            >
              <p style={{ marginBottom: 12 }}>
                By using Evolvo Academy, you agree to the following terms:
              </p>
              <ul style={{ paddingLeft: 20, margin: "12px 0" }}>
                <li>
                  <strong style={{ color: "var(--tx)" }}>Intended Use:</strong>{" "}
                  Evolvo is designed for educational and skill-verification
                  purposes. Certificates are for professional development, not
                  official academic accreditation.
                </li>
                <li>
                  <strong style={{ color: "var(--tx)" }}>
                    Account Integrity:
                  </strong>{" "}
                  Each user is responsible for their own progress. Automated
                  cheating, scraping, or sharing quiz answers is prohibited.
                </li>
                <li>
                  <strong style={{ color: "var(--tx)" }}>
                    Content Ownership:
                  </strong>{" "}
                  All quiz questions, designs, and branding are proprietary to
                  Evolvo. Unauthorized reproduction is not permitted.
                </li>
                <li>
                  <strong style={{ color: "var(--tx)" }}>
                    Service Availability:
                  </strong>{" "}
                  We strive for 99.9% uptime but do not guarantee uninterrupted
                  access. Updates may occur with minimal notice.
                </li>
                <li>
                  <strong style={{ color: "var(--tx)" }}>Liability:</strong>{" "}
                  Evolvo is not liable for decisions made based on quiz results
                  or certificates. Use the platform at your own discretion.
                </li>
              </ul>
              <p style={{ fontSize: 12, color: "var(--mu2)", marginTop: 12 }}>
                Last updated: May 2026
              </p>
            </div>
          </section>

          {/* Back to Home */}
          <div style={{ textAlign: "center", marginTop: 20 }}>
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
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
