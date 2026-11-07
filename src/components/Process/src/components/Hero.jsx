import { motion } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react";
const ease = [0.22, 1, 0.36, 1];
const stats = [
    { value: "07+", label: "Years, one person" },
    { value: "48", label: "Projects shipped" },
    { value: "100%", label: "Built by me" },
    { value: "4.9/5", label: "Client rating" },
];
function Line({ children, delay }) {
    return (<span className="block overflow-hidden pb-[0.08em]">
      <motion.span initial={{ y: "115%" }} animate={{ y: 0 }} transition={{ duration: 1, delay, ease }} className="block">
        {children}
      </motion.span>
    </span>);
}
export default function Hero() {
    return (<section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-32 pb-14 md:pt-40">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-acid/10 blur-[140px]"/>
      <div className="pointer-events-none absolute bottom-[-20%] left-[-15%] size-[36rem] rounded-full bg-acid/5 blur-[120px]"/>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10">
        {/* badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease }} className="mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-coal/60 px-4 py-2">
          <span className="size-2 rounded-full bg-acid animate-pulse-dot"/>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-smoke">
            Available for new projects — booking July
          </span>
        </motion.div>

        {/* headline */}
        <h1 className="font-display text-[clamp(2.9rem,9.5vw,9rem)] leading-[0.95] font-extrabold uppercase tracking-tight">
          <Line delay={0.2}>No agency.</Line>
          <Line delay={0.32}>
            <span className="text-stroke">No middlemen.</span>
          </Line>
          <Line delay={0.44}>
            Just{" "}
            <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 1.05, ease }} className="mx-[0.08em] inline-block h-[0.62em] w-[1.5em] origin-left overflow-hidden rounded-full align-[-0.06em]">
              <img src="/images/portrait.jpg" alt="Aarav — the whole team" className="h-full w-full object-cover object-top"/>
            </motion.span>
            <span className="text-acid">me.</span>
          </Line>
        </h1>

        {/* sub + ctas */}
        <div className="mt-10 flex flex-col gap-10 md:mt-14 md:flex-row md:items-end md:justify-between">
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.75, ease }} className="max-w-xl text-base leading-relaxed text-smoke md:text-lg">
            <span className="text-paper">onlyme®</span> is a one-person design
            &amp; code studio. You brief me, I build it — your vision never
            passes through an account manager on its way to the screen.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.88, ease }} className="flex flex-wrap items-center gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-acid px-7 py-4 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.04]">
              Start a project
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45"/>
            </a>
            <a href="#process" className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-4 text-sm font-semibold text-paper transition-colors duration-300 hover:border-acid hover:text-acid">
              See how I work
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"/>
            </a>
          </motion.div>
        </div>

        {/* stats */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }} className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 md:mt-24 md:grid-cols-4">
          {stats.map((s) => (<div key={s.label}>
              <div className="font-display text-3xl font-extrabold md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-smoke md:text-[11px]">
                {s.label}
              </div>
            </div>))}
        </motion.div>
      </div>

      {/* rotating badge */}
      <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 1.3, ease }} className="absolute right-10 bottom-44 hidden lg:block">
        <div className="relative flex size-36 items-center justify-center">
          <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow">
            <defs>
              <path id="circlePath" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"/>
            </defs>
            <text className="fill-smoke font-mono text-[8px] uppercase tracking-[0.24em]">
              <textPath href="#circlePath">
                only me • design • code • motion • only me •
              </textPath>
            </text>
          </svg>
          <ArrowDownRight className="size-6 text-acid"/>
        </div>
      </motion.div>
    </section>);
}
