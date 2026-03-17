# Project Structure

## Folder Layout

```
stodels-proposal/
├── src/
│   ├── app/                    # Next.js App Router pages and layout
│   ├── components/
│   │   ├── sections/           # Section components (one per audit area)
│   │   ├── ui/                 # shadcn UI primitives (Button, Card, etc.)
│   │   ├── Navigation.tsx      # Site navigation
│   │   ├── AnimateOnScroll.tsx  # Scroll-triggered animations
│   │   ├── ScoreRing.tsx       # Circular score visualisation
│   │   └── SectionHeader.tsx   # Consistent section headings
│   └── content/
│       └── audit-data.ts       # All audit data as TypeScript modules
├── docs/                       # Project documentation
├── public/
│   └── images/                 # Static assets (logos, screenshots)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Section Composition

Each section in `src/components/sections/` is a self-contained component. Sections import their data from `src/content/audit-data.ts` and render independently. This keeps presentation and data cleanly separated.

## Content Management

All audit findings, scores, recommendations, and copy live in `src/content/audit-data.ts`. To update any audit content, edit that single file -- no changes to components are needed for content-only updates.
