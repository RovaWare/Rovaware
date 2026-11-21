import React, { useEffect, useState, useRef } from 'react';
import ShardAssemblyHero from './ShardAssemblyHero';
import {
    Building2,
    Sparkles,
    ShieldCheck,
    Cpu,
    Layers,
    Zap,
    Globe,
    Clock,
    CheckCircle2,
    ArrowRight,
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    Award,
    Users,
    Target,
    Compass,
    Code2,
    Terminal,
    Database,
    Server,
    Workflow,
    GitBranch,
    Play,
    Lock,
    Rocket,
    Check,
    Laptop
} from 'lucide-react';

// 3D Stacked Project Cards Showcase Data (Real RovaWare Portfolio Projects)
const showcaseProjects = [
    {
        id: 'asa-epc',
        title: 'ASA EPC — Enterprise Solar Energy & Infrastructure Platform',
        category: 'Solar EPC & Infrastructure',
        client: 'ASA EPC Pvt. Ltd. (India & UAE)',
        img: '/assets/asa_epc.jpg',
        tags: ['Next.js 15', 'Solar EPC', 'DPIIT Recognized'],
        summary: 'High-performance Next.js enterprise web application built for 100+ projects trusted by L&T Construction, Bajaj & KEC.'
    },
    {
        id: 'wallx-texture',
        title: 'WallX — Premium Surface Solutions & Architectural Finishes',
        category: 'Architectural Surfaces & Finishes',
        client: 'WallX Surface Solutions',
        img: '/assets/wallx_texture.jpg',
        tags: ['React', 'Tailwind CSS', 'Waterproofing'],
        summary: 'Architectural wall protection & surface solutions web platform with interactive waterproofing specs, textured finishes catalog, and commercial dealer onboarding.'
    },
    {
        id: 'rathore-construction',
        title: 'Rathore Construction & Earthmovers — Heavy Equipment Platform',
        category: 'Fleet & Civil Infrastructure',
        client: 'Rathore Construction & Earthmovers',
        img: '/assets/rathore_construction.jpg',
        tags: ['Next.js', 'JCB Fleet Rental', 'High Concurrency'],
        summary: 'Heavy equipment rental & earthmoving solutions platform engineered for civil infrastructure across central India.'
    },
    {
        id: 'doctor-appointment-booking',
        title: 'Doctor Appointment Booking System',
        category: 'Full-Stack Web Application',
        client: 'Appointy • Healthcare',
        img: '/assets/doctor_appointment.jpg',
        tags: ['React', 'Tailwind CSS', 'Razorpay'],
        summary: 'Effortless healthcare scheduling web application enabling patients to browse specialists, book consultations, and complete secure payments.'
    }
];

