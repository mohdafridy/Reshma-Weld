import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function ProductCategoryGrid() {
  return (
    <section className="bg-paper-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          kicker="What We Supply"
          title="Product Categories"
          description="A wide range of welding, cutting and industrial equipment across seven core categories."
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.slug} delay={i * 60}>
                <Link
                  to={`/products?category=${category.slug}`}
                  className="group flex h-full flex-col justify-between gap-6 bg-white p-7 transition-colors duration-300 hover:bg-ink-950"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center bg-accent-100 text-accent-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-steel-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-accent-400"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-950 transition-colors duration-300 group-hover:text-white">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-500 transition-colors duration-300 group-hover:text-steel-300">
                      {category.shortDescription}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
