import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Radio } from "lucide-react";
function Roll({ text }) {
    return (<span className="roll">
      <span className="roll-inner">
        <span>{text}</span>
        <span aria-hidden="true">{text}</span>
      </span>
    </span>);
}
const BASE = "https://rovaware.com";
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [dropOpen, setDropOpen] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (<header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-bg"/>
      <div className="nav-inner">
        <a href={`${BASE}/`} className="nav-brand ld" style={{ ["--d"]: "150ms" }}>
          <div className="brand-icon-box">
            <img src="/assets/rovaware_icon.png?v=12" alt="RovaWare" className="brand-logo-img" />
          </div>
          <span className="brand-divider" aria-hidden="true" />
          <div className="brand-text-block">
            <div className="brand-text">
              <span className="brand-text-main">ROVA</span>
              <span className="brand-text-accent">WARE</span>
            </div>
            <div className="brand-tagline">ENGINEERING THE DIGITAL FUTURE</div>
          </div>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {[
            { label: "Our Work", href: `${BASE}/#work`, d: 230 },
            { label: "Services", href: `${BASE}/#services`, d: 300 },
            { label: "Blog", href: `${BASE}/blog`, d: 370 },
        ].map((l) => (<a key={l.label} href={l.href} className="nav-link ld" style={{ ["--d"]: `${l.d}ms` }}>
              <Roll text={l.label}/>
            </a>))}

          <div style={{ position: "relative" }} onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
            <a href={`${BASE}/about/contact`} className="nav-link active ld" style={{ ["--d"]: "440ms", display: "inline-flex", alignItems: "center", gap: 4 }} onClick={(e) => e.preventDefault()}>
              <Roll text="About"/>
              <ChevronDown size={13} style={{
            transition: "transform .45s cubic-bezier(0.16,1,0.3,1)",
            transform: dropOpen ? "rotate(180deg)" : "rotate(0deg)",
        }}/>
            </a>
            {/* dropdown */}
            <div style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            paddingTop: 14,
            transform: `translateX(-50%) translateY(${dropOpen ? 0 : -6}px)`,
            opacity: dropOpen ? 1 : 0,
            pointerEvents: dropOpen ? "auto" : "none",
            transition: "all .45s cubic-bezier(0.16,1,0.3,1)",
            minWidth: 240,
        }}>
              <div style={{
            background: "rgba(10, 17, 12, .92)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(52,211,153,.22)",
            borderRadius: 14,
            padding: 8,
            boxShadow: "0 24px 60px rgba(0,0,0,.55)",
        }}>
                {[
            { label: "About Company", desc: "Who we are & mission", href: `${BASE}/about/company` },
            { label: "Contact", desc: "Direct engineering dispatch", href: `${BASE}/about/contact`, active: true },
            { label: "Book a Project", desc: "Intake & scoping form", href: `${BASE}/about/book` },
        ].map((d, i) => (<a key={d.label} href={d.href} style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                padding: "10px 12px",
                borderRadius: 9,
                textDecoration: "none",
                opacity: dropOpen ? 1 : 0,
                transform: dropOpen ? "translateY(0)" : "translateY(8px)",
                transition: `all .5s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms`,
                background: d.active ? "rgba(52,211,153,.1)" : "transparent",
                border: d.active
                    ? "1px solid rgba(52,211,153,.3)"
                    : "1px solid transparent",
            }} className="nav-dd-item" onMouseEnter={(e) => {
                e.currentTarget.style.background =
                    "rgba(52,211,153,.08)";
            }} onMouseLeave={(e) => {
                e.currentTarget.style.background = d.active
                    ? "rgba(52,211,153,.1)"
                    : "transparent";
            }}>
                    <span style={{
                fontSize: 13,
                fontWeight: 700,
                color: d.active ? "#34d399" : "#f2fbf6",
                fontFamily: "var(--font-heading)",
            }}>
                      {d.label}
                    </span>
                    <span style={{ fontSize: 11, color: "#6f8479" }}>{d.desc}</span>
                  </a>))}
              </div>
            </div>
          </div>
        </nav>

        <a href={`${BASE}/about/book`} className="nav-cta ld" data-magnetic="0.28" style={{ ["--d"]: "520ms" }}>
          <Radio size={13}/>
          <span>Book a Project</span>
          <ArrowUpRight size={13}/>
          <span className="shine"/>
        </a>
      </div>
    </header>);
}
