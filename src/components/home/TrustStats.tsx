import { trustStats } from "../../data/trustStats";
import Container from "../ui/Container";

export default function TrustStats() {
  return (
    <section className="border-b border-ink-900/10 bg-white">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-y divide-ink-900/10 sm:grid-cols-4 sm:divide-y-0">
          {trustStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center gap-2.5 px-4 py-8 text-center">
                <Icon size={22} strokeWidth={1.5} className="text-accent-500" />
                <span className="text-lg font-semibold text-ink-950">{stat.value}</span>
                <span className="text-xs font-medium uppercase tracking-wide text-steel-500">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
