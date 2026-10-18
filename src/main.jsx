import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Film,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sliders,
  Camera,
  Scissors,
  Maximize2,
  ArrowUpRight,
  Check,
  Layers,
  Eye,
  Sparkles,
  Menu,
  X,
  Clock,
  Flame,
  Radio,
  Tv,
  Award,
  MonitorPlay,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Code2,
  Layout,
  Bot,
  ShoppingBag,
  LineChart,
  Gauge,
  Mail,
  Send,
  CheckCircle2,
  ArrowLeft,
  FileText,
  Cookie,
  Scale,
  RefreshCw,
  AlertCircle,
  UploadCloud,
  Paperclip,
  Phone,
  PhoneCall,
  Sun,
  Moon,
  User,
  Trash2
} from 'lucide-react';
import './styles.css';

// Official Google Form link for Book A Demo
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/15zbRoUfGocjXiBKCLB7lj5UWeXUXgKuY8sbix_W0Stw/viewform';

// Official Studio WhatsApp Number (Change to your phone number with country code, e.g. '919752264618')
const STUDIO_WHATSAPP_NUMBER = '919752264618';

// Official WhatsApp Vector Icon
function WhatsAppIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.5C9.36 7.5 9.09 7.57 8.87 7.81C8.65 8.05 8.02 8.64 8.02 9.85C8.02 11.06 8.9 12.23 9.02 12.39C9.14 12.56 10.74 15.03 13.2 16.1C13.79 16.35 14.24 16.5 14.6 16.62C15.19 16.81 15.73 16.78 16.16 16.71C16.64 16.64 17.63 16.11 17.84 15.53C18.05 14.95 18.05 14.45 17.98 14.34C17.91 14.23 17.74 14.17 17.48 14.04C17.22 13.91 15.95 13.28 15.71 13.2C15.48 13.11 15.31 13.07 15.14 13.32C14.97 13.57 14.49 14.13 14.34 14.3C14.2 14.47 14.05 14.49 13.79 14.36C13.54 14.23 12.71 13.96 11.73 13.09C10.97 12.41 10.45 11.57 10.3 11.32C10.16 11.06 10.29 10.93 10.42 10.8C10.53 10.68 10.68 10.49 10.81 10.34C10.94 10.19 10.98 10.08 11.07 9.91C11.15 9.74 11.11 9.59 11.05 9.47C10.98 9.34 10.49 8.14 10.28 7.64C10.08 7.15 9.87 7.22 9.72 7.21C9.57 7.2 9.53 7.5 9.53 7.5Z" />
    </svg>
  );
}

// Project Showcase Data
const projectsData = [
  {
    id: 'asa-epc',
    title: 'ASA EPC — Enterprise Solar Energy & Infrastructure Platform',
    category: 'Web Platforms',
    client: 'ASA EPC Pvt. Ltd. (Bhopal & UAE)',
    duration: 'Live Platform',
    type: 'featured',
    aspect: 'Next.js • TailwindCSS',
    url: 'https://asa-epc.com',
    img: '/assets/asa_epc.jpg',
    tags: ['Next.js', 'Solar EPC', 'Enterprise Web', 'High Performance', 'DPIIT Recognized'],
    summary: 'DPIIT-recognized Solar EPC company trusted by L&T Construction, Bajaj & KEC. High-performance Next.js web application built for 100+ projects across India & UAE.'
  },
  {
    id: 'rathore-construction',
    title: 'Rathore Construction & Earthmovers — Heavy Equipment Platform',
    category: 'Web Platforms',
    client: 'Rathore Construction & Earthmovers (Betul, MP)',
    duration: 'Live Platform',
    type: 'secondary',
    aspect: 'Next.js • TailwindCSS',
    url: 'https://rathore-construction-earthmovers.vercel.app',
    img: '/assets/rathore_construction.jpg',
    tags: ['Next.js', 'JCB 3DX Rental', 'Civil Infrastructure', 'Earthmoving', 'Vercel Fast'],
    summary: 'Heavy equipment rental & earthmoving solutions platform for JCB excavation, roadwork, rock breaking, and pipeline infrastructure across Madhya Pradesh.'
  },
  {
    id: 1,
    title: 'Apex Kinetic — Global Commercial',
    category: 'Commercials',
    client: 'Apex Athletics',
    duration: '01:30',
    type: 'standard',
    aspect: '16:9 • 4K DCI',
    img: '/assets/camera_production.jpg',
    tags: ['Cinema Rig', 'Commercial', 'Sound Design', 'DaVinci Grade'],
    summary: 'High-energy cinematic brand film shot on Sony FX6 & Cooke anamorphics with rapid-fire match cuts.'
  },
  {
    id: 2,
    title: 'The Master Suite — Feature Color Grade',
    category: 'Documentaries',
    client: 'A24 / Independent Doc',
    duration: '04:15',
    type: 'standard',
    aspect: '2.39:1 Anamorphic',
    img: '/assets/video_editing.jpg',
    tags: ['Kodak 2383 Emulation', 'HDR10', 'Pacing'],
    summary: 'Moody, rich film grain emulation and color isolation graded in DaVinci Resolve Studio.'
  },
  {
    id: 3,
    title: 'Cybernetic Flow — 3D Title Sequence',
    category: '3D Motion / VFX',
    client: 'Aura Studio',
    duration: '00:45',
    type: 'standard',
    aspect: '16:9 60FPS',
    img: '/assets/motion_vfx.jpg',
    tags: ['3D CGI', 'Particle VFX', 'Kinetic Sound'],
    summary: 'Futuristic liquid metallic typography and 3D simulation rendered in Octane & After Effects.'
  },
  {
    id: 4,
    title: 'Echoes of Midnight — Cinematic Story',
    category: 'Commercials',
    client: 'Lumen Creative Co.',
    duration: '02:40',
    type: 'standard',
    aspect: '4K ProRes 422HQ',
    img: '/assets/workspace.jpg',
    tags: ['Story Assembly', 'Atmospheric Foley', 'Commercial'],
    summary: 'Narrative-driven visual essay featuring low-light Tokyo cinematography and ambient score.'
  },
  {
    id: 5,
    title: 'HyperSpeed Drop — Viral Campaign',
    category: 'Short-Form Reels',
    client: 'Velox Apparel',
    duration: '00:30',
    type: 'standard',
    aspect: '9:16 Vertical Reel',
    img: '/assets/experience.jpg',
    tags: ['Viral Hook', 'Kinetic Captions', '3.8M Views'],
    summary: 'Hook-optimized vertical video series engineered for maximum TikTok & Instagram Reel retention.'
  }
];

// Services Data
const servicesList = [
  {
    icon: Code2,
    num: '01',
    title: 'Full-Stack Web Development',
    desc: 'End-to-end website and web application development with modern frontend experiences, robust backend systems, secure APIs, and scalable architecture.',
    features: ['React & Next.js', 'Node.js & Express', 'API Integration', 'Scalable Architecture']
  },
  {
    icon: Layout,
    num: '02',
    title: 'UI/UX Design & Development',
    desc: 'Clean, intuitive interfaces and seamless user experiences designed to make your brand stand out and turn visitors into customers.',
    features: ['Responsive UI', 'Interactive Prototypes', 'Design Systems', 'Conversion-Focused UX']
  },
  {
    icon: Bot,
    num: '03',
    title: 'AI Integration & Automation',
    desc: 'Smart AI-powered features and automated workflows that reduce repetitive work, improve productivity, and unlock new possibilities for your business.',
    features: ['AI Chatbots', 'LLM Integration', 'Workflow Automation', 'Intelligent Assistants']
  },
  {
    icon: ShoppingBag,
    num: '04',
    title: 'E-Commerce Solutions',
    desc: 'Modern online stores with smooth shopping experiences, secure checkout flows, product management, and scalable commerce functionality.',
    features: ['Online Stores', 'Payment Integration', 'Product Catalogs', 'Order Management']
  },
  {
    icon: LineChart,
    num: '05',
    title: 'SaaS & Web Applications',
    desc: 'Powerful web applications, analytics dashboards, and subscription-based platforms built around your business requirements.',
    features: ['Admin Dashboards', 'SaaS Platforms', 'Authentication', 'Data Visualization']
  },
  {
    icon: Gauge,
    num: '06',
    title: 'Website Optimization & Maintenance',
    desc: 'Keep your digital products fast, secure, accessible, and reliable with performance optimization, ongoing updates, and technical support.',
    features: ['Core Web Vitals', 'SEO Foundations', 'Bug Fixes', 'Ongoing Support']
  }
];

// Workflow Steps
const workflowSteps = [
  {
    num: 'STAGE 01',
    title: 'Discovery & Planning',
    desc: 'We understand your business goals, target audience, project requirements, and desired outcomes before defining the right solution.',
    tags: ['Requirements', 'Goals', 'Scope', 'Roadmap']
  },
  {
    num: 'STAGE 02',
    title: 'Design & Experience',
    desc: 'We create modern, intuitive, and responsive interfaces that align with your brand and make your product easy to use.',
    tags: ['UI/UX Design', 'Wireframes', 'Prototypes', 'Responsive Layouts']
  },
  {
    num: 'STAGE 03',
    title: 'Development & Testing',
    desc: 'We build your website, application, or AI solution using suitable technologies, then test functionality and fix issues before launch.',
    tags: ['Frontend', 'Backend', 'AI Integration', 'Quality Testing']
  },
  {
    num: 'STAGE 04',
    title: 'Launch & Handover',
    desc: 'We deploy your finished product, check its performance, and provide the project files and handover guidance agreed upon for your project.',
    tags: ['Deployment', 'Final Review', 'Source Code', 'Handover']
  }
];

