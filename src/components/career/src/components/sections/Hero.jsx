import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../../lib/gsap";
import { Reveal } from "../anim/Reveal";
import { FadeUp } from "../anim/FadeUp";
import { ArrowLink } from "../ui";
import { images, jobs, site } from "../../data/site";

export function Hero({ ready }) {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);
  const scrollHintRef = useRef(null);

  // Slow zoom-out on entrance
  useLayoutEffect(() => {
    const img = imgRef.current;
    if (!img || prefersReducedMotion()) return;
    gsap.set(img, { scale: 1.18 });
    if (!ready) return;
    const ctx = gsap.context(() => {
      gsap.to(img, { scale: 1, duration: 2.4, ease: "still" });
    });
    return () => ctx.revert();
  }, [ready]);

  // Content drifts and fades as the page scrolls over the hero
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { y: 0, autoAlpha: 1 },
        {
          y: -80,
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { scale: 1 },
          {
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
      if (scrollHintRef.current) {
        gsap.fromTo(
          scrollHintRef.current,
          { autoAlpha: 1 },
          {
            autoAlpha: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=35%",
              scrub: true,
            },
          }
        );
      }
    }, section);
    return () => ctx.revert();
  }, []);

  const metaClass = "text-[11px] uppercase tracking-[0.18em] text-white md:text-sm lg:text-base";

  return (
    <section
      id="top"
      ref={sectionRef}
      className="sticky top-0 z-0 h-[100svh] min-h-[100svh] w-full select-none overflow-hidden bg-black text-white lg:h-screen lg:min-h-screen"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          ref={imgRef}
          src={images.hero}
          alt="The STILL / FORM studio at golden hour"
          className="h-full w-full object-cover will-change-transform"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div ref={contentRef} className="absolute inset-0 z-10">
        <div className="absolute left-6 top-[16%] md:left-10 lg:top-[18%]">
          <Reveal
            as="h1"
            type="lines"
            trigger="manual"
            play={ready}
            delay={0.15}
            className="font-serif text-[clamp(2.75rem,12vw,4.5rem)] leading-[0.94] text-white md:text-[5rem] lg:text-[5.64rem]"
          >
            {"Engineering with\n*purpose.*"}
          </Reveal>

          <FadeUp
            trigger="manual"
            play={ready}
            delay={0.9}
            y={24}
            className="mt-5 flex flex-col gap-0 sm:flex-row sm:flex-wrap sm:gap-6"
          >
            <ArrowLink href="#positions" label="View open roles" className="lg:text-lg" />
            <ArrowLink href="#culture" label="Life at the studio" className="lg:text-lg" />
          </FadeUp>
        </div>

        <div className="pointer-events-none absolute bottom-[12%] left-0 right-0 px-6 md:px-10">
          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-2 md:flex md:items-end md:justify-between md:gap-0">
            <Reveal as="p" type="chars" trigger="manual" play={ready} delay={1.0} className={metaClass}>
              {site.breadcrumb.join(" / ")}
            </Reveal>
            <Reveal as="p" type="chars" trigger="manual" play={ready} delay={1.1} className={metaClass}>
              {`${jobs.length} Open Roles`}
            </Reveal>
            <Reveal as="p" type="chars" trigger="manual" play={ready} delay={1.2} className={metaClass}>
              {site.locations.join(" · ")}
            </Reveal>
            <Reveal as="p" type="chars" trigger="manual" play={ready} delay={1.3} className={metaClass}>
              {String(site.year)}
            </Reveal>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-[22%] right-6 hidden max-w-xs md:block md:right-10 lg:bottom-[24%] lg:max-w-sm">
          <Reveal
            as="p"
            type="words"
            trigger="manual"
            play={ready}
            delay={1.2}
            className="text-right font-serif text-xl leading-[1.15] text-white/90 lg:text-2xl"
          >
            {"A career is more than its title. It is how you spend the *light* of your days."}
          </Reveal>
        </div>
      </div>

      <div
        ref={scrollHintRef}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/70"
      >
        <span>Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-white/20">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-line_1.8s_cubic-bezier(0.76,0,0.24,1)_infinite] bg-white" />
        </span>
      </div>
      <style>{`@keyframes scroll-line { 0% { transform: translateY(-100%); } 60%, 100% { transform: translateY(200%); } }`}</style>
    </section>
  );
}

