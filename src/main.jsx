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
  ChevronLeft,
  ChevronRight,
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
  ArrowRight,
  FileText,
  Cookie,
  Scale,
  RefreshCw,
  AlertCircle,
  UploadCloud,
  Paperclip,
  Phone,
  PhoneCall,
  User,
  Trash2,
  Lock,
  ExternalLink,
  Cpu,
  Database,
  Terminal,
  Workflow,
  Globe,
  Search,
  TrendingUp,
  BarChart3,
  Image,
  FileSearch,
  Network,
  Zap,
  Activity,
  Server,
  Cloud,
  GitBranch,
  Building2,
  CalendarCheck,
  Briefcase,
  Smartphone
} from 'lucide-react';
import './styles.css';
import BlogView from './components/blog/BlogView';
import ArticleDetailView from './components/blog/ArticleDetailView';
import AboutCompanyView from './components/about/About Company/aboutcompnayview';
import ContactView from './components/about/contact/ContactView';
import BookProjectView from './components/about/Book a project/BookProjectView';
import CareersView from './components/career/CareersView';
import ProcessView from './components/Process/ProcessView';
import ProcessSection from './components/Process/src/components/Process.jsx';
import ServicesMegaMenu from './components/services/ServicesMegaMenu';
import ServicesIndexView from './components/services/ServicesIndexView';
import ServiceDetailView from './components/services/ServiceDetailView';
import { serviceCategories, allServicesDetail } from './components/services/servicesData';
import './styles/services.css';
import BrandReveal from './components/brand/BrandReveal';
import InteractiveFooterTypography from './components/footer/InteractiveFooterTypography';
import ServicesMarquee from './components/services/ServicesMarquee';
import FooterSocialIcons from './components/footer/FooterSocialIcons';
import VideoHeroSection from './components/hero/VideoHeroSection';
import PreviousHeroSection from './components/hero/PreviousHeroSection';
import { useMagneticButtons } from './hooks/useMagneticButtons';
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';

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

// Nav Rolling Text: Smooth Dual-Layer Vertical Slide Animation on Hover
function NavRollingText({ text, className = '' }) {
  return (
    <span className={`nav-roll-box ${className}`.trim()} aria-label={text}>
      <span className="nav-roll-primary">{text}</span>
      <span className="nav-roll-secondary" aria-hidden="true">{text}</span>
    </span>
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
    video: '/assets/asa_epc.mp4',
    img: '/assets/asa_epc.jpg',
    tags: ['Next.js 15', 'Solar EPC', 'Enterprise Web', 'High Performance', 'DPIIT Recognized'],
    summary: 'DPIIT-recognized Solar EPC company trusted by L&T Construction, Bajaj & KEC. High-performance Next.js web application built for 100+ projects across India & UAE.',
    revealText: 'DPIIT-RECOGNIZED • 100+ UTILITY SOLAR DEPLOYMENTS'
  },
  {
    id: 'rathore-construction',
    title: 'Rathore Construction & Earthmovers — Heavy Equipment Platform',
    category: 'Web Platforms',
    client: 'Rathore Construction & Earthmovers (Betul, MP)',
    duration: 'Live Platform',
    type: 'featured',
    aspect: 'Next.js • TailwindCSS',
    url: 'https://rathore-construction-earthmovers.vercel.app',
    video: '/assets/rathore_construction.mp4',
    img: '/assets/rathore_construction.jpg',
    tags: ['Next.js', 'JCB 3DX Rental', 'Civil Infrastructure', 'Earthmoving', 'Vercel Fast'],
    summary: 'Heavy equipment rental & earthmoving solutions platform for JCB excavation, roadwork, rock breaking, and pipeline infrastructure across Madhya Pradesh.',
    revealText: 'CIVIL INFRASTRUCTURE & HEAVY JCB FLEET RENTALS'
  },
  {
    id: 'doctor-appointment-booking',
    title: 'Doctor Appointment Booking System',
    category: 'Full-Stack Web Application',
    client: 'Appointy • Full-Stack Web Application',
    duration: 'Live Platform',
    type: 'featured',
    aspect: 'React • Tailwind CSS • Razorpay',
    url: 'https://doctor-appointment-nine-brown.vercel.app/',
    video: '/assets/doctor_appointment.mp4',
    img: '/assets/doctor_appointment.jpg',
    tags: ['React', 'Tailwind CSS', 'Razorpay', 'Doctor Scheduling', 'REST API'],
    summary: 'Effortless healthcare scheduling web application enabling patients to browse specialists, book verified doctor consultations, manage appointments, and complete secure payments.',
    revealText: 'REAL-TIME DOCTOR SCHEDULING & SECURE RAZORPAY'
  }
];

// Interactive "From Idea to Digital Experience" Showcase Data
const digitalExperienceData = [
  {
    id: 'web-dev',
    category: 'Web Development',
    kicker: 'MODERN WEB ARCHITECTURE',
    title: 'High-Performance Next.js Web Platforms',
    tagline: 'From concept wireframes to high-converting production experiences',
    description:
      'Ultra-fast Next.js web platforms engineered with hybrid SSR, static edge caching, and sub-second TTFB for mission-critical digital scale.',
    image: '/assets/exp_web_platforms.jpg',
    urlLabel: 'rovaware.com/solutions/web-platforms',
    techStack: ['Next.js 15', 'React 19', 'TailwindCSS', 'TypeScript', 'Edge Runtime', 'Vercel Fast'],
    specs: [
      { label: 'Render Architecture', value: 'Hybrid SSR & Static Edge' },
      { label: 'Performance Benchmark', value: '100% Lighthouse Score' },
      { label: 'Core Web Vitals', value: 'Sub-50ms TTFB Optimized' }
    ],
    architectureTitle: 'Next.js Hybrid Rendering & Global Edge Cache Pipeline',
    architectureNodes: [
      { name: 'Edge CDN & DNS Routing', detail: 'Global Anycast Edge Network with sub-30ms TTFB' },
      { name: 'Hybrid Rendering Engine', detail: 'SSR dynamic routes with ISR cached static assets' },
      { name: 'Zero-JS Component Hydration', detail: 'Optimized bundle size with streaming server components' }
    ],
    highlights: [
      'Lighthouse 100% performance & accessibility benchmarks',
      'Dynamic OpenGraph social previews and structured JSON-LD schema',
      'Responsive multi-breakpoint design with fluid typography'
    ]
  },
  {
    id: 'web-apps',
    category: 'Web Applications',
    kicker: 'ENTERPRISE SAAS & CLOUD SYSTEMS',
    title: 'Real-Time Interactive Dashboards & SaaS Portals',
    tagline: 'From system architecture to reactive data visualization',
    description:
      'Enterprise-grade SaaS applications featuring reactive WebSocket telemetry, real-time monitoring dashboards, and scalable microservices.',
    image: '/assets/exp_saas_dashboard.jpg',
    urlLabel: 'cloud.rovaware.com/analytics',
    techStack: ['React', 'Node.js', 'FastAPI', 'PostgreSQL', 'WebSockets', 'Docker & Kubernetes'],
    specs: [
      { label: 'Data Sync Engine', value: 'Real-Time WebSockets' },
      { label: 'Throughput Capacity', value: 'High-Concurrency Ready' },
      { label: 'Security Standard', value: 'OAuth 2.0 & Role-Based RBAC' }
    ],
    architectureTitle: 'Reactive WebSocket & High-Concurrency Data Pipeline',
    architectureNodes: [
      { name: 'API Gateway & Auth Proxy', detail: 'OAuth 2.0 / JWT token validation with granular RBAC' },
      { name: 'Event Bus & WebSocket Layer', detail: 'Bi-directional real-time telemetry streaming' },
      { name: 'PostgreSQL & In-Memory Cache', detail: 'Read-replica pooling with sub-millisecond Redis cache' }
    ],
    highlights: [
      'Live infrastructure health, latency, and telemetry charts',
      'Multi-dimensional filtering and instant client-side data search',
      'Adaptive high-contrast dark & light theme architecture'
    ]
  },
  {
    id: 'ai-solutions',
    category: 'AI Solutions',
    kicker: 'INTELLIGENT AGENTS & NEURAL WORKFLOWS',
    title: 'Autonomous AI Agents & Vector Retrieval Engines',
    tagline: 'From prompt engineering to production AI deployments',
    description:
      'Production AI systems integrating multi-node agent tool calling, vector search RAG, and zero-latency streaming token inference.',
    image: '/assets/exp_ai_architecture.jpg',
    urlLabel: 'ai.rovaware.com/pipeline-engine',
    techStack: ['Python', 'LangChain', 'Llama 3 / OpenAI', 'Qdrant Vector DB', 'FastAPI', 'Streaming SSE'],
    specs: [
      { label: 'Reasoning Architecture', value: 'Agentic Tool-Calling Workflows' },
      { label: 'Vector Knowledge Store', value: 'Dense Embeddings & RAG' },
      { label: 'Inference Delivery', value: 'Zero-Latency SSE Token Streaming' }
    ],
    architectureTitle: 'Multi-Node Agentic Execution & Vector RAG Pipeline',
    architectureNodes: [
      { name: 'Semantic Ingestion & Chunker', detail: 'Document parsing with dense vector embeddings' },
      { name: 'HNSW Vector Knowledge Store', detail: 'Vector index with cosine similarity search' },
      { name: 'Autonomous Reasoning Engine', detail: 'Multi-step agent tool calling with streaming token output' }
    ],
    highlights: [
      'Multi-node visual neural workflow execution canvas',
      'Zero-latency streaming token inference via Server-Sent Events',
      'Context-aware memory retention and automated self-correction'
    ]
  }
];

// Services Data
const servicesList = [
  {
    icon: Layout,
    num: '01',
    title: 'UI/UX Design',
    kicker: 'INTERFACE SYSTEMS',
    image: '/images/service-design.jpg',
    desc: 'Intuitive design systems, responsive wireframes, and fluid user experiences designed to elevate your brand presence and maximize user engagement.',
    features: ['Design Systems', 'Figma Wireframing', 'Interactive Prototypes', 'Conversion UX'],
    slug: 'ui-ux-design',
    revealText: 'HIGH-CONVERSION DESIGN SYSTEMS & PROTOTYPES'
  },
  {
    icon: Code2,
    num: '02',
    title: 'Custom Software',
    kicker: 'MISSION-CRITICAL CLOUD',
    image: '/images/service-cloud.jpg',
    desc: 'Tailor-made software architectures, scalable backend platforms, and bespoke microservices engineered for high security and mission-critical uptime.',
    features: ['High-Concurrency APIs', 'Distributed Architecture', 'Custom Tooling', 'Enterprise Security'],
    slug: 'saas-scaling',
    revealText: 'MISSION-CRITICAL BACKENDS & MICROSERVICES'
  },
  {
    icon: Globe,
    num: '03',
    title: 'Web Development',
    kicker: 'HIGH-PERFORMANCE WEB',
    image: '/images/service-web.jpg',
    desc: 'Blazing-fast, SEO-optimized web platforms built with modern React, Next.js, and headless architectures tailored for sustained enterprise growth.',
    features: ['Sub-Second Speeds', 'Headless CMS', 'Responsive Core', 'SEO & Core Web Vitals'],
    slug: 'web-development',
    revealText: 'SUB-SECOND NEXT.JS PLATFORMS & EDGE CACHING'
  },
  {
    icon: Smartphone,
    num: '04',
    title: 'App Development',
    kicker: 'MOBILE EXPERIENCES',
    image: '/images/service-app-dev.jpg',
    desc: 'Cross-platform and native iOS & Android applications with fluid 60fps animations, offline-first reliability, and seamless device-level integration.',
    features: ['React Native & Flutter', 'Native Device APIs', 'Offline-First Sync', 'Store Deployment'],
    slug: 'android-development',
    revealText: 'NATIVE 60FPS MOBILE APPS & STORE LAUNCHES'
  },
  {
    icon: Cpu,
    num: '05',
    title: 'AI Solutions',
    kicker: 'INTELLIGENT SYSTEMS',
    image: '/images/service-ai.jpg',
    desc: 'Intelligent AI-powered workflows, Large Language Model integrations, autonomous agents, and vector search pipelines engineered for operational leverage.',
    features: ['LLM & Agent Pipelines', 'Vector Search RAG', 'Autonomous Workflows', 'Custom AI Models'],
    slug: 'ai-development',
    revealText: 'AUTONOMOUS AGENTS & ENTERPRISE VECTOR RAG'
  },
  {
    icon: Zap,
    num: '06',
    title: 'Business Automation',
    kicker: 'AUTOMATED PIPELINES',
    image: '/images/service-automation.jpg',
    desc: 'End-to-end workflow automation, intelligent CRM pipelines, and real-time data synchronizations that eliminate operational bottlenecks.',
    features: ['Workflow Automation', 'CRM Data Pipelines', 'Webhook Integrations', 'Real-Time Telemetry'],
    slug: 'devops-cloud',
    revealText: 'ZERO-TOUCH ETL PIPELINES & WEBHOOK AUTOMATION'
  }
];

