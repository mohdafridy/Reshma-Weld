import { industries } from "../../data/industries";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function IndustriesServed() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Who We Serve"
          title="Industries We Serve"
          description="Equipment and support across a broad range of industrial sectors."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.name} delay={(i % 10) * 40}>
                <div className="flex h-full flex-col items-center gap-3 border border-ink-900/10 bg-white px-4 py-8 text-center transition-colors duration-300 hover:border-accent-500/40 hover:bg-paper-100">
                  <Icon size={24} strokeWidth={1.5} className="text-accent-500" />
                  <span className="text-sm font-medium text-ink-800">{industry.name}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