// FAQs Data
const faqsList = [
  {
    q: 'What types of projects do you work on?',
    a: 'We build modern websites, full-stack web applications, e-commerce platforms, dashboards, and AI-powered solutions tailored to your business needs.'
  },
  {
    q: 'How long does it take to complete a project?',
    a: "Timelines depend on the project's scope, features, and complexity. We define the expected timeline and milestones before development begins."
  },
  {
    q: 'How much does a website or application cost?',
    a: 'Pricing depends on your requirements, design complexity, functionality, and integrations. Share your project details with us to receive a tailored estimate.'
  },
  {
    q: 'Can I request changes during development?',
    a: 'Yes. We gather feedback at agreed milestones and make changes according to the project scope. Any additional requirements can be discussed before implementation.'
  },
  {
    q: 'Will my website work on mobile and desktop?',
    a: 'Yes. We aim to build responsive experiences that adapt to mobile phones, tablets, laptops, and desktop screens.'
  },
  {
    q: 'Do you provide support after launch?',
    a: 'We can discuss post-launch bug fixes, maintenance, and future improvements based on the support arrangement agreed upon for your project.'
  }
];

// Legal Policies Data tailored for CineForge Studio
const legalPoliciesData = {
  privacy: {
    id: 'privacy',
    badge: 'Data Protection & Privacy',
    title: 'Privacy Policy',
    lastUpdated: 'October 18, 2026',
    lead: 'This Privacy Policy explains how CineForge Studio collects, uses, and safeguards your information when you visit cineforge.studio, request project scoping, or collaborate with our web development, web application, and AI integration team.',
    icon: ShieldCheck,
    highlight: {
      title: 'Client Privacy & Confidentiality First',
      text: 'We are an independent digital studio building tailored software. We do not sell, rent, monetize, or trade your contact details or project ideas with third-party advertisers or data brokers. All communications and files shared with us remain strictly confidential.',
      green: false
    },
    sections: [
      {
        index: '01',
        title: 'Information We Collect',
        content: 'We only collect personal information that you intentionally and voluntarily provide to us when contacting our studio, submitting a project brief, or scheduling a consultation:',
        list: [
          'Contact Details: Your full name, business or personal email address, and phone / WhatsApp number.',
          'Project Requirements: Specifications regarding your project type (website, full-stack application, or AI solution), design preferences, expected features, and delivery timeline.',
          'Booking Verification: Transaction reference numbers or transaction IDs if you choose to reserve a project slot via our PhonePe / UPI deposit.',
          'Project Files & Briefs: Documents, wireframes, brand assets, or references uploaded via our website form or through our official Google Form upload portal.'
        ]
      },
      {
        index: '02',
        title: 'How We Use Your Information',
        content: 'We use the collected information exclusively to provide, maintain, and deliver our software engineering and design services:',
        list: [
          'Analyzing project feasibility, drafting technical architecture, and providing transparent cost estimates.',
          'Direct communication regarding development milestones, feedback loops, and deployment status.',
          'Issuing project invoices, verifying reservation deposits, or processing eligible refunds.',
          'Providing post-launch technical support and code maintenance as agreed in your project contract.'
        ]
      },
      {
        index: '03',
        title: 'Third-Party Services & Infrastructure',
        content: 'To deliver high-performance digital experiences, we partner with reliable, privacy-focused technology providers:',
        list: [
          'Hosting & Edge Delivery: Our platform is hosted on Vercel Inc., providing global CDN routing, automated DDoS protection, and secure SSL/TLS encryption.',
          'Brief Intake & Attachments: Project briefs and uploaded assets may be processed via Google Forms and Google Workspace, subject to Google’s enterprise security policies.',
          'Payment Processing: For demo reservations, transactions occur directly via standard Indian UPI banking rails (PhonePe, Google Pay, Paytm, or BHIM). CineForge Studio never captures or stores bank credentials, debit/credit card numbers, or UPI PINs.'
        ]
      },
      {
        index: '04',
        title: 'Data Retention & Security Standards',
        content: 'We retain client communication and project documentation only for as long as necessary to fulfill contractual obligations, provide warranty support, and comply with standard business and tax accounting laws. We utilize end-to-end HTTPS encryption, multi-factor authentication, and restricted repository permissions to protect your data against unauthorized access.'
      },
      {
        index: '05',
        title: 'Your Privacy Rights & Inquiries',
        content: 'You have the right to request access to the personal data we hold about you, request corrections, or request complete deletion of your submitted project briefs from our active records. For any privacy-related questions or data deletion requests, email our engineering lead directly at hello@cineforge.studio.'
      }
    ]
  },
  terms: {
    id: 'terms',
    badge: 'Client Engagement Terms',
    title: 'Terms of Service',
    lastUpdated: 'October 18, 2026',
    lead: 'These Terms of Service govern all professional engagements between CineForge Studio and clients seeking custom responsive web development, web applications, and artificial intelligence integrations.',
    icon: FileText,
    highlight: {
      title: 'Collaborative, Milestone-Driven Delivery',
      text: 'Every project follows our 4-stage methodology: Discovery & Planning, Design & Experience, Development & Testing, and Launch & Handover. Deliverables and timelines are documented in writing so expectations are always clear.',
      green: false
    },
    sections: [
      {
        index: '01',
        title: 'Studio Services & Scope of Work',
        content: 'CineForge Studio provides professional digital engineering services, including custom responsive websites, full-stack web applications (React, Next.js, Node.js), e-commerce systems, API integrations, and artificial intelligence solutions (LLM integration, smart automation, n8n workflows). The specific deliverables, milestones, pricing, and deadlines for any engagement are defined in the written project proposal or statement of work mutually agreed upon prior to development.'
      },
      {
        index: '02',
        title: 'Client Responsibilities & Collaboration',
        content: 'High-quality digital delivery requires prompt, collaborative communication. The client agrees to:',
        list: [
          'Provide necessary project content, branding guidelines, high-resolution logos, and copy in a timely manner.',
          'Furnish required third-party credentials or API access (such as OpenAI keys, domain DNS settings, or hosting accounts) necessary to integrate features.',
          'Review deliverables and provide consolidated feedback within agreed milestone review windows to avoid project delays.'
        ]
      },
      {
        index: '03',
        title: 'Revisions & Scope Adjustments',
        content: 'Each milestone includes designated feedback and revision cycles as outlined in your project proposal. Revisions allow fine-tuning of approved concepts and components. Requests for new features, alterations to previously approved milestones, or additions outside the original scope of work will be estimated and billed as a formal scope addendum before implementation.'
      },
      {
        index: '04',
        title: 'Intellectual Property & Code Ownership',
        content: 'Upon receipt of full and final payment for the project, all intellectual property rights to the custom source code, design layouts, graphics, and unique digital assets created specifically for the client are transferred unconditionally to the client. CineForge Studio retains ownership of proprietary developer boilerplates, tools, and general knowledge frameworks, and reserves the right to display completed project screenshots and public links in our studio portfolio unless covered under an explicit Non-Disclosure Agreement (NDA).'
      },
      {
        index: '05',
        title: 'Warranties & Technical Limitations',
        content: 'CineForge Studio builds and tests software using modern coding standards and responsive practices across major desktop and mobile browsers. However, we cannot warrant uninterrupted operation against external events outside our reasonable control, including third-party cloud hosting disruptions, breaking changes introduced by external API vendors (e.g. OpenAI or payment processors), or unauthorized modifications made to the codebase after official handover.'
      },
      {
        index: '06',
        title: 'Termination of Agreement',
        content: 'Either party may terminate the project engagement upon written notice if the other party breaches material terms or fails to communicate for more than 14 consecutive business days. In the event of early termination, payment is due for all milestones and billable work completed up to the date of termination, as outlined in our Refund Policy.'
      }
    ]
  },
  cookies: {
    id: 'cookies',
    badge: 'Cookie & Tracking Transparency',
    title: 'Cookie Policy',
    lastUpdated: 'October 18, 2026',
    lead: 'This Cookie Policy explains how CineForge Studio utilizes browser storage and cookies to provide an intuitive, high-performance web experience when navigating cineforge.studio.',
    icon: Cookie,
    highlight: {
      title: 'Zero Third-Party Advertising Trackers',
      text: 'We respect your digital privacy. CineForge Studio does NOT use invasive marketing cookies, Facebook/Meta tracking pixels, Google AdSense trackers, or cross-site commercial profiling scripts.',
      green: false
    },
    sections: [
      {
        index: '01',
        title: 'What Are Cookies & Browser Storage?',
        content: 'Cookies are small text files placed on your computer or mobile device when you access websites. Web applications also use local browser storage (LocalStorage and SessionStorage) to remember your preferences locally on your device without sending sensitive data back to servers on every request.'
      },
      {
        index: '02',
        title: 'How CineForge Studio Uses Cookies',
        content: 'We maintain a lightweight, privacy-focused platform. The cookies and local storage mechanisms we use fall into the following essential categories:',
        list: [
          'Essential Functional Storage: Used to preserve interactive interface states, such as video audio mute preferences, color laboratory slider positions, and temporary project demo modal inputs.',
          'Edge Performance & Diagnostics: Hosted on Vercel’s edge network, aggregated server-side metrics measure response speeds, page load times, and technical error logs to ensure website stability. These metrics are strictly anonymous.',
          'External Embed Interactions: If you click links to external services (such as our official Google Form or direct UPI payment apps), those third-party providers may set session cookies in accordance with their respective privacy and security guidelines.'
        ]
      },
      {
        index: '03',
        title: 'What We Do Not Do',
        content: 'Unlike many commercial websites, CineForge Studio does not participate in advertising networks or behavioral targeting:',
        list: [
          'No advertising cookies or conversion tracking pixels.',
          'No behavioral profiling or sharing of browsing data with commercial brokers.',
          'No cross-site data harvesting or third-party retargeting campaigns.'
        ]
      },
      {
        index: '04',
        title: 'Managing & Disabling Cookies',
        content: 'You can control or clear cookies and browser storage at any time through your web browser settings (Chrome, Safari, Firefox, Edge, or Brave). You can configure your browser to block all cookies or alert you when a cookie is placed. Doing so will not affect your ability to browse our portfolio, read our technical documentation, or contact us regarding web development projects.'
      }
    ]
  },
  refund: {
    id: 'refund',
    badge: 'Payment & Refund Guarantee',
    title: 'Refund & Cancellation Policy',
    lastUpdated: 'October 18, 2026',
    lead: 'We believe in building long-term client relationships based on trust and transparent terms. Here is our straightforward refund and cancellation policy for reservation deposits and custom software engineering projects.',
    icon: RefreshCw,
    highlight: {
      title: '₹499 Project Reservation Deposit Guarantee',
      text: 'The ₹499 project demo reservation fee is 100% credited against your final project invoice if you proceed with CineForge Studio, or 100% refunded to your original UPI account upon request if we do not move forward. Completely risk-free.',
      green: true
    },
    sections: [
      {
        index: '01',
        title: '₹499 Project Reservation & Demo Deposit',
        content: 'To reserve dedicated engineering time and prioritize your project discovery session, clients may submit a nominal ₹499 reservation deposit via PhonePe or UPI. Our guarantee on this deposit is simple and absolute:',
        list: [
          'Credited to Project Invoice: If you choose to proceed with CineForge Studio for your website, web application, or AI integration, the entire ₹499 fee is deducted directly from your final project bill.',
          '100% Full Refund: If after our discovery call you choose not to proceed, or if CineForge Studio determines that we cannot accommodate your required scope or timeline, the ₹499 deposit will be refunded in full to your original UPI payment account within 3 to 5 business days upon request.'
        ]
      },
      {
        index: '02',
        title: 'Milestone-Based Custom Development Contracts',
        content: 'All bespoke web development, web application engineering, and AI integration projects are executed and billed based on predefined, milestone-driven phases (Discovery, Design, Development, and Launch):',
        list: [
          'Cancellations Before Milestone Start: If you decide to cancel a project before work on an upcoming milestone has commenced, any advance funds collected specifically for that unstarted milestone will be refunded in full.',
          'Cancellations During an Active Milestone: If cancellation is requested while a development sprint or design phase is underway, the refund will be prorated based on the verified work completed up to the written cancellation date, and any remaining balance refunded.',
          'Approved Deliverables: Once a milestone has been reviewed, approved, or deployed to production staging/handover, payments allocated to that completed milestone are non-refundable, as custom design and development labor cannot be undone.'
        ]
      },
      {
        index: '03',
        title: 'Third-Party Services & Out-of-Pocket Expenses',
        content: 'Any third-party costs incurred at the client’s explicit request (such as purchasing domain names, specialized software licenses, commercial fonts, or cloud server subscriptions) are non-refundable once activated, as third-party vendors do not permit refunds for digital assets.'
      },
      {
        index: '04',
        title: 'How to Request a Refund or Cancellation',
        content: 'To initiate a cancellation or request a refund under our deposit guarantee, please email hello@cineforge.studio with your full name, project name, and UPI transaction reference number. Our team will review and process your request within 3 to 5 business days, and the funds will be transferred directly to your originating UPI account.'
      }
    ]
  }
};

