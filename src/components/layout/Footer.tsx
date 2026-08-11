import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, Link2 } from "lucide-react";
import { siteConfig } from "../../config/site";
import { navLinks } from "../../data/nav";
import Logo from "./Logo";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Footer() {
  const year = new Date().getFullYear();
  const activeSocials = Object.entries(siteConfig.social).filter(([, url]) => url);

  return (
    <footer className="border-t border-white/10 bg-ink-950 text-steel-300">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-steel-400">
              Welding Machines | Cutting Equipment | Welding Consumables | Industrial Equipment |
              Sales | Rental | Service
            </p>
            <p className="mt-4 text-sm font-medium text-steel-300">
              Established {siteConfig.established}
            </p>
            {activeSocials.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                {activeSocials.map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="flex h-9 w-9 items-center justify-center border border-white/10 text-steel-300 transition-colors hover:border-accent-500 hover:text-accent-400"
                  >
                    <Link2 size={16} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks
                .filter((l) => l.path !== "/")
                .map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-steel-400 transition-colors hover:text-accent-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Company
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <Link to="/about" className="text-sm text-steel-400 transition-colors hover:text-accent-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-sm text-steel-400 transition-colors hover:text-accent-400">
                  Quality
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-sm text-steel-400 transition-colors hover:text-accent-400">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link to="/sales-rental" className="text-sm text-steel-400 transition-colors hover:text-accent-400">
                  Sales &amp; Rental
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Get In Touch
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-steel-400">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent-400" />
                <span>{siteConfig.contact.phonePrimary}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent-400" />
                <span>{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent-400" />
                <span>Serving customers across India</span>
              </li>
            </ul>
            <Button to="/contact" variant="primary" size="md" icon={ArrowUpRight} className="mt-6">
              Send an Enquiry
            </Button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.companyName}. All rights reserved.
          </p>
          <p>Welding &amp; Industrial Equipment — Sales, Rental &amp; Service across India.</p>
        </div>
      </Container>
    </footer>
  );
}
