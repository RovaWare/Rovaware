import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Accessibility,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  Braces,
  Check,
  ChevronDown,
  ChevronRight,
  Code2,
  Component,
  Gauge,
  Layers3,
  Mail,
  Menu,
  Minus,
  MousePointer2,
  PenTool,
  Plus,
  Route,
  SearchCheck,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react';
import ProjectModal from './components/ProjectModal';
import Reveal from './components/Reveal';
import { services } from './data';
import './theme.css';
import './rose-gold.css';
import './uiux-detailed.css';

const capabilityItems = [
  {
    number: '01',
    icon: PenTool,
    title: 'End-to-End Product UI/UX Design',
    description: 'Complete wireframing, high-fidelity mockups, and responsive layouts for web apps, SaaS dashboards, and mobile.',
  },
  {
    number: '02',
    icon: Component,
    title: 'Design Token Systems & Component Libraries',
    description: 'Modular Figma component libraries synced with developer tokens (colors, typography, spacing, shadows).',
  },
  {
    number: '03',
    icon: MousePointer2,
    title: 'Interactive Clickable Prototyping',
    description: 'High-fidelity prototypes simulating real application micro-interactions, page transitions, and responsive states.',
  },
  {
    number: '04',
    icon: SearchCheck,
    title: 'Conversion Rate & Usability Audits',
    description: 'Analyzing user drop-off points, identifying friction in checkout/onboarding flows, and executing heuristic redesigns.',
  },
  {
    number: '05',
    icon: Workflow,
    title: 'Information Architecture & User Journeys',
    description: 'Mapping complex operational workflows into intuitive navigation hierarchies and simplified mental models.',
  },
  {
    number: '06',
    icon: Code2,
    title: 'Developer Handoff & Specification Sync',
    description: 'Clean inspectable Figma assets, exported SVG graphics, responsive behavior documentation, and style guides.',
  },
];

const rigorItems = [
  'Comprehensive auto-layout components adaptable to all resolutions',
  'Strict color contrast compliance adhering to WCAG 2.1 AAA accessibility',
  'Engineered state variants: Default, Hover, Active, Disabled, Loading, Error',
  'Micro-interaction specifications prepared for CSS & Framer Motion implementation',
  'Consistent 8pt spatial grid architecture across the entire product',
  'User-centric form design with clear validation cues that reduce abandonment',
];

const technologies = [
  ['Figma', 'Primary Design', PenTool],
  ['FigJam', 'User Flows', Route],
  ['Design Tokens', 'Architecture', Braces],
  ['Framer', 'Prototypes', MousePointer2],
  ['Stark', 'Accessibility', Accessibility],
  ['Adobe Creative Suite', 'Graphics', Layers3],
  ['Principle', 'Motion Specs', Sparkles],
  ['Hotjar', 'User Behavior', BarChart3],
];

const frameworkSteps = [
  {
    number: '01',
    stage: 'STAGE 01',
    title: 'User Research & Discovery',
    description: 'We interview stakeholders, study target user personas, audit competitor platforms, and establish core design objectives.',
  },
  {
    number: '02',
    stage: 'STAGE 02',
    title: 'Information Architecture & Wireframes',
    description: 'Low-fidelity structural wireframes focused on screen hierarchy, user flows, and reducing cognitive friction.',
  },
  {
    number: '03',
    stage: 'STAGE 03',
    title: 'Visual Identity & Design Tokens',
    description: 'Establishing the visual language: color palettes, typography scales, elevation shadows, and reusable component sets.',
  },
  {
    number: '04',
    stage: 'STAGE 04',
    title: 'High-Fidelity Screen Design',
    description: 'Crafting pixel-perfect views for desktop, tablet, and mobile with complete edge-case and empty-state coverage.',
  },
  {
    number: '05',
    stage: 'STAGE 05',
    title: 'Interactive Prototyping & Handoff',
    description: 'Building clickable prototypes for usability validation, followed by seamless Figma developer inspection handoff.',
  },
];

