import type { ReactNode } from "react";

type Tone = "accent" | "dark" | "neutral" | "outline";

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

const tones: Record<Tone, string> = {
  accent: "bg-accent-100 text-accent-600",
  dark: "bg-ink-900 text-white",
  neutral: "bg-steel-100 text-ink-700",
  outline: "border border-ink-900/15 text-ink-700",
};

export default function Badge({ children, tone = "neutral", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
