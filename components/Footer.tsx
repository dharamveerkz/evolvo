import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="fin">
        <div className="ftop">
          <div className="fbrand">
            <Link href="/" className="logo">
              <div className="ldot" /> Evolvo
            </Link>
            <p className="fdesc">
              Adaptive quiz platform for every learner, every profession. Test.
              Learn. Improve. Repeat.
            </p>
          </div>
          {[
            {
              title: "Platform",
              links: [
                "Browse Topics",
                "Featured Quizzes",
                "Certifications",
                "Leaderboard",
              ],
            },
            { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
            {
              title: "Support",
              links: ["Help Center", "Contact", "Privacy", "Terms"],
            },
          ].map((col) => (
            <div key={col.title}>
              <div className="ftcol-ttl">{col.title}</div>
              <div className="flinks">
                {col.links.map((l) => (
                  <span className="flink" key={l}>
                    {l}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="fbot">
          <div className="fcopy">© 2026 Evolvo. All rights reserved.</div>
          <div className="fsoc">
            {["𝕏", "in", "▶", "◉"].map((s, i) => (
              <div className="sbtn3" key={i}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
