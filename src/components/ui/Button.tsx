import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

type Variant = "primary" | "dark" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-600 shadow-industrial",
  dark: "bg-ink-900 text-white hover:bg-ink-800 active:bg-ink-700",
  outline:
    "border border-ink-900/15 text-ink-900 hover:border-ink-900 bg-transparent",
  ghost: "text-ink-900 hover:bg-ink-900/5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  to?: undefined;
  href?: undefined;
}

interface ButtonAsLink
  extends CommonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> {
  to: string;
  href?: undefined;
}

interface ButtonAsAnchor
  extends CommonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  to?: undefined;
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export default function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const iconEl = Icon ? <Icon size={size === "lg" ? 20 : 16} strokeWidth={2.25} /> : null;

  const content = (
    <>
      {iconPosition === "left" && iconEl}
      <span>{children}</span>
      {iconPosition === "right" && iconEl}
    </>
  );

  if ("to" in props && props.to) {
    const { to, ...rest } = props as ButtonAsLink;
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
