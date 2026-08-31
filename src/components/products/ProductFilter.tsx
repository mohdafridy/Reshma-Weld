import { Search, LayoutGrid } from "lucide-react";
import { categories } from "../../data/categories";

interface ProductFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeCategory: string | null;
  onCategoryChange: (slug: string | null) => void;
  resultCount: number;
}

export default function ProductFilter({
  search,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  resultCount,
}: ProductFilterProps) {
  return (
    <div className="border border-ink-900/10 bg-white p-5 sm:p-6">
      <div className="relative">
        <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-steel-400" />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products — e.g. plasma cutting, MIG wire, drill machine"
          aria-label="Search products"
          className="w-full border border-ink-900/15 bg-paper-50 py-3 pl-11 pr-4 text-sm text-ink-900 placeholder:text-steel-400 transition-colors focus:border-accent-500 focus:outline-none"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange(null)}
          className={`inline-flex items-center gap-1.5 border px-3.5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
            activeCategory === null
              ? "border-ink-950 bg-ink-950 text-white"
              : "border-ink-900/15 text-ink-700 hover:border-ink-900/40"
          }`}
        >
          <LayoutGrid size={14} />
          All Categories
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => onCategoryChange(category.slug)}
            className={`border px-3.5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
              activeCategory === category.slug
                ? "border-accent-500 bg-accent-500 text-white"
                : "border-ink-900/15 text-ink-700 hover:border-ink-900/40"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <p className="mt-4 text-xs font-medium text-steel-500">
        Showing {resultCount} {resultCount === 1 ? "product" : "products"}
      </p>
    </div>
  );
}
