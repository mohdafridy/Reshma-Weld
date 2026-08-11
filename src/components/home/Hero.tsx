import { ArrowRight, Package, ShieldCheck, Flame } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { siteConfig } from "../../config/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rotate-45 bg-accent-500/10" />
      <div className="absolute -bottom-40 left-[-10%] h-[380px] w-[380px] rotate-12 bg-accent-500/[0.06]" />

      <Container className="relative grid grid-cols-1 items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-steel-300">
            <Flame size={14} className="text-accent-400" />
            Established {siteConfig.established} &middot; Serving {siteConfig.market}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-white text-balance sm:text-5xl lg:text-[3.4rem]">
            Complete Welding &amp; Industrial Equipment Solutions
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-steel-300 sm:text-lg">
            Since {siteConfig.established}, Reshma Weld Associates has been supplying welding
            machines, cutting equipment, welding consumables and industrial equipment, backed by
            installation, training, rental and technical support.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
              Enquire Now
            </Button>
            <Button to="/products" variant="outline" size="lg" className="border-white/25 text-white hover:border-white">
              Explore Products
            </Button>
            <Button to="/contact?type=rental" variant="ghost" size="lg" className="text-white hover:bg-white/10">
              Rental Enquiry
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-ink-900 sm:aspect-[5/4] lg:aspect-[4/5]">
            <div className="absolute inset-0 bg-grid-pattern" />
            <div className="absolute -right-8 -top-8 h-32 w-32 rotate-45 bg-accent-500/20" />
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-4">
              <Flame size={72} strokeWidth={1} className="text-accent-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-400">
                Welding &amp; Industrial Equipment
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 border border-white/10 bg-ink-950/80 px-4 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-medium text-steel-300">
                <Package size={15} className="text-accent-400" />
                Sales &amp; Rental
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-steel-300">
                <ShieldCheck size={15} className="text-accent-400" />
                Technical Support
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
