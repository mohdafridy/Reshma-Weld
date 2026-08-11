import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";
import logoMark from "../../assets/brand/logo-mark.png";

interface LogoProps {
  tone?: "dark" | "light";
}

export default function Logo({ tone = "dark" }: LogoProps) {
  const textColor = tone === "dark" ? "text-ink-950" : "text-white";
  const subColor = tone === "dark" ? "text-steel-500" : "text-steel-300";

  return (
    <Link to="/" className="group flex items-center gap-3" aria-label={`${siteConfig.companyName} — Home`}>
      <img
        src={logoMark}
        alt=""
        className={`h-10 w-auto shrink-0 transition-transform duration-200 group-hover:scale-105 ${
          tone === "light" ? "brightness-0 invert" : ""
        }`}
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-base font-bold tracking-wide ${textColor}`}>RWTC</span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.1em] ${subColor}`}>
          Reshma Weld Trading Corp.
        </span>
      </span>
    </Link>
  );
}
