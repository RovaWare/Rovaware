import { useEffect, useRef } from "react";
import { ChevronRight, Radio } from "lucide-react";
const BASE = "https://rovaware.com";
export default function Hero({ onNavigateHome }) {
    const bgWordRef = useRef(null);
    // scroll parallax on the giant outlined background word
    useEffect(() => {
        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                if (bgWordRef.current) {
                    bgWordRef.current.style.transform = `translateX(-50%) translateY(${window.scrollY * 0.16}px)`;
                }
            });
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(raf);
        };
    }, []);
    return (<section className="hero-section">
      <div className="hero-glow" aria-hidden="true"/>
      <div ref={bgWordRef} className="hero-bg-word" aria-hidden="true">
        CONTACT
      </div>

      <div className="container-x" style={{ position: "relative" }}>
        {/* breadcrumb */}
        <nav className="hero-breadcrumb ld" style={{ ["--d"]: "280ms" }} aria-label="Breadcrumb">
          <a
            href="/"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
              }
            }}
          >
            Home
          </a>
          <span className="sep">
            <ChevronRight size={13}/>
          </span>
          <span className="crumb-muted">About</span>
          <span className="sep">
            <ChevronRight size={13}/>
          </span>
          <span className="crumb-current">Contact</span>
        </nav>

        <div style={{ display: "block" }}>
          <div className="hero-badge ld" style={{ ["--d"]: "420ms" }}>
            <Radio size={14} className="badge-icon"/>
            <span>Direct Engineering Dispatch</span>
          </div>
        </div>

        {/* masked line reveal title */}
        <h1 className="hero-title">
          <span className="ml">
            <span style={{ ["--d"]: "520ms" }}>Let's Start a</span>
          </span>
          <span className="ml">
            <span style={{ ["--d"]: "650ms" }}>
              <em className="serif-accent" style={{ fontStyle: "italic" }}>
                Technical Conversation.
              </em>
            </span>
          </span>
        </h1>

        <p className="hero-desc ld" style={{ ["--d"]: "820ms" }}>
          Have an engineering challenge, upcoming project roadmap, or
          architecture consultation request? Reach out directly to our
          engineering leads. Every message is reviewed within 24 hours.
        </p>

        <div className="hero-status ld" style={{ ["--d"]: "980ms" }}>
          <span className="pulse-dot"/>
          <span>Systems Active • Accepting Select New Client Engagements</span>
        </div>
      </div>

      <div className="hero-scroll-hint ld" style={{ ["--d"]: "1300ms" }} aria-hidden="true">
        <span>Scroll</span>
        <span className="hint-line"/>
      </div>
    </section>);
}
