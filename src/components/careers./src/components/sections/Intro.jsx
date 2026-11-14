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

      {/* Statement */}
      <div className="mt-20 grid gap-10 md:mt-32 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <FadeUp>
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink/60">Who we are</p>
          </FadeUp>
        </div>
        <div>
          <Reveal
            as="p"
            type="words"
            className="font-sans text-[clamp(1.6rem,3.4vw,3rem)] leading-[1.08] tracking-[-0.015em]"
            stagger={0.03}
          >
            {"We are a small studio of architects, designers and engineers who believe good work comes from calm rooms, honest materials and people who care about the *details.*"}
          </Reveal>
          <FadeUp delay={0.2} className="mt-8 max-w-xl text-base leading-[1.45] text-ink/70 md:text-lg">
            <p>
              STILL / FORM is a contemporary residential practice shaped around considered spaces, natural light and the
              feeling of living within them. We are twenty-four people across Lisbon, Copenhagen and a handful of quiet
              places in between, and we are growing slowly, on purpose.
            </p>
          </FadeUp>
          <FadeUp delay={0.3} className="mt-8">
            <ArrowLink href="#values" label="What we value" direction="down" />
          </FadeUp>
        </div>
      </div>

      {/* Stats */}
      <FadeUp stagger={0.08} className="mt-20 grid grid-cols-2 gap-y-10 border-t border-ink/20 pt-8 md:mt-28 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="group flex flex-col gap-2">
            <span className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-none tabular-nums">
              <Counter value={s.value} />
            </span>
            <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink/60">
              <span className="h-1.5 w-1.5 rounded-full bg-ink/30 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-6 group-hover:bg-ink" />
              {s.label}
            </span>
          </div>
        ))}
      </FadeUp>
    </section>
  );
}

