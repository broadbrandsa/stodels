"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface TooltipProps {
  term: string;
  definition: string;
  children?: React.ReactNode;
}

export function Tooltip({ term, definition, children }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<"above" | "below">("above");
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  const updatePosition = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition(rect.top < 200 ? "below" : "above");
    }
  }, []);

  useEffect(() => {
    if (open) updatePosition();
  }, [open, updatePosition]);

  return (
    <span className="relative inline">
      <span
        ref={triggerRef}
        className="border-b border-dotted border-muted-foreground/50 cursor-help transition-colors hover:border-copper hover:text-copper"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        role="button"
        tabIndex={0}
        aria-describedby={open ? `tooltip-${term}` : undefined}
      >
        {children ?? term}
      </span>
      {open && (
        <span
          ref={tooltipRef}
          id={`tooltip-${term}`}
          role="tooltip"
          className={`absolute z-[100] left-1/2 -translate-x-1/2 w-64 sm:w-72 px-3 py-2.5 rounded-lg border border-copper/20 bg-card text-xs text-muted-foreground leading-relaxed shadow-lg ${
            position === "above" ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          <span className="block font-semibold text-copper mb-1">{term}</span>
          {definition}
        </span>
      )}
    </span>
  );
}
