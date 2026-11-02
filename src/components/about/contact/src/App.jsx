import { useState } from "react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { useLenis } from "./hooks/useLenis";
import { useRevealObserver } from "./hooks/useInView";
export default function App() {
    const [loaded, setLoaded] = useState(false);
    // smooth inertia scrolling + scroll-triggered reveal orchestra
    useLenis(loaded);
    useRevealObserver(loaded);
    const finish = () => {
        setLoaded(true);
        document.documentElement.classList.add("is-loaded");
    };
    return (<>
      <CustomCursor />
      {!loaded && <Preloader onDone={finish}/>}
      <div className="page-root">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <div className="grain" aria-hidden="true"/>
    </>);
}
