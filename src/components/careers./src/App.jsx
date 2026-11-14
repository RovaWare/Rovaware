import { useCallback, useEffect, useState } from "react";
import { ScrollTrigger } from "./lib/gsap";
import { SmoothScrollProvider } from "./lib/SmoothScroll";
import { Preloader } from "./components/Preloader";
import { Nav } from "./components/Nav";
import { Hero } from "./components/sections/Hero";
import { Intro } from "./components/sections/Intro";
import { MarqueeBreak, Values } from "./components/sections/Values";
import { Benefits } from "./components/sections/Benefits";
import { Positions } from "./components/sections/Positions";
import { Process } from "./components/sections/Process";
import { Life } from "./components/sections/Life";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { Footer } from "./components/sections/Footer";

function CareersPage() {
  const [ready, setReady] = useState(true);
  const [showPreloader, setShowPreloader] = useState(false);

  const handlePreloaderDone = useCallback(() => {
    setReady(true);
    setShowPreloader(false);
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, []);

  // Keep ScrollTrigger measurements accurate once images/fonts settle
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh).catch(() => {});
    return () => window.removeEventListener("load", refresh);
  }, []);

  // Start at the top on reload so the preloader and hero sequence align
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grain relative min-h-screen bg-sand text-ink">
      {showPreloader && <Preloader onDone={handlePreloaderDone} />}
      <Nav ready={ready} />

      <main className="overflow-x-clip">
        <Hero ready={ready} />

        {/* Everything below slides over the sticky hero */}
        <div className="relative z-10 rounded-t-[24px] bg-sand shadow-[0_-30px_60px_rgba(0,0,0,0.25)] md:rounded-t-[36px]">
          <Intro />
          <MarqueeBreak />
          <Values />
          <Benefits />
          <Positions />
          <Process />
          <Life />
          <Testimonials />
          <FAQ />
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <SmoothScrollProvider>
      <CareersPage />
    </SmoothScrollProvider>
  );
}

