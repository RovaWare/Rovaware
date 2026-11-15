import { createElement, useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../../lib/gsap";

export function FadeUp({
  as = "div",
  children,
  className,
  delay = 0,
  y = 36,
  duration = 1.2,
  start = "top 88%",
  stagger,
  trigger = "scroll",
  play = false,
  id,
  style,
}) {
  const ref = useRef(null);
  const tweenRef = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = stagger !== undefined ? Array.from(el.children) : [el];

    if (prefersReducedMotion()) {
      gsap.set(targets, { autoAlpha: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        { autoAlpha: 1, y: 0, duration, delay, ease: "still", stagger: stagger ?? 0, paused: true, overwrite: true }
      );
      tweenRef.current = tween;

      if (trigger === "manual") {
        if (play) {
          tween.play();
        }
      } else {
        ScrollTrigger.create({
          trigger: el,
          start,
          once: true,
          onEnter: () => tween.play(),
          onRefresh: (self) => {
            if (self.progress > 0) tween.play();
          },
        });

        // Fail-safe: if already in or near viewport, reveal immediately
        if (typeof window !== "undefined") {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight + 100) {
            tween.play();
          }
        }
      }
    }, el);

    return () => {
      ctx.revert();
      tweenRef.current = null;
    };
  }, [delay, y, duration, start, stagger, trigger, play]);

  useLayoutEffect(() => {
    if (trigger === "manual" && play) tweenRef.current?.play();
  }, [play, trigger]);

  return createElement(as, { ref, className, id, style }, children);
}

