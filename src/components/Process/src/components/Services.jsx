import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Fingerprint, LifeBuoy, MousePointerClick, PenTool, } from "lucide-react";
const services = [
    {
        icon: Fingerprint,
        title: "Brand Identity",
        desc: "Logos, type systems and guidelines that make you look like the category leader — not a template.",
        tags: ["Logo", "Guidelines", "Art direction"],
    },
    {
        icon: PenTool,
        title: "Web Design",
        desc: "Interfaces designed to convert: wireframes, hi-fi UI and design systems in Figma — reviewed with you every 48 hours.",
        tags: ["UI/UX", "Figma", "Design systems"],
    },
    {
        icon: Code2,
        title: "Development",
        desc: "Hand-coded React, buttery animations and 95+ Lighthouse scores. No page builders, no bloat.",
        tags: ["React", "Tailwind", "CMS"],
    },
    {
        icon: MousePointerClick,
        title: "Motion & Interaction",
        desc: "Scroll storytelling, micro-interactions and 3D touches that make people stay a little longer.",
        tags: ["Framer Motion", "GSAP", "WebGL"],
    },
    {
        icon: LifeBuoy,
        title: "Care & Support",
        desc: "Hosting, updates and fixes after launch. One message and it's handled — usually the same day.",
        tags: ["Hosting", "Analytics", "Retainers"],
    },
];
export default function Services() {
    return (<section id="services" className="relative border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">
          <span className="text-acid">(01)</span>
          <span className="h-px w-12 bg-line"/>
          What I do
        </div>

        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-4xl leading-[1.02] font-extrabold uppercase tracking-tight md:text-6xl">
            Every role,
            <br />
            <span className="text-stroke">one pair of hands.</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-smoke md:text-base">
            Strategy, design, code and support — I cover the full stack, so
            nothing gets lost between departments that don't talk to each other.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (<motion.div key={s.title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: (i % 3) * 0.08 }} className="group relative flex min-h-[290px] flex-col gap-6 rounded-2xl border border-line bg-coal/40 p-8 transition-colors duration-300 hover:border-acid hover:bg-acid hover:text-ink">
              <div className="flex items-start justify-between">
                <span className="flex size-12 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-ink/25">
                  <s.icon className="size-5"/>
                </span>
                <span className="font-mono text-xs text-smoke transition-colors duration-300 group-hover:text-ink/60">
                  /0{i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-smoke transition-colors duration-300 group-hover:text-ink/75">
                  {s.desc}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {s.tags.map((t) => (<span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-smoke transition-colors duration-300 group-hover:border-ink/25 group-hover:text-ink/70">
                    {t}
                  </span>))}
              </div>
              <ArrowUpRight className="absolute right-6 top-6 size-5 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"/>
            </motion.div>))}

          {/* CTA card */}
          <motion.a href="#contact" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.16 }} className="group relative flex min-h-[290px] flex-col justify-between gap-6 rounded-2xl border border-acid/50 bg-acid p-8 text-ink transition-transform duration-300 hover:scale-[1.015]">
            <span className="font-mono text-xs text-ink/60">/06</span>
            <div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                Something else in mind?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Retainers, workshops, audits, rescue missions for a half-built
                project — if it fits in a browser, we can probably do it.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide">
              Tell me about it
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45"/>
            </span>
          </motion.a>
        </div>
      </div>
    </section>);
}
