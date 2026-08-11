import {
  History,
  Users,
  Network,
  BadgeCheck,
  Headphones,
  Wrench,
  GraduationCap,
  LifeBuoy,
  Award,
} from "lucide-react";
import Seo from "../components/Seo";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ImagePanel from "../components/ui/ImagePanel";
import { siteConfig } from "../config/site";

const pillars = [
  { title: "Experience", description: `Two decades in the welding equipment industry since ${siteConfig.established}.`, icon: History },
  { title: "Customer-Centric Approach", description: "Solutions built around each customer's project and budget.", icon: Users },
  { title: "Vendor Network", description: "Relationships with trusted vendors across welding and industrial equipment.", icon: Network },
  { title: "Quality Focus", description: "Products evaluated by quality controllers before they reach customers.", icon: BadgeCheck },
  { title: "Technical Support", description: "Guidance on equipment selection, application and operating parameters.", icon: Headphones },
  { title: "Installation", description: "On-site installation support to get equipment operational quickly.", icon: Wrench },
  { title: "Training", description: "Operational training so teams can use equipment safely and effectively.", icon: GraduationCap },
  { title: "After-Sales Service", description: "Ongoing support to keep equipment running through its working life.", icon: LifeBuoy },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Reshma Weld Associates, established in 2006, supplies welding machines, welding inverters, welding equipment, accessories and industrial products to customers across industries."
      />

      <PageHero
        kicker="About Us"
        title="Two Decades of Welding & Industrial Equipment Expertise"
        description={`Reshma Weld Associates, established in ${siteConfig.established}, has been supplying welding machines, welding inverters, welding equipment, accessories and industrial products to customers across industries.`}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="What Defines Us"
            title="Experience, Backed by Process"
            description="Our approach combines long-standing industry experience with a structured, quality-focused process."
          />

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={(i % 4) * 70}>
                  <div className="flex flex-col gap-3">
                    <Icon size={26} strokeWidth={1.5} className="text-accent-500" />
                    <h3 className="text-base font-semibold text-ink-950">{pillar.title}</h3>
                    <p className="text-sm leading-relaxed text-steel-500">{pillar.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-900/10 bg-paper-100 py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <ImagePanel icon={Users} label="Company Mentor" tone="dark" className="aspect-[4/5] w-full" />
            </Reveal>
            <Reveal delay={100}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">
                <span className="h-px w-6 bg-accent-500" />
                Mentor
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink-950 sm:text-4xl">
                Mr. Mohamed Afzal
              </h2>
              <p className="mt-5 text-base leading-relaxed text-steel-600">
                With extensive experience in the welding equipment industry, his knowledge and
                technical guidance have contributed significantly to the development of the
                company and its customer relationships.
              </p>

              <div className="mt-6 flex items-start gap-3 border border-ink-900/10 bg-white p-5">
                <Award size={22} className="mt-0.5 shrink-0 text-accent-500" />
                <p className="text-sm leading-relaxed text-steel-600">
                  Recognized with the <span className="font-semibold text-ink-950">Best Stall Award</span>{" "}
                  for introducing a portable inverter-based welding machine.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