const outcomeItems = [
  {
    icon: Route,
    title: 'Lower Onboarding Friction',
    description: 'Clear visual cues and natural flow paths guide new users to their first "aha" moment in seconds.',
  },
  {
    icon: Gauge,
    title: 'Accelerated Dev Velocity',
    description: 'Pre-defined tokens and component states eliminate frontend guesswork and reduce rework by 50%.',
  },
  {
    icon: Sparkles,
    title: 'Distinguished Market Brand',
    description: 'A bespoke, refined visual identity that positions your company as an undisputed premium category leader.',
  },
];

const detailedFaqs = [
  {
    question: 'Do you design in Figma and share source files with our team?',
    answer: 'Yes. All design work is created in Figma with organized component pages, auto-layout, and token variables. You receive full ownership and edit access to all Figma files.',
  },
  {
    question: 'How do you ensure designs are practical for developers to build?',
    answer: 'Design and engineering feasibility are reviewed together. We use reusable tokens, auto-layout, documented component states, responsive specifications, and inspectable Figma files so developers receive clear implementation guidance rather than ambiguous static screens.',
  },
  {
    question: 'Do you create both mobile and desktop designs?',
    answer: 'Yes. We design responsive layouts for the breakpoints relevant to your product, including desktop, tablet, and mobile where required. Navigation, content priority, interaction states, and edge cases are adapted for each screen context.',
  },
  {
    question: 'Can you redesign our existing application without breaking current workflows?',
    answer: 'Yes. We begin by auditing current user journeys and identifying the workflows that must remain familiar. Improvements are prototyped and validated before handoff, allowing us to reduce friction while protecting critical product behavior and user habits.',
  },
];

