"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function NextSteps() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />

      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-copper">
            Next Steps
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-foreground mb-6">
            Ready to{" "}
            <span className="italic text-copper">grow?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            This audit is a starting point. The next step is a strategy session
            to align on priorities, timelines, and budget — so we can turn these
            findings into results.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:hello@broadbrand.co.za?subject=Stodels%20Audit%20Follow-up"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-copper text-background font-semibold text-sm tracking-wide hover:bg-copper-light transition-colors copper-glow"
            >
              Book a Strategy Session
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="mailto:hello@broadbrand.co.za?subject=Stodels%20Audit%20Question"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-copper/30 text-copper font-semibold text-sm tracking-wide hover:bg-copper/5 transition-colors"
            >
              Ask a Question
            </a>
          </div>
        </AnimateOnScroll>

        {/* Disclaimer */}
        <AnimateOnScroll delay={400} className="mt-20">
          <div className="rounded-xl border border-border/40 bg-card/20 p-6 text-left">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3">
              Important Notes
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground/70 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/30 shrink-0" />
                This audit is based on publicly available data only. No internal analytics, ad accounts, or backend systems were accessed.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/30 shrink-0" />
                All spend estimates are directional, based on ad volume observed in Meta Ad Library and Google Ads Transparency Center.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/30 shrink-0" />
                Recommendations require validation with actual account data before implementation.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/30 shrink-0" />
                Performance data from Google PageSpeed Insights, captured March 17, 2026.
              </li>
            </ul>
          </div>
        </AnimateOnScroll>

        {/* Footer */}
        <AnimateOnScroll delay={500} className="mt-16">
          <div className="botanical-line w-24 mx-auto mb-6" />
          <p className="text-xs text-muted-foreground/40 tracking-wide">
            Prepared by Broadbrand &middot; March 2026
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
