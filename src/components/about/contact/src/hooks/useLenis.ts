import { useEffect, useRef } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
    __scrollVel?: number;
  }
}

/**
 * Butter-smooth inertia scrolling (olhauzhykova-style physics).
 * Exposes the instance + live scroll velocity on window for
 * marquee skew + parallax consumers.
 */
export function useLenis(enabled: boolean) {
  const started = useRef(false);

  useEffect(() => {
    if (!enabled || started.current) return;
    started.current = true;

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });
    window.__lenis = lenis;

    let raf = 0;
    let last = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      const v = lenis.velocity;
      // smoothed velocity for skew effects
      window.__scrollVel = last + (v - last) * 0.12;
      last = window.__scrollVel;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = undefined;
      started.current = false;
    };
  }, [enabled]);
}

export function scrollTop() {
  const lenis = window.__lenis;
  if (lenis) lenis.scrollTo(0, { duration: 1.4 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}
