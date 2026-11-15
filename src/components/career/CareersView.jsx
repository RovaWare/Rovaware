import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import '../../styles/careers-black.css';

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

const LOCAL_STORAGE_KEY = 'rovaware_jobs_v1';

function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) {
    return Math.round(bytes / 1024) + ' KB';
  }
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

export default function CareersView({ onNavigateHome, onNavigateContact, onNavigateBookProject }) {
  // Load initial jobs from localStorage if present
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

  const [activeDept, setActiveDept] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const toastTimeoutRef = useRef(null);

  // Admin access state: check for ?admin=true / #admin in URL
  const [isAdmin, setIsAdmin] = useState(() => {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    return params.get('admin') === 'true' || params.get('admin') === 'rovaware' || window.location.hash === '#admin';
  });

  // Modal states
  const [applyJob, setApplyJob] = useState(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  // Apply Form State
  const [applyForm, setApplyForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    years: '',
    notice: '',
    company: '',
    link: '',
    note: '',
    consent: false
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [applyErrors, setApplyErrors] = useState({});
  const [applySuccess, setApplySuccess] = useState(null);
  const fileInputRef = useRef(null);

  // Post Job Form State
  const [postForm, setPostForm] = useState({
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
  const [postErrors, setPostErrors] = useState({});

  // Sync jobs to localStorage
  const saveJobs = (updatedJobs) => {
    setJobs(updatedJobs);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedJobs));
    } catch (e) {
      console.warn('Could not save jobs to localStorage:', e);
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3400);
  };

  // Scroll and Escape Key Handlers
  useEffect(() => {
    document.title = 'Careers & Open Roles — ROVAWARE Engineering Studio';
    document.body.classList.add('view-careers');
    window.scrollTo({ top: 0, behavior: 'instant' });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeAllModals();
      }
      // Secret Admin Key: Ctrl+Shift+A or Cmd+Shift+A toggles admin role
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdmin((prev) => {
          const next = !prev;
          showToast(next ? 'Admin Mode Activated · Post Job controls unlocked' : 'Admin Mode Deactivated');
          return next;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      document.title = 'ROVAWARE — Build • Automate • Scale';
      document.body.classList.remove('view-careers');
      document.body.style.overflow = '';
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  // Body overflow locking when any modal is open
  useEffect(() => {
    if (applyJob || isPostModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [applyJob, isPostModalOpen]);

  const closeAllModals = () => {
    setApplyJob(null);
    setIsPostModalOpen(false);
    setApplySuccess(null);
    setApplyErrors({});
    setPostErrors({});
    setResumeFile(null);
  };

  // Open Apply Modal
  const handleOpenApply = (job) => {
    setApplyJob(job);
    setApplySuccess(null);
    setApplyErrors({});
    setResumeFile(null);
    setApplyForm({
      name: '',
      email: '',
      phone: '',
      city: '',
      years: '',
      notice: '',
      company: '',
      link: '',
      note: '',
      consent: false
    });
  };

  // Open Post Modal
  const handleOpenPost = () => {
    setIsPostModalOpen(true);
    setPostErrors({});
    setPostForm({
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
  };

  // Resume File Selection & Drag-Drop Validation
  const handleFileChange = (file) => {
    if (!file) return;
    const okExt = /\.(pdf|doc|docx|rtf)$/i.test(file.name);
    const maxBytes = 5 * 1024 * 1024; // 5MB

    if (!okExt) {
      setApplyErrors((prev) => ({ ...prev, resume: 'Only PDF, DOC, DOCX, or RTF formats are accepted.' }));
      showToast('Only PDF, DOC, DOCX or RTF files are accepted.');
      return;
    }
    if (file.size > maxBytes) {
      setApplyErrors((prev) => ({ ...prev, resume: `File size is ${formatFileSize(file.size)} — limit is 5 MB.` }));
      showToast(`File size is ${formatFileSize(file.size)} — max 5 MB.`);
      return;
    }

    setResumeFile(file);
    setApplyErrors((prev) => {
      const next = { ...prev };
      delete next.resume;
      return next;
    });
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!applyForm.name || applyForm.name.trim().length < 2) {
      errors.name = 'Please enter your full name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!applyForm.email || !emailRegex.test(applyForm.email.trim())) {
      errors.email = 'Enter a valid email address.';
    }
    const phoneDigits = (applyForm.phone || '').replace(/\D/g, '');
    if (!applyForm.phone || phoneDigits.length < 7 || phoneDigits.length > 15) {
      errors.phone = 'Enter a valid phone number (7–15 digits).';
    }
    if (!resumeFile) {
      errors.resume = 'Please attach your resume (PDF or DOC, under 5 MB).';
    }
    if (!applyForm.consent) {
      errors.consent = 'Please accept the privacy policy to continue.';
    }

    if (Object.keys(errors).length > 0) {
      setApplyErrors(errors);
      showToast('Please check the required fields in the form.');
      return;
    }

    // Success
    const refCode = 'APP-' + Math.random().toString(36).slice(2, 7).toUpperCase();
    const candidateFirstName = applyForm.name.trim().split(' ')[0] || 'there';

    setApplySuccess({
      ref: refCode,
      firstName: candidateFirstName,
      details: [
        { label: 'Role', value: applyJob?.title || 'Engineer' },
        { label: 'Company', value: applyJob?.company || 'ROVAWARE' },
        { label: 'Candidate', value: applyForm.name },
        { label: 'Email', value: applyForm.email },
        { label: 'Phone', value: applyForm.phone },
        { label: 'Experience', value: applyForm.years || 'Not specified' },
        { label: 'Resume', value: `${resumeFile.name} (${formatFileSize(resumeFile.size)})` }
      ]
    });
    showToast('Application sent — our engineering leads will review it shortly.');
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!postForm.company || postForm.company.trim().length < 1) {
      errors.company = 'Company name is required.';
    }
    if (!postForm.title || postForm.title.trim().length < 2) {
      errors.title = 'Please provide a role title.';
    }
    if (!postForm.desc || postForm.desc.trim().length < 10) {
      errors.desc = 'Please write a brief description (min 10 characters).';
    }

    if (Object.keys(errors).length > 0) {
      setPostErrors(errors);
      showToast('Please fill in company, title, and a short description.');
      return;
    }

    const newJob = {
      id: 'j' + Date.now(),
      company: postForm.company.trim(),
      title: postForm.title.trim(),
      dept: postForm.dept,
      type: postForm.type,
      location: postForm.location.trim() || 'Remote',
      exp: postForm.exp.trim() || 'Not specified',
      salary: postForm.salary.trim() || 'Competitive',
      desc: postForm.desc.trim(),
      isNew: true,
      posted: 'Just now'
    };

    const updated = [newJob, ...jobs];
    saveJobs(updated);
    setActiveDept('all');
    setSearchQuery('');
    closeAllModals();
    showToast('Job position published to the board!');

    setTimeout(() => {
      const el = document.getElementById('jobs');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  // Filtered jobs
  const filteredJobs = jobs.filter((j) => {
    const matchDept = activeDept === 'all' || j.dept.toLowerCase() === activeDept.toLowerCase();
    const hay = `${j.title} ${j.company} ${j.dept} ${j.location} ${j.type} ${j.desc}`.toLowerCase();
    const matchSearch = !searchQuery || hay.includes(searchQuery.trim().toLowerCase());
    return matchDept && matchSearch;
  });

  const getDeptCount = (deptName) => {
    if (deptName === 'all') return jobs.length;
    return jobs.filter((j) => j.dept.toLowerCase() === deptName.toLowerCase()).length;
  };

  return (
    <div className="careers-black-root">
      {/* Floating Back to Studio Bar */}
      <div
        style={{
          position: 'fixed',
          top: '18px',
          left: '24px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <button
          type="button"
          onClick={onNavigateHome || (() => (window.location.href = '/'))}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            borderRadius: '9999px',
            background: 'rgba(10, 10, 12, 0.88)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#f4f4f5',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#18181b';
            e.currentTarget.style.borderColor = 'rgba(201, 242, 77, 0.4)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(10, 10, 12, 0.88)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back to Studio</span>
        </button>
      </div>

      {/* STICKY TOP NAVBAR */}
      <header className={`cb-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap cb-nav">
          <a
            className="cb-logo"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="cb-logo-mark" aria-hidden="true">
              R
            </span>
            <span>ROVAWARE</span>
          </a>

          <ul className="cb-nav-links">
            <li>
              <a href="#jobs">Open Roles</a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setActiveDept('Engineering');
                  document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Engineering
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setActiveDept('AI & ML');
                  document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                AI &amp; ML
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setActiveDept('Design');
                  document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Design
              </button>
            </li>
            <li>
              <a href="#how">How We Hire</a>
            </li>
          </ul>

          <span className="cb-spacer" />

          <span className="cb-live">
            <span className="cb-dot" aria-hidden="true" />
            <span>Hiring Now</span>
          </span>

          {isAdmin && (
            <button
              type="button"
              className="cb-btn cb-btn-ghost"
              style={{ marginLeft: '12px', borderColor: 'var(--cb-accent)', color: 'var(--cb-accent)' }}
              onClick={handleOpenPost}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <span>+ Post a Job</span>
            </button>
          )}
        </div>
      </header>

      {/* HERO SECTION */}
      <main id="top">
        <div className="wrap cb-hero">
          <span className="cb-tagline">
            <b>We're hiring</b>
            <span>{jobs.length} open roles · remote-friendly</span>
          </span>

          <h1>
            Do work that <span>actually ships.</span>
          </h1>

          <p>
            Small team, high ownership, no ticket ping-pong. Pick a role below, review the architecture challenge, and apply in under two minutes with your resume.
          </p>

          <div className="cb-hero-row">
            <a
              className="cb-btn cb-btn-primary"
              href="#jobs"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Browse open roles</span>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M2 8h11M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            {isAdmin && (
              <button type="button" className="cb-btn cb-btn-ghost" onClick={handleOpenPost}>
                + Post a role (Admin)
              </button>
            )}
          </div>

          <div className="cb-hero-stats">
            <div>
              <b>100%</b>
              <span>remote-first team</span>
            </div>
            <div>
              <b>48h</b>
              <span>average first review</span>
            </div>
            <div>
              <b>2 weeks</b>
              <span>scoped offer to start</span>
            </div>
            <div>
              <b>Top 1%</b>
              <span>engineering craft</span>
            </div>
          </div>
        </div>

        {/* JOBS SECTION */}
        <section id="jobs" className="cb-section">
          <div className="wrap">
            <div className="cb-sec-head">
              <div>
                <h2>Open roles</h2>
                <p className="sub">
                  Every card below is an active opening. Click apply — our review cycle is rapid and transparent.
                </p>
              </div>
              {isAdmin && (
                <button type="button" className="cb-btn cb-btn-quiet" onClick={handleOpenPost}>
                  + Add a job card (Admin)
                </button>
              )}
            </div>

            <div className="cb-controls">
              <div className="cb-tabs" role="tablist" aria-label="Filter by department">
                <button
                  type="button"
                  className={`cb-tab ${activeDept === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveDept('all')}
                >
                  All <span className="n">{getDeptCount('all')}</span>
                </button>
                <button
                  type="button"
                  className={`cb-tab ${activeDept === 'Engineering' ? 'active' : ''}`}
                  onClick={() => setActiveDept('Engineering')}
                >
                  Engineering <span className="n">{getDeptCount('Engineering')}</span>
                </button>
                <button
                  type="button"
                  className={`cb-tab ${activeDept === 'AI & ML' ? 'active' : ''}`}
                  onClick={() => setActiveDept('AI & ML')}
                >
                  AI &amp; ML <span className="n">{getDeptCount('AI & ML')}</span>
                </button>
                <button
                  type="button"
                  className={`cb-tab ${activeDept === 'Design' ? 'active' : ''}`}
                  onClick={() => setActiveDept('Design')}
                >
                  Design <span className="n">{getDeptCount('Design')}</span>
                </button>
                <button
                  type="button"
                  className={`cb-tab ${activeDept === 'Operations' ? 'active' : ''}`}
                  onClick={() => setActiveDept('Operations')}
                >
                  Operations <span className="n">{getDeptCount('Operations')}</span>
                </button>
              </div>

              <div className="cb-search">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="5.2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M11 11l3.4 3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <input
                  type="search"
                  placeholder="Search role, team, location or tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search roles"
                />
              </div>
            </div>

            <div className="cb-grid">
              {/* Post A Job Dashed Card - Only visible when Admin Mode is enabled */}
              {isAdmin && (
                <button
                  type="button"
                  className="cb-postcard"
                  onClick={handleOpenPost}
                  aria-label="Post a new job"
                >
                  <span className="plus" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                    </svg>
                  </span>
                  <b>Post a job (Admin)</b>
                  <small>Title, department, pay range — publish directly to the board.</small>
                </button>
              )}

              {/* Dynamic Job Cards */}
              {filteredJobs.map((j) => {
                const isRemote = /remote/i.test(j.location);
                const initial = (j.company || 'R').trim().slice(0, 1).toUpperCase();

                return (
                  <article key={j.id} className="cb-jobcard">
                    <div className="cb-card-top">
                      <div className="cb-company">
                        <span className="fav" aria-hidden="true">
                          {initial}
                        </span>
                        <span>{j.company}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                        {j.isNew && <span className="cb-badge new">New</span>}
                        {isRemote && <span className="cb-badge remote">Remote</span>}
                      </div>
                    </div>

                    <h3>{j.title}</h3>
                    <p className="cb-blurb">{j.desc}</p>

                    <div className="cb-facts">
                      <span className="cb-fact">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M8 14.5S13 11 13 7A5 5 0 003 7c0 4 5 7.5 5 7.5z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinejoin="round"
                          />
                          <circle cx="8" cy="6.9" r="1.7" stroke="currentColor" strokeWidth="1.4" />
                        </svg>
                        <span>{j.location}</span>
                      </span>
                      <span className="cb-fact">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="5.6" stroke="currentColor" strokeWidth="1.4" />
                          <path d="M8 5v3.2l2 1.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                        <span>{j.type}</span>
                      </span>
                      <span className="cb-fact">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M8 2l5 2.6L8 7.2 3 4.6 8 2z"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 8l5 2.6L13 8M3 11.4L8 14l5-2.6"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{j.exp}</span>
                      </span>
                      <span className="cb-fact">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                          <rect x="2" y="4.5" width="12" height="9" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
                          <path
                            d="M6 4.5V3.2A1.2 1.2 0 017.2 2h1.6A1.2 1.2 0 0110 3.2v1.3"
                            stroke="currentColor"
                            strokeWidth="1.4"
                          />
                        </svg>
                        <span>{j.dept}</span>
                      </span>
                    </div>

                    <div className="cb-card-foot">
                      <div className="cb-salary">
                        {j.salary}
                        <span>CTC range</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
                        <span className="cb-posted">{j.posted}</span>
                        <button
                          type="button"
                          className="cb-btn cb-btn-primary"
                          onClick={() => handleOpenApply(j)}
                        >
                          Apply now
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {filteredJobs.length === 0 && (
              <div className="cb-empty">
                No roles match that filter. Clear your search or add a new job card using the button above.
              </div>
            )}
          </div>
        </section>

        {/* HOW WE HIRE */}
        <section id="how" className="cb-section" style={{ paddingBottom: '30px' }}>
          <div className="wrap">
            <div className="cb-sec-head">
              <div>
                <h2>How we hire</h2>
                <p className="sub">
                  Four transparent steps, two weeks end-to-end, zero whiteboard riddles or unpaid take-homes.
                </p>
              </div>
            </div>

            <div className="cb-grid">
              <div className="cb-how-card">
                <span className="cb-step-num">Step 01 · 30 Min Call</span>
                <h3>A conversation, not an interrogation</h3>
                <p>
                  Explore your engineering trajectory, past hard technical problems, and discuss exactly what we are building at Rovaware.
                </p>
              </div>

              <div className="cb-how-card">
                <span className="cb-step-num">Step 02 · 3–4 Hours (Paid)</span>
                <h3>Real work sample</h3>
                <p>
                  A focused exercise with a clear architectural brief — or an in-depth walkthrough of production code you have shipped and are proud of.
                </p>
              </div>

              <div className="cb-how-card">
                <span className="cb-step-num">Step 03 · 90 Min Session</span>
                <h3>Meet the engineers</h3>
                <p>
                  Collaborate directly with the peers you'll be shipping with daily. System design, trade-offs, and mutual alignment.
                </p>
              </div>

              <div className="cb-how-card">
                <span className="cb-step-num">Step 04 · 48 Hours</span>
                <h3>Offer &amp; clear equity</h3>
                <p>
                  Transparent compensation, level calibration, and hardware stipend spelled out in writing. You will hear back within two business days.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===================== APPLY MODAL ===================== */}
      {applyJob && typeof document !== 'undefined' && createPortal(
        <div className="cb-modal" role="dialog" aria-modal="true" aria-labelledby="applyModalTitle">
          <div className="cb-scrim" onClick={closeAllModals} />
          <div className="cb-sheet">
            {!applySuccess ? (
              <>
                <div className="cb-sheet-head">
                  <div>
                    <h3 id="applyModalTitle">Apply for Role</h3>
                    <div className="sub">
                      <span>{applyJob.title}</span>
                      <span>·</span>
                      <span>{applyJob.company}</span>
                      <span>·</span>
                      <span>{applyJob.location}</span>
                    </div>
                  </div>
                  <button type="button" className="cb-x" onClick={closeAllModals} aria-label="Close modal">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                <form className="cb-sheet-body" onSubmit={handleApplySubmit} noValidate>
                  {/* Personal details */}
                  <div className="cb-group">
                    <div className="cb-legend">
                      <span>Candidate details</span>
                      <i />
                    </div>
                    <div className="cb-row2">
                      <div className={`cb-field ${applyErrors.name ? 'bad' : ''}`}>
                        <label htmlFor="app-name">
                          <span>Full name</span> <span className="req">*</span>
                        </label>
                        <input
                          id="app-name"
                          type="text"
                          placeholder="e.g. Maya Sharma"
                          value={applyForm.name}
                          onChange={(e) => {
                            setApplyForm({ ...applyForm, name: e.target.value });
                            if (applyErrors.name) setApplyErrors({ ...applyErrors, name: null });
                          }}
                        />
                        {applyErrors.name && <div className="cb-err">{applyErrors.name}</div>}
                      </div>

                      <div className={`cb-field ${applyErrors.email ? 'bad' : ''}`}>
                        <label htmlFor="app-email">
                          <span>Email address</span> <span className="req">*</span>
                        </label>
                        <input
                          id="app-email"
                          type="email"
                          placeholder="maya@example.com"
                          value={applyForm.email}
                          onChange={(e) => {
                            setApplyForm({ ...applyForm, email: e.target.value });
                            if (applyErrors.email) setApplyErrors({ ...applyErrors, email: null });
                          }}
                        />
                        {applyErrors.email && <div className="cb-err">{applyErrors.email}</div>}
                      </div>
                    </div>

                    <div className="cb-row2">
                      <div className={`cb-field ${applyErrors.phone ? 'bad' : ''}`}>
                        <label htmlFor="app-phone">
                          <span>Phone number</span> <span className="req">*</span>
                        </label>
                        <input
                          id="app-phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={applyForm.phone}
                          onChange={(e) => {
                            setApplyForm({ ...applyForm, phone: e.target.value });
                            if (applyErrors.phone) setApplyErrors({ ...applyErrors, phone: null });
                          }}
                        />
                        {applyErrors.phone && <div className="cb-err">{applyErrors.phone}</div>}
                      </div>

                      <div className="cb-field">
                        <label htmlFor="app-city">Current location / city</label>
                        <input
                          id="app-city"
                          type="text"
                          placeholder="Bengaluru, Pune, Remote..."
                          value={applyForm.city}
                          onChange={(e) => setApplyForm({ ...applyForm, city: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="cb-group">
                    <div className="cb-legend">
                      <span>Experience &amp; Availability</span>
                      <i />
                    </div>
                    <div className="cb-row2">
                      <div className="cb-field">
                        <label htmlFor="app-years">Years of experience</label>
                        <select
                          id="app-years"
                          value={applyForm.years}
                          onChange={(e) => setApplyForm({ ...applyForm, years: e.target.value })}
                        >
                          <option value="">Select range...</option>
                          <option value="0–1 years">0–1 years</option>
                          <option value="1–3 years">1–3 years</option>
                          <option value="3–5 years">3–5 years</option>
                          <option value="5–8 years">5–8 years</option>
                          <option value="8+ years">8+ years</option>
                        </select>
                      </div>

                      <div className="cb-field">
                        <label htmlFor="app-notice">Notice period</label>
                        <select
                          id="app-notice"
                          value={applyForm.notice}
                          onChange={(e) => setApplyForm({ ...applyForm, notice: e.target.value })}
                        >
                          <option value="">Select...</option>
                          <option value="Immediate">Immediate</option>
                          <option value="15 days">15 days</option>
                          <option value="30 days">30 days</option>
                          <option value="60 days">60 days</option>
                          <option value="90+ days">90+ days</option>
                        </select>
                      </div>
                    </div>

                    <div className="cb-row2">
                      <div className="cb-field">
                        <label htmlFor="app-company">Current or previous company</label>
                        <input
                          id="app-company"
                          type="text"
                          placeholder="Acme Tech, Freelance, etc."
                          value={applyForm.company}
                          onChange={(e) => setApplyForm({ ...applyForm, company: e.target.value })}
                        />
                      </div>

                      <div className="cb-field">
                        <label htmlFor="app-link">Portfolio / GitHub / LinkedIn</label>
                        <input
                          id="app-link"
                          type="url"
                          placeholder="https://github.com/username"
                          value={applyForm.link}
                          onChange={(e) => setApplyForm({ ...applyForm, link: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="cb-group">
                    <div className="cb-legend">
                      <span>
                        Resume / CV <span style={{ color: 'var(--cb-accent)' }}>*</span>
                      </span>
                      <i />
                    </div>

                    <div className={`cb-field ${applyErrors.resume ? 'bad' : ''}`} style={{ marginBottom: 0 }}>
                      {!resumeFile ? (
                        <label
                          className={`cb-dropzone ${isDragging ? 'drag' : ''}`}
                          onDragOver={(e) => {
                            e.preventDefault();
                            setIsDragging(true);
                          }}
                          onDragLeave={(e) => {
                            e.preventDefault();
                            setIsDragging(false);
                          }}
                          onDrop={(e) => {
                            e.preventDefault();
                            setIsDragging(false);
                            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                              handleFileChange(e.dataTransfer.files[0]);
                            }
                          }}
                        >
                          <div className="ic">
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                              <path
                                d="M10 14V3m0 0L6 7m4-4l4 4"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3 13.5v1.5a2 2 0 002 2h10a2 2 0 002-2v-1.5"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                          <b>Click to upload or drag &amp; drop</b>
                          <small>PDF, DOC, DOCX or RTF · Maximum 5 MB</small>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf,.doc,.docx,.rtf"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                handleFileChange(e.target.files[0]);
                              }
                            }}
                          />
                        </label>
                      ) : (
                        <div className="cb-filechip">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            style={{ color: 'var(--cb-accent)', flex: 'none' }}
                          >
                            <path
                              d="M11.5 2.5H5.5A1.5 1.5 0 004 4v12a1.5 1.5 0 001.5 1.5h9A1.5 1.5 0 0016 16V7l-4.5-4.5z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            />
                            <path d="M11 2.7V7h4.3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                          </svg>
                          <span>
                            <span className="fname">{resumeFile.name}</span>
                            <span className="fsize">{formatFileSize(resumeFile.size)} · attached</span>
                          </span>
                          <button
                            type="button"
                            className="rm"
                            onClick={() => {
                              setResumeFile(null);
                              if (fileInputRef.current) fileInputRef.current.value = '';
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      )}

                      {applyErrors.resume && <div className="cb-err">{applyErrors.resume}</div>}
                    </div>
                  </div>

                  {/* Note & Consent */}
                  <div className="cb-group">
                    <div className="cb-legend">
                      <span>Cover note</span>
                      <i />
                    </div>
                    <div className="cb-field" style={{ marginBottom: '14px' }}>
                      <label htmlFor="app-note">
                        <span>Why Rovaware?</span>
                        <span className="muted" style={{ fontWeight: 400 }}>
                          (optional)
                        </span>
                      </label>
                      <textarea
                        id="app-note"
                        placeholder="A couple sentences about what you want to build or your biggest engineering highlight."
                        value={applyForm.note}
                        onChange={(e) => setApplyForm({ ...applyForm, note: e.target.value })}
                      />
                    </div>

                    <div className={`cb-field ${applyErrors.consent ? 'bad' : ''}`} style={{ marginBottom: 0 }}>
                      <label className="cb-check" htmlFor="app-consent">
                        <input
                          id="app-consent"
                          type="checkbox"
                          checked={applyForm.consent}
                          onChange={(e) => {
                            setApplyForm({ ...applyForm, consent: e.target.checked });
                            if (applyErrors.consent) setApplyErrors({ ...applyErrors, consent: null });
                          }}
                        />
                        <span>
                          I agree to Rovaware storing my candidate details for this application in accordance with our{' '}
                          <a href="/about/company">privacy standard</a>.
                        </span>
                      </label>
                      {applyErrors.consent && <div className="cb-err">{applyErrors.consent}</div>}
                    </div>
                  </div>

                  <div className="cb-sheet-foot">
                    <span className="hint">Direct application · ~2 min</span>
                    <div className="acts">
                      <button type="button" className="cb-btn cb-btn-quiet" onClick={closeAllModals}>
                        Cancel
                      </button>
                      <button type="submit" className="cb-btn cb-btn-primary">
                        <span>Submit application</span>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path
                            d="M2 8h11M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              /* Success Screen */
              <div className="cb-done">
                <div className="ring">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 12.5l5 5L20 6.5"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Application Sent</h3>
                <p>
                  Thanks, <b>{applySuccess.firstName}</b>. We have logged your profile and will reply within 48 hours.
                </p>
                <div className="cb-ref">
                  Reference: <b>{applySuccess.ref}</b>
                </div>

                <dl className="cb-summary">
                  {applySuccess.details.map((item, idx) => (
                    <div key={idx}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>

                <div style={{ marginTop: '24px' }}>
                  <button type="button" className="cb-btn cb-btn-primary" onClick={closeAllModals}>
                    Done &amp; Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}

      {/* ===================== POST JOB MODAL ===================== */}
      {isPostModalOpen && typeof document !== 'undefined' && createPortal(
        <div className="cb-modal" role="dialog" aria-modal="true" aria-labelledby="postModalTitle">
          <div className="cb-scrim" onClick={closeAllModals} />
          <div className="cb-sheet" style={{ maxWidth: '600px' }}>
            <div className="cb-sheet-head">
              <div>
                <h3 id="postModalTitle">Post an Open Role</h3>
                <div className="sub">Adds an active position directly to the board.</div>
              </div>
              <button type="button" className="cb-x" onClick={closeAllModals} aria-label="Close modal">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <form className="cb-sheet-body" onSubmit={handlePostSubmit} noValidate>
              <div className="cb-group">
                <div className="cb-legend">
                  <span>Organization</span>
                  <i />
                </div>
                <div className="cb-row2">
                  <div className={`cb-field ${postErrors.company ? 'bad' : ''}`}>
                    <label htmlFor="post-company">
                      <span>Company Name</span> <span className="req">*</span>
                    </label>
                    <input
                      id="post-company"
                      type="text"
                      placeholder="ROVAWARE"
                      value={postForm.company}
                      onChange={(e) => {
                        setPostForm({ ...postForm, company: e.target.value });
                        if (postErrors.company) setPostErrors({ ...postErrors, company: null });
                      }}
                    />
                    {postErrors.company && <div className="cb-err">{postErrors.company}</div>}
                  </div>

                  <div className="cb-field">
                    <label htmlFor="post-recruiter">Contact Email</label>
                    <input
                      id="post-recruiter"
                      type="email"
                      placeholder="hiring@rovaware.com"
                      value={postForm.recruiter}
                      onChange={(e) => setPostForm({ ...postForm, recruiter: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="cb-group">
                <div className="cb-legend">
                  <span>Role Specifications</span>
                  <i />
                </div>

                <div className={`cb-field ${postErrors.title ? 'bad' : ''}`}>
                  <label htmlFor="post-title">
                    <span>Job Title</span> <span className="req">*</span>
                  </label>
                  <input
                    id="post-title"
                    type="text"
                    placeholder="e.g. Senior Distributed Systems Engineer"
                    value={postForm.title}
                    onChange={(e) => {
                      setPostForm({ ...postForm, title: e.target.value });
                      if (postErrors.title) setPostErrors({ ...postErrors, title: null });
                    }}
                  />
                  {postErrors.title && <div className="cb-err">{postErrors.title}</div>}
                </div>

                <div className="cb-row2">
                  <div className="cb-field">
                    <label htmlFor="post-dept">Department</label>
                    <select
                      id="post-dept"
                      value={postForm.dept}
                      onChange={(e) => setPostForm({ ...postForm, dept: e.target.value })}
                    >
                      <option value="Engineering">Engineering</option>
                      <option value="AI & ML">AI &amp; ML</option>
                      <option value="Design">Design</option>
                      <option value="Operations">Operations</option>
                    </select>
                  </div>

                  <div className="cb-field">
                    <label htmlFor="post-type">Work Arrangement</label>
                    <select
                      id="post-type"
                      value={postForm.type}
                      onChange={(e) => setPostForm({ ...postForm, type: e.target.value })}
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
                    <label htmlFor="post-location">Location</label>
                    <input
                      id="post-location"
                      type="text"
                      placeholder="Remote (India), Bengaluru, etc."
                      value={postForm.location}
                      onChange={(e) => setPostForm({ ...postForm, location: e.target.value })}
                    />
                  </div>

                  <div className="cb-field">
                    <label htmlFor="post-exp">Experience</label>
                    <input
                      id="post-exp"
                      type="text"
                      placeholder="3–6 years"
                      value={postForm.exp}
                      onChange={(e) => setPostForm({ ...postForm, exp: e.target.value })}
                    />
                  </div>
                </div>

                <div className="cb-field">
                  <label htmlFor="post-salary">Compensation Range (CTC)</label>
                  <input
                    id="post-salary"
                    type="text"
                    placeholder="₹30–45 LPA"
                    value={postForm.salary}
                    onChange={(e) => setPostForm({ ...postForm, salary: e.target.value })}
                  />
                </div>

                <div className={`cb-field ${postErrors.desc ? 'bad' : ''}`} style={{ marginBottom: 0 }}>
                  <label htmlFor="post-desc">
                    <span>Role Description</span> <span className="req">*</span>
                  </label>
                  <textarea
                    id="post-desc"
                    placeholder="Key ownership, tech stack, and what makes this position pivotal."
                    value={postForm.desc}
                    onChange={(e) => {
                      setPostForm({ ...postForm, desc: e.target.value });
                      if (postErrors.desc) setPostErrors({ ...postErrors, desc: null });
                    }}
                  />
                  {postErrors.desc && <div className="cb-err">{postErrors.desc}</div>}
                </div>
              </div>

              <div className="cb-sheet-foot">
                <span className="hint">Instant live update</span>
                <div className="acts">
                  <button type="button" className="cb-btn cb-btn-quiet" onClick={closeAllModals}>
                    Cancel
                  </button>
                  <button type="submit" className="cb-btn cb-btn-primary">
                    Publish Position
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      {/* TOAST POPUP */}
      <div className={`cb-toast ${toastMessage ? 'show' : ''}`} role="status" aria-live="polite">
        {toastMessage}
      </div>

      {/* ADMIN CONTROLS FLOATING BADGE (Only when Admin is active) */}
      {isAdmin && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            background: 'rgba(12, 12, 16, 0.95)',
            backdropFilter: 'blur(12px)',
            border: '1px solid var(--cb-accent)',
            borderRadius: '14px',
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 16px 36px rgba(0,0,0,0.8)',
            fontSize: '12px',
            color: '#fff'
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--cb-accent)',
              boxShadow: '0 0 8px var(--cb-accent)'
            }}
          />
          <span><b>Admin Mode Active</b></span>
          <button
            type="button"
            onClick={handleOpenPost}
            style={{
              background: 'var(--cb-accent)',
              color: '#000',
              border: 'none',
              borderRadius: '8px',
              padding: '5px 12px',
              fontWeight: 700,
              fontSize: '11px',
              cursor: 'pointer'
            }}
          >
            + Post Role
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = '/admin/jobs')}
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              border: '1px solid var(--cb-line-hi)',
              borderRadius: '8px',
              padding: '5px 10px',
              fontSize: '11px',
              cursor: 'pointer'
            }}
          >
            Portal
          </button>
          <button
            type="button"
            onClick={() => {
              setIsAdmin(false);
              showToast('Admin Mode Deactivated');
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--cb-muted)',
              fontSize: '11px',
              cursor: 'pointer',
              padding: '4px'
            }}
            title="Exit Admin Mode"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
