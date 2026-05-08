"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeNav, setActiveNav] = useState("home");

  // Sync active state with current route
  useEffect(() => {
    const routeMap: Record<string, string> = {
      "/": "home",
      "/about": "about",
      "/blog": "blog",
      "/how-it-works": "how",
    };
    setActiveNav(routeMap[pathname] || "home");
  }, [pathname]);

  // 👇 Unified scroll helper with header offset
  const scrollToElement = (id: string, offset: number = 60) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Handle nav clicks
  const handleNavClick = (item: {
    id: string;
    href: string;
    action?: string;
  }) => {
    setActiveNav(item.id);

    // 🔍 Search: Focus + scroll to search input
    if (item.action === "focus-search") {
      const goToSearch = () => {
        const searchInput = document.getElementById(
          "search",
        ) as HTMLInputElement;
        if (searchInput) {
          // Visual feedback
          searchInput.style.borderColor = "var(--ac)";
          searchInput.style.boxShadow = "0 0 0 3px var(--gl)";
          setTimeout(() => {
            searchInput.style.borderColor = "";
            searchInput.style.boxShadow = "";
          }, 2000);

          searchInput.focus();
          scrollToElement("search", 80); // 80px offset for header
        }
      };

      if (pathname !== "/") {
        router.push("/");
        setTimeout(goToSearch, 300); // Wait for navigation
      } else {
        goToSearch();
      }
    }

    // 📂 Categories: Scroll to profession section
    else if (item.action === "scroll-categories") {
      const goToCategories = () => {
        // Add highlight effect
        const section = document.getElementById("categories");
        if (section) {
          section.animate(
            [
              { boxShadow: "0 0 0 0 rgba(108,99,255,0)" },
              { boxShadow: "0 0 0 12px rgba(108,99,255,0.2)" },
              { boxShadow: "0 0 0 0 rgba(108,99,255,0)" },
            ],
            { duration: 1000, easing: "ease-out" },
          );
          scrollToElement("categories", 80);
        }
      };

      if (pathname !== "/") {
        router.push("/");
        setTimeout(goToCategories, 300);
      } else {
        goToCategories();
      }
    }
  };

  const navItems = [
    {
      id: "home",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      ),
      label: "Home",
      href: "/",
    },
    {
      id: "search",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      label: "Search",
      href: "/",
      action: "focus-search",
    },
    {
      id: "categories",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      ),
      label: "Categories",
      href: "/",
      action: "scroll-categories",
    },
    {
      id: "about",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ),
      label: "About",
      href: "/about",
    },
    {
      id: "blog",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      label: "Blog",
      href: "/blog",
    },
  ];

  return (
    <nav className="mnav">
      <div className="mnav-in">
        {navItems.map((item) => {
          const isActive = activeNav === item.id;

          // Direct route links
          if (!item.action) {
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`mni${isActive ? " active" : ""}`}
                onClick={() => setActiveNav(item.id)}
              >
                <span
                  className="mni-ico"
                  style={{ color: isActive ? "var(--ac2)" : "var(--mu)" }}
                >
                  {item.icon}
                </span>
                <span
                  className="mni-lbl"
                  style={{ color: isActive ? "var(--ac2)" : "var(--mu)" }}
                >
                  {item.label}
                </span>
              </Link>
            );
          }

          // Action-based items (search, categories)
          return (
            <div
              key={item.id}
              className={`mni${isActive ? " active" : ""}`}
              onClick={() => handleNavClick(item)}
              style={{ cursor: "pointer" }}
            >
              <span
                className="mni-ico"
                style={{ color: isActive ? "var(--ac2)" : "var(--mu)" }}
              >
                {item.icon}
              </span>
              <span
                className="mni-lbl"
                style={{ color: isActive ? "var(--ac2)" : "var(--mu)" }}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
