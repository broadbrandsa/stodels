"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { SectionHeader } from "@/components/SectionHeader";

/* ───────────────────────────── NAV ───────────────────────────── */

const navLinks = [
  { label: "Background", href: "#background" },
  { label: "Retainer", href: "#retainer" },
  { label: "Paid Ads", href: "#paid-ads" },
  { label: "Performance", href: "#web-performance" },
  { label: "SEO", href: "#seo-content" },
  { label: "Local SEO", href: "#local-seo" },
  { label: "CRO", href: "#ecommerce-cro" },
  { label: "Reporting", href: "#reporting" },
  { label: "Benefits", href: "#benefits" },
  { label: "Timeline", href: "#timeline" },
  { label: "Terms", href: "#terms" },
];

function ProposalNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      const scrollPos = window.scrollY + 200;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].href.slice(1));
        if (el && el.offsetTop <= scrollPos) {
          setActive(navLinks[i].href.slice(1));
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
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            Back to Audit
          </Link>
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
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
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ───────────────────────────── HERO ──────────────────────────── */

function ProposalHero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(13,113,37,0.3) 0%, rgba(26,58,42,0.2) 40%, transparent 70%)" }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="diag-p" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="60" stroke="#0D7125" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diag-p)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-3 mb-8"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(16px)", transition: "all 0.6s ease-out 0.3s" }}
        >
          <div className="h-px w-12 bg-copper/40" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-copper">
            Broadbrand &times; Stodels
          </span>
          <div className="h-px w-12 bg-copper/40" />
        </div>

        {/* Headline */}
        <h1
          className="font-sans text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-6"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(24px)", transition: "all 0.8s ease-out 0.5s" }}
        >
          <span className="text-foreground">Digital Growth</span>
          <br />
          <span className="text-copper italic">Proposal</span>
        </h1>

        {/* Sub-heading */}
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-4"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease-out 0.7s" }}
        >
          A full-service retainer to address every finding from the audit &mdash; paid ads,
          website speed, organic search, local SEO, e-commerce conversion, and strategic reporting.
        </p>

        {/* Meta line */}
        <p
          className="text-sm text-muted-foreground/80 mb-12"
          style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease-out 0.9s" }}
        >
          March 2026 &middot; Month-to-month &middot; 30-day notice
        </p>

        {/* Badge */}
        <div
          className="inline-flex flex-col items-center"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)", transition: "all 0.8s ease-out 1.1s" }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-copper/10 blur-xl" />
            <div className="relative glass rounded-2xl border border-copper/20 px-10 py-6">
              <p className="text-xs tracking-[0.2em] uppercase text-copper/80 mb-1">Full Execution</p>
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-5xl text-copper">R45,000</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="mt-16" style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease-out 1.5s" }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/80">Scroll to explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-copper/40 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── SECTION 1: BACKGROUND ────────────────── */

const strengths = [
  "60+ year brand with multiple Best Garden Centre awards (2013, 2022)",
  "7 physical stores across the Western Cape and Gauteng",
  "High Google review ratings across locations",
  "Core Web Vitals pass based on real user data",
  "Accessibility score of 93\u201394/100 and Best Practices at 100/100",
  "Meta ads show good creative variety across promos, education, and social proof",
];

const opportunities = [
  "Mobile Performance score of 58/100 with lab-tested LCP of 6.8s (Google threshold: 2.5s)",
  "Meta ads running without funnel structure, retargeting, or A/B testing",
  "Google Ads with high volume of creatives but no visible Shopping campaigns",
  "No individual store location pages for any of the 7 stores",
  "Product category pages using default \u201CArchives\u201D titles",
  "Limited content library for organic search",
  "Online shop conversion path not optimised",
];

