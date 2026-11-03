import React, { useEffect, useState } from 'react';
import './web-development.css';

const capabilities = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description:
      'Web applications, platforms and APIs designed to scale with your business. From architecture to interface, one senior team engineers the whole stack.',
    tags: 'React · Node.js · Python · APIs · SaaS Platforms',
  },
  {
    number: '02',
    title: 'AI Solutions & Automation',
    description:
      'Practical AI, not demos. LLM integration, retrieval systems, agents and document intelligence that automate real workflows and compound over time.',
    tags: 'LLM Integration · RAG · Agents · Data Pipelines',
  },
  {
    number: '03',
    title: 'Cloud & DevOps Engineering',
    description:
      'Infrastructure that stays invisible because it simply works. CI/CD, observability and deployments built for uptime, speed and zero-drama launches.',
    tags: 'AWS · CI/CD · Kubernetes · Observability',
  },
  {
    number: '04',
    title: 'Product & Experience Design',
    description:
      'Interfaces that make complex systems feel effortless. Design systems, prototyping and UI engineering with engineering-grade attention to detail.',
    tags: 'UI/UX · Design Systems · Prototyping',
  },
];

const process = [
  { number: '01', title: 'Discover', text: 'We map the problem, the users and the business case before a single line is written.' },
  { number: '02', title: 'Design', text: 'Architecture, flows and interfaces are shaped together — so nothing is lost in translation.' },
  { number: '03', title: 'Develop', text: 'Senior engineers build in weekly, reviewable increments. You always see the work, not just the result.' },
  { number: '04', title: 'Evolve', text: 'Launch is the start. We measure, refine and extend your product as ambitions grow.' },
];

const work = [
  {
    title: 'Cortex',
    category: 'AI Document Intelligence',
    tags: 'AI · LLM · NLP',
    description: 'An AI platform that reads, classifies and routes thousands of documents a day — turning inbox chaos into structured data.',
    image: '/images/work-cortex.jpg',
    tall: false,
  },
  {
    title: 'Ledgerline',
    category: 'Real-Time Logistics Analytics',
    tags: 'FULL-STACK · DATA-VIZ',
    description: 'A control-tower dashboard streaming live operational data into one clear, decision-ready view.',
    image: '/images/work-ledger.jpg',
    tall: true,
  },
  {
    title: 'Atlas',
    category: 'Headless Commerce Platform',
    tags: 'FULL-STACK · CLOUD',
    description: 'A composable storefront and checkout engineered for sub-second loads and effortless global scale.',
    image: '/images/work-atlas.jpg',
    tall: false,
  },
];

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 16 16 4M5 4h11v11" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  ) : (
    <svg viewBox="0 0 22 16" fill="none" aria-hidden="true">
      <path d="M1 8h19m-6.5-6.5L20 8l-6.5 6.5" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

