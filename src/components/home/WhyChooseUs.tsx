import {
  CalendarCheck,
  LayoutGrid,
  BadgeCheck,
  Wrench,
  Repeat,
  Users,
  GraduationCap,
  LifeBuoy,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const reasons = [
  { title: "Established Since 2006", description: "Two decades of experience supplying welding and industrial equipment.", icon: CalendarCheck },
  { title: "Wide Product Range", description: "Welding machines, cutting equipment, consumables and accessories under one roof.", icon: LayoutGrid },
  { title: "Quality-Focused Approach", description: "Products evaluated by quality controllers before dispatch.", icon: BadgeCheck },
  { title: "Technical Expertise", description: "Guidance on equipment selection and application from an experienced team.", icon: Wrench },
  { title: "Rental Solutions", description: "Flexible hire options for short-term and project-based requirements.", icon: Repeat },
  { title: "Customer-Centric Service", description: "Support built around the needs of each customer and project.", icon: Users },
  { title: "Operational Training", description: "Guidance for operators on safe and efficient equipment use.", icon: GraduationCap },
  { title: "After-Sales Support", description: "Ongoing service support to keep equipment running reliably.", icon: LifeBuoy },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Why Choose Us"
          title="Built on Experience, Backed by Support"
          description="What sets Reshma Weld Associates apart when it comes to equipping your projects."
        />

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={(i % 4) * 70}>
                <div className="flex flex-col gap-3">
                  <Icon size={26} strokeWidth={1.5} className="text-accent-500" />
                  <h3 className="text-base font-semibold text-ink-950">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-steel-500">{reason.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
