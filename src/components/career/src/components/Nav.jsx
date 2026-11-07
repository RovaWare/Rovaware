import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { HoverReveal } from "./anim/HoverReveal";
import { site } from "../data/site";
import { cn } from "../utils/cn";

const menu = [
  { label: "Culture", href: "#culture" },
  { label: "Benefits", href: "#benefits" },
  { label: "Open roles", href: "#positions" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Nav({ ready }) {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const listRef = useRef(null);
  const firstRender = useRef(true);

  // Entrance after the preloader
  useLayoutEffect(() => {
    if (!navRef.current) return;
    if (!ready) {
      gsap.set(navRef.current, { autoAlpha: 0, y: -16 });
      return;
    }
    if (prefersReducedMotion()) {
      gsap.set(navRef.current, { autoAlpha: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current, { autoAlpha: 0, y: -16 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "still", delay: 0.1 });
    });
    return () => ctx.revert();
  }, [ready]);

  // Open / close animation
  useLayoutEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const items = el.querySelectorAll(".menu-item-inner");

    if (firstRender.current) {
      firstRender.current = false;
      gsap.set(el, { height: 0 });
      gsap.set(items, { yPercent: 110 });
      return;
    }

    const ctx = gsap.context(() => {
      if (open) {
        gsap.to(el, { height: el.scrollHeight, duration: 0.7, ease: "still" });
        gsap.fromTo(items, { yPercent: 110 }, { yPercent: 0, duration: 0.8, ease: "still", stagger: 0.05, delay: 0.08 });
      } else {
        gsap.to(items, { yPercent: -110, duration: 0.4, ease: "power2.in", stagger: 0.025 });
        gsap.to(el, { height: 0, duration: 0.5, ease: "stillInOut", delay: 0.1 });
      }
    });
    return () => ctx.revert();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav
      ref={navRef}
      className="fixed left-0 top-0 z-50 w-full px-6 py-4 text-white mix-blend-difference md:px-10"
      aria-label="Primary"
    >
      <div className="flex items-start justify-between">
        <a href="#top" className="group flex flex-col gap-1 leading-none">
          <span className="text-xl font-medium leading-none">{site.name}</span>
          <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] opacity-70 transition-opacity duration-300 group-hover:opacity-100">
            {site.breadcrumb.map((crumb, i) => (
              <span key={crumb} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden="true">/</span>}
                <span>{crumb}</span>
              </span>
            ))}
          </span>
        </a>

        <div className="flex flex-col items-end">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
            className="group flex cursor-pointer items-center gap-2 text-base font-bold leading-none tracking-tight"
          >
            <span className="relative grid h-[1em] overflow-hidden">
              <span
                className={cn(
                  "col-start-1 row-start-1 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  open ? "-translate-y-full" : "translate-y-0"
                )}
              >
                MENU
              </span>
              <span
                className={cn(
                  "col-start-1 row-start-1 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  open ? "translate-y-0" : "translate-y-full"
                )}
                aria-hidden="true"
              >
                CLOSE
              </span>
            </span>
            <span
              aria-hidden="true"
              className="grid grid-cols-2 transition-[gap,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:gap-[4px]"
              style={{ gap: open ? 5 : 2, transform: open ? "rotate(45deg)" : "none" }}
            >
              <i className="block h-[3px] w-[3px] rounded-full bg-current" />
              <i className="block h-[3px] w-[3px] rounded-full bg-current" />
              <i className="block h-[3px] w-[3px] rounded-full bg-current" />
              <i className="block h-[3px] w-[3px] rounded-full bg-current" />
            </span>
          </button>

          <div id="site-menu" ref={listRef} className="overflow-hidden" inert={!open}>
            <ul className="flex flex-col items-end pt-3 text-right">
              {menu.map((item) => (
                <li key={item.href} className="overflow-hidden pb-[0.1em]">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="menu-item-inner group block text-base font-bold uppercase leading-[1.15] tracking-tight"
                  >
                    <HoverReveal text={item.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

