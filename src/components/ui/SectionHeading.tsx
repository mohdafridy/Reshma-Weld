interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = tone === "dark" ? "text-white" : "text-ink-950";
  const descColor = tone === "dark" ? "text-steel-300" : "text-steel-500";

  return (
    <div className={`flex flex-col gap-4 ${alignClasses} ${className}`}>
      {kicker && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
          <span className="h-px w-6 bg-accent-500" />
          {kicker}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-semibold leading-[1.1] text-balance ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base sm:text-lg leading-relaxed ${descColor}`}>{description}</p>
      )}
    </div>
  );
}
