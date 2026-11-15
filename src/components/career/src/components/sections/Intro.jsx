import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../../lib/gsap";
import { Reveal } from "../anim/Reveal";
import { FadeUp } from "../anim/FadeUp";
import { ImageReveal } from "../anim/ImageReveal";
import { ArrowLink, Eyebrow } from "../ui";
import { images, stats } from "../../data/site";

function Counter({ value }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const numeric = parseInt(value, 10);
    if (Number.isNaN(numeric) || prefersReducedMotion()) return;
    const pad = value.length;
    const obj = { v: 0 };
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () =>
          gsap.to(obj, {
            v: numeric,
            duration: 1.8,
            ease: "power3.out",
            onUpdate: () => {
              el.textContent = String(Math.round(obj.v)).padStart(pad, "0");
            },
          }),
      });
    });
    return () => ctx.revert();
  }, [value]);
  return <span ref={ref}>{value.replace(/\d/g, "0")}</span>;
}

export function Intro() {
  return (
    <section id="culture" className="relative overflow-hidden bg-sand px-6 pb-24 pt-20 text-ink md:px-10 md:pb-32 md:pt-28 lg:pt-36">
      <Eyebrow className="text-ink/60">About the studio</Eyebrow>

      <Reveal
        as="h2"
        type="chars"
        className="mt-8 max-w-[11ch] font-serif text-[clamp(3rem,11vw,9rem)] leading-[0.9] tracking-[-0.02em] md:mt-12"
        stagger={0.02}
      >
        {"A quieter way to *work*"}
      </Reveal>

      {/* Image collage */}
      <div className="relative mt-16 grid grid-cols-12 gap-4 md:mt-24 md:gap-6">
        <div className="group col-span-12 md:col-span-7">
          <ImageReveal
            src={images.studio1}
            alt="The studio lounge, lit by late afternoon sun"
            className="aspect-[4/3] md:aspect-[16/10]"
            parallax
          />
        </div>
        <div className="group col-span-7 md:col-span-3 md:mt-32">
          <ImageReveal src={images.model1} alt="An architect assembling a study model" className="aspect-[3/4]" parallax delay={0.1} />
        </div>
        <div className="group col-span-5 md:col-span-2 md:mt-12">
          <ImageReveal src={images.wall} alt="Pinned drawings on the studio wall" className="aspect-[3/4]" parallax delay={0.2} />
        </div>
      </div>

      {/* Philosophy copy */}
      <div className="mt-20 grid gap-12 md:mt-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="font-serif text-[clamp(1.9rem,4.6vw,4.25rem)] leading-[1.02] tracking-[-0.015em]">
            We engineer high-performance software for ambitious ideas. That requires an environment where deep focus is protected.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-10 lg:col-span-7">
          <div className="max-w-xl space-y-6 text-base leading-[1.45] text-ink/70 md:text-lg">
            <p>
              ROVAWARE is an elite digital engineering studio. Our engineers and designers architect high-performance
              Next.js 15 platforms, autonomous AI agent swarms, and enterprise SaaS cloud infrastructure.
            </p>
            <p>
              We maintain an uncompromising bar for technical excellence: strict TypeScript across the stack, 100% Lighthouse
              performance scores, and sub-100ms TTFB. Every team member works on high-impact products with complete architectural dignity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-ink/20 pt-8 sm:grid-cols-4 md:pt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-sans text-[clamp(1.6rem,3.4vw,3rem)] font-medium leading-none tracking-[-0.05em] tabular-nums">
                  <Counter value={s.value} />
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-ink/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 md:mt-20">
        <ArrowLink href="#values" label="Read what we stand for" direction="down" />
      </div>
    </section>
  );
}

