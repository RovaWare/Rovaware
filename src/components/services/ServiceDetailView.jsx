import React, { useEffect, useState } from 'react';
import { allServicesDetail, serviceCategories } from './servicesData';
import WebDevelopmentView from './WebDevelopmentView';
import {
  Code2,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Plus,
  Minus,
  Layers,
  Cpu,
  ShieldCheck,
  Rocket,
  Compass,
  ArrowLeft
} from 'lucide-react';

export default function ServiceDetailView({
  slug,
  onNavigateHome,
  onNavigateAllServices,
  onNavigateService,
  onNavigateBookProject,
  onNavigateContact
}) {
  if (slug === 'web-development') {
    return (
      <WebDevelopmentView
        onNavigateHome={onNavigateHome}
        onNavigateAllServices={onNavigateAllServices}
        onNavigateService={onNavigateService}
        onNavigateBookProject={onNavigateBookProject}
        onNavigateContact={onNavigateContact}
      />
    );
  }

  const service = allServicesDetail[slug] || allServicesDetail['web-development'];
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} — ROVAWARE Engineering & Growth`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return () => {
      document.title = 'ROVAWARE — Build • Automate • Scale';
    };
  }, [service, slug]);

  // Find next and previous services in the catalogue
  const allSlugs = Object.keys(allServicesDetail);
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : allSlugs[allSlugs.length - 1];
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : allSlugs[0];
  const prevService = allServicesDetail[prevSlug];
  const nextService = allServicesDetail[nextSlug];

  const ServiceIcon = service.icon || Code2;
  const accent = service.categoryAccent || '#FF8C32';

  return (
    <div className="service-detail-root">
      {/* Dynamic Background Glows */}
      <div className="service-detail-bg-glow" style={{ '--glow-color': accent }} />
      <div className="service-detail-bg-grid" aria-hidden="true" />

      {/* 1. HERO SECTION */}
      <section className="service-hero">
        <div className="detail-container">
          {/* Breadcrumb Navigation */}
          <nav className="detail-breadcrumb" aria-label="Breadcrumb">
            <button type="button" className="breadcrumb-btn" onClick={onNavigateHome}>
              Home
            </button>
            <ChevronRight size={13} />
            <button type="button" className="breadcrumb-btn" onClick={onNavigateAllServices}>
              Services
            </button>
            <ChevronRight size={13} />
            <span className="breadcrumb-cat" style={{ color: accent }}>{service.categoryTitle}</span>
            <ChevronRight size={13} />
            <span className="breadcrumb-active">{service.title}</span>
          </nav>

          <div className="detail-kicker-badge" style={{ borderColor: `${accent}44`, background: `${accent}12` }}>
            <span className="kicker-dot" style={{ background: accent }} />
            <span style={{ color: accent }}>{service.heroKicker}</span>
          </div>

          <h1 className="detail-hero-title">
            {service.heroHeadline}
          </h1>

          <p className="detail-hero-desc">
            {service.heroSubheadline}
          </p>

          <div className="detail-hero-actions">
            <button
              type="button"
              className="detail-action-btn primary"
              onClick={onNavigateBookProject}
            >
              <span>Scope This Project</span>
              <ArrowRight size={15} />
            </button>

            <button
              type="button"
              className="detail-action-btn ghost"
              onClick={onNavigateContact}
            >
              <span>Direct Studio Inquiry</span>
              <ArrowUpRight size={15} />
            </button>
          </div>

          {/* Key Metric Highlights */}
          {service.stats && (
            <div className="detail-stats-bar">
              {service.stats.map((st, i) => (
                <div key={i} className="stat-item">
                  <strong className="stat-val" style={{ color: accent }}>{st.value}</strong>
                  <span className="stat-lbl">{st.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 2. OVERVIEW & WHAT WE OFFER GRID */}
      <section className="detail-section overview-section">
        <div className="detail-container">
          <div className="section-header-block">
            <div className="section-pill">
              <Compass size={13} style={{ color: accent }} />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="section-main-title">
              What We Offer in <span style={{ color: accent }}>{service.title}</span>
            </h2>
            <p className="section-main-desc">
              {service.overview}
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="offerings-grid">
            {service.offerings.map((offer, idx) => (
              <div key={idx} className="offering-card">
                <div className="offering-card-num" style={{ color: accent }}>
                  0{idx + 1}
                </div>
                <h3 className="offering-card-title">{offer.title}</h3>
                <p className="offering-card-desc">{offer.desc}</p>
                <div className="offering-glow-line" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES CHECKLIST & TECH STACK */}
      <section className="detail-section tech-capabilities-section">
        <div className="detail-container">
          <div className="tech-capabilities-split">
            {/* Left: Key Features */}
            <div className="capabilities-left">
              <div className="section-pill">
                <ShieldCheck size={13} style={{ color: accent }} />
                <span>ARCHITECTURAL RIGOR</span>
              </div>
              <h2 className="split-title">Engineered with Zero Compromises</h2>
              <p className="split-desc">
                Every project we ship is backed by strict engineering benchmarks, clear code ownership, and battle-tested industry practices.
              </p>

              <div className="features-checklist">
                {service.features.map((feat, i) => (
                  <div key={i} className="checklist-item">
                    <div className="check-icon-wrap" style={{ color: accent, background: `${accent}18` }}>
                      <CheckCircle2 size={15} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technologies & Tools */}
            <div className="tech-stack-right">
              <div className="tech-card-box">
                <div className="tech-box-header">
                  <Cpu size={18} style={{ color: accent }} />
                  <h3>Technologies & Frameworks</h3>
                </div>
                <p className="tech-box-sub">
                  We deploy modern, production-grade tools proven at high scale:
                </p>

                <div className="tech-badges-cloud">
                  {service.techStack.map((tech, i) => (
                    <div key={i} className="tech-pill-badge">
                      <span className="tech-name">{tech.name}</span>
                      <span className="tech-role">{tech.tag}</span>
                    </div>
                  ))}
                </div>

                <div className="tech-box-footer">
                  <Sparkles size={14} style={{ color: accent }} />
                  <span>Custom toolchains configured per project requirements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STEP-BY-STEP DEVELOPMENT & DELIVERY PROCESS */}
      <section className="detail-section process-section">
        <div className="detail-container">
          <div className="section-header-block centered">
            <div className="section-pill">
              <Layers size={13} style={{ color: accent }} />
              <span>THE ROVAWARE FRAMEWORK</span>
            </div>
            <h2 className="section-main-title">
              Our Delivery & Engineering Process
            </h2>
            <p className="section-main-desc">
              A transparent, milestone-driven framework designed to ship production-ready results with maximum momentum and zero surprises.
            </p>
          </div>

          <div className="process-timeline-grid">
            {service.process.map((step, idx) => (
              <div key={idx} className="timeline-stage-card">
                <div className="stage-top-row">
                  <span className="stage-number" style={{ color: accent }}>
                    {step.step}
                  </span>
                  <span className="stage-kicker">STAGE {step.step}</span>
                </div>
                <h3 className="stage-title">{step.title}</h3>
                <p className="stage-desc">{step.desc}</p>
                <div className="stage-progress-indicator" style={{ background: accent }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TANGIBLE OUTCOMES & RELEVANT PORTFOLIO */}
      <section className="detail-section outcomes-portfolio-section">
        <div className="detail-container">
          {/* Business Outcomes */}
          <div className="outcomes-intro">
            <h2 className="outcomes-title">Business Outcomes You Can Measure</h2>
            <div className="outcomes-cards-grid">
              {service.outcomes.map((out, i) => (
                <div key={i} className="outcome-card">
                  <div className="outcome-icon" style={{ color: accent }}>
                    <Rocket size={18} />
                  </div>
                  <h3>{out.title}</h3>
                  <p>{out.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Showcase Project */}
          {service.portfolio && (
            <div className="featured-case-study-box">
              <div className="case-study-glow" style={{ background: `${accent}15` }} />
              <div className="case-study-content">
                <span className="case-kicker" style={{ color: accent }}>
                  RELEVANT PRODUCTION SHOWCASE
                </span>
                <h3 className="case-title">{service.portfolio.title}</h3>
                <span className="case-client">{service.portfolio.client}</span>
                <p className="case-summary">{service.portfolio.summary}</p>
                <div className="case-metric-pill" style={{ borderColor: `${accent}44` }}>
                  <CheckCircle2 size={14} style={{ color: accent }} />
                  <strong>Result:</strong>
                  <span>{service.portfolio.metric}</span>
                </div>
              </div>

              {service.portfolio.image && (
                <div className="case-study-image-wrap">
                  <img src={service.portfolio.image} alt={service.portfolio.title} />
                  <div className="image-overlay-shade" />
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 6. SERVICE-SPECIFIC FAQS */}
      <section className="detail-section faqs-section">
        <div className="detail-container">
          <div className="section-header-block centered">
            <div className="section-pill">
              <HelpCircle size={13} style={{ color: accent }} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="section-main-title">
              Common Questions About <span style={{ color: accent }}>{service.title}</span>
            </h2>
            <p className="section-main-desc">
              Clear, honest answers about scope, timelines, deliverables, and technical execution.
            </p>
          </div>

          <div className="faqs-accordion-list">
            {service.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                >
                  <div className="faq-question-row">
                    <span className="faq-question-text">{faq.q}</span>
                    <div className="faq-toggle-btn" style={{ borderColor: isOpen ? accent : 'rgba(255,255,255,0.1)' }}>
                      {isOpen ? <Minus size={15} style={{ color: accent }} /> : <Plus size={15} />}
                    </div>
                  </div>
                  {isOpen && (
                    <div className="faq-answer-pane">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. PREV / NEXT SERVICE NAVIGATION STRIP */}
      <section className="service-nav-strip-section">
        <div className="detail-container">
          <div className="service-nav-strip">
            {prevService && (
              <button
                type="button"
                className="nav-strip-btn prev"
                onClick={() => onNavigateService(prevService.slug)}
              >
                <ArrowLeft size={16} />
                <div className="strip-text">
                  <span className="strip-dir">PREVIOUS DISCIPLINE</span>
                  <span className="strip-name">{prevService.title}</span>
                </div>
              </button>
            )}

            <button
              type="button"
              className="nav-strip-all"
              onClick={onNavigateAllServices}
            >
              All 9 Services
            </button>

            {nextService && (
              <button
                type="button"
                className="nav-strip-btn next"
                onClick={() => onNavigateService(nextService.slug)}
              >
                <div className="strip-text" style={{ textAlign: 'right' }}>
                  <span className="strip-dir">NEXT DISCIPLINE</span>
                  <span className="strip-name">{nextService.title}</span>
                </div>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 8. STRONG PROJECT INQUIRY CTA */}
      <section className="detail-cta-section">
        <div className="detail-container">
          <div className="detail-cta-card">
            <div className="cta-ambient-glow" style={{ background: `${accent}18` }} />
            <span className="cta-kicker-tag" style={{ color: accent }}>
              <Sparkles size={13} />
              DISPATCH ENGINEERING
            </span>
            <h2 className="cta-card-title">{service.ctaTitle}</h2>
            <p className="cta-card-desc">{service.ctaDesc}</p>

            <div className="cta-card-buttons">
              <button
                type="button"
                className="cta-card-btn primary"
                onClick={onNavigateBookProject}
              >
                <span>Initiate Project Intake</span>
                <ArrowRight size={15} />
              </button>

              <button
                type="button"
                className="cta-card-btn ghost"
                onClick={onNavigateContact}
              >
                <span>Speak with an Engineer</span>
                <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="cta-guarantees-bar">
              <span><CheckCircle2 size={13} style={{ color: accent }} /> 24-Hour Scope Blueprint</span>
              <span><CheckCircle2 size={13} style={{ color: accent }} /> Mutual NDA Protected</span>
              <span><CheckCircle2 size={13} style={{ color: accent }} /> 100% Repository IP Ownership</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

