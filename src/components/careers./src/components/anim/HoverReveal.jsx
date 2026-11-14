import React from "react";
import { cn } from "../../utils/cn";

export function HoverReveal({ text, className }) {
  const chars = Array.from(text);

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

