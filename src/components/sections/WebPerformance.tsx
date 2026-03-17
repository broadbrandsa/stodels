"use client";

import { webPerformance } from "@/content/audit-data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Tooltip } from "@/components/Tooltip";

const cwvTooltips: Record<string, string> = {
  lcp: "How long it takes for the biggest visible element on your page (usually the main image or headline) to fully appear. Under 2.5 seconds is good.",
  inp: "How quickly your site responds when someone taps a button or clicks a link. Under 200 milliseconds feels instant.",
  cls: "Measures whether page elements jump around while loading — like when a button moves just as you try to tap it. Lower is better.",
};

const labMetricTooltips: Record<string, { term: string; definition: string }> = {
  "Performance Score": { term: "Performance Score", definition: "Google's overall speed rating from 0 to 100. Below 50 is poor, 50–89 needs improvement, 90+ is good." },
  "First Contentful Paint": { term: "FCP (First Contentful Paint)", definition: "How quickly the first piece of content (text or image) appears on screen — the moment a visitor knows the page is loading." },
  "Largest Contentful Paint": { term: "LCP (Largest Contentful Paint)", definition: "How long it takes for the biggest visible element on your page (usually the main image or headline) to fully appear. Under 2.5 seconds is good." },
  "Total Blocking Time": { term: "TBT (Total Blocking Time)", definition: "How long the page's code blocks the browser from responding to taps and clicks. High TBT means the page looks loaded but nothing works when you interact." },
  "Cumulative Layout Shift": { term: "CLS (Cumulative Layout Shift)", definition: "Measures whether page elements jump around while loading — like when a button moves just as you try to tap it. Lower is better." },
  "Speed Index": { term: "Speed Index", definition: "How quickly the visible content of your page fills in during loading. A low Speed Index means visitors see content appearing smoothly." },
};

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
          description={webPerformance.description}
        />

        <AnimateOnScroll className="mb-8 -mt-4">
          <a
            href="https://pagespeed.web.dev/analysis/https-www-stodels-com/5c6trwg2ip?form_factor=mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-copper hover:text-copper-light transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View full PageSpeed Insights report
          </a>
        </AnimateOnScroll>

        {/* Core Web Vitals - pass badges */}
        <AnimateOnScroll className="mb-16">
          <div className="rounded-xl border border-score-good/20 bg-score-good/[0.03] p-6">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-score-good mb-5 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <Tooltip term="Core Web Vitals" definition="A set of three speed and usability measurements Google uses as a direct ranking factor. If your site passes, Google is more likely to rank it higher.">Core Web Vitals</Tooltip> — Real User Data (Pass ✓)
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(webPerformance.coreWebVitals).map(([key, data]) => (
                <div key={key} className="text-center">
                  <p className="text-2xl font-sans text-score-good">{data.value}</p>
                  <p className="mt-1 text-[11px] font-semibold tracking-wider uppercase text-muted-foreground">
                    <Tooltip term={key.toUpperCase()} definition={cwvTooltips[key] || ""}>
                      {key.toUpperCase()}
                    </Tooltip>
                  </p>
                  <p className="text-[11px] text-muted-foreground/80">{data.threshold} threshold</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground/80 italic text-center">
              {webPerformance.cwvFootnote}
            </p>
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
                        {labMetricTooltips[row.metric] ? (
                          <Tooltip term={labMetricTooltips[row.metric].term} definition={labMetricTooltips[row.metric].definition}>
                            {row.metric}
                          </Tooltip>
                        ) : row.metric}
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