// Workflow Steps
const workflowSteps = [
  {
    num: 'STAGE 01',
    title: 'Discovery & Planning',
    desc: 'We understand your business goals, target audience, project requirements, and desired outcomes before defining the right solution.',
    tags: ['Requirements', 'Goals', 'Scope', 'Roadmap'],
    deliverables: [
      'Strategic Project Brief & Objective Mapping',
      'Technical Architecture & Technology Selection',
      'Milestone Timeline & Scope Estimation'
    ]
  },
  {
    num: 'STAGE 02',
    title: 'Design & Experience',
    desc: 'We create modern, intuitive, and responsive interfaces that align with your brand and make your product easy to use.',
    tags: ['UI/UX Design', 'Wireframes', 'Prototypes', 'Responsive Layouts'],
    deliverables: [
      'High-Fidelity Wireframes & User Flows',
      'Interactive Design Prototypes in Figma',
      'Reusable Component Design System'
    ]
  },
  {
    num: 'STAGE 03',
    title: 'Development & Testing',
    desc: 'We build your website, application, or AI solution using suitable technologies, then test functionality and fix issues before launch.',
    tags: ['Frontend', 'Backend', 'AI Integration', 'Quality Testing'],
    deliverables: [
      'Full-Stack Modular Codebase (React/Next.js/Node)',
      'Secure REST/GraphQL API & Database Integration',
      'Cross-Device Responsiveness & QA Stress Tests'
    ]
  },
  {
    num: 'STAGE 04',
    title: 'Launch & Handover',
    desc: 'We deploy your finished product, check its performance, and provide the project files and handover guidance agreed upon for your project.',
    tags: ['Deployment', 'Final Review', 'Source Code', 'Handover'],
    deliverables: [
      'Production Cloud Server Deployment & SSL Setup',
      'Core Web Vitals & Search Engine SEO Verification',
      'Complete Source Code Repository & Documentation'
    ]
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

// Legal Policies Data tailored for Rovaware Studio
const legalPoliciesData = {
  privacy: {
    id: 'privacy',
    badge: 'Data Protection & Privacy',
    title: 'Privacy Policy',
    lastUpdated: 'October 18, 2026',
    lead: 'This Privacy Policy explains how Rovaware Studio collects, uses, and safeguards your information when you visit rovaware.com, request project scoping, or collaborate with our web development, web application, and AI integration team.',
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
          'Payment Processing: For demo reservations, transactions occur directly via standard Indian UPI banking rails (PhonePe, Google Pay, Paytm, or BHIM). Rovaware Studio never captures or stores bank credentials, debit/credit card numbers, or UPI PINs.'
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
        content: 'You have the right to request access to the personal data we hold about you, request corrections, or request complete deletion of your submitted project briefs from our active records. For any privacy-related questions or data deletion requests, email our engineering lead directly at hello@rovaware.com.'
      }
    ]
  },
  terms: {
    id: 'terms',
    badge: 'Client Engagement Terms',
    title: 'Terms of Service',
    lastUpdated: 'October 18, 2026',
    lead: 'These Terms of Service govern all professional engagements between Rovaware Studio and clients seeking custom responsive web development, web applications, and artificial intelligence integrations.',
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
        content: 'Rovaware Studio provides professional digital engineering services, including custom responsive websites, full-stack web applications (React, Next.js, Node.js), e-commerce systems, API integrations, and artificial intelligence solutions (LLM integration, smart automation, n8n workflows). The specific deliverables, milestones, pricing, and deadlines for any engagement are defined in the written project proposal or statement of work mutually agreed upon prior to development.'
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
        content: 'Upon receipt of full and final payment for the project, all intellectual property rights to the custom source code, design layouts, graphics, and unique digital assets created specifically for the client are transferred unconditionally to the client. Rovaware Studio retains ownership of proprietary developer boilerplates, tools, and general knowledge frameworks, and reserves the right to display completed project screenshots and public links in our studio portfolio unless covered under an explicit Non-Disclosure Agreement (NDA).'
      },
      {
        index: '05',
        title: 'Warranties & Technical Limitations',
        content: 'Rovaware Studio builds and tests software using modern coding standards and responsive practices across major desktop and mobile browsers. However, we cannot warrant uninterrupted operation against external events outside our reasonable control, including third-party cloud hosting disruptions, breaking changes introduced by external API vendors (e.g. OpenAI or payment processors), or unauthorized modifications made to the codebase after official handover.'
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
    lead: 'This Cookie Policy explains how Rovaware Studio utilizes browser storage and cookies to provide an intuitive, high-performance web experience when navigating rovaware.com.',
    icon: Cookie,
    highlight: {
      title: 'Zero Third-Party Advertising Trackers',
      text: 'We respect your digital privacy. Rovaware Studio does NOT use invasive marketing cookies, Facebook/Meta tracking pixels, Google AdSense trackers, or cross-site commercial profiling scripts.',
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
        title: 'How Rovaware Studio Uses Cookies',
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
        content: 'Unlike many commercial websites, Rovaware Studio does not participate in advertising networks or behavioral targeting:',
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
      text: 'The ₹499 project demo reservation fee is 100% credited against your final project invoice if you proceed with Rovaware Studio, or 100% refunded to your original UPI account upon request if we do not move forward. Completely risk-free.',
      green: true
    },
    sections: [
      {
        index: '01',
        title: '₹499 Project Reservation & Demo Deposit',
        content: 'To reserve dedicated engineering time and prioritize your project discovery session, clients may submit a nominal ₹499 reservation deposit via PhonePe or UPI. Our guarantee on this deposit is simple and absolute:',
        list: [
          'Credited to Project Invoice: If you choose to proceed with Rovaware Studio for your website, web application, or AI integration, the entire ₹499 fee is deducted directly from your final project bill.',
          '100% Full Refund: If after our discovery call you choose not to proceed, or if Rovaware Studio determines that we cannot accommodate your required scope or timeline, the ₹499 deposit will be refunded in full to your original UPI payment account within 3 to 5 business days upon request.'
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
        content: 'To initiate a cancellation or request a refund under our deposit guarantee, please email hello@rovaware.com with your full name, project name, and UPI transaction reference number. Our team will review and process your request within 3 to 5 business days, and the funds will be transferred directly to your originating UPI account.'
      }
    ]
  }
};

// Legal Modal Popup Dialog Component
function LegalModal({ isOpen, activeTab, onSelectTab, onClose, onOpenDemo }) {
  const modalBodyRef = useRef(null);

  useEffect(() => {
    if (modalBodyRef.current) {
      modalBodyRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  if (!isOpen) return null;

  const policy = legalPoliciesData[activeTab] || legalPoliciesData.privacy;
  const PolicyIcon = policy.icon;

  return (
    <div
      className="legal-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="legal-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Glowing top line */}
        <div className="modal-glow-line" />

        {/* Modal Header */}
        <div className="legal-modal-header">
          <div className="legal-modal-title-area">
            <div className="legal-kicker-row">
              <div className="legal-badge">
                <PolicyIcon size={12} />
                <span>{policy.badge}</span>
              </div>
              <span className="legal-last-updated">Last Updated: {policy.lastUpdated}</span>
            </div>
            <h2 id="legal-modal-title" className="legal-modal-title">{policy.title}</h2>
          </div>

          <button
            type="button"
            className="legal-modal-close-btn"
            onClick={onClose}
            aria-label="Close legal modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Policy Switching Tabs Bar */}
        <nav className="legal-tabs-bar legal-modal-tabs" aria-label="Legal policies navigation">
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
            <span>Refund Policy</span>
          </button>
        </nav>

        {/* Scrollable Modal Body */}
        <div className="legal-modal-body" ref={modalBodyRef}>
          <p className="legal-lead-text">{policy.lead}</p>

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
              <p>Reach out directly to Rovaware Studio. We respond to all inquiries within 24 hours.</p>
            </div>
            <div className="legal-contact-actions">
              <a href="mailto:hello@rovaware.com" className="legal-email-btn">
                <Mail size={15} />
                <span>hello@rovaware.com</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenDemo();
                }}
                className="btn-nav-cta"
                style={{ padding: '8px 16px', fontSize: 13 }}
              >
                Start a Project <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="legal-modal-footer">
          <div className="legal-footer-note">
            <ShieldCheck size={14} color="#38BDF8" />
            <span>Official Legal Documentation • Rovaware Studio</span>
          </div>
          <button type="button" className="legal-close-action-btn" onClick={onClose}>
            Close Document
          </button>
        </div>
      </div>
    </div>
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
      '🚀 *New Project Inquiry — Rovaware Studio*',
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
      messageLines.push('📬 *Rovaware Dispatch:* Subscribed');
    }

    messageLines.push('━━━━━━━━━━━━━━━━━━━━━');
    messageLines.push('⚡ _Submitted via Rovaware Web Platform_');

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
        <h3 className="nl-card-title">Start Your Project With Rovaware</h3>
        <p className="nl-card-subtitle">
          Submit your requirements, references, and specifications below. We provide high-performance engineering & private weekly tech dispatches.
        </p>
      </div>

      {submitted ? (
        <div className="nl-success-box">
          <div className="nl-success-icon" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.4)', color: '#38BDF8' }}>
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
              <span className="label">Rovaware Dispatch</span>
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
              Also subscribe me to <strong>Rovaware Dispatch</strong> (bi-weekly engineering deep-dives & AI teardowns. Zero spam.)
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

// Request A Callback Modal Component (Accurately styled to screenshot)
function RequestCallbackModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryFor, setEnquiryFor] = useState('Web Development');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const messageLines = [
      '📞 *NEW CALLBACK REQUEST — ROVAWARE STUDIO*',
      '━━━━━━━━━━━━━━━━━━━━━',
      `👤 *Name:* ${name}`,
      `📧 *Email:* ${email || 'Not provided'}`,
      `📱 *Phone no.:* +91 ${phone}`,
      `🎯 *Enquiry For:* ${enquiryFor}`,
      `💬 *Details:* ${message || 'No additional message'}`,
      '━━━━━━━━━━━━━━━━━━━━━',
      '⚡ _Please initiate callback at the earliest convenience._'
    ];

    const url = `https://api.whatsapp.com/send?phone=${STUDIO_WHATSAPP_NUMBER}&text=${encodeURIComponent(messageLines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setEnquiryFor('Web Development');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div className="callback-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="callback-modal-box callback-modal-reference" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="callback-close-btn"
          onClick={onClose}
          aria-label="Close callback modal"
        >
          <X size={18} />
        </button>

        <div className="callback-modal-header text-center">
          <h3 className="callback-title">Request a Callback</h3>
          <p className="callback-subtitle">
            Fill the form below to request a callback from our team.
          </p>
        </div>

        {submitted ? (
          <div className="callback-success-state">
            <div className="callback-success-icon">
              <CheckCircle2 size={36} color="#38BDF8" />
            </div>
            <h4>Callback Request Dispatched!</h4>
            <p>
              Thank you, <strong>{name}</strong>. Your callback request has been logged and sent to our team via WhatsApp. We will reach you on <strong>+91 {phone}</strong> shortly.
            </p>
            <div className="callback-direct-call" style={{ marginTop: '16px' }}>
              <span>Need immediate assistance?</span>
              <a href="tel:+919752264618" className="callback-tel-btn">
                <Phone size={14} /> Call Directly: +91 97522 64618
              </a>
            </div>
            <div style={{ display: 'flex', gap: 10, width: '100%', marginTop: 20 }}>
              <button
                type="button"
                onClick={handleReset}
                className="btn ghost"
                style={{ flex: 1, padding: '11px 16px', fontSize: 13, justifyContent: 'center' }}
              >
                New Request
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn primary"
                style={{ flex: 1, padding: '11px 16px', fontSize: 13, justifyContent: 'center' }}
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="callback-form-v2">
            {/* Field 1: Name */}
            <div className="callback-field-v2">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your Name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Field 2: Email */}
            <div className="callback-field-v2">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your Email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Field 3: Phone no. */}
            <div className="callback-field-v2">
              <label>Phone no.</label>
              <div className="callback-phone-input-wrap">
                <span className="callback-country-flag">
                  <span role="img" aria-label="India">🇮🇳</span> +91
                </span>
                <input
                  type="tel"
                  placeholder="Enter your number here"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Field 4: Enquiry For */}
            <div className="callback-field-v2">
              <label>Enquiry For</label>
              <div className="callback-select-wrap">
                <select
                  value={enquiryFor}
                  onChange={(e) => setEnquiryFor(e.target.value)}
                >
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development (iOS & Android)</option>
                  <option value="AI & LLM Solutions">AI & LLM Solutions</option>
                  <option value="Workflow Automation (n8n & APIs)">Workflow Automation (n8n & APIs)</option>
                  <option value="UI/UX & Product Design">UI/UX & Product Design</option>
                  <option value="Custom Software & Cloud Systems">Custom Software & Cloud Systems</option>
                  <option value="Other / General Consultation">Other / General Consultation</option>
                </select>
                <ChevronDown size={16} className="callback-select-chevron" />
              </div>
            </div>

            {/* Field 5: How can we help you? */}
            <div className="callback-field-v2">
              <label>How can we help you?</label>
              <textarea
                rows={3}
                placeholder="E.g. I want details about the project timeline, tech stack, and scope..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="callback-submit-btn-v2">
              <Send size={15} />
              <span>Book My Callback</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// Automated 10-Second Email Lead Capture Popup (Disabled per request)
function EmailLeadPopup() {
  return null;
}

// Floating Email Success Toast Notification (Disabled per request)
function EmailToast() {
  return null;
}

// Floating Cookie Consent Banner (Disabled per request)
function CookieConsentBanner() {
  return null;
}

// ========================================================
// 3D CONTINUOUS ROTATING PRODUCTION DEPLOYMENTS GALLERY
// Real deployed projects, browser frames, live URLs, 3D orbit
// ========================================================
// ========================================================
// 3D ROTATING CYLINDER CAROUSEL (VERTICAL AXIS ROTATION)
// Places service & project cards around a 3D vertical cylinder
// with CSS perspective, preserve-3d, rotateY(), translateZ()
// ========================================================
const cylinderServicesData = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'Human-Centered Design',
    icon: Layout,
    desc: 'Intuitive user experiences, modern interfaces, and user-tested prototypes engineered for high conversion.',
    tags: ['Figma', 'Design Systems', 'Micro-Interactions'],
    revealText: 'MODERN INTERFACES • USER-TESTED PROTOTYPES',
    accent: '#38BDF8',
    slug: 'ui-ux-design'
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    category: 'Enterprise Engineering',
    icon: Code2,
    desc: 'Scalable cloud infrastructure, robust microservice APIs, and sub-millisecond enterprise platforms.',
    tags: ['Node.js', 'FastAPI', 'High Concurrency'],
    revealText: 'SCALABLE CLOUD • ROBUST ENTERPRISE APIS',
    accent: '#818CF8',
    slug: 'custom-software'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    category: 'Modern Web Architecture',
    icon: Globe,
    desc: 'Ultra-fast Next.js 15 web applications, edge-cached platforms, and 100% Lighthouse performance.',
    tags: ['Next.js 15', 'React 19', 'Sub-second Load'],
    revealText: 'LIGHTNING-FAST NEXT.JS • SUB-SECOND LOAD',
    accent: '#00F0FF',
    slug: 'web-development'
  },
  {
    id: 'app-development',
    title: 'App Development',
    category: 'Mobile Architecture',
    icon: Layers,
    desc: 'High-performance iOS and Android mobile applications engineered with native 60fps responsiveness.',
    tags: ['React Native', 'iOS & Android', 'Offline First'],
    revealText: 'CROSS-PLATFORM • NATIVE 60FPS EXPERIENCE',
    accent: '#C084FC',
    slug: 'app-development'
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    category: 'Intelligent Workflows',
    icon: Bot,
    desc: 'Intelligent LLM automation, autonomous multi-step agents, and contextual vector RAG pipelines.',
    tags: ['LangChain', 'Vector RAG', 'Autonomous LLMs'],
    revealText: 'INTELLIGENT LLMS • ZERO-LATENCY VECTOR RAG',
    accent: '#A855F7',
    slug: 'ai-solutions'
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    category: 'Workflow Optimization',
    icon: Zap,
    desc: 'Streamline repetitive tasks, automate event-driven pipelines, and maximize studio throughput.',
    tags: ['Event Meshes', 'CRM Automations', 'Zero Latency'],
    revealText: 'WORKFLOW OPTIMIZATION • END-TO-END PRODUCTIVITY',
    accent: '#06B6D4',
    slug: 'business-automation'
  }
];

function ProductionDeploymentsOrbit({ projects, onSelectProject, activeCategory }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 3 Showcase Cards with project images, names, and clean presentation
  const cardsData = [
    {
      id: 'asa-epc',
      tabLabel: 'ASA EPC — Solar Platform',
      title: 'ASA EPC Solar Platform',
      video: '/assets/asa_epc.mp4',
      img: '/assets/asa_epc.jpg',
      icon: <Globe size={15} />,
      project: (projects && projects.find((p) => p.id === 'asa-epc')) || projectsData[0]
    },
    {
      id: 'rathore-construction',
      tabLabel: 'Rathore Construction',
      title: 'Rathore Construction & Earthmovers',
      video: '/assets/rathore_construction.mp4',
      img: '/assets/rathore_construction.jpg',
      icon: <Building2 size={15} />,
      project: (projects && projects.find((p) => p.id === 'rathore-construction')) || projectsData[1]
    },
    {
      id: 'doctor-appointment',
      tabLabel: 'Doctor Appointment Booking',
      title: 'Doctor Appointment Booking System',
      video: '/assets/doctor_appointment.mp4',
      img: '/assets/doctor_appointment.jpg',
      icon: <CalendarCheck size={15} />,
      project: (projects && projects.find((p) => p.id === 'doctor-appointment-booking')) || projectsData[2]
    }
  ];

  // Rotate to specific card index
  const goToCard = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + 3) % 3);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % 3);
  };

  const touchStartXRef = useRef(0);
  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      touchStartXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      const diff = touchStartXRef.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
  };

  // Continuous gentle rotation when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Calculate forward-facing 3D position relative to activeIndex (avoids mirrored backside)
  const getCardStyle = (idx) => {
    const diff = (idx - activeIndex + 3) % 3;

    if (diff === 0) {
      return {
        transform: 'translateX(0px) translateZ(40px) rotateY(0deg) scale(1)',
        zIndex: 10,
        opacity: 1,
        filter: 'brightness(1)',
      };
    } else if (diff === 1) {
      return {
        transform: 'translateX(195px) translateZ(-45px) rotateY(-22deg) scale(0.86)',
        zIndex: 5,
        opacity: 0.85,
        filter: 'brightness(0.8)',
      };
    } else {
      return {
        transform: 'translateX(-195px) translateZ(-45px) rotateY(22deg) scale(0.86)',
        zIndex: 5,
        opacity: 0.85,
        filter: 'brightness(0.8)',
      };
    }
  };

  return (
    <div
      className="what-we-build-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LEFT COLUMN: Typography & Interactive Vertical Pill Navigation */}
      <div className="build-left-col">
        <div className="build-eyebrow">
          <span className="build-eyebrow-dot" />
          <span className="build-eyebrow-text">ROVAWARE / OUR EXPERTISE</span>
        </div>

        <h2 className="build-heading">
          What We <span className="accent-text">Build.</span>
        </h2>

        <p className="build-subtitle">
          End-to-end digital solutions from beautiful user interfaces to scalable, production-ready systems.
        </p>

        {/* 3 Interactive Vertical Nav Tabs */}
        <div className="build-nav-list">
          {cardsData.map((card, idx) => (
            <button
              key={card.id}
              type="button"
              className={`build-nav-item ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => goToCard(idx)}
            >
              {activeIndex === idx && <span className="pill-active-bar" />}
              <div className="pill-left">
                <div className="pill-icon-box">
                  {card.icon}
                </div>
                <span className="pill-label">{card.tabLabel}</span>
              </div>
              <ArrowRight size={15} className="pill-arrow" />
            </button>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <button
          type="button"
          className="build-explore-btn"
          onClick={() => {
            if (onSelectProject) {
              const currentCard = cardsData[activeIndex];
              onSelectProject({ ...(currentCard.project || {}), video: currentCard.video });
            }
          }}
        >
          <span>Explore Our Work</span>
          <ExternalLink size={14} />
        </button>
      </div>

      {/* RIGHT COLUMN: 3D Curved Showcase on Floor Neon Pedestal */}
      <div className="build-right-col">
        {/* Neon Floor Glowing Base Pedestal */}
        <div className="pedestal-neon-outer" />
        <div className="pedestal-neon-ring" />
        <div className="pedestal-floor-reflection" />

        {/* 3D Scene Viewport */}
        <div
          className="build-3d-scene"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="build-3d-rotator">
            {cardsData.map((card, idx) => {
              const isCurrent = activeIndex === idx;
              const cardTransformStyle = getCardStyle(idx);

              return (
                <div
                  key={card.id}
                  className={`build-glass-card ${isCurrent ? 'is-active-card' : ''}`}
                  style={cardTransformStyle}
                  onClick={() => {
                    if (!isCurrent) {
                      goToCard(idx);
                    } else if (onSelectProject) {
                      onSelectProject({ ...(card.project || {}), video: card.video });
                    }
                  }}
                  title={`Click to preview ${card.title}`}
                >
                  {/* Card Header: Only Project Name & Status Dot */}
                  <div className="card-project-header">
                    <div className="card-project-title-box">
                      <span className="card-project-dot" />
                      <h3 className="card-project-name">{card.title}</h3>
                    </div>
                    <span className="card-project-live-badge">
                      <span className="card-live-pulse" />
                      <span>LIVE</span>
                    </span>
                  </div>

                  {/* Card Body: High-Res Project Video or Screenshot */}
                  <div className="card-project-img-box">
                    {card.video ? (
                      <video
                        src={card.video}
                        poster={card.img}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="card-project-media card-project-video"
                      />
                    ) : (
                      <img
                        src={card.img}
                        alt={card.title}
                        className="card-project-media card-project-img"
                        loading="eager"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Carousel Controls: Prev Arrow, 3 Dots, Next Arrow */}
        <div className="build-carousel-controls">
          <button
            type="button"
            className="build-arrow-btn"
            onClick={handlePrev}
            aria-label="Previous Project"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="build-dots-wrap">
            {cardsData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`build-dot ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => goToCard(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="build-arrow-btn"
            onClick={handleNext}
            aria-label="Next Project"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Smooth Easing Animated Counter Hook for Viewport Reveal
function AnimatedCounter({ end, duration = 1200, padZero = true }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // easeOutExpo for realistic digital speedometer counter
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(ease * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, end, duration]);

  const formatted = padZero && count < 10 ? `0${count}` : `${count}`;
  return <span ref={counterRef}>{formatted}</span>;
}

// RovaWare Statistics Counter – Full-Stack & AI Engineering
function EngineeringStatsCounter() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const stats = [
    {
      type: 'counter',
      value: 3,
      padZero: true,
      title: 'Featured Projects',
      tag: 'PRODUCTION PLATFORMS',
      desc: 'Live enterprise web applications built for speed, high concurrency & scale.',
      accent: '#38BDF8',
      icon: <Globe size={18} />
    },
    {
      type: 'counter',
      value: 3,
      padZero: true,
      title: 'Core Development Services',
      tag: 'FULL-STACK STACK',
      desc: 'Frontend design systems, robust server architectures & full-stack engineering.',
      accent: '#C4B5FD',
      icon: <Layers size={18} />
    },
    {
      type: 'badge',
      badgeMain: 'AI',
      badgeSub: 'POWERED',
      title: 'AI-Powered Solutions',
      tag: 'INTELLIGENT SYSTEMS',
      desc: 'Autonomous AI workflows, vector search pipelines & custom LLM integrations.',
      accent: '#38BDF8',
      icon: <Cpu size={18} />
    },
    {
      type: 'badge',
      badgeMain: 'SCALE',
      badgeSub: 'READY',
      title: 'Scalable Digital Architecture',
      tag: 'CLOUD EXCELLENCE',
      desc: 'High-availability, fault-tolerant cloud architecture engineered for long-term growth.',
      accent: '#C4B5FD',
      icon: <Database size={18} />
    }
  ];

  return (
    <section className="stats-banner engineering-stats-banner">
      <div className="stats-grid engineering-stats-grid stagger-reveal">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className={`stat-card engineering-stat-card ${hoveredIdx === idx ? 'is-hovered' : ''}`}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Top Eyebrow with Glow Dot */}
            <div className="stat-card-eyebrow">
              <span
                className="stat-card-dot"
                style={{
                  backgroundColor: s.accent,
                  boxShadow: `0 0 8px ${s.accent}`
                }}
              />
              <span className="stat-card-tag">{s.tag}</span>
            </div>

            {/* Large Animated Metric Value */}
            <div className="stat-metric-row">
              {s.type === 'counter' ? (
                <div className="stat-number">
                  <AnimatedCounter end={s.value} padZero={s.padZero} duration={1400} />
                </div>
              ) : (
                <div className="stat-badge-display">
                  <span className="stat-badge-main">{s.badgeMain}</span>
                  <span className="stat-badge-sub">{s.badgeSub}</span>
                </div>
              )}
              <div className="stat-icon-wrap" style={{ color: s.accent }}>
                {s.icon}
              </div>
            </div>

            {/* Stat Title & Description */}
            <h3 className="stat-card-title">{s.title}</h3>
            <p className="stat-card-desc">{s.desc}</p>

            {/* Glowing Separator Line between cards */}
            {idx < stats.length - 1 && <div className="stat-glow-separator" />}
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// WHAT WE BUILD SHOWCASE: Premium 3-Card Engineering Showcase
// Replaces the legacy accordion with a full-width software studio portfolio grid.
// ============================================================================
const whatWeBuildData = [
  {
    id: 'web-platforms',
    category: 'Web Platforms',
    kicker: '01 // WEB ARCHITECTURE',
    title: 'High-Performance Web Platforms',
    description:
      'Ultra-fast Next.js and React platforms engineered with hybrid SSR, static edge caching, and sub-second TTFB for mission-critical digital scale.',
    image: '/assets/exp_web_platforms.jpg',
    urlLabel: 'rovaware.com/platforms',
    tags: ['Next.js 15 & React', 'Edge SSR', 'Sub-50ms TTFB'],
    actionLabel: 'Explore Projects'
  },
  {
    id: 'applications',
    category: 'Applications',
    kicker: '02 // ENTERPRISE SYSTEMS',
    title: 'Scalable SaaS & Cloud Applications',
    description:
      'Full-stack enterprise applications featuring reactive WebSocket telemetry, real-time monitoring dashboards, and scalable cloud microservices.',
    image: '/assets/exp_saas_dashboard.jpg',
    urlLabel: 'cloud.rovaware.com',
    tags: ['Full-Stack SaaS', 'Real-Time WebSockets', 'Cloud Microservices'],
    actionLabel: 'Explore Projects'
  },
  {
    id: 'ai-solutions',
    category: 'AI Solutions',
    kicker: '03 // NEURAL WORKFLOWS',
    title: 'Autonomous AI & Vector Retrieval Engines',
    description:
      'Production AI systems integrating multi-node agent tool calling, dense vector retrieval (RAG), and custom LLM inference pipelines.',
    image: '/assets/exp_ai_architecture.jpg',
    urlLabel: 'ai.rovaware.com',
    tags: ['Agentic Workflows', 'Vector Search (RAG)', 'Custom LLMs'],
    actionLabel: 'Explore Projects'
  }
];

function WhatWeBuildShowcase({ onExploreProjects }) {
  const handleExplore = (e) => {
    if (onExploreProjects) {
      onExploreProjects(e);
    } else {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="what-we-build-section" id="what-we-build">
      {/* Anchor for backward compatibility with #digital-experience */}
      <span id="digital-experience" className="what-we-build-anchor" aria-hidden="true" />

      <div className="what-we-build-container">
        {/* Main Section Header */}
        <div className="what-we-build-header">
          <div className="what-we-build-header-left">
            <div className="what-we-build-kicker">
              <Sparkles size={13} />
              <span>WHAT WE BUILD</span>
            </div>
            <h2 className="what-we-build-title">
              Engineering the Digital Future: <em className="hero-highlight">What We Build.</em>
            </h2>
            <p className="what-we-build-desc">
              Explore the core engineering disciplines we deploy to architect high-performance web platforms, resilient cloud software, and intelligent AI workflows for ambitious modern businesses.
            </p>
          </div>

          <div className="what-we-build-header-right">
            <button
              type="button"
              className="what-we-build-header-cta"
              onClick={handleExplore}
              aria-label="Explore all portfolio projects"
            >
              <span>Explore All Work</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        {/* 3 Full-Width Showcase Cards Grid */}
        <div className="what-we-build-grid">
          {whatWeBuildData.map((item) => (
            <article key={item.id} className="build-showcase-card">
              {/* Top Accent Gradient Border */}
              <div className="build-card-accent-bar" />

              {/* Card Media Preview Frame */}
              <div className="build-card-media" onClick={handleExplore}>
                <div className="build-card-hud">
                  <div className="build-hud-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <div className="build-hud-url">
                    <Lock size={10} />
                    <span>{item.urlLabel}</span>
                  </div>
                </div>

                <div className="build-card-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="build-card-img"
                    loading="lazy"
                  />
                  <div className="build-card-overlay-gradient" />
                </div>
              </div>

              {/* Card Body */}
              <div className="build-card-content">
                <div className="build-card-meta">
                  <span className="build-card-kicker">{item.kicker}</span>
                </div>

                <h3 className="build-card-title">{item.title}</h3>
                <p className="build-card-desc">{item.description}</p>

                {/* Professional Discipline Tags */}
                <div className="build-card-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="build-card-tag">{tag}</span>
                  ))}
                </div>

                {/* Card Action Link */}
                <div className="build-card-footer">
                  <button
                    type="button"
                    className="build-card-cta-btn"
                    onClick={handleExplore}
                  >
                    <span>{item.actionLabel}</span>
                    <ArrowUpRight size={15} className="build-card-arrow" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Backward compatibility alias
const DigitalExperienceWafer = WhatWeBuildShowcase;

// Full-Spectrum Digital Solutions Horizontal Scrolling Carousel Component
function ServicesCarousel({ services }) {
  const trackRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [touchRevealedIdx, setTouchRevealedIdx] = useState(null);
  const [hoveredCardIdx, setHoveredCardIdx] = useState(null);

  const updateScrollState = () => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);

    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < maxScroll - 6);

    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(progress);

    // Calculate active card index based on position relative to track
    const cards = track.querySelectorAll('.service-box');
    if (cards.length > 0) {
      let closestIdx = 0;
      let minDiff = Infinity;
      const trackRect = track.getBoundingClientRect();

      cards.forEach((card, idx) => {
        const cardRect = card.getBoundingClientRect();
        const diff = Math.abs(cardRect.left - trackRect.left);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });
      setActiveCardIndex(closestIdx);
    }
  };

  useEffect(() => {
    updateScrollState();
    const handleResize = () => updateScrollState();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Global mouseup to cleanly stop dragging even when mouse releases outside track
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging(false);
      }
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  // Mouse wheel & trackpad horizontal scroll handling
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleWheel = (e) => {
      // Natural horizontal trackpad swipe - allow native handling
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return;
      }

      // Translate vertical wheel delta into smooth horizontal scroll
      if (e.deltaY !== 0) {
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (maxScroll <= 0) return;

        const isMovingRight = e.deltaY > 0;
        const canScroll = isMovingRight
          ? track.scrollLeft < maxScroll - 1
          : track.scrollLeft > 1;

        if (canScroll) {
          e.preventDefault();
          track.scrollBy({
            left: e.deltaY * 1.6,
            behavior: 'auto'
          });
        }
      }
    };

    track.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      track.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Mouse Drag-To-Scroll handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only primary button
    const track = trackRef.current;
    if (!track) return;

    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - track.offsetLeft;
    scrollLeftRef.current = track.scrollLeft;
    hasMovedRef.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    if (Math.abs(walk) > 3) {
      hasMovedRef.current = true;
    }
    track.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
    }
  };

  const handleScrollStep = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.service-box');
    const scrollAmount = card ? card.offsetWidth + 24 : 404;

    track.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollToCard = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll('.service-box');
    const targetCard = cards[index];
    if (targetCard) {
      const targetLeft = targetCard.offsetLeft - track.offsetLeft - 6;
      track.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth'
      });
      setActiveCardIndex(index);
    }
  };

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.setProperty('--card-rot-x', `${rotateX.toFixed(2)}deg`);
    card.style.setProperty('--card-rot-y', `${rotateY.toFixed(2)}deg`);
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.removeProperty('--card-rot-x');
    card.style.removeProperty('--card-rot-y');
    card.style.removeProperty('--mouse-x');
    card.style.removeProperty('--mouse-y');
  };

  return (
    <div className="services-carousel-wrapper">
      {/* Header Controls & Live Counters */}
      <div className="services-carousel-header">
        <div className="services-carousel-meta">
          <div className="services-badge-counter" aria-live="polite">
            <span className="live-counter-current">0{activeCardIndex + 1}</span>
            <span className="live-counter-divider">/</span>
            <span className="live-counter-total">0{services.length}</span>
          </div>
          <div className="services-hint-pill">
            <span className="hint-pulse-dot" />
            <span>Drag, swipe, or click any number to jump to that service</span>
          </div>
        </div>

        <div className="services-carousel-nav">
          {/* Visual progress bar */}
          <div className="services-progress-rail" aria-label="Services carousel scroll progress">
            <div
              className="services-progress-fill"
              style={{ width: `${Math.max(16, scrollProgress)}%` }}
            />
          </div>

          <div className="services-nav-buttons">
            <button
              type="button"
              className="services-nav-btn prev"
              onClick={() => handleScrollStep('left')}
              disabled={!canScrollLeft}
              aria-label="Previous service"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="services-nav-btn next"
              onClick={() => handleScrollStep('right')}
              disabled={!canScrollRight}
              aria-label="Next service"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Track Container */}
      <div className="services-track-container">
        {/* Subtle Edge Gradients signaling more cards */}
        <div className={`services-fade-edge left ${canScrollLeft ? 'active' : ''}`} />
        <div className={`services-fade-edge right ${canScrollRight ? 'active' : ''}`} />

        <div
          ref={trackRef}
          className={`services-carousel-track ${isDragging ? 'is-dragging' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onScroll={updateScrollState}
        >
          {services.map((s, idx) => {
            const Icon = s.icon;
            const isCardActive = activeCardIndex === idx;
            const isFlipped = hoveredCardIdx === idx || touchRevealedIdx === idx;
            return (
              <div
                className={`service-box service-flip-card ${isCardActive ? 'card-focused' : ''} ${isFlipped ? 'is-flipped' : ''}`}
                key={s.title}
                onMouseEnter={() => {
                  setActiveCardIndex(idx);
                  setHoveredCardIdx(idx);
                }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={(e) => {
                  handleCardMouseLeave(e);
                  setHoveredCardIdx(null);
                  if (touchRevealedIdx === idx) setTouchRevealedIdx(null);
                }}
                onClick={(e) => {
                  if (hasMovedRef.current) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                  }
                  setTouchRevealedIdx((prev) => (prev === idx ? null : idx));
                  scrollToCard(idx);
                }}
              >
                {/* Editorial Top Title Bar (Brandon Yasin portfolio style) */}
                <div className="service-editorial-bar">
                  <span className="editorial-kicker">{s.title.toUpperCase()}</span>
                  <span className="editorial-index">{s.num}</span>
                </div>

                {/* 3D Flipper Shell */}
                <div className="service-flipper">
                  {/* FRONT FACE: High-end luxury photography */}
                  <div className="service-card-face service-card-front">
                    <div className="service-photo-stage">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="service-cover-image"
                        loading="lazy"
                      />
                      <div className="service-photo-scrim">
                        <div className="photo-scrim-top">
                          <span className="photo-kicker-pill">
                            <Sparkles size={11} />
                            <span>{s.kicker || 'SYSTEM ARCHITECTURE'}</span>
                          </span>
                          <span className="photo-num-badge">{s.num}</span>
                        </div>

                        <div className="photo-scrim-bottom">
                          <span className="photo-discipline-label">ROVAWARE // DISCIPLINE {s.num}</span>
                          <h3 className="photo-headline">{s.title}</h3>
                          <div className="photo-interaction-badge">
                            <span>Hover to View Details</span>
                            <RefreshCw size={11} className="photo-spin-glyph" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BACK FACE: Detailed service capabilities & interactive action */}
                  <div className="service-card-face service-card-back">
                    {/* Mouse-following Spotlight Glow Layer */}
                    <div className="service-spotlight" aria-hidden="true" />

                    {/* Mouse-Triggered Slide-Down Text Reveal Badge */}
                    <div className="card-reveal-wrap" aria-hidden="true">
                      <div className="card-reveal-badge">
                        <span className="reveal-dot" />
                        <span className="reveal-label">{s.revealText || 'ENTERPRISE CAPABILITIES'}</span>
                        <ArrowUpRight size={11} className="reveal-arrow" />
                      </div>
                    </div>

                    <div className="service-top-row">
                      <div className="service-icon-box">
                        <Icon size={22} />
                      </div>
                      <div className="service-number-wrap">
                        <span className="service-number-watermark" aria-hidden="true">{s.num}</span>
                        <span className="service-number">{s.num}</span>
                      </div>
                    </div>

                    <h3 className="service-name">{s.title}</h3>
                    <p className="service-text">{s.desc}</p>

                    <div className="service-features">
                      {s.features.map((f) => (
                        <span key={f} className="service-feature-tag">{f}</span>
                      ))}
                    </div>

                    <div className="service-card-action">
                      <span className="service-action-label">Explore Capabilities</span>
                      <span className="service-action-icon">
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Pills for Direct Jumping & Hover Indication */}
      <div className="services-pagination-dots" role="tablist" aria-label="Services carousel navigation">
        {services.map((s, idx) => (
          <button
            key={s.num}
            type="button"
            role="tab"
            aria-selected={activeCardIndex === idx}
            className={`services-dot-btn ${activeCardIndex === idx ? 'active' : ''}`}
            onClick={() => scrollToCard(idx)}
            onMouseEnter={() => setActiveCardIndex(idx)}
            title={`Service ${s.num}: ${s.title}`}
            aria-label={`Jump to service 0${idx + 1}: ${s.title}`}
          >
            <span className="dot-pill">
              <span className="dot-active-beacon" />
              <span className="dot-num">{s.num}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}



// ============================================================
// TECHNOLOGY STACK SHOWCASE: INTERACTIVE ECOSYSTEM & MARQUEE
// ============================================================

const techCategoriesData = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Layout,
    badge: 'UI & Client Tier',
    items: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'HTML5 & CSS3'],
    purpose: 'Building ultra-responsive, component-driven user interfaces with sub-second page loads, accessible layouts, and seamless client interactions.',
    capabilities: [
      'Server-Side Rendering (SSR) & Static Site Generation (SSG)',
      'Custom Component Design Systems & Micro-Interactions',
      'Mobile-First Responsive Web Design & Accessibility (a11y)',
      'High-Performance DOM Hydration & State Management'
    ],
    projects: [
      { name: 'ASA EPC — Enterprise Platform', desc: 'Solar EPC portal built with Next.js 15 & Tailwind CSS', url: 'https://asa-epc.com' },
      { name: 'Rathore Construction Platform', desc: 'Heavy equipment rental portal with responsive UI', url: 'https://rathore-construction-earthmovers.vercel.app' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Databases',
    icon: Layers,
    badge: 'API & Persistence Tier',
    items: ['Node.js & Express.js', 'REST APIs', 'MongoDB', 'MySQL & SQLite', 'Authentication & Authorization'],
    purpose: 'Engineering resilient, scalable server architecture, robust RESTful APIs, secure multi-model databases, and granular role-based authentication.',
    capabilities: [
      'High-Throughput RESTful APIs & WebSocket Real-Time Endpoints',
      'Document (MongoDB) & Relational (MySQL/SQLite) Schema Architecture',
      'JWT & Session Authentication with Role-Based Access Control (RBAC)',
      'Database Query Optimization, Indexing & Data Integrity'
    ],
    projects: [
      { name: 'Real-Time SaaS Monitoring Hub', desc: 'Low-latency telemetry streaming & WebSocket backend', url: 'https://asa-epc.com' },
      { name: 'Distributed Multi-DB Core API', desc: 'REST API gateway with JWT authorization & database caching' }
    ]
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    icon: Bot,
    badge: 'Intelligence & Agent Tier',
    items: ['AI API Integration', 'LLM-Powered Applications', 'AI Chatbots', 'Workflow Automation with n8n', 'Intelligent Business Tools'],
    purpose: 'Bridging modern foundation AI models, vector search, and automated multi-step workflows into production tools that automate repetitive tasks.',
    capabilities: [
      'Enterprise LLM API Integration & Dynamic Prompt Engineering',
      'Multi-Step Autonomous Workflow Automation with n8n Webhooks',
      'Domain-Trained Conversational AI Chatbots & Customer Support',
      'Vector Embeddings, Semantic Search & Retrieval-Augmented Generation'
    ],
    projects: [
      { name: 'Autonomous AI Agent Workflows', desc: 'Self-orchestrating task execution & multi-agent systems' },
      { name: 'Automated Lead & Pipeline Engine', desc: 'End-to-end webhook ingestion & intelligent routing with n8n' }
    ]
  },
  {
    id: 'deployment',
    title: 'Development & Deployment',
    icon: Gauge,
    badge: 'DevOps & Cloud Tier',
    items: ['Git & GitHub', 'VS Code', 'Vercel', 'Postman', 'Responsive Testing & Debugging'],
    purpose: 'Operating streamlined CI/CD pipelines, version control protocols, edge server deployments, and rigorous cross-platform quality assurance.',
    capabilities: [
      'Automated Git Version Control & Multi-Environment Branching Strategy',
      'Zero-Downtime Global Edge Hosting on Vercel with Instant Rollbacks',
      'Comprehensive API Testing & Contract Verification with Postman',
      'Lighthouse 95+ Performance Audits & Device Compatibility Testing'
    ],
    projects: [
      { name: 'Vercel Global Edge Network', desc: 'Sub-100ms global response times with automated CI/CD deployments' },
      { name: 'Production Telemetry & QA Suite', desc: 'Automated regression testing & multi-browser device validation' }
    ]
  }
];

const marqueeTechnologies = [
  { name: 'React.js', icon: <Code2 size={14} />, tag: 'Frontend' },
  { name: 'Next.js', icon: <Globe size={14} />, tag: 'Framework' },
  { name: 'JavaScript', icon: <Terminal size={14} />, tag: 'Language' },
  { name: 'TypeScript', icon: <Code2 size={14} />, tag: 'Language' },
  { name: 'Tailwind CSS', icon: <Layout size={14} />, tag: 'Styling' },
  { name: 'Node.js', icon: <Server size={14} />, tag: 'Runtime' },
  { name: 'Express.js', icon: <Workflow size={14} />, tag: 'Backend' },
  { name: 'MongoDB', icon: <Database size={14} />, tag: 'NoSQL' },
  { name: 'MySQL', icon: <Database size={14} />, tag: 'SQL' },
  { name: 'Python', icon: <Terminal size={14} />, tag: 'Language' },
  { name: 'OpenAI API', icon: <Bot size={14} />, tag: 'AI Models' },
  { name: 'Vercel', icon: <Cloud size={14} />, tag: 'Cloud Edge' },
  { name: 'Git & GitHub', icon: <GitBranch size={14} />, tag: 'Version Control' },
  { name: 'Postman', icon: <Activity size={14} />, tag: 'API Testing' },
  { name: 'n8n Automation', icon: <Workflow size={14} />, tag: 'Automation' },
  { name: 'HTML5 & CSS3', icon: <Layout size={14} />, tag: 'Core Web' },
  { name: 'Vite', icon: <Zap size={14} />, tag: 'Build Tool' },
  { name: 'REST APIs', icon: <Network size={14} />, tag: 'Protocols' }
];


// 3. Horizontal Technology Logo Marquee Component
function TechLogoMarquee({ items }) {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="tech-marquee-section">
      <div className="tech-marquee-header">
        <div className="marquee-header-pill">
          <Zap size={13} />
          <span>PRODUCTION TOOLCHAIN</span>
        </div>
        <span className="marquee-header-hint">Auto-scrolling • Hover to pause • Drag to explore</span>
      </div>

      <div className="tech-marquee-wrapper">
        <div className="tech-marquee-fade-left" aria-hidden="true" />
        <div className="tech-marquee-fade-right" aria-hidden="true" />
        <div
          className={`tech-marquee-track ${isDragging ? 'is-dragging' : ''}`}
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="tech-marquee-content">
            {[...items, ...items, ...items].map((item, idx) => (
              <div key={idx} className="tech-marquee-pill">
                <span className="marquee-pill-icon">{item.icon}</span>
                <span className="marquee-pill-name">{item.name}</span>
                <span className="marquee-pill-tag">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Main TechStackShowcase Component
function TechStackShowcase() {
  const [activeCardId, setActiveCardId] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [hasRevealed, setHasRevealed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleCardMouseMove = (e, isExpanded) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--spotlight-x', `${x}px`);
    card.style.setProperty('--spotlight-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;
    // Moves card DOWN (+8px) on hover as requested
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(8px)`;
  };

  const handleCardMouseEnter = (catId, e) => {
    setHoveredCardId(catId);
    e.currentTarget.style.setProperty('--spotlight-opacity', '1');
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(8px)';
  };

  const handleCardMouseLeave = (catId, e) => {
    setHoveredCardId((prev) => (prev === catId ? null : prev));
    const card = e.currentTarget;
    card.style.setProperty('--spotlight-opacity', '0');
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  const handleCardClick = (catId) => {
    setActiveCardId((prev) => (prev === catId ? null : catId));
  };

  const handleKeyDown = (e, catId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveCardId((prev) => (prev === catId ? null : catId));
    }
  };

  const handleFocus = (catId) => {
    // Focus indicator handled via CSS
  };

  const handleBlur = (catId, e) => {
    // Blur handled via CSS
  };

  return (
    <div className="tech-showcase-container" ref={containerRef}>
      {/* Four Technology Category Cards with Auto Hover-Expand, 3D Tilt, Spotlight & Glow */}
      <div className={`gear-grid ${hasRevealed ? 'is-revealed' : ''}`}>
        {techCategoriesData.map((cat, idx) => {
          const isExpanded = (hoveredCardId ? hoveredCardId === cat.id : activeCardId === cat.id);
          const IconComponent = cat.icon;

          return (
            <div
              key={cat.id}
              className={`gear-category ${isExpanded ? 'is-selected is-expanded' : ''}`}
              style={{ '--card-delay': `${idx * 130}ms` }}
              onMouseMove={(e) => handleCardMouseMove(e, isExpanded)}
              onMouseEnter={(e) => handleCardMouseEnter(cat.id, e)}
              onMouseLeave={(e) => handleCardMouseLeave(cat.id, e)}
              onClick={() => handleCardClick(cat.id)}
              onFocus={() => handleFocus(cat.id)}
              onBlur={(e) => handleBlur(cat.id, e)}
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              aria-label={`${cat.title}: ${isExpanded ? 'Collapse' : 'Explore'} capabilities and projects`}
              onKeyDown={(e) => handleKeyDown(e, cat.id)}
            >
              {/* Cursor Spotlight Layer */}
              <div className="gear-card-spotlight" aria-hidden="true" />

              {/* Animated Cyan-Purple Glowing Border on Hover & Active */}
              <div className="gear-card-glow-border" aria-hidden="true" />

              <div className="gear-cat-header">
                <div className="gear-cat-title-wrap">
                  <IconComponent size={18} />
                  <span>{cat.title}</span>
                </div>
                <span className={`gear-inspect-badge ${isExpanded ? 'active' : ''}`}>
                  {isExpanded ? 'Active' : 'Inspect'}
                </span>
              </div>

              <ul className="gear-list">
                {cat.items.map((item, iIdx) => (
                  <li key={iIdx}>{item}</li>
                ))}
              </ul>

              <div className="gear-card-footer">
                <span className="gear-explore-prompt">
                  {isExpanded ? 'Collapse Details' : 'View Capabilities & Projects'}
                </span>
                <ChevronDown size={14} className={`gear-chevron ${isExpanded ? 'rotated' : ''}`} />
              </div>

              {/* Smooth Expandable Drawer: opens automatically on hover */}
              <div
                className={`gear-expandable-drawer ${isExpanded ? 'expanded' : ''}`}
                aria-hidden={!isExpanded}
              >
                <div className="gear-drawer-inner">
                  {/* Architectural Purpose */}
                  <div className="gear-drawer-section">
                    <div className="gear-drawer-label">
                      <Sparkles size={11} />
                      <span>ARCHITECTURAL PURPOSE</span>
                    </div>
                    <p className="gear-drawer-purpose">{cat.purpose}</p>
                  </div>

                  {/* Key Capabilities */}
                  <div className="gear-drawer-section">
                    <div className="gear-drawer-label">
                      <CheckCircle2 size={11} />
                      <span>KEY CAPABILITIES</span>
                    </div>
                    <ul className="gear-drawer-caps-list">
                      {cat.capabilities.map((cap, cIdx) => (
                        <li key={cIdx}>
                          <CheckCircle2 size={12} className="gear-cap-check" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Production Projects */}
                  <div className="gear-drawer-section">
                    <div className="gear-drawer-label">
                      <ExternalLink size={11} />
                      <span>PRODUCTION PROJECTS</span>
                    </div>
                    <div className="gear-drawer-projects">
                      {cat.projects.map((proj, pIdx) => (
                        <div key={pIdx} className="gear-drawer-proj-card">
                          <div className="gear-proj-info">
                            <span className="gear-proj-name">{proj.name}</span>
                            <span className="gear-proj-desc">{proj.desc}</span>
                          </div>
                          {proj.url && (
                            <a
                              href={proj.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="gear-proj-link"
                              onClick={(e) => e.stopPropagation()}
                              title={`Open live project: ${proj.name}`}
                            >
                              <span>Live</span>
                              <ArrowUpRight size={11} />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Horizontal Technology Logo Marquee */}
      <TechLogoMarquee items={marqueeTechnologies} />
    </div>
  );
}

// Direct Studio Directory & Sitelink Shortcuts Component (Wyreflow Style)
function ExploreShortcutsSection({
  navigateToCareers,
  navigateToServices,
  navigateToAboutCompany,
  navigateToProcess,
  navigateToContact,
  navigateToServiceDetail
}) {
  const shortcutLinks = [
    {
      id: 'careers',
      title: 'Career',
      subtitle: 'Join the ROVAWARE Engineering Team',
      desc: 'Explore high-impact open roles across full-stack engineering, AI development, and UI/UX design. Remote-first engineering studio.',
      badge: "WE'RE HIRING",
      icon: Briefcase,
      accent: '#38BDF8',
      path: '/careers',
      onClick: (e) => { e.preventDefault(); navigateToCareers(); }
    },
    {
      id: 'services',
      title: 'Services',
      subtitle: 'Full-Stack Digital Engineering',
      desc: 'High-throughput web applications, native mobile systems, scalable cloud architectures, and autonomous AI agents.',
      badge: '9 PRACTICES',
      icon: Layers,
      accent: '#FF8C32',
      path: '/services',
      onClick: (e) => { e.preventDefault(); navigateToServices(); }
    },
    {
      id: 'about',
      title: 'About Us',
      subtitle: 'Mission, Team & Engineering Standards',
      desc: 'Learn about ROVAWARE’s engineering philosophy, leadership, and our unwavering commitment to building resilient digital products.',
      badge: 'COMPANY',
      icon: Building2,
      accent: '#A855F7',
      path: '/about/company',
      onClick: (e) => { e.preventDefault(); navigateToAboutCompany(); }
    },
    {
      id: 'process',
      title: 'Our Process',
      subtitle: 'From Architecture to Cloud Production',
      desc: 'Our proven 5-stage software engineering lifecycle: Discovery, Architecture Blueprint, Agile Sprints, Hardening, and Cloud Scaling.',
      badge: 'METHODOLOGY',
      icon: Workflow,
      accent: '#10B981',
      path: '/process',
      onClick: (e) => { e.preventDefault(); navigateToProcess(); }
    },
    {
      id: 'contact',
      title: 'Contact',
      subtitle: 'Direct Studio Inbox & Technical Inquiry',
      desc: 'Get in touch with ROVAWARE engineers to discuss project scope, architecture reviews, NDA execution, or request an instant callback.',
      badge: '24HR DISPATCH',
      icon: Mail,
      accent: '#EC4899',
      path: '/about/contact',
      onClick: (e) => { e.preventDefault(); navigateToContact(); }
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      subtitle: 'Next.js 15 & Hybrid SSR Engines',
      desc: 'Ultra-fast Next.js web platforms engineered with hybrid SSR, static edge caching, and sub-second TTFB for mission-critical digital scale.',
      badge: 'CORE ENGINEERING',
      icon: Code2,
      accent: '#FF8C32',
      path: '/services/web-development',
      onClick: (e) => { e.preventDefault(); navigateToServiceDetail('web-development'); }
    },
    {
      id: 'saas-cloud',
      title: 'Cloud & SaaS Scaling',
      subtitle: 'High-Concurrency Backends & Telemetry',
      desc: 'Enterprise-grade multi-tenant database architectures, WebSocket telemetry, high-concurrency microservices, and automated DevOps.',
      badge: 'HIGH CONCURRENCY',
      icon: Cloud,
      accent: '#38BDF8',
      path: '/services/saas-scaling',
      onClick: (e) => { e.preventDefault(); navigateToServiceDetail('saas-scaling'); }
    },
    {
      id: 'ai-agents',
      title: 'AI & Chatbots',
      subtitle: 'Autonomous Agents & Vector RAG',
      desc: 'Production AI systems integrating multi-node agent tool calling, vector search RAG, and WhatsApp / enterprise customer automation.',
      badge: 'AGENTIC AI',
      icon: Bot,
      accent: '#10B981',
      path: '/services/chatbot-integration',
      onClick: (e) => { e.preventDefault(); navigateToServiceDetail('chatbot-integration'); }
    }
  ];

  return (
    <section id="directory" className="section-wrapper explore-shortcuts-section">
      <div className="section-head">
        <div>
          <div className="section-kicker">
            <Sparkles size={14} />
            <span>EXPLORE ROVAWARE DIRECTORY</span>
          </div>
          <h2 className="section-title">
            Quick shortcuts to our <em className="hero-highlight">core practices.</em>
          </h2>
        </div>
        <p className="section-desc">
          Navigate directly to our engineering practices, active career openings, studio standards, and technical consultation pipelines.
        </p>
      </div>

      <div className="shortcuts-grid">
        {shortcutLinks.map((item) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.id}
              href={item.path}
              className="shortcut-card"
              onClick={item.onClick}
              title={`Navigate to ${item.title}`}
            >
              <div className="shortcut-card-header">
                <div
                  className="shortcut-icon-badge"
                  style={{
                    color: item.accent,
                    background: `${item.accent}14`,
                    borderColor: `${item.accent}33`
                  }}
                >
                  <IconComponent size={20} />
                </div>
                <span
                  className="shortcut-badge"
                  style={{
                    color: item.accent,
                    background: `${item.accent}14`
                  }}
                >
                  {item.badge}
                </span>
                <ArrowUpRight size={16} className="shortcut-arrow-icon" />
              </div>
              <h3 className="shortcut-title">{item.title}</h3>
              <p className="shortcut-subtitle">{item.subtitle}</p>
              <p className="shortcut-desc">{item.desc}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function AppContent() {
  // Global luxury magnetic button effect on all CTAs and [data-magnetic] buttons
  useMagneticButtons();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  // Pure HTML5 Browser Routing via BrowserRouter (Strictly NO # Hash Routing)
  const location = useLocation();
  const navigate = useNavigate();

  const getRouteInfo = (pathname) => {
    if (pathname === '/about/company' || pathname === '/about/company/') {
      return { view: 'about-company', slug: null };
    }
    if (pathname === '/about/contact' || pathname === '/about/contact/') {
      return { view: 'about-contact', slug: null };
    }
    if (pathname === '/about/book-project' || pathname === '/about/book-project/') {
      return { view: 'about-book-project', slug: null };
    }
    if (pathname === '/careers' || pathname === '/careers/' || pathname === '/about/careers' || pathname === '/about/careers/') {
      return { view: 'careers', slug: null };
    }
    if (pathname === '/process' || pathname === '/process/' || pathname === '/our-process' || pathname === '/our-process/') {
      return { view: 'process', slug: null };
    }
    if (pathname === '/services' || pathname === '/services/') {
      return { view: 'services-index', slug: null };
    }
    if (pathname.startsWith('/services/')) {
      const serviceSlug = pathname.replace(/^\/services\//, '').replace(/\/$/, '');
      if (serviceSlug) return { view: 'service-detail', slug: serviceSlug };
      return { view: 'services-index', slug: null };
    }
    if (pathname.startsWith('/blog/')) {
      const slug = pathname.replace(/^\/blog\//, '').replace(/\/$/, '');
      if (slug) return { view: 'article', slug };
      return { view: 'blog', slug: null };
    }
    if (pathname === '/blog' || pathname === '/blog/') {
      return { view: 'blog', slug: null };
    }
    if (pathname === '/reveal' || pathname === '/reveal/') {
      return { view: 'reveal', slug: null };
    }
    return { view: 'home', slug: null };
  };

  const { view: currentView, slug: articleSlug } = getRouteInfo(location.pathname);

  // Synchronize document title, meta description, OG tags, and canonical link on route change
  useEffect(() => {
    let title = 'Rovaware';
    let description = 'ROVAWARE is an elite digital engineering studio specializing in high-performance web platforms, modern cloud architectures, enterprise SaaS systems, and autonomous AI solutions.';
    let canonical = 'https://rovaware.com/';

    if (currentView === 'services-index') {
      title = 'Digital Engineering & Growth Services — ROVAWARE';
      description = 'Explore ROVAWARE’s comprehensive engineering suite: high-throughput web apps, mobile systems, cloud architecture, and autonomous AI agents.';
      canonical = 'https://rovaware.com/services';
    } else if (currentView === 'service-detail' && articleSlug) {
      const detail = allServicesDetail && allServicesDetail[articleSlug];
      if (detail) {
        title = `${detail.title} — ROVAWARE Engineering Studio`;
        description = detail.heroHeadline || detail.shortDesc || description;
      } else {
        title = 'Specialized Engineering Service — ROVAWARE';
      }
      canonical = `https://rovaware.com/services/${articleSlug}`;
    } else if (currentView === 'about-company') {
      title = 'About ROVAWARE — Company, Leadership & Engineering Standards';
      description = 'Learn about ROVAWARE’s engineering philosophy, mission, leadership, and our commitment to building resilient, high-performance digital products.';
      canonical = 'https://rovaware.com/about/company';
    } else if (currentView === 'about-contact') {
      title = 'Contact ROVAWARE — Technical Inquiry & Architecture Scoping';
      description = 'Connect with ROVAWARE engineers to discuss project scope, architecture review, or schedule an instant callback consultation.';
      canonical = 'https://rovaware.com/about/contact';
    } else if (currentView === 'about-book-project') {
      title = 'Book a Project — Architecture & Scope Consultation | ROVAWARE';
      description = 'Schedule a comprehensive scoping session with ROVAWARE engineers to architect and build your next-generation digital platform.';
      canonical = 'https://rovaware.com/about/book-project';
    } else if (currentView === 'careers') {
      title = 'Careers & Engineering Opportunities — ROVAWARE';
      description = 'Join our elite engineering studio. Explore high-impact roles in full-stack engineering, AI systems, cloud architecture, and UI/UX design.';
      canonical = 'https://rovaware.com/careers';
    } else if (currentView === 'process') {
      title = 'Our Engineering Process — ROVAWARE Studio';
      description = 'Our proven software development lifecycle: Discovery, Architecture, Agile Sprints, Rigorous Hardening, and Production Cloud Scaling.';
      canonical = 'https://rovaware.com/process';
    } else if (currentView === 'blog') {
      title = 'Blog & Technical Insights — ROVAWARE Engineering';
      description = 'Explore in-depth technical guides, software architecture benchmarks, AI agent workflows, and digital engineering insights from ROVAWARE engineers.';
      canonical = 'https://rovaware.com/blog';
    } else if (currentView === 'article') {
      title = 'Engineering Insight & Article — ROVAWARE';
      canonical = `https://rovaware.com/blog/${articleSlug || ''}`;
    } else if (currentView === 'reveal') {
      title = 'ROVAWARE — Brand Reveal Animation';
      canonical = 'https://rovaware.com/reveal';
    }

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonical);

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute('href', canonical);
  }, [location.pathname, currentView, articleSlug]);
  const [showBrandReveal, setShowBrandReveal] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);
  const aboutDropdownRef = useRef(null);

  const [servicesMegaMenuOpen, setServicesMegaMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const servicesDropdownRef = useRef(null);
  const servicesTimeoutRef = useRef(null);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setServicesMegaMenuOpen(true);
  };

  const handleServicesMouseLeave = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesMegaMenuOpen(false);
    }, 280);
  };

  const navigateToServices = () => {
    navigate('/services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setServicesMegaMenuOpen(false);
    setMobileMenu(false);
    document.title = 'Digital Engineering & Growth Services — ROVAWARE';
  };

  const navigateToServiceDetail = (serviceSlug) => {
    navigate(`/services/${serviceSlug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setServicesMegaMenuOpen(false);
    setMobileMenu(false);
  };

  const navigateToReveal = () => {
    navigate('/reveal');
    setShowBrandReveal(true);
    document.title = 'ROVAWARE — Brand Reveal Animation';
  };

  const navigateToBlog = () => {
    navigate('/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Blog & Insights — ROVAWARE Engineering';
  };

  const navigateToArticle = (slug) => {
    navigate(`/blog/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAboutCompany = () => {
    navigate('/about/company');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'About ROVAWARE — Company, Mission & Engineering Standards';
  };

  const navigateToContact = () => {
    navigate('/about/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Contact ROVAWARE — Direct Technical Inquiry';
  };

  const navigateToBookProject = () => {
    navigate('/about/book-project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Book a Project — ROVAWARE Scope & Architecture Scoping';
  };

  const navigateToCareers = () => {
    navigate('/careers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setAboutDropdownOpen(false);
    setMobileMenu(false);
    document.title = 'Careers & Open Roles — ROVAWARE Engineering Studio';
  };

  const navigateToProcess = () => {
    navigate('/process');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setAboutDropdownOpen(false);
    setMobileMenu(false);
    document.title = 'Our Process — ROVAWARE Engineering Studio';
  };

  const navigateToHome = (anchor = '') => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    document.title = 'Rovaware';
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId, e) => {
    if (e) e.preventDefault();
    setMobileMenu(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Route-Aware Theme Architecture
  const isAboutSuite = currentView === 'about-company' || currentView === 'about-contact' || currentView === 'about-book-project';
  const isServicesSuite = currentView === 'services-index' || currentView === 'service-detail';
  const isUIUXService = currentView === 'service-detail' && articleSlug === 'ui-ux-design';
  const routeTheme = isUIUXService
    ? 'rose-gold'
    : currentView === 'about-contact'
      ? 'emerald-green'
      : (currentView === 'about-company' || currentView === 'about-book-project' || isServicesSuite ? 'orange-black' : 'deep-blue');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.setAttribute('data-route-theme', routeTheme);
    document.documentElement.setAttribute('data-current-view', currentView);

    // Apply route-aware theme classes to document body
    document.body.classList.remove(
      'theme-deep-blue',
      'theme-orange-black',
      'theme-emerald-green',
      'theme-rose-gold',
      'view-home',
      'view-about-company',
      'view-about-contact',
      'view-about-book-project',
      'view-careers',
      'view-about-careers',
      'view-process',
      'view-services-index',
      'view-service-detail',
      'view-blog',
      'view-article'
    );
    document.body.classList.add(`theme-${routeTheme}`, `view-${currentView}`);
  }, [currentView, routeTheme]);

  const [activeCategory, setActiveCategory] = useState('All Works');
  const [portfolioViewMode, setPortfolioViewMode] = useState('3d');
  const [isMuted, setIsMuted] = useState(true);
  const [showcaseCategory, setShowcaseCategory] = useState('Web Applications');
  const [slideDirection, setSlideDirection] = useState('right');
  const [showcaseViewMode, setShowcaseViewMode] = useState('preview');
  // Toggle for testing: set to true to restore previous hero section (saved in memory)
  const [usePreviousHero, setUsePreviousHero] = useState(false);

  useEffect(() => {
    window.__togglePreviousHero = () => {
      setUsePreviousHero((prev) => {
        const next = !prev;
        console.info(`[Hero Toggle] ${next ? 'Restored Previous Hero' : 'Active New Video Hero (rovavideo.mp4)'}`);
        return next;
      });
    };
    return () => {
      delete window.__togglePreviousHero;
    };
  }, []);

  // Navbar transparency: transparent when on hero video, solid frosted when scrolling down past it
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(currentView === 'home');

  useEffect(() => {
    const updateNavbarTransparency = () => {
      if (currentView !== 'home') {
        setIsNavbarTransparent(false);
        return;
      }

      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom;
        // Navbar height is 68px. When the hero video is behind the navbar (heroBottom > 70),
        // it stays transparent. When we go down past the video (heroBottom <= 70),
        // it comes back with its solid frosted background.
        setIsNavbarTransparent(heroBottom > 70);
      } else {
        setIsNavbarTransparent(window.scrollY < 80);
      }
    };

    updateNavbarTransparency();
    window.addEventListener('scroll', updateNavbarTransparency, { passive: true });
    window.addEventListener('resize', updateNavbarTransparency);

    return () => {
      window.removeEventListener('scroll', updateNavbarTransparency);
      window.removeEventListener('resize', updateNavbarTransparency);
    };
  }, [currentView]);

  const handleShowcaseCategoryChange = (newCat) => {
    if (newCat === showcaseCategory) return;
    const order = ['Web Development', 'Web Applications', 'AI Solutions'];
    const oldIdx = order.indexOf(showcaseCategory);
    const newIdx = order.indexOf(newCat);
    setSlideDirection(newIdx >= oldIdx ? 'right' : 'left');
    setShowcaseCategory(newCat);
  };
  const [modalVideo, setModalVideo] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [touchRevealedProject, setTouchRevealedProject] = useState(null);
  const [touchRevealedStat, setTouchRevealedStat] = useState(null);

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

  // Legal Modal Popup State: null | 'privacy' | 'terms' | 'cookies' | 'refund'
  const [legalModalTab, setLegalModalTab] = useState(null);

  const openLegalModal = (tab = 'privacy') => {
    setLegalModalTab(tab);
  };

  const closeLegalModal = () => {
    setLegalModalTab(null);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(e.target)) {
        setAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (legalModalTab) {
          closeLegalModal();
        }
      }
    };
    if (legalModalTab) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else if (!isDemoModalOpen && !isCallbackModalOpen) {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [legalModalTab, isDemoModalOpen, isCallbackModalOpen]);

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
  }, [activeCategory, currentView, location.pathname]);

  const heroVideoRef = useRef(null);

  const toggleMute = () => {
    if (heroVideoRef.current) {
      const nextMuted = !heroVideoRef.current.muted;
      heroVideoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  // Cursor Spotlight & Glowing Border Handlers for About Section Visual Card
  const handleAboutCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--spotlight-x', `${x}px`);
    card.style.setProperty('--spotlight-y', `${y}px`);
  };

  const handleAboutCardMouseEnter = (e) => {
    e.currentTarget.style.setProperty('--spotlight-opacity', '1');
  };

  const handleAboutCardMouseLeave = (e) => {
    e.currentTarget.style.setProperty('--spotlight-opacity', '0');
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

  const currentShowcase = digitalExperienceData.find((item) => item.category === showcaseCategory) || digitalExperienceData[0];

  return (
    <div className={`app-container theme-${routeTheme} view-${currentView}`}>
      {/* Navigation Bar */}
      <header className={`navbar navbar-${routeTheme} navbar-view-${currentView} ${isNavbarTransparent && !mobileMenu ? 'navbar-transparent' : ''}`}>
        <a
          href="/"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenu(false);
            if (currentView !== 'home') {
              navigateToHome();
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
            <img src="/assets/rovaware_icon.png?v=12" alt="RovaWare" className="brand-logo-img" />
          </div>
          <span className="brand-divider" aria-hidden="true" />
          <div className="brand-text-block">
            <div className="brand-text">
              <span className="brand-text-main">ROVA</span>
              <span className="brand-text-accent">WARE</span>
            </div>
            <div className="brand-tagline">ENGINEERING THE DIGITAL FUTURE</div>
          </div>
        </a>

        <nav className={`nav-links ${mobileMenu ? 'open' : ''}`}>
          <a
            href="#work"
            className="nav-link"
            onClick={(e) => scrollToSection('work', e)}
          >
            <NavRollingText text="Our Work" />
          </a>
          {/* DEDICATED SERVICES MEGA MENU (Desktop) */}
          <div
            ref={servicesDropdownRef}
            className={`nav-dropdown-wrapper services-mega-dropdown-wrapper ${servicesMegaMenuOpen ? 'open' : ''}`}
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <a
              href="/services"
              className={`nav-dropdown-trigger nav-link ${isServicesSuite ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setServicesMegaMenuOpen((prev) => !prev);
              }}
              aria-haspopup="true"
              aria-expanded={servicesMegaMenuOpen}
            >
              <NavRollingText text="Services" />
              <ChevronDown size={13} className="nav-chevron-icon" />
            </a>

            <ServicesMegaMenu
              isOpen={servicesMegaMenuOpen}
              currentPath={location.pathname}
              onNavigateService={navigateToServiceDetail}
              onNavigateAllServices={navigateToServices}
              onClose={() => setServicesMegaMenuOpen(false)}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            />
          </div>
          <a
            href="/careers"
            className={`nav-link ${currentView === 'careers' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setMobileMenu(false);
              navigateToCareers();
            }}
          >
            <NavRollingText text="Careers" />
          </a>
          <a
            href="/blog"
            className={`nav-link ${currentView === 'blog' || currentView === 'article' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setMobileMenu(false);
              navigateToBlog();
            }}
          >
            <NavRollingText text="Blog" />
          </a>
          {/* DEDICATED ABOUT DROPDOWN (Desktop) */}
          <div
            ref={aboutDropdownRef}
            className={`nav-dropdown-wrapper ${aboutDropdownOpen ? 'open' : ''}`}
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              type="button"
              className={`nav-dropdown-trigger ${currentView === 'about-company' ||
                currentView === 'about-contact' ||
                currentView === 'about-book-project'
                ? 'active'
                : ''
                }`}
              onClick={(e) => {
                e.preventDefault();
                setAboutDropdownOpen((prev) => !prev);
              }}
              aria-haspopup="true"
              aria-expanded={aboutDropdownOpen}
            >
              <NavRollingText text="About" />
              <ChevronDown size={13} className="nav-chevron-icon" />
            </button>

            <div className="nav-dropdown-menu">
              <a
                href="/about/company"
                className={`nav-dropdown-item ${currentView === 'about-company' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setAboutDropdownOpen(false);
                  setMobileMenu(false);
                  navigateToAboutCompany();
                }}
              >
                <div className="dropdown-item-icon">
                  <Building2 size={16} />
                </div>
                <div className="dropdown-item-text">
                  <span className="dropdown-item-title">About Company</span>
                  <span className="dropdown-item-desc">Who we are, mission & values</span>
                </div>
              </a>

              <a
                href="/careers"
                className={`nav-dropdown-item ${currentView === 'careers' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setAboutDropdownOpen(false);
                  setMobileMenu(false);
                  navigateToCareers();
                }}
              >
                <div className="dropdown-item-icon">
                  <Briefcase size={16} />
                </div>
                <div className="dropdown-item-text">
                  <span className="dropdown-item-title">Careers</span>
                  <span className="dropdown-item-desc">Join our elite engineering studio</span>
                </div>
              </a>

              <a
                href="/about/contact"
                className={`nav-dropdown-item ${currentView === 'about-contact' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setAboutDropdownOpen(false);
                  setMobileMenu(false);
                  navigateToContact();
                }}
              >
                <div className="dropdown-item-icon">
                  <Mail size={16} />
                </div>
                <div className="dropdown-item-text">
                  <span className="dropdown-item-title">Contact</span>
                  <span className="dropdown-item-desc">Direct studio inbox & verified inquiries</span>
                </div>
              </a>

              <a
                href="/about/book-project"
                className={`nav-dropdown-item ${currentView === 'about-book-project' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setAboutDropdownOpen(false);
                  setMobileMenu(false);
                  navigateToBookProject();
                }}
              >
                <div className="dropdown-item-icon">
                  <CalendarCheck size={16} />
                </div>
                <div className="dropdown-item-text">
                  <span className="dropdown-item-title">Book a Project</span>
                  <span className="dropdown-item-desc">Scope, budget & timeline onboarding</span>
                </div>
              </a>
            </div>
          </div>

          {/* Mobile Services Accordion in drawer */}
          <div className="mobile-dropdown-group">
            <button
              type="button"
              className={`mobile-dropdown-header ${isServicesSuite ? 'active' : ''}`}
              onClick={() => setMobileServicesExpanded((prev) => !prev)}
            >
              <NavRollingText text="Services" />
              <ChevronDown
                size={16}
                className={`nav-chevron-icon ${mobileServicesExpanded ? 'open' : ''}`}
                style={{ transform: mobileServicesExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }}
              />
            </button>
            {mobileServicesExpanded && (
              <div className="mobile-dropdown-items">
                <a
                  href="/services"
                  className={`mobile-dropdown-sublink ${currentView === 'services-index' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenu(false);
                    navigateToServices();
                  }}
                  style={{ color: '#38BDF8', fontWeight: 700 }}
                >
                  <Sparkles size={14} />
                  <span>All Services Overview</span>
                </a>
                {serviceCategories.map((cat) => (
                  <div key={cat.id} style={{ margin: '6px 0 10px', paddingLeft: '8px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: cat.accent, letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}>
                      {cat.title}
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '8px' }}>
                      {cat.services.map((s) => (
                        <a
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className={`mobile-dropdown-sublink ${location.pathname === `/services/${s.slug}` ? 'active' : ''}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setMobileMenu(false);
                            navigateToServiceDetail(s.slug);
                          }}
                        >
                          <span>{s.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Accordion in drawer */}
          <div className="mobile-dropdown-group">
            <button
              type="button"
              className={`mobile-dropdown-header ${currentView === 'about-company' ||
                currentView === 'about-contact' ||
                currentView === 'about-book-project'
                ? 'active'
                : ''
                }`}
              onClick={() => setMobileAboutExpanded((prev) => !prev)}
            >
              <NavRollingText text="About" />
              <ChevronDown
                size={16}
                className={`nav-chevron-icon ${mobileAboutExpanded ? 'open' : ''}`}
                style={{ transform: mobileAboutExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }}
              />
            </button>
            {mobileAboutExpanded && (
              <div className="mobile-dropdown-items">
                <a
                  href="/about/company"
                  className={`mobile-dropdown-sublink ${currentView === 'about-company' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenu(false);
                    navigateToAboutCompany();
                  }}
                >
                  <Building2 size={15} />
                  <span>About Company</span>
                </a>
                <a
                  href="/careers"
                  className={`mobile-dropdown-sublink ${currentView === 'careers' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenu(false);
                    navigateToCareers();
                  }}
                >
                  <Briefcase size={15} />
                  <span>Careers</span>
                </a>
                <a
                  href="/about/contact"
                  className={`mobile-dropdown-sublink ${currentView === 'about-contact' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenu(false);
                    navigateToContact();
                  }}
                >
                  <Mail size={15} />
                  <span>Contact</span>
                </a>
                <a
                  href="/about/book-project"
                  className={`mobile-dropdown-sublink ${currentView === 'about-book-project' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenu(false);
                    navigateToBookProject();
                  }}
                >
                  <CalendarCheck size={15} />
                  <span>Book a Project</span>
                </a>
              </div>
            )}
          </div>

          <a
            href="/process"
            className={`nav-link ${currentView === 'process' ? 'active' : ''}`}
            onClick={(e) => {
              if (currentView === 'home') {
                scrollToSection('process', e);
              } else {
                e.preventDefault();
                setMobileMenu(false);
                navigateToProcess();
              }
            }}
          >
            <NavRollingText text="Process" />
          </a>
          <a
            href="#faqs"
            className="nav-link"
            onClick={(e) => scrollToSection('faqs', e)}
          >
            <NavRollingText text="FAQs" />
          </a>

          {/* Mobile Drawer CTAs */}
          <button
            type="button"
            className="mobile-drawer-cta mobile-drawer-contact-btn"
            onClick={() => {
              setMobileMenu(false);
              setIsCallbackModalOpen(true);
            }}
            style={{ marginBottom: '8px' }}
          >
            <PhoneCall size={14} style={{ marginRight: '6px' }} />
            <span>Request a Callback</span>
          </button>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-drawer-cta"
            onClick={() => setMobileMenu(false)}
          >
            <span>Book Demo</span>
            <ArrowUpRight size={15} />
          </a>
        </nav>

        <div className="nav-right">
          <button
            type="button"
            className="btn-nav-contact"
            onClick={() => setIsCallbackModalOpen(true)}
            title="Request a Callback"
          >
            <PhoneCall size={13} />
            <span>Request a Callback</span>
          </button>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-nav-cta ${isDemoModalOpen ? 'active' : ''}`}
            style={{ textDecoration: 'none' }}
            title="Book a Demo Session"
            data-no-magnetic="true"
          >
            <span>Book Demo</span> <ArrowUpRight size={14} />
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

      {/* Standalone Brand Particle Reveal View or Modal Overlay */}
      {(currentView === 'reveal' || showBrandReveal) && (
        <BrandReveal
          standalone={currentView === 'reveal'}
          onClose={() => {
            setShowBrandReveal(false);
            if (currentView === 'reveal') {
              navigateToHome();
            }
          }}
          onComplete={() => {
            // Reveal animation completed
          }}
        />
      )}

      {currentView === 'blog' && (
        <div key="blog" className="cinematic-view-transition">
          <BlogView
            onSelectArticle={navigateToArticle}
            onNavigateHome={() => navigateToHome()}
          />
        </div>
      )}

      {currentView === 'article' && (
        <div key={`article-${articleSlug}`} className="cinematic-view-transition">
          <ArticleDetailView
            slug={articleSlug}
            onNavigateBlog={navigateToBlog}
            onSelectArticle={navigateToArticle}
            onNavigateHome={() => navigateToHome()}
          />
        </div>
      )}

      {currentView === 'about-company' && (
        <div key="about-company" className="cinematic-view-transition">
          <AboutCompanyView
            onNavigateHome={() => navigateToHome()}
            onNavigateContact={navigateToContact}
            onNavigateBookProject={navigateToBookProject}
            onNavigateBlog={navigateToBlog}
            onNavigateWork={() => navigateToHome('work')}
          />
        </div>
      )}

      {currentView === 'about-contact' && (
        <div key="about-contact" className="cinematic-view-transition">
          <ContactView
            onNavigateHome={() => navigateToHome()}
            onNavigateBookProject={navigateToBookProject}
          />
        </div>
      )}

      {currentView === 'about-book-project' && (
        <div key="about-book-project" className="cinematic-view-transition">
          <BookProjectView
            onNavigateHome={() => navigateToHome()}
            onNavigateContact={navigateToContact}
          />
        </div>
      )}

      {currentView === 'careers' && (
        <div key="careers" className="cinematic-view-transition">
          <CareersView
            onNavigateHome={() => navigateToHome()}
            onNavigateContact={navigateToContact}
            onNavigateBookProject={navigateToBookProject}
          />
        </div>
      )}

      {currentView === 'process' && (
        <div key="process" className="cinematic-view-transition">
          <ProcessView
            onNavigateHome={() => navigateToHome()}
            onNavigateContact={navigateToContact}
            onNavigateBookProject={navigateToBookProject}
          />
        </div>
      )}

      {currentView === 'services-index' && (
        <div key="services-index" className="cinematic-view-transition">
          <ServicesIndexView
            onNavigateHome={() => navigateToHome()}
            onNavigateService={navigateToServiceDetail}
            onNavigateBookProject={navigateToBookProject}
            onNavigateContact={navigateToContact}
          />
        </div>
      )}

      {currentView === 'service-detail' && (
        <div key={`service-${articleSlug}`} className="cinematic-view-transition">
          <ServiceDetailView
            slug={articleSlug}
            onNavigateHome={() => navigateToHome()}
            onNavigateAllServices={navigateToServices}
            onNavigateService={navigateToServiceDetail}
            onNavigateBookProject={navigateToBookProject}
            onNavigateContact={navigateToContact}
          />
        </div>
      )}

      {currentView === 'home' && (
        <main id="top" className="cinematic-view-transition">
          {/* CINEMATIC HERO SECTION
              Default: Full interactive cinematic hero with animated copy & CTAs.
              Toggle window.__togglePreviousHero() to switch to plain VideoHeroSection (rovavideo.mp4) anytime. */}
          {usePreviousHero ? (
            <VideoHeroSection videoSrc="/rovavideo.mp4" />
          ) : (
            <section id="hero" className="hero hero-full-bg">
              {/* Full Background Video Layer */}
              <div className="hero-bg-video-container" aria-hidden="true">
                <video
                  key="original-hero-video-10s"
                  ref={heroVideoRef}
                  className="hero-bg-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/assets/hero.mp4?v=orig10s" type="video/mp4" />
                </video>
                <div className="hero-bg-overlay" />
                <div className="hero-bg-glow" />
                <div className="hero-ambient-spotlight" />
              </div>

              <div className="hero-grid" />

              {/* Centered High-Impact Copy */}
              <div className="hero-container">
                <div className="hero-copy">
                  <h1 className="hero-headline-animated">
                    <span className="hero-title-line">
                      <span className="word-mask"><span className="word-reveal" style={{ '--w-delay': '120ms' }}>Turn</span></span>{' '}
                      <span className="word-mask"><span className="word-reveal" style={{ '--w-delay': '200ms' }}>bold</span></span>{' '}
                      <span className="word-mask"><span className="word-reveal" style={{ '--w-delay': '280ms' }}>ideas</span></span>{' '}
                      <span className="word-mask"><span className="word-reveal" style={{ '--w-delay': '360ms' }}>into</span></span>
                    </span>{' '}
                    <br />
                    <span className="hero-highlight-wrap">
                      <span className="word-mask">
                        <span className="word-reveal" style={{ '--w-delay': '460ms' }}>
                          <span className="hero-highlight">digital</span>
                        </span>
                      </span>{' '}
                      <span className="word-mask">
                        <span className="word-reveal" style={{ '--w-delay': '540ms' }}>
                          <span className="hero-highlight">reality.</span>
                        </span>
                      </span>
                      <span className="hero-highlight-sweep" aria-hidden="true" />
                    </span>
                  </h1>
                  <p className="hero-desc-animated">
                    We build high-performance websites, web apps, and AI solutions that grow your business.
                  </p>

                  <div className="hero-actions hero-actions-animated">
                    <a
                      href="#contact"
                      className="btn primary"
                    >
                      <span>Start a Project</span> <ArrowUpRight size={16} />
                    </a>
                    <a href="#work" className="btn ghost">
                      <span className="play-ring">
                        <Play size={12} fill="#38BDF8" color="#38BDF8" style={{ marginLeft: 2 }} />
                      </span>
                      <span>See What We Build</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ROVAWARE ENGINEERING METRICS & CAPABILITIES COUNTER */}
          <EngineeringStatsCounter />

          {/* SELECTED WORK / WHAT WE BUILD 3D SHOWCASE */}
          <section id="work" className="section-wrapper portfolio-showcase-section">
            {portfolioViewMode === '3d' ? (
              <div style={{ position: 'relative', width: '100%' }}>
                {/* Subtle View Switcher in Top Right */}
                <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 30 }}>
                  <div className="portfolio-view-switcher">
                    <button
                      type="button"
                      className={`view-switch-btn ${portfolioViewMode === '3d' ? 'active' : ''}`}
                      onClick={() => setPortfolioViewMode('3d')}
                      title="3D Showcase"
                    >
                      <Layers size={13} />
                      <span>3D View</span>
                    </button>
                    <button
                      type="button"
                      className={`view-switch-btn ${portfolioViewMode === 'grid' ? 'active' : ''}`}
                      onClick={() => setPortfolioViewMode('grid')}
                      title="Classic Grid"
                    >
                      <Layout size={13} />
                      <span>Grid View</span>
                    </button>
                  </div>
                </div>

                <ProductionDeploymentsOrbit
                  projects={filteredProjects}
                  onSelectProject={(p) => setModalVideo(p)}
                  activeCategory={activeCategory}
                />
              </div>
            ) : (
              <div>
                <div className="section-head">
                  <div>
                    <h2 className="section-title">
                      Architected for scale, <em className="hero-highlight">crafted for impact.</em>
                    </h2>
                  </div>
                </div>

                <div className="portfolio-grid-header">
                  <div>
                    <h3 className="grid-header-title">All Production Deployments</h3>
                    <span className="grid-header-count">{filteredProjects.length} Systems Online</span>
                  </div>

                  <div className="portfolio-view-switcher">
                    <button
                      type="button"
                      className={`view-switch-btn ${portfolioViewMode === '3d' ? 'active' : ''}`}
                      onClick={() => setPortfolioViewMode('3d')}
                      title="3D Showcase"
                    >
                      <Layers size={13} />
                      <span>3D View</span>
                    </button>
                    <button
                      type="button"
                      className={`view-switch-btn ${portfolioViewMode === 'grid' ? 'active' : ''}`}
                      onClick={() => setPortfolioViewMode('grid')}
                      title="Classic Grid"
                    >
                      <Layout size={13} />
                      <span>Grid View</span>
                    </button>
                  </div>
                </div>

                <div className="portfolio-grid stagger-reveal">
                {filteredProjects.map((p) => (
                  <article
                    key={p.id}
                    className={`project-card modern-showcase ${touchRevealedProject === p.id ? 'touch-revealed' : ''}`}
                    onClick={() => setModalVideo(p)}
                    onMouseEnter={() => setTouchRevealedProject(p.id)}
                    onMouseLeave={() => {
                      if (touchRevealedProject === p.id) setTouchRevealedProject(null);
                    }}
                    onTouchStart={() => {
                      setTouchRevealedProject((prev) => (prev === p.id ? null : p.id));
                    }}
                    title={`Click to preview ${p.title}`}
                  >
                    {/* Mouse-Triggered Slide-Down Text Reveal Badge */}
                    <div className="card-reveal-wrap project-reveal-wrap" aria-hidden="true">
                      <div className="card-reveal-badge">
                        <span className="reveal-dot" />
                        <span className="reveal-label">{p.revealText || 'VERIFIED ENTERPRISE DEPLOYMENT'}</span>
                        <ArrowUpRight size={11} className="reveal-arrow" />
                      </div>
                    </div>

                    {/* Elevated Front Browser Showcase Frame */}
                    <div className="project-browser-frame">
                      <div className="browser-window-bar">
                        <div className="browser-dots">
                          <span className="b-dot b-red" />
                          <span className="b-dot b-yellow" />
                          <span className="b-dot b-green" />
                        </div>
                        <div className="browser-url-pill">
                          <Lock size={10} />
                          <span>{p.url ? p.url.replace('https://', '') : p.title}</span>
                        </div>
                        {p.url && (
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="browser-quick-link"
                            onClick={(e) => e.stopPropagation()}
                            title={`Open ${p.url}`}
                          >
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>

                      <div className="project-media-viewport">
                        {p.video ? (
                          <video
                            src={p.video}
                            poster={p.img}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="project-video-preview"
                          />
                        ) : (
                          <img src={p.img} alt={p.title} loading="lazy" />
                        )}
                        <div className="media-hover-overlay">
                          <span className="live-view-badge">
                            <span>Click to Preview Details</span>
                            <ArrowUpRight size={13} />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Details Body */}
                    <div className="project-card-body">
                      <div className="project-card-header-row">
                        <span className="project-client-pill">{p.client}</span>
                        <span className="live-status-pill">
                          <span className="live-pulse-dot" /> LIVE PLATFORM
                        </span>
                      </div>

                      <h3 className="project-card-title">{p.title}</h3>
                      <p className="project-card-summary">{p.summary}</p>

                      <div className="project-card-footer">
                        <div className="project-tags">
                          {p.tags.map((tag) => (
                            <span key={tag} className="tag-pill">{tag}</span>
                          ))}
                        </div>

                        <div className="project-card-btn-group">
                          <button
                            type="button"
                            className="project-view-stage-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setModalVideo(p);
                            }}
                          >
                            <Eye size={13} />
                            <span>Preview</span>
                          </button>
                          {p.url && (
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-direct-btn"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>Live Site</span>
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Mobile Side-Scroll Hint */}
              <div className="portfolio-mobile-scroll-hint">
                <span className="scroll-hint-dot" />
                <span>Swipe horizontally to view systems ({filteredProjects.length})</span>
              </div>
            </div>
          )}
        </section>


          {/* ABOUT STUDIO SECTION */}
          <section id="about" className="section-wrapper about-section">
            <div className="section-head">
              <div>
                <div className="section-kicker">
                  <Sparkles size={14} />
                  <span>ABOUT ROVAWARE STUDIO</span>
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
              <div className="about-visual-sticky-col">
                <div
                  className="about-visual-card scroll-reveal"
                  onMouseMove={handleAboutCardMouseMove}
                  onMouseEnter={handleAboutCardMouseEnter}
                  onMouseLeave={handleAboutCardMouseLeave}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/assets/experience.jpg"
                    className="about-studio-img about-studio-video"
                    onLoadedData={(e) => {
                      e.currentTarget.play().catch(() => { });
                    }}
                  >
                    <source src="/assets/about_experience.mp4" type="video/mp4" />
                    <source src="https://videos.pexels.com/video-files/33230268/14159465_3840_2160_25fps.mp4" type="video/mp4" />
                  </video>

                  {/* Cursor Spotlight Soft Radial Light */}
                  <div className="about-spotlight-layer" aria-hidden="true" />

                  {/* Subtle Animated Cyan-Purple Glowing Border on Hover */}
                  <div className="about-glowing-border" aria-hidden="true" />

                  <div className="about-badge-overlay">
                    <span className="about-badge-num">100%</span>
                    <span className="about-badge-label">Tailored Digital Solutions</span>
                  </div>
                </div>
              </div>

              <div className="about-content">
                <h3>Good ideas deserve great execution.</h3>
                <p>
                  At Rovaware Studio, we combine creative thinking, modern web technologies, and a problem-solving mindset to build digital products that are functional, user-friendly, and designed around real business needs.
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
                    <span>Start a Project</span> <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 5-STAGE ROVAWARE PROCESS */}
          <ProcessSection />

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

            <TechStackShowcase />
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

            <div className="faqs-layout-grid">
              {/* Left Column: FAQ Accordion */}
              <div className="faqs-accordion stagger-reveal">
                {faqsList.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  const isExtra = idx >= 3 && !showAllFaqs;
                  return (
                    <div
                      key={idx}
                      className={`faq-card ${isOpen ? 'active' : ''} ${isExtra ? 'faq-item-extra' : ''}`}
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

                {faqsList.length > 3 && (
                  <button
                    type="button"
                    className="faq-view-all-btn"
                    onClick={() => setShowAllFaqs((prev) => !prev)}
                    aria-expanded={showAllFaqs}
                  >
                    <span>{showAllFaqs ? 'View Less' : 'View All'}</span>
                    <ChevronDown size={16} className={`faq-view-all-icon ${showAllFaqs ? 'rotated' : ''}`} />
                  </button>
                )}
              </div>

              {/* Right Column: Rovaware Engineering Team Showcase Photo */}
              <div className="faqs-visual-col">
                <div className="faqs-image-card">
                  <img
                    src="/assets/rovaware_team_faq.jpg"
                    alt="Rovaware Engineering & Digital Studio Team"
                    className="faqs-team-img"
                    loading="lazy"
                  />
                  <div className="faqs-image-overlay">
                    <div className="faqs-badge">
                      <Sparkles size={13} />
                      <span>DIRECT ENGINEERING COLLABORATION</span>
                    </div>
                    <p className="faqs-overlay-caption">
                      Have a custom technical challenge? Speak directly with our core engineering team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* EXPLORE DIRECTORY & SHORTCUTS (WYREFLOW STYLE) */}
          <ExploreShortcutsSection
            navigateToCareers={navigateToCareers}
            navigateToServices={navigateToServices}
            navigateToAboutCompany={navigateToAboutCompany}
            navigateToProcess={navigateToProcess}
            navigateToContact={navigateToContact}
            navigateToServiceDetail={navigateToServiceDetail}
          />

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
                      <strong>Rovaware Dispatch Included</strong>
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

          {/* INFINITE PERSPECTIVE SERVICES CAROUSEL */}
          <ServicesMarquee
            onSelectService={(slug) => navigateToServiceDetail(slug)}
          />
        </main>
      )}

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              href="/"
              className="nav-brand"
              onClick={(e) => {
                e.preventDefault();
                if (currentView !== 'home') {
                  navigateToHome();
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              style={{ textDecoration: 'none' }}
              title="Rovaware Studio"
            >
              <div className="brand-icon-box">
                <img src="/assets/rovaware_icon.png?v=12" alt="RovaWare" className="brand-logo-img" />
              </div>
              <span className="brand-divider" aria-hidden="true" />
              <div className="brand-text-block">
                <div className="brand-text">
                  <span className="brand-text-main">ROVA</span>
                  <span className="brand-text-accent">WARE</span>
                </div>
                <div className="brand-tagline">ENGINEERING THE DIGITAL FUTURE</div>
              </div>
            </a>
            <p>
              We turn ambitious ideas into digital experiences through modern web development and AI solutions.
            </p>

            <a
              href="mailto:hello@rovaware.com"
              className="footer-email-box"
              title="Send email to Rovaware"
            >
              <Mail size={14} className="footer-email-icon" />
              <span>hello@rovaware.com</span>
            </a>

            {/* Glowing Social Media Icons */}
            <FooterSocialIcons />
          </div>

          <div className="footer-links-group stagger-reveal">
            {/* Explore */}
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="#work" onClick={(e) => scrollToSection('work', e)}>Our Work</a></li>
                <li><a href="/about/company" onClick={(e) => { e.preventDefault(); navigateToAboutCompany(); }}>About Company</a></li>
                <li><a href="/careers" onClick={(e) => { e.preventDefault(); navigateToCareers(); }}>Careers</a></li>
                <li><a href="/about/contact" onClick={(e) => { e.preventDefault(); navigateToContact(); }}>Contact Studio</a></li>
                <li><a href="/about/book-project" onClick={(e) => { e.preventDefault(); navigateToBookProject(); }}>Book a Project</a></li>
                <li><a href="/process" onClick={(e) => {
                  if (currentView === 'home') {
                    scrollToSection('process', e);
                  } else {
                    e.preventDefault();
                    navigateToProcess();
                  }
                }}>Our Process</a></li>
                <li><a href="#faqs" onClick={(e) => scrollToSection('faqs', e)}>FAQs</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="/services/web-development" onClick={(e) => { e.preventDefault(); navigateToServiceDetail('web-development'); }}>Web Development</a></li>
                <li><a href="/services/chatbot-integration" onClick={(e) => { e.preventDefault(); navigateToServiceDetail('chatbot-integration'); }}>AI & Chatbots</a></li>
                <li><a href="/services/saas-scaling" onClick={(e) => { e.preventDefault(); navigateToServiceDetail('saas-scaling'); }}>SaaS & Cloud Scaling</a></li>
                <li><a href="/services/android-development" onClick={(e) => { e.preventDefault(); navigateToServiceDetail('android-development'); }}>Android Development</a></li>
                <li><a href="/services/ui-ux-design" onClick={(e) => { e.preventDefault(); navigateToServiceDetail('ui-ux-design'); }}>UI/UX Design</a></li>
                <li><a href="/services" onClick={(e) => { e.preventDefault(); navigateToServices(); }} style={{ color: '#38BDF8', fontWeight: 600 }}>All 9 Services →</a></li>
              </ul>
            </div>

            {/* Resources (NEW - Blog & Engineering Insights) */}
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="/blog" onClick={(e) => { e.preventDefault(); navigateToBlog(); }}>Blog & Insights</a></li>
                <li><a href="/blog" onClick={(e) => { e.preventDefault(); navigateToBlog(); }}>AI & Automation</a></li>
                <li><a href="/blog" onClick={(e) => { e.preventDefault(); navigateToBlog(); }}>Architecture Guides</a></li>
                <li><a href="/blog" onClick={(e) => { e.preventDefault(); navigateToBlog(); }}>Tech Radar</a></li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="footer-col">
              <h4>Get in Touch</h4>
              <ul>
                <li><a href="/about/contact" onClick={(e) => { e.preventDefault(); navigateToContact(); }}>Contact Desk</a></li>
                <li><a href="/about/book-project" onClick={(e) => { e.preventDefault(); navigateToBookProject(); }}>Book a Project</a></li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="footer-link-btn"
                  >
                    Start a Project
                  </button>
                </li>
                <li><a href="mailto:hello@rovaware.com">Email Us</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#privacy" onClick={(e) => { e.preventDefault(); openLegalModal('privacy'); }}>Privacy Policy</a></li>
                <li><a href="#terms" onClick={(e) => { e.preventDefault(); openLegalModal('terms'); }}>Terms of Service</a></li>
                <li><a href="#cookies" onClick={(e) => { e.preventDefault(); openLegalModal('cookies'); }}>Cookie Policy</a></li>
                <li><a href="#refund" onClick={(e) => { e.preventDefault(); openLegalModal('refund'); }}>Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* INTERACTIVE OVERSIZED ROVAWARE TYPOGRAPHY WORDMARK (THEME-AWARE) */}
        <InteractiveFooterTypography theme={routeTheme} />

        <div className="footer-bottom">
          <span>© 2026 ROVAWARE STUDIO. ALL RIGHTS RESERVED.</span>
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
                  {modalVideo.video ? (
                    <video
                      src={modalVideo.video}
                      poster={modalVideo.img}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="theater-preview-media"
                    />
                  ) : (
                    <img
                      src={modalVideo.img}
                      alt={modalVideo.title}
                      className="theater-preview-media"
                    />
                  )}
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
                <video autoPlay controls playsInline src="/assets/hero.mp4?v=orig10s">
                  Your browser does not support HTML5 video.
                </video>
              </div>
            )}

            <div className="theater-hud-bar">
              {modalVideo.url ? (
                <>
                  <span>FRAMEWORK: <strong>NEXT.JS 15 & REACT</strong></span>
                  <span>CLIENT: <strong>{(modalVideo.client || '').toUpperCase()}</strong></span>
                  <span>STATUS: <strong>PRODUCTION LIVE 🔵</strong></span>
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

      {/* LEGAL POLICIES POPUP MODAL */}
      <LegalModal
        isOpen={Boolean(legalModalTab)}
        activeTab={legalModalTab || 'privacy'}
        onSelectTab={(tab) => {
          setLegalModalTab(tab);
        }}
        onClose={closeLegalModal}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
