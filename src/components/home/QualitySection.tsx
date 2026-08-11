import { ArrowRight } from "lucide-react";
import { qualityParameters } from "../../data/quality";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

export default function QualitySection() {
  return (
    <section className="bg-ink-950 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker="Quality"
            title="Quality Is the Foundation of Trust"
            description="Products are sourced from trusted vendors and evaluated by quality controllers before delivery."
            tone="dark"
          />
          <Button to="/quality" variant="outline" size="md" icon={ArrowRight} className="shrink-0 border-white/25 text-white hover:border-white">
            Our Quality Process
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {qualityParameters.map((param, i) => {
            const Icon = param.icon;
            return (
              <Reveal key={param.title} delay={i * 60}>
                <div className="flex flex-col items-center gap-3 text-center">
                  <span className="flex h-14 w-14 items-center justify-center border border-white/10 bg-white/5 text-accent-400">
                    <Icon size={24} strokeWidth={1.5} />
                  </span>
                  <span className="text-xs font-medium leading-snug text-steel-300">
                    {param.title}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
