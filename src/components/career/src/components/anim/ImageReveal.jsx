import { useLayoutEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../../lib/gsap";
import { cn } from "../../utils/cn";

export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  parallax = false,
  hoverZoom = true,
  delay = 0,
  loading = "lazy",
}) {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);
  const [done, setDone] = useState(() => prefersReducedMotion());

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const restScale = parallax ? 1.12 : 1;
      gsap.set(wrap, { clipPath: "inset(0 0 100% 0)" });
      gsap.set(img, { scale: 1.25 });

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "still" },
        onComplete: () => {
          gsap.set(wrap, { clearProps: "clipPath" });
          if (!parallax) gsap.set(img, { clearProps: "transform" });
          setDone(true);
        },
      });
      tl.to(wrap, { clipPath: "inset(0 0 0% 0)", duration: 1.4, delay }, 0).to(
        img,
        { scale: restScale, duration: 1.6, delay },
        0
      );

      ScrollTrigger.create({
        trigger: wrap,
        start: "top 85%",
        once: true,
        onEnter: () => tl.play(),
        onRefresh: (self) => {
          if (self.progress > 0) tl.play();
        },
      });

      if (parallax) {
        gsap.fromTo(
          img,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      }
    }, wrap);

    return () => ctx.revert();
  }, [parallax, delay]);

  return (
    <div ref={wrapRef} className={cn("relative overflow-hidden bg-ink/10", className)}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={cn(
          "h-full w-full object-cover",
          done && hoverZoom && !parallax && "transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]",
          imgClassName
        )}
      />
    </div>
  );
}

