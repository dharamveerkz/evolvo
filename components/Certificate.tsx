"use client";

import { useRef, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Certificate({
  name,
  score,
  total,
  quizTitle,
  onRetry,
  organization = "Evolvo Academy",
  logoUrl,
}: {
  name: string;
  score: number;
  total: number;
  quizTitle: string;
  onRetry: () => void;
  organization?: string;
  logoUrl?: string;
}) {
  const certRef = useRef<HTMLDivElement>(null);
  const [issued, setIssued] = useState({ date: "", time: "" });
  const [isDownloading, setIsDownloading] = useState(false);

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
  const fileName = `certificate_${name.replace(/\s+/g, "_").toLowerCase()}_${quizTitle.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase()}.pdf`;

  const handleDownloadPDF = async () => {
    if (!certRef.current) return;

    setIsDownloading(true);

    try {
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;

      const canvas = await html2canvas(certRef.current, {
        scale: 4,
        logging: false,
        useCORS: true,
        backgroundColor: "#ffffff",
        width: 1200,
        height: 850,
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "pt",
        format: "a4",
        compress: true,
      });

      pdf.addImage(imgData, "PNG", 0, 0, 842, 595);

      pdf.setProperties({
        title: `Certificate of Achievement - ${name}`,
        subject: quizTitle,
        author: organization,
        creator: "Evolvo Academy",
      });

      pdf.save(fileName);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  // Status colors from design system
  const pctColor =
    pct >= 70
      ? "var(--success)"
      : pct >= 50
        ? "var(--warning)"
        : "var(--error)";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Hidden Certificate Template - White with Texture */}
      <div
        ref={certRef}
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
          width: "1200px",
          height: "850px",
          // White background with subtle paper texture
          background: `
            linear-gradient(135deg, #ffffff 0%, #fafafa 50%, #f5f5f7 100%),
            repeating-linear-gradient(135deg, transparent, transparent 50px, rgba(108,99,255,0.02) 50px, rgba(108,99,255,0.02) 51px),
            radial-gradient(circle at 15% 85%, rgba(108,99,255,0.03) 0%, transparent 40%),
            radial-gradient(circle at 85% 15%, rgba(108,99,255,0.03) 0%, transparent 40%)
          `,
          border: "10px solid var(--ac)",
          padding: "60px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Decorative Inner Border */}
        <div
          style={{
            position: "absolute",
            inset: "16px",
            border: "4px solid var(--bd)",
            pointerEvents: "none",
          }}
        />

        {/* ✅ Corner ornaments REMOVED */}

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <div
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#1e2130", // ✅ Darker: using --bd
              letterSpacing: "4px",
              marginBottom: "6px",
              fontFamily: "Cinzel, serif",
            }}
          >
            ✦ {organization} ✦
          </div>
          <h1
            style={{
              fontSize: "48px",
              fontFamily: "Cinzel Decorative, serif",
              color: "#0f1117", // ✅ Darker: using --sf (almost black)
              margin: "6px 0",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            Certificate of Achievement
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#1e2130",
              margin: "6px 0",
              fontWeight: "600",
            }}
          >
            This certifies that
          </p>
        </div>

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* Name - Reduced spacing from "certifies that" */}
          <div
            style={{
              fontSize: "64px",
              fontFamily: "Cinzel Decorative, serif",
              fontWeight: "700",
              color: "#0f1117", // ✅ Darker: using --sf
              borderBottom: "4px solid var(--ac)",
              paddingBottom: "12px",
              marginBottom: "16px",
              letterSpacing: "2px",
            }}
          >
            {name}
          </div>

          <p
            style={{
              fontSize: "18px",
              color: "#1e2130",
              margin: "0 0 6px",
              fontWeight: "600",
            }}
          >
            has successfully demonstrated proficiency in
          </p>

          <h2
            style={{
              fontSize: "32px",
              fontFamily: "Cinzel, serif",
              color: "#0f1117", // ✅ Darker: using --sf
              margin: "6px 0",
              fontWeight: "700",
              letterSpacing: "0.5px",
            }}
          >
            {quizTitle}
          </h2>

          {/* Score Badge */}
          <div
            style={{
              marginTop: "24px",
              padding: "18px 45px",
              background: "var(--gl)",
              border: "3px solid var(--ac)",
              borderRadius: "12px",
              display: "inline-flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <span
              style={{ fontSize: "36px", fontWeight: "700", color: "#0f1117" }}
            >
              {score}/{total}
            </span>
            <span
              style={{ fontSize: "24px", color: pctColor, fontWeight: "700" }}
            >
              ({pct}%)
            </span>
          </div>
        </div>

        {/* Footer - Signatures with Rounded Handwritten Font */}
        <div
          style={{
            borderTop: "3px solid var(--ac)",
            paddingTop: "35px",
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "150px",
          }}
        >
          <div style={{ display: "flex", gap: "120px" }}>
            {/* Left Signature */}
            <div style={{ textAlign: "center", minWidth: "160px" }}>
              <div
                style={{
                  fontSize: "36px",
                  // ✅ Rounded, cursive, handwritten signature font
                  fontFamily: "'Dancing Script', 'Caveat', 'Kalam', cursive",
                  color: "#0f1117", // ✅ Darker: using --sf
                  marginBottom: "8px",
                  fontWeight: "700",
                }}
              >
                Academic Head
              </div>
              <div
                style={{
                  width: "120px",
                  height: "3px",
                  background: "var(--ac)",
                  margin: "10px auto",
                }}
              />
              <div
                style={{
                  fontSize: "13px",
                  color: "#1e2130", // ✅ Darker: using --bd
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  fontWeight: "600",
                }}
              >
                Evolvo Academy
              </div>
            </div>

            {/* Right Signature - Your Name */}
            <div style={{ textAlign: "center", minWidth: "160px" }}>
              <div
                style={{
                  fontSize: "36px",
                  fontFamily: "'Dancing Script', 'Caveat', 'Kalam', cursive",
                  color: "#0f1117", // ✅ Darker: using --sf
                  marginBottom: "8px",
                  fontWeight: "700",
                }}
              >
                Dharamveer Kumar
              </div>
              <div
                style={{
                  width: "120px",
                  height: "3px",
                  background: "var(--ac)",
                  margin: "10px auto",
                }}
              />
              <div
                style={{
                  fontSize: "13px",
                  color: "#1e2130", // ✅ Darker: using --bd
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  fontWeight: "600",
                }}
              >
                Founder
              </div>
            </div>
          </div>
        </div>

        {/* Timestamp - Bottom Right */}
        <div
          style={{
            fontSize: "11px",
            fontFamily: "monospace",
            color: "#1e2130", // ✅ Darker: using --bd
            textAlign: "right",
            marginTop: "15px",
            paddingRight: "10px",
            fontWeight: "600",
          }}
        >
          Issued: {issued.date} at {issued.time}
        </div>
      </div>

      {/* UI: Download Button Only - Using Design System Colors */}
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        <div
          style={{
            background: "var(--sf)",
            backdropFilter: "blur(10px)",
            border: "2px solid var(--bd)",
            borderRadius: "20px",
            padding: "40px",
            marginBottom: "30px",
            boxShadow: "0 10px 40px var(--gl)",
          }}
        >
          <div style={{ fontSize: "64px", marginBottom: "20px" }}>🏆</div>
          <h2
            style={{
              fontSize: "32px",
              color: "var(--ac2)",
              marginBottom: "10px",
              fontFamily: "Cinzel, serif",
              fontWeight: "700",
            }}
          >
            Congratulations!
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--tx)",
              marginBottom: "20px",
            }}
          >
            You've completed{" "}
            <strong style={{ color: "var(--ac)" }}>{quizTitle}</strong>
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--s2)",
              border: "1px solid var(--bd2)",
              borderRadius: "10px",
              padding: "14px 28px",
              marginBottom: "25px",
            }}
          >
            <span
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "var(--tx)",
              }}
            >
              {score}/{total}
            </span>
            <span
              style={{ fontSize: "20px", color: pctColor, fontWeight: "700" }}
            >
              ({pct}%)
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            style={{
              padding: "16px 35px",
              background: isDownloading ? "var(--mu2)" : "var(--ac)",
              color: "#fff",
              border: "2px solid var(--ac2)",
              borderRadius: "50px",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform: "uppercase",
              cursor: isDownloading ? "not-allowed" : "pointer",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: isDownloading ? "none" : `0 6px 20px var(--gl)`,
            }}
            onMouseEnter={(e) =>
              !isDownloading &&
              ((e.currentTarget.style.background = "var(--ac2)"),
              (e.currentTarget.style.transform = "translateY(-2px)"))
            }
            onMouseLeave={(e) =>
              !isDownloading &&
              ((e.currentTarget.style.background = "var(--ac)"),
              (e.currentTarget.style.transform = "translateY(0)"))
            }
          >
            {isDownloading ? (
              <>
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "2px solid #fff",
                    borderTopColor: "transparent",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                  }}
                />
                Generating...
              </>
            ) : (
              <>📥 Download Certificate</>
            )}
          </button>

          <button
            onClick={onRetry}
            style={{
              padding: "16px 35px",
              background: "transparent",
              color: "var(--mu)",
              border: "2px solid var(--bd2)",
              borderRadius: "50px",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--s2)";
              e.currentTarget.style.color = "var(--ac2)";
              e.currentTarget.style.borderColor = "var(--ac)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--mu)";
              e.currentTarget.style.borderColor = "var(--bd2)";
            }}
          >
            🔄 Retake Quiz
          </button>
        </div>

        <p style={{ marginTop: "20px", fontSize: "13px", color: "var(--mu2)" }}>
          Your certificate will be downloaded as a PDF
        </p>
      </div>

      {/* Signature Font Import + Spin Animation */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Caveat:wght@600;700&family=Kalam:wght@400;700&display=swap');
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