function Background() {
  return (
    <section id="background" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Background"
          title="Why this proposal exists"
          description="Every recommendation maps to an audit finding"
        />

        <AnimateOnScroll className="mb-12">
          <div className="rounded-xl border border-border/60 bg-card/30 p-6 md:p-8 space-y-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              Broadbrand completed an independent digital marketing audit of stodels.com examining
              paid advertising (Meta and Google), website performance (PageSpeed Insights), and
              organic search presence. This proposal is the action plan to address what the audit found.
            </p>
            <p>
              It is not a generic marketing package. Every line item below connects to a specific,
              documented issue or opportunity from the audit.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimateOnScroll>
            <div className="rounded-xl border border-score-good/20 bg-score-good/[0.03] p-6 h-full">
              <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-score-good mb-5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Strengths the Audit Confirmed
              </h3>
              <ul className="space-y-3">
                {strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-score-good/50 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="rounded-xl border border-border/60 bg-card/30 p-6 h-full">
              <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-score-critical mb-5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                Opportunities the Audit Identified
              </h3>
              <ul className="space-y-3">
                {opportunities.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-score-critical/50 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── SECTION 2: THE RETAINER ───────────────── */

const retainerLines = [
  { service: "Paid Advertising Management (Meta + Google)", monthly: "R12,000", included: "Campaign strategy, build, and ongoing optimisation. Meta funnel structure (awareness \u2192 retargeting \u2192 conversion). Google Search, Shopping, and Performance Max setup. A/B testing. Geographic targeting. Monthly ROAS reporting." },
  { service: "Website Performance & Technical Optimisation", monthly: "R8,000", included: "Mobile speed optimisation targeting the LCP and TBT issues found in the audit. Image compression and WebP conversion. JavaScript audit and deferral. Caching and CDN implementation. Core Web Vitals monitoring. WooCommerce performance tuning." },
  { service: "SEO & Content", monthly: "R10,000", included: "On-page SEO: rewrite category titles, meta descriptions, heading structure. 2\u20134 blog articles per month targeting priority keywords. Category page content. Internal linking. Technical SEO fixes (duplicate URLs, canonical tags). Backlink outreach. Monthly ranking reports." },
  { service: "Local SEO & Google Business Profile", monthly: "R5,000", included: "Build and maintain 7 individual store location pages. Google Business Profile optimisation for all locations. NAP consistency audit. Weekly GBP posts. Review response management. Local schema markup." },
  { service: "E-commerce Conversion Optimisation", monthly: "R6,000", included: "Online shop UX audit and improvements. Product page optimisation. Checkout flow analysis and friction reduction. Cart abandonment strategy. Conversion tracking setup (GA4, Meta Pixel, Google Ads). Monthly CRO reporting." },
  { service: "Reporting & Strategy", monthly: "R4,000", included: "Monthly performance dashboard (all channels). Monthly strategy call. Quarterly strategic review and roadmap update. Competitor monitoring." },
];

function Retainer() {
  return (
    <section id="retainer" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="The Retainer"
          title="R45,000 per month"
          description="Six service lines. Full execution. No lock-in."
        />

        <AnimateOnScroll className="mb-12">
          <p className="max-w-3xl text-sm text-muted-foreground leading-relaxed">
            Everything Stodels needs to fix what the audit found and build a digital presence that
            matches the strength of the physical brand. Broadbrand handles strategy AND execution &mdash;
            from ad campaigns to code changes to content creation.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="rounded-xl border border-border/60 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60 bg-card/50">
                    <th className="px-5 py-3 text-left text-xs font-semibold tracking-wider uppercase text-muted-foreground">Service Line</th>
                    <th className="px-5 py-3 text-right text-xs font-semibold tracking-wider uppercase text-muted-foreground whitespace-nowrap">Monthly</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold tracking-wider uppercase text-muted-foreground hidden lg:table-cell">What&apos;s Included</th>
                  </tr>
                </thead>
                <tbody>
                  {retainerLines.map((line, i) => (
                    <tr key={i} className="border-b border-border/30 last:border-0">
                      <td className="px-5 py-4 font-medium text-foreground">{line.service}</td>
                      <td className="px-5 py-4 text-right text-copper font-semibold whitespace-nowrap">{line.monthly}</td>
                      <td className="px-5 py-4 text-muted-foreground leading-relaxed hidden lg:table-cell max-w-md">{line.included}</td>
                    </tr>
                  ))}
                  <tr className="bg-copper/[0.06]">
                    <td className="px-5 py-4 font-bold text-foreground">Total</td>
                    <td className="px-5 py-4 text-right text-copper font-bold text-lg">R45,000</td>
                    <td className="px-5 py-4 text-muted-foreground italic hidden lg:table-cell">Full-service digital marketing, performance, and e-commerce growth</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Mobile card view for included details */}
        <div className="lg:hidden mt-8 space-y-4">
          {retainerLines.map((line, i) => (
            <AnimateOnScroll key={i} delay={i * 60}>
              <div className="rounded-xl border border-border/60 bg-card/30 p-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-sm font-semibold text-foreground">{line.service}</h4>
                  <span className="text-copper font-bold text-sm whitespace-nowrap">{line.monthly}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{line.included}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-8">
          <p className="text-xs text-muted-foreground/80 italic max-w-3xl">
            Ad spend (the budget paid directly to Meta and Google for running ads) is separate from
            this retainer and paid directly by Stodels. Broadbrand recommends and manages the budget &mdash;
            the spend itself goes to the platforms.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ──────────────── SECTION 3: PAID ADS DETAIL ────────────────── */

const metaDeliverables = [
  "Build a 3-tier ad funnel: Awareness (educational content, video, brand reach) \u2192 Retargeting (re-engage website visitors with social proof and Garden Club signups) \u2192 Conversion (promotional offers with urgency to warm audiences)",
  "Create video ad content (Reels format) from existing store footage and staff expertise",
  "A/B test 3\u20134 creative variations for every winning ad concept",
  "Geographic targeting matched to delivery areas: online-only offers to Western Cape, in-store offers to all locations",
  "Build and manage retargeting audiences: website visitors, cart abandoners, Garden Club members, and lookalike audiences",
];

const googleDeliverables = [
  "Audit current account structure and reorganise into distinct campaigns: Brand, Non-Brand, Product Categories, Local, and Remarketing",
  "Set up Google Merchant Center and launch Shopping campaigns showing product images, prices, and ratings in search results",
  "Launch Performance Max campaigns to reach customers across Search, YouTube, Gmail, and Maps",
  "Implement negative keyword lists to prevent campaigns from competing with each other",
  "Set up conversion tracking for online purchases and in-store visit tracking",
];

function PaidAdsDetail() {
  return (
    <section id="paid-ads" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Service Detail"
          title="Paid Advertising Management"
          description="R12,000/month, Restructure for performance"
        />

        <AnimateOnScroll className="mb-12">
          <p className="max-w-3xl text-sm text-muted-foreground leading-relaxed">
            The audit found approximately 7 active Meta ads running without funnel structure and a
            high volume of Google Ads creatives with no visible Shopping campaigns. This service
            restructures both platforms.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimateOnScroll>
            <div className="rounded-xl border border-border/60 bg-card/30 p-6 h-full">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-copper mb-5 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                Meta (Facebook &amp; Instagram)
              </h3>
              <ul className="space-y-3">
                {metaDeliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-copper/50 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="rounded-xl border border-border/60 bg-card/30 p-6 h-full">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-copper mb-5 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                Google Ads
              </h3>
              <ul className="space-y-3">
                {googleDeliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-copper/50 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ──────────── SECTION 4: WEB PERFORMANCE DETAIL ─────────────── */

const perfDeliverables = [
  "Identify and optimise the LCP element (likely the hero image): compress, convert to WebP, serve responsive sizes, add preload hints",
  "Audit and defer non-critical JavaScript to reduce Total Blocking Time",
  "Implement server-level caching and CDN for faster delivery across South Africa",
  "Ongoing Core Web Vitals monitoring with alerts if performance degrades",
  "WooCommerce-specific performance tuning: database optimisation, plugin audit, query reduction",
  "Fix accessibility issues flagged in the audit: colour contrast ratios, link descriptive text, heading hierarchy",
];

function WebPerfDetail() {
  return (
    <section id="web-performance" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Service Detail"
          title="Website Performance & Technical Optimisation"
          description="R8,000/month, Close the speed gap"
        />

        <AnimateOnScroll className="mb-12">
          <p className="max-w-3xl text-sm text-muted-foreground leading-relaxed">
            The PageSpeed Insights lab test (March 17, 2026) measured a mobile Performance score of
            58/100, with a 6.8-second LCP and 510ms Total Blocking Time. Google considers LCP under
            2.5 seconds and TBT under 200ms as &ldquo;Good.&rdquo; This service closes that gap.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="rounded-xl border border-border/60 bg-card/30 p-6">
            <ul className="space-y-4">
              {perfDeliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-4 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-8 h-8 rounded-full bg-copper/10 flex items-center justify-center text-xs font-bold text-copper shrink-0">
                    {i + 1}
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ──────────────── SECTION 5: SEO & CONTENT ──────────────────── */

const seoDeliverables = [
  "Rewrite all product category page titles and meta descriptions with target keywords (removing the default \u201CArchives\u201D suffix)",
  "Add 200\u2013400 words of unique introductory content to each product category page",
  "Consolidate duplicate content paths under a single URL structure with proper redirects",
  "Publish 2\u20134 new blog articles per month targeting priority keywords identified in the audit",
  "Build internal linking between blog content and product category pages",
  "Begin outreach for backlinks from South African gardening, home, and lifestyle publications",
  "Monthly keyword ranking reports showing organic visibility growth",
];

function SEOContentDetail() {
  return (
    <section id="seo-content" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Service Detail"
          title="SEO & Content"
          description="R10,000/month, Build the organic channel"
        />

        <AnimateOnScroll className="mb-12">
          <p className="max-w-3xl text-sm text-muted-foreground leading-relaxed">
            Stodels ranks for branded searches but is largely invisible for the non-branded keywords
            that drive new customer discovery. The audit found default page titles, duplicate content
            paths, and a limited content library.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="rounded-xl border border-border/60 bg-card/30 p-6">
            <ul className="space-y-4">
              {seoDeliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-4 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-8 h-8 rounded-full bg-copper/10 flex items-center justify-center text-xs font-bold text-copper shrink-0">
                    {i + 1}
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ──────────────── SECTION 6: LOCAL SEO ──────────────────────── */

const stores = [
  { name: "Bellville (HQ)", province: "Western Cape", opened: "1973" },
  { name: "Kenilworth", province: "Western Cape", opened: "1968" },
  { name: "Milnerton", province: "Western Cape", opened: "2005" },
  { name: "Constantia", province: "Western Cape", opened: "2012" },
  { name: "Somerset West", province: "Western Cape", opened: "2012" },
  { name: "Randburg / Ferndale", province: "Gauteng", opened: "\u2014" },
  { name: "Greenlyn / Pretoria", province: "Gauteng", opened: "\u2014" },
];

const localDeliverables = [
  "Build 7 individual store location pages (e.g. stodels.com/stores/bellville/) with unique content: hours, directions, parking, local inventory highlights, staff, and reviews",
  "Add LocalBusiness schema markup for each location",
  "Optimise all 7 Google Business Profiles: categories, hours, photos, Q&A",
  "Weekly GBP posting schedule for each location",
  "NAP consistency audit across website, Google, Facebook, and directories",
  "Review monitoring and response management across all locations",
];

function LocalSEODetail() {
  return (
    <section id="local-seo" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Service Detail"
          title="Local SEO & Google Business Profile"
          description="R5,000/month, 7 stores, 7 local search opportunities"
        />

        <AnimateOnScroll className="mb-12">
          <p className="max-w-3xl text-sm text-muted-foreground leading-relaxed">
            Stodels has 7 physical stores but no dedicated location pages on the website. This means
            the site cannot appear in location-specific searches. This service fixes that.
          </p>
        </AnimateOnScroll>

        {/* Store cards */}
        <AnimateOnScroll className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {stores.map((store, i) => (
              <div key={i} className="rounded-xl border border-border/60 bg-card/30 p-4 text-center">
                <p className="text-sm font-semibold text-foreground mb-1">{store.name}</p>
                <p className="text-xs text-muted-foreground">{store.province}</p>
                <p className="text-xs text-copper mt-1">Est. {store.opened}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground/60 mt-3 italic">
            Store data sourced from publicly available information including stodels.com, Wikipedia, and directory listings.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="rounded-xl border border-border/60 bg-card/30 p-6">
            <ul className="space-y-4">
              {localDeliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-4 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-8 h-8 rounded-full bg-copper/10 flex items-center justify-center text-xs font-bold text-copper shrink-0">
                    {i + 1}
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ──────────────── SECTION 7: E-COMMERCE CRO ─────────────────── */

const croTable = [
  { area: "Conversion Tracking", what: "Set up GA4 events, Meta Pixel, and Google Ads conversion tracking for purchases, add-to-cart, and checkout steps", why: "You cannot improve what you cannot measure. This is the foundation for every optimisation that follows." },
  { area: "Product Pages", what: "Optimise product descriptions, images, trust signals (reviews, guarantees), and calls to action", why: "Better product pages convert more browsers into buyers across every traffic source." },
  { area: "Checkout Flow", what: "Analyse and reduce friction: guest checkout, payment options, progress indicators, error handling", why: "Every unnecessary step or confusing element in checkout costs sales." },
  { area: "Cart Abandonment", what: "Implement abandoned cart email sequences and retargeting ads for visitors who add to cart but don\u2019t purchase", why: "Recovering even a portion of abandoned carts represents additional revenue at zero extra acquisition cost." },
  { area: "Category Pages", what: "Add introductory content, improve filtering and navigation, optimise for SEO and user experience", why: "Better category pages help both search engines and customers find the right products faster." },
  { area: "Trust Signals", what: "Display Google reviews on site, add security badges, highlight the no-questions-asked returns policy", why: "Trust reduces purchase hesitation. Stodels\u2019 strong review ratings should be visible on the website." },
];

const croSteps = [
  { title: "Month 1: Measurement Foundation", detail: "Install and configure GA4 event tracking, Meta Pixel, and Google Ads conversion tags. Establish baseline metrics for conversion rate, average order value, cart abandonment rate, and checkout completion rate." },
  { title: "Month 2: UX Audit & Quick Wins", detail: "Complete a full user experience audit of the online shop. Identify and fix the highest-impact friction points in the browse-to-purchase journey." },
  { title: "Month 3+: Ongoing Optimisation", detail: "Continuous testing and improvement cycle. Product page enhancements, checkout streamlining, cart recovery implementation, and trust signal deployment. Every change is tracked against the baseline." },
];

function EcommerceCRO() {
  return (
    <section id="ecommerce-cro" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Service Detail"
          title="E-commerce Conversion Optimisation"
          description="R6,000/month, Turn more visitors into buyers"
        />

        <AnimateOnScroll className="mb-12">
          <p className="max-w-3xl text-sm text-muted-foreground leading-relaxed">
            Every improvement to the online shopping experience multiplies the value of all other
            marketing efforts. A visitor driven by paid ads, organic search, or local discovery only
            becomes a customer if the shop converts them.
          </p>
        </AnimateOnScroll>

        {/* CRO Table */}
        <AnimateOnScroll className="mb-16">
          <div className="rounded-xl border border-border/60 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60 bg-card/50">
                    <th className="px-5 py-3 text-left text-xs font-semibold tracking-wider uppercase text-muted-foreground">Focus Area</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold tracking-wider uppercase text-muted-foreground">What We Do</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold tracking-wider uppercase text-muted-foreground hidden md:table-cell">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {croTable.map((row, i) => (
                    <tr key={i} className="border-b border-border/30 last:border-0">
                      <td className="px-5 py-4 font-medium text-foreground whitespace-nowrap align-top">{row.area}</td>
                      <td className="px-5 py-4 text-muted-foreground leading-relaxed align-top">{row.what}</td>
                      <td className="px-5 py-4 text-muted-foreground/80 leading-relaxed hidden md:table-cell italic align-top">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Approach steps */}
        <AnimateOnScroll>
          <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-copper mb-6">Approach</h3>
          <div className="relative">
            <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-copper/40 via-copper/20 to-transparent hidden md:block" />
            <div className="space-y-6">
              {croSteps.map((step, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="flex gap-5 md:gap-8">
                    <div className="hidden md:flex flex-col items-center shrink-0">
                      <div className="w-3 h-3 rounded-full bg-copper ring-4 ring-background" />
                    </div>
                    <div className="flex-1 rounded-xl border border-copper/20 bg-copper/[0.04] p-5">
                      <p className="text-sm font-semibold text-foreground mb-2">Step {i + 1} &mdash; {step.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ──────────────── SECTION 8: REPORTING ───────────────────────── */

const reportingDeliverables = [
  "Monthly performance dashboard covering all channels: paid ads (spend, clicks, conversions), organic search (rankings, traffic), website performance (Core Web Vitals, speed scores), local SEO (GBP impressions, actions, reviews), and e-commerce (conversion rate, revenue, average order value)",
  "Monthly strategy call with the Stodels team to review results and adjust priorities",
  "Quarterly strategic review: deeper trend analysis, competitive landscape, and updated roadmap",
  "Competitor monitoring: tracking what key competitors are doing across organic search, paid ads, and content",
];

function ReportingDetail() {
  return (
    <section id="reporting" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Service Detail"
          title="Reporting & Strategy"
          description="R4,000/month, Know what\u2019s working"
        />

        <AnimateOnScroll>
          <div className="rounded-xl border border-border/60 bg-card/30 p-6">
            <ul className="space-y-4">
              {reportingDeliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-4 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-8 h-8 rounded-full bg-copper/10 flex items-center justify-center text-xs font-bold text-copper shrink-0">
                    {i + 1}
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ──────────── SECTION 9: HOW STODELS BENEFITS ───────────────── */

const benefitsTable = [
  { service: "Paid Ads", fix: "Ads running without funnel structure, no A/B testing, geographic targeting gaps", benefit: "Higher return on every rand of ad spend through structured campaigns that guide customers from awareness to purchase" },
  { service: "Website Performance", fix: "Mobile Performance score 58/100, LCP 6.8s, TBT 510ms", benefit: "Faster site means more paid ad clicks convert into customers. Better Core Web Vitals protect organic rankings" },
  { service: "SEO & Content", fix: "Default \u201CArchives\u201D titles, limited content, duplicate URL paths", benefit: "Free organic traffic that compounds month over month, ranking for searches that drive new customer discovery" },
  { service: "Local SEO", fix: "No individual store pages, potentially unoptimised Google Business Profiles", benefit: "Visibility in Google Maps and local results when nearby customers are searching for a garden centre" },
  { service: "E-commerce CRO", fix: "Unoptimised shop experience, no conversion tracking", benefit: "More visitors completing purchases \u2014 every CRO improvement multiplies the value of all other marketing" },
  { service: "Reporting", fix: "No unified view of performance across channels", benefit: "Clear monthly visibility into what\u2019s working, with data-driven decisions about where to invest" },
];

const compoundingPoints = [
  "Faster pages improve both paid ad performance and organic rankings",
  "SEO content creates material for social media and ad campaigns",
  "Local SEO pages provide landing pages for location-targeted paid ads",
  "CRO improvements multiply the value of every visitor from every channel",
  "Proper tracking reveals which channels deserve more investment",
];

function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Value"
          title="How Stodels benefits"
          description="Every service connects to a real finding"
        />

        <AnimateOnScroll className="mb-16">
          <div className="rounded-xl border border-border/60 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60 bg-card/50">
                    <th className="px-5 py-3 text-left text-xs font-semibold tracking-wider uppercase text-muted-foreground">Service</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold tracking-wider uppercase text-muted-foreground">What We Fix</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold tracking-wider uppercase text-muted-foreground hidden md:table-cell">How Stodels Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  {benefitsTable.map((row, i) => (
                    <tr key={i} className="border-b border-border/30 last:border-0">
                      <td className="px-5 py-4 font-medium text-copper whitespace-nowrap align-top">{row.service}</td>
                      <td className="px-5 py-4 text-muted-foreground leading-relaxed align-top">{row.fix}</td>
                      <td className="px-5 py-4 text-muted-foreground leading-relaxed hidden md:table-cell align-top">{row.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Compounding effect callout */}
        <AnimateOnScroll>
          <div className="rounded-xl border border-copper/20 bg-copper/[0.04] p-6 md:p-8">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-copper mb-4">The Compounding Effect</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              These six service areas reinforce each other:
            </p>
            <ul className="space-y-3 mb-5">
              {compoundingPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-copper/50 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              The longer these efforts run together, the stronger the compounding effect. Paid ads
              deliver immediate traffic while organic SEO builds a growing asset that reduces
              dependency on paid spend over time.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ──────────── SECTION 10: IMPLEMENTATION TIMELINE ───────────── */

const timeline = [
  {
    phase: "Month 1",
    title: "Foundations",
    items: [
      "Onboarding and analytics audit",
      "Conversion tracking setup across GA4, Meta Pixel, and Google Ads",
      "Mobile speed fixes targeting the LCP and TBT issues",
      "Category page titles rewritten (removing \u201CArchives\u201D)",
      "Google Ads account audit",
      "Meta funnel restructure begins",
      "GBP optimisation for all 7 locations",
    ],
    outcome: "Tracking in place to measure everything. Immediate speed improvements. First ad performance baseline.",
  },
  {
    phase: "Month 2",
    title: "Build",
    items: [
      "7 store location pages go live",
      "First 4 SEO blog articles published",
      "Shopping campaigns launched",
      "Meta retargeting audiences built",
      "E-commerce UX audit complete",
      "First CRO improvements deployed",
    ],
    outcome: "Local search visibility begins. New organic content indexed. Paid campaigns running with structure and tracking.",
  },
  {
    phase: "Month 3",
    title: "Optimise",
    items: [
      "Content production ongoing",
      "Link-building outreach begins",
      "A/B testing on top ad concepts",
      "Checkout flow optimisation",
      "Performance Max campaigns launched",
    ],
    outcome: "Organic rankings improving. Ad performance improving through testing. Conversion rate gains measurable.",
  },
  {
    phase: "Month 4\u20136",
    title: "Scale",
    items: [
      "Increase budget to winning campaigns",
      "Expand content clusters",
      "Ongoing speed monitoring",
      "Seasonal content calendar",
      "Quarterly strategy review",
    ],
    outcome: "Compounding organic growth. Paid campaigns optimised with real data. Clear view of best-performing channels.",
  },
];

const timelineColors = [
  { bg: "bg-score-critical/10", border: "border-score-critical/20", dot: "bg-score-critical", text: "text-score-critical" },
  { bg: "bg-score-poor/10", border: "border-score-poor/20", dot: "bg-score-poor", text: "text-score-poor" },
  { bg: "bg-score-needs-work/10", border: "border-score-needs-work/20", dot: "bg-score-needs-work", text: "text-score-needs-work" },
  { bg: "bg-score-good/10", border: "border-score-good/20", dot: "bg-score-good", text: "text-score-good" },
];

function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Implementation"
          title="Implementation Timeline"
          description="Prioritised by impact"
        />

        <div className="relative">
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-score-critical via-score-needs-work to-score-good hidden md:block" />
          <div className="space-y-8 md:space-y-10">
            {timeline.map((phase, i) => {
              const colors = timelineColors[i];
              return (
                <AnimateOnScroll key={phase.phase} delay={i * 120}>
                  <div className="flex gap-5 md:gap-8">
                    <div className="hidden md:flex flex-col items-center shrink-0">
                      <div className={`w-3 h-3 rounded-full ${colors.dot} ring-4 ring-background`} />
                    </div>
                    <div className={`flex-1 rounded-xl border ${colors.border} ${colors.bg} p-6`}>
                      <div className="flex flex-wrap items-baseline gap-3 mb-4">
                        <span className={`text-xs font-bold tracking-wider uppercase ${colors.text}`}>
                          {phase.phase}
                        </span>
                        <span className="text-sm font-semibold text-foreground">{phase.title}</span>
                      </div>
                      <ul className="space-y-2.5 mb-4">
                        {phase.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                            <span className={`mt-2 w-1 h-1 rounded-full ${colors.dot} shrink-0`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="rounded-lg border border-copper/15 bg-copper/[0.03] p-3">
                        <p className="text-[11px] font-semibold tracking-wider uppercase text-copper mb-0.5">Outcome</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{phase.outcome}</p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── SECTION 11: TERMS ─────────────────────────── */

const stodelsProvides = [
  "Access to WordPress/WooCommerce admin (or FTP/staging access)",
  "Access to Google Analytics, Google Search Console, and Google Business Profile",
  "Access to Meta Business Suite and Google Ads account (as agency partner)",
  "A primary point of contact for approvals, content review, and monthly calls",
  "Brand guidelines, product photography, and store information as needed",
];

const broadbrandProvides = [
  "Dedicated account manager as your single point of contact",
  "All strategy, creative, content, and technical execution as outlined",
  "Monthly reporting and strategy calls",
  "Quarterly strategic reviews with updated roadmaps",
  "Transparent communication \u2014 if something isn\u2019t working, we\u2019ll say so and adjust",
];

function Terms() {
  return (
    <section id="terms" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Terms"
          title="Terms"
        />

        <div className="max-w-3xl space-y-8">
          {/* Key terms */}
          <AnimateOnScroll>
            <div className="rounded-xl border border-border/60 bg-card/30 p-6 space-y-4">
              {[
                ["Retainer", "R45,000 per month excluding VAT"],
                ["Payment", "Invoiced monthly in advance, due within 7 days"],
                ["Term", "Month-to-month. 30 calendar days written notice to cancel."],
                ["Ad spend", "Paid directly by Stodels to Meta and Google. Not included in the retainer. Broadbrand manages budgets and optimisation."],
              ].map(([label, value], i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-sm font-semibold text-copper whitespace-nowrap min-w-[100px]">{label}</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{value}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* What each party provides */}
          <div className="grid md:grid-cols-2 gap-6">
            <AnimateOnScroll>
              <div className="rounded-xl border border-border/60 bg-card/30 p-6 h-full">
                <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-copper mb-4">What Stodels Provides</h3>
                <ul className="space-y-3">
                  {stodelsProvides.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-copper/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="rounded-xl border border-border/60 bg-card/30 p-6 h-full">
                <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-copper mb-4">What Broadbrand Provides</h3>
                <ul className="space-y-3">
                  {broadbrandProvides.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-copper/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Ownership & confidentiality */}
          <AnimateOnScroll>
            <div className="space-y-4">
              <div className="rounded-xl border border-border/60 bg-card/30 p-6">
                <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-copper mb-2">Ownership</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All content, creative assets, and technical work produced become the property of
                  Stodels Nursery. Ad accounts, analytics, and platform logins remain with Stodels at all times.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-card/30 p-6">
                <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-copper mb-2">Confidentiality</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Broadbrand treats all business information, performance data, and strategic details
                  as strictly confidential.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── SECTION 12: NEXT STEPS ────────────────────── */

const nextStepCards = [
  { num: "1", title: "Confirm", detail: "Accept this proposal and agree on a start date." },
  { num: "2", title: "Kickoff", detail: "Schedule a kickoff call to align on priorities and grant platform access." },
  { num: "3", title: "Launch", detail: "Broadbrand begins onboarding: analytics audit, tracking setup, and Month 1 action plan." },
];

function ProposalNextSteps() {
  return (
    <section id="next-steps" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />
      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-copper">Next Steps</p>
          <h2 className="font-sans text-4xl md:text-6xl leading-[1.05] text-foreground mb-6">
            Next <span className="italic text-copper">Steps</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            If this proposal aligns with what Stodels is looking for:
          </p>
        </AnimateOnScroll>

        {/* Step cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {nextStepCards.map((step, i) => (
            <AnimateOnScroll key={i} delay={150 + i * 100}>
              <div className="rounded-xl border border-copper/20 bg-copper/[0.04] p-6 text-center">
                <span className="inline-flex w-10 h-10 rounded-full bg-copper/10 items-center justify-center text-lg font-bold text-copper mb-4">
                  {step.num}
                </span>
                <h4 className="text-sm font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={175}>
          <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto italic">
            The audit showed us exactly where the gaps are. This proposal is the roadmap to close them.
          </p>
        </AnimateOnScroll>

        {/* CTA */}
        <AnimateOnScroll delay={200}>
          <div className="relative mb-16">
            <div className="absolute inset-0 rounded-2xl bg-copper/5 blur-xl" />
            <div className="relative rounded-2xl border border-copper/20 bg-card/50 p-8">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:Shakierg@broadbrand.co.za?subject=Stodels%20Proposal%20Follow-up"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-copper text-background font-semibold text-sm tracking-wide hover:bg-copper-light transition-colors copper-glow"
                >
                  Get in Touch
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Footer */}
        <AnimateOnScroll delay={300}>
          <div className="botanical-line w-24 mx-auto mb-6" />
          <div className="flex items-center justify-center gap-6 mb-6">
            <Image
              src="/StodelsLogo.svg"
              alt="Stodels Nursery"
              width={120}
              height={26}
              className="opacity-60"
            />
            <div className="w-px h-6 bg-border/40" />
            <a href="https://broadbrand.co.za/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/Broadbrand logo.png"
                alt="Broadbrand"
                width={120}
                height={26}
                className="opacity-80 brightness-0 invert"
              />
            </a>
          </div>
          <p className="text-xs text-muted-foreground/80 tracking-wide">
            Prepared by{" "}
            <a href="https://broadbrand.co.za/" target="_blank" rel="noopener noreferrer" className="text-copper hover:text-copper-light transition-colors">
              Broadbrand
            </a>{" "}
            &middot; March 2026 &middot; This proposal is confidential and prepared exclusively for Stodels Nursery (Pty) Ltd.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ──────────────── MAIN PAGE COMPONENT ───────────────────────── */

export function ProposalPage() {
  return (
    <>
      <ProposalNav />
      <main>
        <ProposalHero />
        <Background />
        <Retainer />
        <PaidAdsDetail />
        <WebPerfDetail />
        <SEOContentDetail />
        <LocalSEODetail />
        <EcommerceCRO />
        <ReportingDetail />
        <Benefits />
        <Timeline />
        <Terms />
        <ProposalNextSteps />
      </main>
    </>
  );
}
