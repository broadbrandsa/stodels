"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function ProposalCTA() {
  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-copper/5 blur-xl" />
            <div className="relative rounded-2xl border border-copper/20 bg-copper/[0.04] p-8 md:p-10 text-center">
              <h3 className="font-sans text-2xl md:text-3xl leading-tight text-foreground mb-3">
                Ready to act on these findings?
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-lg mx-auto">
                We&apos;ve built a month-to-month retainer that addresses every issue in this audit.
              </p>
              <Link
                href="/proposal"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#fabb00] text-background font-semibold text-sm tracking-wide hover:bg-[#e0a800] transition-colors"
                style={{ boxShadow: "0 0 40px rgba(250, 187, 0, 0.2)" }}
              >
                View Our Proposal
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
