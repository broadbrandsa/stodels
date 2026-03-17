"use client";

import { localSEO } from "@/content/audit-data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Badge } from "@/components/ui/badge";

const priorityColors: Record<string, string> = {
  Critical: "bg-score-critical/15 text-score-critical border-score-critical/30",
  High: "bg-score-poor/15 text-score-poor border-score-poor/30",
  Medium: "bg-score-needs-work/15 text-score-needs-work border-score-needs-work/30",
};

export function LocalSEO() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Local SEO & Google Business Profile"
          title="7 stores, massive untapped potential"
          description="For a multi-location retailer, local search often drives more foot traffic than paid campaigns. Local searches have the highest purchase intent of any search type &mdash; these people are ready to visit a store today."
        />

        {/* Store cards grid */}
        <AnimateOnScroll className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {localSEO.stores.map((store, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/60 bg-card/30 p-4 hover:border-copper/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-copper shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <h3 className="text-sm font-semibold text-foreground">{store.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground">{store.detail}</p>
              </div>
            ))}
            {/* Needs card */}
            <div className="rounded-xl border border-copper/20 bg-copper/[0.04] p-4 col-span-2 md:col-span-3 lg:col-span-1">
              <p className="text-[11px] font-semibold tracking-wider uppercase text-copper mb-2">Each store needs</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{localSEO.storeNeeds}</p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Issue cards */}
        <div className="space-y-5 mb-16">
          {localSEO.issues.map((issue, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div className="rounded-xl border border-border/60 bg-card/30 p-6 hover:border-copper/20 transition-colors">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-base font-semibold text-foreground">{issue.title}</h3>
                  <Badge
                    variant="outline"
                    className={`text-[11px] font-bold ${priorityColors[issue.priority]}`}
                  >
                    {issue.priority}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{issue.detail}</p>
                {"businessImpact" in issue && issue.businessImpact && (
                  <div className="rounded-lg border border-copper/15 bg-copper/[0.03] p-3 mt-3">
                    <p className="text-xs font-semibold tracking-wider uppercase text-copper mb-1">What this means</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{issue.businessImpact}</p>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Near me stats */}
        <AnimateOnScroll>
          <div className="rounded-xl border border-score-critical/20 bg-score-critical/[0.03] p-6">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {localSEO.nearMeStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-lg font-bold text-score-critical">{stat.volume}</p>
                  <p className="text-xs text-muted-foreground">{stat.query}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm font-semibold text-foreground">
              Combined &ldquo;near me&rdquo; opportunity: <span className="text-score-critical">{localSEO.totalNearMeSuffix}</span>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
