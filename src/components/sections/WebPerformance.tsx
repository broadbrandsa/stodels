"use client";

import { webPerformance } from "@/content/audit-data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const statusBg: Record<string, string> = {
  good: "bg-score-good/15 text-score-good",
  "needs-work": "bg-score-needs-work/15 text-score-needs-work",
  critical: "bg-score-critical/15 text-score-critical",
  pass: "bg-score-good/15 text-score-good",
};

export function WebPerformance() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Website Performance"
          title="Strong foundation, slow delivery"
          description="Core Web Vitals pass in the field — but lab testing reveals serious mobile bottlenecks that hurt paid traffic."
        />

        {/* Core Web Vitals - pass badges */}
        <AnimateOnScroll className="mb-16">
          <div className="rounded-xl border border-score-good/20 bg-score-good/[0.03] p-6">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-score-good mb-5 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Core Web Vitals — Field Data (Pass)
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(webPerformance.coreWebVitals).map(([key, data]) => (
                <div key={key} className="text-center">
                  <p className="text-2xl font-serif text-score-good">{data.value}</p>
                  <p className="mt-1 text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">
                    {key.toUpperCase()}
                  </p>
                  <p className="text-[10px] text-muted-foreground/60">{data.threshold}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Lab metrics table */}
        <AnimateOnScroll>
          <div className="rounded-xl border border-border/60 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60 bg-card/50">
                    <th className="px-5 py-3 text-left text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      Metric
                    </th>
                    <th className="px-5 py-3 text-center text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      <span className="flex items-center justify-center gap-1.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                          <line x1="12" y1="18" x2="12.01" y2="18" />
                        </svg>
                        Mobile
                      </span>
                    </th>
                    <th className="px-5 py-3 text-center text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      <span className="flex items-center justify-center gap-1.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                        Desktop
                      </span>
                    </th>
                    <th className="px-5 py-3 text-right text-xs font-semibold tracking-wider uppercase text-muted-foreground hidden sm:table-cell">
                      Target
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {webPerformance.labMetrics.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-border/30 last:border-0"
                    >
                      <td className="px-5 py-4 font-medium text-foreground">
                        {row.metric}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold ${statusBg[row.mobileStatus]}`}>
                          {row.mobile}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold ${statusBg[row.desktopStatus]}`}>
                          {row.desktop}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right text-muted-foreground hidden sm:table-cell">
                        {row.target}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
