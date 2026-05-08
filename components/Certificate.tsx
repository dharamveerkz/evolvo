"use client";

import { useRef, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
.cert-wrapper {
  width: 100%;
  max-width: 820px;
  animation: cert-fade-in 0.8s ease-out both;
}
.cert-card {
  position: relative;
  /* Premium multi-shade white background */
  background: linear-gradient(145deg, #ffffff 0%, #fafafa 25%, #f5f5f7 50%, #fafafa 75%, #ffffff 100%);
  border-radius: 4px;
  padding: 40px 48px;
  font-family: 'DM Sans', sans-serif;
  border: 1px solid #c9a84c;
  box-shadow: 0 0 0 4px #08090d, 0 0 0 8px #c9a84c, 0 20px 60px rgba(0,0,0,0.4);
  overflow: hidden;
}
/* Decorative corner elements */
.cert-corner {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid #c9a84c;
  pointer-events: none;
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
}
.cert-hdr { text-align: center; margin-bottom: 24px; }
.cert-title {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(18px, 3vw, 24px);
  color: #163b75;
  margin: 4px 0 0;
  letter-spacing: 2.5px;
}
.cert-name {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(22px, 4.5vw, 36px);
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
/* Bottom section - signature & auth with exact gap */
.cert-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
  margin-top: 24px;
  position: relative;
  gap: 150px;
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
/* Date/Time - separate minimal div at bottom-right corner of certificate */
.cert-issued {
  position: absolute;
  bottom: 12px;
  right: 16px;
  font-size: 1px;
  color: #000000;
  font-family: monospace;
  letter-spacing: 0.2px;
  white-space: nowrap;
  /* No border, no background - just simple black text */
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

  const handleDownloadPDF = async () => {
    if (!certRef.current) return;
    try {
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;

      const canvas = await html2canvas(certRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: "#ffffff",
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(
        `${quizTitle.replace(/[^a-zA-Z0-9]/g, "_")}_Certificate_${name.replace(/\s+/g, "_")}.pdf`,
      );
    } catch (err) {
      console.error("PDF generation failed:", err);
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
      }}
    >
      <div className="cert-wrapper">
        {/* ── Certificate Card ── */}
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
          <div style={{ textAlign: "center" }}>
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

          {/* Bottom Section - signature & auth with exact gap (unchanged) */}
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

          {/* Date & Time - separate minimal div at bottom-right corner of certificate */}
          <div className="cert-issued">
            {issued.date} • {issued.time}
          </div>
        </div>

        {/* ── Action Buttons ── */}
        <div
          style={{
            textAlign: "center",
            marginTop: 20,
            display: "flex",
            gap: 12,
            justifyContent: "center",
          }}
        >
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
