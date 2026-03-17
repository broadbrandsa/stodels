"use client";

import { googleAds } from "@/content/audit-data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Badge } from "@/components/ui/badge";

const priorityColors: Record<string, string> = {
  Critical: "bg-score-critical/15 text-score-critical border-score-critical/30",
  High: "bg-score-poor/15 text-score-poor border-score-poor/30",
  Medium: "bg-score-needs-work/15 text-score-needs-work border-score-needs-work/30",
};

export function GoogleAdsAudit() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Google Advertising"
          title="High volume, unclear returns"
          description="Significant ad spend with structural gaps that likely erode ROAS."
        />

        {/* Spend estimate callout */}
        <AnimateOnScroll className="mb-12">
          <div className="rounded-xl border border-copper/20 bg-card/50 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="shrink-0 w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-copper">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-copper/70 mb-1">
                Estimated Monthly Spend
              </p>
              <p className="text-2xl font-serif text-foreground">
                {googleAds.estimatedSpend}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Based on observed ad volume in Google Ads Transparency Center
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Issues */}
        <div className="space-y-5">
          {googleAds.issues.map((issue, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="rounded-xl border border-border/60 bg-card/30 p-6 hover:border-copper/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-serif text-copper">
                      {i + 1}
                    </span>
                    {i < googleAds.issues.length - 1 && (
                      <div className="w-px h-4 bg-border/40" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {issue.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className={`text-[10px] font-bold ${priorityColors[issue.priority]}`}
                      >
                        {issue.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {issue.detail}
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
