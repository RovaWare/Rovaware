import { useEffect, useRef, useState } from "react";
const STATUSES = [
    "Initializing contact module",
    "Loading encryption layers",
    "Syncing engineering telemetry",
    "Compiling secure channels",
    "Interface ready",
];
/** Gate the preloader so it can't trap the page under reduced motion. */
const FAST = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
export default function Preloader({ onDone }) {
    const [count, setCount] = useState(0);
    const [statusIdx, setStatusIdx] = useState(0);
    const [exiting, setExiting] = useState(false);
    const lineRef = useRef(null);
    useEffect(() => {
        const duration = FAST ? 250 : 2100;
        const t0 = performance.now();
        let raf = 0;
        const tick = (now) => {
            const t = Math.min(1, (now - t0) / duration);
            // ease-out curve for counter physics
            const eased = 1 - Math.pow(1 - t, 3.2);
            const val = Math.round(eased * 100);
            setCount(val);
            if (lineRef.current)
                lineRef.current.style.transform = `scaleX(${eased})`;
            setStatusIdx(Math.min(STATUSES.length - 1, Math.floor(t * STATUSES.length)));
            if (t < 1)
                raf = requestAnimationFrame(tick);
            else {
                setTimeout(() => setExiting(true), 320);
                setTimeout(onDone, FAST ? 420 : 1280);
            }
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const word = "ROVA".split("");
    const word2 = "WARE".split("");
    return (<div className={`loader ${exiting ? "exit" : ""}`} aria-hidden="true">
      <div className="loader-grid-lines"/>
      <div className="loader-center">
        <div className="loader-word">
          {word.map((c, i) => (<span key={`a-${i}`} className="lw" style={{ animationDelay: `${80 + i * 55}ms` }}>
              {c}
            </span>))}
          {word2.map((c, i) => (<span key={`b-${i}`} className="lw green" style={{ animationDelay: `${80 + (i + 4) * 55}ms` }}>
              {c}
            </span>))}
        </div>
        <div className="loader-tag">
          <span>Engineering the digital future</span>
        </div>
        <div className="loader-line">
          <i ref={lineRef}/>
        </div>
      </div>
      <div className="loader-status">
        {STATUSES[statusIdx]}
        {".".padEnd(1 + (Math.floor(count / 12) % 3), ".")}
      </div>
      <div className="loader-count-wrap">
        <span className="loader-count">{count}</span>
        <span className="loader-count-pct">%</span>
      </div>
    </div>);
}
