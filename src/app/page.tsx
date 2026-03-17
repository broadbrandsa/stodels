import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { HealthScorecard } from "@/components/sections/HealthScorecard";
import { ExecutiveSummary } from "@/components/sections/ExecutiveSummary";
import { MetaAdsAudit } from "@/components/sections/MetaAdsAudit";
import { GoogleAdsAudit } from "@/components/sections/GoogleAdsAudit";
import { WebPerformance } from "@/components/sections/WebPerformance";
import { WastedSpend } from "@/components/sections/WastedSpend";
import { ActionPlan } from "@/components/sections/ActionPlan";
import { NextSteps } from "@/components/sections/NextSteps";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <div id="scorecard">
          <HealthScorecard />
        </div>
        <div id="summary">
          <ExecutiveSummary />
        </div>
        <div id="meta">
          <MetaAdsAudit />
        </div>
        <div id="google">
          <GoogleAdsAudit />
        </div>
        <div id="performance">
          <WebPerformance />
        </div>
        <div id="waste">
          <WastedSpend />
        </div>
        <div id="plan">
          <ActionPlan />
        </div>
        <div id="next-steps">
          <NextSteps />
        </div>
      </main>
    </>
  );
}
