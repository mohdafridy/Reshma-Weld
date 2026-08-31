import { clients } from "../../data/clients";
import Container from "../ui/Container";

export default function ClientLogos() {
  return (
    <section className="border-y border-ink-900/10 bg-paper-100 py-14">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-steel-500">
          Trusted By Organizations Including
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {clients.map((client) => (
            <span
              key={client}
              className="font-display text-lg font-semibold tracking-tight text-ink-600 opacity-80 transition-opacity hover:opacity-100 sm:text-xl"
            >
              {client}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
