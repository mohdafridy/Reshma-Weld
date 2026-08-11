import { ShoppingCart, Repeat, LifeBuoy, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

const pillars = [
  {
    icon: ShoppingCart,
    title: "Sales",
    description:
      "Reliable welding and industrial equipment for your project and production requirements.",
    cta: "View Products",
    to: "/products",
  },
  {
    icon: Repeat,
    title: "Rental",
    description:
      "Flexible equipment rental solutions for short-term and project-based requirements.",
    cta: "Rental Enquiry",
    to: "/contact?type=rental",
  },
  {
    icon: LifeBuoy,
    title: "Service & Support",
    description:
      "Installation, operational training, troubleshooting and after-sales support.",
    cta: "Our Services",
    to: "/services",
  },
];

export default function SalesRentalService() {
  return (
    <section className="bg-ink-950 py-20 sm:py-24">
      <Container>
        <SectionHeading
          kicker="How We Work"
          title="Sales, Rental & Service — Under One Roof"
          tone="dark"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={i * 80}>
                <div className="flex h-full flex-col border border-white/10 bg-ink-900 p-8 transition-colors duration-300 hover:border-accent-500/50">
                  <span className="flex h-12 w-12 items-center justify-center bg-white/5 text-accent-400">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-400">
                    {pillar.description}
                  </p>
                  <Button
                    to={pillar.to}
                    variant="ghost"
                    size="md"
                    icon={ArrowRight}
                    className="mt-6 self-start px-0 text-accent-400 hover:bg-transparent hover:text-accent-300"
                  >
                    {pillar.cta}
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
