import { useEffect, useRef } from "react";
import { Asterisk } from "lucide-react";
const ITEMS = [
    { text: "Direct Engineering Dispatch", serif: false },
    { text: "confidential by default", serif: true },
    { text: "24-Hour SLA Commitment", serif: false },
    { text: "senior engineers only", serif: true },
    { text: "Zero Vendor Lock-In", serif: false },
    { text: "full IP transfer", serif: true },
];
function Chunk({ prefix }) {
    return (<div className="marquee-chunk" aria-hidden={prefix !== "a"}>
      {ITEMS.map((it, i) => (<span key={`${prefix}-${i}`} className={`marquee-item ${it.serif ? "serif" : ""}`}>
          <span className="mq-icon">
            <Asterisk size={15}/>
          </span>
          {it.text}
        </span>))}
    </div>);
}
export default function Marquee() {
    const trackRef = useRef(null);
    // skew marquee with smoothed scroll velocity (lerped physics feel)
    useEffect(() => {
        let raf = 0;
        const loop = () => {
            const v = window.__scrollVel || 0;
            const skew = Math.max(-6, Math.min(6, v * 0.55));
            if (trackRef.current) {
                trackRef.current.style.setProperty("skew", `${skew}deg`);
                trackRef.current.style.transform = `skewX(${skew}deg)`;
            }
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, []);
    return (<div className="marquee-band" data-rv>
      <div ref={trackRef}>
        <div className="marquee-track">
          <Chunk prefix="a"/>
          <Chunk prefix="b"/>
        </div>
      </div>
    </div>);
}
