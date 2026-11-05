import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
const projects = [
    {
        img: "/images/work-1.jpg",
        title: "Ledgerline",
        meta: "Fintech dashboard",
        tags: "Product design · React",
        year: "2025",
    },
    {
        img: "/images/work-2.jpg",
        title: "Maison Arlo",
        meta: "E-commerce",
        tags: "Web design · Shopify",
        year: "2024",
    },
    {
        img: "/images/work-3.jpg",
        title: "Kabir & Co.",
        meta: "Brand identity",
        tags: "Identity · Print",
        year: "2024",
    },
    {
        img: "/images/work-4.jpg",
        title: "Wanderlist",
        meta: "Travel app",
        tags: "Mobile · UI/UX",
        year: "2023",
    },
];
export default function Work() {
    return (<section id="work" className="relative border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">
          <span className="text-acid">(03)</span>
          <span className="h-px w-12 bg-line"/>
          Selected work
        </div>

        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl leading-[1.02] font-extrabold uppercase tracking-tight md:text-6xl">
            Recent <span className="text-stroke">builds.</span>
          </h2>
          <a href="#contact" className="group inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-acid">
            Want yours here?
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45"/>
          </a>
        </div>

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((p, i) => (<motion.a key={p.title} href="#contact" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, delay: (i % 2) * 0.1 }} className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"/>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-40"/>
                <span className="absolute left-5 top-5 rounded-full border border-paper/15 bg-ink/55 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper backdrop-blur-md">
                  {p.meta}
                </span>
                <span className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/70">
                  {p.year}
                </span>
              </div>

              <div className="flex items-center justify-between pt-5">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-acid md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-smoke">
                    {p.tags}
                  </p>
                </div>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-acid group-hover:bg-acid group-hover:text-ink">
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:rotate-45"/>
                </span>
              </div>
            </motion.a>))}
        </div>
      </div>
    </section>);
}
