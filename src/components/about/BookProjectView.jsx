import React, { useState, useEffect } from 'react';
import {
  CalendarCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Send,
  Link as LinkIcon,
  HelpCircle,
  FileText
} from 'lucide-react';

export default function BookProjectView({ onNavigateHome, onNavigateContact }) {
  useEffect(() => {
    document.title = 'Book a Project — ROVAWARE Engineering Studio';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      document.title = 'ROVAWARE — Build • Automate • Scale';
    };
  }, []);

  const serviceOptions = [
    'Full-Stack Web App',
    'Custom AI & LLM Automation',
    'SaaS Product Development',
    'Mobile Application (React Native)',
    'UI/UX Design & Spatial Systems',
    'Cloud Architecture & DevOps',
    'Performance & Web Vitals Optimization',
    'Codebase Security & Audit'
  ];

  const budgetTiers = [
    { id: 'tier-1', title: 'Starter Tier', range: '< $5,000', desc: 'Proof-of-concept, MVP, or focused micro-automation' },
    { id: 'tier-2', title: 'Growth Tier', range: '$5,000 – $15,000', desc: 'Production-ready web application or full AI agent system' },
    { id: 'tier-3', title: 'Scale Tier', range: '$15,000 – $35,000', desc: 'Multi-tenant SaaS platform with advanced billing & infra' },
    { id: 'tier-4', title: 'Enterprise', range: '$35,000+', desc: 'High-availability distributed architecture & ongoing retainers' }
  ];

  const timelineOptions = [
    'Urgent (< 2 Weeks)',
    'Standard (2 – 4 Weeks)',
    'Comprehensive (1 – 3 Months)',
    'Flexible / Ongoing Partnership'
  ];

  const [selectedServices, setSelectedServices] = useState(['Full-Stack Web App']);
  const [selectedBudget, setSelectedBudget] = useState('tier-2');
  const [selectedTimeline, setSelectedTimeline] = useState('Standard (2 – 4 Weeks)');

  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDescription: '',
    referenceLinks: '',
    needNDA: true
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  const toggleService = (service) => {
    setSelectedServices((prev) => {
      if (prev.includes(service)) {
        if (prev.length === 1) return prev; // keep at least one
        return prev.filter((s) => s !== service);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (formStatus === 'error') setFormStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!bookingData.name.trim()) {
      setFormStatus('error');
      setErrorMessage('Please provide your full name.');
      return;
    }

    if (!bookingData.email || !emailRegex.test(bookingData.email)) {
      setFormStatus('error');
      setErrorMessage('Please provide a valid work email address.');
      return;
    }

    if (!bookingData.projectDescription.trim() || bookingData.projectDescription.trim().length < 25) {
      setFormStatus('error');
      setErrorMessage('Please provide at least 25 characters detailing your project scope or objectives.');
      return;
    }

    setFormStatus('submitting');

    setTimeout(() => {
      try {
        const refId = `RW-PRJ-${Math.floor(10000 + Math.random() * 90000)}`;
        const selectedTierObj = budgetTiers.find((t) => t.id === selectedBudget);
        const record = {
          ...bookingData,
          services: selectedServices,
          budgetTier: selectedTierObj ? `${selectedTierObj.title} (${selectedTierObj.range})` : selectedBudget,
          timeline: selectedTimeline,
          referenceId: refId,
          submittedAt: new Date().toISOString()
        };

        const existing = JSON.parse(localStorage.getItem('rovaware_project_bookings') || '[]');
        existing.push(record);
        localStorage.setItem('rovaware_project_bookings', JSON.stringify(existing));

        setBookingRef(refId);
        setFormStatus('success');
      } catch (err) {
        setFormStatus('error');
        setErrorMessage('Could not record project booking. Please try again.');
      }
    }, 800);
  };

  return (
    <div className="about-page-root">
      {/* HERO SECTION */}
      <section className="about-hero-section">
        <div className="about-hero-glow" aria-hidden="true" />
        <div className="about-container">
          <div className="about-breadcrumb">
            <button type="button" className="about-breadcrumb-link" onClick={onNavigateHome}>
              Home
            </button>
            <ChevronRight size={13} className="about-breadcrumb-sep" />
            <span className="about-breadcrumb-text">About</span>
            <ChevronRight size={13} className="about-breadcrumb-sep" />
            <span className="about-breadcrumb-current">Book a Project</span>
          </div>

          <div className="about-hero-badge">
            <CalendarCheck size={14} className="about-badge-icon" />
            <span>PROJECT INTAKE & ARCHITECTURE SCOPING</span>
          </div>

          <h1 className="about-hero-title">
            Book Your Project &{' '}
            <span className="about-gradient-text">Engineering Dispatch.</span>
          </h1>

          <p className="about-hero-desc">
            Submit your technical specifications, goals, and timeline below. Every brief is reviewed
            by our lead architects within 24 hours — complete with feasibility analysis and milestone roadmap.
          </p>

          {/* 3-Step Process Steps */}
          <div className="booking-steps-bar">
            <div className="booking-step-item active">
              <span className="step-num">1</span>
              <span className="step-label">Submit Project Scope</span>
            </div>
            <div className="booking-step-sep" />
            <div className="booking-step-item">
              <span className="step-num">2</span>
              <span className="step-label">24h Architecture Blueprint</span>
            </div>
            <div className="booking-step-sep" />
            <div className="booking-step-item">
              <span className="step-num">3</span>
              <span className="step-label">Sprint Kickoff & Build</span>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FORM SECTION */}
      <section className="about-section">
        <div className="about-container-narrow">
          {formStatus === 'success' ? (
            <div className="booking-success-card">
              <CheckCircle2 size={56} className="booking-success-icon" />
              <h2 className="booking-success-title">Project Scope Successfully Received!</h2>
              <p className="booking-success-desc">
                Your project brief has been routed to our systems architects. We have assigned tracking reference:
              </p>

              <div className="booking-ref-box">
                <span className="ref-label">Dispatch Tracking Reference</span>
                <strong className="ref-val">{bookingRef}</strong>
              </div>

              <div className="booking-next-steps">
                <h4>What Happens Next:</h4>
                <ul>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Our senior leads review technical feasibility, dependencies, and architecture constraints.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Within 24 hours, you will receive our written Architecture Blueprint & Milestone Timeline.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>We schedule a 20-minute kickoff call to align on sprint deliverables and access credentials.</span>
                  </li>
                </ul>
              </div>

              <div className="booking-success-actions">
                <button
                  type="button"
                  className="about-btn-primary"
                  onClick={onNavigateHome}
                >
                  Return to Home
                </button>
                <button
                  type="button"
                  className="about-btn-ghost"
                  onClick={() => setFormStatus('idle')}
                >
                  Submit Another Scope
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form-card">
              {/* SECTION 1: SERVICES NEEDED */}
              <div className="booking-form-section">
                <div className="section-title-wrap">
                  <span className="section-index">01</span>
                  <div>
                    <h3 className="section-title">Select Required Services</h3>
                    <p className="section-sub">Choose all technical capabilities relevant to your project (multi-select).</p>
                  </div>
                </div>

                <div className="services-pill-grid">
                  {serviceOptions.map((svc) => {
                    const isSelected = selectedServices.includes(svc);
                    return (
                      <button
                        key={svc}
                        type="button"
                        className={`service-pill-btn ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleService(svc)}
                      >
                        <span className="pill-checkbox">{isSelected ? '✓' : '+'}</span>
                        <span>{svc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 2: BUDGET TIER */}
              <div className="booking-form-section">
                <div className="section-title-wrap">
                  <span className="section-index">02</span>
                  <div>
                    <h3 className="section-title">Estimated Investment Budget</h3>
                    <p className="section-sub">Select the tier that aligns with your capital allocation and expected scale.</p>
                  </div>
                </div>

                <div className="budget-tier-grid">
                  {budgetTiers.map((tier) => {
                    const isSelected = selectedBudget === tier.id;
                    return (
                      <div
                        key={tier.id}
                        className={`budget-tier-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => setSelectedBudget(tier.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setSelectedBudget(tier.id)}
                      >
                        <div className="tier-radio">
                          <span className={`radio-dot ${isSelected ? 'active' : ''}`} />
                        </div>
                        <div className="tier-content">
                          <span className="tier-name">{tier.title}</span>
                          <span className="tier-range">{tier.range}</span>
                          <p className="tier-desc">{tier.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 3: TIMELINE */}
              <div className="booking-form-section">
                <div className="section-title-wrap">
                  <span className="section-index">03</span>
                  <div>
                    <h3 className="section-title">Target Delivery Timeline</h3>
                    <p className="section-sub">When do you need the production build deployed or milestone delivered?</p>
                  </div>
                </div>

                <div className="timeline-options-grid">
                  {timelineOptions.map((time) => {
                    const isSelected = selectedTimeline === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        className={`timeline-option-btn ${isSelected ? 'selected' : ''}`}
                        onClick={() => setSelectedTimeline(time)}
                      >
                        <Clock size={15} />
                        <span>{time}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 4: SCOPE & REFERENCES */}
              <div className="booking-form-section">
                <div className="section-title-wrap">
                  <span className="section-index">04</span>
                  <div>
                    <h3 className="section-title">Project Scope & References</h3>
                    <p className="section-sub">Describe key features, technical stack preferences, or competitor benchmarks.</p>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="booking-desc">
                    Project Description & Requirements <span className="req">*</span>
                  </label>
                  <textarea
                    id="booking-desc"
                    name="projectDescription"
                    rows={6}
                    required
                    placeholder="Tell us what you are building, target users, core features, or current pain points with existing systems..."
                    value={bookingData.projectDescription}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="booking-links">
                    Reference URLs / Design Files / Competitor Links
                  </label>
                  <div className="input-with-icon">
                    <LinkIcon size={16} className="field-icon" />
                    <input
                      id="booking-links"
                      name="referenceLinks"
                      type="text"
                      placeholder="e.g. Figma links, GitHub repo, live site URL, or references"
                      value={bookingData.referenceLinks}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 5: CONTACT INFORMATION */}
              <div className="booking-form-section">
                <div className="section-title-wrap">
                  <span className="section-index">05</span>
                  <div>
                    <h3 className="section-title">Your Contact Details</h3>
                    <p className="section-sub">Where should we deliver the 24-hour architecture blueprint?</p>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label htmlFor="booking-name">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      id="booking-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Elena Rostova"
                      value={bookingData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="booking-email">
                      Business Email <span className="req">*</span>
                    </label>
                    <input
                      id="booking-email"
                      name="email"
                      type="email"
                      required
                      placeholder="elena@company.com"
                      value={bookingData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label htmlFor="booking-company">Company / Product Name</label>
                    <input
                      id="booking-company"
                      name="company"
                      type="text"
                      placeholder="e.g. Apex Data AI"
                      value={bookingData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="booking-phone">Phone / WhatsApp (Optional)</label>
                    <input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={bookingData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="nda-checkbox-wrap">
                  <label className="checkbox-custom-label">
                    <input
                      type="checkbox"
                      name="needNDA"
                      checked={bookingData.needNDA}
                      onChange={handleChange}
                    />
                    <span className="custom-box" />
                    <span className="checkbox-text">
                      I request a signed Mutual Non-Disclosure Agreement (NDA) before detailed code inspection.
                    </span>
                  </label>
                </div>
              </div>

              {/* ERROR STATE */}
              {formStatus === 'error' && (
                <div className="form-error-banner">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* SUBMIT BUTTON */}
              <div className="booking-submit-wrap">
                <button
                  type="submit"
                  className="booking-submit-btn"
                  disabled={formStatus === 'submitting'}
                >
                  <Send size={16} />
                  <span>{formStatus === 'submitting' ? 'Submitting Brief...' : 'Submit Project Brief & Request Blueprint'}</span>
                </button>
                <p className="booking-guarantee-note">
                  <ShieldCheck size={14} />
                  <span>Reviewed by senior systems architects within 24 hours. Zero spam.</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

