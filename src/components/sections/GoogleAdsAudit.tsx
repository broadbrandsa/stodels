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
          title="High volume, limited visibility into structure"
          description="A large number of ads are visible in the Google Ads Transparency Center, indicating active use of Google Ads. However, campaign structure, targeting, and performance cannot be confirmed without account access."
        />

        <AnimateOnScroll className="mb-8 -mt-4">
          <a
            href="https://adstransparency.google.com/?region=ZA&domain=stodels.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-copper hover:text-copper-light transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View in Google Ads Transparency Center
          </a>
        </AnimateOnScroll>

        {/* Issues */}
        <div className="space-y-5">
          {googleAds.issues.map((issue, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="rounded-xl border border-border/60 bg-card/30 p-6 hover:border-copper/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-sans text-copper">
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
                        className={`text-[11px] font-bold ${priorityColors[issue.priority]}`}
                      >
                        {issue.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {issue.detail}
                    </p>
                    {"businessImpact" in issue && issue.businessImpact && (
                      <div className="rounded-lg border border-copper/15 bg-copper/[0.03] p-4 mt-3">
                        <p className="text-xs font-semibold tracking-wider uppercase text-copper mb-1">What this means</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{issue.businessImpact}</p>
                      </div>
                    )}
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
