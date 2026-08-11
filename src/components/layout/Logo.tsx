import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { siteConfig } from "../../config/site";

interface LogoProps {
  tone?: "dark" | "light";
}

export default function Logo({ tone = "dark" }: LogoProps) {
  const textColor = tone === "dark" ? "text-ink-950" : "text-white";
  const subColor = tone === "dark" ? "text-steel-500" : "text-steel-300";

  return (
    <Link to="/" className="group flex items-center gap-3" aria-label={`${siteConfig.companyName} — Home`}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent-500 text-white transition-transform duration-200 group-hover:scale-105">
        <Zap size={20} strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[15px] font-bold uppercase tracking-wide ${textColor}`}>
          Reshma Weld
        </span>
        <span className={`text-[11px] font-medium uppercase tracking-[0.16em] ${subColor}`}>
          Associates
        </span>
      </span>
    </Link>
  );
}
