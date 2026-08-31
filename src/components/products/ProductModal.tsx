import { useEffect, useRef } from "react";
import { X, ArrowUpRight, Info } from "lucide-react";
import type { Product } from "../../types";
import { getCategoryBySlug } from "../../data/categories";
import Badge from "../ui/Badge";
import ImagePanel from "../ui/ImagePanel";
import Button from "../ui/Button";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!product) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  if (!product) return null;
  const category = getCategoryBySlug(product.categorySlug);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-ink-950/70" onClick={onClose} />

      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden bg-white shadow-2xl sm:flex-row">
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close product details"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center bg-white/90 text-ink-900 shadow-industrial transition-colors hover:bg-white"
        >
          <X size={18} />
        </button>

        <ImagePanel
          icon={category?.icon ?? Info}
          tone="dark"
          className="h-56 w-full shrink-0 sm:h-auto sm:w-2/5"
        />

        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {category && (
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">
              {category.name}
            </span>
          )}
          <h2 id="product-modal-title" className="mt-2 text-2xl font-semibold text-ink-950">
            {product.name}
          </h2>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.availability.map((a) => (
              <Badge key={a} tone={a === "Rental" ? "accent" : "neutral"}>
                Available for {a}
              </Badge>
            ))}
          </div>

          <p className="mt-5 text-sm leading-relaxed text-steel-600">{product.description}</p>

          <div className="mt-5 flex items-start gap-2.5 border border-ink-900/10 bg-paper-100 p-4 text-sm text-steel-600">
            <Info size={16} className="mt-0.5 shrink-0 text-accent-500" />
            <span>{product.specNote}</span>
          </div>

          <Button
            to={`/contact?product=${encodeURIComponent(product.name)}`}
            variant="primary"
            size="lg"
            icon={ArrowUpRight}
            className="mt-6 w-full sm:w-auto"
          >
            Enquire About This Product
          </Button>
        </div>
      </div>
    </div>
  );
}
