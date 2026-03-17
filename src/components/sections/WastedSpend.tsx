"use client";

import { wastedSpend } from "@/content/audit-data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function WastedSpend() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="The Cost of Slow"
          title="Speed directly impacts revenue"
          description={wastedSpend.intro}
        />

        {/* Main detail */}
        <AnimateOnScroll className="mb-8">
          <div className="rounded-xl border border-score-critical/20 bg-card/50 p-6 md:p-8">
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              {wastedSpend.detail}
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4">
              {wastedSpend.benchmarkNote}
            </p>
            <p className="text-xs text-muted-foreground/80 italic">
              {wastedSpend.accessNote}
            </p>
          </div>
        </AnimateOnScroll>

        {/* What this means */}
        <AnimateOnScroll delay={100} className="mb-8">
          <div className="rounded-lg border border-copper/15 bg-copper/[0.03] p-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-copper mb-2">
              What this means
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Customers clicking through from ads are waiting too long to see your products or offers, increasing the chance they leave before taking action. Improving mobile speed means getting more value from the traffic you&apos;re already paying for.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Key takeaway */}
        <AnimateOnScroll delay={200}>
          <div className="rounded-xl border border-copper/20 bg-copper/[0.04] p-6 text-center">
            <p className="font-sans text-lg md:text-xl italic text-copper">
              &ldquo;{wastedSpend.pullQuote}&rdquo;
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
