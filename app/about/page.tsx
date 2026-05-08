"use client";
// app/about/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "calc(100vh - 120px)",
          background: "var(--bg)",
          color: "var(--tx)",
          paddingTop: 40,
          paddingBottom: 60,
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            textAlign: "center",
            maxWidth: 800,
            margin: "0 auto",
            padding: "40px 20px 60px",
          }}
        >
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            About <span style={{ color: "var(--ac)" }}>Evolvo</span>
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "var(--mu)",
              lineHeight: 1.6,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Evolvo is an adaptive learning platform designed to make skill
            verification accessible, engaging, and universally recognized across
            every profession.
          </p>
        </section>

        {/* Mission Section */}
        <section
          style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 40px" }}
        >
          <div
            style={{
              background: "var(--sf)",
              border: "1px solid var(--bd)",
              borderRadius: 16,
              padding: "32px",
              marginBottom: 24,
            }}
          >
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 16,
                color: "var(--tx)",
              }}
            >
              🎯 Our Mission
            </h2>
            <p
              style={{
                color: "var(--mu)",
                fontSize: 15,
                lineHeight: 1.7,
                marginBottom: 12,
              }}
            >
              We believe that learning should be continuous, measurable, and
              rewarding. Evolvo bridges the gap between knowledge and
              professional credibility by offering rigorous, adaptive quizzes
              that test real understanding—not just memorization.
            </p>
            <p style={{ color: "var(--mu)", fontSize: 15, lineHeight: 1.7 }}>
              Whether you're a student building your foundation, a professional
              upskilling for career growth, or an employer verifying candidate
              skills, Evolvo provides a trusted, scalable solution for lifelong
              learning.
            </p>
          </div>

          {/* Features Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
              marginBottom: 24,
            }}
          >
            {[
              {
                icon: "🔄",
                title: "Adaptive Learning",
                desc: "Every quiz shuffles questions and answer orders, ensuring genuine mastery and preventing rote memorization.",
              },
              {
                icon: "📜",
                title: "Verified Certificates",
                desc: "Earn beautiful, downloadable certificates with unique IDs that employers can instantly verify.",
              },
              {
                icon: "🌐",
                title: "Every Profession",
                desc: "From Web Development to Medicine, Data Science to Business—curated quizzes for every field.",
              },
              {
                icon: "📊",
                title: "Progress Tracking",
                desc: "Monitor your growth with detailed score analytics, pass rates, and personalized recommendations.",
              },
              {
                icon: "🔒",
                title: "Secure & Private",
                desc: "Your data belongs to you. We never sell information and use industry-standard encryption.",
              },
              {
                icon: "🚀",
                title: "Always Evolving",
                desc: "New topics, questions, and features added regularly based on community feedback and industry trends.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                style={{
                  background: "var(--sf)",
                  border: "1px solid var(--bd)",
                  borderRadius: 16,
                  padding: "24px",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--ac)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--bd)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 8,
                    color: "var(--tx)",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{ color: "var(--mu)", fontSize: 14, lineHeight: 1.6 }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div
            style={{
              background: "var(--sf)",
              border: "1px solid var(--bd)",
              borderRadius: 16,
              padding: "32px",
              marginBottom: 24,
            }}
          >
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 20,
                color: "var(--tx)",
              }}
            >
              ⚙️ How Evolvo Works
            </h2>
            <ol
              style={{
                color: "var(--mu)",
                fontSize: 15,
                lineHeight: 1.8,
                paddingLeft: 20,
                listStyle: "none",
                counterReset: "step",
              }}
            >
              {[
                "Choose a profession or topic that aligns with your goals.",
                "Select a subtopic and start an adaptive quiz—questions shuffle every attempt.",
                "Answer thoughtfully; get instant feedback to reinforce learning.",
                "Pass the threshold to unlock a verified, downloadable certificate.",
                "Track your progress, retake to improve, and showcase your achievements.",
              ].map((step, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: 12,
                    paddingLeft: 28,
                    position: "relative",
                    counterIncrement: "step",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "var(--ac)",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Founder Section */}
        <section
          style={{
            maxWidth: 700,
            margin: "0 auto",
            padding: "0 20px 60px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(108,99,255,0.08), rgba(108,99,255,0.04))",
              border: "1px solid rgba(108,99,255,0.25)",
              borderRadius: 20,
              padding: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative glow */}
            <div
              style={{
                position: "absolute",
                top: -50,
                right: -50,
                width: 120,
                height: 120,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(108,99,255,0.25), transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ fontSize: 40, marginBottom: 16 }}>👋</div>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 12,
                color: "var(--tx)",
              }}
            >
              Built with Passion by Dharamveer Kumar
            </h2>
            <p
              style={{
                color: "var(--mu)",
                fontSize: 15,
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              I'm a B.Tech CSE student and digital creative passionate about
              making learning accessible, engaging, and rewarding. Evolvo was
              born from a simple belief: everyone deserves a platform to test,
              learn, and prove their skills—no matter their background or
              profession. Every feature, design choice, and quiz question is
              crafted with care to help you grow.
            </p>

            {/* Portfolio Button */}
            <Link
              href="https://dharamveer-cse-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--ac)",
                color: "#fff",
                padding: "12px 28px",
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
              <span>View My Portfolio</span>
              <span style={{ fontSize: 16 }}>→</span>
            </Link>
          </div>
        </section>

        {/* CTA */}
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
      </main>

      <Footer />
    </>
  );
}
