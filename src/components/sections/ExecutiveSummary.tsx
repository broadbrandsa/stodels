"use client";

import { executiveSummary } from "@/content/audit-data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const iconMap: Record<string, React.ReactNode> = {
  alert: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  chart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  check: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
};

export function ExecutiveSummary() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Executive Summary"
          title="The headline findings"
        />

        {/* Priority callout */}
        <AnimateOnScroll>
          <div className="mb-16 relative">
            <div className="absolute inset-0 rounded-xl bg-copper/5 blur-sm" />
            <div className="relative rounded-xl border border-copper/20 bg-card/50 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center text-copper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-copper mb-2">
                    Top Priority
                  </p>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    {executiveSummary.topPriority}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Key findings grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {executiveSummary.keyFindings.map((finding, i) => (
            <AnimateOnScroll key={finding.title} delay={i * 100}>
              <div className="group rounded-xl border border-border/60 bg-card/30 p-6 hover:border-copper/30 hover:bg-card/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-sage group-hover:text-copper transition-colors">
                    {iconMap[finding.icon]}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {finding.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {finding.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
