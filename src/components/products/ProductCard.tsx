import { ArrowUpRight } from "lucide-react";
import type { Product } from "../../types";
import { getCategoryBySlug } from "../../data/categories";
import Badge from "../ui/Badge";
import ImagePanel from "../ui/ImagePanel";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const category = getCategoryBySlug(product.categorySlug);
  if (!category) return null;
  const Icon = category.icon;

  return (
    <button
      onClick={() => onSelect(product)}
      className="group flex h-full flex-col overflow-hidden border border-ink-900/10 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-ink-900/20 hover:shadow-industrial focus-visible:-translate-y-1"
    >
      <ImagePanel icon={Icon} tone="dark" className="aspect-[4/3] w-full" />

      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-600">
          {category.name}
        </span>
        <h3 className="mt-1.5 text-base font-semibold leading-snug text-ink-950">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-steel-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3 pt-3">
          <div className="flex flex-wrap gap-1.5">
            {product.availability.map((a) => (
              <Badge key={a} tone={a === "Rental" ? "accent" : "neutral"}>
                {a}
              </Badge>
            ))}
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold text-ink-700 transition-colors group-hover:text-accent-600">
            Details
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </button>
  );
}
