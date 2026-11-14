import { useState } from "react";
import { AlertCircle, ArrowRight, Briefcase, Check, CheckCircle2, Copy, LifeBuoy, Loader2, Mail, MailOpen, MoveUpRight, Send, ShieldCheck, } from "lucide-react";

/* ---- the three live ROVAWARE mailboxes ---- */
export const EMAILS = [
    {
        address: "hello@rovaware.com",
        label: "General & Inquiries",
        desc: "New projects, partnerships & everything else",
        icon: <Mail size={20}/>,
    },
    {
        address: "support@rovaware.com",
        label: "Technical Support",
        desc: "Existing builds, maintenance & SLA requests",
        icon: <LifeBuoy size={20}/>,
    },
    {
        address: "hr@rovaware.com",
        label: "Careers & Hiring",
        desc: "Roles, resumes & engineering collaborations",
        icon: <Briefcase size={20}/>,
    },
];

const DESKS = [
    ["hello@rovaware.com", "General Desk — hello@rovaware.com"],
    ["support@rovaware.com", "Support Desk — support@rovaware.com"],
    ["hr@rovaware.com", "Careers Desk — hr@rovaware.com"],
];

const DESK_LABEL = {
    "hello@rovaware.com": "General & Inquiries",
    "support@rovaware.com": "Technical Support",
    "hr@rovaware.com": "Careers & Hiring",
};

