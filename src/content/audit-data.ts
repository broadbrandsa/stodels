export const healthScores = [
  { label: "Meta Ads", score: 6, max: 10, status: "needs-work" as const },
  { label: "Google Ads", score: 5, max: 10, status: "needs-work" as const },
  { label: "Mobile Speed", score: 4, max: 10, status: "poor" as const },
  { label: "Desktop Speed", score: 6, max: 10, status: "needs-work" as const },
  { label: "Organic SEO", score: 5, max: 10, status: "needs-work" as const },
  { label: "Accessibility", score: 8, max: 10, status: "good" as const },
  { label: "Best Practices", score: 10, max: 10, status: "excellent" as const },
  { label: "Technical SEO", score: 8, max: 10, status: "good" as const },
];

export const overallScore = { score: 52, max: 80, grade: "C+" };

export const heroSubtitle =
  "Stodels has a 60-year brand, 7 stores, and 4.5-star reviews \u2014 but the digital presence isn't keeping pace. Here's exactly what to fix and why.";

export const executiveSummary = {
  topPriority:
    "Mobile page speed is critical \u2014 a 58/100 Performance score means every paid ad click on mobile lands on a slow experience. With a 6.8-second LCP, over half your mobile visitors leave before seeing your content.",
  keyFindings: [
    {
      icon: "alert",
      title: "Mobile Performance: 58/100",
      description:
        "When someone clicks your ad on their phone, they wait 6.8 seconds before seeing your main content \u2014 over twice as long as most people will wait. According to Google research, 53% of mobile visitors leave a site that takes more than 3 seconds to load. This directly undermines the value of every paid click on Meta and Google.",
    },
    {
      icon: "chart",
      title: "Meta Ads: Limited Funnel Structure Visible",
      description:
        "From the publicly visible ads captured in this audit, there is no clear evidence of a structured funnel separating awareness, retargeting, and conversion messaging. The ads show a mix of promotions, educational content, and social proof, but appear to operate as standalone campaigns rather than part of a sequential customer journey.",
    },
    {
      icon: "search",
      title: "Google Ads: High Volume, Limited Visibility",
      description:
        "A large number of ads are visible in the Google Ads Transparency Center, indicating active use of Google Ads. The publicly visible ad mix appears weighted toward standard search and display formats. Campaign structure, targeting, and performance cannot be confirmed without account access.",
    },
    {
      icon: "globe",
      title: "Organic Search Is an Untapped Channel",
      description:
        "No dedicated store location pages were observed on the website. Default \u201CArchives\u201D titles on product category pages. Approximately 20 articles are visible in search results, suggesting a relatively small content footprint for a brand with significant expertise.",
    },
    {
      icon: "check",
      title: "Strong Technical Foundation",
      description:
        "Accessibility (93\u201394/100 across mobile and desktop), Best Practices (100/100), and Core Web Vitals field data all pass. The foundation is solid \u2014 it needs optimization, not a rebuild.",
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
      hook: "If you truly love gardening\u2026",
    },
    {
      name: "Free Earthlee Backpack",
      type: "In-store Traffic",
      date: "Mar 4, 2026",
      hook: "FREE GIFT?! \u2014 free with any in-store purchase until 24 March",
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
      hook: "So you bought seeds\u2026 now what?",
    },
    {
      name: "Herb Growing Promo",
      type: "Promo/Sales",
      date: "Mar 16, 2026 (just launched \u2014 10 hours active at time of capture)",
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
      title: "No Structured Funnel Visible",
      detail:
        "From the publicly visible ads captured in this audit, there is no clear evidence of a structured funnel separating awareness, retargeting (showing ads again to people who have already visited your site), and conversion messaging. The ads show a mix of promotions, educational content, and social proof, but appear to operate as standalone campaigns rather than part of a sequential customer journey. This suggests an opportunity to introduce a more structured funnel approach: Awareness (introduce the brand and inspire) \u2192 Consideration (educate and build trust) \u2192 Conversion (drive store visits or purchases).",
      businessImpact:
        "Potential customers are not being guided from first interest to purchase, which reduces the effectiveness of your advertising spend.",
    },
    {
      priority: "High",
      title: "No Video or Reels Content Observed",
      detail:
        "No clear short-form video or Reels-based creative was observed in the ads captured for this audit. This presents an opportunity to introduce video content, which typically drives stronger engagement and reach on Meta platforms.",
      businessImpact:
        "Video content typically generates more attention and engagement, which means more people seeing your stores, products, and expertise.",
    },
    {
      priority: "High",
      title: "Limited Visible Creative Variation",
      detail:
        "Each concept appears as a single execution within the publicly visible ads. This suggests an opportunity to test multiple variations of high-performing ideas to improve performance over time.",
      businessImpact:
        "Without testing different versions, you may be missing the message or format that would bring more customers into stores.",
    },
    {
      priority: "Medium",
      title: "Generic Brand Ad Lacks Clear CTA",
      detail:
        "One ad has no clear call-to-action or offer \u2014 just broad brand awareness. This could be strengthened with a specific action (buying guide, quiz, product collection).",
    },
    {
      priority: "High",
      title: "Potential Geographic Mismatch",
      detail:
        "If online-only promotions are being shown outside of the delivery area (e.g. outside the Western Cape), this could lead to unnecessary clicks and user frustration. This should be validated within the ad account and aligned with delivery capabilities.",
      businessImpact:
        "Customers who click but can\u2019t order will leave frustrated \u2014 wasting ad budget and potentially damaging brand perception.",
    },
  ],
};

