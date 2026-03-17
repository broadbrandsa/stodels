"use client";

import { metaAds } from "@/content/audit-data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Badge } from "@/components/ui/badge";

const priorityColors: Record<string, string> = {
  Critical: "bg-score-critical/15 text-score-critical border-score-critical/30",
  High: "bg-score-poor/15 text-score-poor border-score-poor/30",
  Medium: "bg-score-needs-work/15 text-score-needs-work border-score-needs-work/30",
};

const typeColors: Record<string, string> = {
  "Promo/Sales": "bg-copper/10 text-copper border-copper/20",
  "Lead Gen": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "In-store Traffic": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Generic: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
  "UGC/Social Proof": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Content/Education": "bg-teal-500/10 text-teal-400 border-teal-500/20",
};

export function MetaAdsAudit() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Meta Advertising"
          title="7 active ads, opportunity for structure"
          description="Your Meta ads show good creative variety. Based on publicly visible data, there is an opportunity to add more structure to guide customers through a journey from awareness to purchase."
        />

        <AnimateOnScroll className="mb-8 -mt-4">
          <a
            href="https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&is_targeted_country=false&media_type=all&search_type=page&sort_data[mode]=total_impressions&sort_data[direction]=desc&source=page-transparency-widget&view_all_page_id=160373593983370"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-copper hover:text-copper-light transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View in Meta Ad Library
          </a>
        </AnimateOnScroll>

        {/* Active ads table */}
        <AnimateOnScroll className="mb-16">
          <div className="rounded-xl border border-border/60 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60 bg-card/50">
                    <th className="px-5 py-3 text-left text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      Ad
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      Type
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-semibold tracking-wider uppercase text-muted-foreground hidden sm:table-cell">
                      Hook
                    </th>
                    <th className="px-5 py-3 text-right text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      Started
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {metaAds.ads.map((ad, i) => (
                    <tr
                      key={i}
                      className="border-b border-border/30 last:border-0 hover:bg-card/30 transition-colors"
                    >
                      <td className="px-5 py-4 font-medium text-foreground">
                        {ad.name}
                      </td>
                      <td className="px-5 py-4">
                        <Badge
                          variant="outline"
                          className={`text-[11px] font-semibold ${typeColors[ad.type] || ""}`}
                        >
                          {ad.type}
                        </Badge>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground italic hidden sm:table-cell max-w-[200px] truncate">
                        &ldquo;{ad.hook}&rdquo;
                      </td>
                      <td className="px-5 py-4 text-right text-muted-foreground whitespace-nowrap">
                        {ad.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Two column: Strengths + Issues */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Strengths */}
          <AnimateOnScroll>
            <div className="rounded-xl border border-score-good/20 bg-score-good/[0.03] p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-score-good mb-5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                What&apos;s Working
              </h3>
              <ul className="space-y-3">
                {metaAds.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-score-good/50 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Issues */}
          <AnimateOnScroll delay={100}>
            <div className="rounded-xl border border-border/60 bg-card/30 p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-score-critical mb-5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Opportunities Identified
              </h3>
              <div className="space-y-4">
                {metaAds.issues.map((issue, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-3">
                      <Badge
                        variant="outline"
                        className={`mt-0.5 text-[11px] font-bold shrink-0 ${priorityColors[issue.priority]}`}
                      >
                        {issue.priority}
                      </Badge>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {issue.title}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          {issue.detail}
                        </p>
                        {"businessImpact" in issue && issue.businessImpact && (
                          <div className="rounded-lg border border-copper/15 bg-copper/[0.03] p-3 mt-2">
                            <p className="text-[11px] font-semibold tracking-wider uppercase text-copper mb-0.5">What this means</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">{issue.businessImpact}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
