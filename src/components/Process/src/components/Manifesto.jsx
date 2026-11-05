import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const words = [
    { w: "Most" }, { w: "studios" }, { w: "lose" }, { w: "your" }, { w: "vision" },
    { w: "in" }, { w: "a" }, { w: "game" }, { w: "of" }, { w: "telephone.", accent: true },
    { w: "Account" }, { w: "manager," }, { w: "designer," }, { w: "developer," },
    { w: "the" }, { w: "intern", accent: true }, { w: "who" }, { w: "actually" },
    { w: "builds" }, { w: "it." }, { w: "Here," }, { w: "the" }, { w: "person" },
    { w: "you" }, { w: "brief" }, { w: "is" }, { w: "the" }, { w: "person" },
    { w: "who" }, { w: "builds.", accent: true }, { w: "Nothing", accent: true },
    { w: "gets", accent: true }, { w: "lost.", accent: true },
];
function Word({ children, progress, range, accent, }) {
    const opacity = useTransform(progress, range, [0.12, 1]);
    const y = useTransform(progress, range, [8, 0]);
    return (<motion.span style={{ opacity, y }} className={`mr-[0.26em] inline-block ${accent ? "text-acid" : ""}`}>
      {children}
    </motion.span>);
}
export default function Manifesto() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.85", "end 0.45"],
    });
    return (<section id="about" className="relative py-28 md:py-44">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-10 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">
          <span className="text-acid">(00)</span>
          <span className="h-px w-12 bg-line"/>
          The only-me difference
        </div>

        <p ref={ref} className="max-w-6xl font-display text-3xl leading-[1.25] font-bold md:text-5xl lg:text-[3.4rem]">
          {words.map((word, i) => (<Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} accent={word.accent}>
              {word.w}
            </Word>))}
        </p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-14 flex items-center gap-5">
          <div className="flex -space-x-2">
            <img src="/images/portrait.jpg" alt="Aarav Mehta" className="size-11 rounded-full border-2 border-ink object-cover object-top"/>
            <div className="flex size-11 items-center justify-center rounded-full border-2 border-ink bg-acid font-display text-xs font-extrabold text-ink">
              01
            </div>
          </div>
          <div>
            <div className="font-semibold">Aarav Mehta</div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-smoke">
              Founder · designer · developer · support team
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
}
