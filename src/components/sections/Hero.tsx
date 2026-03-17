"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Radial gradient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(13,113,37,0.3) 0%, rgba(26,58,42,0.2) 40%, transparent 70%)",
          }}
        />
        {/* Diagonal botanical lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern id="diag" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="60" stroke="#0D7125" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Stodels Logo */}
        <div
          className="mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
            transition: "all 0.6s ease-out 0.1s",
          }}
        >
          <Image
            src="/StodelsLogo.svg"
            alt="Stodels Nursery"
            width={180}
            height={40}
            className="mx-auto"
            priority
          />
        </div>

        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-3 mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s ease-out 0.3s",
          }}
        >
          <div className="h-px w-12 bg-copper/40" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-copper">
            Digital Marketing Audit
          </span>
          <div className="h-px w-12 bg-copper/40" />
        </div>

        {/* Main title */}
        <h1
          className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.8s ease-out 0.5s",
          }}
        >
          <span className="text-foreground">Stodels</span>
          <br />
          <span className="text-copper italic">Nursery</span>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease-out 0.7s",
          }}
        >
          Stodels has a 60-year brand, 7 stores, and 4.5-star reviews — but the
          digital presence isn&apos;t keeping pace. Here&apos;s exactly what to fix and why.
        </p>

        {/* Date & author */}
        <p
          className="text-sm text-muted-foreground/80 mb-12"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.6s ease-out 0.9s",
          }}
        >
          Prepared March 17, 2026 &middot; By Broadbrand
        </p>

        {/* Score badge */}
        <div
          className="inline-flex flex-col items-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            transition: "all 0.8s ease-out 1.1s",
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-copper/10 blur-xl" />
            <div className="relative glass rounded-2xl border border-copper/20 px-10 py-6">
              <p className="text-xs tracking-[0.2em] uppercase text-copper/80 mb-1">
                Overall Health
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-5xl text-copper">52</span>
                <span className="text-muted-foreground">/80</span>
              </div>
              <p className="mt-1 text-sm font-medium text-score-needs-work">
                Grade: C+
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.6s ease-out 1.5s",
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/80">
              Scroll to explore
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-copper/40 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
