import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../../lib/gsap";
import { Reveal } from "../anim/Reveal";
import { FadeUp } from "../anim/FadeUp";
import { Eyebrow, Marquee } from "../ui";
import { site, values } from "../../data/site";

export function MarqueeBreak() {
  const ref = useRef(null);

  // Rows skew slightly with scroll velocity, like a sheet being pulled
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const rows = el.querySelectorAll(".marquee-row > div > div");
    const ctx = gsap.context(() => {
      const proxy = { skew: 0 };
      const skewSetter = gsap.quickSetter(rows, "skewX", "deg");
      const clamp = gsap.utils.clamp(-6, 6);
      ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const skew = clamp(self.getVelocity() / -400);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.8,
              ease: "power3",
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew),
            });
          }
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="relative flex min-h-[70svh] flex-col justify-center overflow-hidden bg-ink py-20 text-sand md:min-h-[90svh]">
      <div className="marquee-row">
        <Marquee
          text={`${site.name} — CAREERS`}
          rows={3}
          separator="·"
          rowClassName="font-serif text-[clamp(3.5rem,11vw,10rem)] leading-[0.95] tracking-[-0.02em] [&>span>span:nth-child(even)]:italic [&>span>span:nth-child(even)]:text-sand/50"
        />
      </div>
      <FadeUp className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.18em] text-sand/50">
        <p>Scroll to continue</p>
      </FadeUp>
    </div>
  );
}

export function Values() {
  const listRef = useRef(null);

  // Rules draw in, one after another
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const rules = list.querySelectorAll(".value-rule");
      gsap.set(rules, { scaleX: 0, transformOrigin: "left center" });
      ScrollTrigger.batch(rules, {
        start: "top 90%",
        once: true,
        onEnter: (batch) => gsap.to(batch, { scaleX: 1, duration: 1.4, ease: "still", stagger: 0.12 }),
        onRefresh: (batch) => gsap.to(batch, { scaleX: 1, duration: 1.4, ease: "still", stagger: 0.12 }),
      });
    }, list);
    return () => ctx.revert();
  }, []);

  return (
    <section id="values" className="relative bg-ink px-6 pb-28 pt-24 text-sand md:px-10 md:pb-40 md:pt-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow className="text-sand/60">What we value</Eyebrow>
          <Reveal
            as="h2"
            type="lines"
            className="mt-8 font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[0.92] tracking-[-0.02em]"
          >
            {"Four things\nwe will not\n*compromise.*"}
          </Reveal>
          <FadeUp delay={0.2} className="mt-8 max-w-sm text-base leading-[1.45] text-sand/65">
            <p>
              We wrote these down in 2014 and have changed one word since. They are how we hire, how we review work and
              how we say no.
            </p>
          </FadeUp>
        </div>

        <ol ref={listRef} className="flex flex-col">
          {values.map((v) => (
            <li key={v.index} className="group relative">
              <span className="value-rule block h-px w-full bg-sand/25" aria-hidden="true" />
              <div className="grid grid-cols-[3rem_1fr] gap-4 py-8 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3 md:grid-cols-[5rem_1fr] md:py-10">
                <span className="pt-2 text-[11px] uppercase tracking-[0.18em] text-sand/50 transition-colors duration-500 group-hover:text-moss-light">
                  {v.index}
                </span>
                <div>
                  <Reveal as="h3" type="words" className="font-serif text-[clamp(1.9rem,4vw,3.5rem)] leading-[1] tracking-[-0.01em]">
                    {v.title}
                  </Reveal>
                  <FadeUp delay={0.15} className="mt-5 max-w-xl text-base leading-[1.45] text-sand/60 transition-colors duration-500 group-hover:text-sand/90 md:text-lg">
                    <p>{v.body}</p>
                  </FadeUp>
                </div>
              </div>
            </li>
          ))}
          <li aria-hidden="true">
            <span className="value-rule block h-px w-full bg-sand/25" />
          </li>
        </ol>
      </div>
    </section>
  );
}

