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
  const [videoPlaying, setVideoPlaying] = useState(true);
  const videoRef = useRef(null);

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
      color: '#FF6A00'
    },
    {
      icon: Zap,
      title: 'Autonomous AI & LLM Systems',
      desc: 'Multi-agent orchestration, semantic vector RAG, stateful memory graphs, and custom model fine-tuning for mission-critical operations.',
      tags: ['LangGraph', 'Vector Stores', 'Multi-Agent', 'Tool-Calling'],
      metric: 'Zero-Latency RAG',
      color: '#FF8C32'
    },
    {
      icon: Layers,
      title: 'Scalable SaaS & Cloud Systems',
      desc: 'Multi-tenant database schema isolation, event-driven Stripe billing architectures, distributed queues, and 99.99% availability SLAs.',
      tags: ['PostgreSQL RLS', 'BullMQ', 'Stripe Billing', 'Docker/K8s'],
      metric: 'Multi-Tenant Scale',
      color: '#FF6A00'
    },
    {
      icon: Globe,
      title: 'High-Conversion UI/UX Craft',
      desc: 'Spatial design systems, micro-interactions, hardware-accelerated 60fps animations, WCAG accessibility, and sub-second TTI.',
      tags: ['Spatial UI', '60 FPS Motion', 'Design Tokens', 'Figma Sync'],
      metric: '60 FPS Motion',
      color: '#FF8C32'
    },
    {
      icon: ShieldCheck,
      title: 'Zero-Trust Cloud Security',
      desc: 'Cryptographic token rotation, HTTP-only secure cookie sessions, prompt injection firewalls, and least-privilege egress controls.',
      tags: ['Zero-Trust', 'OAuth 2.1', 'Audit Logs', 'mTLS'],
      metric: 'Enterprise Security',
      color: '#FF6A00'
    },
    {
      icon: Target,
      title: 'Enterprise Automation Pipelines',
      desc: 'Event-driven Kafka triggers, asynchronous background processing, autonomous OCR ingestion, and transactional ERP integrations.',
      tags: ['Kafka', 'Webhooks', 'Serverless', 'Audit Trails'],
      metric: 'Async Queues',
      color: '#FF8C32'
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
      {/* 1. 3D SHARD ASSEMBLY & MESH RECONSTRUCTION HERO                     */}
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
      {/* 2. WHO WE ARE & INTERACTIVE STUDIO SHOWCASE                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="about-content-section" id="who-we-are">
        <div className="about-content-container">
          <div className="who-we-are-split">
            {/* Left Narrative Column */}
            <div className="who-narrative-col">
              <div className="section-pill-badge">
                <Users size={13} />
                <span>WHO WE ARE</span>
              </div>
              <h2 className="section-display-heading">
                A Studio Built for Builders, Driven by Deep Engineering Craft.
              </h2>
              <p className="section-narrative-paragraph">
                Founded to bridge the widening gap between slow, fragmented legacy agencies and hyper-accelerated
                digital demands, RovaWare operates as a tactical engineering force for modern companies.
              </p>
              <p className="section-narrative-paragraph">
                We do not employ non-technical account managers or push generic cookie-cutter templates.
                When you collaborate with RovaWare, your roadmap is owned by architects and developers who write
                production-grade code, stress-test database schemas, and deploy resilient autonomous AI systems.
              </p>

              <div className="craft-checklist">
                <div className="craft-check-item">
                  <div className="check-icon-circle">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="check-text">
                    <strong>Direct Architectural Access</strong>
                    <span>No middlemen. You collaborate directly with senior systems developers.</span>
                  </div>
                </div>

                <div className="craft-check-item">
                  <div className="check-icon-circle">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="check-text">
                    <strong>100% Clean Intellectual Property Transfer</strong>
                    <span>Full source code, repositories, and documentation transferred upon completion.</span>
                  </div>
                </div>

                <div className="craft-check-item">
                  <div className="check-icon-circle">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="check-text">
                    <strong>Continuous Automated Quality Harnesses</strong>
                    <span>Strict TypeScript schemas, automated regression tests, and sub-second Lighthouse budgets.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Showcase Column */}
            <div className="who-interactive-col">
              {/* Studio Cinematic Ambient Card */}
              <div className="studio-experience-card">
                <div className="video-ambient-glow" aria-hidden="true" />
                <div className="video-viewport">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/assets/experience.jpg"
                    className="studio-viewport-video"
                  >
                    <source src="/assets/about_experience.mp4" type="video/mp4" />
                  </video>
                  <div className="video-viewport-overlay" />
                  <div className="video-status-chip">
                    <span className="pulse-live-dot" />
                    <span>ROVAWARE DIGITAL LABS</span>
                  </div>
                </div>
              </div>

              {/* Interactive Code Terminal with 4 Tabs */}
              <div className="interactive-code-terminal">
                <div className="terminal-header-bar">
                  <div className="terminal-traffic-lights">
                    <span className="light light-red" />
                    <span className="light light-yellow" />
                    <span className="light light-green" />
                  </div>

                  <div className="terminal-tab-selector">
                    <button
                      type="button"
                      className={`terminal-tab-btn ${activeCodeTab === 'manifesto' ? 'active' : ''}`}
                      onClick={() => setActiveCodeTab('manifesto')}
                    >
                      manifesto.ts
                    </button>
                    <button
                      type="button"
                      className={`terminal-tab-btn ${activeCodeTab === 'architecture' ? 'active' : ''}`}
                      onClick={() => setActiveCodeTab('architecture')}
                    >
                      distributed.ts
                    </button>
                    <button
                      type="button"
                      className={`terminal-tab-btn ${activeCodeTab === 'ai_agent' ? 'active' : ''}`}
                      onClick={() => setActiveCodeTab('ai_agent')}
                    >
                      agent.py
                    </button>
                    <button
                      type="button"
                      className={`terminal-tab-btn ${activeCodeTab === 'security' ? 'active' : ''}`}
                      onClick={() => setActiveCodeTab('security')}
                    >
                      security.ts
                    </button>
                  </div>

                  <div className="terminal-lang-badge">
                    <span>{codeSnippets[activeCodeTab].lang}</span>
                  </div>
                </div>

                <pre className="terminal-code-body">
                  <code>{codeSnippets[activeCodeTab].code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. MISSION & VISION                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="about-content-section section-alternate" id="mission-vision">
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
            {/* Mission Card */}
            <div className="hologram-card mission-glow">
              <div className="hologram-card-ambient" />
              <div className="card-top-icon-row">
                <div className="card-icon-emblem">
                  <Target size={24} />
                </div>
                <span className="card-kicker-tag">OUR MISSION</span>
              </div>
              <h3 className="card-main-title">
                Empower Digital Innovators with Uncompromising Speed & Craft
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

            {/* Vision Card */}
            <div className="hologram-card vision-glow">
              <div className="hologram-card-ambient" />
              <div className="card-top-icon-row">
                <div className="card-icon-emblem">
                  <Sparkles size={24} />
                </div>
                <span className="card-kicker-tag">OUR VISION</span>
              </div>
              <h3 className="card-main-title">
                The Gold Standard in Next-Generation Software Engineering
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
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. CORE ENGINEERING DISCIPLINES                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="about-content-section" id="disciplines">
        <div className="about-content-container">
          <div className="section-center-head">
            <div className="section-pill-badge">
              <Cpu size={13} />
              <span>CAPABILITIES & ARCHITECTURE</span>
            </div>
            <h2 className="section-display-heading">Core Engineering Disciplines</h2>
            <p className="section-center-sub">
              Deep, battle-tested expertise across modern web architectures, cloud infrastructure, and artificial intelligence.
            </p>
          </div>

          <div className="disciplines-card-grid">
            {coreExpertise.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="discipline-interactive-card">
                  <div className="discipline-card-top">
                    <div className="discipline-icon-box" style={{ borderColor: `${item.color}40`, color: item.color }}>
                      <Icon size={22} />
                    </div>
                    <span className="discipline-metric-chip" style={{ color: item.color, borderColor: `${item.color}30` }}>
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="discipline-title">{item.title}</h3>
                  <p className="discipline-desc">{item.desc}</p>

                  <div className="discipline-tag-wrap">
                    {item.tags.map((t, tIdx) => (
                      <span key={tIdx} className="discipline-tag-badge">{t}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. COMPANY VALUES                                                  */}
      {/* ------------------------------------------------------------------ */}
      <section className="about-content-section section-alternate" id="company-values">
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
              <div key={idx} className="value-pillar-card">
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
      <section className="about-content-section" id="why-choose">
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

          <div className="comparison-table-futuristic-card">
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
      <section className="about-content-section section-alternate" id="development-process">
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
          <div className="process-interactive-wrapper">
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
      <section className="about-content-section" id="tech-stack">
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

          {/* Category Filter Pills */}
          <div className="tech-filter-row">
            <button
              type="button"
              className={`tech-filter-pill ${activeTechCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTechCategory('all')}
            >
              All Tooling ({techStack.length})
            </button>
            <button
              type="button"
              className={`tech-filter-pill ${activeTechCategory === 'frontend' ? 'active' : ''}`}
              onClick={() => setActiveTechCategory('frontend')}
            >
              Frontend & Edge
            </button>
            <button
              type="button"
              className={`tech-filter-pill ${activeTechCategory === 'backend' ? 'active' : ''}`}
              onClick={() => setActiveTechCategory('backend')}
            >
              Backend & APIs
            </button>
            <button
              type="button"
              className={`tech-filter-pill ${activeTechCategory === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveTechCategory('ai')}
            >
              AI & Vector Engines
            </button>
            <button
              type="button"
              className={`tech-filter-pill ${activeTechCategory === 'cloud' ? 'active' : ''}`}
              onClick={() => setActiveTechCategory('cloud')}
            >
              Cloud & Databases
            </button>
          </div>

          {/* Tech Grid */}
          <div className="tech-cards-grid">
            {filteredTech.map((tech, idx) => (
              <div key={idx} className="tech-stack-card">
                <div className="tech-card-top-row">
                  <div className="tech-code-icon">
                    <Code2 size={16} />
                  </div>
                  <span className="tech-badge-token">{tech.badge}</span>
                </div>
                <h4 className="tech-item-name">{tech.name}</h4>
                <p className="tech-item-role">{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 9. FINAL CTA – READY TO BUILD SOMETHING EXTRAORDINARY?            */}
      {/* ------------------------------------------------------------------ */}
      <section className="about-final-cta-section" id="final-cta">
        <div className="about-cta-futuristic-container">
          <div className="cta-ambient-cosmic-glow" aria-hidden="true" />

          <div className="cta-content-wrapper">
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
