"use client";

import { organicSEO } from "@/content/audit-data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Badge } from "@/components/ui/badge";

const priorityColors: Record<string, string> = {
  Critical: "bg-score-critical/15 text-score-critical border-score-critical/30",
  High: "bg-score-poor/15 text-score-poor border-score-poor/30",
  Medium: "bg-score-needs-work/15 text-score-needs-work border-score-needs-work/30",
};

export function OrganicSEO() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Organic Search & SEO"
          title="A channel with significant untapped potential"
          description="Paid ads stop working the moment you stop paying. Organic search compounds over time. Right now, Stodels is almost invisible for the non-branded searches that drive new customer discovery."
        />

        {/* Stat block */}
        <AnimateOnScroll className="mb-16">
          <div className="grid grid-cols-3 gap-4">
            {organicSEO.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-xl border border-copper/20 bg-card/50 p-5 text-center"
              >
                <p className="text-3xl font-bold text-copper mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Issue cards */}
        <div className="space-y-5">
          {organicSEO.issues.map((issue, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div className="rounded-xl border border-border/60 bg-card/30 p-6 hover:border-copper/20 transition-colors">
                <div className="flex flex-wrap items-center gap-3 mb-3">
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {issue.detail}
                </p>
                {"businessImpact" in issue && issue.businessImpact && (
                  <div className="rounded-lg border border-copper/15 bg-copper/[0.03] p-3 mt-3">
                    <p className="text-xs font-semibold tracking-wider uppercase text-copper mb-1">What this means</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{issue.businessImpact}</p>
                  </div>
                )}
                {"impact" in issue && issue.impact && (
                  <div className="rounded-lg bg-score-critical/5 border border-score-critical/10 p-3 mt-3">
                    <p className="text-xs font-semibold text-score-critical mb-1">Impact</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{issue.impact}</p>
                  </div>
                )}
                {"examples" in issue && issue.examples && (
                  <div className="grid md:grid-cols-2 gap-3 mt-3">
                    <div className="rounded-lg bg-score-critical/5 border border-score-critical/10 p-3">
                      <p className="text-xs font-semibold text-score-critical mb-2">Current</p>
                      {issue.examples.current.map((ex, j) => (
                        <p key={j} className="text-xs text-muted-foreground/70 line-through mb-1">{ex}</p>
                      ))}
                    </div>
                    <div className="rounded-lg bg-score-good/5 border border-score-good/10 p-3">
                      <p className="text-xs font-semibold text-score-good mb-2">Should Be</p>
                      {issue.examples.shouldBe.map((ex, j) => (
                        <p key={j} className="text-xs text-muted-foreground mb-1">{ex}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
