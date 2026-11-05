import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
export default function Cursor() {
    const [hovering, setHovering] = useState(false);
    const [visible, setVisible] = useState(false);
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const ringX = useSpring(x, { stiffness: 350, damping: 32, mass: 0.6 });
    const ringY = useSpring(y, { stiffness: 350, damping: 32, mass: 0.6 });
    useEffect(() => {
        const move = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setVisible(true);
            const target = e.target;
            setHovering(!!target.closest("a, button, [data-hover]"));
        };
        const leave = () => setVisible(false);
        window.addEventListener("mousemove", move, { passive: true });
        document.documentElement.addEventListener("mouseleave", leave);
        return () => {
            window.removeEventListener("mousemove", move);
            document.documentElement.removeEventListener("mouseleave", leave);
        };
    }, [x, y]);
    return (<div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden [@media(pointer:fine)]:block" style={{ opacity: visible ? 1 : 0 }}>
      {/* trailing ring */}
      <motion.div style={{ x: ringX, y: ringY }} className="absolute top-0 left-0">
        <motion.div animate={{ scale: hovering ? 1.8 : 1 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-acid/70" style={{ width: 38, height: 38 }}/>
      </motion.div>
      {/* dot */}
      <motion.div style={{ x, y }} className="absolute top-0 left-0">
        <motion.div animate={{ scale: hovering ? 0.4 : 1 }} className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-acid" style={{ width: 8, height: 8 }}/>
      </motion.div>
    </div>);
}
