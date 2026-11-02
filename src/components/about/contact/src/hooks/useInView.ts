import { useEffect } from "react";

/**
 * Global observer: any element carrying [data-rv] gets `.in`
 * when it enters the viewport — powering the staggered,
 * expo-eased reveal orchestra below the fold.
 */
export function useRevealObserver(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-rv]:not(.in)")
    );
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);
}
