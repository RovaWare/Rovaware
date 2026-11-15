import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../../lib/gsap";
import { Reveal } from "../anim/Reveal";
import { FadeUp } from "../anim/FadeUp";
import { HoverReveal } from "../anim/HoverReveal";
import { ArrowLink, Eyebrow, PillButton, PillLink } from "../ui";
import { departments, jobs, locations, site } from "../../data/site";
import { cn } from "../../utils/cn";

function applyHref(job) {
  const subject = encodeURIComponent(`Application — ${job.title} (${job.location})`);
  const body = encodeURIComponent(
    `Hello ${site.name},\n\nI would like to apply for the ${job.title} role in ${job.location}.\n\nA little about me:\n\n\nLinks to my work:\n\n\nThank you.`
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

function JobRow({ job, index, open, onToggle }) {
  const panelId = `job-panel-${job.id}`;
  return (
    <li
      className={cn(
        "ink-row group border-t border-ink/20 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        open ? "text-sand" : "text-ink hover:text-sand"
      )}
      data-open={open}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="grid w-full cursor-pointer grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 px-3 py-6 text-left md:grid-cols-[4rem_1.6fr_1fr_1fr_3rem] md:px-5 md:py-8"
      >
        <span className="text-[11px] uppercase tracking-[0.18em] opacity-50">{String(index + 1).padStart(2, "0")}</span>
        <span className="font-serif text-[1.65rem] leading-[1] tracking-[-0.01em] md:text-[2.4rem]">
          <HoverReveal text={job.title} />
        </span>
        <span className="hidden text-sm uppercase tracking-[0.12em] opacity-70 md:block">{job.department}</span>
        <span className="hidden text-sm uppercase tracking-[0.12em] opacity-70 md:block">
          {job.location} · {job.type}
        </span>
        <span className="justify-self-end" aria-hidden="true">
          <span
            className={cn(
              "relative block h-4 w-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              open ? "rotate-45" : "rotate-0 group-hover:rotate-90"
            )}
          >
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
          </span>
        </span>
        <span className="col-span-3 mt-2 flex gap-3 pl-[3.5rem] text-[11px] uppercase tracking-[0.14em] opacity-60 md:hidden">
          <span>{job.department}</span>
          <span>·</span>
          <span>{job.location}</span>
          <span>·</span>
          <span>{job.type}</span>
        </span>
      </button>

      <div
        id={panelId}
        className="grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              "grid gap-10 px-3 pb-10 pt-2 transition-all delay-100 duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:grid-cols-[4rem_1fr_1fr_1fr] md:px-5 md:pb-14",
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            <span className="hidden md:block" />
            <div className="flex flex-col gap-6">
              <p className="font-serif text-xl leading-[1.15] md:text-2xl">{job.summary}</p>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] opacity-50">Salary</dt>
                  <dd className="mt-1">{job.salary}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] opacity-50">Type</dt>
                  <dd className="mt-1">{job.type}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] opacity-50">Location</dt>
                  <dd className="mt-1">{job.location}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] opacity-50">Team</dt>
                  <dd className="mt-1">{job.department}</dd>
                </div>
              </dl>
              <div className="flex flex-wrap gap-3 pt-2">
                <PillLink href={applyHref(job)} label="Apply for this role" tone="sand" />
                <PillLink
                  href={`mailto:${site.email}?subject=${encodeURIComponent(`Question — ${job.title}`)}`}
                  label="Ask a question"
                  tone="sand"
                  className="border-transparent bg-sand/10 hover:bg-sand"
                />
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] opacity-50">What you will do</p>
              <ul className="mt-4 flex flex-col gap-3 text-sm leading-[1.45] opacity-90 md:text-[15px]">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span className="mt-[0.55em] h-px w-4 shrink-0 bg-current opacity-50" aria-hidden="true" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] opacity-50">What you bring</p>
              <ul className="mt-4 flex flex-col gap-3 text-sm leading-[1.45] opacity-90 md:text-[15px]">
                {job.requirements.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span className="mt-[0.55em] h-px w-4 shrink-0 bg-current opacity-50" aria-hidden="true" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export function Positions() {
  const [dept, setDept] = useState("All");
  const [loc, setLoc] = useState("All");
  const [openId, setOpenId] = useState(jobs[0]?.id ?? null);
  const listRef = useRef(null);

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const matchDept = dept === "All" || j.department === dept;
      const matchLoc = loc === "All" || j.location === loc;
      return matchDept && matchLoc;
    });
  }, [dept, loc]);

  // Subtle entrance of list rows on mount
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const rows = list.querySelectorAll("li.ink-row");
      gsap.fromTo(
        rows,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "still",
          stagger: 0.05,
          scrollTrigger: { trigger: list, start: "top 80%", once: true },
        }
      );

      // Fail-safe: if already visible, reveal immediately
      if (typeof window !== "undefined") {
        const rect = list.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
          gsap.to(rows, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.04 });
        }
      }
    }, list);
    return () => ctx.revert();
  }, []);

  return (
    <section id="positions" className="relative bg-sand px-6 pb-28 pt-24 text-ink md:px-10 md:pb-40 md:pt-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow className="text-ink/60">Open roles</Eyebrow>
          <Reveal as="h2" type="lines" className="mt-8 font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[0.92] tracking-[-0.02em]">
            {"A room for\n*your* craft."}
          </Reveal>
        </div>
        <FadeUp className="max-w-xs text-base leading-[1.45] text-ink/70 md:text-right md:text-lg">
          <p>
            {jobs.length} roles open across Lisbon, Copenhagen and remote. Salaries are transparent, always.
          </p>
        </FadeUp>
      </div>

      {/* Filters */}
      <div className="mt-14 flex flex-col gap-4 border-b border-ink/20 pb-8 md:mt-20 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 text-[10px] uppercase tracking-[0.18em] text-ink/50">Team:</span>
          <PillButton label="All" active={dept === "All"} size="sm" onClick={() => setDept("All")} />
          {departments.map((d) => (
            <PillButton key={d} label={d} active={dept === d} size="sm" onClick={() => setDept(d)} />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 text-[10px] uppercase tracking-[0.18em] text-ink/50">Location:</span>
          <PillButton label="All" active={loc === "All"} size="sm" onClick={() => setLoc("All")} />
          {locations.map((l) => (
            <PillButton key={l} label={l} active={loc === l} size="sm" onClick={() => setLoc(l)} />
          ))}
        </div>
      </div>

      {/* Job listings */}
      <ul ref={listRef} className="mt-2 border-b border-ink/20">
        {filtered.length === 0 ? (
          <li className="py-16 text-center text-ink/60">
            <p className="font-serif text-2xl">No open roles match those filters.</p>
            <p className="mt-3 text-sm">
              We welcome unsolicited letters at{" "}
              <a href={`mailto:${site.email}`} className="underline">
                {site.email}
              </a>
              .
            </p>
          </li>
        ) : (
          filtered.map((job, i) => (
            <JobRow
              key={job.id}
              job={job}
              index={i}
              open={openId === job.id}
              onToggle={() => setOpenId((curr) => (curr === job.id ? null : job.id))}
            />
          ))
        )}
      </ul>

      {/* Speculative footer */}
      <div className="mt-12 flex flex-col gap-4 text-sm text-ink/70 sm:flex-row sm:items-center sm:justify-between">
        <p>Don&apos;t see the right shape of role? We often make room for the right person.</p>
        <ArrowLink href={`mailto:${site.email}?subject=Unsolicited%20application`} label="Send a portfolio" direction="external" />
      </div>
    </section>
  );
}

