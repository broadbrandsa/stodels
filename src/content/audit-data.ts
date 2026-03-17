export const healthScores = [
  { label: "Meta Ads", score: 6, max: 10, status: "needs-work" as const },
  { label: "Google Ads", score: 5, max: 10, status: "needs-work" as const },
  { label: "Mobile Speed", score: 4, max: 10, status: "poor" as const },
  { label: "Desktop Speed", score: 6, max: 10, status: "needs-work" as const },
  { label: "Accessibility", score: 8, max: 10, status: "good" as const },
  { label: "Best Practices", score: 10, max: 10, status: "excellent" as const },
  { label: "Technical SEO", score: 8, max: 10, status: "good" as const },
];

export const overallScore = { score: 47, max: 70, grade: "C+" };

export const executiveSummary = {
  topPriority:
    "Mobile page speed is critical — 6.8s LCP on mobile is unacceptable for paid traffic. Every second of delay is burning ad spend.",
  keyFindings: [
    {
      icon: "alert",
      title: "Mobile Performance: 58/100",
      description:
        "Your site takes 6.8 seconds to show its main content on mobile. 53% of mobile users abandon sites taking more than 3 seconds.",
    },
    {
      icon: "chart",
      title: "Meta Ads Lack Funnel Structure",
      description:
        "All 7 ads appear to run standalone with no sequential messaging or retargeting layers. Good creative variety, but no strategy connecting them.",
    },
    {
      icon: "search",
      title: "Google Ads: High Volume, Unclear ROI",
      description:
        "Dozens of creatives visible with no Shopping or Performance Max campaigns. Estimated R30K–R80K+ monthly spend with potential structural waste.",
    },
    {
      icon: "check",
      title: "Strong Technical Foundation",
      description:
        "Accessibility (93/100), Best Practices (100/100), and Core Web Vitals field data all pass. The foundation is solid — it just needs optimization.",
    },
  ],
};

export const metaAds = {
  activeCount: 7,
  ads: [
    {
      name: "25% Off Fertiliser",
      type: "Promo/Sales",
      date: "Mar 4, 2026",
      hook: "Let Stodels Do the Heavy Lifting",
    },
    {
      name: "Garden Club VIP",
      type: "Lead Gen",
      date: "Feb 26, 2026",
      hook: "If you truly love gardening…",
    },
    {
      name: "Free Earthlee Backpack",
      type: "In-store Traffic",
      date: "Mar 4, 2026",
      hook: "FREE GIFT?!",
    },
    {
      name: "Brand Awareness",
      type: "Generic",
      date: "Mar 10, 2026",
      hook: "Ready to turn your garden dreams into reality?",
    },
    {
      name: "Customer Testimonial",
      type: "UGC/Social Proof",
      date: "Mar 4, 2026",
      hook: "Douglas Mabotse 5-star review",
    },
    {
      name: "Seed Growing Tips",
      type: "Content/Education",
      date: "Mar 10, 2026",
      hook: "So you bought seeds… now what?",
    },
    {
      name: "Herb Growing Promo",
      type: "Promo/Sales",
      date: "Mar 16, 2026",
      hook: "Grow Your Own with Stodels Herbs!",
    },
  ],
  strengths: [
    "Good content variety across promos, education, social proof, and lead gen",
    "Smart use of customer testimonials for trust-building",
    "Educational content positions Stodels as an expert authority",
    "Multi-platform distribution (Facebook, Instagram, Messenger)",
  ],
  issues: [
    {
      priority: "Critical",
      title: "No Funnel Structure",
      detail:
        "All ads run standalone — no sequential messaging, no retargeting layers. Build a 3-tier funnel: Awareness → Retargeting → Conversion.",
    },
    {
      priority: "High",
      title: "Static Image Only — No Video",
      detail:
        "Zero video or Reels content visible. Add 15–30s short-form video. Reels consistently outperform static on Meta.",
    },
    {
      priority: "High",
      title: "No A/B Testing Visible",
      detail:
        "Each concept appears once with no variations. Create 3–4 variations per winning concept to find what resonates.",
    },
    {
      priority: "Medium",
      title: "Generic Brand Ad Wastes Budget",
      detail:
        "One ad has no CTA or offer — just vague brand awareness. Replace with a specific action (buying guide, quiz, product collection).",
    },
    {
      priority: "High",
      title: "Geographic Targeting Mismatch",
      detail:
        "Online-only offers (Western Cape delivery) are running in Gauteng. Add geographic exclusions immediately.",
    },
  ],
};

