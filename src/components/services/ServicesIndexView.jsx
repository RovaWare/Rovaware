import React, { useEffect, useState } from 'react';
import { serviceCategories, allServicesDetail } from './servicesData';
import {
  Code2,
  Layout,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Lock,
  Rocket,
  Zap,
  Globe
} from 'lucide-react';

const categoryIcons = {
  BUILD: Code2,
  DESIGN: Layout,
  GROW: TrendingUp,
  BUSINESS_SUPPORT: ShieldCheck
};

export default function ServicesIndexView({
  onNavigateHome,
  onNavigateService,
  onNavigateBookProject,
  onNavigateContact
}) {
  const [activeTab, setActiveTab] = useState('ALL');

  useEffect(() => {
    document.title = 'Digital Engineering & Growth Services — ROVAWARE';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      document.title = 'ROVAWARE — Build • Automate • Scale';
    };
  }, []);

  const filteredCategories = activeTab === 'ALL'
    ? serviceCategories
    : serviceCategories.filter((c) => c.id === activeTab);

  return (
    <div className="services-page-root">
      {/* Background Ambience & Spotlights */}
      <div className="services-bg-ambient" aria-hidden="true" />
      <div className="services-bg-grid" aria-hidden="true" />

      {/* 1. HERO SECTION */}
      <section className="services-hero-section">
        <div className="services-container">
          {/* Breadcrumb Navigation */}
          <nav className="services-breadcrumb" aria-label="Breadcrumb">
            <button type="button" className="breadcrumb-btn" onClick={onNavigateHome}>
              Home
            </button>
            <ChevronRight size={13} />
            <span className="breadcrumb-active">Services</span>
          </nav>

          <div className="services-hero-badge">
            <span className="hero-badge-dot" />
            <Sparkles size={13} />
            <span>FULL-SPECTRUM DIGITAL ENGINEERING</span>
          </div>

          <h1 className="services-hero-title">
            Architectures designed for scale. <br />
            <span className="hero-gradient-text">Experiences engineered to endure.</span>
          </h1>

          <p className="services-hero-subtitle">
            From high-throughput cloud backends and native Android apps to spatial UI/UX, autonomous AI pipelines, and watertight legal frameworks. We deliver senior-level execution across all four digital growth pillars.
          </p>

          {/* Core Metrics Banner */}
          <div className="services-metrics-strip">
            <div className="metric-box">
              <strong className="metric-val">9</strong>
              <span className="metric-lbl">Specialized Disciplines</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-box">
              <strong className="metric-val">99.9%</strong>
              <span className="metric-lbl">Production SLA Commitment</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-box">
              <strong className="metric-val">100%</strong>
              <span className="metric-lbl">Source IP Ownership</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-box">
              <strong className="metric-val">24h</strong>
              <span className="metric-lbl">Architecture Blueprint Dispatch</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="services-filter-row">
            <span className="filter-label">FILTER CATEGORY:</span>
            <div className="filter-pill-group">
              <button
                type="button"
                className={`filter-pill ${activeTab === 'ALL' ? 'active' : ''}`}
                onClick={() => setActiveTab('ALL')}
              >
                All Capabilities (9)
              </button>
              {serviceCategories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`filter-pill ${activeTab === c.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(c.id)}
                >
                  {c.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID SECTIONS (BY CATEGORY) */}
      <section className="services-catalogue-section">
        <div className="services-container">
          {filteredCategories.map((cat) => {
            const CatIcon = categoryIcons[cat.id] || Code2;

            return (
              <div key={cat.id} className="category-catalogue-block">
                {/* Category Header */}
                <div className="category-block-header">
                  <div className="cat-title-left">
                    <div
                      className="cat-badge-icon"
                      style={{ color: cat.accent, borderColor: `${cat.accent}33`, background: `${cat.accent}12` }}
                    >
                      <CatIcon size={16} />
                    </div>
                    <div>
                      <h2 className="cat-heading" style={{ color: cat.accent }}>
                        {cat.title}
                      </h2>
                      <p className="cat-desc">{cat.tagline}</p>
                    </div>
                  </div>
                  <span className="cat-service-count" style={{ borderColor: `${cat.accent}33` }}>
                    {cat.services.length} Specialized Tracks
                  </span>
                </div>

                {/* Cards Grid */}
                <div className="category-services-grid">
                  {cat.services.map((item) => {
                    const detail = allServicesDetail[item.slug];
                    const ServiceIcon = detail?.icon || Code2;

                    return (
                      <div
                        key={item.slug}
                        className="service-card"
                        onClick={() => onNavigateService(item.slug)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            onNavigateService(item.slug);
                          }
                        }}
                      >
                        <div className="service-card-glow-edge" style={{ '--glow-color': cat.accent }} />

                        {/* Card Top Row */}
                        <div className="service-card-top">
                          <div
                            className="service-card-icon-box"
                            style={{ color: cat.accent, background: `${cat.accent}14`, borderColor: `${cat.accent}33` }}
                          >
                            <ServiceIcon size={20} />
                          </div>
                          <span className="service-card-badge">{item.badge}</span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="service-card-title">{item.title}</h3>
                        <p className="service-card-desc">
                          {detail ? detail.heroSubheadline : item.shortDesc}
                        </p>

                        {/* Highlights Chips */}
                        {detail?.features && (
                          <div className="service-card-chips">
                            {detail.features.slice(0, 3).map((feat, idx) => (
                              <div key={idx} className="card-chip">
                                <CheckCircle2 size={11} style={{ color: cat.accent }} />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tech Tag Row */}
                        {detail?.techStack && (
                          <div className="service-card-tech-row">
                            {detail.techStack.slice(0, 4).map((tech, i) => (
                              <span key={i} className="tech-tag">
                                {tech.name}
                              </span>
                            ))}
                            {detail.techStack.length > 4 && (
                              <span className="tech-tag-more">
                                +{detail.techStack.length - 4} more
                              </span>
                            )}
                          </div>
                        )}

                        {/* Card Action Link */}
                        <div className="service-card-footer">
                          <span className="explore-text" style={{ color: cat.accent }}>
                            Explore Service Architecture
                          </span>
                          <div className="card-arrow-circle" style={{ borderColor: `${cat.accent}44` }}>
                            <ArrowUpRight size={14} className="card-arrow-icon" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. ROVAWARE ARCHITECTURAL PILLARS */}
      <section className="services-pillars-section">
        <div className="services-container">
          <div className="pillars-intro">
            <span className="pillars-kicker">
              <Zap size={13} />
              ENGINEERING GUARANTEES
            </span>
            <h2 className="pillars-title">The RovaWare Development Standard</h2>
            <p className="pillars-desc">
              Every deliverable across all 9 disciplines is governed by our strict engineering charter. No bloated boilerplates, no outsourced middlemen, and zero vendor lock-in.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Lock size={20} color="#FF8C32" />
              </div>
              <h3>100% IP & Repository Ownership</h3>
              <p>
                From day one, you own all git commit histories, architectural blueprints, database schemas, and Figma tokens. You are never held hostage by proprietary agency stacks.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Cpu size={20} color="#38BDF8" />
              </div>
              <h3>Senior-Only Execution</h3>
              <p>
                You work directly with principal engineers, seasoned UI architects, and domain specialists. No junior accounts, no opaque layers, and direct technical transparency.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Rocket size={20} color="#10B981" />
              </div>
              <h3>Rapid Sprint Velocity</h3>
              <p>
                Two-week milestone sprints with automated CI/CD staging environments. Review functional software in your hands every fourteen days, not speculative slide decks.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <ShieldCheck size={20} color="#A855F7" />
              </div>
              <h3>Production-Hardened Security</h3>
              <p>
                Automated vulnerability scans, encrypted secrets management, and rigorous type-safety across all frontends, APIs, and cloud infrastructure pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTAKE CTA SECTION */}
      <section className="services-cta-section">
        <div className="services-container">
          <div className="services-cta-box">
            <div className="cta-glow-bg" />
            <span className="cta-badge">
              <Sparkles size={13} /> READY TO DISPATCH
            </span>
            <h2 className="cta-heading">
              Have a complex product to architect, design, or scale?
            </h2>
            <p className="cta-subheading">
              Tell us your functional requirements, desired timeline, and technical constraints. Our senior systems architects will return a detailed milestone blueprint within 24 hours.
            </p>

            <div className="cta-buttons-row">
              <button
                type="button"
                className="cta-btn primary"
                onClick={onNavigateBookProject}
              >
                <span>Book a Project Scoping Intake</span>
                <ArrowRight size={15} />
              </button>

              <button
                type="button"
                className="cta-btn ghost"
                onClick={onNavigateContact}
              >
                <span>Speak with an Engineer</span>
                <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="cta-trust-items">
              <div className="trust-item">
                <CheckCircle2 size={13} color="#FF8C32" />
                <span>NDA Protected Before Scoping</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={13} color="#FF8C32" />
                <span>Fixed Milestone Pricing</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={13} color="#FF8C32" />
                <span>Zero-Downtime Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

