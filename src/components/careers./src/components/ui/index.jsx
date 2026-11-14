import React from "react";
import { HoverReveal } from "../anim/HoverReveal";
import { cn } from "../../utils/cn";

/* ------------------------------------------------------------------ */
/* Arrow link — underlined label with a drifting arrow                 */
/* ------------------------------------------------------------------ */
const arrows = { right: "→", down: "↓", up: "↑", external: "↗" };

export function ArrowLink({ label, direction = "right", className, ...rest }) {
  return (
    <a
      {...rest}
      className={cn("group inline-flex items-center gap-3 py-1.5 text-sm uppercase tracking-[0.04em] md:text-base", className)}
    >
      <span className="border-b border-current pb-px">
        <HoverReveal text={label} />
      </span>
      <span
        className={cn(
          "inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          direction === "right" && "group-hover:translate-x-1.5",
          direction === "down" && "group-hover:translate-y-1",
          direction === "up" && "group-hover:-translate-y-1",
          direction === "external" && "group-hover:translate-x-1 group-hover:-translate-y-1"
        )}
        aria-hidden="true"
      >
        {arrows[direction]}
      </span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Pill button — rounded border that fills with ink on hover           */
/* ------------------------------------------------------------------ */
const pillBase =
  "group inline-flex items-center justify-center gap-2 rounded-full border uppercase tracking-[0.18em] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer select-none";

function pillClasses({ tone = "ink", active, size = "md", className }) {
  return cn(
    pillBase,
    size === "md" ? "px-6 py-3 text-[11px]" : "px-4 py-2 text-[10px]",
    tone === "ink" &&
      (active
        ? "border-ink bg-ink text-sand"
        : "border-ink/40 text-ink hover:border-ink hover:bg-ink hover:text-sand"),
    tone === "sand" &&
      (active
        ? "border-sand bg-sand text-ink"
        : "border-sand/60 text-sand hover:border-sand hover:bg-sand hover:text-ink"),
    className
  );
}

export function PillButton({
  label,
  tone,
  active,
  size,
  className,
  ...rest
}) {
  return (
    <button type="button" {...rest} className={pillClasses({ label, tone, active, size, className })}>
      <HoverReveal text={label} />
    </button>
  );
}

export function PillLink({
  label,
  tone,
  active,
  size,
  className,
  ...rest
}) {
  return (
    <a {...rest} className={pillClasses({ label, tone, active, size, className })}>
      <HoverReveal text={label} />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Eyebrow — tiny uppercase label                                      */
/* ------------------------------------------------------------------ */
export function Eyebrow({ children, className }) {
  return (
    <p className={cn("flex items-center gap-3 text-[11px] uppercase tracking-[0.18em]", className)}>
      <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee — repeating rows of text                                    */
/* ------------------------------------------------------------------ */
export function Marquee({ text, rows = 3, className, rowClassName, separator = "" }) {
  const items = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className={cn("flex w-full flex-col overflow-hidden", className)} aria-hidden="true">
      {Array.from({ length: rows }).map((_, r) => (
        <div
          key={r}
          className={cn(
            "flex w-max whitespace-nowrap will-change-transform",
            r % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse",
            rowClassName
          )}
        >
          {[0, 1].map((half) => (
            <span key={half} className="flex shrink-0">
              {items.map((i) => (
                <span key={i} className="px-[0.35em]">
                  {text}
                  {separator && <span className="px-[0.35em] opacity-40">{separator}</span>}
                </span>
              ))}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Round icon button (slider controls)                                 */
/* ------------------------------------------------------------------ */
export function RoundButton({
  children,
  tone = "sand",
  className,
  ...rest
}) {
  return (
    <button
      type="button"
      {...rest}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 cursor-pointer",
        tone === "sand" ? "bg-sand text-ink" : "bg-ink text-sand",
        className
      )}
    >
      {children}
    </button>
  );
}

