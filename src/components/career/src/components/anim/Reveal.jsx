import { createElement, useLayoutEffect, useMemo, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../../lib/gsap";
import { cn } from "../../utils/cn";

function tokenize(line) {
  const tokens = [];
  let italic = false;
  for (const raw of line.split(/\s+/).filter(Boolean)) {
    let word = raw;
    let startsItalic = false;
    let endsItalic = false;
    if (word.startsWith("*")) {
      startsItalic = true;
      word = word.slice(1);
    }
    if (word.endsWith("*")) {
      endsItalic = true;
      word = word.slice(0, -1);
    }
    if (startsItalic) italic = true;
    tokens.push({ text: word, italic });
    if (endsItalic) italic = false;
  }
  return tokens;
}

export function Reveal({
  as = "div",
  type = "words",
  children,
  className,
  italicClassName = "font-serif italic",
  delay = 0,
  stagger,
  duration = 1.1,
  trigger = "scroll",
  play = false,
  start = "top 88%",
  id,
}) {
  const ref = useRef(null);
  const tweenRef = useRef(null);

  const strChildren = typeof children === "string" ? children : String(children ?? "");
  const lines = useMemo(() => strChildren.split("\n").map(tokenize), [strChildren]);

  const content = useMemo(() => {
    if (type === "lines") {
      return lines.map((tokens, li) => (
        <span key={li} className="line-mask">
          <span>
            {tokens.map((t, ti) => (
              <span key={ti} className={cn(t.italic && italicClassName)}>
                {t.text}
                {ti < tokens.length - 1 ? " " : ""}
              </span>
            ))}
          </span>
        </span>
      ));
    }

    return lines.map((tokens, li) => (
      <span key={li} className="block">
        {tokens.map((t, ti) => {
          const trailing = ti < tokens.length - 1 ? " " : "";
          if (type === "chars") {
            return (
              <span key={ti} className={cn(t.italic && italicClassName)}>
                <span className="inline-block whitespace-nowrap">
                  {Array.from(t.text).map((c, ci) => (
                    <span key={ci} className="char-mask">
                      <span>{c}</span>
                    </span>
                  ))}
                </span>
                {trailing}
              </span>
            );
          }
          return (
            <span key={ti} className={cn(t.italic && italicClassName)}>
              <span className="word-mask">
                <span>{t.text}</span>
              </span>
              {trailing}
            </span>
          );
        })}
      </span>
    ));
  }, [lines, type, italicClassName]);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll(".line-mask > span, .word-mask > span, .char-mask > span");
    if (!targets.length) return;

    if (prefersReducedMotion()) {
      gsap.set(targets, { yPercent: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const defaultStagger = type === "chars" ? 0.018 : type === "words" ? 0.045 : 0.12;
      const tween = gsap.fromTo(
        targets,
        { yPercent: 115 },
        {
          yPercent: 0,
          duration,
          delay,
          ease: "still",
          stagger: stagger ?? defaultStagger,
          paused: true,
          overwrite: true,
        }
      );
      tweenRef.current = tween;

      if (trigger === "manual") {
        if (play) {
          tween.play();
        }
      } else {
        ScrollTrigger.create({
          trigger: root,
          start,
          once: true,
          onEnter: () => tween.play(),
          onRefresh: (self) => {
            if (self.progress > 0) tween.play();
          },
        });
      }
    }, root);

    return () => {
      ctx.revert();
      tweenRef.current = null;
    };
  }, [children, type, delay, stagger, duration, trigger, start, play]);

  useLayoutEffect(() => {
    if (trigger === "manual" && play) {
      tweenRef.current?.play();
    }
  }, [play, trigger]);

  return createElement(as, { ref, className, id, "aria-label": strChildren.replace(/\*/g, "") }, content);
}

