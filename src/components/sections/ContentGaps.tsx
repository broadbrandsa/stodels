"use client";

import { contentGaps } from "@/content/audit-data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const priorityBg: Record<string, string> = {
  Critical: "bg-score-critical/15 text-score-critical",
  High: "bg-score-poor/15 text-score-poor",
  Medium: "bg-score-good/15 text-score-good",
  Low: "bg-muted text-muted-foreground",
};

export function ContentGaps() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Content Gap Opportunities"
          title="The searches you could be showing up for"
          description="Based on a review of the current website structure and visible content, these are high-intent search themes where Stodels appears to have limited or no presence. Each represents an opportunity to attract new customers organically."
        />

        {/* Keyword table — desktop */}
        <AnimateOnScroll className="mb-12">
          <div className="rounded-xl border border-border/60 overflow-hidden hidden md:block">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60 bg-card/50">
                    <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider uppercase text-muted-foreground">Keyword / Topic</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold tracking-wider uppercase text-muted-foreground">Difficulty</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold tracking-wider uppercase text-muted-foreground">Relevance</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider uppercase text-muted-foreground">Recommended Content</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold tracking-wider uppercase text-muted-foreground">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {contentGaps.keywords.map((kw, i) => (
                    <tr key={i} className="border-b border-border/30 last:border-0">
                      <td className="px-4 py-3 font-medium text-foreground">{kw.keyword}</td>
                      <td className="px-4 py-3 text-center text-muted-foreground">{kw.difficulty}</td>
                      <td className="px-4 py-3 text-center text-muted-foreground">{kw.relevance}</td>
                      <td className="px-4 py-3 text-muted-foreground text-xs">{kw.content}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-bold ${priorityBg[kw.priority]}`}>
                          {kw.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile card layout */}
          <div className="md:hidden space-y-3">
            {contentGaps.keywords.map((kw, i) => (
              <div key={i} className="rounded-lg border border-border/60 bg-card/30 p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-sm font-medium text-foreground">{kw.keyword}</p>
                  <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-bold shrink-0 ${priorityBg[kw.priority]}`}>
                    {kw.priority}
                  </span>
                </div>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>{kw.difficulty} difficulty</span>
                  <span>{kw.relevance} relevance</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground/70">{kw.content}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Bottom callout — replaced with opportunity summary */}
        <AnimateOnScroll>
          <div className="rounded-xl border border-copper/20 bg-copper/[0.04] p-6">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {contentGaps.opportunitySummary}
            </p>
            <p className="text-xs text-muted-foreground/80 italic">
              {contentGaps.searchVolumeDisclaimer}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
