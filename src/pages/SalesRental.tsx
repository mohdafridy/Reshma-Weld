import {
  ShoppingCart,
  Repeat,
  LifeBuoy,
  CheckCircle2,
  ArrowRight,
  Wrench,
  GraduationCap,
  Headphones,
  Search,
  Settings2,
} from "lucide-react";
import Seo from "../components/Seo";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import ImagePanel from "../components/ui/ImagePanel";
import CTASection from "../components/shared/CTASection";

const rentalUseCases = [
  "Short-term projects",
  "Construction sites",
  "Maintenance",
  "Fabrication",
  "Shutdown activities",
  "Temporary production requirements",
];

const serviceItems = [
  { title: "Installation", icon: Wrench },
  { title: "Operator Training", icon: GraduationCap },
  { title: "Technical Support", icon: Headphones },
  { title: "Troubleshooting", icon: Search },
  { title: "Fault Rectification", icon: Settings2 },
  { title: "After-Sales Support", icon: LifeBuoy },
];

export default function SalesRental() {
  return (
    <>
      <Seo
        title="Sales & Rental"
        description="Reshma Weld Associates supplies welding and industrial equipment for sale and offers selected equipment on rental for short-term projects, construction sites and maintenance requirements."
      />

      <PageHero
        kicker="Sales & Rental"
        title="Equipment When You Need It — Purchase or Hire"
        description="Whether you need equipment for the long term or a short-term project, we offer both sales and rental options backed by full service support."
      />

      {/* Sales */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <span className="flex h-12 w-12 items-center justify-center bg-accent-100 text-accent-600">
                <ShoppingCart size={22} strokeWidth={1.75} />
              </span>
              <h2 className="mt-6 text-3xl font-semibold text-ink-950 sm:text-4xl">Sales</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-steel-600">
                We supply welding machines, cutting equipment, consumables, accessories and
                industrial equipment to customers across India.
              </p>
              <Button to="/products" variant="dark" size="lg" icon={ArrowRight} className="mt-7">
                Browse Products
              </Button>
            </Reveal>
            <Reveal delay={100}>
              <ImagePanel icon={ShoppingCart} label="Equipment Sales" tone="dark" className="aspect-[4/3] w-full" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Rental */}
      <section className="border-y border-ink-900/10 bg-paper-100 py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="lg:order-2">
              <span className="flex h-12 w-12 items-center justify-center bg-accent-100 text-accent-600">
                <Repeat size={22} strokeWidth={1.75} />
              </span>
              <h2 className="mt-6 text-3xl font-semibold text-ink-950 sm:text-4xl">Rental</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-steel-600">
                Selected equipment is available on hire for:
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {rentalUseCases.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-ink-800">
                    <CheckCircle2 size={16} className="shrink-0 text-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button to="/contact?type=rental" variant="primary" size="lg" icon={ArrowRight} className="mt-7">
                Rental Enquiry
              </Button>
            </Reveal>
            <Reveal delay={100} className="lg:order-1">
              <ImagePanel icon={Repeat} label="Equipment Rental" tone="dark" className="aspect-[4/3] w-full" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Service */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Service"
            title="Full Support Across the Equipment Lifecycle"
            description="From installation to after-sales support, our team is available to keep your equipment operating reliably."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="flex items-center gap-4 border border-ink-900/10 bg-paper-50 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-ink-950 text-accent-400">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-semibold text-ink-950">{item.title}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        title="Need equipment for a project, or on a longer-term basis?"
        description="Reach out with your requirement — sales or rental — and our team will help you decide what fits best."
      />
    </>
  );
}