export default function WebDevelopmentView({
  onNavigateHome,
  onNavigateAllServices,
  onNavigateService,
  onNavigateBookProject,
  onNavigateContact,
  hideNav = true,
  hideFooter = true
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCapability, setActiveCapability] = useState(0);
  const [formMessage, setFormMessage] = useState('');

  useEffect(() => {
    document.title = 'Web Development & Architecture — ROVAWARE Engineering Studio';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      document.title = 'ROVAWARE — Build • Automate • Scale';
    };
  }, []);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 40);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    // Ensure all content sections are immediately 100% visible
    document.querySelectorAll('.web-dev-landing .reveal').forEach((element) => {
      element.classList.add('is-visible');
    });
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const project = String(data.get('project') || '').trim();
    const budget = String(data.get('budget') || '').trim();
    const message = String(data.get('message') || '').trim();
    const subject = encodeURIComponent(`New Web Dev enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${project}\nBudget: ${budget}\n\nProject Overview:\n${message}`,
    );
    window.location.href = `mailto:hello@rovaware.com?subject=${subject}&body=${body}`;
    setFormMessage('Opening your email client with your project details...');
  };

  return (
    <div className="web-dev-landing">
      <div className="site-shell" id="top">
        {!hideNav && (
          <header className={`site-header ${scrolled ? 'site-header--solid' : ''}`}>
            <a
              href="/"
              className="header-brand"
              aria-label="RovaWare home"
              onClick={(e) => {
                if (onNavigateHome) {
                  e.preventDefault();
                  onNavigateHome();
                }
              }}
            >
              ROVAWARE<span className="brand-period">.</span>
            </a>
          </header>
        )}

        <main>
          <section className="hero page-gutter">
            <div className="hero-image" aria-hidden="true" />
            <div className="hero-shade" aria-hidden="true" />
            <div className="hero-content">
              {/* Refined In-Hero Breadcrumb Strip */}
              <div className="hero-header-bar hero-enter">
                <nav className="hero-breadcrumbs" aria-label="Breadcrumb">
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateAllServices ? onNavigateAllServices() : (window.location.href = '/services');
                    }}
                  >
                    <span>Services</span>
                  </a>
                  <span className="crumb-slash">/</span>
                  <span className="crumb-active">Web Development &amp; Architecture</span>
                </nav>
              </div>

              <p className="hero-overline hero-enter">
                <span className="overline-rule" /> 01 / ENGINEERING &amp; ARCHITECTURE
              </p>
              <h1 className="hero-title hero-enter">ROVAWARE</h1>
              <div className="hero-bottom hero-enter">
                <div>
                  <p className="hero-statement">We engineer platforms, applications &amp; AI systems designed to <em>endure.</em></p>
                  <p className="hero-description">Full-stack web engineering, custom AI solutions and cloud infrastructure for businesses ready to lead, not just keep up.</p>
                </div>
                <a href="#intro" className="round-link hero-round-link hero-enter" aria-label="Scroll to introduction">
                  <ArrowIcon />
                </a>
              </div>
              <div className="hero-scroll" aria-hidden="true"><i /> SCROLL</div>
              <div className="hero-index" aria-hidden="true">01 // 05</div>
            </div>
          </section>

          <section className="intro page-gutter" id="intro">
            <div className="section-label reveal"><span className="label-line" /> 01 / PHILOSOPHY</div>
            <div className="intro-grid">
              <h2 className="editorial-heading reveal">Built to scale.<br />Engineered to <em>lead.</em></h2>
              <div className="intro-copy reveal">
                <p>Great software is not built by throwing bodies at a problem. It is built by small, senior teams who obsess over architecture, performance and the craft of every interaction.</p>
                <div className="intro-metrics reveal">
                  <div className="metric">
                    <span className="metric-index">01 /</span>
                    <strong>Senior craft</strong>
                    <p>Every project is architected and built by experienced principal engineers — no junior handoffs.</p>
                  </div>
                  <div className="metric">
                    <span className="metric-index">02 /</span>
                    <strong>Zero compromise</strong>
                    <p>Sub-second performance, audited security and resilient architectures ready for heavy traffic.</p>
                  </div>
                  <div className="metric">
                    <span className="metric-index">03 /</span>
                    <strong>Production ready</strong>
                    <p>Not prototypes. Real, scalable systems engineered for traffic, operational data and business growth.</p>
                  </div>
                </div>
                <p className="intro-footnote reveal">Based in Bhopal &amp; UAE, working with founders and technical leaders across India, the Middle East and worldwide.</p>
              </div>
            </div>
          </section>

          <section className="expertise page-gutter" id="capabilities">
            <div className="expertise-heading-row reveal">
              <div>
                <div className="section-label"><span className="label-line" /> 02 / CAPABILITIES</div>
                <h2 className="editorial-heading">One studio.<br />The full <em>stack.</em></h2>
              </div>
              <p>From initial systems architecture to deployed production platforms, we take end-to-end ownership so you never coordinate between fragmented agencies.</p>
            </div>

            <div className="capabilities-list">
              {capabilities.map((item) => (
                <div className="capability reveal capability--active" key={item.number}>
                  <div className="capability-trigger">
                    <span className="capability-number">{item.number} /</span>
                    <span className="capability-title">{item.title}</span>
                    <span className="capability-icon" aria-hidden="true">—</span>
                  </div>
                  <div className="capability-panel" style={{ maxHeight: 'none', display: 'block' }}>
                    <div className="capability-panel-inner">
                      <p>{item.description}</p>
                      <span className="capability-tags">{item.tags}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="craft" id="craft">
            <div className="craft-image" role="img" aria-label="Engineering craft detail" />
            <div className="craft-shade" aria-hidden="true" />
            <div className="craft-content page-gutter">
              <div className="section-label reveal"><span className="label-line" /> 03 / CRAFT &amp; PRECISION</div>
              <p className="craft-quote reveal">
                &ldquo;Precision is not an accident. It is our baseline. Every endpoint, every state transition, every sub-second render is engineered with intention.&rdquo;
              </p>
              <div className="craft-bottom reveal">
                <div className="craft-stats">
                  <div className="craft-stat">
                    <span>99.98%</span>
                    <p>Average uptime across deployed platforms</p>
                  </div>
                  <div className="craft-stat">
                    <span>&lt; 120ms</span>
                    <p>P95 API response times in production</p>
                  </div>
                  <div className="craft-stat">
                    <span>100%</span>
                    <p>Code reviewed by senior architects</p>
                  </div>
                </div>
                <p>We build software the way architects build monuments: to stand through trends, traffic spikes and the evolving demands of your business.</p>
              </div>
            </div>
          </section>

          <section className="process page-gutter" id="process">
            <div className="section-label reveal"><span className="label-line" /> 03 / HOW WE WORK</div>
            <div className="process-heading reveal">
              <h2 className="editorial-heading">From intent to<br /><em>execution.</em></h2>
              <p>A proven delivery cadence built on transparent communication, weekly reviewable builds, and caring about every answer.</p>
            </div>
            <div className="process-grid">
              {process.map((step) => (
                <div className="process-step reveal" key={step.number}>
                  <span className="process-number">{step.number} /</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="work page-gutter" id="work">
            <div className="section-label reveal"><span className="label-line" /> 04 / SELECTED WORK</div>
            <div className="work-heading reveal">
              <h2 className="editorial-heading">Work that<br /><em>ships.</em></h2>
              <p>A few of the platforms we&apos;ve engineered recently. Real systems, running in production, used every day.</p>
            </div>
            <div className="work-grid">
              {work.map((project) => (
                <article className={`work-card reveal ${project.tall ? 'work-card--tall' : ''}`} key={project.title}>
                  <div className="work-media">
                    <div
                      className="work-image"
                      style={{ backgroundImage: `url(${project.image})` }}
                      role="img"
                      aria-label={`${project.category} — ${project.title}`}
                    />
                    <span className="work-arrow"><ArrowIcon diagonal /></span>
                  </div>
                  <div className="work-info">
                    <div>
                      <h3>{project.title}<em>.</em></h3>
                      <p className="work-category">{project.category}</p>
                      <p className="work-description">{project.description}</p>
                    </div>
                    <span className="work-tags">{project.tags}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="contact page-gutter" id="contact">
            <div className="section-label reveal"><span className="label-line" /> 05 / BOOK A PROJECT</div>
            <div className="contact-grid">
              <div className="contact-intro reveal">
                <h2 className="editorial-heading">Let&apos;s build<br />what comes <em>next.</em></h2>
                <p>Tell us where you want to go. An engineer — not a salesperson — will reply within one working day.</p>
                <a className="contact-email" href="mailto:hello@rovaware.com">hello@rovaware.com <ArrowIcon diagonal /></a>
                <p className="contact-domain">
                  <a href="https://rovaware.com" target="_blank" rel="noopener noreferrer">rovaware.com</a>
                </p>

                {onNavigateBookProject && (
                  <div style={{ marginTop: '24px' }}>
                    <button
                      type="button"
                      onClick={onNavigateBookProject}
                      className="subnav-contact-pill"
                      style={{ display: 'inline-flex', padding: '12px 22px', fontSize: '13px' }}
                    >
                      <span>Open Full Project Intake Form</span>
                      <ArrowIcon diagonal />
                    </button>
                  </div>
                )}
              </div>
              <form className="contact-form reveal" onSubmit={handleSubmit}>
                <p className="form-heading">Tell us about your project</p>
                <div className="form-two-col">
                  <label>Your name <input name="name" type="text" placeholder="Name" autoComplete="name" required /></label>
                  <label>Email address <input name="email" type="email" placeholder="Email" autoComplete="email" required /></label>
                </div>
                <div className="form-two-col">
                  <label>What do you need?
                    <select name="project" defaultValue="Full-stack development" required>
                      <option value="" disabled>Select a service</option>
                      <option>Full-stack development</option>
                      <option>AI solution</option>
                      <option>Cloud &amp; DevOps</option>
                      <option>Product design</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                  <label>Budget range
                    <select name="budget" defaultValue="$10k – $30k" required>
                      <option value="" disabled>Select a range</option>
                      <option>Under $10k</option>
                      <option>$10k – $30k</option>
                      <option>$30k – $80k</option>
                      <option>$80k+</option>
                    </select>
                  </label>
                </div>
                <label>A little about your idea <textarea name="message" rows="3" placeholder="What are you building, and why now?" required /></label>
                <button className="submit-button" type="submit">Book a project <ArrowIcon diagonal /></button>
                {formMessage && <p className="form-message" role="status">{formMessage}</p>}
              </form>
            </div>
          </section>
        </main>

        {!hideFooter && (
          <footer className="footer page-gutter">
            <a href="#top" className="footer-brand" aria-label="RovaWare — back to top">ROVAWARE<span>.</span></a>
            <p>Digital engineering studio — <em>full-stack &amp; AI.</em></p>
            <div><span>© {new Date().getFullYear()} RovaWare</span><a href="#top">Back to top ↑</a></div>
          </footer>
        )}
      </div>
    </div>
  );
}

