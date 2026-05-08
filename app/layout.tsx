import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "@/components/MobileNav";


export const metadata: Metadata = {
  title: "Evolvo | Adaptive Quizzes",
  description: "Test. Learn. Improve. Repeat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app">
        {children}
        {/* 👇 Persistent mobile nav - visible on ALL pages */}
        <MobileNav />
      </body>
    </html>
  );
}
