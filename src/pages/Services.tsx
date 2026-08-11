import Seo from "../components/Seo";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import CTASection from "../components/shared/CTASection";
import { coreServices } from "../data/services";

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Reshma Weld Associates provides equipment sales, rental, installation, operational training, technical support, troubleshooting and after-sales service."
      />

      <PageHero
        kicker="Services"
        title="Support Beyond the Sale"
        description="Equipment is only as good as the support behind it. Our services are built to keep your operations running with minimal downtime."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Core Services"
            title="What We Offer"
            description="From first enquiry to long-term operation, our team supports every stage of the equipment lifecycle."
          />

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, i) => {
              const Icon = service.icon;
              // 7 services leave a lone item in the final row at both the
              // sm (2-col) and lg (3-col) breakpoints — span it full-width.
              const isLast = i === coreServices.length - 1;
              return (
                <Reveal
                  key={service.title}
                  delay={(i % 3) * 70}
                  className={isLast ? "sm:col-span-2 lg:col-span-3" : ""}
                >
                  <div
                    className={`flex h-full gap-5 bg-white p-8 ${
                      isLast ? "flex-col sm:flex-row sm:items-center" : "flex-col"
                    }`}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent-100 text-accent-600">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-ink-950">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel-500">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        title="Need installation, training or technical support?"
        description="Let us know your equipment and requirement — our team will guide you through the right service."
      />
    </>
  );
}
