"use client";

import { actionPlan, actionPlanFraming } from "@/content/audit-data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const phaseColors = [
  { bg: "bg-score-critical/10", border: "border-score-critical/20", dot: "bg-score-critical", text: "text-score-critical" },
  { bg: "bg-score-poor/10", border: "border-score-poor/20", dot: "bg-score-poor", text: "text-score-poor" },
  { bg: "bg-score-needs-work/10", border: "border-score-needs-work/20", dot: "bg-score-needs-work", text: "text-score-needs-work" },
  { bg: "bg-score-good/10", border: "border-score-good/20", dot: "bg-score-good", text: "text-score-good" },
];

export function ActionPlan() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Action Plan"
          title="A clear path forward"
          description="Prioritised by impact &mdash; emergency fixes first, then build the machine."
        />

        {/* Commercial framing */}
        <AnimateOnScroll className="mb-12">
          <div className="rounded-xl border border-copper/20 bg-copper/[0.04] p-6">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-copper mb-4">
              What this plan is designed to do
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {actionPlanFraming.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-copper/50 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-score-critical via-score-needs-work to-score-good hidden md:block" />

          <div className="space-y-8 md:space-y-10">
            {actionPlan.map((phase, i) => {
              const colors = phaseColors[i];
              return (
                <AnimateOnScroll key={phase.phase} delay={i * 120}>
                  <div className="flex gap-5 md:gap-8">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-col items-center shrink-0">
                      <div className={`w-3 h-3 rounded-full ${colors.dot} ring-4 ring-background`} />
                    </div>

                    {/* Card */}
                    <div className={`flex-1 rounded-xl border ${colors.border} ${colors.bg} p-6`}>
                      <div className="flex flex-wrap items-baseline gap-3 mb-4">
                        <span className={`text-xs font-bold tracking-wider uppercase ${colors.text}`}>
                          {phase.phase}
                        </span>
                        <span className="text-sm font-semibold text-foreground">
                          {phase.title}
                        </span>
                      </div>
                      <ul className="space-y-2.5">
                        {phase.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                            <span className={`mt-2 w-1 h-1 rounded-full ${colors.dot} shrink-0`} />
                            {item}
                          </li>
                        ))}
                      </ul>
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
