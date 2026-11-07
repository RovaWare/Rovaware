import { useEffect } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring } from "framer-motion";
import Cursor from "./components/Cursor.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Manifesto from "./components/Manifesto.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Work from "./components/Work.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        mass: 0.4,
    });
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.09 });
        let raf = 0;
        const loop = (time) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        const onClick = (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (!anchor)
                return;
            const hash = anchor.getAttribute("href");
            if (!hash || hash === "#")
                return;
            const el = document.querySelector(hash);
            if (!el)
                return;
            e.preventDefault();
            lenis.scrollTo(el, { offset: -70 });
        };
        document.addEventListener("click", onClick);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            document.removeEventListener("click", onClick);
        };
    }, []);
    return (<div className="cursor-native-off relative min-h-screen bg-ink text-paper selection:bg-acid selection:text-ink">
      {/* scroll progress */}
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-acid"/>

      {/* film grain */}
      <div className="grain pointer-events-none fixed inset-0 z-[70] opacity-[0.07]"/>

      <Cursor />
      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <Process />
        <Work />
        <Testimonials />
        <Faq />
        <Footer />
      </main>
    </div>);
}
