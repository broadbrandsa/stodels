"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { whatWeWouldDoNext } from "@/content/audit-data";
import Image from "next/image";

export function NextSteps() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />

      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-copper">
            What Comes Next
          </p>
          <h2 className="font-sans text-4xl md:text-6xl leading-[1.05] text-foreground mb-6">
            Ready to fix what&apos;s broken and capture what&apos;s{" "}
            <span className="italic text-copper">missing?</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            This audit is based on publicly available data from Meta Ad Library,
            Google Ads Transparency Center, and Google PageSpeed Insights (report
            dated March 17, 2026). All estimates and projections are based on
            industry benchmarks and approximate data. It identifies the issues and
            opportunities &mdash; but the real value comes from acting on them.
          </p>
        </AnimateOnScroll>

        {/* What we would do next */}
        <AnimateOnScroll delay={150}>
          <div className="rounded-xl border border-copper/20 bg-copper/[0.04] p-6 md:p-8 mb-8 text-left">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-copper mb-4 text-center">
              What we would do next
            </h3>
            <ul className="space-y-3 max-w-lg mx-auto">
              {whatWeWouldDoNext.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-copper/10 flex items-center justify-center text-xs font-bold text-copper shrink-0">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground/80 mt-4 text-center">
              A deeper engagement with access to Google Analytics, Meta Ads Manager,
              Google Ads, and Search Console would unlock significantly more detail &mdash;
              including exact spend, conversion rates, return on ad spend by campaign,
              audience demographics, and keyword-level performance.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={175}>
          <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto italic">
            The opportunity here is not to rebuild everything, but to unlock more value from what already exists.
          </p>
        </AnimateOnScroll>

        {/* CTA */}
        <AnimateOnScroll delay={200}>
          <div className="relative mb-16">
            <div className="absolute inset-0 rounded-2xl bg-copper/5 blur-xl" />
            <div className="relative rounded-2xl border border-copper/20 bg-card/50 p-8">
              <p className="text-lg font-semibold text-foreground mb-2">
                Let&apos;s turn this audit into a roadmap with timelines, ownership, and measurable targets.
              </p>
              <div className="mt-6 inline-flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:Shakierg@broadbrand.co.za?subject=Stodels%20Audit%20Follow-up"
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

        {/* Small print */}
        <AnimateOnScroll delay={300}>
          <p className="text-xs text-muted-foreground/70 mb-4 max-w-lg mx-auto leading-relaxed">
            Prepared by Broadbrand &middot; March 17, 2026 &middot; All data sourced from
            publicly available tools. Estimated search volumes are approximations
            based on available keyword research data for the South African market.
          </p>
        </AnimateOnScroll>

        {/* Footer with logos and data sources */}
        <AnimateOnScroll delay={400} className="mt-12">
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
          <p className="text-[11px] text-muted-foreground/80 tracking-wide mb-2">
            Data Sources: Meta Ad Library &middot; Google Ads Transparency Center &middot; Google PageSpeed Insights &middot; Google Search (site: operator)
          </p>
          <p className="text-xs text-muted-foreground/80 tracking-wide">
            Prepared by <a href="https://broadbrand.co.za/" target="_blank" rel="noopener noreferrer" className="text-copper hover:text-copper-light transition-colors">Broadbrand</a> &middot; March 2026
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
