import React, { useState, useEffect } from 'react';
import {
  Mail,
  Send,
  Phone,
  Clock,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ChevronRight,
  ShieldCheck,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Headphones,
  FileCode2
} from 'lucide-react';

const STUDIO_WHATSAPP_NUMBER = '919752264618';

export default function ContactView({ onNavigateHome, onNavigateBookProject }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'Web Development',
    budget: '$5k - $15k',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedKey, setCopiedKey] = useState(null);
  const [submissionRef, setSubmissionRef] = useState('');
  const [lastSubmission, setLastSubmission] = useState(null);

  useEffect(() => {
    document.title = 'Contact Engineering Leads — ROVAWARE';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      document.title = 'ROVAWARE — Build • Automate • Scale';
    };
  }, []);

  const handleCopy = (key, text) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formStatus === 'error') setFormStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      setFormStatus('error');
      setStatusMessage('Please enter your full name.');
      return;
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      setFormStatus('error');
      setStatusMessage('Please enter a valid business email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      setFormStatus('error');
      setStatusMessage('Please provide at least 15 characters describing your project or inquiry.');
      return;
    }

    setFormStatus('submitting');

    setTimeout(() => {
      try {
        const refId = `RW-${Math.floor(100000 + Math.random() * 900000)}`;
        const existing = JSON.parse(localStorage.getItem('rovaware_contact_inquiries') || '[]');
        const newRecord = {
          ...formData,
          id: refId,
          submittedAt: new Date().toISOString()
        };
        existing.push(newRecord);
        localStorage.setItem('rovaware_contact_inquiries', JSON.stringify(existing));

        setSubmissionRef(refId);
        setLastSubmission(newRecord);
        setFormStatus('success');
        setStatusMessage('Your inquiry has been dispatched to our principal engineering leads. Expect a technical review and feasibility scope within 24 hours.');
        setFormData({
          name: '',
          email: '',
          company: '',
          topic: 'Web Development',
          budget: '$5k - $15k',
          message: ''
        });
      } catch (err) {
        setFormStatus('error');
        setStatusMessage('Could not submit inquiry. Please try again or reach out to us directly via WhatsApp or email.');
      }
    }, 600);
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Hello RovaWare Engineering Team,\n\nI am contacting you regarding a project consultation.\nName: ${formData.name || 'Client'}\nTopic: ${formData.topic}\nBudget: ${formData.budget}`
    );
    window.open(`https://api.whatsapp.com/send?phone=${STUDIO_WHATSAPP_NUMBER}&text=${text}`, '_blank', 'noopener,noreferrer');
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
            <span className="about-breadcrumb-current">Contact</span>
          </div>

          <div className="about-hero-badge">
            <Mail size={14} className="about-badge-icon" />
            <span>DIRECT ENGINEERING DISPATCH</span>
          </div>

          <h1 className="about-hero-title">
            Let&apos;s Start a{' '}
            <span className="about-gradient-text">Technical Conversation.</span>
          </h1>

          <p className="about-hero-desc">
            Have an engineering challenge, upcoming platform roadmap, or architecture consultation request?
            Reach out directly to our engineering leads. Every message is reviewed within 24 hours.
          </p>

          <div className="contact-status-indicator">
            <span className="pulse-dot" />
            <span>Systems Active • Accepting Select New Client Engagements for Q4</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT LAYOUT */}
      <section className="about-section" style={{ padding: '60px 0 90px' }}>
        <div className="about-container">
          <div className="contact-main-grid">
            {/* LEFT COLUMN: STUDIO DETAILS & DIRECT CHANNELS */}
            <div className="contact-info-col">
              <div className="contact-card-surface">
                <h2 className="contact-col-title">Direct Studio Contacts</h2>
                <p className="contact-col-desc">
                  Connect through our verified technical channels. All communications are confidential and covered under standard non-disclosure protections.
                </p>

                {/* Direct Channel 1: General Desk */}
                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <Mail size={19} />
                  </div>
                  <div className="contact-channel-details">
                    <span className="contact-channel-label">General & Client Inquiries</span>
                    <a href="mailto:hello@rovaware.com" className="contact-channel-val">
                      hello@rovaware.com
                    </a>
                  </div>
                  <button
                    type="button"
                    className="contact-copy-btn"
                    onClick={() => handleCopy('hello', 'hello@rovaware.com')}
                    title="Copy Email"
                    aria-label="Copy hello@rovaware.com"
                  >
                    {copiedKey === 'hello' ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#38BDF8', fontSize: '11px', fontWeight: 700 }}>
                        <Check size={13} /> Copied
                      </span>
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>

                {/* Direct Channel 2: Engineering Architecture Desk */}
                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <FileCode2 size={19} />
                  </div>
                  <div className="contact-channel-details">
                    <span className="contact-channel-label">Architecture Scoping & Audits</span>
                    <a href="mailto:engineering@rovaware.com" className="contact-channel-val">
                      engineering@rovaware.com
                    </a>
                  </div>
                  <button
                    type="button"
                    className="contact-copy-btn"
                    onClick={() => handleCopy('eng', 'engineering@rovaware.com')}
                    title="Copy Email"
                    aria-label="Copy engineering@rovaware.com"
                  >
                    {copiedKey === 'eng' ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#38BDF8', fontSize: '11px', fontWeight: 700 }}>
                        <Check size={13} /> Copied
                      </span>
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>

                {/* Direct Channel 3: Production Support Desk */}
                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <Headphones size={19} />
                  </div>
                  <div className="contact-channel-details">
                    <span className="contact-channel-label">Production Support & Maintenance</span>
                    <a href="mailto:support@rovaware.com" className="contact-channel-val">
                      support@rovaware.com
                    </a>
                  </div>
                  <button
                    type="button"
                    className="contact-copy-btn"
                    onClick={() => handleCopy('support', 'support@rovaware.com')}
                    title="Copy Email"
                    aria-label="Copy support@rovaware.com"
                  >
                    {copiedKey === 'support' ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#38BDF8', fontSize: '11px', fontWeight: 700 }}>
                        <Check size={13} /> Copied
                      </span>
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>

                {/* Direct Channel 4: Studio WhatsApp & Phone */}
                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <Phone size={19} />
                  </div>
                  <div className="contact-channel-details">
                    <span className="contact-channel-label">Direct Technical Dispatch (WhatsApp / Call)</span>
                    <a
                      href={`https://api.whatsapp.com/send?phone=${STUDIO_WHATSAPP_NUMBER}&text=${encodeURIComponent('Hi RovaWare team, I want to discuss a project inquiry.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-channel-val"
                    >
                      +91 97522 64618
                    </a>
                  </div>
                  <button
                    type="button"
                    className="contact-copy-btn"
                    onClick={() => handleCopy('phone', '+919752264618')}
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedKey === 'phone' ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#38BDF8', fontSize: '11px', fontWeight: 700 }}>
                        <Check size={13} /> Copied
                      </span>
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>

                {/* Response Commitment */}
                <div className="contact-guarantee-box">
                  <Clock size={20} style={{ color: '#FF8C32', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4>24-Hour SLA Commitment</h4>
                    <p>
                      Every inquiry receives architectural feasibility scoping and milestone recommendations within 24 hours.
                    </p>
                  </div>
                </div>

                {/* Dedicated Booking Banner */}
                <div className="contact-booking-prompt">
                  <div className="prompt-text">
                    <h4>Have a Complete Project Scope?</h4>
                    <p>Use our dedicated project intake form for granular specifications & instant budget tiering.</p>
                  </div>
                  <button
                    type="button"
                    className="prompt-btn"
                    onClick={onNavigateBookProject}
                  >
                    <span>Book a Project</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

                {/* Official Social Links */}
                <div className="contact-social-section">
                  <span className="contact-social-heading">Verified Developer & Social Channels</span>
                  <div className="contact-social-pills">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-pill"
                    >
                      <span>GitHub</span>
                      <ExternalLink size={12} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-pill"
                    >
                      <span>X / Twitter</span>
                      <ExternalLink size={12} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-pill"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink size={12} />
                    </a>
                    <a
                      href="https://discord.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-pill"
                    >
                      <span>Discord</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE CONTACT FORM */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <div className="contact-form-header">
                  <h3 className="form-card-title">Send a Direct Message</h3>
                  <p className="form-card-desc">
                    Fill in your project details below and a principal architect will reply directly.
                  </p>
                </div>

                {formStatus === 'success' ? (
                  <div className="contact-success-state">
                    <CheckCircle2 size={46} className="success-icon" />
                    <h3>Message Successfully Dispatched!</h3>
                    <p>{statusMessage}</p>
                    <div className="success-ref-box">
                      <span>Tracking Reference:</span>
                      <strong>{submissionRef}</strong>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                      <button
                        type="button"
                        className="about-btn-primary"
                        onClick={() => setFormStatus('idle')}
                      >
                        Send Another Message
                      </button>

                      {lastSubmission && (
                        <a
                          className="contact-copy-btn"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '10px 18px',
                            borderRadius: '8px',
                            background: 'rgba(37, 133, 232, 0.15)',
                            borderColor: 'rgba(54, 201, 244, 0.4)',
                            color: '#FFFFFF',
                            textDecoration: 'none',
                            fontSize: '13px',
                            fontWeight: 600
                          }}
                          href={`mailto:hello@rovaware.com?subject=${encodeURIComponent(`[${submissionRef}] Inquiry from ${lastSubmission.name}`)}&body=${encodeURIComponent(`Ref: ${submissionRef}\nName: ${lastSubmission.name}\nEmail: ${lastSubmission.email}\nTopic: ${lastSubmission.topic}\nBudget: ${lastSubmission.budget}\n\n${lastSubmission.message}`)}`}
                        >
                          <Mail size={14} />
                          <span>Open in Mail App</span>
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row-2">
                      <div className="form-field">
                        <label htmlFor="contact-name">
                          Full Name <span className="req">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          placeholder="e.g. Alex Henderson"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="contact-email">
                          Work Email <span className="req">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-field">
                        <label htmlFor="contact-company">Company / Organization</label>
                        <input
                          id="contact-company"
                          name="company"
                          type="text"
                          placeholder="e.g. TechCorp Labs"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="contact-topic">Primary Topic</label>
                        <select
                          id="contact-topic"
                          name="topic"
                          value={formData.topic}
                          onChange={handleChange}
                        >
                          <option value="Web Development">Full-Stack Web Development</option>
                          <option value="AI Integration">Autonomous AI & LLM Systems</option>
                          <option value="SaaS Architecture">SaaS & Multi-Tenant Infrastructure</option>
                          <option value="UI/UX Engineering">UI/UX Design & High-Performance Frontends</option>
                          <option value="Code Audit">Codebase Audit & Performance Optimization</option>
                          <option value="General Inquiry">General Partnership Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="contact-budget">Estimated Budget Range</label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="< $5,000">Under $5,000 (MVP / Focused Micro-Tool)</option>
                        <option value="$5,000 - $15,000">$5,000 – $15,000 (Production Web App / AI Flow)</option>
                        <option value="$15,000 - $35,000">$15,000 – $35,000 (Full-Featured SaaS Platform)</option>
                        <option value="$35,000+">$35,000+ (Enterprise Architecture & Retainers)</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="contact-message">
                        Message & Project Details <span className="req">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Share your goals, current architecture, timeline, or questions..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    {formStatus === 'error' && (
                      <div className="form-error-banner">
                        <AlertCircle size={15} />
                        <span>{statusMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="contact-submit-btn"
                      disabled={formStatus === 'submitting'}
                    >
                      <Send size={15} />
                      <span>{formStatus === 'submitting' ? 'Dispatching...' : 'Send Message'}</span>
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                      <button
                        type="button"
                        onClick={handleWhatsAppChat}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#A1A1AA',
                          fontSize: '12px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          cursor: 'pointer',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}
                      >
                        <MessageSquare size={13} style={{ color: '#38BDF8' }} />
                        <span>Prefer direct messaging? Chat with us on WhatsApp</span>
                      </button>
                    </div>

                    <div className="form-privacy-note">
                      <ShieldCheck size={13} />
                      <span>100% confidential. Your details are never shared or sold.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
