import type { LucideIcon } from "lucide-react";

interface ImagePanelProps {
  icon: LucideIcon;
  label?: string;
  tone?: "dark" | "light";
  className?: string;
  iconClassName?: string;
}

/**
 * Elegant graphic placeholder standing in for product/equipment photography.
 * Swap for real photography by replacing this component's usage with an
 * <img> element once assets are available.
 */
export default function ImagePanel({
  icon: Icon,
  label,
  tone = "dark",
  className = "",
  iconClassName = "",
}: ImagePanelProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={`relative overflow-hidden ${isDark ? "bg-ink-900" : "bg-steel-100"} ${className}`}
    >
      <div className={`absolute inset-0 ${isDark ? "bg-grid-pattern" : "bg-grid-pattern-dark"}`} />
      <div
        className={`absolute -right-10 -top-10 h-40 w-40 rotate-45 ${
          isDark ? "bg-accent-500/10" : "bg-accent-500/15"
        }`}
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 p-8">
        <Icon
          size={56}
          strokeWidth={1.25}
          className={`${isDark ? "text-steel-300" : "text-steel-500"} ${iconClassName}`}
        />
        {label && (
          <span
            className={`text-center text-xs font-semibold uppercase tracking-[0.14em] ${
              isDark ? "text-steel-400" : "text-steel-500"
            }`}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
