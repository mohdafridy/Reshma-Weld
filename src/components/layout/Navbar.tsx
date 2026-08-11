import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, ChevronRight } from "lucide-react";
import { navLinks } from "../../data/nav";
import Logo from "./Logo";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-ink-900/10 bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "border-transparent bg-white"
      }`}
    >
      <div className="container-industrial flex h-[72px] items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-accent-600" : "text-ink-700 hover:text-ink-950"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-4 -bottom-[1px] h-0.5 bg-accent-500" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button to="/contact" variant="dark" size="md" icon={ChevronRight} className="hidden lg:inline-flex">
            Get a Quote
          </Button>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center text-ink-900 lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
