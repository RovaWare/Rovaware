import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { useSmoothScroll } from "../lib/SmoothScroll";
import { site } from "../data/site";

export function Preloader({ onDone }) {
  const rootRef = useRef(null);
  const counterRef = useRef(null);
  const barRef = useRef(null);
  const headerRef = useRef(null);
  const noteRef = useRef(null);
  const { stop, start } = useSmoothScroll();
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useLayoutEffect(() => {
    const root = rootRef.current;
    const counter = counterRef.current;
    const bar = barRef.current;
    if (!root || !counter || !bar) return;

    if (prefersReducedMotion()) {
      onDoneRef.current();
      return;
    }

    stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const progress = { v: 0 };
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => {
          document.body.style.overflow = prevOverflow;
          start();
          onDoneRef.current();
        },
      });

      tl.fromTo(noteRef.current, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "still" }, 0)
        .to(
          progress,
          {
            v: 100,
            duration: 1.9,
            ease: "power3.inOut",
            onUpdate: () => {
              counter.textContent = String(Math.round(progress.v)).padStart(2, "0");
            },
          },
          0.1
        )
        .fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: 1.9, ease: "power3.inOut" }, 0.1)
        .to([headerRef.current, noteRef.current], { y: -24, autoAlpha: 0, duration: 0.6, ease: "power3.in" }, "+=0.25")
        .to(root, { yPercent: -100, duration: 1.1, ease: "stillInOut" }, "-=0.3");
    }, root);

    return () => {
      ctx.revert();
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[2000] flex flex-col justify-center overflow-hidden bg-ink px-4 text-sand md:px-6"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="w-full">
        <div ref={headerRef} className="flex items-end justify-between px-2">
          <span className="font-sans text-[clamp(1.5rem,2.5vw,2.75rem)] font-medium leading-none tracking-[-0.055em]">
            {site.name}
          </span>
          <span
            ref={counterRef}
            className="shrink-0 font-sans text-[clamp(1.75rem,2.8vw,3rem)] font-medium leading-none tracking-[-0.05em] tabular-nums"
          >
            00
          </span>
        </div>
        <div className="mt-7 h-[3px] w-full overflow-hidden bg-sand/10" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
          <div ref={barRef} className="h-full origin-left bg-sand will-change-transform" />
        </div>
        <p ref={noteRef} className="mt-5 px-2 text-[11px] uppercase tracking-[0.18em] text-sand/60">
          Careers — {site.tagline}
        </p>
      </div>
    </div>
  );
}

