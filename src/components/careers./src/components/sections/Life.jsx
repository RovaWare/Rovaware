import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../../lib/gsap";
import { Reveal } from "../anim/Reveal";
import { FadeUp } from "../anim/FadeUp";
import { Eyebrow } from "../ui";
import { images } from "../../data/site";
import { cn } from "../../utils/cn";

const frames = [
  { src: images.team1, caption: "Site review, Comporta", place: "Lisbon", size: "wide" },
  { src: images.model2, caption: "Study models, 1:50", place: "Copenhagen", size: "tall" },
  { src: images.studio3, caption: "Monday crit", place: "Lisbon", size: "wide" },
  { src: images.desk, caption: "A desk by the window", place: "Remote", size: "square" },
  { src: images.team3, caption: "Detailing the stair", place: "Copenhagen", size: "wide" },
  { src: images.lounge, caption: "The reading room", place: "Lisbon", size: "tall" },
];

export function Life() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || prefersReducedMotion()) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const distance = () => track.scrollWidth - window.innerWidth + 80;
      const imgs = track.querySelectorAll("img");

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.min(frames.length, Math.floor(self.progress * frames.length) + 1);
            if (counterRef.current) counterRef.current.textContent = String(idx).padStart(2, "0");
            if (progressRef.current) progressRef.current.style.transform = `scaleX(${self.progress})`;
          },
        },
      });

      // Each image drifts against the direction of travel
      imgs.forEach((img) => {
        gsap.fromTo(
          img,
          { xPercent: -8 },
          { xPercent: 8, ease: "none", scrollTrigger: { containerAnimation: tween, trigger: img, start: "left right", end: "right left", scrub: true } }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative flex flex-col overflow-hidden bg-sand text-ink lg:h-screen"
    >
      <div className="flex flex-col gap-6 px-6 pt-24 md:px-10 md:pt-32 lg:flex-row lg:items-end lg:justify-between lg:pt-28">
        <div>
          <Eyebrow className="text-ink/60">Life at the studio</Eyebrow>
          <Reveal as="h2" type="lines" className="mt-6 font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] tracking-[-0.02em]">
            {"Quiet rooms,\n*good* company."}
          </Reveal>
        </div>
        <FadeUp className="flex items-center gap-6 text-[11px] uppercase tracking-[0.18em] text-ink/60">
          <span className="tabular-nums">
            <span ref={counterRef}>01</span> / {String(frames.length).padStart(2, "0")}
          </span>
          <span className="relative hidden h-px w-40 bg-ink/20 lg:block">
            <span ref={progressRef} className="absolute inset-0 origin-left scale-x-0 bg-ink" />
          </span>
          <span className="hidden lg:inline">Scroll to pan</span>
        </FadeUp>
      </div>

      <div className="relative mt-10 flex-1 lg:mt-0 lg:flex lg:items-end">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-16 will-change-transform [-ms-overflow-style:none] [scrollbar-width:none] md:px-10 lg:snap-none lg:overflow-visible lg:pb-20 [&::-webkit-scrollbar]:hidden"
        >
          {frames.map((f, i) => (
            <figure
              key={f.caption}
              className={cn(
                "group shrink-0 snap-start",
                f.size === "wide" && "w-[82vw] md:w-[60vw] lg:w-[38vw]",
                f.size === "tall" && "w-[66vw] md:w-[40vw] lg:w-[24vw]",
                f.size === "square" && "w-[72vw] md:w-[46vw] lg:w-[30vw]"
              )}
            >
              <div
                className={cn(
                  "relative overflow-hidden bg-ink/10",
                  f.size === "wide" && "aspect-[4/3]",
                  f.size === "tall" && "aspect-[3/4]",
                  f.size === "square" && "aspect-square"
                )}
              >
                <img
                  src={f.src}
                  alt={f.caption}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full scale-[1.18] object-cover transition-[filter] duration-700 group-hover:grayscale-0 lg:grayscale-[0.25]"
                />
                <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-sand/60 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-sand opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 lg:translate-y-2">
                  {f.place}
                </span>
              </div>
              <figcaption className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-ink/60">
                <span>{f.caption}</span>
                <span>{String(i + 1).padStart(2, "0")}</span>
              </figcaption>
            </figure>
          ))}
          <div className="flex w-[70vw] shrink-0 items-center lg:w-[30vw]">
            <FadeUp className="max-w-xs">
              <p className="font-serif text-2xl leading-[1.1] md:text-3xl">
                Most of our days look like this. Some of them look like a beach in October.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