export const googleAds = {
  issues: [
    {
      priority: "Critical",
      title: "Campaign Structure Cannot Be Assessed Externally",
      detail:
        "Campaign structure cannot be assessed from publicly available data. A full audit with account access is required to determine performance and efficiency.",
      businessImpact:
        "Without clear structure, it\u2019s difficult to know which campaigns are driving store visits and sales versus which are spending without clear return.",
    },
    {
      priority: "High",
      title: "Ad Mix Weighted Toward Standard Formats",
      detail:
        "The publicly visible ad mix appears to be weighted toward standard search and display formats. We did not observe clear evidence of a strong Shopping-led retail structure (ads that show product photos, prices, and ratings at the top of Google search) in the sample reviewed, which may represent an opportunity given the product-driven nature of the business.",
      businessImpact:
        "Shoppers searching for specific products may not be seeing your products with images and prices at the top of Google, where purchase intent is highest.",
    },
    {
      priority: "Medium",
      title: "Display Ad Placement Worth Reviewing",
      detail:
        "Display ads (banner ads that appear on other websites) may be showing on low-relevance sites and apps. A review of placement performance within the ad account would help identify whether budget could be better allocated toward higher-intent search and retargeting (showing ads again to people who\u2019ve already visited) formats.",
      businessImpact:
        "Budget may be going toward impressions on irrelevant websites rather than reaching people who are actively looking for what you sell.",
    },
  ],
};

export const webPerformance = {
  cwvHeading: "Core Web Vitals \u2014 Real User Data (Pass \u2713)",
  cwvFootnote:
    "Values from PageSpeed Insights report, March 17, 2026. Represents the 75th percentile of real user experiences and may fluctuate over time.",
  description:
    "Your site passes Google\u2019s real-world speed test (based on actual visitor data over 28 days), which protects your search rankings. However, controlled lab tests reveal serious mobile speed problems that are reducing the value of paid advertising traffic.",
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
  headline: "The Cost of Slow",
  intro:
    "Speed directly impacts how much value you get from paid traffic.",
  detail:
    "With a mobile Largest Contentful Paint of 6.8 seconds, visitors are reaching a slower-than-ideal experience after clicking through from ads. This increases the likelihood that users leave before engaging with products, offers, or store information.",
  benchmarkNote:
    "Based on general mobile behaviour benchmarks, slower load times typically result in higher bounce rates and lower engagement.",
  accessNote:
    "Exact financial impact would require access to Google Analytics and ad platform data.",
  pullQuote:
    "Before increasing media spend, improving mobile load performance will increase the value of existing traffic.",
};

