"use client";

import { healthScores } from "@/content/audit-data";
import { ScoreRing } from "@/components/ScoreRing";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function HealthScorecard() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Health Scorecard"
          title="Where you stand today"
          description="Eight key dimensions of your digital marketing health, scored from our independent audit."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-6">
          {healthScores.map((item, i) => (
            <AnimateOnScroll key={item.label} delay={i * 80}>
              <ScoreRing
                score={item.score}
                max={item.max}
                label={item.label}
                status={item.status}
                size={110}
              />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={600}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-score-excellent" />
              Excellent (9–10)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-score-good" />
              Good (7–8)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-score-needs-work" />
              Needs Work (5–6)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-score-poor" />
              Poor (3–4)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-score-critical" />
              Critical (1–2)
            </span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
