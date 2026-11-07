import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "FAQ", href: "#faq" },
];
export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (<>
      <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
            ? "border-b border-line bg-ink/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"}`}>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="font-display text-xl font-extrabold uppercase tracking-tight">
            onlyme<span className="text-acid">®</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (<a key={l.href} href={l.href} className="group relative font-mono text-[11px] uppercase tracking-[0.2em] text-smoke transition-colors hover:text-paper">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-acid transition-all duration-300 group-hover:w-full"/>
              </a>))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="group hidden items-center gap-2 rounded-full bg-acid px-5 py-2.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.04] sm:inline-flex">
              Start a project
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45"/>
            </a>
            <button onClick={() => setOpen(true)} aria-label="Open menu" className="flex size-10 items-center justify-center rounded-full border border-line text-paper transition-colors hover:border-acid hover:text-acid md:hidden">
              <Menu className="size-5"/>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[90] flex flex-col bg-ink/97 px-8 pb-10 pt-5 backdrop-blur-xl md:hidden">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-extrabold uppercase">
                onlyme<span className="text-acid">®</span>
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="flex size-10 items-center justify-center rounded-full border border-line">
                <X className="size-5"/>
              </button>
            </div>

            <nav className="mt-14 flex flex-col gap-2">
              {links.map((l, i) => (<motion.a key={l.href} href={l.href} onClick={() => setOpen(false)} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }} className="group flex items-baseline gap-4 border-b border-line py-4 font-display text-4xl font-extrabold uppercase tracking-tight">
                  <span className="font-mono text-xs text-acid">
                    0{i + 1}
                  </span>
                  {l.label}
                </motion.a>))}
            </nav>

            <motion.a href="#contact" onClick={() => setOpen(false)} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.45, duration: 0.5 }} className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-acid py-4 text-base font-semibold text-ink">
              Start a project <ArrowUpRight className="size-5"/>
            </motion.a>
          </motion.div>)}
      </AnimatePresence>
    </>);
}
