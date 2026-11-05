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
  Briefcase
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
import { serviceCategories } from './components/services/servicesData';
import './styles/services.css';
import BrandReveal from './components/brand/BrandReveal';
import InteractiveFooterTypography from './components/footer/InteractiveFooterTypography';
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
    img: '/assets/asa_epc.jpg',
    tags: ['Next.js 15', 'Solar EPC', 'Enterprise Web', 'High Performance', 'DPIIT Recognized'],
    summary: 'DPIIT-recognized Solar EPC company trusted by L&T Construction, Bajaj & KEC. High-performance Next.js web application built for 100+ projects across India & UAE.'
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
    img: '/assets/rathore_construction.jpg',
    tags: ['Next.js', 'JCB 3DX Rental', 'Civil Infrastructure', 'Earthmoving', 'Vercel Fast'],
    summary: 'Heavy equipment rental & earthmoving solutions platform for JCB excavation, roadwork, rock breaking, and pipeline infrastructure across Madhya Pradesh.'
  },
  {
    id: 'vertex-shops',
    title: 'Vertex Shops — Streamlined Virtual Store & Stage Experience',
    category: 'Web Platforms',
    client: 'Vertex Retail Systems',
    duration: 'Live Platform',
    type: 'featured',
    aspect: 'WebGL • Canvas Engine • CSS3',
    url: '/vertex-shops.html',
    img: '/assets/workspace.jpg',
    tags: ['WebGL Stage', 'Virtual Retail', 'Sub-second Load', 'Adaptive Canvas', 'High Fidelity'],
    summary: 'Immersive virtual commerce stage designed for luxury digital retail. Features a calibrated 1172x657 canvas, dynamic product showcases, and interactive 3D camera controls.'
  },
  {
    id: 'nextgen-saas-portal',
    title: 'Real-Time Interactive Dashboards & SaaS Monitoring Hub',
    category: 'SaaS & Web Apps',
    client: 'Rovaware Cloud Analytics',
    duration: 'Live System',
    type: 'secondary',
    aspect: 'React 19 • WebSockets • FastAPI',
    url: 'https://asa-epc.com',
    img: '/assets/showcase_dashboard.jpg',
    tags: ['React 19', 'WebSockets', 'Telemetry', 'FastAPI', 'High Concurrency'],
    summary: 'Enterprise-grade monitoring dashboard featuring real-time telemetry streaming, interactive data visualization, role-based RBAC, and sub-millisecond Redis caching.'
  },
  {
    id: 'autonomous-ai-engine',
    title: 'Autonomous AI Agents & Vector Retrieval RAG Pipeline',
    category: 'AI Solutions',
    client: 'NeuralCore Systems',
    duration: 'Production Engine',
    type: 'secondary',
    aspect: 'Python • Qdrant • LangChain',
    url: 'https://asa-epc.com',
    img: '/assets/showcase_ai.jpg',
    tags: ['Python', 'Qdrant Vector DB', 'LangChain', 'Zero-Latency SSE', 'RAG Engine'],
    summary: 'Custom autonomous AI workflows integrating Large Language Models, semantic search embeddings, and tool-calling agents for contextual multi-step reasoning.'
  },
  {
    id: 'hybrid-web-architecture',
    title: 'High-Performance Next.js Architecture & Brand Ecosystems',
    category: 'Web Platforms',
    client: 'OmniScale Digital',
    duration: 'Production Framework',
    type: 'secondary',
    aspect: 'Next.js 15 • TypeScript • Edge CDN',
    url: 'https://asa-epc.com',
    img: '/assets/showcase_web_dev.jpg',
    tags: ['Next.js 15', 'TypeScript', 'Edge Cache', '100% Lighthouse', 'Zero-JS Hydration'],
    summary: 'Ultra-fast web platforms engineered with hybrid server-side rendering, sub-50ms TTFB edge caching, dynamic OpenGraph previews, and fluid responsive design.'
  },
  {
    id: 'cloud-infrastructure-pipeline',
    title: 'Scalable Cloud CI/CD & Microservices Mesh',
    category: 'Cloud Infrastructure',
    client: 'DevOps Mesh Labs',
    duration: 'Cloud Infrastructure',
    type: 'secondary',
    aspect: 'Docker • Kubernetes • Terraform',
    url: 'https://asa-epc.com',
    img: '/assets/pipeline.jpg',
    tags: ['Docker', 'Kubernetes', 'Terraform', 'Zero Downtime', 'Edge Routing'],
    summary: 'Automated CI/CD deployment pipelines, container orchestration, zero-downtime rolling upgrades, and distributed edge CDN delivery for enterprise scale.'
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
      'We engineer ultra-fast, responsive web platforms built on Next.js, modern React, and TailwindCSS. Engineered with hybrid server-side rendering, sub-second page loads, edge caching, and semantic accessibility for an elevated digital brand presence.',
    image: '/assets/showcase_web_dev.jpg',
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
      'Enterprise-grade full-stack web applications featuring real-time data streaming, interactive monitoring dashboards, modular micro-frontends, role-based access control, and resilient REST/GraphQL API hubs built for high concurrency.',
    image: '/assets/showcase_dashboard.jpg',
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
      'Custom AI solutions integrating advanced Large Language Models, Retrieval-Augmented Generation (RAG) vector pipelines, semantic search engines, and autonomous multi-step reasoning agents that automate complex workflows and surface contextual intelligence.',
    image: '/assets/showcase_ai.jpg',
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
      '📞 *NEW CALLBACK REQUEST — ROVAWARE STUDIO*',
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
              <CheckCircle2 size={36} color="#38BDF8" />
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
function ProductionDeploymentsOrbit({ projects, onSelectProject, activeCategory }) {
  const [angle, setAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = clockwise, -1 = counter
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const stageRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const targetTilt = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);
  const touchStartRef = useRef({ x: 0, angle: 0 });
  const isDraggingRef = useRef(false);

  // Responsive radii and card dimensions
  const [dimensions, setDimensions] = useState({
    rx: 480,
    rz: 210,
    cardW: 330,
    cardH: 225,
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      if (w > 1280) {
        setDimensions({ rx: 480, rz: 210, cardW: 330, cardH: 225 });
      } else if (w > 1024) {
        setDimensions({ rx: 400, rz: 175, cardW: 300, cardH: 210 });
      } else if (w > 768) {
        setDimensions({ rx: 310, rz: 140, cardW: 260, cardH: 195 });
      } else if (w > 480) {
        setDimensions({ rx: 220, rz: 100, cardW: 210, cardH: 165 });
      } else {
        setDimensions({ rx: 165, rz: 80, cardW: 175, cardH: 145 });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Continuous animation loop
  useEffect(() => {
    let prevTime = performance.now();

    const loop = (time) => {
      const delta = Math.min((time - prevTime) / 1000, 0.1);
      prevTime = time;

      if (!isPaused && !prefersReducedMotion) {
        // Slow down smoothly when a project card is hovered
        const activeMultiplier = hoveredProjectId ? 0.2 : speedMultiplier;
        setAngle((prev) => (prev + direction * 10 * activeMultiplier * delta) % 360);
      }

      // Smooth tilt lerping for mouse parallax
      setTilt((prev) => {
        if (prefersReducedMotion) return { x: 0, y: 0 };
        const dx = targetTilt.current.x - prev.x;
        const dy = targetTilt.current.y - prev.y;
        if (Math.abs(dx) < 0.001 && Math.abs(dy) < 0.001) return prev;
        return {
          x: prev.x + dx * 0.08,
          y: prev.y + dy * 0.08,
        };
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isPaused, speedMultiplier, direction, hoveredProjectId, prefersReducedMotion]);

  // Mouse move parallax handler
  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    targetTilt.current = {
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    };
  };

  const handleMouseLeave = () => {
    targetTilt.current = { x: 0, y: 0 };
    setHoveredProjectId(null);
  };

  // Touch drag handlers for mobile & tablet
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      touchStartRef.current = {
        x: e.touches[0].clientX,
        angle: angle,
      };
    }
  };

  const handleTouchMove = (e) => {
    if (isDraggingRef.current && e.touches.length === 1) {
      const deltaX = e.touches[0].clientX - touchStartRef.current.x;
      setAngle(touchStartRef.current.angle + deltaX * 0.35);
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  const displayProjects = projects && projects.length > 0 ? projects : projectsData;
  const orbitItems =
    displayProjects.length < 4
      ? [...displayProjects, ...displayProjects, ...displayProjects].slice(0, 6)
      : displayProjects;

  const activeProject =
    displayProjects.find((p) => p.id === hoveredProjectId) || displayProjects[0];

  return (
    <div
      ref={stageRef}
      className="project-orbit-stage"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="3D Rotating Production Deployments Gallery"
    >
      {/* Ambient Lighting & Holographic Backdrop */}
      <div className="project-orbit-backdrop" />
      <div className="project-orbit-grid" />

      {/* Orbit Toolbar & Telemetry Header */}
      <div className="project-orbit-header-bar">
        <div className="orbit-status-indicator">
          <span className="orbit-pulse-beacon" />
          <span className="orbit-status-label">3D PRODUCTION DEPLOYMENT ORBIT</span>
          <span className="orbit-count-badge">{displayProjects.length} LIVE PLATFORMS</span>
        </div>

        <div className="orbit-controls-cluster">
          <button
            type="button"
            className="orbit-ctrl-btn"
            onClick={() => setIsPaused((prev) => !prev)}
            title={isPaused ? 'Resume Orbit Rotation' : 'Pause Orbit Rotation'}
            aria-label={isPaused ? 'Resume Orbit' : 'Pause Orbit'}
          >
            {isPaused ? <Play size={13} /> : <Pause size={13} />}
            <span>{isPaused ? 'Resume' : 'Pause'}</span>
          </button>

          <button
            type="button"
            className="orbit-ctrl-btn"
            onClick={() => setDirection((prev) => -prev)}
            title="Reverse Rotation Direction"
            aria-label="Reverse Direction"
          >
            <RefreshCw size={12} className={direction === -1 ? 'icon-reverse' : ''} />
            <span>Direction</span>
          </button>

          <button
            type="button"
            className="orbit-ctrl-btn"
            onClick={() => setSpeedMultiplier((prev) => (prev === 1 ? 0.5 : prev === 0.5 ? 1.5 : 1))}
            title={`Speed: ${speedMultiplier}x (Click to change)`}
            aria-label="Toggle Speed"
          >
            <Zap size={12} />
            <span>{speedMultiplier}x</span>
          </button>
        </div>
      </div>

      {/* 3D Perspective Scene Canvas */}
      <div
        className="project-orbit-scene"
        style={{
          transform: `rotateX(${(tilt.y * -8).toFixed(2)}deg) rotateY(${(tilt.x * 11).toFixed(2)}deg)`,
        }}
      >
        {/* Central Holographic Core Telemetry Hub */}
        <div className="project-orbit-center-core">
          <div className="orbit-core-ring-outer" />
          <div className="orbit-core-ring-middle" />
          <div className="orbit-core-ring-inner" />
          <div className="orbit-core-glow-sphere" />

          {/* Telemetry HUD Badge */}
          <div className="orbit-core-hud-badge">
            <div className="core-hud-top">
              <span className="core-hud-beacon" />
              <span className="core-hud-label">DEPLOYMENT TELEMETRY</span>
            </div>
            <div className="core-hud-title" title={activeProject.title}>
              {activeProject.title}
            </div>
            <div className="core-hud-client">{activeProject.client || activeProject.category}</div>
            <div className="core-hud-actions">
              <button
                type="button"
                className="core-hud-btn preview-cta"
                onClick={() => {
                  setIsPaused(true);
                  if (onSelectProject) onSelectProject(activeProject);
                }}
              >
                <Eye size={12} />
                <span>Preview Project</span>
              </button>
              {activeProject.url && (
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="core-hud-btn live-cta"
                  onClick={() => setIsPaused(true)}
                >
                  <span>Launch Live</span>
                  <ExternalLink size={11} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Orbit Ring Holding the 3D Deployed Project Cards */}
        <div className="project-orbit-ring">
          {orbitItems.map((project, i) => {
            const total = orbitItems.length;
            const step = 360 / total;
            const cardAngle = (i * step + angle) % 360;
            const normalizedAngle = ((cardAngle + 540) % 360) - 180;
            const rad = (normalizedAngle * Math.PI) / 180;
            const sin = Math.sin(rad);
            const cos = Math.cos(rad);

            const x = dimensions.rx * sin;
            const z = dimensions.rz * cos;

            const depth = (cos + 1) / 2;
            const scale = 0.80 + 0.30 * depth;
            const brightness = 0.72 + 0.35 * depth;
            const opacity = 0.48 + 0.52 * depth;
            const zIndex = Math.round(10 + depth * 60);

            const tiltY = -sin * 12;
            const tiltX = cos * 4;

            const isHovered = hoveredProjectId === project.id;
            const cleanUrl = project.url ? project.url.replace('https://', '') : project.title;

            return (
              <div
                key={`${project.id}-${i}`}
                className={`project-orbit-card ${isHovered ? 'orbit-card-focused' : ''}`}
                style={{
                  width: `${dimensions.cardW}px`,
                  transform: `translate3d(calc(-50% + ${x.toFixed(1)}px), calc(-50% + ${(tilt.y * -14 * cos).toFixed(1)}px), ${z.toFixed(1)}px) rotateY(${tiltY.toFixed(1)}deg) rotateX(${tiltX.toFixed(1)}deg) scale(${scale.toFixed(3)})`,
                  opacity: isHovered ? 1 : opacity.toFixed(2),
                  filter: `brightness(${isHovered ? 1.15 : brightness.toFixed(2)})`,
                  zIndex: isHovered ? 90 : zIndex,
                }}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                onClick={() => {
                  setIsPaused(true);
                  if (onSelectProject) onSelectProject(project);
                }}
                title={`Click to preview ${project.title}`}
              >
                {/* Browser Frame Window Header */}
                <div className="orbit-browser-bar">
                  <div className="orbit-browser-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <div className="orbit-browser-url" title={project.url || cleanUrl}>
                    <Lock size={10} />
                    <span>{cleanUrl}</span>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="orbit-browser-ext"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPaused(true);
                      }}
                      title={`Visit ${project.url}`}
                    >
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>

                {/* Real Website Preview Media Viewport */}
                <div className="orbit-browser-viewport">
                  <img src={project.img} alt={project.title} loading="lazy" />
                  <div className="orbit-viewport-overlay">
                    <span className="orbit-preview-pill">
                      <span>Click to Preview Details</span>
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>

                {/* Card Content & Action Body */}
                <div className="orbit-card-content">
                  <div className="orbit-card-meta">
                    <span className="orbit-client-tag">{project.client || project.category}</span>
                    <span className="orbit-live-badge">
                      <span className="live-dot" /> LIVE PLATFORM
                    </span>
                  </div>

                  <h4 className="orbit-card-heading" title={project.title}>
                    {project.title}
                  </h4>

                  <div className="orbit-card-tags">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="orbit-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="orbit-card-actions">
                    <button
                      type="button"
                      className="orbit-action-preview-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPaused(true);
                        if (onSelectProject) onSelectProject(project);
                      }}
                    >
                      <Eye size={12} />
                      <span>Preview</span>
                    </button>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="orbit-action-live-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPaused(true);
                        }}
                      >
                        <span>View Live Project</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Orbit Footer Caption */}
      <div className="project-orbit-footer">
        <span className="footer-pulse-dot" />
        <span>
          Auto-rotating 3D deployment showcase • Move cursor to tilt parallax • Click any project to open details modal or view live project
        </span>
      </div>
    </div>
  );
}

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
            return (
              <div
                className={`service-box ${isCardActive ? 'card-focused' : ''}`}
                key={s.title}
                onMouseEnter={() => setActiveCardIndex(idx)}
                onClick={(e) => {
                  if (hasMovedRef.current) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                  }
                  scrollToCard(idx);
                }}
              >
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

    if (isExpanded) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-4px)';
    } else {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    }
  };

  const handleCardMouseEnter = (catId, e) => {
    setActiveCardId(catId);
    e.currentTarget.style.setProperty('--spotlight-opacity', '1');
  };

  const handleCardMouseLeave = (catId, e) => {
    const card = e.currentTarget;
    card.style.setProperty('--spotlight-opacity', '0');
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    setActiveCardId((prev) => (prev === catId ? null : prev));
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
    setActiveCardId(catId);
  };

  const handleBlur = (catId, e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setActiveCardId((prev) => (prev === catId ? null : prev));
    }
  };

  return (
    <div className="tech-showcase-container" ref={containerRef}>
      {/* Four Technology Category Cards with Auto Hover-Expand, 3D Tilt, Spotlight & Glow */}
      <div className={`gear-grid ${hasRevealed ? 'is-revealed' : ''}`}>
        {techCategoriesData.map((cat, idx) => {
          const isExpanded = activeCardId === cat.id;
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
    document.title = 'ROVAWARE — Build • Automate • Scale';
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
  }, [activeCategory]);

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
      <header className={`navbar navbar-${routeTheme} navbar-view-${currentView}`}>
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
            <img src="/assets/rovaware_rw_arrow.png?v=11" alt="RovaWare Logo" className="brand-logo-img" />
          </div>
          <div className="brand-text-block">
            <div className="brand-text">
              <span className="brand-text-main">ROVA</span>
              <span className="brand-text-accent">WARE</span>
            </div>
            <span className="brand-tagline">ENGINEERING THE DIGITAL FUTURE</span>
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
                  style={{ color: '#FF8C32', fontWeight: 700 }}
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
        </nav>

        <div className="nav-right">
          {/* Request a Callback Button */}
          <button
            type="button"
            className={`btn-callback-nav ${isCallbackModalOpen ? 'active' : ''}`}
            onClick={() => setIsCallbackModalOpen(true)}
            title="Request an instant callback within 15 minutes"
            data-magnetic="0.32"
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
            data-magnetic="0.38"
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
        <BlogView
          onSelectArticle={navigateToArticle}
          onNavigateHome={() => navigateToHome()}
        />
      )}

      {currentView === 'article' && (
        <ArticleDetailView
          slug={articleSlug}
          onNavigateBlog={navigateToBlog}
          onSelectArticle={navigateToArticle}
          onNavigateHome={() => navigateToHome()}
        />
      )}

      {currentView === 'about-company' && (
        <AboutCompanyView
          onNavigateHome={() => navigateToHome()}
          onNavigateContact={navigateToContact}
          onNavigateBookProject={navigateToBookProject}
          onNavigateBlog={navigateToBlog}
          onNavigateWork={() => navigateToHome('work')}
        />
      )}

      {currentView === 'about-contact' && (
        <ContactView
          onNavigateHome={() => navigateToHome()}
          onNavigateBookProject={navigateToBookProject}
        />
      )}

      {currentView === 'about-book-project' && (
        <BookProjectView
          onNavigateHome={() => navigateToHome()}
          onNavigateContact={navigateToContact}
        />
      )}

      {currentView === 'careers' && (
        <CareersView
          onNavigateHome={() => navigateToHome()}
          onNavigateContact={navigateToContact}
          onNavigateBookProject={navigateToBookProject}
        />
      )}

      {currentView === 'process' && (
        <ProcessView
          onNavigateHome={() => navigateToHome()}
          onNavigateContact={navigateToContact}
          onNavigateBookProject={navigateToBookProject}
        />
      )}

      {currentView === 'services-index' && (
        <ServicesIndexView
          onNavigateHome={() => navigateToHome()}
          onNavigateService={navigateToServiceDetail}
          onNavigateBookProject={navigateToBookProject}
          onNavigateContact={navigateToContact}
        />
      )}

      {currentView === 'service-detail' && (
        <ServiceDetailView
          slug={articleSlug}
          onNavigateHome={() => navigateToHome()}
          onNavigateAllServices={navigateToServices}
          onNavigateService={navigateToServiceDetail}
          onNavigateBookProject={navigateToBookProject}
          onNavigateContact={navigateToContact}
        />
      )}

      {currentView === 'home' && (
        <main id="top">
          {/* CINEMATIC HERO WITH FULL BACKGROUND VIDEO */}
          <section id="hero" className="hero hero-full-bg">
            {/* Full Background Video Layer */}
            <div className="hero-bg-video-container" aria-hidden="true">
              <video
                ref={heroVideoRef}
                className="hero-bg-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/assets/hero.mp4" type="video/mp4" />
              </video>
              <div className="hero-bg-overlay" />
              <div className="hero-bg-glow" />
              <div className="hero-ambient-spotlight" />
            </div>

            <div className="hero-grid" />

            {/* Centered High-Impact Copy */}
            <div className="hero-container">
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
          <section id="work" className="section-wrapper portfolio-showcase-section">
            <div className="section-head">
              <div>
                <div className="section-kicker portfolio-kicker">
                  <div className="kicker-icon-tile">
                    <Sparkles size={13} />
                  </div>
                  <span>FEATURED DIGITAL PLATFORMS & SYSTEMS</span>
                </div>
                <h2 className="section-title">
                  Architected for scale, <em className="hero-highlight">crafted for impact.</em>
                </h2>
              </div>
              <p className="section-desc">
                Explore production web platforms, enterprise SaaS portals, and intelligent AI architectures engineered for performance, precision, and business growth.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="portfolio-tabs">
              {['All Works', 'Web Platforms', 'SaaS & Web Apps', 'AI Solutions'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Production Deployments Viewport Header with View Switcher */}
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
                  title="3D Continuous Rotating Portfolio Gallery"
                >
                  <Layers size={13} />
                  <span>3D Orbit View</span>
                </button>
                <button
                  type="button"
                  className={`view-switch-btn ${portfolioViewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setPortfolioViewMode('grid')}
                  title="Classic Production Grid"
                >
                  <Layout size={13} />
                  <span>Grid View</span>
                </button>
              </div>
            </div>

            {portfolioViewMode === '3d' ? (
              <ProductionDeploymentsOrbit
                projects={filteredProjects}
                onSelectProject={(p) => setModalVideo(p)}
                activeCategory={activeCategory}
              />
            ) : (
              <div className="portfolio-grid stagger-reveal">
                {filteredProjects.map((p) => (
                  <article
                    key={p.id}
                    className="project-card modern-showcase"
                    onClick={() => setModalVideo(p)}
                    title={`Click to preview ${p.title}`}
                  >
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
                        <img src={p.img} alt={p.title} loading="lazy" />
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
            )}
          </section>

          {/* FROM IDEA TO DIGITAL EXPERIENCE SHOWCASE */}
          <section id="digital-experience" className="section-wrapper digital-experience-section">
            <div className="section-head">
              <div>
                <div className="section-kicker">
                  <Sparkles size={14} />
                  <span>ENGINEERING EXCELLENCE</span>
                </div>
                <h2 className="section-title">
                  From Idea to <em className="hero-highlight">Digital Experience.</em>
                </h2>
              </div>
              <p className="section-desc">
                Explore how Rovaware Studio transforms conceptual whiteboard sketches into high-performance web applications, intelligent AI workflows, and scalable cloud platforms.
              </p>
            </div>

            {/* Interactive Category Filter Tabs */}
            <div className="experience-filter-bar">
              {['Web Development', 'Web Applications', 'AI Solutions'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`exp-filter-btn ${showcaseCategory === cat ? 'active' : ''}`}
                  onClick={() => handleShowcaseCategoryChange(cat)}
                >
                  {cat === 'Web Development' && <Code2 size={15} />}
                  {cat === 'Web Applications' && <Layout size={15} />}
                  {cat === 'AI Solutions' && <Bot size={15} />}
                  <span>{cat}</span>
                </button>
              ))}
            </div>

            {/* Main Showcase Stage */}
            {currentShowcase && (
              <div
                key={currentShowcase.id}
                className={`experience-stage-grid slide-dir-${slideDirection}`}
              >
                {/* Left Column: Editorial Content & Architecture Specs */}
                <div className="experience-editorial-col">
                  <div className="exp-editorial-card stagger-anim-card">
                    <div className="exp-card-header stagger-item item-1">
                      <span className="exp-kicker-pill">{currentShowcase.kicker}</span>
                      <span className="exp-category-pill">{currentShowcase.category}</span>
                    </div>

                    <h3 className="exp-title stagger-item item-2">{currentShowcase.title}</h3>
                    <div className="exp-tagline stagger-item item-2">
                      <CheckCircle2 size={15} />
                      <span>{currentShowcase.tagline}</span>
                    </div>
                    <p className="exp-description stagger-item item-3">{currentShowcase.description}</p>

                    {/* Interactive View Toggle */}
                    <div className="exp-view-toggle stagger-item item-4">
                      <button
                        type="button"
                        className={`exp-toggle-btn ${showcaseViewMode === 'preview' ? 'active' : ''}`}
                        onClick={() => setShowcaseViewMode('preview')}
                      >
                        <Layout size={14} />
                        <span>Production UI View</span>
                      </button>
                      <button
                        type="button"
                        className={`exp-toggle-btn ${showcaseViewMode === 'architecture' ? 'active' : ''}`}
                        onClick={() => setShowcaseViewMode('architecture')}
                      >
                        <Layers size={14} />
                        <span>System Architecture</span>
                      </button>
                    </div>

                    {/* Specs & Architecture Metrics */}
                    <div className="exp-specs-grid stagger-item item-4">
                      {currentShowcase.specs.map((spec, i) => (
                        <div className="exp-spec-box" key={i}>
                          <span className="exp-spec-label">{spec.label}</span>
                          <strong className="exp-spec-value">{spec.value}</strong>
                        </div>
                      ))}
                    </div>

                    {/* Technology Stack Pills */}
                    <div className="exp-tech-section stagger-item item-5">
                      <span className="exp-tech-title">TECHNOLOGY STACK:</span>
                      <div className="exp-tech-tags">
                        {currentShowcase.techStack.map((tech) => (
                          <span key={tech} className="exp-tech-pill">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Engineering Highlights List */}
                  <div className="exp-highlights-box stagger-item item-6">
                    <span className="exp-highlights-title">KEY ARCHITECTURAL HIGHLIGHTS</span>
                    <ul className="exp-highlights-list">
                      {currentShowcase.highlights.map((h, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={14} className="highlight-check" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Interactive Browser Viewport / Architecture Canvas */}
                <div className="experience-viewport-col">
                  <div className="exp-browser-frame">
                    {/* Browser Bar */}
                    <div className="exp-browser-bar">
                      <div className="exp-browser-dots">
                        <span className="dot red" />
                        <span className="dot yellow" />
                        <span className="dot green" />
                      </div>
                      <div className="exp-browser-url-pill">
                        <Lock size={11} />
                        <span>{currentShowcase.urlLabel}</span>
                      </div>
                      <div className="exp-browser-status">
                        <span className="pulse-dot" />
                        <span>200 OK • PRODUCTION READY</span>
                      </div>
                    </div>

                    {/* Viewport Content: Preview Image or Architecture Diagram */}
                    {showcaseViewMode === 'preview' ? (
                      <div className="exp-viewport-media exp-viewport-slide">
                        <img
                          src={currentShowcase.image}
                          alt={currentShowcase.title}
                          className="exp-showcase-img"
                          loading="lazy"
                        />
                        <div className="exp-media-shine" />
                        <div className="exp-watermark-pill">
                          <Code2 size={12} />
                          <span>Rovaware Studio • {currentShowcase.category}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="exp-viewport-architecture exp-viewport-slide">
                        <div className="exp-arch-header">
                          <Terminal size={16} />
                          <span>{currentShowcase.architectureTitle}</span>
                        </div>
                        <div className="exp-arch-nodes-wrap">
                          {currentShowcase.architectureNodes.map((node, idx) => (
                            <div className="exp-arch-node-card" key={idx}>
                              <div className="node-step-index">0{idx + 1}</div>
                              <div className="node-content">
                                <strong>{node.name}</strong>
                                <p>{node.detail}</p>
                              </div>
                              {idx < currentShowcase.architectureNodes.length - 1 && (
                                <div className="node-connector-line" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Viewport Footer Bar */}
                    <div className="exp-viewport-footer">
                      <span className="footer-mode-label">
                        ACTIVE DISPLAY: <strong>{showcaseViewMode === 'preview' ? 'High-Fidelity Interface' : 'Multi-Tier System Flow'}</strong>
                      </span>
                      <button
                        type="button"
                        className="exp-toggle-action-btn"
                        onClick={() => setShowcaseViewMode(showcaseViewMode === 'preview' ? 'architecture' : 'preview')}
                      >
                        <span>Switch to {showcaseViewMode === 'preview' ? 'Architecture' : 'Preview UI'}</span>
                        <ArrowUpRight size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Quick Category Switcher Cards (Side-by-Side Horizontal Layout) */}
                  <div className="exp-category-quickcards" role="tablist" aria-label="Digital experience categories">
                    {digitalExperienceData.map((item) => {
                      const isActive = showcaseCategory === item.category;
                      const accentColor =
                        item.category === 'Web Development'
                          ? '#38BDF8'
                          : item.category === 'Web Applications'
                            ? '#6366F1'
                            : '#A855F7';

                      return (
                        <div
                          key={item.id}
                          role="tab"
                          aria-selected={isActive}
                          tabIndex={0}
                          className={`exp-quick-card ${isActive ? 'active' : ''} exp-card-${item.id}`}
                          onClick={() => handleShowcaseCategoryChange(item.category)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleShowcaseCategoryChange(item.category);
                            }
                          }}
                        >
                          {/* Top Glowing Accent Indicator */}
                          <div className="quick-card-glow-bar" style={{ background: accentColor }} />

                          <div className="quick-card-left">
                            {/* Mini Thumbnail with Hover Zoom & Category Icon Badge */}
                            <div className="quick-card-thumb-wrap">
                              <img
                                src={item.image}
                                alt={item.category}
                                className="quick-card-thumb-img"
                                loading="lazy"
                              />
                              <div
                                className="quick-card-icon-overlay"
                                style={{
                                  background: `${accentColor}30`,
                                  borderColor: `${accentColor}60`,
                                }}
                              >
                                {item.category === 'Web Development' && <Code2 size={13} style={{ color: accentColor }} />}
                                {item.category === 'Web Applications' && <Layout size={13} style={{ color: accentColor }} />}
                                {item.category === 'AI Solutions' && <Bot size={13} style={{ color: accentColor }} />}
                              </div>
                            </div>

                            <div className="quick-card-text">
                              <strong>{item.category}</strong>
                              <span>{item.kicker}</span>
                            </div>
                          </div>

                          <div className="quick-card-right">
                            <span className="quick-card-active-dot" style={{ background: accentColor }} />
                            <ArrowUpRight size={14} className="quick-card-arrow" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Visual Connector Bridge to Services Section */}
            <div className="showcase-services-bridge">
              <div className="bridge-glow-line" />
              <div className="bridge-icon-pill">
                <Sparkles size={14} />
                <span>FULL-SPECTRUM SOLUTIONS ARCHITECTURE</span>
              </div>
              <div className="bridge-glow-line" />
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

            <ServicesCarousel services={servicesList} />
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
                    data-magnetic="0.36"
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
                <img src="/assets/rovaware_rw_arrow.png?v=11" alt="RovaWare Logo" className="brand-logo-img" />
              </div>
              <div className="brand-text-block">
                <div className="brand-text">
                  <span className="brand-text-main">ROVA</span>
                  <span className="brand-text-accent">WARE</span>
                </div>
                <span className="brand-tagline">ENGINEERING THE DIGITAL FUTURE</span>
              </div>
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
                <li><a href="/services/android-development" onClick={(e) => { e.preventDefault(); navigateToServiceDetail('android-development'); }}>Android Development</a></li>
                <li><a href="/services/saas-scaling" onClick={(e) => { e.preventDefault(); navigateToServiceDetail('saas-scaling'); }}>SaaS Scaling</a></li>
                <li><a href="/services/ui-ux-design" onClick={(e) => { e.preventDefault(); navigateToServiceDetail('ui-ux-design'); }}>UI/UX Design</a></li>
                <li><a href="/services" onClick={(e) => { e.preventDefault(); navigateToServices(); }} style={{ color: '#FF8C32', fontWeight: 600 }}>All 9 Services →</a></li>
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
          <div className="footer-bottom-legal-links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); openLegalModal('privacy'); }}>Privacy Policy</a>
            <span>•</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); openLegalModal('terms'); }}>Terms of Service</a>
            <span>•</span>
            <a href="#cookies" onClick={(e) => { e.preventDefault(); openLegalModal('cookies'); }}>Cookie Policy</a>
            <span>•</span>
            <a href="#refund" onClick={(e) => { e.preventDefault(); openLegalModal('refund'); }}>Refund Policy</a>
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
