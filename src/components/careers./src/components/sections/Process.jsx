import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../../lib/gsap";
import { Reveal } from "../anim/Reveal";
import { FadeUp } from "../anim/FadeUp";
import { ArrowLink, Eyebrow } from "../ui";
import { processSteps } from "../../data/site";

export function Process() {
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const rules = grid.querySelectorAll(".step-rule");
      const dots = grid.querySelectorAll(".step-dot");
      gsap.set(rules, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(dots, { scale: 0 });
      ScrollTrigger.create({
        trigger: grid,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(rules, { scaleX: 1, duration: 1.4, ease: "still", stagger: 0.18 });
          gsap.to(dots, { scale: 1, duration: 0.8, ease: "back.out(2)", stagger: 0.18, delay: 0.3 });
        },
      });
    }, grid);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="relative bg-ink px-6 pb-28 pt-24 text-sand md:px-10 md:pb-40 md:pt-32">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20">
        <div>
          <Eyebrow className="text-sand/60">How we hire</Eyebrow>
          <Reveal as="h2" type="lines" className="mt-8 font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[0.92] tracking-[-0.02em]">
            {"Four steps.\nThree weeks.\n*No surprises.*"}
          </Reveal>
        </div>
        <FadeUp delay={0.15} className="max-w-md text-base leading-[1.45] text-sand/65 md:text-lg lg:pb-3">
          <p>
            We treat the process the way we treat a brief: short, clear, and respectful of your time. You will always
            know what happens next and when.
          </p>
        </FadeUp>
      </div>

      <ol ref={gridRef} className="mt-16 grid gap-x-8 gap-y-14 md:mt-24 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <li key={step.index} className="group relative">
            <div className="relative mb-8 h-px w-full">
              <span className="step-rule absolute inset-0 block bg-sand/30" aria-hidden="true" />
              <span className="step-dot absolute -top-[3px] left-0 block h-[7px] w-[7px] rounded-full bg-sand" aria-hidden="true" />
            </div>
            <div className="flex items-baseline justify-between">
              <span
                className="font-serif text-[clamp(3.5rem,7vw,6rem)] leading-none text-transparent transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-sand"
                style={{ WebkitTextStroke: "1px rgba(237,230,214,0.55)" }}
              >
                {step.index}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-sand/50">{step.duration}</span>
            </div>
            <FadeUp delay={i * 0.1} className="mt-8">
              <h3 className="font-serif text-3xl leading-[1] md:text-[2.25rem]">{step.title}</h3>
              <p className="mt-4 text-sm leading-[1.5] text-sand/60 transition-colors duration-500 group-hover:text-sand/85 md:text-[15px]">
                {step.body}
              </p>
            </FadeUp>
          </li>
        ))}
      </ol>

      <FadeUp className="mt-20 flex flex-col gap-6 border-t border-sand/20 pt-8 md:flex-row md:items-center md:justify-between">
        <p className="max-w-lg font-serif text-2xl leading-[1.1] md:text-3xl">
          Need an adjustment to any step? Tell us. We have done interviews in sign language, in writing, and over a walk.
        </p>
        <ArrowLink href="#positions" label="See open roles" direction="up" className="text-sand" />
      </FadeUp>
    </section>
  );
}

