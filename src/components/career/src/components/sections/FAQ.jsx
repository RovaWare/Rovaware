import { useState } from "react";
import { Reveal } from "../anim/Reveal";
import { FadeUp } from "../anim/FadeUp";
import { HoverReveal } from "../anim/HoverReveal";
import { Eyebrow, PillLink } from "../ui";
import { faqs, site } from "../../data/site";
import { cn } from "../../utils/cn";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative bg-sand px-6 pb-28 text-ink md:px-10 md:pb-40">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow className="text-ink/60">Questions</Eyebrow>
          <Reveal as="h2" type="lines" className="mt-8 font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] tracking-[-0.02em]">
            {"Things people\nusually *ask.*"}
          </Reveal>
          <FadeUp delay={0.2} className="mt-8 flex flex-col items-start gap-6">
            <p className="max-w-sm text-base leading-[1.45] text-ink/65">
              Anything else, write to us. A person reads every message and replies within two working days.
            </p>
            <PillLink href={`mailto:${site.email}`} label={site.email} className="normal-case tracking-[0.08em]" />
          </FadeUp>
        </div>

        <FadeUp as="ul" stagger={0.06} className="border-b border-ink/20">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="border-t border-ink/20">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left md:py-8"
                >
                  <span className="font-serif text-xl leading-[1.1] md:text-[1.75rem]">
                    <HoverReveal text={item.q} />
                  </span>
                  <span
                    className={cn(
                      "relative mt-1 block h-4 w-4 shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isOpen ? "rotate-45" : "group-hover:rotate-90"
                    )}
                    aria-hidden="true"
                  >
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p
                      className={cn(
                        "max-w-xl pb-8 text-base leading-[1.5] text-ink/70 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-lg",
                        isOpen ? "translate-y-0 opacity-100 delay-100" : "translate-y-3 opacity-0"
                      )}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </FadeUp>
      </div>
    </section>
  );
}

