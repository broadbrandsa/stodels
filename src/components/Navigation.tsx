"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "Scorecard", href: "#scorecard" },
  { label: "Summary", href: "#summary" },
  { label: "Opportunity", href: "#opportunity" },
  { label: "Speed", href: "#waste" },
  { label: "Performance", href: "#performance" },
  { label: "Meta Ads", href: "#meta" },
  { label: "Google Ads", href: "#google" },
  { label: "SEO", href: "#seo" },
{ label: "Content", href: "#content-gaps" },
  { label: "Local SEO", href: "#local-seo" },
  { label: "Action Plan", href: "#plan" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = links
        .map((l) => ({
          id: l.href.slice(1),
          el: document.getElementById(l.href.slice(1)),
        }))
        .filter((s) => s.el);

      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el!.offsetTop <= scrollPos) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? "auto" : "none",
        transform: scrolled ? "translateY(0)" : "translateY(-8px)",
      }}
    >
      <div className="glass border-b border-border/30">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Image
              src="/StodelsLogo.svg"
              alt="Stodels"
              width={100}
              height={22}
            />
          <div className="hidden lg:flex items-center gap-0.5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-2 py-1.5 rounded-md text-[11px] font-medium tracking-wide transition-colors ${
                  active === link.href.slice(1)
                    ? "text-copper bg-copper/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#next-steps"
            className="px-4 py-1.5 rounded-md bg-copper/10 text-copper text-xs font-semibold tracking-wide hover:bg-copper/20 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