export const googleAds = {
  issues: [
    {
      priority: "Critical",
      title: "High Volume Without Clear Structure",
      detail:
        "Dozens of ad creatives visible. Audit campaign hierarchy: Brand, Non-Brand, Categories, Local, and Remarketing should be separate.",
    },
    {
      priority: "High",
      title: "No Shopping or Performance Max",
      detail:
        "Only text and display ads visible. Set up Google Merchant Center and Shopping campaigns — these typically deliver 2–3x better ROAS for retail.",
    },
    {
      priority: "Medium",
      title: "Display Ads Burning Budget",
      detail:
        "Display ads likely running on low-intent placements. Review placement exclusions and shift budget to search and remarketing.",
    },
  ],
  estimatedSpend: "R30,000 – R80,000+/month",
};

export const webPerformance = {
  coreWebVitals: {
    lcp: { value: "1.9s", status: "pass" as const, threshold: "< 2.5s" },
    inp: { value: "97ms", status: "pass" as const, threshold: "< 200ms" },
    cls: { value: "0.01", status: "pass" as const, threshold: "< 0.1" },
  },
  labMetrics: [
    {
      metric: "Performance Score",
      mobile: "58/100",
      mobileStatus: "critical" as const,
      desktop: "68/100",
      desktopStatus: "needs-work" as const,
      target: "90+",
    },
    {
      metric: "First Contentful Paint",
      mobile: "3.3s",
      mobileStatus: "critical" as const,
      desktop: "0.8s",
      desktopStatus: "good" as const,
      target: "< 1.8s",
    },
    {
      metric: "Largest Contentful Paint",
      mobile: "6.8s",
      mobileStatus: "critical" as const,
      desktop: "2.8s",
      desktopStatus: "needs-work" as const,
      target: "< 2.5s",
    },
    {
      metric: "Total Blocking Time",
      mobile: "510ms",
      mobileStatus: "critical" as const,
      desktop: "380ms",
      desktopStatus: "needs-work" as const,
      target: "< 200ms",
    },
    {
      metric: "Cumulative Layout Shift",
      mobile: "0.064",
      mobileStatus: "good" as const,
      desktop: "0.001",
      desktopStatus: "good" as const,
      target: "< 0.1",
    },
    {
      metric: "Speed Index",
      mobile: "7.2s",
      mobileStatus: "critical" as const,
      desktop: "3.0s",
      desktopStatus: "good" as const,
      target: "< 3.4s",
    },
  ],
};

export const wastedSpend = {
  mobileTrafficShare: "60%",
  bounceFromSpeed: "40–50%",
  wastedClickPercent: "24–30%",
  monthlyBudgetExample: "R50,000",
  monthlyWaste: "R12,000 – R15,000",
  annualWaste: "R144,000 – R180,000",
  recoveryPotential: "20–30% bounce reduction",
};

export const actionPlan = [
  {
    phase: "Week 1",
    title: "Emergency Fixes",
    items: [
      "Optimize LCP element (hero image) — target mobile LCP under 4s",
      "Defer non-critical JavaScript — target TBT under 300ms",
      "Add geographic targeting to Meta ads",
      "Install caching plugin with CDN integration",
    ],
  },
  {
    phase: "Week 2–3",
    title: "Campaign Structure",
    items: [
      "Restructure Meta ads into 3-tier funnel",
      "Audit Google Ads account structure",
      "Set up proper UTM parameters and tracking",
      "Launch A/B testing on top Meta concepts",
      "Set up Google Merchant Center + Shopping campaigns",
    ],
  },
  {
    phase: "Month 2",
    title: "Optimization",
    items: [
      "Create video ad content (Reels format)",
      "Implement remarketing audiences",
      "Fix accessibility color contrast issues",
      "Get mobile Performance score above 75",
    ],
  },
  {
    phase: "Month 3+",
    title: "Scale",
    items: [
      "Increase budget to highest-ROAS campaigns",
      "Launch Performance Max campaigns",
      "Expand Google Ads for competitor keywords",
      "Build dedicated landing pages for paid traffic",
    ],
  },
];
