import Link from "next/link";

// ✅ Type-safe route mapping: keys now match footerColumns exactly
const LINK_ROUTES: Record<string, { href: string; external?: boolean }> = {
  "How-it-works": { href: "/how-it-works" },
  About: { href: "/about" },
  Blog: { href: "/blog" },
  "Help Center": { href: "/support" },
  Contact: { href: "/support#contact" },
  Privacy: { href: "/support#privacy" },
  Terms: { href: "/support#terms" },

  // 👇 External links - KEYS MATCH footerColumns EXACTLY
  Mail: { href: "mailto:dharamveerkumar774@gmail.com", external: true }, // ✅ Capital M
  Portfolio: {
    href: "https://dharamveer-cse-portfolio.vercel.app/",
    external: true,
  },
  Innovation: {
    href: "https://innovation-hub-zeta.vercel.app/",
    external: true,
  },
  "GitHub-Repo": { href: "https://github.com/dharamveerkz", external: true }, // ✅ Hyphen, not space
  Resume: {
    href: "https://dharamveerkz.github.io/",
    external: true,
  },
};

export default function Footer() {
  const footerColumns = [
    {
      title: "Platform",
      links: ["Mail", "Portfolio", "Innovation", "Resume"], // ✅ "Mail" matches LINK_ROUTES
    },
    {
      title: "Company",
      links: ["About", "Blog", "How-it-works", "GitHub-Repo"], // ✅ "GitHub-Repo" matches
    },
    { title: "Support", links: ["Help Center", "Contact", "Privacy", "Terms"] },
  ];

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

          {footerColumns.map((col) => (
            <div key={col.title}>
              <div className="ftcol-ttl">{col.title}</div>
              <div className="flinks">
                {col.links.map((linkName) => {
                  const route = LINK_ROUTES[linkName];

                  // Skip if route not found
                  if (!route) {
                    console.warn(`⚠️ No route defined for: ${linkName}`);
                    return null;
                  }

                  // ✅ EXTERNAL LINK: Use <a> tag with security attributes
                  if (route.external) {
                    return (
                      <a
                        key={linkName}
                        href={route.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flink"
                      >
                        {linkName}
                        <span
                          style={{ marginLeft: 4, opacity: 0.6, fontSize: 10 }}
                        >
                          ↗
                        </span>
                      </a>
                    );
                  }

                  // ✅ INTERNAL LINK: Use Next.js <Link>
                  return (
                    <Link key={linkName} href={route.href} className="flink">
                      {linkName}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="fbot">
          <div className="fcopy">© 2026 Evolvo. All rights reserved.</div>
          <div className="fsoc">
            {[
              {
                name: "Instagram",
                icon: "📷",
                href: "https://www.instagram.com/imdharamvrr/",
                color: "#E1306C",
              },
              {
                name: "LinkedIn",
                icon: "in",
                href: "https://www.linkedin.com/in/dharamveerkr/",
                color: "#0A66C2",
              },
              {
                name: "GitHub",
                icon: "⌨️",
                href: "https://github.com/dharamveerkr",
                color: "#ffffff",
              },
              {
                name: "LeetCode",
                icon: "💻",
                href: "https://leetcode.com/u/dharamveerkr/",
                color: "#FFA116",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="sbtn3"
                aria-label={`Visit Dharamveer's ${social.name}`}
                // ✅ CSS-ONLY HOVER: No JS handlers = Server Component safe
                style={{
                  color: social.color,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                // ✅ Add hover effects via className instead (recommended)
                // Or use inline style with :hover via CSS module/Tailwind
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
