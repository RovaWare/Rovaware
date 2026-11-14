import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Check, Clipboard, X } from 'lucide-react';
import { budgetOptions, services, timelineOptions } from '../data';

const initialForm = {
  name: '',
  email: '',
  company: '',
  service: 'UI/UX Design',
  budget: '',
  timeline: '',
  message: '',
};

export default function ProjectModal({ open, onClose, defaultService = 'UI/UX Design' }) {
  const [form, setForm] = useState({ ...initialForm, service: defaultService });
  const [errors, setErrors] = useState({});
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);
  const nameRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => nameRef.current?.focus(), 120);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = modalRef.current?.querySelectorAll(
        'button:not([disabled]), input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  const brief = useMemo(
    () =>
      [
        'Hello Rovaware,',
        '',
        `I’m ${form.name || '[name]'}${form.company ? ` from ${form.company}` : ''}.`,
        `Service: ${form.service}`,
        `Budget: ${form.budget || 'To be discussed'}`,
        `Timeline: ${form.timeline || 'To be discussed'}`,
        '',
        'Project details:',
        form.message || '[project details]',
        '',
        `Reply to: ${form.email || '[email]'}`,
      ].join('\n'),
    [form],
  );

  if (!open) return null;

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setPrepared(false);
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please tell us your name.';
    if (!form.email.trim()) next.email = 'Please add your email address.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address.';
    if (!form.message.trim()) next.message = 'A few project details will help us prepare.';
    else if (form.message.trim().length < 20) next.message = 'Please add a little more detail (at least 20 characters).';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    setPrepared(true);
    const subject = encodeURIComponent(`Project inquiry — ${form.service} — ${form.name}`);
    window.location.href = `mailto:support@rovaware.com?subject=${subject}&body=${encodeURIComponent(brief)}`;
  };

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = brief;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
      setCopied(true);
    }
  };

  return (
    <div className="modal-overlay" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div ref={modalRef} className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close project form">
          <X size={20} />
        </button>
        <div className="modal-aside">
          <div>
            <span className="eyebrow">Start a project</span>
            <h2 id="project-modal-title">Let’s make your idea clear.</h2>
            <p>
              Tell us what you’re building. Your answers become a ready-to-send email brief for our team.
            </p>
          </div>
          <ul className="modal-promises">
            <li><Check size={15} /> 24-hour response target</li>
            <li><Check size={15} /> NDA-friendly conversations</li>
            <li><Check size={15} /> Scope shaped around your needs</li>
          </ul>
          <span className="modal-aside-note">Prefer email? support@rovaware.com</span>
        </div>

        <form className="project-form" onSubmit={submit} noValidate>
          <div className="form-row">
            <label>
              <span>Your name *</span>
              <input
                ref={nameRef}
                value={form.name}
                onChange={(event) => update('name', event.target.value)}
                placeholder="Jane Smith"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <small className="field-error">{errors.name}</small>}
            </label>
            <label>
              <span>Work email *</span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => update('email', event.target.value)}
                placeholder="jane@company.com"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <small className="field-error">{errors.email}</small>}
            </label>
          </div>
          <div className="form-row">
            <label>
              <span>Company <em>Optional</em></span>
              <input
                value={form.company}
                onChange={(event) => update('company', event.target.value)}
                placeholder="Your company"
              />
            </label>
            <label>
              <span>Service</span>
              <select value={form.service} onChange={(event) => update('service', event.target.value)}>
                {services.map((service) => <option key={service.slug}>{service.label}</option>)}
                <option>AI & Automation</option>
                <option>Something else</option>
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>
              <span>Estimated budget</span>
              <select value={form.budget} onChange={(event) => update('budget', event.target.value)}>
                <option value="">Select a range</option>
                {budgetOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>
              <span>Ideal timeline</span>
              <select value={form.timeline} onChange={(event) => update('timeline', event.target.value)}>
                <option value="">Select a timeline</option>
                {timelineOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
          </div>
          <label>
            <span>What are you looking to design? *</span>
            <textarea
              rows={4}
              value={form.message}
              onChange={(event) => update('message', event.target.value)}
              placeholder="A short overview of your product, audience, and the challenge you want to solve…"
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && <small className="field-error">{errors.message}</small>}
          </label>

          {prepared && (
            <div className="brief-ready" role="status">
              <Check size={17} />
              <span>Your email draft is ready. If it did not open, copy the brief and email us directly.</span>
            </div>
          )}
          <div className="form-actions">
            <button className="button button-primary" type="submit">
              Open email brief <ArrowUpRight size={17} />
            </button>
            <button className="button button-quiet" type="button" onClick={copyBrief}>
              {copied ? <Check size={16} /> : <Clipboard size={16} />}
              {copied ? 'Brief copied' : 'Copy brief'}
            </button>
          </div>
          <p className="form-note">Submitting opens your default email app. Nothing is uploaded or stored by this page.</p>
        </form>
      </div>
    </div>
  );
}
