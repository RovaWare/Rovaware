import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Code2, Compass, Layers3, RefreshCw, ShieldCheck, } from "lucide-react";
import "./Process.css";
const stages = [
    {
        number: "01",
        title: "DISCOVER",
        chapter: "Vision & requirements",
        description: "Understand the client's vision, business goals, requirements, and project scope.",
        milestone: "A shared vision, clearly defined.",
        deliverables: ["Discovery brief", "Goals & requirements", "Project scope"],
        icon: Compass,
    },
    {
        number: "02",
        title: "STRATEGIZE & DESIGN",
        chapter: "Architecture & UI/UX",
        description: "Plan the right solution, map the architecture, and create wireframes and engaging UI/UX experiences.",
        milestone: "A blueprint ready to build.",
        deliverables: ["Solution architecture", "Wireframes", "UI/UX prototype"],
        icon: Layers3,
    },
    {
        number: "03",
        title: "DEVELOP",
        chapter: "Web, mobile & AI",
        description: "Build scalable web applications, mobile solutions, robust backend systems, and AI-powered features.",
        milestone: "A working product takes shape.",
        deliverables: ["Web & mobile builds", "Backend & APIs", "AI integrations"],
        icon: Code2,
    },
    {
        number: "04",
        title: "TEST & DEPLOY",
        chapter: "Quality & deployment",
        description: "Test functionality, optimize performance, ensure security, and deploy the solution.",
        milestone: "A confident production launch.",
        deliverables: ["Quality assurance", "Security & performance review", "Deployment"],
        icon: ShieldCheck,
    },
    {
        number: "05",
        title: "EVOLVE & SUPPORT",
        chapter: "Maintenance & support",
        description: "Provide ongoing maintenance, technical support, monitoring, and continuous improvements.",
        milestone: "A product that keeps getting better.",
        deliverables: ["Ongoing maintenance", "Monitoring & support", "Continuous improvements"],
        icon: RefreshCw,
    },
];
function JourneyStep({ stage, index, activeIndex, reducedMotion, registerStep, }) {
    const stepRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: stepRef,
        offset: ["start 45%", "end 45%"],
    });
    const lineProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        mass: 0.4,
    });
    const isActive = activeIndex === index;
    const isComplete = activeIndex > index;
    const Icon = stage.icon;
    return (<li ref={(element) => {
            stepRef.current = element;
            registerStep(index, element);
        }} className={`rw-step${isActive ? " is-active" : ""}${isComplete ? " is-complete" : ""}`}>
      <span className="rw-step-node" aria-hidden="true">
        <span />
      </span>
      {index < stages.length - 1 && (<span className="rw-step-connector" aria-hidden="true">
          <motion.span className="rw-step-connector-fill" style={{ scaleY: reducedMotion ? (isComplete ? 1 : 0) : lineProgress }}/>
        </span>)}

      <motion.div className="rw-step-inner" initial={reducedMotion ? false : { opacity: 0.35, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
        <div className="rw-step-number" aria-hidden="true">
          {stage.number}
        </div>
        <div className="rw-step-content">
          <div className="rw-step-heading">
            <div>
              <p className="rw-step-chapter">{stage.chapter}</p>
              <h3>
                <span className="rw-sr-only">Step {stage.number}: </span>
                {stage.title}
              </h3>
            </div>
            <span className="rw-stage-icon" aria-hidden="true">
              <Icon size={22} strokeWidth={1.35}/>
            </span>
          </div>
          <p className="rw-step-description">{stage.description}</p>

          <dl className="rw-step-details">
            <div>
              <dt>Milestone</dt>
              <dd className="rw-milestone">{stage.milestone}</dd>
            </div>
            <div>
              <dt>Deliverables</dt>
              <dd>
                <ul className="rw-deliverables">
                  {stage.deliverables.map((deliverable) => (<li key={deliverable}>{deliverable}</li>))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </motion.div>
    </li>);
}
export default function Process() {
    const sectionRef = useRef(null);
    const stepRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const reducedMotion = Boolean(useReducedMotion());
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], [-18, 18]);
    useEffect(() => {
        if (window.location.hash !== "#process")
            return;
        let cancelled = false;
        let interacted = false;
        const markInteraction = () => { interacted = true; };
        const alignSection = () => {
            if (cancelled || interacted)
                return;
            const section = sectionRef.current;
            if (!section)
                return;
            const top = window.scrollY + section.getBoundingClientRect().top - 70;
            window.scrollTo({ top, behavior: "instant" });
        };
        const frame = window.requestAnimationFrame(alignSection);
        document.fonts.ready.then(alignSection);
        window.addEventListener("wheel", markInteraction, { passive: true });
        window.addEventListener("touchstart", markInteraction, { passive: true });
        window.addEventListener("pointerdown", markInteraction, { passive: true });
        window.addEventListener("keydown", markInteraction);
        return () => {
            cancelled = true;
            window.cancelAnimationFrame(frame);
            window.removeEventListener("wheel", markInteraction);
            window.removeEventListener("touchstart", markInteraction);
            window.removeEventListener("pointerdown", markInteraction);
            window.removeEventListener("keydown", markInteraction);
        };
    }, []);
    useEffect(() => {
        let frame = 0;
        const updateActiveStep = () => {
            frame = 0;
            const section = sectionRef.current;
            if (!section)
                return;
            const sectionBounds = section.getBoundingClientRect();
            if (sectionBounds.top > window.innerHeight || sectionBounds.bottom < 0)
                return;
            const focusLine = window.innerHeight * 0.46;
            let closestIndex = 0;
            let closestDistance = Infinity;
            stepRefs.current.forEach((element, index) => {
                if (!element)
                    return;
                const bounds = element.getBoundingClientRect();
                const focusPoint = bounds.top + Math.min(bounds.height * 0.4, window.innerHeight * 0.24);
                const distance = Math.abs(focusPoint - focusLine);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });
            setActiveIndex((current) => (current === closestIndex ? current : closestIndex));
        };
        const requestUpdate = () => {
            if (!frame)
                frame = window.requestAnimationFrame(updateActiveStep);
        };
        updateActiveStep();
        window.addEventListener("scroll", requestUpdate, { passive: true });
        window.addEventListener("resize", requestUpdate);
        return () => {
            window.removeEventListener("scroll", requestUpdate);
            window.removeEventListener("resize", requestUpdate);
            if (frame)
                window.cancelAnimationFrame(frame);
        };
    }, []);
    const goToStage = (index) => {
        const target = stepRefs.current[index];
        if (!target)
            return;
        const top = window.scrollY + target.getBoundingClientRect().top - Math.max(110, window.innerHeight * 0.22);
        window.scrollTo({ top, behavior: reducedMotion ? "instant" : "smooth" });
    };
    return (<section id="process" ref={sectionRef} className="rw-process" aria-labelledby="rw-process-title">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" precedence="default"/>
      <div className="rw-process-container">
        <div className="rw-process-topline">
          <div className="rw-section-label">
            <span className="rw-label-mark" aria-hidden="true"/>
            <span>RovaWare <span className="rw-label-slash">/</span> Our process</span>
          </div>
          <span className="rw-topline-note">From vision to launch <span> / </span> 01 - 05</span>
        </div>

        <div className="rw-process-layout">
          <div className="rw-process-intro">
            <motion.div initial={reducedMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>
              <p className="rw-intro-kicker"><span>01 - 05</span> RovaWare process</p>
              <h2 id="rw-process-title">
                <span>From Vision</span>
                <span className="rw-title-accent">to Launch<span className="rw-title-dot">.</span></span>
              </h2>
              <p className="rw-intro-copy">
                Great ideas deserve a clear path forward. Together, we turn your vision into digital experiences built to last.
              </p>
            </motion.div>

            <motion.figure className="rw-process-image" initial={reducedMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
              <motion.img src="/images/rovaware-team.jpg" alt="A team of developers working together in a studio" style={{ y: reducedMotion ? 0 : imageY }}/>
              <figcaption>
                <span>Built to last.</span>
                <ArrowDownRight size={18} strokeWidth={1.4} aria-hidden="true"/>
              </figcaption>
            </motion.figure>

            <div className="rw-journey-index">
              <div className="rw-index-heading">
                <span>Explore the process</span>
                <span><strong>{stages[activeIndex].number}</strong> / 05</span>
              </div>
              <div className="rw-index-buttons" role="group" aria-label="Jump to a project stage">
                {stages.map((stage, index) => (<button key={stage.number} type="button" onClick={() => goToStage(index)} className={index === activeIndex ? "is-active" : index < activeIndex ? "is-complete" : ""} aria-label={`Go to step ${stage.number}: ${stage.title}`} aria-current={index === activeIndex ? "step" : undefined}>
                    <span>{stage.number}</span>
                    <span className="rw-index-line" aria-hidden="true"/>
                  </button>))}
              </div>
            </div>

            <a className="rw-intro-link" href="mailto:hello@rovaware.com">
              Have a project in mind? <span>Let's talk.</span>
              <ArrowUpRight size={16} aria-hidden="true"/>
            </a>
          </div>

          <div className="rw-timeline">
            <div className="rw-timeline-heading">
              <span>The process</span>
              <span>Five stages. One shared vision.</span>
            </div>
            <ol className="rw-timeline-list">
              {stages.map((stage, index) => (<JourneyStep key={stage.number} stage={stage} index={index} activeIndex={activeIndex} reducedMotion={reducedMotion} registerStep={(stepIndex, element) => {
                stepRefs.current[stepIndex] = element;
            }}/>))}
            </ol>
            <div className="rw-timeline-end">
              <span className="rw-end-symbol" aria-hidden="true">+</span>
              <span>Ongoing support. Continuous improvements.</span>
              <span>RovaWare / 05</span>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
