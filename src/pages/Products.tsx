import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PackageSearch, ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import ProductFilter from "../components/products/ProductFilter";
import ProductCard from "../components/products/ProductCard";
import ProductModal from "../components/products/ProductModal";
import { products } from "../data/products";
import type { Product } from "../types";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(
    searchParams.get("category"),
  );
  const [selected, setSelected] = useState<Product | null>(null);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) setActiveCategory(categoryParam);
  }, [searchParams]);

  function handleCategoryChange(slug: string | null) {
    setActiveCategory(slug);
    setSearchParams(slug ? { category: slug } : {});
  }

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = !activeCategory || product.categorySlug === activeCategory;
      const matchesQuery =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [search, activeCategory]);

  return (
    <>
      <Seo
        title="Products"
        description="Browse welding machines, cutting equipment, welding consumables, accessories, gas welding equipment, safety equipment and industrial workshop equipment supplied by Reshma Weld Trading Corporation."
      />

      <section className="border-b border-ink-900/10 bg-ink-950 py-16 sm:py-20">
        <Container>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-400">
            <span className="h-px w-6 bg-accent-400" />
            Product Catalogue
          </span>
          <h1 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Welding &amp; Industrial Equipment Range
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel-300">
            Search or filter by category to find the equipment you need. Every product can be
            purchased or enquired about directly — select items are also available on rental.
          </p>
        </Container>
      </section>

      <section className="bg-paper-50 py-14 sm:py-16">
        <Container>
          <ProductFilter
            search={search}
            onSearchChange={setSearch}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            resultCount={filtered.length}
          />

          {filtered.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} onSelect={setSelected} />
              ))}
            </div>
          ) : (
            <div className="mt-8 flex flex-col items-center gap-4 border border-dashed border-ink-900/15 bg-white px-6 py-20 text-center">
              <PackageSearch size={40} strokeWidth={1.25} className="text-steel-400" />
              <h3 className="text-lg font-semibold text-ink-950">No products found</h3>
              <p className="max-w-sm text-sm text-steel-500">
                Try a different search term or category. If you can&rsquo;t find what you&rsquo;re
                looking for, get in touch — we can help.
              </p>
              <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                Ask Our Team
              </Button>
            </div>
          )}
        </Container>
      </section>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
