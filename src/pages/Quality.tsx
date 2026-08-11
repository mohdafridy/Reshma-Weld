import { ChevronRight } from "lucide-react";
import Seo from "../components/Seo";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import CTASection from "../components/shared/CTASection";
import { qualityParameters, qualityProcess } from "../data/quality";

export default function Quality() {
  return (
    <>
      <Seo
        title="Quality"
        description="Reshma Weld Associates sources equipment from trusted vendors, evaluated by quality controllers, following a structured procurement, inspection, storage and delivery process."
      />

      <PageHero
        kicker="Quality"
        title="Quality Is the Foundation of Trust"
        description="Products are sourced from trusted vendors and evaluated by quality controllers before they reach our customers."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="What We Look For"
            title="Quality Parameters"
            description="Equipment is assessed against practical, operational criteria that matter on-site and in the workshop."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {qualityParameters.map((param, i) => {
              const Icon = param.icon;
              return (
                <Reveal key={param.title} delay={(i % 3) * 70}>
                  <div className="flex items-start gap-4 border border-ink-900/10 bg-paper-50 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent-100 text-accent-600">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink-950">{param.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-steel-500">
                        {param.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-ink-900/10 bg-ink-950 py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Our Process"
            title="From Procurement to Delivery"
            description="A structured process ensures every product meets our standard before it reaches you."
            tone="dark"
          />

          <div className="mt-14 flex flex-col gap-0 lg:flex-row lg:items-stretch lg:gap-0">
            {qualityProcess.map((step, i) => (
              <Reveal key={step.step} delay={i * 90} className="flex flex-1 items-stretch">
                <div className="flex flex-1 flex-col gap-4 border border-white/10 bg-ink-900 p-7">
                  <span className="font-display text-3xl font-semibold text-accent-500">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-steel-400">{step.description}</p>
                </div>
                {i < qualityProcess.length - 1 && (
                  <div className="hidden w-10 shrink-0 items-center justify-center lg:flex">
                    <ChevronRight size={22} className="text-accent-500" />
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Have questions about a specific product's quality or specifications?"
        description="Contact us for specifications and availability — our team is happy to help."
      />
    </>
  );
}