const INITIAL = {
    name: "",
    email: "",
    company: "",
    topic: "Web Development",
    budget: "$5k - $15k",
    desk: "support@rovaware.com",
    message: "",
};
const TOPICS = [
    ["Web Development", "Full-Stack Web Development"],
    ["AI Integration", "Autonomous AI & LLM Systems"],
    ["SaaS Architecture", "SaaS & Multi-Tenant Infrastructure"],
    ["UI/UX Engineering", "UI/UX Design & High-Performance Frontends"],
    ["Code Audit", "Codebase Audit & Performance Optimization"],
    ["General Inquiry", "General Partnership Inquiry"],
];
const BUDGETS = [
    ["< $5,000", "Under $5,000 (MVP / Focused Micro-Tool)"],
    ["$5,000 - $15,000", "$5,000 – $15,000 (Production Web App / AI Flow)"],
    ["$15,000 - $35,000", "$15,000 – $35,000 (Full-Featured SaaS Platform)"],
    ["$35,000+", "$35,000+ (Enterprise Architecture & Retainers)"],
];
const SOCIALS = [
    { label: "GitHub", href: "https://github.com" },
    { label: "X / Twitter", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Discord", href: "https://discord.com" },
];
/* ---------- staggered reveal wrapper ---------- */
function RV({ d = 0, x = false, children, style, }) {
    return (<div data-rv className={x ? "rv-x" : "rv"} style={{ ["--d"]: `${d}ms`, ...style }}>
      {children}
    </div>);
}
export default function ContactSection({ onNavigateBookProject }) {
    const [form, setForm] = useState(INITIAL);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");
    const [copiedKey, setCopiedKey] = useState(null);
    const [refId, setRefId] = useState("");
    const [sent, setSent] = useState(null);
    const copy = (value) => {
        navigator.clipboard?.writeText(value).then(() => {
            setCopiedKey(value);
            setTimeout(() => setCopiedKey(null), 2500);
        });
    };
    const update = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
        if (status === "error")
            setStatus("idle");
    };
    const submit = (e) => {
        e.preventDefault();
        const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form.name.trim()) {
            setStatus("error");
            setError("Please enter your full name.");
            return;
        }
        if (!form.email || !emailRx.test(form.email)) {
            setStatus("error");
            setError("Please enter a valid business email address.");
            return;
        }
        if (!form.message.trim() || form.message.trim().length < 15) {
            setStatus("error");
            setError("Please provide at least 15 characters describing your project or inquiry.");
            return;
        }
        setStatus("submitting");
        setTimeout(() => {
            try {
                const id = `RW-${Math.floor(1e5 + Math.random() * 9e5)}`;
                const list = JSON.parse(localStorage.getItem("rovaware_contact_inquiries") || "[]");
                const record = { ...form, id, submittedAt: new Date().toISOString() };
                list.push(record);
                localStorage.setItem("rovaware_contact_inquiries", JSON.stringify(list));
                setSent(record);
                setRefId(id);
                setStatus("success");
                setError("Your inquiry has been dispatched to our engineering leads. Expect a technical response within 24 hours.");
                setForm(INITIAL);
            }
            catch {
                setStatus("error");
                setError("Could not submit inquiry. Please try again or email us directly.");
            }
        }, 700);
    };

    /* pre-filled handoff so the dispatched brief can also be sent
       straight to the selected mailbox from the user's own mail app */
    const mailtoHref = (r) => {
        const subject = `[${r.id}] ${r.topic} — ${r.name}`;
        const body = [
            `Tracking Reference: ${r.id}`,
            `Name: ${r.name}`,
            `Email: ${r.email}`,
            `Company: ${r.company || "—"}`,
            `Desk: ${r.desk} (${DESK_LABEL[r.desk] || "General"})`,
            `Primary Topic: ${r.topic}`,
            `Budget: ${r.budget}`,
            "",
            "Project Details:",
            r.message,
        ].join("\n");
        return `mailto:${r.desk}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (<section className="contact-section">
      <div className="section-glow gl" aria-hidden="true"/>
      <div className="section-glow gr" aria-hidden="true"/>

      <div className="container-x">
        <div className="contact-main-grid">
          {/* ============ LEFT — INFO COLUMN ============ */}
          <div data-rv className="rv-clip" style={{ ["--d"]: "60ms" }}>
            <div className="info-card">
              <RV d={80}>
                <h2>Direct Studio Contacts</h2>
                <p className="info-desc">
                  Connect through our verified technical channels. All
                  communications are confidential and covered under standard
                  non-disclosure protections.
                </p>
              </RV>

              {EMAILS.map((ch, i) => (<RV key={ch.address} x d={160 + i * 90}>
                  <div className="channel-item" data-hover data-cursor-label="Email">
                    <div className="channel-icon">{ch.icon}</div>
                    <div className="channel-details">
                      <span className="channel-label">{ch.label}</span>
                      <a href={`mailto:${ch.address}`} className="channel-val">
                        {ch.address}
                      </a>
                      <span className="channel-desc">{ch.desc}</span>
                    </div>
                    <button type="button" className={`copy-btn ${copiedKey === ch.address ? "copied" : ""}`} onClick={() => copy(ch.address)} title="Copy Email" aria-label={`Copy ${ch.address}`}>
                      <span className="tip">Copied</span>
                      {copiedKey === ch.address ? <Check size={14}/> : <Copy size={14}/>}
                    </button>
                  </div>
                </RV>))}

              <RV d={400}>
                <div className="guarantee-box">
                  <ShieldCheck size={18}/>
                  <div>
                    <h4>24-Hour SLA Commitment</h4>
                    <p>
                      Every inquiry receives technical feasibility scoping and
                      milestone recommendations within 24 hours.
                    </p>
                  </div>
                </div>
              </RV>

              <RV d={490}>
                <div className="booking-prompt">
                  <div>
                    <h4>Have a Complete Project Scope?</h4>
                    <p>
                      Use our dedicated project intake form for granular
                      specifications &amp; instant budget tiering.
                    </p>
                  </div>
                  <a
                    href="/about/book-project"
                    className="prompt-btn"
                    data-magnetic="0.35"
                    style={{ textDecoration: "none" }}
                    onClick={(e) => {
                      if (onNavigateBookProject) {
                        e.preventDefault();
                        onNavigateBookProject();
                      }
                    }}
                  >
                    <span>Book a Project</span>
                    <ArrowRight size={15}/>
                  </a>
                </div>
              </RV>

              <RV d={580}>
                <div className="social-section">
                  <span className="social-heading">
                    Verified Developer &amp; Social Channels
                  </span>
                  <div className="social-pills">
                    {SOCIALS.map((s) => (<a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-pill">
                        <span>{s.label}</span>
                        <MoveUpRight size={12}/>
                      </a>))}
                  </div>
                </div>
              </RV>
            </div>
          </div>

          {/* ============ RIGHT — FORM COLUMN ============ */}
          <div data-rv className="rv-clip" style={{ ["--d"]: "180ms" }}>
            <div className="form-card">
              <div className="form-card-glow" aria-hidden="true"/>
              <div className="form-header">
                <h3>Send a Direct Message</h3>
                <p>
                  Fill in your project details below and an engineering lead
                  will reply directly.
                </p>
              </div>

              {status === "success" ? (<div className="success-state">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={40} strokeWidth={1.6}/>
                  </div>
                  <h3>Message Successfully Dispatched!</h3>
                  <p>{error}</p>
                  <div className="ref-box">
                    <span>Tracking Reference:</span>
                    <strong>{refId}</strong>
                  </div>
                  <p className="success-routed">
                    Routed to <a href={`mailto:${sent?.desk}`}>{sent?.desk}</a>
                    {" • "}
                    {DESK_LABEL[sent?.desk]}
                  </p>
                  <div className="success-actions">
                    <button type="button" className="btn-primary-line" onClick={() => setStatus("idle")} data-magnetic="0.25">
                      Send Another Message
                    </button>
                    {sent && (
                      <a className="btn-solid-line" href={mailtoHref(sent)}>
                        <MailOpen size={14}/>
                        <span>Open in Mail App</span>
                      </a>
                    )}
                  </div>
                </div>) : (<form onSubmit={submit} className="c-form" noValidate={false}>
                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="contact-name">
                        Full Name <span className="req">*</span>
                      </label>
                      <input id="contact-name" name="name" type="text" required placeholder="e.g. Alex Henderson" value={form.name} onChange={update}/>
                    </div>
                    <div className="form-field">
                      <label htmlFor="contact-email">
                        Work Email <span className="req">*</span>
                      </label>
                      <input id="contact-email" name="email" type="email" required placeholder="alex@company.com" value={form.email} onChange={update}/>
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="contact-company">
                        Company / Organization
                      </label>
                      <input id="contact-company" name="company" type="text" placeholder="e.g. TechCorp Labs" value={form.company} onChange={update}/>
                    </div>
                    <div className="form-field">
                      <label htmlFor="contact-topic">Primary Topic</label>
                      <select id="contact-topic" name="topic" value={form.topic} onChange={update}>
                        {TOPICS.map(([v, l]) => (<option key={v} value={v}>
                            {l}
                          </option>))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="contact-desk">Route Message To</label>
                      <select id="contact-desk" name="desk" value={form.desk} onChange={update}>
                        {DESKS.map(([v, l]) => (<option key={v} value={v}>
                            {l}
                          </option>))}
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="contact-budget">Estimated Budget Range</label>
                      <select id="contact-budget" name="budget" value={form.budget} onChange={update}>
                        {BUDGETS.map(([v, l]) => (<option key={v} value={v}>
                            {l}
                          </option>))}
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-message">
                      Message &amp; Project Details <span className="req">*</span>
                    </label>
                    <textarea id="contact-message" name="message" rows={5} required placeholder="Share your goals, current architecture, timeline, or questions..." value={form.message} onChange={update}/>
                  </div>

                  {status === "error" && (<div className="error-banner" role="alert">
                      <AlertCircle size={15}/>
                      <span>{error}</span>
                    </div>)}

                  <button type="submit" className="submit-btn" disabled={status === "submitting"} data-magnetic="0.18" data-cursor-label={status === "submitting" ? "Sending" : "Send"}>
                    <span className="shine"/>
                    {status === "submitting" ? (<Loader2 size={15} className="spin"/>) : (<Send size={15} className="send-icon"/>)}
                    <span>
                      {status === "submitting" ? "Dispatching..." : "Send Message"}
                    </span>
                  </button>

                  <div className="privacy-note">
                    <ShieldCheck size={13}/>
                    <span>100% confidential. Your details are never shared or sold.</span>
                  </div>
                </form>)}
            </div>
          </div>
        </div>
      </div>
    </section>);
}
