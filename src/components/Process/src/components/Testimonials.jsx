import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
const quotes = [
    {
        text: "I've worked with three agencies. Aarav beat all of them — because the person I briefed on Monday was the person who shipped on Friday.",
        name: "Sara Kim",
        role: "Founder · Maison Arlo",
    },
    {
        text: "He quoted six weeks, shipped in five, and the site doubled our demo bookings within a month. Still can't believe the price.",
        name: "Daniel Osei",
        role: "CEO · Ledgerline",
    },
    {
        text: "No calls that could've been emails, no jargon, no surprises. Just progress links every other day. A dream collaborator.",
        name: "Priya Nair",
        role: "CMO · Wanderlist",
    },
];
export default function Testimonials() {
    return (<section className="relative border-t border-line bg-coal/30 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">
          <span className="text-acid">(04)</span>
          <span className="h-px w-12 bg-line"/>
          Kind words
        </div>

        <h2 className="mb-16 font-display text-4xl leading-[1.02] font-extrabold uppercase tracking-tight md:mb-20 md:text-6xl">
          Clients say <span className="text-acid">it best.</span>
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {quotes.map((q, i) => (<motion.figure key={q.name} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: i * 0.1 }} className="group flex flex-col gap-7 rounded-2xl border border-line bg-ink/60 p-8 transition-colors duration-300 hover:border-acid/60">
              <div className="flex items-center justify-between">
                <Quote className="size-7 fill-acid text-acid"/>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (<Star key={s} className="size-3.5 fill-acid text-acid"/>))}
                </div>
              </div>
              <blockquote className="text-[15px] leading-relaxed text-paper/90">
                “{q.text}”
              </blockquote>
              <figcaption className="mt-auto border-t border-line pt-5">
                <div className="font-semibold">{q.name}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-smoke">
                  {q.role}
                </div>
              </figcaption>
            </motion.figure>))}
        </div>
      </div>
    </section>);
}