export const organicSEO = {
  stats: [
    { value: "~20", label: "Articles visible in search results \u2014 a relatively small content footprint for a brand with significant expertise" },
    { value: "0", label: "Dedicated store location pages" },
    { value: "\u201CArchives\u201D", label: "Default title suffix on product category pages" },
  ],
  issues: [
    {
      priority: "Critical",
      title: "No Dedicated Store Location Pages Observed",
      detail:
        "No dedicated store location pages were observed on the website. Stodels has 7 physical stores across the Western Cape and Gauteng but zero dedicated landing pages for any of them. This significantly limits the site\u2019s ability to rank for \u201Cgarden centre near me,\u201D \u201Cgarden centre Bellville,\u201D \u201Cnursery Constantia,\u201D or any location-specific search. Each store needs its own page with unique content, directions, hours, staff highlights, local inventory, and LocalBusiness schema (structured data that helps Google show your store info in search results).",
      businessImpact:
        "Customers searching for a nearby garden centre are more likely to find and visit competitors instead of your stores.",
      impact:
        "\u201CGarden centre near me\u201D is one of the highest-volume local search terms in this category. Without dedicated location pages, this high-intent traffic goes to competitors.",
    },
    {
      priority: "Critical",
      title: "Product Category Pages Use Default \u201CArchives\u201D Titles",
      detail:
        "Category pages use the WooCommerce default title format: \u201CStodels specials Archives - Stodels.\u201D This tells Google (and customers) nothing about what the page contains. Every category title needs to be rewritten with target keywords.",
      examples: {
        current: [
          "Stodels specials Archives - Stodels",
          "Seeds Archives - Stodels",
          "Garden tools Archives - Stodels",
        ],
        shouldBe: [
          "Garden Specials & Deals \u2014 Save on Plants & Accessories | Stodels",
          "Flower, Vegetable & Herb Seeds | Shop Online | Stodels",
          "Garden Tools \u2014 Secateurs, Spades & Shears | Stodels",
        ],
      },
    },
    {
      priority: "High",
      title: "Duplicate Content Paths for Educational Content",
      detail:
        "Gardening advice lives across three different URL paths: /be-inspired/, /learn-articles/learn-archive/, and /category/gardening-tips-gardening-tips/. The last one has a duplicated slug. This fragments the SEO value across competing pages instead of concentrating it. Consolidate all content under one path (recommend /learn/) and redirect the others.",
    },
    {
      priority: "High",
      title: "Thin Content Library",
      detail:
        "Approximately 20 articles are visible in search results, suggesting a relatively small content footprint for a brand with 60+ years of horticultural expertise and a team of qualified horticulturists. Competitors like GardenShop maintain deep content libraries covering seasonal guides, plant care, and local gardening advice. Target: 2\u20134 new articles per month covering priority keywords.",
      businessImpact:
        "Common gardening questions are bringing new customers to competitor websites instead of yours \u2014 each one a missed opportunity to build trust and drive store visits.",
    },
    {
      priority: "Medium",
      title: "No Backlink or Digital PR Strategy",
      detail:
        "The backlink profile consists of passive directory listings (Yellow Pages SA, SA Venues, ZoomInfo) and a Wikipedia page. No earned editorial links from gardening publications, home/lifestyle media, or South African news outlets. Stodels\u2019 award wins (Best Garden Centre SA 2013 and 2022) and expert staff are linkable assets that aren\u2019t being leveraged.",
    },
    {
      priority: "Medium",
      title: "Category Pages Lack Content Depth",
      detail:
        "Product category pages show a grid of products with no introductory content. Pages like /product-category/plants-by-type/indoor-plants/ would rank better and convert better with 200\u2013400 words of relevant introductory copy covering care tips, buying advice, and links to related categories.",
    },
  ],
};

export const contentGaps = {
  searchVolumeDisclaimer:
    "*Search volume estimates are approximations based on publicly available keyword research data for the South African market. Exact figures require tools such as Google Keyword Planner, Ahrefs, or Semrush.",
  keywords: [
    { keyword: "garden centre near me", difficulty: "Low", relevance: "High", content: "Local landing pages (x7)", priority: "Critical" },
    { keyword: "indoor plants south africa", difficulty: "Medium", relevance: "High", content: "Category page + care guide", priority: "Critical" },
    { keyword: "buy plants online cape town", difficulty: "Medium", relevance: "High", content: "Optimised shop/category page", priority: "Critical" },
    { keyword: "how to start a garden south africa", difficulty: "Low", relevance: "High", content: "Comprehensive blog guide", priority: "High" },
    { keyword: "water-wise garden south africa", difficulty: "Low", relevance: "High", content: "Blog series (3\u20134 articles)", priority: "High" },
    { keyword: "indigenous plants western cape", difficulty: "Low", relevance: "High", content: "Category page + blog", priority: "High" },
    { keyword: "best plants for shade cape town", difficulty: "Low", relevance: "High", content: "Blog article", priority: "High" },
    { keyword: "vegetable garden south africa", difficulty: "Medium", relevance: "Medium", content: "Blog guide", priority: "High" },
    { keyword: "plant delivery cape town", difficulty: "Medium", relevance: "High", content: "Dedicated service page", priority: "Medium" },
    { keyword: "succulent care south africa", difficulty: "Low", relevance: "Medium", content: "Blog article", priority: "Medium" },
    { keyword: "garden tools buying guide", difficulty: "Low", relevance: "Medium", content: "Blog buying guide", priority: "Medium" },
    { keyword: "stodels vs cape garden centre", difficulty: "Low", relevance: "High", content: "Comparison/about page", priority: "Low" },
    { keyword: "garden landscaping ideas SA", difficulty: "Medium", relevance: "Medium", content: "Blog + image gallery", priority: "Low" },
    { keyword: "balcony garden south africa", difficulty: "Low", relevance: "Medium", content: "Blog guide", priority: "Low" },
    { keyword: "fynbos garden design", difficulty: "Low", relevance: "High", content: "Blog + product links", priority: "Low" },
  ],
  opportunitySummary:
    "These topics represent meaningful organic discovery opportunities across local search (\u201Cnear me\u201D and location-based queries), indoor and beginner gardening, and seasonal and water-wise gardening. Expanding content in these areas would increase visibility and create additional entry points for new customers over time.",
};

