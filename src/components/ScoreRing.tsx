"use client";

import { useEffect, useRef, useState } from "react";

interface ScoreRingProps {
  score: number;
  max: number;
  size?: number;
  strokeWidth?: number;
  label: string;
  status: "excellent" | "good" | "needs-work" | "poor" | "critical";
}

const statusColors: Record<string, string> = {
  excellent: "#4ADE80",
  good: "#86EFAC",
  "needs-work": "#FCD34D",
  poor: "#FB923C",
  critical: "#F87171",
};

export function ScoreRing({
  score,
  max,
  size = 120,
  strokeWidth = 6,
  label,
  status,
}: ScoreRingProps) {
  const ref = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayScore, setDisplayScore] = useState(0);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = score / max;
  const dashOffset = circumference * (1 - percentage);
  const color = statusColors[status];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let frame: number;
    const duration = 1200;
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayScore(Math.round(eased * score));
      if (progress < 1) frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isVisible, score]);

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="-rotate-90"
          style={{ filter: `drop-shadow(0 0 8px ${color}33)` }}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-border/50"
          />
          <circle
            ref={ref}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? dashOffset : circumference}
            style={{
              transition: "stroke-dashoffset 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-sans text-2xl" style={{ color }}>
            {displayScore}
          </span>
          <span className="text-[11px] text-muted-foreground">/{max}</span>
        </div>
      </div>
      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </span>
    </div>
  );
}
