import Seo from "../components/Seo";
import Container from "../components/ui/Container";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import CTASection from "../components/shared/CTASection";
import { industries } from "../data/industries";

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries We Serve"
        description="Reshma Weld Trading Corporation supplies welding and industrial equipment across construction, infrastructure, engineering, fabrication, manufacturing, railways, aviation, shipbuilding and more."
      />

      <PageHero
        kicker="Industries"
        title="Equipment Across a Wide Range of Industrial Sectors"
        description="Our welding, cutting and industrial equipment supports work across the following sectors."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <Reveal key={industry.name} delay={(i % 6) * 60}>
                  <div className="group flex h-full flex-col gap-4 border border-ink-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink-900/20 hover:shadow-industrial">
                    <span className="flex h-12 w-12 items-center justify-center bg-ink-950 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-ink-950">{industry.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel-500">
                        {industry.description}
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
        title="Don't see your industry listed?"
        description="We work with a wide range of sectors — tell us about your project and equipment needs."
      />
    </>
  );
}
