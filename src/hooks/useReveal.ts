import { useEffect, useRef, useState } from "react";

/**
 * Adds the `is-visible` class once the element enters the viewport,
 * triggering the `.reveal` CSS animation defined in index.css.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Fail safe: never leave content permanently hidden if IntersectionObserver
    // is unsupported, or its callback is delayed/races with rendering.
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const fallback = window.setTimeout(() => setIsVisible(true), 1200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          window.clearTimeout(fallback);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold]);

  return { ref, isVisible };
}
