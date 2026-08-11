import type { ReactNode } from "react";
import Container from "./Container";

interface PageHeroProps {
  kicker: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function PageHero({ kicker, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-ink-950 py-16 sm:py-20">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rotate-45 bg-accent-500/10" />
      <Container className="relative">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-400">
          <span className="h-px w-6 bg-accent-400" />
          {kicker}
        </span>
        <h1 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-white text-balance sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel-300 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