function LegalPageView({ activeTab, onSelectTab, onBackHome, onOpenDemo }) {
  const policy = legalPoliciesData[activeTab] || legalPoliciesData.privacy;
  const PolicyIcon = policy.icon;

  return (
    <article className="legal-page-wrapper">
      <header className="legal-header">
        <button
          type="button"
          onClick={onBackHome}
          className="legal-back-btn"
          aria-label="Back to main website"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>

        <div className="legal-kicker-row">
          <div className="legal-badge">
            <PolicyIcon size={12} />
            <span>{policy.badge}</span>
          </div>
          <span className="legal-last-updated">Last Updated: {policy.lastUpdated}</span>
        </div>

        <h1 className="legal-title">{policy.title}</h1>
        <p className="legal-lead-text">{policy.lead}</p>
      </header>

      {/* Policy Switching Tabs */}
      <nav className="legal-tabs-bar" aria-label="Legal policies navigation">
        <button
          type="button"
          className={`legal-tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
          onClick={() => onSelectTab('privacy')}
        >
          <ShieldCheck size={14} />
          <span>Privacy Policy</span>
        </button>
        <button
          type="button"
          className={`legal-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
          onClick={() => onSelectTab('terms')}
        >
          <FileText size={14} />
          <span>Terms of Service</span>
        </button>
        <button
          type="button"
          className={`legal-tab-btn ${activeTab === 'cookies' ? 'active' : ''}`}
          onClick={() => onSelectTab('cookies')}
        >
          <Cookie size={14} />
          <span>Cookie Policy</span>
        </button>
        <button
          type="button"
          className={`legal-tab-btn ${activeTab === 'refund' ? 'active' : ''}`}
          onClick={() => onSelectTab('refund')}
        >
          <RefreshCw size={14} />
          <span>Refund & Cancellation</span>
        </button>
      </nav>

      {/* Content Card */}
      <div className="legal-content-card">
        {/* Highlight box */}
        {policy.highlight && (
          <aside className={`legal-highlight-box ${policy.highlight.green ? 'green' : ''}`}>
            <div className="highlight-icon">
              {policy.highlight.green ? <CheckCircle2 size={20} /> : <PolicyIcon size={20} />}
            </div>
            <div className="highlight-content">
              <h4>{policy.highlight.title}</h4>
              <p>{policy.highlight.text}</p>
            </div>
          </aside>
        )}

        {/* Policy Sections */}
        {policy.sections.map((sec) => (
          <section key={sec.index} className="legal-section-block">
            <h3>
              <span className="section-index">{sec.index}</span>
              <span>{sec.title}</span>
            </h3>
            <p>{sec.content}</p>
            {sec.list && (
              <ul>
                {sec.list.map((item, i) => {
                  const parts = item.split(': ');
                  if (parts.length > 1) {
                    return (
                      <li key={i}>
                        <strong>{parts[0]}:</strong> {parts.slice(1).join(': ')}
                      </li>
                    );
                  }
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* Contact & Inquiries Banner */}
      <div className="legal-contact-banner">
        <div className="legal-contact-info">
          <h4>Have questions regarding our legal terms or project contracts?</h4>
          <p>Reach out directly to CineForge Studio. We respond to all inquiries within 24 hours.</p>
        </div>
        <div className="legal-contact-actions">
          <a href="mailto:hello@cineforge.studio" className="legal-email-btn">
            <Mail size={15} />
            <span>hello@cineforge.studio</span>
          </a>
          <button
            type="button"
            onClick={onOpenDemo}
            className="btn-nav-cta"
            style={{ padding: '9px 18px', fontSize: 13 }}
          >
            Start a Project <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

// Full Project Intake & Newsletter Dispatch Component
function ProjectIntakeCard({ isModal = false, onClose = null }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    projectType: 'Business Website',
    projectTypeOther: '',
    animationPref: 'Simple & Clean',
    animationPrefOther: '',
    requirements: '',
    reference: '',
    subscribeNewsletter: true,
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const fileInputRef = useRef(null);

  const websiteTypes = [
    'Business Website',
    'E-commerce',
    'Portfolio',
    'Landing Page',
    'Other'
  ];

  const animationPreferences = [
    'Simple & Clean',
    'Creative / Interactive',
    'Modern & Animated',
    'Premium / Luxury',
    'Other'
  ];

  const handleFile = (file) => {
    setFileError('');
    if (!file) return;
    const maxBytes = 10 * 1024 * 1024; // 10MB
    if (file.size > maxBytes) {
      setFileError(`File "${file.name}" is ${(file.size / (1024 * 1024)).toFixed(1)} MB. Max allowed size is 10 MB.`);
      return;
    }
    setUploadedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim() || !formData.email.trim() || !formData.requirements.trim()) {
      return;
    }
    if (formData.projectType === 'Other' && !formData.projectTypeOther.trim()) {
      return;
    }
    if (formData.animationPref === 'Other' && !formData.animationPrefOther.trim()) {
      return;
    }

    setIsSubmitting(true);

    const resolvedProjectType = formData.projectType === 'Other' && formData.projectTypeOther
      ? `Other (${formData.projectTypeOther.trim()})`
      : formData.projectType;

    const resolvedAnimationPref = formData.animationPref === 'Other' && formData.animationPrefOther
      ? `Other (${formData.animationPrefOther.trim()})`
      : formData.animationPref;

    // Compose formatted WhatsApp message
    const messageLines = [
      '🚀 *New Project Inquiry — CineForge Studio*',
      '━━━━━━━━━━━━━━━━━━━━━',
      `👤 *Name:* ${formData.name.trim()}`,
      `📞 *Client Contact:* ${formData.contact.trim()}`,
      `✉️ *Email:* ${formData.email.trim()}`,
      `🌐 *Project Type:* ${resolvedProjectType}`,
      `✨ *Animation Preference:* ${resolvedAnimationPref}`,
      '',
      '📋 *Project Requirements:*',
      `${formData.requirements.trim()}`,
    ];

    if (formData.reference && formData.reference.trim()) {
      messageLines.push('');
      messageLines.push(`🔗 *Design Reference:* ${formData.reference.trim()}`);
    }

    if (uploadedFile) {
      messageLines.push('');
      messageLines.push(`📎 *Attachment Specified:* ${uploadedFile.name} (${(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB)`);
    }

    if (formData.subscribeNewsletter) {
      messageLines.push('');
      messageLines.push('📬 *CineForge Dispatch:* Subscribed');
    }

    messageLines.push('━━━━━━━━━━━━━━━━━━━━━');
    messageLines.push('⚡ _Submitted via CineForge Web Platform_');

    const whatsappText = encodeURIComponent(messageLines.join('\n'));
    const url = STUDIO_WHATSAPP_NUMBER
      ? `https://api.whatsapp.com/send?phone=${STUDIO_WHATSAPP_NUMBER}&text=${whatsappText}`
      : `https://api.whatsapp.com/send?text=${whatsappText}`;

    setWhatsappUrl(url);

    // Redirect to WhatsApp
    window.open(url, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      contact: '',
      email: '',
      projectType: 'Business Website',
      projectTypeOther: '',
      animationPref: 'Simple & Clean',
      animationPrefOther: '',
      requirements: '',
      reference: '',
      subscribeNewsletter: true,
    });
    setUploadedFile(null);
    setFileError('');
    setWhatsappUrl('');
  };

  return (
    <div className={`newsletter-card ${isModal ? 'is-modal-card' : ''}`}>
      <div className="nl-card-head">
        <div className="nl-live-badge">
          <span className="live-dot" />
          <span>PROJECT INTAKE & DISPATCH</span>
        </div>
        <h3 className="nl-card-title">Start Your Project With CineForge</h3>
        <p className="nl-card-subtitle">
          Submit your requirements, references, and specifications below. We provide high-performance engineering & private weekly tech dispatches.
        </p>
      </div>

      {submitted ? (
        <div className="nl-success-box">
          <div className="nl-success-icon" style={{ background: 'rgba(37, 211, 102, 0.15)', borderColor: 'rgba(37, 211, 102, 0.4)', color: '#25d366' }}>
            <WhatsAppIcon size={34} />
          </div>
          <div className="newsletter-badge success">
            <Sparkles size={13} />
            <span>REDIRECTED TO WHATSAPP</span>
          </div>
          <h4>Your Requirements Have Been Prepared!</h4>
          <p>
            Thank you, <strong>{formData.name}</strong>. Your project specs have been formatted and forwarded to our official WhatsApp chat.
          </p>

          <div className="nl-whatsapp-success-banner">
            <WhatsAppIcon size={20} />
            <span>
              If WhatsApp did not open automatically, click <strong>"Open WhatsApp Chat"</strong> below to send your details directly to our engineering lead.
            </span>
          </div>

          <div className="nl-specs-summary-card">
            <div className="summary-item">
              <span className="label">Contact</span>
              <span className="val">{formData.contact}</span>
            </div>
            <div className="summary-item">
              <span className="label">Project Type</span>
              <span className="val">
                {formData.projectType === 'Other' && formData.projectTypeOther
                  ? `Other (${formData.projectTypeOther})`
                  : formData.projectType}
              </span>
            </div>
            <div className="summary-item">
              <span className="label">Animation Style</span>
              <span className="val">
                {formData.animationPref === 'Other' && formData.animationPrefOther
                  ? `Other (${formData.animationPrefOther})`
                  : formData.animationPref}
              </span>
            </div>
            {formData.reference && (
              <div className="summary-item">
                <span className="label">Reference</span>
                <span className="val truncate">{formData.reference}</span>
              </div>
            )}
            {uploadedFile && (
              <div className="summary-item">
                <span className="label">Attached File</span>
                <span className="val">
                  <Paperclip size={12} /> {uploadedFile.name} ({(uploadedFile.size / (1024 * 1024)).toFixed(1)} MB)
                </span>
              </div>
            )}
            <div className="summary-item">
              <span className="label">CineForge Dispatch</span>
              <span className="val">{formData.subscribeNewsletter ? 'Subscribed' : 'Standard'}</span>
            </div>
          </div>

          <p className="nl-next-steps-note">
            Our lead engineer is reviewing your brief and will respond with an architectural blueprint and scope breakdown on WhatsApp & Email within 24 hours.
          </p>

          <div className="success-buttons" style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', alignItems: 'center' }}>
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nl-whatsapp-btn"
                style={{ width: '100%', boxSizing: 'border-box' }}
              >
                <WhatsAppIcon size={18} />
                <span>Open WhatsApp Chat Again</span>
                <ArrowUpRight size={15} />
              </a>
            )}
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', width: '100%' }}>
              <button type="button" onClick={handleReset} className="nl-reset-btn">
                Submit Another Project
              </button>
              {isModal && onClose && (
                <button type="button" onClick={onClose} className="newsletter-close-btn">
                  Close Window
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <form className="nl-intake-form" onSubmit={handleSubmit}>
          {/* Row 1: Name and Contact */}
          <div className="nl-grid-2col">
            <div className="nl-field-group">
              <label className="nl-field-label">
                Name <span className="req">*</span>
              </label>
              <div className="nl-input-wrapper">
                <User size={15} className="nl-field-icon" />
                <input
                  type="text"
                  required
                  placeholder="Alex Morgan"
                  className="nl-input with-icon"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

            <div className="nl-field-group">
              <label className="nl-field-label">
                Contact <span className="req">*</span>
              </label>
              <div className="nl-input-wrapper">
                <Phone size={15} className="nl-field-icon" />
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000 / WhatsApp"
                  className="nl-input with-icon"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Row 2: Email */}
          <div className="nl-field-group">
            <label className="nl-field-label">
              Email <span className="req">*</span>
            </label>
            <div className="nl-input-wrapper">
              <Mail size={15} className="nl-field-icon" />
              <input
                type="email"
                required
                placeholder="alex@company.com"
                className="nl-input with-icon"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {/* Row 3: Type of Website / Project */}
          <div className="nl-field-group">
            <label className="nl-field-label">
              Type of Website / Project <span className="req">*</span>
            </label>
            <div className="nl-pills-row">
              {websiteTypes.map((type) => {
                const isSelected = formData.projectType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    className={`nl-choice-pill ${isSelected ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, projectType: type })}
                  >
                    <span className={`pill-radio-indicator ${isSelected ? 'checked' : ''}`} />
                    <span>{type}</span>
                  </button>
                );
              })}
            </div>
            {formData.projectType === 'Other' && (
              <div className="nl-other-expand">
                <input
                  type="text"
                  required
                  placeholder="Specify other website / project type..."
                  className="nl-input"
                  value={formData.projectTypeOther}
                  onChange={(e) => setFormData({ ...formData, projectTypeOther: e.target.value })}
                />
              </div>
            )}
          </div>

          {/* Row 4: Animation Preference */}
          <div className="nl-field-group">
            <label className="nl-field-label">
              Animation Preference <span className="req">*</span>
            </label>
            <div className="nl-pills-row">
              {animationPreferences.map((anim) => {
                const isSelected = formData.animationPref === anim;
                return (
                  <button
                    key={anim}
                    type="button"
                    className={`nl-choice-pill ${isSelected ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, animationPref: anim })}
                  >
                    <span className={`pill-radio-indicator ${isSelected ? 'checked' : ''}`} />
                    <span>{anim}</span>
                  </button>
                );
              })}
            </div>
            {formData.animationPref === 'Other' && (
              <div className="nl-other-expand">
                <input
                  type="text"
                  required
                  placeholder="Specify other animation preference..."
                  className="nl-input"
                  value={formData.animationPrefOther}
                  onChange={(e) => setFormData({ ...formData, animationPrefOther: e.target.value })}
                />
              </div>
            )}
          </div>

          {/* Row 5: Project Requirements */}
          <div className="nl-field-group">
            <div className="nl-label-stacked">
              <label className="nl-field-label">
                Project Requirements <span className="req">*</span>
              </label>
              <span className="nl-field-helper">Briefly describe your project, requirements, and key features.</span>
            </div>
            <textarea
              required
              rows={4}
              placeholder="Describe the goal of your website or app, target audience, pages needed, key integrations (payments, CRM, custom AI chat), and desired launch timeline..."
              className="nl-textarea"
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
            />
          </div>

          {/* Row 6: Project Reference */}
          <div className="nl-field-group">
            <div className="nl-label-stacked">
              <label className="nl-field-label">Project Reference</label>
              <span className="nl-field-helper">Share any website, design, or reference you like.</span>
            </div>
            <input
              type="text"
              placeholder="e.g. https://apple.com/vision-pro, https://stripe.com, or Figma link"
              className="nl-input"
              value={formData.reference}
              onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
            />
          </div>

          {/* Row 7: File Upload */}
          <div className="nl-field-group">
            <div className="nl-label-stacked">
              <label className="nl-field-label">Upload Reference / Specification File</label>
              <span className="nl-field-helper">
                Upload 1 supported file: PDF, audio, document, drawing, image, presentation, spreadsheet, or video. Max 10 MB.
              </span>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              style={{ display: 'none' }}
              accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.webp,.svg,.mp4,.mov,.mp3,.wav,.ppt,.pptx,.xls,.xlsx"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFile(e.target.files[0]);
                }
              }}
            />

            {uploadedFile ? (
              <div className="nl-file-attached-card">
                <div className="nl-file-info">
                  <div className="nl-file-icon-badge">
                    <Paperclip size={16} />
                  </div>
                  <div className="nl-file-details">
                    <strong className="nl-file-name">{uploadedFile.name}</strong>
                    <span className="nl-file-meta">
                      {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready for submission
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="nl-remove-file-btn"
                  onClick={() => {
                    setUploadedFile(null);
                    if (fileInputRef.current) fileInputRef.current.value = '';
                  }}
                  title="Remove file"
                >
                  <Trash2 size={15} />
                  <span>Remove</span>
                </button>
              </div>
            ) : (
              <div
                className={`nl-dropzone ${isDragging ? 'dragging' : ''}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
              >
                <div className="nl-dropzone-icon">
                  <UploadCloud size={24} />
                </div>
                <div className="nl-dropzone-content">
                  <span className="nl-dropzone-main-text">
                    <strong>Click to upload</strong> or drag and drop reference file
                  </span>
                  <span className="nl-dropzone-sub-text">
                    PDF, DOC, Images, Audio, Video, PPT, Sheets (Max 10 MB)
                  </span>
                </div>
              </div>
            )}

            {fileError && (
              <div className="nl-file-error-alert">
                <AlertCircle size={14} />
                <span>{fileError}</span>
              </div>
            )}
          </div>

          {/* Row 8: Newsletter Dispatch Opt-in */}
          <label className="nl-checkbox-wrapper">
            <input
              type="checkbox"
              checked={formData.subscribeNewsletter}
              onChange={(e) => setFormData({ ...formData, subscribeNewsletter: e.target.checked })}
            />
            <span className="nl-checkbox-box">
              {formData.subscribeNewsletter && <Check size={12} />}
            </span>
            <span className="nl-checkbox-label">
              Also subscribe me to <strong>CineForge Dispatch</strong> (bi-weekly engineering deep-dives & AI teardowns. Zero spam.)
            </span>
          </label>

          {/* Submit Button */}
          <button type="submit" disabled={isSubmitting} className="nl-submit-button nl-submit-whatsapp">
            <WhatsAppIcon size={18} />
            <span>{isSubmitting ? 'Redirecting to WhatsApp...' : 'Submit Project Requirements'}</span>
            <ArrowUpRight size={15} />
          </button>

          <div className="nl-privacy-guarantee">
            <ShieldCheck size={14} />
            <span>Direct WhatsApp transfer & email confirmation. 100% confidential. NDA-protected.</span>
          </div>
        </form>
      )}
    </div>
  );
}

// Request A Callback Modal Component
function RequestCallbackModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Next 15 Minutes (Immediate)');
  const [topic, setTopic] = useState('Web Development & AI Solutions');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const messageLines = [
      '📞 *NEW CALLBACK REQUEST — CINEFORGE STUDIO*',
      '━━━━━━━━━━━━━━━━━━━━━',
      `👤 *Client Name:* ${name}`,
      `📱 *Phone / WhatsApp:* ${phone}`,
      `⏰ *Preferred Time:* ${preferredTime}`,
      `💬 *Discussion Topic:* ${topic}`,
      '━━━━━━━━━━━━━━━━━━━━━',
      '⚡ _Please initiate callback at the scheduled time._'
    ];

    const url = `https://api.whatsapp.com/send?phone=${STUDIO_WHATSAPP_NUMBER}&text=${encodeURIComponent(messageLines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setPreferredTime('Next 15 Minutes (Immediate)');
    setTopic('Web Development & AI Solutions');
    setSubmitted(false);
  };

  return (
    <div className="callback-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="callback-modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="callback-close-btn"
          onClick={onClose}
          aria-label="Close callback modal"
        >
          <X size={18} />
        </button>

        <div className="callback-modal-header">
          <div className="callback-live-badge">
            <span className="live-dot" />
            <span>RAPID RESPONSE • WITHIN 15 MINS</span>
          </div>
          <h3>Request an Instant Callback</h3>
          <p>
            Drop your name and number below. Our lead engineer will call you directly to discuss your project requirements, scope, and technical roadmap.
          </p>
        </div>

        {submitted ? (
          <div className="callback-success-state">
            <div className="callback-success-icon">
              <CheckCircle2 size={36} color="#10b981" />
            </div>
            <h4>Callback Request Dispatched!</h4>
            <p>
              Thank you, <strong>{name}</strong>. Your callback request has been logged and sent to our team via WhatsApp. We will reach you on <strong>{phone}</strong> shortly.
            </p>
            <div className="callback-direct-call">
              <span>Need immediate assistance?</span>
              <a href="tel:+919752264618" className="callback-tel-btn">
                <Phone size={14} /> Call Directly: +91 97522 64618
              </a>
            </div>
            <div style={{ display: 'flex', gap: 10, width: '100%', marginTop: 14 }}>
              <button
                type="button"
                onClick={handleReset}
                className="btn ghost"
                style={{ flex: 1, padding: '10px 14px', fontSize: 12, justifyContent: 'center' }}
              >
                New Request
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn primary"
                style={{ flex: 1, padding: '10px 14px', fontSize: 12, justifyContent: 'center' }}
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="callback-form">
            <div className="callback-field">
              <label>Your Name *</label>
              <div className="callback-input-wrap">
                <User size={15} />
                <input
                  type="text"
                  placeholder="e.g. Vikram Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="callback-field">
              <label>Phone / WhatsApp Number *</label>
              <div className="callback-input-wrap">
                <Phone size={15} />
                <input
                  type="tel"
                  placeholder="e.g. +91 97522 64618"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="callback-field">
              <label>Preferred Time for Call</label>
              <select value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)}>
                <option value="Next 15 Minutes (Immediate)">Immediate (Next 15 Minutes)</option>
                <option value="Today Afternoon (2 PM - 5 PM)">Today Afternoon (2 PM - 5 PM)</option>
                <option value="Today Evening (6 PM - 9 PM)">Today Evening (6 PM - 9 PM)</option>
                <option value="Tomorrow Morning (10 AM - 1 PM)">Tomorrow Morning (10 AM - 1 PM)</option>
              </select>
            </div>

            <div className="callback-field">
              <label>Project Topic</label>
              <input
                type="text"
                placeholder="e.g. Web App Development, AI Integration, Pricing"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>

            <button type="submit" className="callback-submit-btn">
              <PhoneCall size={16} />
              <span>Request Callback Now</span>
              <ArrowUpRight size={15} />
            </button>

            <div className="callback-modal-footer">
              <span>Or call our direct studio line: </span>
              <a href="tel:+919752264618">+91 97522 64618</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('cineforge_theme') || 'dark';
  });
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cineforge_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const [activeCategory, setActiveCategory] = useState('All Works');
  const [isMuted, setIsMuted] = useState(true);
  const [activeLut, setActiveLut] = useState('kodak');
  const [sliderPos, setSliderPos] = useState(52);
  const [modalVideo, setModalVideo] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  // Dedicated Newsletter Subscription State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterName, setNewsletterName] = useState('');
  const [newsletterTopics, setNewsletterTopics] = useState(['Web Development', 'AI & Automation']);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
    }
  };

  // Newsletter-themed Demo Modal State
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoModalSubmitted, setDemoModalSubmitted] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: '',
    contact: '',
    email: '',
    projectType: 'E-Commerce Platform / Store',
    animationPref: 'Smooth Micro-Interactions & Hover FX',
    requirements: '',
    reference: '',
    txnId: ''
  });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoModalSubmitted(true);
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
    setTimeout(() => setDemoModalSubmitted(false), 350);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isDemoModalOpen) {
        closeDemoModal();
      }
    };
    if (isDemoModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDemoModalOpen]);

  // Legal Pages Routing State: null | 'privacy' | 'terms' | 'cookies' | 'refund'
  const [legalPage, setLegalPage] = useState(null);

  useEffect(() => {
    const handleHash = () => {
      const h = (window.location.hash || '').toLowerCase();
      if (h === '#/privacy' || h === '#privacy') {
        setLegalPage('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (h === '#/terms' || h === '#terms') {
        setLegalPage('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (h === '#/cookies' || h === '#cookies') {
        setLegalPage('cookies');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (h === '#/refund' || h === '#refund') {
        setLegalPage('refund');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setLegalPage(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateLegal = (page) => {
    setLegalPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const returnHome = (targetHash = '#hero') => {
    setLegalPage(null);
    window.location.hash = targetHash;
    setTimeout(() => {
      const el = document.querySelector(targetHash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  // Global Scroll Reveal & Delayed Entrance Observer
  useEffect(() => {
    const observerCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08,
    });

    const selector = [
      '.scroll-reveal',
      '.section-head',
      '.section-title',
      '.stats-grid',
      '.stat-card',
      '.portfolio-grid',
      '.project-card',
      '.services-grid',
      '.service-box',
      '.about-grid',
      '.about-visual-card',
      '.about-content',
      '.timeline-grid',
      '.timeline-step',
      '.gear-grid',
      '.gear-category',
      '.faqs-accordion',
      '.faq-card',
      '.grading-lab',
      '.comparison-box',
      '.newsletter-grid',
      '.newsletter-info-col',
      '.newsletter-perks',
      '.newsletter-community-card',
      '.newsletter-card-wrap',
      '.site-footer',
      '.footer-brand',
      '.footer-col',
      '.footer-bottom'
    ].join(', ');

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      el.classList.add('scroll-reveal');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [legalPage, activeCategory]);

  const heroVideoRef = useRef(null);

  const toggleMute = () => {
    if (heroVideoRef.current) {
      const nextMuted = !heroVideoRef.current.muted;
      heroVideoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setIsDemoModalOpen(true);
    setTimeout(() => setFormSent(false), 6000);
  };

  const filteredProjects = activeCategory === 'All Works'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <header className="navbar">
        <a
          href="#hero"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenu(false);
            if (legalPage) {
              returnHome('#hero');
            } else {
              const heroEl = document.getElementById('hero');
              if (heroEl) {
                heroEl.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }
          }}
          title="Return to Hero Section"
        >
          <div className="brand-icon-box">
            <Film size={18} />
          </div>
          <div className="brand-text">
            CINE<span>FORGE</span>
          </div>
          <span className="brand-badge">STUDIO</span>
        </a>

        <nav className={`nav-links ${mobileMenu ? 'open' : ''}`}>
          <a
            href="#work"
            className="nav-link"
            onClick={(e) => {
              setMobileMenu(false);
              if (legalPage) {
                e.preventDefault();
                returnHome('#work');
              }
            }}
          >
            Our Work
          </a>
          <a
            href="#services"
            className="nav-link"
            onClick={(e) => {
              setMobileMenu(false);
              if (legalPage) {
                e.preventDefault();
                returnHome('#services');
              }
            }}
          >
            Services
          </a>
          <a
            href="#about"
            className="nav-link"
            onClick={(e) => {
              setMobileMenu(false);
              if (legalPage) {
                e.preventDefault();
                returnHome('#about');
              }
            }}
          >
            About
          </a>
          <a
            href="#process"
            className="nav-link"
            onClick={(e) => {
              setMobileMenu(false);
              if (legalPage) {
                e.preventDefault();
                returnHome('#process');
              }
            }}
          >
            Process
          </a>
          <a
            href="#faqs"
            className="nav-link"
            onClick={(e) => {
              setMobileMenu(false);
              if (legalPage) {
                e.preventDefault();
                returnHome('#faqs');
              }
            }}
          >
            FAQs
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={(e) => {
              setMobileMenu(false);
              if (legalPage) {
                e.preventDefault();
                returnHome('#contact');
              }
            }}
          >
            Contact
          </a>
          <button
            type="button"
            className="mobile-callback-btn"
            onClick={() => {
              setMobileMenu(false);
              setIsCallbackModalOpen(true);
            }}
          >
            <PhoneCall size={14} />
            <span>Request a Callback</span>
          </button>
        </nav>

        <div className="nav-right">
          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme mode"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Request a Callback Button */}
          <button
            type="button"
            className="btn-callback-nav"
            onClick={() => setIsCallbackModalOpen(true)}
            title="Request an instant callback within 15 minutes"
          >
            <PhoneCall size={13} />
            <span>Request a Callback</span>
          </button>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav-cta"
            style={{ textDecoration: 'none' }}
          >
            Book Demo Project <ArrowUpRight size={14} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {legalPage ? (
        <main id="top" className="legal-view-container">
          <LegalPageView
            activeTab={legalPage}
            onSelectTab={navigateLegal}
            onBackHome={() => returnHome('#hero')}
            onOpenDemo={() => setIsDemoModalOpen(true)}
          />
        </main>
      ) : (
        <main id="top">
          {/* REVERTED HERO WITH ORIGINAL PROJECT VIDEO HERO.MP4 */}
          <section id="hero" className="hero">
          <video
            ref={heroVideoRef}
            className="hero-video"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster="/assets/workspace.jpg"
          >
            <source src="/assets/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
          <div className="hero-grid" />

          {/* Hero Main Copy */}
          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={13} />
              <span>FULL-STACK DEVELOPMENT & AI SOLUTIONS</span>
            </div>
            <h1>
              <span className="hero-title-line">Turn bold ideas into</span> <br />
              <span className="hero-highlight">digital reality.</span>
            </h1>
            <p>
              We build high-performance websites, powerful web applications, and intelligent AI solutions designed to elevate your brand, engage your audience, and grow your business.
            </p>

            <div className="hero-actions">
              <a
                href="#contact"
                className="btn primary"
              >
                Start a Project <ArrowUpRight size={16} />
              </a>
              <a href="#work" className="btn ghost">
                <span className="play-ring">
                  <Play size={13} fill="#05060a" style={{ marginLeft: 2 }} />
                </span>
                <span>See What We Build</span>
              </a>
            </div>
          </div>

          {/* Hero Bottom Bar */}
          <div className="hero-footer-bar">
            <div className="hero-specs-list">
              <div className="spec-item">
                <Check size={14} /> <span>High-Performance Web Apps</span>
              </div>
              <div className="spec-item">
                <Check size={14} /> <span>Intelligent AI & LLM Solutions</span>
              </div>
              <div className="spec-item">
                <Check size={14} /> <span>Modern Responsive Architecture</span>
              </div>
              <div className="spec-item">
                <Check size={14} /> <span>Rapid 99+ Speed Delivery</span>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS & PROOF BANNER */}
        <section className="stats-banner">
          <div className="stats-grid stagger-reveal">
            <div className="stat-card">
              <div className="stat-number">85M<span>+</span></div>
              <p>Total views generated across commercials, docs & social reels</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">450<span>+</span></div>
              <p>Projects cut, color-graded and delivered worldwide</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.2<span>%</span></div>
              <p>Audience retention rate boost on optimized edits</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">48<span>h</span></div>
              <p>Average first-draft turn on commercial & social reels</p>
            </div>
          </div>
        </section>

        {/* SELECTED WORK / PORTFOLIO SHOWCASE */}
        <section id="work" className="section-wrapper">
          <div className="section-head">
            <div>
              <div className="section-kicker">
                <Camera size={14} />
                <span>SELECTED REELS & FILMS</span>
              </div>
              <h2 className="section-title">
                Engineered for <em>attention.</em>
              </h2>
            </div>
            <p className="section-desc">
              From enterprise web platforms and full-stack applications to cinematic commercials and high-retention cuts.
              Click any project to preview live work.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="portfolio-tabs">
            {['All Works', 'Web Platforms', 'Commercials', 'Documentaries', '3D Motion / VFX', 'Short-Form Reels'].map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="portfolio-grid stagger-reveal">
            {filteredProjects.map((p) => (
              <article
                key={p.id}
                className={`project-card ${p.type}`}
                onClick={() => setModalVideo(p)}
              >
                <div className="project-media-wrap">
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <div className="project-gradient" />
                </div>

                <div className="project-badge-top">
                  <span className="badge-tag">
                    {p.url && <span className="live-pulse-dot" />}
                    {p.aspect}
                  </span>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge-duration live-link-pill"
                      onClick={(e) => e.stopPropagation()}
                      title={`Visit ${p.url}`}
                    >
                      <span>{p.url.replace('https://', '').replace('www.', '').replace(/\/$/, '')}</span>
                      <ArrowUpRight size={11} />
                    </a>
                  ) : (
                    <span className="badge-duration">
                      <Clock size={11} /> {p.duration}
                    </span>
                  )}
                </div>

                <div className="hover-play-btn">
                  {p.url ? (
                    <ArrowUpRight size={26} color="#05060a" />
                  ) : (
                    <Play size={24} fill="#05060a" style={{ marginLeft: 3 }} />
                  )}
                </div>

                <div className="project-info">
                  <div className="project-client">{p.client}</div>
                  <h3 className="project-title">{p.title}</h3>
                  <div className="project-tags">
                    {p.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* INTERACTIVE COLOR GRADING LAB (BEFORE / AFTER COMPARISON) */}
        <section id="color-lab" className="section-wrapper grading-lab">
          <div className="lab-container">
            <div className="lab-copy">
              <div className="section-kicker">
                <Sliders size={14} />
                <span>DAVINCI COLOR LABORATORY</span>
              </div>
              <h2 className="section-title">
                Before & After <em>Color Grading</em>
              </h2>
              <p>
                Drag the interactive slider below to witness the transformation from flat LOG sensor footage
                into rich, contrast-balanced cinematic mastery.
              </p>

              {/* LUT Selector Buttons */}
              <div className="lut-selector">
                <button
                  className={`lut-btn ${activeLut === 'kodak' ? 'active' : ''}`}
                  onClick={() => setActiveLut('kodak')}
                >
                  Kodak 2383 Film Print
                </button>
                <button
                  className={`lut-btn ${activeLut === 'teal' ? 'active' : ''}`}
                  onClick={() => setActiveLut('teal')}
                >
                  Blockbuster Teal & Orange
                </button>
                <button
                  className={`lut-btn ${activeLut === 'cyber' ? 'active' : ''}`}
                  onClick={() => setActiveLut('cyber')}
                >
                  Cyberpunk Cyan Look
                </button>
                <button
                  className={`lut-btn ${activeLut === 'noir' ? 'active' : ''}`}
                  onClick={() => setActiveLut('noir')}
                >
                  Silver Screen Noir (B&W)
                </button>
              </div>

              {/* Scopes simulated indicators */}
              <div className="scope-indicators">
                <div className="scope-box">
                  <div className="scope-title">Waveform IRE</div>
                  <div className="scope-value">0 - 1023 (HDR10)</div>
                </div>
                <div className="scope-box">
                  <div className="scope-title">Color Space</div>
                  <div className="scope-value">DaVinci Wide Gamut</div>
                </div>
                <div className="scope-box">
                  <div className="scope-title">Film Grain</div>
                  <div className="scope-value">35mm 500T Scanned</div>
                </div>
              </div>
            </div>

            {/* Split Screen Slider Box */}
            <div className="comparison-box">
              {/* Flat / LOG Layer */}
              <img
                src="/assets/video_editing.jpg"
                alt="Flat LOG Camera Profile"
                className="comp-img comp-flat"
              />

              {/* Graded Layer with Dynamic Width based on slider */}
              <div
                className={`comp-graded lut-${activeLut}`}
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="/assets/video_editing.jpg"
                  alt="Graded Master Profile"
                  style={{ width: '1000px' }}
                />
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(e.target.value)}
                className="comp-slider"
                aria-label="Color grade comparison slider"
              />

              {/* Badges */}
              <div className="comp-badge-left">
                GRADED: {activeLut.toUpperCase()}
              </div>
              <div className="comp-badge-right">
                RAW / S-LOG3
              </div>

              {/* Divider Handle */}
              <div className="comp-handle" style={{ left: `${sliderPos}%` }}>
                <Sliders size={18} />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES OFFERED */}
        <section id="services" className="section-wrapper">
          <div className="section-head">
            <div>
              <div className="section-kicker">
                <Sparkles size={14} />
                <span>WHAT WE DELIVER</span>
              </div>
              <h2 className="section-title">
                Full-spectrum <em className="hero-highlight">digital solutions.</em>
              </h2>
            </div>
            <p className="section-desc">
              From strategy and design to development and AI integration, we build digital experiences engineered for performance, usability, and business growth.
            </p>
          </div>

          <div className="services-grid stagger-reveal">
            {servicesList.map((s) => {
              const Icon = s.icon;
              return (
                <div className="service-box" key={s.title}>
                  <div className="service-top-row">
                    <div className="service-icon-box">
                      <Icon size={22} />
                    </div>
                    <span className="service-number">{s.num}</span>
                  </div>
                  <h3 className="service-name">{s.title}</h3>
                  <p className="service-text">{s.desc}</p>
                  <div className="service-features">
                    {s.features.map((f) => (
                      <span key={f}>{f}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ABOUT STUDIO SECTION */}
        <section id="about" className="section-wrapper about-section">
          <div className="section-head">
            <div>
              <div className="section-kicker">
                <Sparkles size={14} />
                <span>ABOUT CINEFORGE STUDIO</span>
              </div>
              <h2 className="section-title">
                We turn ideas into <em className="hero-highlight">digital experiences.</em>
              </h2>
            </div>
            <p className="section-desc">
              We’re a growing digital studio passionate about building modern websites, powerful web applications, and AI-powered solutions that help businesses bring their ideas to life.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-visual-card">
              <img
                src="/assets/experience.jpg"
                alt="CineForge Studio Workspace & Modern Digital Product Engineering"
                className="about-studio-img"
              />
              <div className="about-badge-overlay">
                <span className="about-badge-num">100%</span>
                <span className="about-badge-label">Tailored Digital Solutions</span>
              </div>
            </div>

            <div className="about-content">
              <h3>Good ideas deserve great execution.</h3>
              <p>
                At CineForge Studio, we combine creative thinking, modern web technologies, and a problem-solving mindset to build digital products that are functional, user-friendly, and designed around real business needs.
              </p>
              <p>
                Whether you’re starting a new business, building your online presence, or exploring AI-powered solutions, we aim to turn your vision into a practical digital product.
              </p>

              <div className="drives-us-wrap">
                <div className="drives-us-title">
                  <Sparkles size={16} />
                  <span>What Drives Us</span>
                </div>
                <div className="drives-us-grid stagger-reveal">
                  <div className="drive-item">
                    <div className="drive-item-head">
                      <Sparkles size={15} />
                      <span>Creative Thinking</span>
                    </div>
                    <p className="drive-item-desc">Fresh ideas and thoughtful digital experiences.</p>
                  </div>

                  <div className="drive-item">
                    <div className="drive-item-head">
                      <Code2 size={15} />
                      <span>Modern Development</span>
                    </div>
                    <p className="drive-item-desc">Building with modern tools and technologies.</p>
                  </div>

                  <div className="drive-item">
                    <div className="drive-item-head">
                      <Layers size={15} />
                      <span>Continuous Learning</span>
                    </div>
                    <p className="drive-item-desc">Improving our skills with every project.</p>
                  </div>

                  <div className="drive-item">
                    <div className="drive-item-head">
                      <CheckCircle2 size={15} />
                      <span>Client-Focused Approach</span>
                    </div>
                    <p className="drive-item-desc">Understanding your goals before building a solution.</p>
                  </div>
                </div>
              </div>

              <div className="about-cta-quote">
                Have an idea in mind? Let's build it together.
              </div>

              <div className="about-action">
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="btn primary"
                >
                  Start a Project <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4-STEP TIMELINE PROCESS */}
        <section id="process" className="section-wrapper process-section">
          <div className="section-head">
            <div>
              <div className="section-kicker">
                <Layers size={14} />
                <span>HOW WE BUILD</span>
              </div>
              <h2 className="section-title">
                From idea to <em className="hero-highlight">launch in 4 stages.</em>
              </h2>
            </div>
            <p className="section-desc">
              A clear, collaborative process that turns your vision into a functional digital product.
            </p>
          </div>

          <div className="timeline-grid stagger-reveal">
            {workflowSteps.map((step) => (
              <div className="timeline-step" key={step.num}>
                <span className="step-num-box">{step.num}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
                {step.tags && (
                  <div className="step-tags">
                    {step.tags.map((t) => (
                      <span key={t} className="step-tag-pill">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="process-bottom-cta">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="btn primary"
            >
              Start a Project <ArrowUpRight size={16} />
            </button>
          </div>
        </section>

        {/* OUR TECHNOLOGY STACK */}
        <section id="tech" className="section-wrapper" style={{ position: 'relative' }}>
          <span id="gear" style={{ position: 'absolute', top: '-80px', visibility: 'hidden' }} />
          <div className="section-head">
            <div>
              <div className="section-kicker">
                <Code2 size={14} />
                <span>OUR TECHNOLOGY STACK</span>
              </div>
              <h2 className="section-title">
                Modern <em className="hero-highlight">tools. Meaningful solutions.</em>
              </h2>
            </div>
            <p className="section-desc">
              We use modern development technologies and AI tools to build responsive websites, scalable applications, and intelligent digital experiences.
            </p>
          </div>

          <div className="gear-grid stagger-reveal">
            <div className="gear-category">
              <div className="gear-cat-header">
                <Layout size={18} />
                <span>Frontend Development</span>
              </div>
              <ul className="gear-list">
                <li>React.js</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
                <li>HTML5 & CSS3</li>
              </ul>
            </div>

            <div className="gear-category">
              <div className="gear-cat-header">
                <Layers size={18} />
                <span>Backend & Databases</span>
              </div>
              <ul className="gear-list">
                <li>Node.js & Express.js</li>
                <li>REST APIs</li>
                <li>MongoDB</li>
                <li>MySQL & SQLite</li>
                <li>Authentication & Authorization</li>
              </ul>
            </div>

            <div className="gear-category">
              <div className="gear-cat-header">
                <Bot size={18} />
                <span>AI & Automation</span>
              </div>
              <ul className="gear-list">
                <li>AI API Integration</li>
                <li>LLM-Powered Applications</li>
                <li>AI Chatbots</li>
                <li>Workflow Automation with n8n</li>
                <li>Intelligent Business Tools</li>
              </ul>
            </div>

            <div className="gear-category">
              <div className="gear-cat-header">
                <Gauge size={18} />
                <span>Development & Deployment</span>
              </div>
              <ul className="gear-list">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Vercel</li>
                <li>Postman</li>
                <li>Responsive Testing & Debugging</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section id="faqs" className="section-wrapper faqs-section">
          <div className="section-head">
            <div>
              <div className="section-kicker">
                <HelpCircle size={14} />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="section-title">
                Everything you need to <em className="hero-highlight">know.</em>
              </h2>
            </div>
            <p className="section-desc">
              Clear answers about project timelines, pricing, communication, revisions, and launching your digital product.
            </p>
          </div>

          <div className="faqs-accordion stagger-reveal">
            {faqsList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`faq-card ${isOpen ? 'active' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <button className="faq-question-btn" aria-expanded={isOpen} type="button">
                    <span className="faq-num">0{idx + 1}</span>
                    <span className="faq-question-text">{faq.q}</span>
                    <span className={`faq-chevron ${isOpen ? 'rotated' : ''}`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* NEWSLETTER & PROJECT INTAKE */}
        <section id="contact" className="section-wrapper newsletter-section">
          <div className="newsletter-grid">
            <div className="newsletter-info-col">
              <div className="section-kicker">
                <Sparkles size={14} />
                <span>PROJECT INTAKE & ENGINEERING DISPATCH</span>
              </div>
              <h2 className="section-title">
                Turn bold ideas into <br />
                <em className="hero-highlight">digital reality.</em>
              </h2>
              <p className="newsletter-lead-p">
                Submit your project requirements, references, or specifications below. Every inquiry is reviewed by our engineering leads within 24 hours — complete with technical feasibility and scoping.
              </p>

              <div className="newsletter-perks stagger-reveal">
                <div className="nl-perk-item">
                  <div className="nl-perk-icon">
                    <Code2 size={16} />
                  </div>
                  <div>
                    <strong>Rapid Scoping & Architecture Blueprint</strong>
                    <span>24-hour turnaround on system architecture, tech stack recommendations, and milestone plans.</span>
                  </div>
                </div>

                <div className="nl-perk-item">
                  <div className="nl-perk-icon">
                    <Bot size={16} />
                  </div>
                  <div>
                    <strong>Production Web & AI Engineering</strong>
                    <span>React, Next.js, robust Node APIs, custom LLM workflows, and high-conversion UI/UX craft.</span>
                  </div>
                </div>

                <div className="nl-perk-item">
                  <div className="nl-perk-icon">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <strong>CineForge Dispatch Included</strong>
                    <span>Receive our private bi-weekly engineering breakdowns, performance case studies, and UI motion blueprints.</span>
                  </div>
                </div>
              </div>

              {/* Newsletter Community & Guarantees Card */}
              <div className="newsletter-community-card">
                <div className="community-avatars-row">
                  <div className="avatar-group">
                    <span className="avatar av-1">CF</span>
                    <span className="avatar av-2">AI</span>
                    <span className="avatar av-3">JS</span>
                    <span className="avatar av-4">+</span>
                  </div>
                  <div className="community-stats-text">
                    <strong>2,500+ Digital Builders Subscribed</strong>
                    <span>Engineers, founders & designers from fast-growing tech teams</span>
                  </div>
                </div>
                <div className="newsletter-guarantees-row">
                  <span><Check size={13} /> 24hr response</span>
                  <span><Check size={13} /> NDA-protected</span>
                  <span><Check size={13} /> Zero spam</span>
                  <span><Check size={13} /> 1-click unsubscribe</span>
                </div>
              </div>
            </div>

            {/* Newsletter & Project Intake Card */}
            <div className="newsletter-card-wrap">
              <ProjectIntakeCard />
            </div>
          </div>
        </section>
      </main>
      )}

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              href="#hero"
              className="nav-brand"
              onClick={(e) => {
                e.preventDefault();
                if (legalPage) {
                  returnHome('#hero');
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              style={{ textDecoration: 'none' }}
              title="CineForge Studio"
            >
              <div className="brand-icon-box">
                <Film size={18} />
              </div>
              <div className="brand-text">
                CINE<span>FORGE</span>
              </div>
              <span className="brand-badge">STUDIO</span>
            </a>
            <p>
              We turn ambitious ideas into digital experiences through modern web development and AI solutions.
            </p>
          </div>

          <div className="footer-links-group stagger-reveal">
            {/* Explore */}
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="#work" onClick={(e) => { if (legalPage) { e.preventDefault(); returnHome('#work'); } }}>Our Work</a></li>
                <li><a href="#about" onClick={(e) => { if (legalPage) { e.preventDefault(); returnHome('#about'); } }}>About Us</a></li>
                <li><a href="#process" onClick={(e) => { if (legalPage) { e.preventDefault(); returnHome('#process'); } }}>Our Process</a></li>
                <li><a href="#faqs" onClick={(e) => { if (legalPage) { e.preventDefault(); returnHome('#faqs'); } }}>FAQs</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services" onClick={(e) => { if (legalPage) { e.preventDefault(); returnHome('#services'); } }}>Web Development</a></li>
                <li><a href="#services" onClick={(e) => { if (legalPage) { e.preventDefault(); returnHome('#services'); } }}>UI/UX Design</a></li>
                <li><a href="#services" onClick={(e) => { if (legalPage) { e.preventDefault(); returnHome('#services'); } }}>AI Integration</a></li>
                <li><a href="#services" onClick={(e) => { if (legalPage) { e.preventDefault(); returnHome('#services'); } }}>E-Commerce</a></li>
              </ul>
            </div>

            {/* Technology */}
            <div className="footer-col">
              <h4>Technology</h4>
              <ul>
                <li><a href="#tech" onClick={(e) => { if (legalPage) { e.preventDefault(); returnHome('#tech'); } }}>React & Next.js</a></li>
                <li><a href="#tech" onClick={(e) => { if (legalPage) { e.preventDefault(); returnHome('#tech'); } }}>Node.js & APIs</a></li>
                <li><a href="#tech" onClick={(e) => { if (legalPage) { e.preventDefault(); returnHome('#tech'); } }}>AI & Automation</a></li>
                <li><a href="#tech" onClick={(e) => { if (legalPage) { e.preventDefault(); returnHome('#tech'); } }}>Cloud & Deployment</a></li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="footer-col">
              <h4>Get in Touch</h4>
              <ul>
                <li><a href="#contact" onClick={(e) => { if (legalPage) { e.preventDefault(); returnHome('#contact'); } }}>Contact Us</a></li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      if (legalPage) {
                        returnHome('#contact');
                      }
                      setIsDemoModalOpen(true);
                    }}
                    className="footer-link-btn"
                  >
                    Start a Project
                  </button>
                </li>
                <li><a href="mailto:hello@cineforge.studio">Email Us</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#/privacy" onClick={(e) => { e.preventDefault(); navigateLegal('privacy'); }}>Privacy Policy</a></li>
                <li><a href="#/terms" onClick={(e) => { e.preventDefault(); navigateLegal('terms'); }}>Terms of Service</a></li>
                <li><a href="#/cookies" onClick={(e) => { e.preventDefault(); navigateLegal('cookies'); }}>Cookie Policy</a></li>
                <li><a href="#/refund" onClick={(e) => { e.preventDefault(); navigateLegal('refund'); }}>Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 CINEFORGE STUDIO. ALL RIGHTS RESERVED.</span>
          <div className="footer-bottom-legal-links">
            <a href="#/privacy" onClick={(e) => { e.preventDefault(); navigateLegal('privacy'); }}>Privacy Policy</a>
            <span>•</span>
            <a href="#/terms" onClick={(e) => { e.preventDefault(); navigateLegal('terms'); }}>Terms of Service</a>
            <span>•</span>
            <a href="#/cookies" onClick={(e) => { e.preventDefault(); navigateLegal('cookies'); }}>Cookie Policy</a>
            <span>•</span>
            <a href="#/refund" onClick={(e) => { e.preventDefault(); navigateLegal('refund'); }}>Refund Policy</a>
          </div>
        </div>
      </footer>

      {/* VIDEO MODAL LIGHTBOX / THEATER */}
      {modalVideo && (
        <div className="modal-overlay" onClick={() => setModalVideo(null)}>
          <div className="theater-modal" onClick={(e) => e.stopPropagation()}>
            <div className="theater-header">
              <div className="theater-title-info">
                <span style={{ fontWeight: 700 }}>{modalVideo.title}</span>
                <span style={{ opacity: 0.9 }}>• {modalVideo.client || modalVideo.category}</span>
              </div>
              <button
                className="theater-close-btn"
                onClick={() => setModalVideo(null)}
                aria-label="Close video player"
              >
                <X size={20} />
              </button>
            </div>

            {modalVideo.url ? (
              <div className="theater-web-wrapper">
                <div className="browser-address-bar">
                  <div className="browser-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <div className="browser-url-pill">
                    <span className="browser-lock">🔒</span>
                    <span className="browser-url-text">{modalVideo.url}</span>
                  </div>
                  <a
                    href={modalVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="browser-visit-btn"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
                <div className="theater-web-preview">
                  <img src={modalVideo.img} alt={modalVideo.title} />
                  <div className="theater-web-overlay-cta">
                    <div className="theater-web-info">
                      <span className="tech-badge">ENTERPRISE NEXT.JS WEB PLATFORM</span>
                      <h3>{modalVideo.title}</h3>
                      <p>{modalVideo.summary}</p>
                    </div>
                    <a
                      href={modalVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theater-launch-cta"
                    >
                      <Sparkles size={16} />
                      <span>Launch Live Platform ({modalVideo.url.replace('https://', '')})</span>
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="theater-video-wrapper">
                <video autoPlay controls playsInline src="/assets/hero.mp4">
                  Your browser does not support HTML5 video.
                </video>
              </div>
            )}

            <div className="theater-hud-bar">
              {modalVideo.url ? (
                <>
                  <span>FRAMEWORK: <strong>NEXT.JS 15 & REACT</strong></span>
                  <span>CLIENT: <strong>{(modalVideo.client || '').toUpperCase()}</strong></span>
                  <span>STATUS: <strong>PRODUCTION LIVE 🟢</strong></span>
                </>
              ) : (
                <>
                  <span>COLOR: <strong>CALIBRATED DCI-P3</strong></span>
                  <span>AUDIO: <strong>STEREO MASTER (-14 LUFS)</strong></span>
                  <span>SOURCE: <strong>4K PRORES 422HQ</strong></span>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* NEWSLETTER-THEMED DEMO PROJECT MODAL */}
      {isDemoModalOpen && (
        <div className="newsletter-modal-overlay" onClick={closeDemoModal}>
          <div
            className="newsletter-modal-container intake-modal-expanded"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="modal-close-btn"
              onClick={closeDemoModal}
              aria-label="Close modal"
              type="button"
            >
              <X size={20} />
            </button>

            {/* Glowing top line */}
            <div className="modal-glow-line" />

            <ProjectIntakeCard isModal={true} onClose={closeDemoModal} />
          </div>
        </div>
      )}

      {/* REQUEST A CALLBACK MODAL */}
      <RequestCallbackModal
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
      />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
