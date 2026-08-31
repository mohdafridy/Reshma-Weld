import { NavLink } from "react-router-dom";
import { X, ArrowUpRight, Phone } from "lucide-react";
import { navLinks } from "../../data/nav";
import { siteConfig } from "../../config/site";
import Button from "../ui/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-ink-950/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        id="mobile-menu"
        className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-ink-950 transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-400">
            Menu
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:bg-white/10"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-6">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center justify-between border-b border-white/10 py-4 text-lg font-medium transition-colors ${
                  isActive ? "text-accent-400" : "text-white hover:text-accent-400"
                }`
              }
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link.label}
              <ArrowUpRight size={18} className="opacity-50" />
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-white/10 p-6">
          {siteConfig.contact.phonePrimary && (
            <a
              href={`tel:${siteConfig.contact.phonePrimary.replace(/\s/g, "")}`}
              className="mb-4 flex items-center gap-2 text-sm font-medium text-steel-300"
            >
              <Phone size={16} className="text-accent-400" />
              {siteConfig.contact.phonePrimary}
            </a>
          )}
          <Button to="/contact" variant="primary" size="lg" className="w-full" onClick={onClose}>
            Get a Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
