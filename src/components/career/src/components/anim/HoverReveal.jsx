import { cn } from "../../utils/cn";

/**
 * Staggered character flip on hover — the link treatment used throughout STILL / FORM.
 * Two identical lines are stacked in the same grid cell; on `.group:hover`
 * the visible line slides up and out while the duplicate slides in from below.
 */
export function HoverReveal({ text = "", className }) {
  const chars = Array.from(String(text ?? ""));

  const renderLine = (hidden) => (
    <span className="hover-reveal-line" aria-hidden={hidden ? "true" : undefined}>
      {chars.map((c, i) => (
        <span key={i} className="hover-reveal-char" style={{ "--i": i }}>
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );

  return (
    <span className={cn("hover-reveal-track", className)}>
      {renderLine(false)}
      {renderLine(true)}
    </span>
  );
}

