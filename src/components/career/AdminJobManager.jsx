import React, { useState, useEffect } from 'react';
import '../../styles/careers-black.css';

const LOCAL_STORAGE_KEY = 'rovaware_jobs_v1';

const DEFAULT_JOBS = [
  {
    id: 'j1',
    company: 'ROVAWARE',
    title: 'Lead Full-Stack Engineer',
    dept: 'Engineering',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
    exp: '5–8 years',
    salary: '₹35–55 LPA',
    isNew: true,
    posted: '1d ago',
    desc: 'Own web application architecture end-to-end — from high-throughput distributed backends to precision interactive React, Vite, and Next.js platforms.'
  },
  {
    id: 'j2',
    company: 'ROVAWARE',
    title: 'Senior AI & LLM Systems Engineer',
    dept: 'AI & ML',
    location: 'Remote (India)',
    type: 'Full-time',
    exp: '4–7 years',
    salary: '₹38–60 LPA',
    isNew: true,
    posted: '2d ago',
    desc: 'Build enterprise-grade autonomous AI agents, multi-agent orchestrations, vector RAG retrieval pipelines, and private fine-tuned model integrations.'
  },
  {
    id: 'j3',
    company: 'ROVAWARE',
    title: 'Cloud DevOps & Infrastructure Architect',
    dept: 'Engineering',
    location: 'Remote (India)',
    type: 'Full-time',
    exp: '5–8 years',
    salary: '₹32–50 LPA',
    isNew: false,
    posted: '3d ago',
    desc: 'Engineer resilient multi-region cloud infrastructures, automated Kubernetes clustering, zero-downtime CI/CD pipelines, and sub-second global edge routing.'
  },
  {
    id: 'j4',
    company: 'ROVAWARE',
    title: 'Staff Product & Interaction Designer',
    dept: 'Design',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    exp: '6+ years',
    salary: '₹30–48 LPA',
    isNew: true,
    posted: '2d ago',
    desc: 'Set the aesthetic benchmark for our studio: craft dark-mode design languages, 60fps micro-interactions, 3D WebGL typography, and cohesive design tokens.'
  },
  {
    id: 'j5',
    company: 'ROVAWARE',
    title: 'Senior Mobile Engineer (Flutter & Native)',
    dept: 'Engineering',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
    exp: '3–6 years',
    salary: '₹24–38 LPA',
    isNew: false,
    posted: '5d ago',
    desc: 'Deliver butter-smooth, 120Hz native and cross-platform mobile apps featuring offline-first local cache, biometric security, and real-time streaming sockets.'
  },
  {
    id: 'j6',
    company: 'ROVAWARE',
    title: 'Machine Learning Research Engineer',
    dept: 'AI & ML',
    location: 'Remote (Global)',
    type: 'Full-time',
    exp: '3–5 years',
    salary: '₹30–52 LPA',
    isNew: false,
    posted: '6d ago',
    desc: 'Evaluate cutting-edge foundation models, develop domain-adapted embedding models, and benchmark low-latency inference pipelines on modern GPU clusters.'
  },
  {
    id: 'j7',
    company: 'ROVAWARE',
    title: 'Lead UI/UX Designer',
    dept: 'Design',
    location: 'Remote (India)',
    type: 'Full-time',
    exp: '4–7 years',
    salary: '₹22–35 LPA',
    isNew: false,
    posted: '1w ago',
    desc: 'Transform complex enterprise SaaS workflows into intuitive, clean user experiences. Drive rapid design sprints and user feedback loops.'
  },
  {
    id: 'j8',
    company: 'ROVAWARE',
    title: 'Technical Solutions Architect',
    dept: 'Operations',
    location: 'Indore / Bengaluru / Remote',
    type: 'Full-time',
    exp: '4–8 years',
    salary: '₹26–42 LPA',
    isNew: true,
    posted: '3d ago',
    desc: 'Partner with founders and engineering leaders to scope transformative technical architectures, assess feasibility, and guide project kickoffs.'
  },
  {
    id: 'j9',
    company: 'ROVAWARE',
    title: 'Developer Advocate & Community Lead',
    dept: 'Operations',
    location: 'Remote',
    type: 'Full-time',
    exp: '2–5 years',
    salary: '₹18–28 LPA',
    isNew: false,
    posted: '1w ago',
    desc: 'Champion our engineering studio, publish open-source tooling, craft deep architectural breakdowns, and foster an active developer ecosystem.'
  }
];

