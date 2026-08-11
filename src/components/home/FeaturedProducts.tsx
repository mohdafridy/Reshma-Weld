import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { products, featuredProductIds } from "../../data/products";
import type { Product } from "../../types";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import ProductCard from "../products/ProductCard";
import ProductModal from "../products/ProductModal";

export default function FeaturedProducts() {
  const [selected, setSelected] = useState<Product | null>(null);
  const featured = featuredProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  return (
    <section className="bg-paper-50 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker="Featured Equipment"
            title="Popular Products"
            description="A selection of frequently requested equipment across our range."
          />
          <Button to="/products" variant="outline" size="md" icon={ArrowRight} className="shrink-0">
            View All Products
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 70}>
              <ProductCard product={product} onSelect={setSelected} />
            </Reveal>
          ))}
        </div>
      </Container>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
