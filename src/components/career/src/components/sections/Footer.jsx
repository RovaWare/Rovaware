import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../../lib/gsap";
import { HoverReveal } from "../anim/HoverReveal";
import { ArrowLink, PillLink } from "../ui";
import { jobs, site } from "../../data/site";

const explore = [
  { label: "Culture", href: "#culture" },
  { label: "Values", href: "#values" },
  { label: "Benefits", href: "#benefits" },
  { label: "Open roles", href: "#positions" },
  { label: "Process", href: "#process" },
];

const follow = [
  { label: "Instagram", href: "https://instagram.com", external: true },
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "Journal", href: "#", external: false },
  { label: "Main site", href: "https://stillform.homes", external: true },
];

export function Footer() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveals = el.querySelectorAll(".footer-reveal");
    const rules = el.querySelectorAll(".footer-rule");
    const frame = el.querySelector(".footer-frame");

    if (prefersReducedMotion()) {
      if (frame) gsap.set(frame, { autoAlpha: 1, y: 0 });
      gsap.set(reveals, { yPercent: 0 });
      gsap.set(rules, { scaleX: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(reveals, { yPercent: 110 });
      gsap.set(rules, { scaleX: 0 });
      gsap.set(frame, { autoAlpha: 0, y: 30 });

      let played = false;
      const playTl = () => {
        if (played) return;
        played = true;
        const tl = gsap.timeline({ defaults: { ease: "still" } });
        tl.to(frame, { autoAlpha: 1, y: 0, duration: 1.2 }, 0)
          .to(reveals, { yPercent: 0, duration: 1.1, stagger: 0.04 }, 0.2)
          .to(rules, { scaleX: 1, duration: 1.4, stagger: 0.15 }, 0.4);
      };

      ScrollTrigger.create({
        trigger: el,
        start: "top 70%",
        once: true,
        onEnter: playTl,
        onRefresh: (self) => {
          if (self.progress > 0) playTl();
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative z-30 flex min-h-[100svh] w-full flex-col bg-sand px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 text-ink md:px-10 md:py-6 lg:py-10"
    >
      <div className="footer-frame flex flex-1 flex-col justify-between rounded-[20px] border border-ink/20 px-5 py-6 md:rounded-[30px] md:px-10 md:py-10">
        {/* Top */}
        <div className="flex items-start justify-between gap-8 text-xs uppercase tracking-[0.12em] md:text-sm">
          <div className="overflow-hidden">
            <a href="#top" className="footer-reveal block font-semibold tracking-[0.08em]">
              {site.name}
            </a>
          </div>
          <div className="hidden overflow-hidden md:block">
            <span className="footer-reveal block text-right">{site.tagline}</span>
          </div>
        </div>

        <div className="footer-rule my-8 h-px origin-left bg-ink/20 md:my-14" />

        {/* Middle */}
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <div className="overflow-hidden">
              <h2 className="footer-reveal max-w-[12ch] font-serif text-[clamp(3rem,13vw,7rem)] leading-[0.88] tracking-[-0.03em] lg:text-[clamp(2.75rem,8vw,7rem)]">
                Make something <span className="italic">that lasts.</span>
              </h2>
            </div>
            <div className="overflow-hidden">
              <p className="footer-reveal mt-6 max-w-xl text-lg leading-[1.2] md:text-xl">
                {jobs.length} open roles across Lisbon, Copenhagen and wherever you do your best thinking.
              </p>
            </div>
            <div className="mt-8 overflow-hidden">
              <div className="footer-reveal flex flex-wrap items-center gap-4">
                <PillLink href="#positions" label="View open roles" />
                <ArrowLink href={`mailto:${site.email}`} label="Write to us" direction="external" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm md:gap-12 lg:min-w-[360px] lg:gap-20 lg:text-base">
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden">
                <p className="footer-reveal text-xs uppercase tracking-[0.12em] text-ink/65">Explore</p>
              </div>
              {explore.map((l) => (
                <div key={l.label} className="overflow-hidden">
                  <a href={l.href} className="footer-reveal group block py-1 transition-opacity hover:opacity-60 lg:py-0">
                    <HoverReveal text={l.label} />
                  </a>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="overflow-hidden">
                <p className="footer-reveal text-xs uppercase tracking-[0.12em] text-ink/65">Follow</p>
              </div>
              {follow.map((l) => (
                <div key={l.label} className="overflow-hidden">
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noreferrer" : undefined}
                    className="footer-reveal group inline-flex items-center gap-1.5 py-1 transition-opacity hover:opacity-60 lg:py-0"
                  >
                    <HoverReveal text={l.label} />
                    {l.external && <span className="text-[10px] opacity-60">↗</span>}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-rule my-8 h-px origin-left bg-ink/20 md:my-14" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.18em] text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <div className="overflow-hidden">
            <span className="footer-reveal block">
              © {site.year} {site.name}. All rights reserved.
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="footer-reveal block">Designed &amp; detailed with care</span>
          </div>
          <div className="overflow-hidden">
            <a href="#top" className="footer-reveal block transition-colors hover:text-ink">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

