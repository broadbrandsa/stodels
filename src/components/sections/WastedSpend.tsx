"use client";

import { wastedSpend } from "@/content/audit-data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let frame: number;
    const duration = 1500;
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isVisible, value]);

  return (
    <span ref={ref}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}

export function WastedSpend() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 botanical-line w-48" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="The Cost of Slow"
          title="Speed is money"
          description="When 60% of your paid clicks are mobile and your site takes 6.8s to load, the math is brutal."
        />

        {/* Main waste figure */}
        <AnimateOnScroll className="mb-16">
          <div className="relative text-center">
            <div className="absolute inset-0 rounded-2xl bg-score-critical/5 blur-xl" />
            <div className="relative rounded-2xl border border-score-critical/20 bg-card/50 p-8 md:p-12">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-score-critical/70 mb-3">
                Estimated Annual Waste
              </p>
              <p className="font-serif text-5xl md:text-7xl text-score-critical">
                <AnimatedNumber value={180000} prefix="R" />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Up to R180,000/year lost to mobile bounce from slow page speed
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Breakdown cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              label: "Mobile Traffic",
              value: wastedSpend.mobileTrafficShare,
              detail: "of ad clicks are mobile",
            },
            {
              label: "Bounce Rate",
              value: wastedSpend.bounceFromSpeed,
              detail: "bounce due to slow load",
            },
            {
              label: "Wasted Clicks",
              value: wastedSpend.wastedClickPercent,
              detail: "of paid clicks are wasted",
            },
            {
              label: "Monthly Loss",
              value: wastedSpend.monthlyWaste,
              detail: "on a R50K/month budget",
            },
          ].map((card, i) => (
            <AnimateOnScroll key={card.label} delay={i * 80}>
              <div className="rounded-xl border border-border/60 bg-card/30 p-5 text-center">
                <p className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                  {card.label}
                </p>
                <p className="text-2xl font-serif text-copper">{card.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{card.detail}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Key takeaway */}
        <AnimateOnScroll delay={400} className="mt-12">
          <div className="rounded-xl border border-copper/20 bg-copper/[0.04] p-6 text-center">
            <p className="font-serif text-lg md:text-xl italic text-copper">
              &ldquo;Before spending another rand on increasing ad budgets, fix the mobile page speed.&rdquo;
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
