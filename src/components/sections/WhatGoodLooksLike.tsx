"use client";

import { whatGoodLooksLike } from "@/content/audit-data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function WhatGoodLooksLike() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="The Opportunity"
          title="What this could look like"
          description="This is what a well-optimised digital presence delivers for a multi-location retail brand like Stodels."
        />

        <AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatGoodLooksLike.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-score-good/20 bg-score-good/[0.03] p-6 hover:border-score-good/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-score-good/10 flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-score-good">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
