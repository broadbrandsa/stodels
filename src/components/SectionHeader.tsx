import { AnimateOnScroll } from "./AnimateOnScroll";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <AnimateOnScroll className="mb-12 md:mb-16">
      <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-copper">
        {eyebrow}
      </p>
      <h2 className="font-sans text-3xl md:text-5xl leading-[1.1] text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-6 botanical-line w-24" />
    </AnimateOnScroll>
  );
}