export default function AdminJobManager({ onNavigateHome, onNavigateCareers }) {
  const [jobs, setJobs] = useState(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Could not read jobs from localStorage:', e);
    }
    return DEFAULT_JOBS;
  });

  const [form, setForm] = useState({
    company: 'ROVAWARE',
    recruiter: '',
    title: '',
    dept: 'Engineering',
    type: 'Full-time',
    location: 'Remote (India)',
    exp: '3–5 years',
    salary: '₹30–50 LPA',
    desc: ''
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [jsonExported, setJsonExported] = useState(false);

  useEffect(() => {
    document.title = 'Admin Portal — Job Postings Management | ROVAWARE';
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3200);
  };

  const saveJobsList = (newList) => {
    setJobs(newList);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newList));
    } catch (e) {
      console.warn('Error saving to localStorage:', e);
    }
  };

  const handlePostJob = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.company || form.company.trim().length < 1) {
      errs.company = 'Company name is required.';
    }
    if (!form.title || form.title.trim().length < 2) {
      errs.title = 'Job title is required (min 2 characters).';
    }
    if (!form.desc || form.desc.trim().length < 10) {
      errs.desc = 'Job description is required (min 10 characters).';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      showToast('Please fix required fields.');
      return;
    }

    const newJob = {
      id: 'j' + Date.now(),
      company: form.company.trim(),
      title: form.title.trim(),
      dept: form.dept,
      type: form.type,
      location: form.location.trim() || 'Remote',
      exp: form.exp.trim() || 'Not specified',
      salary: form.salary.trim() || 'Competitive',
      desc: form.desc.trim(),
      isNew: true,
      posted: 'Just now'
    };

    const updated = [newJob, ...jobs];
    saveJobsList(updated);
    setForm({
      company: 'ROVAWARE',
      recruiter: '',
      title: '',
      dept: 'Engineering',
      type: 'Full-time',
      location: 'Remote (India)',
      exp: '3–5 years',
      salary: '₹30–50 LPA',
      desc: ''
    });
    setErrors({});
    showToast(`Published "${newJob.title}" to public careers board!`);
  };

  const handleDeleteJob = (id, title) => {
    if (window.confirm(`Are you sure you want to remove "${title}" from the board?`)) {
      const updated = jobs.filter((j) => j.id !== id);
      saveJobsList(updated);
      showToast(`Removed "${title}".`);
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all positions back to default Rovaware job roles? Any custom jobs will be replaced.')) {
      saveJobsList(DEFAULT_JOBS);
      showToast('Reset positions to default.');
    }
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(jobs, null, 2));
    setJsonExported(true);
    showToast('Copied JSON to clipboard!');
    setTimeout(() => setJsonExported(false), 2500);
  };

  return (
    <div className="careers-black-root" style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Top Header */}
      <div
        style={{
          borderBottom: '1px solid var(--cb-line)',
          background: 'rgba(10, 10, 12, 0.9)',
          backdropFilter: 'blur(12px)',
          position: 'sticky',
          top: 0,
          zIndex: 80
        }}
      >
        <div
          className="wrap"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70px',
            flexWrap: 'wrap',
            gap: '14px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'var(--cb-accent)',
                color: '#000',
                display: 'grid',
                placeItems: 'center',
                fontWeight: 800,
                fontSize: '15px'
              }}
            >
              R
            </span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '16px', color: '#fff', letterSpacing: '-0.02em' }}>
                ROVAWARE <span style={{ color: 'var(--cb-accent)', fontSize: '13px', fontWeight: 600 }}>ADMIN PORTAL</span>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--cb-muted)', fontFamily: 'var(--cb-mono)' }}>
                Careers &amp; Job Board Controller
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              className="cb-btn cb-btn-quiet"
              style={{ fontSize: '13px', padding: '8px 16px' }}
              onClick={onNavigateHome || (() => (window.location.href = '/'))}
            >
              Home Studio
            </button>
            <button
              type="button"
              className="cb-btn cb-btn-primary"
              style={{ fontSize: '13px', padding: '8px 16px' }}
              onClick={onNavigateCareers || (() => (window.location.href = '/careers'))}
            >
              View Public Careers Board →
            </button>
          </div>
        </div>
      </div>

      <div className="wrap" style={{ marginTop: '36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 480px) 1fr', gap: '32px', alignItems: 'start' }}>
          {/* Post A Job Form Card */}
          <div
            style={{
              background: 'linear-gradient(180deg, #0e0e11, #08080a)',
              border: '1px solid var(--cb-line-hi)',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 30px 60px -30px rgba(0,0,0,0.8)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--cb-accent)',
                  boxShadow: '0 0 10px var(--cb-accent)'
                }}
              />
              <h2 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#fff' }}>Post a New Job</h2>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--cb-muted)', marginBottom: '22px' }}>
              Fill details below to instantly publish a live job card to the public ROVAWARE board.
            </p>

            <form onSubmit={handlePostJob} noValidate>
              <div className="cb-row2">
                <div className={`cb-field ${errors.company ? 'bad' : ''}`}>
                  <label htmlFor="adm-company">
                    <span>Company Name</span> <span className="req">*</span>
                  </label>
                  <input
                    id="adm-company"
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                  {errors.company && <div className="cb-err">{errors.company}</div>}
                </div>

                <div className="cb-field">
                  <label htmlFor="adm-recruiter">Contact Email</label>
                  <input
                    id="adm-recruiter"
                    type="email"
                    placeholder="hiring@rovaware.com"
                    value={form.recruiter}
                    onChange={(e) => setForm({ ...form, recruiter: e.target.value })}
                  />
                </div>
              </div>

              <div className={`cb-field ${errors.title ? 'bad' : ''}`}>
                <label htmlFor="adm-title">
                  <span>Job Title</span> <span className="req">*</span>
                </label>
                <input
                  id="adm-title"
                  type="text"
                  placeholder="e.g. Senior Distributed Systems Engineer"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
                {errors.title && <div className="cb-err">{errors.title}</div>}
              </div>

              <div className="cb-row2">
                <div className="cb-field">
                  <label htmlFor="adm-dept">Department</label>
                  <select
                    id="adm-dept"
                    value={form.dept}
                    onChange={(e) => setForm({ ...form, dept: e.target.value })}
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="AI & ML">AI &amp; ML</option>
                    <option value="Design">Design</option>
                    <option value="Operations">Operations</option>
                  </select>
                </div>

                <div className="cb-field">
                  <label htmlFor="adm-type">Arrangement</label>
                  <select
                    id="adm-type"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              <div className="cb-row2">
                <div className="cb-field">
                  <label htmlFor="adm-location">Location</label>
                  <input
                    id="adm-location"
                    type="text"
                    placeholder="Remote (India), Bengaluru..."
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                  />
                </div>

                <div className="cb-field">
                  <label htmlFor="adm-exp">Experience</label>
                  <input
                    id="adm-exp"
                    type="text"
                    placeholder="3–6 years"
                    value={form.exp}
                    onChange={(e) => setForm({ ...form, exp: e.target.value })}
                  />
                </div>
              </div>

              <div className="cb-field">
                <label htmlFor="adm-salary">Compensation Range (CTC)</label>
                <input
                  id="adm-salary"
                  type="text"
                  placeholder="₹30–45 LPA"
                  value={form.salary}
                  onChange={(e) => setForm({ ...form, salary: e.target.value })}
                />
              </div>

              <div className={`cb-field ${errors.desc ? 'bad' : ''}`}>
                <label htmlFor="adm-desc">
                  <span>Role Description</span> <span className="req">*</span>
                </label>
                <textarea
                  id="adm-desc"
                  placeholder="Briefly describe what this engineer or designer will own and ship..."
                  rows={4}
                  value={form.desc}
                  onChange={(e) => setForm({ ...form, desc: e.target.value })}
                />
                {errors.desc && <div className="cb-err">{errors.desc}</div>}
              </div>

              <button
                type="submit"
                className="cb-btn cb-btn-primary"
                style={{ width: '100%', marginTop: '14px', padding: '13px' }}
              >
                + Publish Job to Public Board
              </button>
            </form>
          </div>

          {/* Currently Active Jobs Listing */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '18px',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 700, margin: 0, color: '#fff' }}>
                  Live Positions ({jobs.length})
                </h2>
                <p style={{ fontSize: '13px', color: 'var(--cb-muted)', margin: '4px 0 0' }}>
                  These jobs are currently visible to visitors on /careers
                </p>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  className="cb-btn cb-btn-quiet"
                  style={{ fontSize: '12px', padding: '6px 12px' }}
                  onClick={handleCopyJSON}
                >
                  {jsonExported ? '✓ Copied' : 'Export JSON'}
                </button>
                <button
                  type="button"
                  className="cb-btn cb-btn-quiet"
                  style={{ fontSize: '12px', padding: '6px 12px', color: '#ff6b6b' }}
                  onClick={handleResetDefaults}
                >
                  Reset Defaults
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {jobs.map((j, idx) => (
                <div
                  key={j.id || idx}
                  style={{
                    border: '1px solid var(--cb-line)',
                    borderRadius: '16px',
                    padding: '18px 20px',
                    background: 'rgba(255, 255, 255, 0.015)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontFamily: 'var(--cb-mono)',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: 'rgba(201, 242, 77, 0.12)',
                          color: 'var(--cb-accent)',
                          fontWeight: 700
                        }}
                      >
                        {j.dept}
                      </span>
                      <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: '#fff' }}>
                        {j.title}
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDeleteJob(j.id, j.title)}
                      style={{
                        color: 'var(--cb-muted)',
                        fontSize: '12px',
                        border: '1px solid var(--cb-line-hi)',
                        borderRadius: '6px',
                        padding: '4px 10px',
                        background: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.18s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#ff6b6b';
                        e.currentTarget.style.borderColor = 'rgba(255, 107, 107, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--cb-muted)';
                        e.currentTarget.style.borderColor = 'var(--cb-line-hi)';
                      }}
                    >
                      Delete
                    </button>
                  </div>

                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--cb-muted)', lineHeight: '1.5' }}>
                    {j.desc}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      fontSize: '11.5px',
                      color: 'var(--cb-muted)',
                      borderTop: '1px solid rgba(255,255,255,0.04)',
                      paddingTop: '10px',
                      marginTop: '4px'
                    }}
                  >
                    <span>📍 {j.location}</span>
                    <span>•</span>
                    <span>⏱ {j.type}</span>
                    <span>•</span>
                    <span>💼 {j.exp}</span>
                    <span>•</span>
                    <span style={{ color: 'var(--cb-text)', fontWeight: 600 }}>💰 {j.salary}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Toast Alert */}
      <div className={`cb-toast ${toast ? 'show' : ''}`} role="status">
        {toast}
      </div>
    </div>
  );
}
