"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      style={{
        background: "var(--sf)",
        border: "1px solid var(--bd)",
        color: "var(--mu)",
        padding: "8px 16px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "13px",
        fontFamily: "'DM Sans', sans-serif",
        transition: "all 0.2s",
        marginBottom: "24px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--ac)";
        e.currentTarget.style.color = "var(--ac2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--bd)";
        e.currentTarget.style.color = "var(--mu)";
      }}
    >
      ← Back to Blog
    </button>
  );
}
