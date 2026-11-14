import { Reveal } from "../anim/Reveal";
import { FadeUp } from "../anim/FadeUp";
import { ImageReveal } from "../anim/ImageReveal";
import { ArrowLink, Eyebrow } from "../ui";
import { benefits, images } from "../../data/site";

export function Benefits() {
  return (
    <section id="benefits" className="relative bg-sand px-6 pb-28 pt-24 text-ink md:px-10 md:pb-40 md:pt-32">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20">
        <div>
          <Eyebrow className="text-ink/60">Benefits</Eyebrow>
          <Reveal as="h2" type="lines" className="mt-8 font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[0.92] tracking-[-0.02em]">
            {"The essentials,\n*generously.*"}
          </Reveal>
        </div>
        <FadeUp delay={0.15} className="max-w-md text-base leading-[1.45] text-ink/70 md:text-lg lg:pb-3">
          <p>
            None of this is a perk. It is the minimum we think a studio owes the people who give it their best hours. The
            list grows a little every year; it has never shrunk.
          </p>
        </FadeUp>
      </div>

      <ul className="mt-16 grid gap-4 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <FadeUp
            as="li"
            key={b.title}
            delay={(i % 4) * 0.08}
            y={40}
            className="group relative flex min-h-[260px] flex-col justify-between rounded-[20px] border border-ink/20 p-6 transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-ink hover:bg-ink hover:text-sand md:min-h-[300px] md:rounded-[24px]"
          >
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-ink/50 transition-colors duration-500 group-hover:text-sand/60">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <span className="relative block h-3 w-3" aria-hidden="true">
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-90" />
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-90" />
              </span>
            </div>
            <div>
              <h3 className="font-serif text-[1.75rem] leading-[1.02] tracking-[-0.01em] md:text-[2rem]">{b.title}</h3>
              <p className="mt-4 text-sm leading-[1.45] text-ink/65 transition-colors duration-500 group-hover:text-sand/75 md:text-[15px]">
                {b.body}
              </p>
            </div>
          </FadeUp>
        ))}
      </ul>

      {/* Wide image interlude */}
      <div className="group relative mt-20 md:mt-28">
        <ImageReveal
          src={images.studio2}
          alt="Warm timber studio interior with glass doors"
          className="aspect-[16/10] rounded-[20px] md:aspect-[21/9] md:rounded-[30px]"
          parallax
        />
        <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-gradient-to-t from-black/45 via-transparent to-transparent md:rounded-[30px]" />
        <div className="absolute inset-x-6 bottom-6 flex flex-col gap-4 text-sand md:inset-x-10 md:bottom-10 md:flex-row md:items-end md:justify-between">
          <Reveal as="p" type="words" className="max-w-md font-serif text-2xl leading-[1.1] md:text-4xl">
            {"Rooms that hold the *evening* light, and the people who leave on time to see it."}
          </Reveal>
          <ArrowLink href="#positions" label="Join the studio" className="pointer-events-auto" />
        </div>
      </div>
    </section>
  );
}

