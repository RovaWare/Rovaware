import { useCallback, useEffect, useRef, useState } from "react";
const bookingServices = [
    "Full-Stack Web App",
    "Custom AI & LLM Automation",
    "SaaS Product Development",
    "Mobile Application (React Native)",
    "UI/UX Design & Spatial Systems",
    "Cloud Architecture & DevOps",
    "Performance & Web Vitals Optimization",
    "Codebase Security & Audit",
];
const budgets = [
    {
        id: "tier-1",
        title: "Starter Tier",
        range: "< $5,000",
        description: "Proof-of-concept, MVP, or focused micro-automation",
    },
    {
        id: "tier-2",
        title: "Growth Tier",
        range: "$5,000 \u2013 $15,000",
        description: "Production-ready web application or full AI agent system",
    },
    {
        id: "tier-3",
        title: "Scale Tier",
        range: "$15,000 \u2013 $35,000",
        description: "Multi-tenant SaaS platform with advanced billing and infrastructure",
    },
    {
        id: "tier-4",
        title: "Enterprise",
        range: "$35,000+",
        description: "Distributed architecture and ongoing retainers",
    },
];
const timelines = [
    "Urgent (< 2 Weeks)",
    "Standard (2 \u2013 4 Weeks)",
    "Comprehensive (1 \u2013 3 Months)",
    "Flexible / Ongoing Partnership",
];
const featuredServices = [
    {
        title: "Web & SaaS Development",
        description: "Thoughtful digital products, built to grow.",
        image: "/images/service-web.jpg",
        selection: "Full-Stack Web App",
    },
    {
        title: "AI & Automation",
        description: "Smarter systems that do more for your business.",
        image: "/images/service-ai.jpg",
        selection: "Custom AI & LLM Automation",
    },
    {
        title: "Product & Interface Design",
        description: "Useful, memorable experiences for real people.",
        image: "/images/service-design.jpg",
        selection: "UI/UX Design & Spatial Systems",
    },
    {
        title: "Cloud & DevOps",
        description: "A strong foundation for everything that comes next.",
        image: "/images/service-cloud.jpg",
        selection: "Cloud Architecture & DevOps",
    },
];
const projects = [
    {
        name: "ASA EPC",
        category: "Solar energy & infrastructure",
        image: "/images/asa-epc.jpg",
        alt: "ASA EPC solar energy platform website",
    },
    {
        name: "Autonomous AI Engine",
        category: "AI solutions & intelligent workflows",
        image: "/images/showcase-ai.jpg",
        alt: "AI workflow and vector retrieval platform",
    },
    {
        name: "Rathore Construction",
        category: "Equipment & civil infrastructure",
        image: "/images/rathore-construction.jpg",
        alt: "Rathore Construction heavy equipment platform website",
    },
];
const initialBrief = {
    name: "",
    email: "",
    company: "",
    phone: "",
    projectDescription: "",
    referenceLinks: "",
    needNDA: true,
};
function Arrow({ diagonal = false }) {
    return (<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {diagonal ? (<path d="M5 19 19 5M7 5h12v12"/>) : (<path d="M4 12h15M14 7l5 5-5 5"/>)}
    </svg>);
}
function Brand({ onClick }) {
    return (<a className="brand" href="#home" onClick={onClick} aria-label="Rovaware home">
      <img src="/images/rovaware-mark.png" alt=""/>
      <span>
        ROVA<span>WARE</span>
      </span>
    </a>);
}
function SectionLabel({ children }) {
    return (<span className="section-label">
      <span aria-hidden="true"/>
      {children}
    </span>);
}
function StepHeading({ number, title, description }) {
    return (<div className="form-step-heading">
      <span className="form-step-number">{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>);
}
function CallbackDialog({ onClose }) {
    const dialog = useRef(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [time, setTime] = useState("Next 15 Minutes (Immediate)");
    const [topic, setTopic] = useState("Web Development & AI Solutions");
    const [whatsappUrl, setWhatsappUrl] = useState("");
    useEffect(() => {
        const previousFocus = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        dialog.current?.querySelector("button")?.focus();
        function handleKeys(event) {
            if (event.key === "Escape")
                onClose();
            if (event.key !== "Tab" || !dialog.current)
                return;
            const focusable = Array.from(dialog.current.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), select:not([disabled])"));
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last?.focus();
            }
            else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first?.focus();
            }
        }
        document.addEventListener("keydown", handleKeys);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeys);
            previousFocus?.focus();
        };
    }, [onClose]);
    useEffect(() => {
        if (whatsappUrl)
            dialog.current?.querySelector(".callback-confirmation a")?.focus();
    }, [whatsappUrl]);
    function requestCallback(event) {
        event.preventDefault();
        const message = [
            "NEW CALLBACK REQUEST - ROVAWARE STUDIO",
            `Client name: ${name}`,
            `Phone / WhatsApp: ${phone}`,
            `Preferred time: ${time}`,
            `Discussion topic: ${topic}`,
        ].join("\n");
        const url = `https://api.whatsapp.com/send?phone=919752264618&text=${encodeURIComponent(message)}`;
        setWhatsappUrl(url);
        window.open(url, "_blank", "noopener,noreferrer");
    }
    return (<div className="dialog-backdrop" onClick={(event) => { if (event.target === event.currentTarget)
        onClose(); }}>
      <div className="callback-dialog" ref={dialog} role="dialog" aria-modal="true" aria-labelledby="callback-title">
        <button className="dialog-close" type="button" onClick={onClose} aria-label="Close callback request">
          <span aria-hidden="true"/>
        </button>
        <SectionLabel>LET'S TALK</SectionLabel>
        <h2 id="callback-title">Request a callback.</h2>
        {whatsappUrl ? (<div className="callback-confirmation" role="status">
            <p>Continue in WhatsApp to send your request to the Rovaware team.</p>
            <a className="button button-orange" href={whatsappUrl} target="_blank" rel="noreferrer">
              Open WhatsApp <span className="button-icon"><Arrow diagonal/></span>
            </a>
          </div>) : (<>
            <p>Share your details and continue to WhatsApp to send your request.</p>
            <form className="callback-form" onSubmit={requestCallback}>
              <div className="field">
                <label htmlFor="callback-name">Your name <span>*</span></label>
                <input id="callback-name" value={name} onChange={(event) => setName(event.currentTarget.value)} placeholder="Your full name" autoComplete="name" required/>
              </div>
              <div className="field">
                <label htmlFor="callback-phone">Phone / WhatsApp number <span>*</span></label>
                <input id="callback-phone" type="tel" value={phone} onChange={(event) => setPhone(event.currentTarget.value)} placeholder="Your phone number" autoComplete="tel" required/>
              </div>
              <div className="field">
                <label htmlFor="callback-time">Preferred time for a call</label>
                <select id="callback-time" value={time} onChange={(event) => setTime(event.currentTarget.value)}>
                  <option value="Next 15 Minutes (Immediate)">Immediate (next 15 minutes)</option>
                  <option value="Today Afternoon (2 PM - 5 PM)">Today afternoon (2 PM - 5 PM)</option>
                  <option value="Today Evening (6 PM - 9 PM)">Today evening (6 PM - 9 PM)</option>
                  <option value="Tomorrow Morning (10 AM - 1 PM)">Tomorrow morning (10 AM - 1 PM)</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="callback-topic">Project topic</label>
                <input id="callback-topic" value={topic} onChange={(event) => setTopic(event.currentTarget.value)} placeholder="What would you like to discuss?"/>
              </div>
              <button type="submit" className="button button-orange">Request callback <span className="button-icon"><Arrow diagonal/></span></button>
            </form>
          </>)}
        <p className="callback-direct">Or call directly: <a href="tel:+919752264618">+91 97522 64618</a></p>
      </div>
    </div>);
}
function ProjectBooking({ selectedServices, toggleService, startRequest, }) {
    const [budget, setBudget] = useState("tier-2");
    const [timeline, setTimeline] = useState(timelines[1]);
    const [brief, setBrief] = useState(initialBrief);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");
    const [submittedEntry, setSubmittedEntry] = useState(null);
    const successMessage = useRef(null);
    useEffect(() => {
        if (startRequest > 0)
            setStatus((current) => current === "success" ? "idle" : current);
    }, [startRequest]);
    useEffect(() => {
        if (status === "success")
            successMessage.current?.focus();
    }, [status]);
    function updateField(event) {
        const { name, value } = event.currentTarget;
        setBrief((current) => ({ ...current, [name]: value }));
        if (status === "error")
            setStatus("idle");
    }
    function showError(message, fieldId) {
        setError(message);
        setStatus("error");
        document.getElementById(fieldId)?.focus();
    }
    function submitBrief(event) {
        event.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!brief.name.trim()) {
            showError("Please provide your full name.", "booking-name");
            return;
        }
        if (!emailPattern.test(brief.email.trim())) {
            showError("Please provide a valid work email address.", "booking-email");
            return;
        }
        if (brief.projectDescription.trim().length < 25) {
            showError("Please provide at least 25 characters describing your project.", "booking-description");
            return;
        }
        setStatus("submitting");
        window.setTimeout(() => {
            try {
                const referenceId = `RW-PRJ-${Math.floor(10000 + Math.random() * 90000)}`;
                const selectedBudget = budgets.find((item) => item.id === budget);
                const entry = {
                    ...brief,
                    services: selectedServices,
                    budgetTier: selectedBudget ? `${selectedBudget.title} (${selectedBudget.range})` : budget,
                    timeline,
                    referenceId,
                    submittedAt: new Date().toISOString(),
                };
                const previous = JSON.parse(localStorage.getItem("rovaware_project_bookings") || "[]");
                previous.push(entry);
                localStorage.setItem("rovaware_project_bookings", JSON.stringify(previous));
                setSubmittedEntry(entry);
                setStatus("success");
            }
            catch {
                setError("Could not save your project booking. Please try again.");
                setStatus("error");
            }
        }, 500);
    }
    const selectedBudget = budgets.find((item) => item.id === budget);
    const emailEntry = submittedEntry ?? {
        ...brief,
        services: selectedServices,
        budgetTier: selectedBudget ? `${selectedBudget.title} (${selectedBudget.range})` : budget,
        timeline,
        referenceId: "",
        submittedAt: "",
    };
    const emailBody = [
        `Project reference: ${emailEntry.referenceId}`,
        `Name: ${emailEntry.name}`,
        `Email: ${emailEntry.email}`,
        `Company: ${emailEntry.company || "Not provided"}`,
        `Phone: ${emailEntry.phone || "Not provided"}`,
        `Services: ${emailEntry.services.join(", ")}`,
        `Budget: ${emailEntry.budgetTier}`,
        `Timeline: ${emailEntry.timeline}`,
        `NDA requested: ${emailEntry.needNDA ? "Yes" : "No"}`,
        "",
        "Project description:",
        emailEntry.projectDescription,
        "",
        `References: ${emailEntry.referenceLinks || "Not provided"}`,
    ].join("\n");
    const emailHref = `mailto:hello@rovaware.com?subject=${encodeURIComponent(`Project brief ${emailEntry.referenceId}`)}&body=${encodeURIComponent(emailBody)}`;
    return (<section id="book-project" className="booking-section grid-surface">
      <div className="container booking-layout">
        <div className="booking-intro reveal">
          <SectionLabel>BOOK A PROJECT</SectionLabel>
          <h2>LET'S BUILD SOMETHING GREAT.</h2>
          <p>
            Every great project starts with a conversation. Tell us what you have in mind, and let's make it real.
          </p>
          <div className="booking-contact">
            <span>Prefer to talk directly?</span>
            <a href="mailto:hello@rovaware.com">
              hello@rovaware.com <Arrow diagonal/>
            </a>
          </div>
        </div>

        {status === "success" ? (<div className="booking-success" role="status" aria-live="polite" tabIndex={-1} ref={successMessage}>
            <span className="success-check" aria-hidden="true">&#10003;</span>
            <p className="success-kicker">PROJECT BRIEF SAVED</p>
            <h3>Thanks for sharing your idea.</h3>
            <p>
              Your brief has been saved in this browser. To send it to our team, use the email button below.
            </p>
            <div className="reference-line">
              <span>YOUR REFERENCE</span>
              <strong>{emailEntry.referenceId}</strong>
            </div>
            <div className="success-actions">
              <a className="button button-dark" href={emailHref}>
                Email your brief <span className="button-icon"><Arrow diagonal/></span>
              </a>
              <button type="button" className="text-link" onClick={() => setStatus("idle")}>
                Submit another brief <Arrow />
              </button>
            </div>
          </div>) : (<form className="booking-form" onSubmit={submitBrief} noValidate>
            <fieldset className="form-step">
              <legend className="sr-only">Select required services</legend>
              <StepHeading number="01" title="Select required services" description="Choose all the capabilities relevant to your project."/>
              <div className="choice-grid service-choices">
                {bookingServices.map((service) => {
                const selected = selectedServices.includes(service);
                return (<button type="button" className={`choice-button ${selected ? "is-selected" : ""}`} aria-pressed={selected} onClick={() => toggleService(service)} key={service}>
                      <span className="choice-mark" aria-hidden="true">{selected ? "\u2713" : "+"}</span>
                      {service}
                    </button>);
            })}
              </div>
              <p className="field-hint">Select at least one service.</p>
            </fieldset>

            <fieldset className="form-step">
              <legend className="sr-only">Estimated investment budget</legend>
              <StepHeading number="02" title="Estimated investment" description="Select the range that best fits your project."/>
              <div className="budget-grid">
                {budgets.map((item) => (<label className={`budget-option ${budget === item.id ? "is-selected" : ""}`} key={item.id}>
                    <input type="radio" name="budget" value={item.id} checked={budget === item.id} onChange={() => setBudget(item.id)}/>
                    <span className="radio-mark" aria-hidden="true"/>
                    <span className="budget-content">
                      <span className="budget-name">{item.title}</span>
                      <strong>{item.range}</strong>
                      <span className="budget-description">{item.description}</span>
                    </span>
                  </label>))}
              </div>
            </fieldset>

            <fieldset className="form-step">
              <legend className="sr-only">Target delivery timeline</legend>
              <StepHeading number="03" title="Target timeline" description="When would you like your project delivered?"/>
              <div className="choice-grid timeline-choices">
                {timelines.map((item) => (<label className={`timeline-option ${timeline === item ? "is-selected" : ""}`} key={item}>
                    <input type="radio" name="timeline" value={item} checked={timeline === item} onChange={() => setTimeline(item)}/>
                    <span className="radio-mark" aria-hidden="true"/>
                    <span>{item}</span>
                  </label>))}
              </div>
            </fieldset>

            <fieldset className="form-step">
              <legend className="sr-only">Project scope and references</legend>
              <StepHeading number="04" title="Project scope & references" description="Tell us about your goals, features, and inspiration."/>
              <div className="field">
                <label htmlFor="booking-description">Project description & requirements <span>*</span></label>
                <textarea id="booking-description" name="projectDescription" rows={6} value={brief.projectDescription} onChange={updateField} placeholder="Tell us what you are building, who it is for, and what success looks like." required minLength={25}/>
              </div>
              <div className="field">
                <label htmlFor="booking-links">Reference URLs / design files / competitor links</label>
                <input id="booking-links" name="referenceLinks" value={brief.referenceLinks} onChange={updateField} placeholder="Figma, GitHub, live site, or other references"/>
              </div>
            </fieldset>

            <fieldset className="form-step">
              <legend className="sr-only">Your contact details</legend>
              <StepHeading number="05" title="Your contact details" description="Let us know how to reach you."/>
              <div className="field-grid">
                <div className="field">
                  <label htmlFor="booking-name">Full name <span>*</span></label>
                  <input id="booking-name" name="name" value={brief.name} onChange={updateField} placeholder="Your full name" autoComplete="name" required/>
                </div>
                <div className="field">
                  <label htmlFor="booking-email">Business email <span>*</span></label>
                  <input id="booking-email" name="email" type="email" value={brief.email} onChange={updateField} placeholder="you@company.com" autoComplete="email" required/>
                </div>
                <div className="field">
                  <label htmlFor="booking-company">Company / product name</label>
                  <input id="booking-company" name="company" value={brief.company} onChange={updateField} placeholder="Your company or product" autoComplete="organization"/>
                </div>
                <div className="field">
                  <label htmlFor="booking-phone">Phone / WhatsApp (optional)</label>
                  <input id="booking-phone" name="phone" type="tel" value={brief.phone} onChange={updateField} placeholder="+1 (555) 000-0000" autoComplete="tel"/>
                </div>
              </div>
              <label className="nda-option">
                <input type="checkbox" name="needNDA" checked={brief.needNDA} onChange={(event) => {
                const checked = event.currentTarget.checked;
                setBrief((current) => ({ ...current, needNDA: checked }));
            }}/>
                <span>I request a signed mutual NDA before detailed code inspection.</span>
              </label>
            </fieldset>

            {status === "error" && <p className="form-error" role="alert">{error}</p>}
            <div className="form-submit">
              <button className="button button-orange" type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Saving your brief..." : "Submit project brief"}
                <span className="button-icon"><Arrow diagonal/></span>
              </button>
              <p>Your brief is saved in this browser. You can email it to our team after submitting.</p>
            </div>
          </form>)}
      </div>
    </section>);
}
export default function App({ hideNav = true }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [callbackOpen, setCallbackOpen] = useState(false);
    const [bookingRequest, setBookingRequest] = useState(0);
    const [selectedServices, setSelectedServices] = useState(["Full-Stack Web App"]);
    const serviceTrack = useRef(null);
    const closeCallback = useCallback(() => setCallbackOpen(false), []);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 70);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        const elements = document.querySelectorAll(".reveal");
        if ("IntersectionObserver" in window) {
            document.documentElement.classList.add("motion-ready");
            const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            }), { threshold: 0.08 });
            elements.forEach((element) => observer.observe(element));
            return () => {
                window.removeEventListener("scroll", onScroll);
                observer.disconnect();
                document.documentElement.classList.remove("motion-ready");
            };
        }
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    useEffect(() => {
        if (!menuOpen)
            return;
        const closeOnEscape = (event) => {
            if (event.key === "Escape")
                setMenuOpen(false);
        };
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, [menuOpen]);
    function toggleService(service) {
        setSelectedServices((current) => current.includes(service)
            ? current.length === 1 ? current : current.filter((item) => item !== service)
            : [...current, service]);
    }
    function startWithService(service) {
        setSelectedServices([service]);
        setBookingRequest((current) => current + 1);
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
        document.getElementById("book-project")?.scrollIntoView({ behavior });
    }
    function scrollServices(direction) {
        const track = serviceTrack.current;
        const item = track?.querySelector(".service-item");
        if (track && item) {
            const gap = Number.parseFloat(window.getComputedStyle(track).gap) || 0;
            const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
            track.scrollBy({ left: direction * (item.offsetWidth + gap), behavior });
        }
    }
    const navLinks = [
        ["About", "#about"],
        ["Services", "#services"],
        ["Our Work", "#work"],
        ["Process", "#process"],
        ["Blog", "https://rovaware.com/blog"],
        ["FAQs", "#faq"],
    ];
    return (<>
      {!hideNav && (
        <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-is-open" : ""}`}>
          <div className="header-inner">
            <Brand onClick={() => setMenuOpen(false)}/>
            <nav className="desktop-nav" aria-label="Main navigation">
              {navLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
            </nav>
            <div className="header-actions">
              <button className="header-callback" type="button" onClick={() => setCallbackOpen(true)}>Request a callback</button>
              <a className="header-cta" href="#book-project" onClick={() => setMenuOpen(false)}>
                Book a project <Arrow diagonal/>
              </a>
              <button type="button" className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
                <span />
                <span />
              </button>
            </div>
          </div>
          <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation" hidden={!menuOpen}>
            {navLinks.map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}<Arrow diagonal/></a>)}
            <a href="#book-project" onClick={() => setMenuOpen(false)}>Book a project<Arrow diagonal/></a>
            <a href="https://docs.google.com/forms/d/15zbRoUfGocjXiBKCLB7lj5UWeXUXgKuY8sbix_W0Stw/viewform" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Book a demo<Arrow diagonal/></a>
            <button type="button" onClick={() => { setMenuOpen(false); setCallbackOpen(true); }}>Request a callback<Arrow diagonal/></button>
          </nav>
        </header>
      )}

      <main>
        <section id="home" className="hero">
          <div className="hero-image" aria-hidden="true"/>
          <div className="hero-shade" aria-hidden="true"/>
          <div className="container hero-content">
            <p className="hero-eyebrow"><span /> DIGITAL ENGINEERING STUDIO</p>
            <h1>
              <span className="hero-brand">ROVAWARE</span>
              <span className="hero-headline">BUILD WHAT<br />COMES NEXT.</span>
            </h1>
            <p className="hero-description">
              From the first idea to the final launch, we build digital experiences made to go further.
            </p>
            <a href="#book-project" className="button button-orange hero-button">
              Book a project <span className="button-icon"><Arrow diagonal/></span>
            </a>
          </div>
        </section>

        <div className="grid-surface">
          <section id="about" className="about-section section-spacing">
            <div className="container">
              <div className="reveal"><SectionLabel>ABOUT ROVAWARE</SectionLabel></div>
              <div className="about-intro reveal">
                <div>
                  <h2>We turn ambitious ideas into digital experiences built to make an impact.</h2>
                  <a className="button button-dark" href="https://rovaware.com/about/company">
                    Learn more <span className="button-icon"><Arrow diagonal/></span>
                  </a>
                </div>
                <p>
                  From strategy and design to development and beyond, we bring the right people and ideas together to build with purpose.
                </p>
              </div>
              <div className="about-image image-frame reveal">
                <img src="/images/about-team.jpg" alt="A digital product team collaborating in a modern studio" loading="lazy"/>
              </div>
            </div>
          </section>

          <section id="services" className="services-section section-spacing">
            <div className="container">
              <div className="section-heading centered reveal">
                <SectionLabel>OUR SERVICES</SectionLabel>
                <h2>WHAT WE DO BEST</h2>
                <p>From the first concept to a product ready for the world.</p>
              </div>
              <div className="service-track reveal" ref={serviceTrack}>
                {featuredServices.map((service, index) => (<button type="button" className="service-item" key={service.title} onClick={() => startWithService(service.selection)} aria-label={`Start a project in ${service.title}`}>
                    <span className="service-image image-frame">
                      <img src={service.image} alt="" loading="lazy"/>
                    </span>
                    <span className="service-meta"><span>0{index + 1} / SERVICE</span><Arrow diagonal/></span>
                    <span className="service-title">{service.title}</span>
                    <span className="service-description">{service.description}</span>
                  </button>))}
              </div>
              <div className="slider-bottom reveal">
                <p>Choose a service to start your project.</p>
                <div className="slider-controls">
                  <button type="button" aria-label="Previous services" onClick={() => scrollServices(-1)}><span className="arrow-reverse"><Arrow /></span></button>
                  <button type="button" aria-label="Next services" onClick={() => scrollServices(1)}><Arrow /></button>
                </div>
              </div>
            </div>
          </section>

          <section className="statement-section">
            <div className="container">
              <div className="statement-image reveal">
                <div className="statement-content">
                  <SectionLabel>THE ROVAWARE WAY</SectionLabel>
                  <h2>BUILT RIGHT.<br />BUILT TO LAST.</h2>
                  <p>Thoughtful design, dependable engineering, and a team that is invested in your success.</p>
                  <a className="button button-light" href="#process">Our approach <span className="button-icon"><Arrow diagonal/></span></a>
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="work-section section-spacing">
            <div className="container">
              <div className="section-heading centered reveal">
                <SectionLabel>SELECTED WORK</SectionLabel>
                <h2>IDEAS WE'RE PROUD<br />TO HAVE BUILT</h2>
                <p>A look at the digital products and platforms we've helped bring to life.</p>
              </div>
              <div className="project-grid reveal">
                {projects.map((project) => (<a className="project-item" href="https://rovaware.com/#work" target="_blank" rel="noreferrer" key={project.name} aria-label={`View ${project.name} in the Rovaware portfolio`}>
                    <span className="project-image image-frame"><img src={project.image} alt={project.alt} loading="lazy"/></span>
                    <span className="project-title-row"><strong>{project.name}</strong><Arrow diagonal/></span>
                    <span className="project-category">{project.category}</span>
                  </a>))}
              </div>
              <div className="centered-action reveal">
                <a className="button button-dark" href="https://rovaware.com/#work" target="_blank" rel="noreferrer">Explore our work <span className="button-icon"><Arrow diagonal/></span></a>
              </div>
            </div>
          </section>
        </div>

        <section id="process" className="process-section section-spacing">
          <div className="container">
            <div className="process-top reveal">
              <div><SectionLabel>OUR PROCESS</SectionLabel><h2>GOOD WORK STARTS<br />WITH A CLEAR PLAN.</h2></div>
              <p>From your first idea to launch day, we make the journey clear and collaborative.</p>
            </div>
            <div className="process-layout reveal">
              <div className="process-image image-frame"><img src="/images/team.jpg" alt="A team of developers working together" loading="lazy"/></div>
              <ol className="process-list">
                <li><span>01</span><div><h3>Share your vision</h3><p>Tell us about your goals, the challenge, and what you want to build.</p></div></li>
                <li><span>02</span><div><h3>Shape the blueprint</h3><p>We explore the details, define the scope, and map out the right approach.</p></div></li>
                <li><span>03</span><div><h3>Build and launch</h3><p>With a clear plan in place, we bring your product to life, together.</p></div></li>
              </ol>
            </div>
          </div>
        </section>

        <ProjectBooking selectedServices={selectedServices} toggleService={toggleService} startRequest={bookingRequest}/>

        <section id="faq" className="faq-section section-spacing grid-surface">
          <div id="faqs" className="container faq-layout">
            <div className="faq-heading reveal"><SectionLabel>GOOD TO KNOW</SectionLabel><h2>QUESTIONS?<br />WE'VE GOT ANSWERS.</h2></div>
            <div className="faq-list reveal">
              <details>
                <summary>What happens after I submit my project brief?<span aria-hidden="true"/></summary>
                <p>Your brief is saved in this browser. You can then email it directly to our team so we can review your goals and discuss next steps.</p>
              </details>
              <details>
                <summary>What types of projects do you work on?<span aria-hidden="true"/></summary>
                <p>We work across web applications, SaaS products, AI and automation, mobile, design, cloud infrastructure, and more.</p>
              </details>
              <details>
                <summary>Can we sign an NDA before sharing details?<span aria-hidden="true"/></summary>
                <p>Yes. You can request a mutual non-disclosure agreement in the project form before sharing detailed code or sensitive information.</p>
              </details>
              <details>
                <summary>How long will my project take?<span aria-hidden="true"/></summary>
                <p>Every project is different. Your scope and priorities help us recommend a practical timeline and milestones.</p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top reveal">
            <div><p>HAVE SOMETHING IN MIND?</p><h2>LET'S MAKE<br />IT HAPPEN.</h2></div>
            <a href="#book-project" className="button button-orange">Start your project <span className="button-icon"><Arrow diagonal/></span></a>
          </div>
          <div className="footer-main">
            <div className="footer-brand"><Brand /><p>Building thoughtful digital experiences for a world that never stands still.</p></div>
            <div className="footer-column"><span>EXPLORE</span><a href="#about">About</a><a href="#services">Services</a><a href="#work">Our work</a><a href="#process">Process</a></div>
            <div className="footer-column"><span>CONNECT</span><a href="mailto:hello@rovaware.com">hello@rovaware.com</a><a href="https://rovaware.com/about/contact">Contact us</a><button type="button" onClick={() => setCallbackOpen(true)}>Request a callback</button><a href="https://docs.google.com/forms/d/15zbRoUfGocjXiBKCLB7lj5UWeXUXgKuY8sbix_W0Stw/viewform" target="_blank" rel="noreferrer">Book a demo</a><a href="https://rovaware.com/blog">Journal</a></div>
          </div>
          <div className="footer-bottom"><span>&copy; {new Date().getFullYear()} ROVAWARE. ALL RIGHTS RESERVED.</span><a href="#home">BACK TO TOP <span aria-hidden="true">&uarr;</span></a></div>
        </div>
      </footer>
      {callbackOpen && <CallbackDialog onClose={closeCallback}/>}
    </>);
}
