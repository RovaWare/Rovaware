import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
const faqs = [
    {
        q: "Why not just hire an agency?",
        a: "Agencies are built for big budgets — account managers, overhead, and handoffs between departments. With me, the person you brief is the person who designs and codes. You get senior work without the ten-person markup, and nothing gets lost in translation.",
    },
    {
        q: "What does a project cost?",
        a: "Most projects land between $3k and $15k depending on scope — always fixed-price after our scope call. You'll know the exact number before we start, and it won't change unless the scope does.",
    },
    {
        q: "How soon can we start?",
        a: "I take on a maximum of two projects at a time so every client gets my full attention. There's usually a one-to-two week runway — the earlier you reach out, the earlier your slot is booked.",
    },
    {
        q: "What if I need changes after launch?",
        a: "Every project includes 30 days of free support. After that, you can ping me for small fixes at a friendly hourly rate, or put me on a monthly care plan that covers updates, backups and small improvements.",
    },
    {
        q: "Do you work with in-house teams?",
        a: "Happily. I often plug into existing teams as the design or front-end muscle — your Slack, your rituals, your roadmap. I just become the fastest teammate you have.",
    },
];
export default function Faq() {
    const [open, setOpen] = useState(0);
    return (<section id="faq" className="relative border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">
              <span className="text-acid">(05)</span>
              <span className="h-px w-12 bg-line"/>
              Questions
            </div>
            <h2 className="font-display text-4xl leading-[1.02] font-extrabold uppercase tracking-tight md:text-6xl">
              Asked,
              <br />
              <span className="text-stroke">answered.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-smoke md:text-base">
              Anything else on your mind? Skip the form and email me directly —
              I reply within a day.
            </p>
            <a href="mailto:hello@onlyme.studio" className="group mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-acid">
              hello@onlyme.studio
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45"/>
            </a>
          </div>

          <div>
            {faqs.map((f, i) => {
            const isOpen = open === i;
            return (<motion.div key={f.q} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: i * 0.05 }} className={`border-t border-line ${i === faqs.length - 1 ? "border-b" : ""}`}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-6 py-7 text-left">
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-xs text-acid">
                        0{i + 1}
                      </span>
                      <span className="font-display text-lg font-bold tracking-tight md:text-2xl">
                        {f.q}
                      </span>
                    </span>
                    <span className={`flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                    ? "rotate-45 border-acid bg-acid text-ink"
                    : "border-line text-paper"}`}>
                      <Plus className="size-4"/>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                        <p className="max-w-2xl pb-8 pl-9 text-sm leading-relaxed text-smoke md:pl-12 md:text-[15px]">
                          {f.a}
                        </p>
                      </motion.div>)}
                  </AnimatePresence>
                </motion.div>);
        })}
          </div>
        </div>
      </div>
    </section>);
}