export const localSEO = {
  stores: [
    { name: "Bellville", detail: "HQ, opened 1973" },
    { name: "Kenilworth", detail: "Opened 1968" },
    { name: "Milnerton", detail: "Opened 2005" },
    { name: "Constantia", detail: "Opened 2012" },
    { name: "Somerset West", detail: "Opened 2012" },
    { name: "Randburg / Ferndale", detail: "Gauteng" },
    { name: "Pretoria / Greenlyn", detail: "Gauteng" },
  ],
  storeNeeds:
    "Dedicated landing page, unique content, LocalBusiness schema, embedded Google Map, store-specific photos, staff highlights",
  issues: [
    {
      priority: "Critical",
      title: "No Dedicated Location Pages on the Website",
      detail:
        "All 7 stores share a single /contact-us/ page. Google cannot rank a single page for 7 different local searches. Each store needs its own URL (e.g., /stores/bellville/, /stores/constantia/) with unique content: store hours, directions, parking info, local inventory highlights, seasonal displays, staff introductions, and customer reviews specific to that location.",
      businessImpact:
        "Thousands of monthly \u201Cnear me\u201D searches are going to competitors with location-optimised pages \u2014 these are customers ready to visit a store today.",
    },
    {
      priority: "Medium",
      title: "NAP Consistency Across the Web",
      detail:
        "Name, Address, and Phone number must be identical across the website, Google Business Profiles, Facebook pages, directory listings, and all third-party citations. Even small inconsistencies (e.g., \u201CStodels\u201D vs. \u201CStodels Nursery\u201D vs. \u201CStodels Garden Centre\u201D) can dilute local search authority.",
    },
  ],
  nearMeStats: [
    { query: "\u201Cgarden centre near me\u201D", volume: "Very High", suffix: "" },
    { query: "\u201Cnursery near me\u201D", volume: "High", suffix: "" },
    { query: "\u201Cplant shop near me\u201D", volume: "Moderate", suffix: "" },
  ],
  totalNearMeSuffix: "thousands of high-intent local searches per month \u2014 largely going to competitors with location-optimised pages.",
};

