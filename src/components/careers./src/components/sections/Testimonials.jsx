import { useCallback, useEffect, useState } from "react";
import { Reveal } from "../anim/Reveal";
import { FadeUp } from "../anim/FadeUp";
import { Eyebrow, RoundButton } from "../ui";
import { testimonials } from "../../data/site";
import { cn } from "../../utils/cn";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const go = useCallback((dir) => setIndex((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [go, paused]);

  const current = testimonials[index];

  return (
    <section
      className="relative bg-sand px-6 pb-28 pt-24 text-ink md:px-10 md:pb-40 md:pt-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="rounded-[20px] border border-ink/20 px-5 py-10 md:rounded-[30px] md:px-10 md:py-16 lg:px-16 lg:py-20">
        <div className="flex items-center justify-between">
          <Eyebrow className="text-ink/60">From the team</Eyebrow>
          <FadeUp className="text-[11px] uppercase tracking-[0.18em] text-ink/60 tabular-nums">
            <p>
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
          </FadeUp>
        </div>

        <div className="mt-12 min-h-[14rem] md:mt-16 md:min-h-[16rem] lg:min-h-[18rem]">
          <Reveal
            key={index}
            as="blockquote"
            type="words"
            trigger="manual"
            play
            stagger={0.025}
            duration={1}
            className="max-w-5xl font-serif text-[clamp(1.9rem,4.6vw,4.25rem)] leading-[1.02] tracking-[-0.015em]"
          >
            {`“${current.quote}”`}
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <FadeUp key={`meta-${index}`} trigger="manual" play delay={0.5} y={16} className="flex flex-col gap-1">
            <p className="text-base font-medium">{current.name}</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink/60">{current.role}</p>
          </FadeUp>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show quote ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className="group flex h-5 w-5 cursor-pointer items-center justify-center"
                >
                  <span
                    className={cn(
                      "block h-1.5 rounded-full bg-ink transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      i === index ? "w-6" : "w-1.5 opacity-30 group-hover:opacity-70"
                    )}
                  />
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <RoundButton tone="ink" aria-label="Previous quote" onClick={() => go(-1)}>
                <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-0.5">←</span>
              </RoundButton>
              <RoundButton tone="ink" aria-label="Next quote" onClick={() => go(1)}>
                <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5">→</span>
              </RoundButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

