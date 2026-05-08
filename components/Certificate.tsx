"use client";

import { useRef, useEffect, useState } from "react";
// ❌ REMOVE these top-level imports (cause module resolution issues in Next.js)
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

/* ─── Font & animation injection ─── */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cinzel+Decorative:wght@400;700&family=Great+Vibes&family=DM+Sans:wght@300;400;500;700&display=swap');

@keyframes cert-fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: none; }
}
@keyframes cert-border-flow {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Wrapper for responsive scaling */
.cert-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  animation: cert-fade-in 0.8s ease-out both;
}

/* A4 Landscape: 297mm × 210mm = 1123px × 794px @ 96 DPI */
.cert-card {
  position: relative;
  width: 297mm;
  height: 210mm;
  min-width: 297mm;
  min-height: 210mm;
  background: linear-gradient(145deg, #ffffff 0%, #fafafa 25%, #f5f5f7 50%, #fafafa 75%, #ffffff 100%);
  border-radius: 4px;
  padding: 40px 48px;
  font-family: 'DM Sans', sans-serif;
  border: 1px solid #c9a84c;
  box-shadow: 0 0 0 4px #08090d, 0 0 0 8px #c9a84c, 0 20px 60px rgba(0,0,0,0.4);
  overflow: hidden;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
}

/* Mobile: Scale down to fit screen while keeping A4 ratio */
@media (max-width: 1200px) {
  .cert-card {
    transform: scale(0.85);
    transform-origin: top center;
  }
}
@media (max-width: 900px) {
  .cert-card {
    transform: scale(0.7);
    transform-origin: top center;
  }
}
@media (max-width: 600px) {
  .cert-card {
    transform: scale(0.55);
    transform-origin: top center;
  }
}

/* Decorative corner elements */
.cert-corner {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid #c9a84c;
  pointer-events: none;
  z-index: 2;
}
.cert-corner.tl { top: 16px; left: 16px; border-right: none; border-bottom: none; }
.cert-corner.tr { top: 16px; right: 16px; border-left: none; border-bottom: none; }
.cert-corner.bl { bottom: 16px; left: 16px; border-right: none; border-top: none; }
.cert-corner.br { bottom: 16px; right: 16px; border-left: none; border-top: none; }

/* Animated gold border flow */
.cert-card::after {
  content: '';
  position: absolute;
  inset: -5px;
  border-radius: 8px;
  pointer-events: none;
  background: linear-gradient(120deg, #c9a84c, #f5d78e, #c9a84c, #f5d78e, #c9a84c);
  background-size: 300% 300%;
  animation: cert-border-flow 10s linear infinite;
  opacity: 0.15;
  z-index: -1;
}

/* Subtle premium pattern overlay */
.cert-card::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: 
    radial-gradient(circle at 15% 85%, rgba(108,99,255,0.025) 0%, transparent 45%),
    radial-gradient(circle at 85% 15%, rgba(201,168,76,0.03) 0%, transparent 45%),
    repeating-linear-gradient(135deg, transparent, transparent 30px, rgba(201,168,76,0.015) 30px, rgba(201,168,76,0.015) 31px);
  opacity: 0.7;
  z-index: 1;
}

.cert-hdr { text-align: center; margin-bottom: 24px; position: relative; z-index: 3; }
.cert-title {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(18px, 2.5vw, 24px);
  color: #163b75;
  margin: 4px 0 0;
  letter-spacing: 2.5px;
}
.cert-name {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(22px, 4vw, 36px);
  color: #08090d;
  letter-spacing: 1.5px;
  border-bottom: 2px solid #c9a84c;
  display: inline-block;
  padding-bottom: 3px;
  margin: 10px 0 6px;
}
.cert-pill {
  background: linear-gradient(135deg, rgba(22,59,117,0.08), rgba(201,168,76,0.08));
  border: 1px solid #c9a84c;
  border-radius: 6px;
  padding: 8px 24px;
  display: inline-block;
  margin-top: 12px;
}

/* Bottom section - signature & auth */
.cert-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
  margin-top: 24px;
  position: relative;
  z-index: 3;
  padding: 0 20px;
}
.cert-auth { display: flex; flex-direction: column; gap: 2px; }
.cert-auth-badge { display: flex; align-items: center; gap: 4px; }
.cert-sig { text-align: center; min-width: 90px; }
.cert-sig-name {
  font-family: 'Great Vibes', cursive;
  font-size: 24px;
  color: #163b75;
  line-height: 1;
  font-weight: 400;
}
.cert-sig-line { 
  width: 70px; 
  height: 1px; 
  background: linear-gradient(90deg, transparent, #c9a84c, transparent); 
  margin: 4px auto; 
}
.cert-sig-title { 
  font-size: 9px; 
  letter-spacing: 1.2px; 
  color: #5a5f7a; 
  text-transform: uppercase; 
}

/* Date/Time - bottom-right corner */
.cert-issued {
  position: absolute;
  bottom: 8px;
  right: 20px;
  font-size: 10px;
  color: #5a5f7a;
  font-family: 'DM Sans', sans-serif;
  letter-spacing: 0.2px;
  white-space: nowrap;
  z-index: 3;
}

/* Action buttons */
.cert-actions {
  text-align: center;
  margin-top: 20px;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.cert-btn {
  padding: 10px 24px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  transition: transform 0.2s, box-shadow 0.2s;
}
.cert-btn:hover { transform: translateY(-2px); }
.cert-btn-blue {
  background: linear-gradient(135deg, #163b75, #3a82c8);
  color: #fff;
  border: 1px solid #c9a84c;
  box-shadow: 0 4px 20px rgba(22,59,117,0.3);
}
.cert-btn-blue:hover { box-shadow: 0 8px 30px rgba(58,130,200,0.4); }
.cert-btn-gold {
  background: linear-gradient(135deg, #c9a84c, #f5d78e);
  color: #08090d;
  box-shadow: 0 4px 20px rgba(201,168,76,0.3);
}
.cert-btn-gold:hover { box-shadow: 0 8px 30px rgba(201,168,76,0.5); }
`;

function injectStyles() {
  if (
    typeof document !== "undefined" &&
    !document.getElementById("cert-premium-styles")
  ) {
    const tag = document.createElement("style");
    tag.id = "cert-premium-styles";
    tag.textContent = STYLES;
    document.head.appendChild(tag);
  }
}

// ✅ Default export - this is what the error was about
export default function Certificate({
  name,
  score,
  total,
  quizTitle,
  onRetry,
}: {
  name: string;
  score: number;
  total: number;
  quizTitle: string;
  onRetry: () => void;
}) {
  injectStyles();
  const certRef = useRef<HTMLDivElement>(null);
  const [issued, setIssued] = useState({ date: "", time: "" });

  useEffect(() => {
    const now = new Date();
    setIssued({
      date: now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      time: now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  }, []);

  const pct = Math.round((score / total) * 100);
  const certId = `EVL-${Date.now().toString(36).toUpperCase().slice(-8)}`;

  // ✅ Dynamic imports inside function (not at top level)
  const handleDownloadPDF = async () => {
    if (!certRef.current) return;

    try {
      // Dynamically import libraries only when needed
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;

      // Temporarily remove transform for accurate capture
      const originalTransform = certRef.current.style.transform;
      certRef.current.style.transform = "none";

      // Use high scale for crisp PDF (3 = 288 DPI)
      const canvas = await html2canvas(certRef.current, {
        scale: 3,
        logging: false,
        useCORS: true,
        backgroundColor: "#ffffff",
        width: 1123, // A4 landscape px @ 96 DPI
        height: 794,
      });

      // Restore transform for display
      certRef.current.style.transform = originalTransform;

      const imgData = canvas.toDataURL("image/png");

      // Create PDF with A4 landscape dimensions in mm
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [297, 210], // A4 landscape
      });

      // Add image at full page size
      pdf.addImage(imgData, "PNG", 0, 0, 297, 210);

      // Add metadata
      pdf.setProperties({
        title: `${quizTitle} Certificate - ${name}`,
        subject: "Evolvo Academy Certificate",
        author: "Evolvo Academy",
        creator: "Evolvo Certificate Generator",
      });

      // Save with clean filename
      const safeQuiz = quizTitle.replace(/[^a-zA-Z0-9]/g, "_");
      const safeName = name.replace(/\s+/g, "_");
      pdf.save(`${safeQuiz}_Certificate_${safeName}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#08090d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        fontFamily: "'DM Sans', sans-serif",
        overflow: "auto",
      }}
    >
      <div className="cert-wrapper">
        {/* ── Certificate Card (A4 Landscape: 297mm × 210mm) ── */}
        <div ref={certRef} className="cert-card">
          {/* Decorative corners */}
          <div className="cert-corner tl" />
          <div className="cert-corner tr" />
          <div className="cert-corner bl" />
          <div className="cert-corner br" />

          {/* Header */}
          <div className="cert-hdr">
            <div
              style={{
                fontSize: 10,
                letterSpacing: 3.5,
                color: "#c9a84c",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Evolvo Academy
            </div>
            <h1 className="cert-title">Certificate of Achievement</h1>
            {/* Gold divider */}
            <div
              style={{
                width: 60,
                height: 2,
                background:
                  "linear-gradient(90deg, transparent, #c9a84c, transparent)",
                margin: "12px auto 0",
              }}
            />
          </div>

          {/* Body */}
          <div style={{ textAlign: "center", position: "relative", zIndex: 3 }}>
            <p style={{ fontSize: 13, color: "#5a5f7a", margin: "0 0 3px" }}>
              This certifies that
            </p>
            <div className="cert-name">{name}</div>
            <p style={{ fontSize: 13, color: "#5a5f7a", margin: "12px 0 4px" }}>
              has successfully completed
            </p>
            <h3
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 18,
                color: "#163b75",
                margin: "0 0 8px",
                letterSpacing: 0.5,
              }}
            >
              {quizTitle}
            </h3>
            {/* Score pill with gold accent */}
            <div className="cert-pill">
              <span style={{ fontSize: 20, fontWeight: 700, color: "#08090d" }}>
                {score}/{total}
              </span>
              <span style={{ fontSize: 14, color: "#c9a84c", marginLeft: 6 }}>
                ({pct}%)
              </span>
            </div>
            {/* Certificate ID */}
            <p
              style={{
                fontSize: 9,
                color: "#8b85ff",
                marginTop: 12,
                letterSpacing: 1,
              }}
            >
              ID: {certId}
            </p>
          </div>

          {/* Bottom Section - signature & auth */}
          <div className="cert-bottom">
            {/* Left: Authentication */}
            <div className="cert-auth">
              <div className="cert-auth-badge">
                <span
                  style={{ color: "#34d399", fontSize: 13, fontWeight: 700 }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#163b75",
                    letterSpacing: 0.8,
                  }}
                >
                  AUTHENTICATED
                </span>
              </div>
              <span style={{ fontSize: 9, color: "#5a5f7a" }}>
                Evolvo Academy Official
              </span>
            </div>

            {/* Right: Signature */}
            <div className="cert-sig">
              <div className="cert-sig-name">Dharamveer</div>
              <div className="cert-sig-line" />
              <div className="cert-sig-title">Founder</div>
            </div>
          </div>

          {/* Date & Time - bottom-right corner */}
          <div className="cert-issued">
            {issued.date} • {issued.time}
          </div>
        </div>

        {/* ── Action Buttons ── */}
        <div className="cert-actions">
          <button
            className="cert-btn cert-btn-blue"
            onClick={handleDownloadPDF}
          >
            📥 Download PDF
          </button>
          <button className="cert-btn cert-btn-gold" onClick={onRetry}>
            🔄 Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