export const actionPlan = [
  {
    phase: "Week 1",
    title: "Emergency Fixes",
    items: [
      "Optimise the main hero image on the homepage \u2014 compress it, convert to a modern format (WebP), and serve a smaller version to phone screens. Target: main content visible in under 4 seconds on mobile.",
      "Reduce non-essential scripts so pages become usable faster on mobile (including analytics, chat, and social integrations). Target: page feels responsive within 300 milliseconds.",
      "Validate geographic targeting on Meta ads \u2014 ensure online-only promotions are aligned with the Western Cape delivery area.",
      "Improve server-side delivery and caching to reduce mobile load times. Combine with a CDN (content delivery network) to serve your site from servers closer to each South African visitor.",
      "Remove the default \u201CArchives\u201D suffix from all product category page titles (e.g., change \u201CSeeds Archives - Stodels\u201D to \u201CFlower, Vegetable & Herb Seeds | Stodels\u201D) \u2014 this is a settings change in your WordPress SEO plugin.",
      "Simplify content structure and remove duplicate or inefficient URL paths.",
    ],
  },
  {
    phase: "Weeks 2\u20134",
    title: "Foundations",
    items: [
      "Create 7 individual store location pages (e.g., stodels.com/stores/bellville/) with unique content, embedded Google Maps, opening hours, and structured data that helps Google show your store info directly in search results.",
      "Write custom page summaries (meta descriptions) for the top 15 product category pages \u2014 these are the short descriptions that appear below your page title in Google search results and influence whether people click.",
      "Add 200\u2013400 words of introductory content to each product category page.",
      "Restructure Meta ads into a 3-tier funnel: Awareness (video/educational) \u2192 Consideration (social proof/Garden Club) \u2192 Conversion (promotional offers with urgency).",
      "Review Google Ads account structure \u2014 organise into Brand, Non-Brand, Product, Local, and Remarketing campaigns.",
      "Add tracking tags (UTM parameters) to all ad links so Google Analytics can tell you exactly which ads, platforms, and campaigns are driving sales \u2014 not just clicks.",
      "Audit and optimise all 7 Google Business Profiles \u2014 photos, hours, categories, posts.",
      "Introduce structured creative variation on top-performing Meta ad concepts with 3\u20134 variations each.",
    ],
  },
  {
    phase: "Month 2",
    title: "Growth",
    items: [
      "Publish 4 blog articles targeting priority keywords: beginner gardening guide (Cape Town), indoor plant care, water-wise gardening, and indigenous plants for Western Cape.",
      "Create video ad content: store walkthroughs, staff plant care tips, customer testimonials in Reels format.",
      "Set up Google Merchant Center and launch Shopping campaigns for the online catalog.",
      "Build retargeting audiences so you can show specific ads to: recent website visitors, people who added items to cart but didn\u2019t buy, Garden Club members, and new audiences that look like your existing customers.",
      "Address accessibility issues: colour contrast ratios, link descriptive text, heading hierarchy.",
      "Target mobile Performance score above 75 through continued speed optimisation.",
      "Build a \u201CMeet Our Experts\u201D page showcasing the horticultural team with credentials and specialties.",
    ],
  },
  {
    phase: "Month 3+",
    title: "Scale & Compound",
    items: [
      "Increase budget allocation to highest-performing campaigns once conversion tracking is verified.",
      "Explore Performance Max campaigns for both online sales and in-store visit goals.",
      "Publish 2\u20134 articles per month following a seasonal content calendar aligned with keyword opportunities.",
      "Launch link-building programme: pitch seasonal stories to SA lifestyle publications, create comprehensive guides as linkable assets, partner with local garden bloggers.",
      "Build dedicated landing pages for paid traffic with faster load times and focused conversion paths.",
      "Evaluate the potential to expand e-commerce delivery nationally to compete with Plantify and Plantland.",
      "Build content hubs around core topics (indoor plants, indigenous gardening, vegetable growing, water-wise landscaping) \u2014 each with a main guide page linking to 5\u201310 supporting articles. This structure helps Google see Stodels as an authority on these subjects.",
    ],
  },
];


export const whyThisMattersNow = [
  "Customers increasingly discover stores through Google and social media, not just drive-by traffic",
  "Paid media is already being used, but inefficiencies reduce its impact on store visits and sales",
  "Competitors are capturing demand in search and delivery that could be going to Stodels",
  "The opportunity is not starting from zero \u2014 it\u2019s improving what already exists to get significantly more from it",
];

export const biggestMissedOpportunities = [
  "Local search: customers looking for a nearby garden centre are finding competitors instead of your 7 stores",
  "Converting existing traffic: slow mobile speed means paid clicks aren\u2019t turning into store visits or purchases",
  "Ad structure: without a structured journey, ads aren\u2019t guiding potential customers from interest to action",
  "Organic content: common gardening questions are bringing new customers to competitor sites, not yours",
  "Existing audience: the Garden Club and loyal customer base could be engaged more effectively through digital channels",
];

export const whatGoodLooksLike = [
  "Customers find their nearest Stodels store easily on Google",
  "Ads guide customers from inspiration to education to purchase",
  "The website loads quickly and showcases products immediately on mobile",
  "Content answers common gardening questions and brings in new customers organically",
  "Digital supports and amplifies the in-store experience",
];

export const actionPlanFraming = [
  "Increase store visits from digital channels",
  "Improve the return on existing ad spend",
  "Capture more high-intent search traffic",
  "Build a stronger long-term digital presence",
];

export const whatWeWouldDoNext = [
  "Validate findings with full access to analytics and ad accounts",
  "Quantify exact performance gaps and opportunities",
  "Build a tailored growth strategy aligned to store and revenue goals",
  "Prioritise quick wins and scalable initiatives",
];
