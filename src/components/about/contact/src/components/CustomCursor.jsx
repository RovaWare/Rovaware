import { useEffect, useRef } from "react";
const FINE = window.matchMedia?.("(pointer: fine)").matches;
const HOVERABLE = "a, button, input, select, textarea, label, [data-hover]";
/**
 * Dual-lerp custom cursor (dot = tight follow, ring = lazy trail)
 * + magnetic pull on [data-magnetic] elements.
 */
export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    useEffect(() => {
        if (!FINE)
            return;
        const dot = dotRef.current;
        const ring = ringRef.current;
        let mx = innerWidth / 2;
        let my = innerHeight / 2;
        let dx = mx, dy = my;
        let rx = mx, ry = my;
        let seen = false;
        let raf = 0;
        const onMove = (e) => {
            mx = e.clientX;
            my = e.clientY;
            if (!seen) {
                seen = true;
                dx = rx = mx;
                dy = ry = my;
            }
        };
        const loop = () => {
            dx += (mx - dx) * 0.4;
            dy += (my - dy) * 0.4;
            rx += (mx - rx) * 0.14;
            ry += (my - ry) * 0.14;
            dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
            ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        const onOver = (e) => {
            const t = e.target;
            const hit = t.closest?.(HOVERABLE);
            document.body.classList.toggle("c-hover", !!hit);
            const label = t.closest?.("[data-cursor-label]");
            document.body.classList.toggle("c-label", !!label);
            if (label) {
                ring.querySelector(".cursor-label").textContent =
                    label.dataset.cursorLabel || "";
            }
        };
        // magnetic elements — pull toward cursor inside a radius
        const magnets = Array.from(document.querySelectorAll("[data-magnetic]"));
        const cleanups = [];
        for (const el of magnets) {
            const strength = Number(el.dataset.magnetic) || 0.32;
            const move = (e) => {
                const r = el.getBoundingClientRect();
                const cx = r.left + r.width / 2;
                const cy = r.top + r.height / 2;
                const distX = e.clientX - cx;
                const distY = e.clientY - cy;
                const dist = Math.hypot(distX, distY);
                const range = Math.max(r.width, r.height) * 1.4;
                if (dist < range) {
                    el.style.transition = "transform 0.12s linear";
                    el.style.transform = `translate(${distX * strength}px, ${distY * strength}px)`;
                }
                else if (el.style.transform) {
                    release();
                }
            };
            const release = () => {
                el.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
                el.style.transform = "";
            };
            window.addEventListener("mousemove", move);
            el.addEventListener("mouseleave", release);
            cleanups.push(() => {
                window.removeEventListener("mousemove", move);
                el.removeEventListener("mouseleave", release);
            });
        }
        window.addEventListener("mousemove", onMove, { passive: true });
        document.addEventListener("mouseover", onOver, { passive: true });
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", onOver);
            cleanups.forEach((fn) => fn());
            document.body.classList.remove("c-hover", "c-label");
        };
    }, []);
    if (!FINE)
        return null;
    return (<>
      <div ref={ringRef} className="cursor-ring">
        <span className="cursor-label"/>
      </div>
      <div ref={dotRef} className="cursor-dot"/>
    </>);
}