function Stacked3DProjectShowcase({ onNavigateWork }) {
    const [activeIndex, setActiveIndex] = useState(1);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const touchStartX = useRef(0);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        setMouseOffset({
            x: Math.max(-1, Math.min(1, x)),
            y: Math.max(-1, Math.min(1, y))
        });
    };

    const handleMouseLeave = () => {
        setMouseOffset({ x: 0, y: 0 });
        setHoveredIndex(null);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : showcaseProjects.length - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < showcaseProjects.length - 1 ? prev + 1 : 0));
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const diff = e.changedTouches[0].clientX - touchStartX.current;
        if (diff > 45) {
            handlePrev();
        } else if (diff < -45) {
            handleNext();
        }
    };

    return (
        <div className="stacked-3d-showcase-wrapper">
            {/* Interactive 3D Perspective Stage */}
            <div
                className="stacked-3d-stage"
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="stacked-3d-track"
                    style={{
                        transform: `rotateX(${mouseOffset.y * -5}deg) rotateY(${mouseOffset.x * 7}deg)`
                    }}
                >
                    {showcaseProjects.map((project, idx) => {
                        const offset = idx - activeIndex;
                        const isCenter = offset === 0;
                        const isHovered = hoveredIndex === idx;

                        // Compute perspective 3D transform metrics
                        let translateX = 0;
                        let translateY = 0;
                        let translateZ = 0;
                        let rotateY = 0;
                        let rotateZ = 0;
                        let scale = 1;
                        let opacity = 1;
                        let filter = 'blur(0px)';
                        let zIndex = 20;

                        if (offset === 0) {
                            translateX = mouseOffset.x * 12;
                            translateY = mouseOffset.y * 8;
                            translateZ = 75;
                            rotateY = mouseOffset.x * 6;
                            rotateZ = 0;
                            scale = isHovered ? 1.07 : 1.03;
                            opacity = 1;
                            filter = 'blur(0px)';
                            zIndex = 30;
                        } else if (offset === -1) {
                            translateX = -280 + mouseOffset.x * 8;
                            translateY = 12 + mouseOffset.y * 6;
                            translateZ = 15;
                            rotateY = 16 + mouseOffset.x * 4;
                            rotateZ = -3;
                            scale = isHovered ? 1.02 : 0.94;
                            opacity = isHovered ? 1 : 0.84;
                            filter = isHovered ? 'blur(0px)' : 'blur(0.8px)';
                            zIndex = isHovered ? 35 : 22;
                        } else if (offset === 1) {
                            translateX = 280 + mouseOffset.x * 8;
                            translateY = 12 + mouseOffset.y * 6;
                            translateZ = 15;
                            rotateY = -16 + mouseOffset.x * 4;
                            rotateZ = 3;
                            scale = isHovered ? 1.02 : 0.94;
                            opacity = isHovered ? 1 : 0.84;
                            filter = isHovered ? 'blur(0px)' : 'blur(0.8px)';
                            zIndex = isHovered ? 35 : 22;
                        } else if (offset <= -2) {
                            translateX = -480 + mouseOffset.x * 4;
                            translateY = 24;
                            translateZ = -50;
                            rotateY = 28;
                            rotateZ = -6;
                            scale = isHovered ? 0.96 : 0.86;
                            opacity = isHovered ? 0.95 : 0.55;
                            filter = isHovered ? 'blur(0px)' : 'blur(1.6px)';
                            zIndex = isHovered ? 35 : 12;
                        } else if (offset >= 2) {
                            translateX = 480 + mouseOffset.x * 4;
                            translateY = 24;
                            translateZ = -50;
                            rotateY = -28;
                            rotateZ = 6;
                            scale = isHovered ? 0.96 : 0.86;
                            opacity = isHovered ? 0.95 : 0.55;
                            filter = isHovered ? 'blur(0px)' : 'blur(1.6px)';
                            zIndex = isHovered ? 35 : 12;
                        }

                        return (
                            <div
                                key={project.id}
                                className={`stacked-card-item ${isCenter ? 'card-center' : ''} ${isHovered ? 'card-hovered' : ''}`}
                                style={{
                                    transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
                                    opacity,
                                    filter,
                                    zIndex
                                }}
                                onClick={() => setActiveIndex(idx)}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                role="button"
                                tabIndex={0}
                                aria-label={`View ${project.title}`}
                            >
                                {/* Subtle Orange Radial Glow */}
                                <div className="stacked-card-glow" aria-hidden="true" />

                                {/* Card Media Preview */}
                                <div className="stacked-card-media">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="stacked-card-img"
                                        loading="lazy"
                                    />
                                    <div className="stacked-card-media-overlay" />
                                    <span className="stacked-card-category-badge">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Card Content & Details */}
                                <div className="stacked-card-content">
                                    <div className="stacked-card-client-tag">
                                        <span className="stacked-pulse-dot" />
                                        <span>{project.client}</span>
                                    </div>

                                    <h4 className="stacked-card-title">{project.title}</h4>
                                    <p className="stacked-card-desc">{project.summary}</p>

                                    <div className="stacked-card-tags">
                                        {project.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="stacked-tag-chip">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation Controls & Pagination Dots */}
            <div className="stacked-3d-controls-row">
                <button
                    type="button"
                    className="stacked-nav-arrow-btn"
                    onClick={handlePrev}
                    aria-label="Previous Project"
                >
                    <ChevronLeft size={18} />
                </button>

                <div className="stacked-dots-indicator" role="tablist">
                    {showcaseProjects.map((p, idx) => (
                        <button
                            key={p.id}
                            type="button"
                            className={`stacked-dot ${idx === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(idx)}
                            aria-label={`Go to slide ${idx + 1}: ${p.title}`}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    className="stacked-nav-arrow-btn"
                    onClick={handleNext}
                    aria-label="Next Project"
                >
                    <ChevronRight size={18} />
                </button>
            </div>

            {/* View All Projects CTA */}
            <div className="stacked-3d-cta-wrap">
                <button
                    type="button"
                    className="btn-view-all-projects"
                    onClick={onNavigateWork}
                >
                    <span>View All Projects</span>
                    <ArrowUpRight size={16} />
                </button>
                <p className="stacked-cta-subtext">
                    Explore our full portfolio of 15+ production platforms, custom AI architectures & digital experiences.
                </p>
            </div>
        </div>
    );
}

// Lightweight Viewport Intersection Observer Hook (Akaru scroll-triggered choreography)
function useInViewObserver(threshold = 0.12) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setInView(true);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin: '0px 0px -40px 0px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, inView];
}

// Akaru-Style Refined 3D Specular Tilt Hook for Cards
function useCard3DTilt() {
    const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });
    const onMouseMove = (e) => {
        if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        setTilt({
            rx: Number(((py - 0.5) * -9).toFixed(2)),
            ry: Number(((px - 0.5) * 9).toFixed(2)),
            gx: Math.round(px * 100),
            gy: Math.round(py * 100)
        });
    };
    const onMouseLeave = () => {
        setTilt({ rx: 0, ry: 0, gx: 50, gy: 0 });
    };
    return { tilt, onMouseMove, onMouseLeave };
}

// Premium 3D Magnetic Tilt + Cursor Spotlight Card for Core Engineering Disciplines
function EngineeringExpertiseCard({ item, idx, inView }) {
    const Icon = item.icon;
    const cardRef = useRef(null);
    const [state, setState] = useState({
        rx: 0,
        ry: 0,
        x: 0,
        y: 0,
        isHovered: false
    });

    const handleMouseMove = (e) => {
        if (typeof window !== 'undefined') {
            if (window.matchMedia && window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
            if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        }

        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const px = Math.max(0, Math.min(1, x / rect.width));
        const py = Math.max(0, Math.min(1, y / rect.height));

        const rx = Number(((0.5 - py) * 10).toFixed(2));
        const ry = Number(((px - 0.5) * 10).toFixed(2));

        setState({
            rx,
            ry,
            x: Math.round(x),
            y: Math.round(y),
            isHovered: true
        });
    };

    const handleMouseLeave = () => {
        setState((prev) => ({
            ...prev,
            rx: 0,
            ry: 0,
            isHovered: false
        }));
    };

    return (
        <div
            ref={cardRef}
            className={`discipline-interactive-card ${inView ? 'in-view' : ''} ${state.isHovered ? 'is-tilt-active' : ''}`}
            style={{
                transitionDelay: inView ? `${Math.min(idx * 70, 400)}ms` : '0ms',
                transform: inView
                    ? (state.isHovered
                        ? `perspective(1000px) translateY(-5px) rotateX(${state.rx}deg) rotateY(${state.ry}deg)`
                        : 'perspective(1000px) translateY(0px) rotateX(0deg) rotateY(0deg)')
                    : 'translateY(22px)'
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Soft Orange Radial Cursor Spotlight Glow */}
            <div
                className="discipline-card-spotlight"
                style={{
                    opacity: state.isHovered ? 1 : 0,
                    background: `radial-gradient(circle 280px at ${state.x}px ${state.y}px, rgba(255, 106, 0, 0.16) 0%, rgba(255, 140, 50, 0.04) 48%, transparent 72%)`
                }}
                aria-hidden="true"
            />

            {/* Card Visual Banner with Software Engineering Image */}
            {item.img && (
                <div className="discipline-card-media">
                    <img
                        src={item.img}
                        alt={item.title}
                        className="discipline-card-img"
                        loading="lazy"
                    />
                    <div className="discipline-card-media-overlay" />

                    {/* Floating Top Header Badges over Image */}
                    <div className="discipline-card-top-badges">
                        <div className="discipline-icon-box" style={{ borderColor: `${item.color}55`, color: item.color }}>
                            <Icon size={20} />
                        </div>
                        <span className="discipline-metric-chip" style={{ color: item.color, borderColor: `${item.color}40` }}>
                            {item.metric}
                        </span>
                    </div>
                </div>
            )}

            {!item.img && (
                <div className="discipline-card-top" style={{ padding: '20px 22px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="discipline-icon-box" style={{ borderColor: `${item.color}40`, color: item.color }}>
                        <Icon size={22} />
                    </div>
                    <span className="discipline-metric-chip" style={{ color: item.color, borderColor: `${item.color}30` }}>
                        {item.metric}
                    </span>
                </div>
            )}

            <div className="discipline-card-content">
                <h3 className="discipline-title">{item.title}</h3>
                <p className="discipline-desc">{item.desc}</p>

                <div className="discipline-tag-wrap">
                    {item.tags.map((t, tIdx) => (
                        <span key={tIdx} className="discipline-tag-badge">{t}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Fixed 3-Column Studio Grid for Core Engineering Disciplines
function StickyDisciplinesGallery({ items, inView }) {
    return (
        <section className="about-content-section disciplines-grid-section" id="disciplines">
            <div className="about-content-container">
                <div className="disciplines-section-header">
                    <div className="section-pill-badge">
                        <Cpu size={13} />
                        <span>CAPABILITIES & ARCHITECTURE</span>
                    </div>
                    <h2 className="section-display-heading">Core Engineering Disciplines</h2>
                    <p className="section-center-sub" style={{ textAlign: 'left', margin: '8px 0 0 0', maxWidth: '720px' }}>
                        Deep, battle-tested expertise across modern web architectures, cloud infrastructure, and artificial intelligence.
                    </p>
                </div>

                {/* Fixed Responsive Grid: 3 columns desktop, 2 tablet, 1 mobile */}
                <div className="disciplines-card-grid">
                    {items.map((item, idx) => (
                        <EngineeringExpertiseCard
                            key={idx}
                            item={item}
                            idx={idx}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Premium 3D Magnetic Tilt + Cursor Spotlight Card for Technology Stack
function TechStackCard({ tech, idx, inView }) {
    const cardRef = useRef(null);
    const [state, setState] = useState({
        rx: 0,
        ry: 0,
        x: 0,
        y: 0,
        isHovered: false
    });

    const handleMouseMove = (e) => {
        // Disable on touch devices and respect prefers-reduced-motion
        if (typeof window !== 'undefined') {
            if (window.matchMedia && window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
            if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        }

        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const px = Math.max(0, Math.min(1, x / rect.width));
        const py = Math.max(0, Math.min(1, y / rect.height));

        // Maximum 5 degrees rotateX and rotateY
        const rx = Number(((0.5 - py) * 10).toFixed(2));
        const ry = Number(((px - 0.5) * 10).toFixed(2));

        setState({
            rx,
            ry,
            x: Math.round(x),
            y: Math.round(y),
            isHovered: true
        });
    };

    const handleMouseLeave = () => {
        setState((prev) => ({
            ...prev,
            rx: 0,
            ry: 0,
            isHovered: false
        }));
    };

    return (
        <div
            ref={cardRef}
            className={`tech-stack-card ${inView ? 'in-view' : ''} ${state.isHovered ? 'is-tilt-active' : ''}`}
            style={{
                transitionDelay: inView ? `${Math.min(idx * 110, 1200)}ms` : '0ms',
                transform: inView
                    ? (state.isHovered
                        ? `perspective(1000px) translateY(-5px) rotateX(${state.rx}deg) rotateY(${state.ry}deg) scale(1.01)`
                        : 'perspective(1000px) translateY(0px) rotateX(0deg) rotateY(0deg) scale(1)')
                    : 'perspective(1000px) rotateX(12deg) translateY(32px) scale(0.94)'
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Cursor Spotlight Glow */}
            <div
                className="tech-card-spotlight"
                style={{
                    opacity: state.isHovered ? 1 : 0,
                    background: `radial-gradient(circle 220px at ${state.x}px ${state.y}px, rgba(255, 106, 0, 0.16) 0%, rgba(255, 140, 50, 0.04) 48%, transparent 72%)`
                }}
                aria-hidden="true"
            />

            {/* Light sweep shimmer effect */}
            <div className={`tech-card-light-sweep ${state.isHovered ? 'active' : ''}`} aria-hidden="true" />

            <div className="tech-card-top-row">
                <div className="tech-code-icon">
                    <Code2 size={16} />
                </div>
                <span className="tech-badge-token">{tech.badge}</span>
            </div>
            <h4 className="tech-item-name">{tech.name}</h4>
            <p className="tech-item-role">{tech.role}</p>
        </div>
    );
}

export default function AboutCompanyView({
    onNavigateHome,
    onNavigateContact,
    onNavigateBookProject,
    onNavigateBlog,
    onNavigateWork
}) {
    const [activeCodeTab, setActiveCodeTab] = useState('manifesto');
    const [activeProcessStage, setActiveProcessStage] = useState(0);
    const [activeTechCategory, setActiveTechCategory] = useState('all');

    // Sliding indicator for category filter row
    const filterRowRef = useRef(null);
    const filterBtnRefs = useRef({});
    const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0, opacity: 0 });

    useEffect(() => {
        const updateSlider = () => {
            const activeBtn = filterBtnRefs.current[activeTechCategory];
            const row = filterRowRef.current;
            if (activeBtn && row) {
                const rowRect = row.getBoundingClientRect();
                const btnRect = activeBtn.getBoundingClientRect();
                setSliderStyle({
                    left: btnRect.left - rowRect.left,
                    width: btnRect.width,
                    opacity: 1
                });
            }
        };
        updateSlider();
        window.addEventListener('resize', updateSlider);
        return () => window.removeEventListener('resize', updateSlider);
    }, [activeTechCategory]);

    // Scroll Trigger Observers for Sections (Akaru Staggered Choreography)
    const [whoSectionRef, whoInView] = useInViewObserver(0.12);
    const [missionSectionRef, missionInView] = useInViewObserver(0.12);
    const [disciplinesRef, disciplinesInView] = useInViewObserver(0.1);
    const [valuesRef, valuesInView] = useInViewObserver(0.1);
    const [whyRef, whyInView] = useInViewObserver(0.1);
    const [processRef, processInView] = useInViewObserver(0.1);
    const [techRef, techInView] = useInViewObserver(0.1);
    const [ctaRef, ctaInView] = useInViewObserver(0.1);

    // Refined 3D Tilt for Mission & Vision Cards
    const missionTilt = useCard3DTilt();
    const visionTilt = useCard3DTilt();

    useEffect(() => {
        document.title = 'About Company — ROVAWARE Engineering Studio';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return () => {
            document.title = 'ROVAWARE — Build • Automate • Scale';
        };
    }, []);

    // Code Terminal Snippets
    const codeSnippets = {
        manifesto: {
            filename: 'rovaware-manifesto.ts',
            lang: 'TypeScript',
            code: `// ROVAWARE ENGINEERING MANIFESTO
export const RovaWareCore = {
  philosophy: "Code with architectural dignity. Deliver with speed.",
  engineeringStandards: {
    typeSafety: "Strict TypeScript across full stack",
    runtimePerformance: "100% Lighthouse & <100ms TTFB",
    aiToolchain: "Stateful Multi-Agent Orchestration & Vector RAG",
    infrastructure: "Distributed Edge + Zero-Trust IAM",
    deployment: "Automated Zero-Downtime CI/CD"
  },
  ipTransfer: "100% client-owned code repositories upon delivery",
  clientCollaboration: "Direct access to principal systems architects"
} as const;`
        },
        architecture: {
            filename: 'distributed-system.ts',
            lang: 'TypeScript',
            code: `import { EdgeRouter, CacheControl, Telemetry } from '@rovaware/core';

export async function handleEnterpriseRequest(req: Request) {
  const trace = Telemetry.startTrace('edge_ingress');
  
  // Sub-30ms global edge dispatch with multi-region fallback
  const response = await EdgeRouter.dispatch(req, {
    cacheStrategy: CacheControl.staleWhileRevalidate(86400),
    security: { zeroTrust: true, rateLimit: 'adaptive' },
    resilience: { circuitBreaker: true, retries: 3 }
  });
  
  trace.record({ status: 200, edgeLatencyMs: 18 });
  return response;
}`
        },
        ai_agent: {
            filename: 'autonomous-agent.py',
            lang: 'Python',
            code: `from rovaware.ai import AgentGraph, QdrantVectorStore, ToolRegistry

# Autonomous multi-step reasoning agent with self-healing tools
agent = AgentGraph(
    model="claude-3-7-sonnet",
    vector_store=QdrantVectorStore(collection="enterprise_docs"),
    tools=ToolRegistry.load(["sql_executor", "api_connector", "code_linter"]),
    guardrails={"anti_hallucination": True, "strict_schema": True}
)

async def execute_task(prompt: str):
    plan = await agent.create_execution_plan(prompt)
    result = await agent.run_parallel(plan.steps)
    return result.synthesized_payload`
        },
        security: {
            filename: 'zero-trust.env.ts',
            lang: 'TypeScript',
            code: `// ZERO-TRUST CRYPTOGRAPHIC SECURITY HARNESS
export const SecurityHarness = {
  sessionManagement: "HttpOnly, Secure, SameSite=Strict rotating JWTs",
  encryptionAtRest: "AES-256-GCM hardware security modules",
  egressFirewall: "mTLS authenticated microservice mesh",
  compliance: ["SOC2 Type II Ready", "GDPR", "HIPAA Architecture"],
  telemetry: "Real-time anomaly detection with automated IP quarantine"
};`
        }
    };

    // Core Disciplines
    const coreExpertise = [
        {
            icon: Cpu,
            title: 'Full-Stack Web Engineering',
            desc: 'Next.js 15, React 19, high-throughput Node.js microservices, and distributed edge architectures optimized for sub-100ms TTFB.',
            tags: ['Next.js 15', 'React 19', 'Edge SSR', 'TypeScript'],
            metric: '99.9% SLA',
            color: '#FF6A00',
            img: '/assets/showcase_web_dev.jpg'
        },
        {
            icon: Zap,
            title: 'Autonomous AI & LLM Systems',
            desc: 'Multi-agent orchestration, semantic vector RAG, stateful memory graphs, and custom model fine-tuning for mission-critical operations.',
            tags: ['LangGraph', 'Vector Stores', 'Multi-Agent', 'Tool-Calling'],
            metric: 'Zero-Latency RAG',
            color: '#FF8C32',
            img: '/assets/showcase_ai.jpg'
        },
        {
            icon: Layers,
            title: 'Scalable SaaS & Cloud Systems',
            desc: 'Multi-tenant database schema isolation, event-driven Stripe billing architectures, distributed queues, and 99.99% availability SLAs.',
            tags: ['PostgreSQL RLS', 'BullMQ', 'Stripe Billing', 'Docker/K8s'],
            metric: 'Multi-Tenant Scale',
            color: '#FF6A00',
            img: '/assets/showcase_dashboard.jpg'
        },
        {
            icon: Globe,
            title: 'High-Conversion UI/UX Craft',
            desc: 'Spatial design systems, micro-interactions, hardware-accelerated 60fps animations, WCAG accessibility, and sub-second TTI.',
            tags: ['Spatial UI', '60 FPS Motion', 'Design Tokens', 'Figma Sync'],
            metric: '60 FPS Motion',
            color: '#FF8C32',
            img: '/assets/experience.jpg'
        },
        {
            icon: ShieldCheck,
            title: 'Zero-Trust Cloud Security',
            desc: 'Cryptographic token rotation, HTTP-only secure cookie sessions, prompt injection firewalls, and least-privilege egress controls.',
            tags: ['Zero-Trust', 'OAuth 2.1', 'Audit Logs', 'mTLS'],
            metric: 'Enterprise Security',
            color: '#FF6A00',
            img: '/assets/pipeline.jpg'
        },
        {
            icon: Target,
            title: 'Enterprise Automation Pipelines',
            desc: 'Event-driven Kafka triggers, asynchronous background processing, autonomous OCR ingestion, and transactional ERP integrations.',
            tags: ['Kafka', 'Webhooks', 'Serverless', 'Audit Trails'],
            metric: 'Async Queues',
            color: '#FF8C32',
            img: '/assets/motion_vfx.jpg'
        }
    ];

    // Company Values
    const companyValues = [
        {
            num: '01',
            title: 'Engineering Dignity',
            desc: 'We reject bloated boilerplate and throwaway code. Every repository we deliver is built with clean architecture, strict TypeScript schemas, and production telemetry.',
            badge: 'Architecture First'
        },
        {
            num: '02',
            title: 'Radical Velocity',
            desc: 'Speed and quality are not mutually exclusive. Our modular system architecture and automated CI/CD harnesses allow us to ship complex digital products in days, not quarters.',
            badge: 'Rapid Shipping'
        },
        {
            num: '03',
            title: 'Transparent Partnership',
            desc: 'Zero opaque agency layers. You work directly with senior systems architects who understand both business economics and technical implementation details.',
            badge: 'Zero Middlemen'
        },
        {
            num: '04',
            title: 'Continuous Innovation',
            desc: 'We continuously benchmark and adopt bleeding-edge AI models, edge runtimes, and performance primitives so our clients maintain a definitive technological moat.',
            badge: 'Bleeding Edge'
        }
    ];

    // Comparison Matrix
    const comparisonPoints = [
        {
            metric: 'Turnaround & Scoping',
            rovaware: '24-hour rapid architecture scoping & milestone blueprint',
            traditional: '2–3 weeks of bureaucratic discovery meetings'
        },
        {
            metric: 'Engineering Talent',
            rovaware: 'Senior full-stack & AI architects only — 100% in-house',
            traditional: 'Junior teams or outsourced overseas subcontractors'
        },
        {
            metric: 'AI & Automation',
            rovaware: 'Native multi-agent systems, vector RAG, and automated pipelines',
            traditional: 'Superficial chat wrappers or no AI integration'
        },
        {
            metric: 'Code Ownership & IP',
            rovaware: '100% clean IP transfer, documented repos, zero vendor lock-in',
            traditional: 'Proprietary platforms, recurring licensing fees'
        },
        {
            metric: 'Production Reliability',
            rovaware: '99.9% uptime SLA, sub-100ms TTFB, automated test suites',
            traditional: 'Untested deployments, frequent regression bugs'
        }
    ];

    // Development Process Stages
    const developmentStages = [
        {
            step: '01',
            title: 'Architecture Blueprint & Strategic Scoping',
            duration: 'Day 1–3',
            desc: 'We unpack your product goals, map technical requirements, define database schemas, and select the optimal technology stack.',
            deliverables: [
                'System Architecture & Topology Diagram',
                'Database Schema & Data Flow Modeling',
                'Milestone Estimation & Scope Blueprint'
            ],
            tags: ['System Topology', 'Database Design', 'Scope Blueprint']
        },
        {
            step: '02',
            title: 'Spatial UI/UX & High-Fidelity Prototypes',
            duration: 'Week 1',
            desc: 'We craft bespoke, modern visual interfaces in Figma, establishing reusable design tokens and micro-interactions before writing code.',
            deliverables: [
                'Figma Design System & Token Tokens',
                'Interactive Clickable Component Prototype',
                'Mobile, Tablet & Desktop Responsive Layouts'
            ],
            tags: ['Figma Tokens', 'Micro-Interactions', 'Responsive UX']
        },
        {
            step: '03',
            title: 'Full-Stack Engineering & AI Toolchain',
            duration: 'Week 2–3',
            desc: 'Our engineers build production-ready code with Next.js, TypeScript, PostgreSQL, and autonomous AI agents backed by automated testing.',
            deliverables: [
                'Strictly Typed Clean Modular Codebase',
                'Secure REST/GraphQL & Vector DB Integration',
                'Continuous Integration & End-to-End Testing'
            ],
            tags: ['Next.js 15', 'LangGraph AI', 'Edge APIs', 'Jest / Playwright']
        },
        {
            step: '04',
            title: 'Zero-Downtime Launch & Clean IP Handover',
            duration: 'Launch',
            desc: 'We deploy to edge cloud infrastructure, verify Core Web Vitals, and transfer 100% repository ownership directly to your team.',
            deliverables: [
                'Production Edge Deployment & Custom Domain SSL',
                '100% Lighthouse Performance Verification',
                'Full Git Source Code & Architecture Handover'
            ],
            tags: ['Global Edge CDN', 'Lighthouse 100', 'Full IP Transfer']
        }
    ];

    // Technology Stack Items
    const techStack = [
        { name: 'Next.js 15', category: 'frontend', role: 'Full-Stack Framework & Edge SSR', badge: 'v15 App Router' },
        { name: 'React 19', category: 'frontend', role: 'Component Architecture & Server Actions', badge: 'Latest' },
        { name: 'TypeScript', category: 'frontend', role: 'End-to-End Strict Type Safety', badge: 'Strict' },
        { name: 'TailwindCSS', category: 'frontend', role: 'Hardware-Accelerated Utility Styling', badge: 'Modern' },
        { name: 'Node.js', category: 'backend', role: 'High-Throughput Asynchronous Services', badge: 'Microservices' },
        { name: 'Python & FastAPI', category: 'backend', role: 'AI Inference & Data Processing Engines', badge: 'High-Speed' },
        { name: 'PostgreSQL', category: 'cloud', role: 'Relational Store with Row Level Security', badge: 'ACID' },
        { name: 'Redis', category: 'cloud', role: 'Sub-Millisecond In-Memory Caching & Queues', badge: '< 1ms' },
        { name: 'LangGraph & LangChain', category: 'ai', role: 'Stateful Multi-Agent Orchestration', badge: 'Agentic' },
        { name: 'Qdrant / Pinecone', category: 'ai', role: 'High-Dimensional Vector Embeddings & RAG', badge: 'Vector Search' },
        { name: 'Docker & Kubernetes', category: 'cloud', role: 'Container Orchestration & Cluster Scaling', badge: 'Cloud Native' },
        { name: 'Cloudflare Workers', category: 'cloud', role: 'Global Low-Latency Edge Compute', badge: '< 30ms Edge' }
    ];

    const filteredTech = activeTechCategory === 'all'
        ? techStack
        : techStack.filter((t) => t.category === activeTechCategory);

    return (
        <div className="about-company-root">
            {/* ------------------------------------------------------------------ */}
            {/* 1. WHO WE ARE & INTERACTIVE STUDIO SHOWCASE                        */}
            {/* ------------------------------------------------------------------ */}
            <section className="about-content-section who-first-section" id="who-we-are" ref={whoSectionRef}>
                <div className="about-content-container">
                    {/* Top Breadcrumb Navigation */}
                    <nav className="about-page-breadcrumb" aria-label="Breadcrumb">
                        <button
                            type="button"
                            className="about-breadcrumb-btn"
                            onClick={onNavigateHome}
                        >
                            Home
                        </button>
                        <ChevronRight size={13} />
                        <span>About</span>
                        <ChevronRight size={13} />
                        <span className="about-breadcrumb-active">Company</span>
                    </nav>

                    <div className="who-we-are-split">
                        {/* Left Narrative Column */}
                        <div className="who-narrative-col">
                            <div className="section-pill-badge">
                                <Users size={13} />
                                <span>WHO WE ARE</span>
                            </div>

                            {/* Eyebrow Label */}
                            <div className={`who-eyebrow-label ${whoInView ? 'in-view' : ''}`}>
                                <span className="who-eyebrow-line" />
                                <span>ENGINEERING-FIRST. INNOVATION-DRIVEN.</span>
                            </div>

                            {/* Word-by-word reveal heading */}
                            <h2 className={`section-display-heading who-heading-animated ${whoInView ? 'in-view' : ''}`}>
                                {[
                                    { text: 'A', highlight: false },
                                    { text: 'Studio', highlight: false },
                                    { text: 'Built', highlight: false },
                                    { text: 'for', highlight: false },
                                    { text: 'Builders,', highlight: true },
                                    { text: 'Driven', highlight: false },
                                    { text: 'by', highlight: false },
                                    { text: 'Deep', highlight: true },
                                    { text: 'Engineering', highlight: true },
                                    { text: 'Craft.', highlight: true }
                                ].map((item, idx) => (
                                    <span
                                        key={idx}
                                        className={`who-word-wrap ${item.highlight ? 'word-highlight-orange' : ''}`}
                                        style={{
                                            transitionDelay: `${idx * 45}ms`
                                        }}
                                    >
                                        <span className="who-word-inner">{item.text}&nbsp;</span>
                                    </span>
                                ))}
                            </h2>

                            <p className={`section-narrative-paragraph who-para ${whoInView ? 'in-view' : ''}`} style={{ transitionDelay: '350ms' }}>
                                Founded to bridge the widening gap between slow, fragmented legacy agencies and hyper-accelerated
                                digital demands, RovaWare operates as a tactical engineering force for modern companies.
                            </p>
                            <p className={`section-narrative-paragraph who-para ${whoInView ? 'in-view' : ''}`} style={{ transitionDelay: '470ms' }}>
                                We do not employ non-technical account managers or push generic cookie-cutter templates.
                                When you collaborate with RovaWare, your roadmap is owned by architects and developers who write
                                production-grade code, stress-test database schemas, and deploy resilient autonomous AI systems.
                            </p>

                            {/* Feature Cards / Craft Checklist */}
                            <div className="craft-checklist">
                                {[
                                    {
                                        title: 'Direct Architectural Access',
                                        desc: 'No middlemen. You collaborate directly with senior systems developers.'
                                    },
                                    {
                                        title: '100% Clean Intellectual Property Transfer',
                                        desc: 'Full source code, repositories, and documentation transferred upon completion.'
                                    },
                                    {
                                        title: 'Continuous Automated Quality Harnesses',
                                        desc: 'Strict TypeScript schemas, automated regression tests, and sub-second Lighthouse budgets.'
                                    }
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`craft-check-item ${whoInView ? 'in-view' : ''}`}
                                        style={{
                                            transitionDelay: `${520 + idx * 130}ms`
                                        }}
                                    >
                                        <div className="check-icon-circle">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <div className="check-text">
                                            <strong>{item.title}</strong>
                                            <span>{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Interactive Showcase Column */}
                        <div className="who-interactive-col">
                            {/* Studio Cinematic Ambient Card with Image */}
                            <div
                                className={`studio-experience-card ${whoInView ? 'in-view' : ''}`}
                                style={{ transitionDelay: '260ms' }}
                            >
                                <div className="video-ambient-glow" aria-hidden="true" />
                                <div className="video-viewport">
                                    <img
                                        src="https://plus.unsplash.com/premium_photo-1661299410661-b734635d5ced?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                                        alt="ROVAWARE Digital Labs — Modern Engineering Studio"
                                        className="studio-viewport-image"
                                        loading="lazy"
                                    />
                                    <div className="video-viewport-overlay" />
                                    <div className="video-status-chip">
                                        <span className="pulse-live-dot" />
                                        <span>ROVAWARE DIGITAL LABS</span>
                                    </div>
                                </div>
                            </div>

                            {/* Interactive Code Terminal with 4 Tabs */}
                            <div
                                className={`interactive-code-terminal ${whoInView ? 'in-view' : ''}`}
                                style={{ transitionDelay: '400ms' }}
                            >
                                <div className="terminal-header-bar">
                                    <div className="terminal-traffic-lights">
                                        <span className="light light-red" />
                                        <span className="light light-yellow" />
                                        <span className="light light-green" />
                                    </div>

                                    <div className="terminal-tab-selector" role="tablist">
                                        {[
                                            { key: 'manifesto', label: 'manifesto.ts' },
                                            { key: 'architecture', label: 'distributed.ts' },
                                            { key: 'ai_agent', label: 'agent.py' },
                                            { key: 'security', label: 'security.ts' }
                                        ].map((tab) => (
                                            <button
                                                key={tab.key}
                                                type="button"
                                                role="tab"
                                                aria-selected={activeCodeTab === tab.key}
                                                className={`terminal-tab-btn ${activeCodeTab === tab.key ? 'active' : ''}`}
                                                onClick={() => setActiveCodeTab(tab.key)}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="terminal-lang-badge">
                                        <span>{codeSnippets[activeCodeTab].lang}</span>
                                    </div>
                                </div>

                                <div className="terminal-code-body" role="region" aria-label="Code Editor Preview">
                                    {codeSnippets[activeCodeTab].code.split('\n').map((line, lineIdx, arr) => (
                                        <div
                                            key={`${activeCodeTab}-${lineIdx}`}
                                            className={`terminal-line ${whoInView ? 'line-visible' : ''}`}
                                            style={{
                                                transitionDelay: whoInView ? `${Math.min(lineIdx * 35, 550)}ms` : '0ms'
                                            }}
                                        >
                                            <span className="terminal-line-num">{lineIdx + 1}</span>
                                            <span className="terminal-line-code">
                                                {line}
                                                {lineIdx === arr.length - 1 && (
                                                    <span className="terminal-cursor" aria-hidden="true" />
                                                )}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* 2. 3D SHARD ASSEMBLY & BRAND REVEAL HERO                           */}
            {/* ------------------------------------------------------------------ */}
            <ShardAssemblyHero
                onNavigateHome={onNavigateHome}
                onNavigateBookProject={onNavigateBookProject}
                onNavigateContact={onNavigateContact}
            />

            {/* Floating Key Architectural Telemetry Banner */}
            <div className="about-telemetry-strip-wrapper">
                <div className="about-telemetry-banner">
                    <div className="telemetry-item">
                        <span className="telemetry-value">24h</span>
                        <span className="telemetry-label">Architecture Scoping</span>
                    </div>
                    <div className="telemetry-divider" />
                    <div className="telemetry-item">
                        <span className="telemetry-value">&lt; 100ms</span>
                        <span className="telemetry-label">Global Edge Latency</span>
                    </div>
                    <div className="telemetry-divider" />
                    <div className="telemetry-item">
                        <span className="telemetry-value">100%</span>
                        <span className="telemetry-label">In-House Senior Engineers</span>
                    </div>
                    <div className="telemetry-divider" />
                    <div className="telemetry-item">
                        <span className="telemetry-value">Zero</span>
                        <span className="telemetry-label">Vendor Lock-In Guarantee</span>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------------------------ */}
            {/* 3. MISSION & VISION                                                */}
            {/* ------------------------------------------------------------------ */}
            <section className="about-content-section section-alternate" id="mission-vision" ref={missionSectionRef}>
                <div className="about-content-container">
                    <div className="section-center-head">
                        <div className="section-pill-badge">
                            <Compass size={13} />
                            <span>PURPOSE & DIRECTION</span>
                        </div>
                        <h2 className="section-display-heading">Mission & Vision</h2>
                        <p className="section-center-sub">
                            Our guiding north stars that inform every sprint, architecture diagram, and production release.
                        </p>
                    </div>

                    <div className="mission-vision-grid">
                        {/* Mission Card with Akaru 3D Tilt & Specular Light */}
                        <div
                            className={`hologram-card mission-glow ${missionInView ? 'in-view' : ''}`}
                            style={{
                                transitionDelay: '80ms',
                                transform: missionInView
                                    ? `perspective(1000px) rotateX(${missionTilt.tilt.rx}deg) rotateY(${missionTilt.tilt.ry}deg) translateY(${missionTilt.tilt.rx !== 0 ? -6 : 0}px)`
                                    : 'translateY(18px)'
                            }}
                            onMouseMove={missionTilt.onMouseMove}
                            onMouseLeave={missionTilt.onMouseLeave}
                        >
                            <div
                                className="hologram-card-ambient"
                                style={{
                                    background: `radial-gradient(circle at ${missionTilt.tilt.gx}% ${missionTilt.tilt.gy}%, rgba(255, 106, 0, 0.22) 0%, rgba(255, 140, 50, 0.05) 50%, transparent 75%)`
                                }}
                            />
                            <div className="card-top-icon-row">
                                <div className="card-icon-emblem">
                                    <Target size={24} />
                                </div>
                                <span className="card-kicker-tag">OUR MISSION</span>
                            </div>
                            <h3 className="card-main-title">
                                Empower Digital Innovators with <span className="mv-highlight-orange">Uncompromising Speed & Craft</span>
                            </h3>
                            <p className="card-main-desc">
                                To eliminate technical debt and execution bottlenecks for fast-growing businesses by architecting
                                production web applications, distributed APIs, and autonomous AI systems that drive measurable commercial growth.
                            </p>
                            <div className="card-footer-pill">
                                <Check size={14} />
                                <span>Zero throwaway code • Scalable foundations</span>
                            </div>
                        </div>

                        {/* Vision Card with Akaru 3D Tilt & Specular Light */}
                        <div
                            className={`hologram-card vision-glow ${missionInView ? 'in-view' : ''}`}
                            style={{
                                transitionDelay: '220ms',
                                transform: missionInView
                                    ? `perspective(1000px) rotateX(${visionTilt.tilt.rx}deg) rotateY(${visionTilt.tilt.ry}deg) translateY(${visionTilt.tilt.rx !== 0 ? -6 : 0}px)`
                                    : 'translateY(18px)'
                            }}
                            onMouseMove={visionTilt.onMouseMove}
                            onMouseLeave={visionTilt.onMouseLeave}
                        >
                            <div
                                className="hologram-card-ambient"
                                style={{
                                    background: `radial-gradient(circle at ${visionTilt.tilt.gx}% ${visionTilt.tilt.gy}%, rgba(255, 106, 0, 0.22) 0%, rgba(255, 140, 50, 0.05) 50%, transparent 75%)`
                                }}
                            />
                            <div className="card-top-icon-row">
                                <div className="card-icon-emblem">
                                    <Sparkles size={24} />
                                </div>
                                <span className="card-kicker-tag">OUR VISION</span>
                            </div>
                            <h3 className="card-main-title">
                                The Gold Standard in <span className="mv-highlight-orange">Next-Generation Software Engineering</span>
                            </h3>
                            <p className="card-main-desc">
                                To pioneer an engineering model where human architectural craftsmanship and autonomous agentic workflows
                                converge, enabling modern companies to ship enterprise-grade software at 10x velocity without sacrificing quality.
                            </p>
                            <div className="card-footer-pill">
                                <Check size={14} />
                                <span>Human craft + Autonomous AI toolchains</span>
                            </div>
                        </div>
                    </div>

                    {/* Thin animated orange divider below both cards */}
                    <div className={`mission-vision-divider-wrap ${missionInView ? 'in-view' : ''}`}>
                        <div className="mission-vision-divider-line" />
                        <div className="mission-vision-tagline">
                            <span>PURPOSE. PRECISION. PROGRESS.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* 4. CORE ENGINEERING DISCIPLINES — STICKY SCROLL GALLERY             */}
            {/* ------------------------------------------------------------------ */}
            <div ref={disciplinesRef}>
                <StickyDisciplinesGallery
                    items={coreExpertise}
                    inView={disciplinesInView}
                />
            </div>

            {/* ------------------------------------------------------------------ */}
            {/* 4.5 3D STACKED PORTFOLIO PROJECT SHOWCASE                          */}
            {/* ------------------------------------------------------------------ */}
            <section className="about-content-section section-alternate" id="featured-projects">
                <div className="about-content-container">
                    <div className="section-center-head">
                        <div className="section-pill-badge">
                            <Sparkles size={13} />
                            <span>FEATURED WORK</span>
                        </div>
                        <h2 className="section-display-heading">
                            Engineered for Scale. <span className="mv-highlight-orange">Built with Precision.</span>
                        </h2>
                        <p className="section-center-sub">
                            An interactive 3D showcase of production systems, high-concurrency web platforms, and autonomous AI architectures shipped by RovaWare.
                        </p>
                    </div>

                    <Stacked3DProjectShowcase onNavigateWork={onNavigateWork} />
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* 5. COMPANY VALUES                                                  */}
            {/* ------------------------------------------------------------------ */}
            <section className="about-content-section" id="company-values" ref={valuesRef}>
                <div className="about-content-container">
                    <div className="section-center-head">
                        <div className="section-pill-badge">
                            <Award size={13} />
                            <span>OUR CODE</span>
                        </div>
                        <h2 className="section-display-heading">Company Values</h2>
                        <p className="section-center-sub">
                            The fundamental engineering tenets that dictate how we write, review, and ship software.
                        </p>
                    </div>

                    <div className="values-stagger-grid">
                        {companyValues.map((val, idx) => (
                            <div
                                key={idx}
                                className={`value-pillar-card ${valuesInView ? 'in-view' : ''}`}
                                style={{ transitionDelay: `${idx * 90}ms` }}
                            >
                                <div className="value-card-header">
                                    <span className="value-pillar-number">{val.num}</span>
                                    <span className="value-pillar-badge">{val.badge}</span>
                                </div>
                                <h3 className="value-pillar-title">{val.title}</h3>
                                <p className="value-pillar-desc">{val.desc}</p>
                                <div className="value-bottom-line" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* 6. WHY CHOOSE ROVAWARE (COMPARISON TABLE)                          */}
            {/* ------------------------------------------------------------------ */}
            <section className="about-content-section" id="why-choose" ref={whyRef}>
                <div className="about-content-container">
                    <div className="section-center-head">
                        <div className="section-pill-badge">
                            <ShieldCheck size={13} />
                            <span>THE ROVAWARE ADVANTAGE</span>
                        </div>
                        <h2 className="section-display-heading">Why Leading Teams Choose RovaWare</h2>
                        <p className="section-center-sub">
                            How our engineering-first model compares against legacy software vendors and traditional agencies.
                        </p>
                    </div>

                    <div className={`comparison-table-futuristic-card ${whyInView ? 'in-view' : ''}`}>
                        <div className="table-responsive-wrapper">
                            <table className="futuristic-comparison-table">
                                <thead>
                                    <tr>
                                        <th>Evaluation Criteria</th>
                                        <th className="table-highlight-head">
                                            <div className="rovaware-head-content">
                                                <Sparkles size={14} />
                                                <span>RovaWare Studio</span>
                                            </div>
                                        </th>
                                        <th>Traditional Agencies</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonPoints.map((row, idx) => (
                                        <tr key={idx}>
                                            <td className="criteria-label-col">{row.metric}</td>
                                            <td className="table-highlight-col">
                                                <div className="rovaware-advantage-row">
                                                    <CheckCircle2 size={16} className="advantage-check-icon" />
                                                    <span>{row.rovaware}</span>
                                                </div>
                                            </td>
                                            <td className="traditional-col">{row.traditional}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="table-footer-callout">
                            <span className="sla-dot" />
                            <span>All engagements backed by mutual NDA, milestone acceptance criteria, and 100% IP ownership.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* 7. OUR DEVELOPMENT PROCESS                                         */}
            {/* ------------------------------------------------------------------ */}
            <section className="about-content-section section-alternate" id="development-process" ref={processRef}>
                <div className="about-content-container">
                    <div className="section-center-head">
                        <div className="section-pill-badge">
                            <Workflow size={13} />
                            <span>ENGINEERING METHODOLOGY</span>
                        </div>
                        <h2 className="section-display-heading">Our Development Process</h2>
                        <p className="section-center-sub">
                            A transparent, milestone-driven framework designed to ship production-ready digital products with maximum momentum.
                        </p>
                    </div>

                    {/* Process Stage Selector Tabs */}
                    <div className={`process-interactive-wrapper ${processInView ? 'in-view' : ''}`}>
                        <div className="process-stage-pills">
                            {developmentStages.map((stage, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    className={`stage-selector-btn ${activeProcessStage === idx ? 'active' : ''}`}
                                    onClick={() => setActiveProcessStage(idx)}
                                >
                                    <span className="stage-num-badge">{stage.step}</span>
                                    <span className="stage-short-title">{stage.title.split('&')[0].trim()}</span>
                                </button>
                            ))}
                        </div>

                        {/* Active Stage Detail Showcase */}
                        <div className="active-stage-card">
                            <div className="active-stage-header">
                                <div className="stage-tag-group">
                                    <span className="stage-active-badge">STAGE {developmentStages[activeProcessStage].step}</span>
                                    <span className="stage-duration-chip">
                                        <Clock size={13} />
                                        <span>{developmentStages[activeProcessStage].duration}</span>
                                    </span>
                                </div>
                                <h3 className="stage-expanded-title">
                                    {developmentStages[activeProcessStage].title}
                                </h3>
                                <p className="stage-expanded-desc">
                                    {developmentStages[activeProcessStage].desc}
                                </p>
                            </div>

                            <div className="stage-deliverables-panel">
                                <h4 className="deliverables-heading">Key Milestone Deliverables:</h4>
                                <div className="deliverables-grid">
                                    {developmentStages[activeProcessStage].deliverables.map((item, dIdx) => (
                                        <div key={dIdx} className="deliverable-item-box">
                                            <CheckCircle2 size={16} className="deliv-icon" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="stage-tech-pills">
                                    {developmentStages[activeProcessStage].tags.map((t, tIdx) => (
                                        <span key={tIdx} className="stage-pill-token">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* 8. TECHNOLOGY STACK                                                */}
            {/* ------------------------------------------------------------------ */}
            <section className="about-content-section" id="tech-stack" ref={techRef}>
                <div className="about-content-container">
                    <div className="section-center-head">
                        <div className="section-pill-badge">
                            <Database size={13} />
                            <span>THE PRODUCTION TOOLCHAIN</span>
                        </div>
                        <h2 className="section-display-heading">Battle-Tested Technology Stack</h2>
                        <p className="section-center-sub">
                            We select modern, resilient technologies engineered for velocity, zero technical debt, and enterprise scale.
                        </p>
                    </div>

                    {/* Category Filter Pills with Sliding Indicator */}
                    <div className="tech-filter-row" ref={filterRowRef}>
                        {/* Sliding Orange Active Indicator */}
                        <div
                            className="tech-filter-pill-slider"
                            style={{
                                transform: `translateX(${sliderStyle.left}px)`,
                                width: `${sliderStyle.width}px`,
                                opacity: sliderStyle.opacity
                            }}
                            aria-hidden="true"
                        />

                        {[
                            { id: 'all', label: `All Tooling (${techStack.length})` },
                            { id: 'frontend', label: 'Frontend & Edge' },
                            { id: 'backend', label: 'Backend & APIs' },
                            { id: 'ai', label: 'AI & Vector Engines' },
                            { id: 'cloud', label: 'Cloud & Databases' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                ref={(el) => { filterBtnRefs.current[tab.id] = el; }}
                                type="button"
                                className={`tech-filter-pill ${activeTechCategory === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTechCategory(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tech Grid */}
                    <div className="tech-cards-grid" key={activeTechCategory}>
                        {filteredTech.map((tech, idx) => (
                            <TechStackCard
                                key={tech.name}
                                tech={tech}
                                idx={idx}
                                inView={techInView}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* 9. FINAL CTA – READY TO BUILD SOMETHING EXTRAORDINARY?            */}
            {/* ------------------------------------------------------------------ */}
            <section className="about-final-cta-section" id="final-cta" ref={ctaRef}>
                <div className="about-cta-futuristic-container">
                    <div className="cta-ambient-cosmic-glow" aria-hidden="true" />

                    <div className={`cta-content-wrapper ${ctaInView ? 'in-view' : ''}`}>
                        <div className="cta-kicker-pill">
                            <Sparkles size={14} />
                            <span>START YOUR ARCHITECTURE SPRINT</span>
                        </div>

                        <h2 className="cta-headline">
                            Ready to Build Something <span className="cta-gradient-glow">Extraordinary?</span>
                        </h2>

                        <p className="cta-lead-desc">
                            Whether you need a high-performance web platform, an autonomous AI pipeline, or a complete
                            SaaS application, our principal architects are ready to evaluate your requirements.
                        </p>

                        <div className="cta-action-buttons">
                            <button
                                type="button"
                                className="about-action-btn primary large-btn"
                                onClick={onNavigateBookProject}
                            >
                                <Rocket size={17} />
                                <span>Book a Project</span>
                                <ArrowRight size={16} />
                            </button>

                            <button
                                type="button"
                                className="about-action-btn ghost large-btn"
                                onClick={onNavigateContact}
                            >
                                <span>Direct Studio Inquiry</span>
                                <ArrowUpRight size={16} />
                            </button>
                        </div>

                        {/* Quick Commitments */}
                        <div className="cta-guarantees-row">
                            <div className="cta-guarantee-item">
                                <CheckCircle2 size={15} />
                                <span>24-Hour Scope Blueprint</span>
                            </div>
                            <div className="cta-guarantee-item">
                                <ShieldCheck size={15} />
                                <span>Mutual Non-Disclosure Agreement</span>
                            </div>
                            <div className="cta-guarantee-item">
                                <Code2 size={15} />
                                <span>100% Repository IP Ownership</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* 10. STUDIO QUICK EXPLORATION BAR (Paving into Footer)              */}
            {/* ------------------------------------------------------------------ */}
            <div className="about-footer-exploration-strip">
                <div className="strip-container">
                    <span className="strip-label">EXPLORE ROVAWARE ECOSYSTEM:</span>
                    <div className="strip-links">
                        {onNavigateWork && (
                            <button type="button" className="strip-link-btn" onClick={onNavigateWork}>
                                Client Work
                            </button>
                        )}
                        {onNavigateBlog && (
                            <button type="button" className="strip-link-btn" onClick={onNavigateBlog}>
                                Engineering Blog & Insights
                            </button>
                        )}
                        <button type="button" className="strip-link-btn" onClick={onNavigateContact}>
                            Contact Desk
                        </button>
                        <button type="button" className="strip-link-btn" onClick={onNavigateBookProject}>
                            Project Intake Scoping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