export default function UIUXDesignView({
  onNavigateHome,
  onNavigateAllServices,
  onNavigateService,
  onNavigateBookProject,
  onNavigateContact,
  hideNav = true,
  hideFooter = true,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');
  const showcaseMediaRef = useRef(null);

  const closeProject = useCallback(() => setProjectOpen(false), []);

  useEffect(() => {
    document.documentElement.dataset.accent = 'rose-gold';
    document.title = 'UI/UX Design Services — ROVAWARE Studio';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Rovaware UI/UX Design — spatial systems, conversion-focused UX, Figma design systems, interactive prototypes, and developer-ready specifications.');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#181219');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      document.documentElement.dataset.accent = '';
      document.title = 'ROVAWARE — Build • Automate • Scale';
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 36);
        setScrollProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
        if (showcaseMediaRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          const rect = showcaseMediaRef.current.getBoundingClientRect();
          const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
          showcaseMediaRef.current.style.setProperty('--showcase-parallax', `${offset * -42}px`);
        }
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const ids = ['overview', 'capabilities', 'process', 'work', 'faqs', 'contact'];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.15, 0.4] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (id) window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }));
    };
    const timer = window.setTimeout(scrollToHash, 200);
    window.addEventListener('popstate', scrollToHash);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('popstate', scrollToHash);
    };
  }, []);

  const goTo = (id, event) => {
    event?.preventDefault();
    setMenuOpen(false);
    setServicesOpen(false);
    const target = document.getElementById(id);
    if (target) {
      window.history.pushState(null, '', id === 'overview' ? window.location.pathname : `#${id}`);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openProject = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setProjectOpen(true);
  };

  const handleHeroPointer = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--pointer-x', `${((event.clientX - rect.left) / rect.width) * 100}%`);
    event.currentTarget.style.setProperty('--pointer-y', `${((event.clientY - rect.top) / rect.height) * 100}%`);
  };

  const handleServiceClick = (slug, event) => {
    event?.preventDefault();
    setMenuOpen(false);
    setServicesOpen(false);
    if (slug === 'ui-ux-design') {
      goTo('overview', event);
    } else if (onNavigateService) {
      onNavigateService(slug);
    } else {
      window.location.href = `/services/${slug}`;
    }
  };

  return (
    <div className="site-shell uiux-detailed-page">
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      <a className="skip-link" href="#main-content">Skip to content</a>

      {!hideNav && (
        <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
          <div className="header-inner">
            <a
              className="brand"
              href="/services/ui-ux-design"
              onClick={(event) => {
                if (onNavigateHome) {
                  event.preventDefault();
                  onNavigateHome();
                } else {
                  goTo('overview', event);
                }
              }}
              aria-label="Rovaware UI/UX Design home"
            >
              <span className="brand-mark"><img src="/assets/rovaware_icon.png" alt="RovaWare" style={{ width: '32px', height: '32px', objectFit: 'contain' }} /></span>
              <span className="brand-divider" aria-hidden="true" style={{ width: '1px', height: '22px', background: 'rgba(255, 255, 255, 0.25)', margin: '0 6px 0 4px', display: 'inline-block' }} />
              <div className="brand-text-block">
                <div className="brand-text">
                  <span className="brand-text-main">ROVA</span>
                  <span className="brand-text-accent">WARE</span>
                </div>
                <div className="brand-tagline">ENGINEERING THE DIGITAL FUTURE</div>
              </div>
            </a>
            <nav className="desktop-nav" aria-label="Main navigation">
              <div className="nav-dropdown-wrap" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className={`nav-link nav-services ${servicesOpen ? 'is-open' : ''}`} type="button" aria-expanded={servicesOpen} onClick={() => setServicesOpen((value) => !value)}>
                  Services <ChevronDown size={14} />
                </button>
                <div className={`services-dropdown ${servicesOpen ? 'is-open' : ''}`}>
                  <span className="dropdown-label">What we do</span>
                  {services.map((service) => (
                    <a
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className={service.slug === 'ui-ux-design' ? 'is-current' : ''}
                      onClick={(event) => handleServiceClick(service.slug, event)}
                    >
                      <span>{service.label}</span>
                      {service.slug === 'ui-ux-design' ? <i>Current</i> : <ArrowUpRight size={14} />}
                    </a>
                  ))}
                  <a
                    className="all-services"
                    href="/services"
                    onClick={(e) => {
                      if (onNavigateAllServices) {
                        e.preventDefault();
                        onNavigateAllServices();
                      }
                    }}
                  >
                    Explore all 9 services <ArrowRight size={14} />
                  </a>
                </div>
              </div>
              <a href="#work" className={`nav-link ${activeSection === 'work' ? 'is-active' : ''}`} onClick={(event) => goTo('work', event)}>Our Work</a>
              <a href="#process" className={`nav-link ${activeSection === 'process' ? 'is-active' : ''}`} onClick={(event) => goTo('process', event)}>Process</a>
              <a href="#capabilities" className={`nav-link ${activeSection === 'capabilities' ? 'is-active' : ''}`} onClick={(event) => goTo('capabilities', event)}>Expertise</a>
              <a className="nav-link" href="/blog">Insights</a>
            </nav>
            <div className="header-actions">
              <button className="button button-header" type="button" onClick={openProject}>Start a project <ArrowUpRight size={16} /></button>
              <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
          <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
            <nav aria-label="Mobile navigation">
              <span className="mobile-menu-label">Services</span>
              {services.map((service, index) => (
                <a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={(event) => handleServiceClick(service.slug, event)}
                >
                  <small>0{index + 1}</small>{service.label}<ArrowUpRight size={17} />
                </a>
              ))}
              <span className="mobile-menu-label">Explore</span>
              <a href="#work" onClick={(event) => goTo('work', event)}><small>05</small>Our Work<ArrowRight size={17} /></a>
              <a href="#process" onClick={(event) => goTo('process', event)}><small>06</small>Our Process<ArrowRight size={17} /></a>
              <a href="#faqs" onClick={(event) => goTo('faqs', event)}><small>07</small>FAQs<ArrowRight size={17} /></a>
              <button className="button button-primary" type="button" onClick={openProject}>Start a project <ArrowUpRight size={17} /></button>
            </nav>
          </div>
        </header>
      )}

      <main id="main-content">
        <section className="service-detail-hero" id="overview" onPointerMove={handleHeroPointer} style={{ '--pointer-x': '50%', '--pointer-y': '35%' }}>
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="hero-spotlight" aria-hidden="true" />
          <div className="page-width service-hero-inner">
            <div className="service-hero-copy">
              <div className="breadcrumb hero-enter hero-enter-one">
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
                <ChevronRight size={12} />
                <a
                  href="/services"
                  onClick={(e) => {
                    if (onNavigateAllServices) {
                      e.preventDefault();
                      onNavigateAllServices();
                    }
                  }}
                >
                  Services
                </a>
                <ChevronRight size={12} />
                <span>UI/UX Design</span>
              </div>
              <span className="design-discipline hero-enter hero-enter-two">DESIGN</span>
              <h1 className="hero-enter hero-enter-three">UI/UX <em>Design</em></h1>
              <p className="service-hero-kicker hero-enter hero-enter-three">SPATIAL SYSTEMS & CONVERSION-FOCUSED UX</p>
              <p className="service-hero-summary hero-enter hero-enter-four">Clean, intuitive digital interfaces engineered to turn visitors into long-term customers.</p>
              <p className="service-hero-description hero-enter hero-enter-four">We craft comprehensive Figma design systems, interactive prototypes, and conversion-optimized user journeys rooted in cognitive ergonomics and refined modern aesthetics.</p>
              <div className="hero-actions hero-enter hero-enter-five">
                <button className="button button-primary button-large" type="button" onClick={openProject}>Scope This Project <ArrowUpRight size={18} /></button>
                <a className="button button-service-ghost button-large" href="mailto:support@rovaware.com">Direct Studio Inquiry <Mail size={17} /></a>
              </div>
            </div>
            <div className="ui-system-visual hero-enter hero-enter-media" aria-label="Tokenized Figma design system illustration">
              <div className="ui-system-top"><span><PenTool size={14} /> ROVAWARE / CORE SYSTEM</span><i>v2.1</i></div>
              <div className="ui-system-body">
                <aside><span className="active"><Component size={15} /></span><span><Braces size={15} /></span><span><Layers3 size={15} /></span><span><Accessibility size={15} /></span></aside>
                <div className="ui-token-canvas">
                  <div className="token-heading"><small>FOUNDATIONS / COLOR</small><strong>Design tokens</strong></div>
                  <div className="token-swatches"><i /><i /><i /><i /><i /></div>
                  <div className="token-type"><span>Display / Semibold</span><strong>Clarity by design.</strong><small>Plus Jakarta Sans · 56 / 60 · -2%</small></div>
                  <div className="token-components"><div><small>BUTTON / PRIMARY</small><span>Start a project <ArrowUpRight size={12} /></span></div><div><small>SPACING SCALE</small><p><i>8</i><i>16</i><i>24</i><i>32</i></p></div></div>
                </div>
              </div>
              <div className="ui-system-status"><span><i />All components synced</span><span>8PT GRID</span><span>AA / AAA</span></div>
            </div>
          </div>
          <div className="page-width service-metrics hero-enter hero-enter-five">
            <div><strong>100%</strong><span>Figma Tokenized Design Systems</span></div>
            <div><strong>WCAG 2.1</strong><span>AAA Accessibility Standard</span></div>
            <div><strong>60 FPS</strong><span>Calibrated Micro-Interactions</span></div>
            <div><strong>3x</strong><span>Average User Engagement Lift</span></div>
          </div>
        </section>

        <section className="detail-capabilities detail-section" id="capabilities">
          <div className="page-width">
            <Reveal className="detail-section-heading">
              <div><span className="detail-kicker">CORE CAPABILITIES</span><h2>What We Offer in <em>UI/UX Design</em></h2></div>
              <p>Great design is not just visual ornamentation; it is the structural psychology that determines how effortlessly users accomplish their goals within your digital product. At RovaWare, UI/UX design is deeply interconnected with code feasibility. We establish reusable design tokens, typography scales, contrast ratios, and interactive states in Figma before a single line of code is written.</p>
            </Reveal>
            <div className="detail-capability-grid">
              {capabilityItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal as="article" className="detail-capability-card" delay={(index % 3) * 80} key={item.number}>
                    <div className="detail-card-top"><span>{item.number}</span><Icon size={23} strokeWidth={1.5} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="detail-card-line" />
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="editorial-visual-banner" delay={120}>
              <img src="/images/hero-studio.jpg" alt="RovaWare Digital Product Design Studio" loading="lazy" />
              <div className="editorial-banner-overlay" />
              <div className="editorial-banner-content">
                <span>ERGONOMICS & COGNITIVE ARCHITECTURE</span>
                <h3>Design engineered for <em>instant clarity</em> and zero user friction.</h3>
                <p>We combine behavioral psychology with strict design token variables. Every component state is documented in Figma and prepared for sub-second frontend rendering.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="rigor-section detail-section">
          <div className="page-width rigor-layout">
            <Reveal className="rigor-intro">
              <span className="detail-kicker">ARCHITECTURAL RIGOR</span>
              <h2>Engineered with<br /><em>Zero Compromises</em></h2>
              <p>Every project we ship is backed by strict engineering benchmarks, clear code ownership, and battle-tested industry practices.</p>
              <div className="rigor-seal"><Accessibility size={29} /><span>ACCESSIBILITY<br />BY ARCHITECTURE</span></div>
              <div className="rigor-visual-frame">
                <img src="/images/craft-detail.jpg" alt="Precision UI/UX Design System Craft Detail" loading="lazy" />
                <div className="rigor-visual-overlay">
                  <span>8PT SPATIAL SPEC · WCAG AAA AUDITED</span>
                </div>
              </div>
            </Reveal>
            <Reveal className="rigor-list" delay={100}>
              {rigorItems.map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                  <Check size={17} />
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="technology-section detail-section" id="technologies">
          <div className="page-width">
            <Reveal className="technology-heading">
              <div><span className="detail-kicker">PRODUCTION TOOLCHAIN</span><h2>Technologies & <em>Frameworks</em></h2></div>
              <p>We deploy modern, production-grade tools proven at high scale:</p>
            </Reveal>
            <div className="technology-grid">
              {technologies.map(([name, use, Icon], index) => (
                <Reveal className="technology-item" delay={(index % 4) * 60} key={name}>
                  <Icon size={23} strokeWidth={1.4} />
                  <div><strong>{name}</strong><span>{use}</span></div>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                </Reveal>
              ))}
            </div>
            <Reveal className="toolchain-note">
              <Braces size={15} /><span>Custom toolchains configured per project requirements</span>
            </Reveal>
          </div>
        </section>

        <section className="framework-section detail-section" id="process">
          <div className="page-width">
            <Reveal className="framework-heading">
              <span className="detail-kicker">THE ROVAWARE FRAMEWORK</span>
              <h2>Our Delivery & <em>Engineering Process</em></h2>
              <p>A transparent, milestone-driven framework designed to ship production-ready results with maximum momentum and zero surprises.</p>
            </Reveal>
            <div className="framework-timeline">
              {frameworkSteps.map((step, index) => (
                <Reveal as="article" className="framework-step" delay={index * 60} key={step.number}>
                  <div className="framework-marker"><span>{step.number}</span><i /></div>
                  <div className="framework-card">
                    <span>{step.stage}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="outcomes-section detail-section">
          <div className="page-width">
            <Reveal className="outcomes-heading">
              <span className="detail-kicker">DESIGNED FOR MOMENTUM</span>
              <h2>Business Outcomes <em>You Can Measure</em></h2>
            </Reveal>
            <div className="outcomes-grid">
              {outcomeItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal as="article" className="outcome-card" delay={index * 90} key={item.title}>
                    <Icon size={26} strokeWidth={1.4} />
                    <span>0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="production-showcase detail-section" id="work">
          <div className="page-width">
            <Reveal className="showcase-heading">
              <span className="detail-kicker">RELEVANT PRODUCTION SHOWCASE</span>
              <h2>RovaWare Spatial Design System<br />& <em>Client Dashboard</em></h2>
            </Reveal>
            <Reveal className="showcase-shell" delay={100}>
              <div className="showcase-media" ref={showcaseMediaRef}>
                <img src="/assets/showcase_dashboard.jpg" alt="RovaWare Spatial Design System and Client Dashboard" loading="lazy" />
                <div className="showcase-overlay" />
                <span>ROVAWARE INTERNAL CORE & PARTNER PLATFORMS</span>
                <div className="showcase-media-title">
                  <small>DESIGN SYSTEM / 2026</small>
                  <strong>RovaWare Spatial Design<br />System & Client Dashboard</strong>
                </div>
              </div>
              <div className="showcase-content">
                <span className="showcase-label">ROVAWARE INTERNAL CORE & PARTNER PLATFORMS</span>
                <h3>RovaWare Spatial Design System & Client Dashboard</h3>
                <p>Developed an enterprise spatial design system comprising 150+ reusable Figma components, tokenized dark/orange styling, and sub-second layout clarity.</p>
                <div className="showcase-result">
                  <span>RESULT</span>
                  <strong>65%</strong>
                  <p>Decreased design-to-production turnaround time by 65% across client projects.</p>
                </div>
                <div className="showcase-tags">
                  <span>150+ COMPONENTS</span>
                  <span>TOKENIZED</span>
                  <span>RESPONSIVE</span>
                </div>
              </div>
            </Reveal>

            {/* Featured Case Study Image Grid */}
            <div className="showcase-gallery-grid">
              <Reveal as="article" className="showcase-gallery-card" delay={120}>
                <div className="gallery-card-thumb">
                  <img src="/images/service-design.jpg" alt="Figma Design Token System & Modular Libraries" loading="lazy" />
                  <div className="gallery-card-overlay" />
                  <span className="gallery-card-badge">DESIGN TOKENS</span>
                </div>
                <div className="gallery-card-body">
                  <h4>Figma Token System & Modular UI Library</h4>
                  <p>Centralized design token variables syncing typography scales, 8pt spacing grids, and AAA accessibility contrast states directly to frontend code.</p>
                  <div className="gallery-card-tags">
                    <span>150+ COMPONENTS</span>
                    <span>WCAG AAA</span>
                    <span>AUTO-LAYOUT</span>
                  </div>
                </div>
              </Reveal>

              <Reveal as="article" className="showcase-gallery-card" delay={180}>
                <div className="gallery-card-thumb">
                  <img src="/assets/showcase_web_dev.jpg" alt="Enterprise Multi-Tenant SaaS Platform" loading="lazy" />
                  <div className="gallery-card-overlay" />
                  <span className="gallery-card-badge">SAAS PLATFORM</span>
                </div>
                <div className="gallery-card-body">
                  <h4>High-Density Operational Dashboard UX</h4>
                  <p>Streamlined complex enterprise data streams and multi-tenant telemetry into clear visual hierarchies with zero cognitive overload.</p>
                  <div className="gallery-card-tags">
                    <span>DATA VIZ</span>
                    <span>SUB-SECOND UX</span>
                    <span>RESPONSIVE</span>
                  </div>
                </div>
              </Reveal>

              <Reveal as="article" className="showcase-gallery-card" delay={240}>
                <div className="gallery-card-thumb">
                  <img src="/assets/workspace.jpg" alt="Interactive Prototyping & Motion Specifications" loading="lazy" />
                  <div className="gallery-card-overlay" />
                  <span className="gallery-card-badge">PROTOTYPING</span>
                </div>
                <div className="gallery-card-body">
                  <h4>Interactive Clickable Prototypes & Motion Specs</h4>
                  <p>Validating onboarding funnels and user conversion paths in Figma and Framer before engineering implementation begins.</p>
                  <div className="gallery-card-tags">
                    <span>60 FPS MOTION</span>
                    <span>CLICKABLE FLOWS</span>
                    <span>HANDOFF DOCS</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="detailed-faqs detail-section" id="faqs">
          <div className="page-width detailed-faq-layout">
            <Reveal className="detailed-faq-intro">
              <span className="detail-kicker">FREQUENTLY ASKED QUESTIONS</span>
              <h2>Common Questions About<br /><em>UI/UX Design</em></h2>
              <p>Clear, honest answers about scope, timelines, deliverables, and technical execution.</p>
              <a className="text-link" href="mailto:support@rovaware.com">Ask a different question <ArrowUpRight size={16} /></a>
            </Reveal>
            <Reveal className="faq-list" delay={100}>
              {detailedFaqs.map((faq, index) => {
                const open = openFaq === index;
                return (
                  <article className={`faq-item ${open ? 'is-open' : ''}`} key={faq.question}>
                    <button type="button" onClick={() => setOpenFaq(open ? null : index)} aria-expanded={open}>
                      <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                      <span>{faq.question}</span>
                      <i>{open ? <Minus size={17} /> : <Plus size={17} />}</i>
                    </button>
                    <div className="faq-answer">
                      <div><p>{faq.answer}</p></div>
                    </div>
                  </article>
                );
              })}
            </Reveal>
          </div>
        </section>

        <nav className="service-pager page-width" aria-label="Other services">
          <a
            href="/services/saas-scaling"
            onClick={(e) => handleServiceClick('saas-scaling', e)}
          >
            <span><ArrowLeft size={16} />PREVIOUS DISCIPLINE</span>
            <strong>Trending Tech & SaaS Scaling</strong>
          </a>
          <a
            className="all-disciplines"
            href="/services"
            onClick={(e) => {
              if (onNavigateAllServices) {
                e.preventDefault();
                onNavigateAllServices();
              }
            }}
          >
            <span>ALL 9 SERVICES</span>
            <span className="pager-grid"><i /><i /><i /><i /><i /><i /><i /><i /><i /></span>
          </a>
          <a
            className="next-discipline"
            href="/services/3d-modeling-animation"
            onClick={(e) => handleServiceClick('3d-modeling-animation', e)}
          >
            <span>NEXT DISCIPLINE<ArrowRight size={16} /></span>
            <strong>3D Modeling & Animation</strong>
          </a>
        </nav>

        <section className="dispatch-section" id="contact">
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-orb" aria-hidden="true" />
          <div className="page-width dispatch-inner">
            <Reveal>
              <span className="detail-kicker">DISPATCH ENGINEERING</span>
              <h2>Elevate your product’s<br /><em>user experience</em></h2>
              <p>Schedule a design review session with our lead product designer to analyze your current user flow and identify conversion opportunities.</p>
              <div className="contact-actions">
                <button className="button button-primary button-large" type="button" onClick={openProject}>Initiate Project Intake <ArrowUpRight size={18} /></button>
                <a
                  className="button button-dispatch-ghost button-large"
                  href="/about/contact"
                  onClick={(e) => {
                    if (onNavigateContact) {
                      e.preventDefault();
                      onNavigateContact();
                    }
                  }}
                >
                  Speak with an Engineer <ArrowRight size={17} />
                </a>
              </div>
              <div className="dispatch-assurances">
                <span><Check size={14} />24-Hour Scope Blueprint</span>
                <span><Check size={14} />Mutual NDA Protected</span>
                <span><Check size={14} />100% Repository IP Ownership</span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {!hideFooter && (
        <footer className="site-footer">
          <div className="page-width">
            <div className="footer-top">
              <div className="footer-brand-col">
                <a
                  className="brand"
                  href="/"
                  onClick={(e) => {
                    if (onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome();
                    }
                  }}
                  aria-label="Rovaware home"
                >
                  <span className="brand-mark"><img src="/assets/rovaware_icon.png" alt="RovaWare" style={{ width: '32px', height: '32px', objectFit: 'contain' }} /></span>
                  <span className="brand-divider" aria-hidden="true" style={{ width: '1px', height: '22px', background: 'rgba(255, 255, 255, 0.25)', margin: '0 6px 0 4px', display: 'inline-block' }} />
                  <div className="brand-text-block">
                    <div className="brand-text">
                      <span className="brand-text-main">ROVA</span>
                      <span className="brand-text-accent">WARE</span>
                    </div>
                    <div className="brand-tagline">ENGINEERING THE DIGITAL FUTURE</div>
                  </div>
                </a>
                <p>We turn ambitious ideas into digital experiences through modern web development and AI solutions.</p>
              </div>
              <div className="footer-col">
                <h3>Explore</h3>
                <a href="#work" onClick={(event) => goTo('work', event)}>Our Work</a>
                <a href="/about/company">About Company</a>
                <a href="/about/contact" onClick={(e) => { if (onNavigateContact) { e.preventDefault(); onNavigateContact(); } }}>Contact Studio</a>
                <a href="/about/book-project" onClick={(e) => { if (onNavigateBookProject) { e.preventDefault(); onNavigateBookProject(); } }}>Book a Project</a>
                <a href="#process" onClick={(event) => goTo('process', event)}>Our Process</a>
                <a href="#faqs" onClick={(event) => goTo('faqs', event)}>FAQs</a>
              </div>
              <div className="footer-col">
                <h3>Services</h3>
                {services.map((service) => (
                  <a
                    key={service.slug}
                    href={service.slug === 'ui-ux-design' ? '#overview' : `/services/${service.slug}`}
                    onClick={(event) => handleServiceClick(service.slug, event)}
                  >
                    {service.label}
                  </a>
                ))}
                <a
                  className="footer-accent"
                  href="/services"
                  onClick={(e) => {
                    if (onNavigateAllServices) {
                      e.preventDefault();
                      onNavigateAllServices();
                    }
                  }}
                >
                  All 9 Services <ArrowRight size={13} />
                </a>
              </div>
              <div className="footer-col">
                <h3>Resources</h3>
                <a href="/blog">Blog & Insights</a>
                <a href="/blog">AI & Automation</a>
                <a href="/blog">Architecture Guides</a>
                <a href="/blog">Tech Radar</a>
              </div>
              <div className="footer-col">
                <h3>Get in Touch</h3>
                <a href="/about/contact" onClick={(e) => { if (onNavigateContact) { e.preventDefault(); onNavigateContact(); } }}>Contact Desk</a>
                <a href="/about/book-project" onClick={(e) => { if (onNavigateBookProject) { e.preventDefault(); onNavigateBookProject(); } }}>Book a Project</a>
                <button type="button" onClick={openProject}>Start a Project</button>
                <a href="mailto:support@rovaware.com">Email Us</a>
              </div>
              <div className="footer-col">
                <h3>Legal</h3>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#cookies">Cookie Policy</a>
                <a href="#refund">Refund Policy</a>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© 2026 ROVAWARE STUDIO. ALL RIGHTS RESERVED.</span>
              <div>
                <a href="#privacy">Privacy Policy</a>
                <span>•</span>
                <a href="#terms">Terms of Service</a>
                <span>•</span>
                <a href="#cookies">Cookie Policy</a>
                <span>•</span>
                <a href="#refund">Refund Policy</a>
              </div>
              <a href="#overview" onClick={(event) => goTo('overview', event)}>Back to top <ArrowUp size={13} /></a>
            </div>
          </div>
        </footer>
      )}

      <button className={`floating-top ${scrolled ? 'is-visible' : ''}`} type="button" onClick={(event) => goTo('overview', event)} aria-label="Back to top">
        <ArrowUp size={18} />
      </button>

      <ProjectModal open={projectOpen} onClose={closeProject} defaultService="UI/UX Design" />
    </div>
  );
}

