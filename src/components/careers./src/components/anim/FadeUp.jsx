import React, { createElement, useLayoutEffect, useRef } from "react";
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

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        { autoAlpha: 1, y: 0, duration, delay, ease: "still", stagger: stagger ?? 0, paused: true, overwrite: true }
      );
      tweenRef.current = tween;
      if (trigger === "manual" && play) {
        tween.play();
      }

      if (trigger === "scroll") {
        ScrollTrigger.create({ trigger: el, start, once: true, onEnter: () => tween.play() });
      }
    }, el);

    return () => {
      ctx.revert();
      tweenRef.current = null;
    };
  }, [delay, y, duration, start, stagger, trigger]);

  useLayoutEffect(() => {
    if (trigger === "manual" && play && tweenRef.current) {
      tweenRef.current.play();
    }
  }, [trigger, play]);

  return createElement(as, { ref, className, id, style }, children);
}

