import {
  Code2,
  Smartphone,
  Server,
  Layout,
  Box,
  TrendingUp,
  Bot,
  ShieldCheck,
  FileText,
  Layers,
  Cpu,
  Zap,
  Globe,
  Database,
  Lock,
  Workflow,
  Sparkles,
  CheckCircle2,
  Rocket
} from 'lucide-react';

export const serviceCategories = [
  {
    id: 'BUILD',
    title: 'BUILD',
    tagline: 'Engineering robust, scalable software architectures from day one.',
    accent: '#FF8C32',
    icon: Code2,
    services: [
      {
        slug: 'web-development',
        title: 'Web Development',
        shortDesc: 'High-throughput Next.js 15 web apps, edge runtimes, and distributed backends.',
        badge: 'CORE ENGINEERING'
      },
      {
        slug: 'android-development',
        title: 'Android Development',
        shortDesc: 'Native Kotlin & Jetpack Compose apps engineered for stability and performance.',
        badge: 'MOBILE SYSTEMS'
      },
      {
        slug: 'saas-scaling',
        title: 'Trending Tech & SaaS Scaling',
        shortDesc: 'Multi-tenant database architectures, Stripe billing, and high-concurrency scaling.',
        badge: 'HIGH CONCURRENCY'
      }
    ]
  },
  {
    id: 'DESIGN',
    title: 'DESIGN',
    tagline: 'Crafting immersive interfaces and visual systems that inspire and convert.',
    accent: '#38BDF8',
    icon: Layout,
    services: [
      {
        slug: 'ui-ux-design',
        title: 'UI/UX Design',
        shortDesc: 'Figma token architectures, spatial design systems, and conversion-focused UX.',
        badge: 'DESIGN SYSTEMS'
      },
      {
        slug: '3d-modeling-animation',
        title: '3D Modeling & Animation',
        shortDesc: 'Hardware-accelerated Three.js 3D web stages, GLSL shaders, and Blender assets.',
        badge: 'WEBGL & 3D'
      }
    ]
  },
  {
    id: 'GROW',
    title: 'GROW',
    tagline: 'Accelerating product reach, organic acquisition, and autonomous customer workflows.',
    accent: '#10B981',
    icon: TrendingUp,
    services: [
      {
        slug: 'digital-marketing',
        title: 'Digital Marketing',
        shortDesc: 'Technical SEO, Core Web Vitals optimization, and high-intent customer acquisition.',
        badge: 'ORGANIC GROWTH'
      },
      {
        slug: 'chatbot-integration',
        title: 'Chatbot Integration',
        shortDesc: 'Autonomous LLM agents, vector RAG retrieval, and WhatsApp API automation.',
        badge: 'AGENTIC AI'
      }
    ]
  },
  {
    id: 'BUSINESS_SUPPORT',
    title: 'BUSINESS SUPPORT',
    tagline: 'Mission-critical integrity, verification pipelines, and legal compliance safeguards.',
    accent: '#A855F7',
    icon: ShieldCheck,
    services: [
      {
        slug: 'ai-detection-plagiarism',
        title: 'AI Detection & Plagiarism Checkers',
        shortDesc: 'Linguistic perplexity analysis, multi-model synthetic text audit, and originality proof.',
        badge: 'AUDIT & VERIFY'
      },
      {
        slug: 'legal-drafting',
        title: 'Legal Drafting',
        shortDesc: 'Watertight MSAs, SOWs, IP transfer agreements, and GDPR/DPDP privacy policies.',
        badge: 'IP & CONTRACTS'
      }
    ]
  }
];

export const allServicesDetail = {
  'web-development': {
    slug: 'web-development',
    category: 'BUILD',
    categoryTitle: 'BUILD',
    categoryAccent: '#FF8C32',
    icon: Code2,
    title: 'Web Development',
    heroKicker: 'FULL-STACK WEB ENGINEERING',
    heroHeadline: 'High-performance web applications built for speed, reliability, and growth.',
    heroSubheadline: 'We engineer end-to-end web platforms using Next.js 15, React 19, and cloud-native backends—optimized for sub-100ms TTFB, bulletproof security, and seamless developer velocity.',
    stats: [
      { value: '< 100ms', label: 'Average TTFB Edge Latency' },
      { value: '99.9%', label: 'Production Uptime SLA' },
      { value: '100%', label: 'Repository & IP Ownership' },
      { value: '100/100', label: 'Lighthouse Performance Score' }
    ],
    overview: 'Modern businesses cannot afford bloated, sluggish web applications that break under load. At RovaWare, web development is approached with rigorous systems engineering. From headless e-commerce architectures to complex dashboard systems and custom APIs, we design modular, type-safe repositories that are built to scale alongside your organization without expensive technical debt.',
    offerings: [
      {
        title: 'Next.js & React 19 Engineering',
        desc: 'Server components, streaming SSR, edge rendering, and optimized hydration for blisteringly fast user experiences.'
      },
      {
        title: 'Cloud-Native Backend Architecture',
        desc: 'Microservices and modular monoliths in Node.js, Go, or Python paired with PostgreSQL, Redis, and message queues.'
      },
      {
        title: 'Interactive Dashboards & SaaS Portals',
        desc: 'Data-intensive interfaces featuring real-time WebSockets, advanced filtering, multi-tenant isolation, and RBAC security.'
      },
      {
        title: 'Headless E-Commerce & Custom APIs',
        desc: 'Decoupled storefronts with sub-second page transitions, automated inventory sync, and resilient Stripe/payment integrations.'
      },
      {
        title: 'Performance & Core Web Vitals Audits',
        desc: 'Comprehensive code profiling, bundle size minimization, asset compression, and database query optimization.'
      },
      {
        title: 'CI/CD Pipelines & DevOps Automation',
        desc: 'Automated GitHub Actions workflows, containerized Docker builds, and zero-downtime deployment pipelines.'
      }
    ],
    features: [
      'Strict TypeScript codebases with zero unchecked types',
      'Atomic component architecture built for maintainability',
      'Automated End-to-End (Playwright) & Unit testing harnesses',
      'Edge CDN caching strategies with smart cache-invalidation',
      'REST & GraphQL API design adhering to OpenAPI specifications',
      'Granular role-based access control (RBAC) and OAuth2 / SSO'
    ],
    techStack: [
      { name: 'React 19', tag: 'Frontend' },
      { name: 'Next.js 15', tag: 'Full-Stack' },
      { name: 'TypeScript', tag: 'Language' },
      { name: 'Node.js', tag: 'Backend' },
      { name: 'PostgreSQL', tag: 'Database' },
      { name: 'Redis', tag: 'Caching' },
      { name: 'Docker', tag: 'Containers' },
      { name: 'Tailwind CSS', tag: 'Styling' },
      { name: 'GraphQL / REST', tag: 'APIs' },
      { name: 'Vercel / AWS', tag: 'Cloud Infra' }
    ],
    process: [
      {
        step: '01',
        title: 'Architecture Blueprint & Scoping',
        desc: 'We unpack business requirements, define data schemas, select optimal infrastructure, and create an unambiguous milestone roadmap.'
      },
      {
        step: '02',
        title: 'Design System & Spatial Prototyping',
        desc: 'Our design and frontend engineers create responsive component tokens, establishing layout geometry and micro-interactions.'
      },
      {
        step: '03',
        title: 'Full-Stack Development Sprints',
        desc: 'Two-week agile sprints with continuous staging deployments, type-safe API contracts, and rigorous automated code reviews.'
      },
      {
        step: '04',
        title: 'Security Hardening & QA Testing',
        desc: 'Cross-browser testing, accessibility (WCAG 2.1) validation, load stress testing, and vulnerability auditing.'
      },
      {
        step: '05',
        title: 'Zero-Downtime Launch & Handover',
        desc: 'Live production release with active telemetry monitoring, documentation handover, and full source code repository transfer.'
      }
    ],
    outcomes: [
      { title: 'Sub-second Loading Speed', desc: 'Drastically reduce bounce rates and boost organic search rankings with edge-optimized assets.' },
      { title: 'Zero Vendor Lock-in', desc: '100% clean, documented source code that your in-house team can easily extend and maintain.' },
      { title: 'Enterprise-Grade Security', desc: 'Built-in protection against SQL injections, XSS attacks, CSRF, and misconfigured permissions.' }
    ],
    portfolio: {
      title: 'ASA EPC — Enterprise Solar Energy & Infrastructure Platform',
      client: 'ASA EPC Pvt. Ltd. (India & UAE)',
      summary: 'Engineered a high-performance Next.js enterprise web application managing 100+ industrial solar projects trusted by L&T Construction and Bajaj.',
      metric: '300% Increase in qualified corporate RFP inquiries within 90 days.',
      image: '/assets/asa_epc.jpg'
    },
    faqs: [
      {
        q: 'Do you build custom web apps or rely on templates?',
        a: 'We build 100% custom web architectures tailored precisely to your functional needs and brand guidelines. We avoid bloated multi-purpose templates that degrade site speed and security.'
      },
      {
        q: 'Who owns the code and intellectual property after completion?',
        a: 'You retain 100% ownership of all source code, databases, design assets, and infrastructure configurations upon project completion. We provide a clean GitHub repository transfer.'
      },
      {
        q: 'How do you ensure web performance and SEO readiness?',
        a: 'All our web builds are engineered around Google Core Web Vitals standards, utilizing server-side rendering (SSR), image optimization, semantic HTML5, and automated schema generation.'
      },
      {
        q: 'Can you integrate our existing backend or third-party CRM?',
        a: 'Yes. We frequently integrate legacy APIs, Salesforce, HubSpot, Stripe, ERP systems, and custom database schemas using resilient middleware and webhook handlers.'
      }
    ],
    ctaTitle: 'Ready to build your next web platform?',
    ctaDesc: 'Schedule a scoping consultation with our senior systems architects and receive a detailed architecture blueprint within 24 hours.'
  },

  'android-development': {
    slug: 'android-development',
    category: 'BUILD',
    categoryTitle: 'BUILD',
    categoryAccent: '#FF8C32',
    icon: Smartphone,
    title: 'Android Development',
    heroKicker: 'NATIVE ANDROID ENGINEERING',
    heroHeadline: 'Native, resilient Android applications crafted with Kotlin and Jetpack Compose.',
    heroSubheadline: 'From real-time IoT hardware telemetry to complex B2B mobile workflows, we build native Android apps with fluid 60fps animations, robust offline-first synchronization, and Google Play compliance.',
    stats: [
      { value: '60 FPS', label: 'Hardware-Accelerated UI' },
      { value: '< 0.05%', label: 'Crash-Free Session Target' },
      { value: 'Offline-First', label: 'Room DB Sync Architecture' },
      { value: 'API 26-35+', label: 'Broad Device Compatibility' }
    ],
    overview: 'Android powers billions of devices globally, each with varying screen geometries, chipset capabilities, and memory constraints. We build native Android applications engineered to run smoothly across entry-level devices up to flagship tablets. Utilizing modern Kotlin Coroutines, Jetpack Compose, and clean MVI/MVVM patterns, our apps deliver predictable performance even in challenging network conditions.',
    offerings: [
      {
        title: 'Modern Jetpack Compose UI',
        desc: 'Declarative, responsive user interfaces following Material Design 3 with custom brand micro-interactions.'
      },
      {
        title: 'Offline-First Data Architecture',
        desc: 'Room database local persistence with background synchronization engines via WorkManager and Kotlin Flow.'
      },
      {
        title: 'Hardware & Sensor Telemetry',
        desc: 'Low-latency integration with GPS location services, Bluetooth Low Energy (BLE), cameras, NFC, and accelerometers.'
      },
      {
        title: 'API & Secure Auth Integration',
        desc: 'Encrypted token storage via Android Keystore, biometric login (fingerprint/face), and resilient Retrofit network layers.'
      },
      {
        title: 'Performance & Battery Optimization',
        desc: 'Deep profiling of memory allocations, background thread throttling, and battery drain minimization.'
      },
      {
        title: 'Google Play Store Release Management',
        desc: 'Target SDK compliance, privacy manifest configurations, automated Fastlane CI/CD distribution, and alpha/beta rings.'
      }
    ],
    features: [
      '100% Kotlin codebase with strict null safety',
      'Clean Architecture (Domain, Data, Presentation layer separation)',
      'Dependency injection using Hilt / Koin for testability',
      'Dynamic Dark and Light theme adaptation based on system settings',
      'Secure local data encryption via SQLCipher and Android Keystore',
      'Push notification orchestration via Firebase Cloud Messaging (FCM)'
    ],
    techStack: [
      { name: 'Kotlin', tag: 'Language' },
      { name: 'Jetpack Compose', tag: 'UI Toolkit' },
      { name: 'Coroutines & Flow', tag: 'Async' },
      { name: 'Room DB', tag: 'Local Cache' },
      { name: 'Retrofit & OkHttp', tag: 'Networking' },
      { name: 'Hilt / Koin', tag: 'Dependency Inj.' },
      { name: 'Firebase', tag: 'Analytics & Auth' },
      { name: 'WorkManager', tag: 'Background Tasks' },
      { name: 'Fastlane', tag: 'Automated CI/CD' },
      { name: 'Android Studio', tag: 'Dev Tooling' }
    ],
    process: [
      {
        step: '01',
        title: 'Mobile Requirements & Device Matrix',
        desc: 'We map user personas, minimum OS level support, required hardware permissions, and offline functionality requirements.'
      },
      {
        step: '02',
        title: 'Figma Mobile UX & Clickable Prototypes',
        desc: 'Designing native touch-friendly layouts following Material You guidelines, tested across standard phone and tablet dimensions.'
      },
      {
        step: '03',
        title: 'Modular Native Implementation',
        desc: 'Implementing decoupled UI and business logic, setting up local SQLite/Room caches, and connecting backend endpoints.'
      },
      {
        step: '04',
        title: 'Device Lab Testing & Battery Profiling',
        desc: 'Rigorous testing on physical Android devices covering low-memory conditions, network dropouts, and orientation shifts.'
      },
      {
        step: '05',
        title: 'Play Console Review & Release',
        desc: 'Generating signed Android App Bundles (AAB), configuring Google Play Store listings, and coordinating staged rollouts.'
      }
    ],
    outcomes: [
      { title: 'Seamless Offline Operation', desc: 'Allow your field technicians and customers to work without interruptions during weak connectivity.' },
      { title: 'High Store Ratings', desc: 'Deliver rapid, crash-free mobile experiences that earn 5-star ratings on the Google Play Store.' },
      { title: 'Long-term Maintainability', desc: 'Clear architectural layering makes introducing new features fast, safe, and cost-effective.' }
    ],
    portfolio: {
      title: 'Rathore Heavy Fleet — Equipment Tracking & Operations App',
      client: 'Rathore Construction & Earthmovers',
      summary: 'Engineered a native Android field operations app providing real-time GPS fleet tracking, daily log dispatches, and offline machinery maintenance checklists.',
      metric: 'Zero data loss across 12,000+ field operating hours in remote mining areas.',
      image: '/assets/rathore_construction.jpg'
    },
    faqs: [
      {
        q: 'Do you develop with native Kotlin or cross-platform frameworks?',
        a: 'We specialize in native Android development using Kotlin and Jetpack Compose for peak hardware performance and OS consistency. For multi-platform needs, we also support React Native.'
      },
      {
        q: 'How do you handle Android fragmentation across different brands?',
        a: 'We test across different screen densities, vendor Android forks (OneUI, MIUI, Stock Pixel), and OS versions (Android 8 to 15+) to ensure uniform layout stability.'
      },
      {
        q: 'Will you guide us through the Google Play Store approval process?',
        a: 'Yes. We manage privacy policies, target API level 34+ compliance, data safety forms, and Play Console account configurations to ensure swift store approval.'
      },
      {
        q: 'Can the app sync data when the user is disconnected from Wi-Fi?',
        a: 'Yes. We engineer offline-first architectures using local Room databases; all changes are queued locally and automatically synced once a network connection is detected.'
      }
    ],
    ctaTitle: 'Have an Android application in mind?',
    ctaDesc: 'Connect with our native mobile engineers to review technical feasibility, architectural choices, and project milestones.'
  },

  'saas-scaling': {
    slug: 'saas-scaling',
    category: 'BUILD',
    categoryTitle: 'BUILD',
    categoryAccent: '#FF8C32',
    icon: Server,
    title: 'Trending Tech & SaaS Scaling',
    heroKicker: 'CLOUD ARCHITECTURE & DISTRIBUTED SYSTEMS',
    heroHeadline: 'Multi-tenant SaaS platforms engineered for high concurrency and zero downtime.',
    heroSubheadline: 'We architect resilient SaaS backends featuring tenant database isolation, automated Stripe subscription billing, asynchronous event queues, and auto-scaling cloud infrastructure.',
    stats: [
      { value: '10,000+', label: 'Concurrent WebSockets' },
      { value: 'Sub-1ms', label: 'Redis Cache Lookups' },
      { value: 'Multi-Tenant', label: 'Row-Level Security (RLS)' },
      { value: 'Stripe Ready', label: 'Automated Tiered Billing' }
    ],
    overview: 'Scaling a SaaS product from hundreds of users to hundreds of thousands requires a completely different architectural paradigm. Poorly designed monoliths quickly face database connection exhaustion, race conditions in billing, and costly outages. We design scalable SaaS foundations utilizing modern patterns: distributed caching with Redis, message queues with BullMQ/Kafka, decoupled microservices, and database partitioning.',
    offerings: [
      {
        title: 'Multi-Tenant Database Architecture',
        desc: 'Strict tenant data isolation using PostgreSQL Row-Level Security (RLS) or schema-per-tenant designs.'
      },
      {
        title: 'Stripe Billing & Subscription Engines',
        desc: 'Usage-based metering, recurring tier management, automated tax compliance, and self-serve customer billing portals.'
      },
      {
        title: 'Event-Driven Background Processing',
        desc: 'Asynchronous task queues using Redis & BullMQ for video processing, PDF rendering, email dispatch, and third-party webhooks.'
      },
      {
        title: 'Cloud Infrastructure & Auto-Scaling',
        desc: 'Containerized deployment on AWS ECS / Kubernetes / Docker with automated horizontal pod autoscaling based on traffic.'
      },
      {
        title: 'Real-Time Telemetry & Observability',
        desc: 'Prometheus, Grafana, OpenTelemetry, and Sentry error aggregation to catch bottlenecks before they impact users.'
      },
      {
        title: 'API Gateway & Rate Limiting',
        desc: 'Token bucket rate-limiting algorithms, developer API keys, and comprehensive API documentation.'
      }
    ],
    features: [
      'Idempotent webhook handlers preventing double billing and duplicate events',
      'Database connection pooling with PgBouncer to eliminate bottlenecks',
      'Zero-downtime database migrations with automated rollback strategies',
      'Automated daily encrypted database backups with point-in-time recovery',
      'Comprehensive audit logs tracking all critical administrative user actions',
      'Compliance-ready architecture (GDPR, SOC-2 readiness, and encryption at rest)'
    ],
    techStack: [
      { name: 'Node.js / Fastify', tag: 'Runtime' },
      { name: 'PostgreSQL + RLS', tag: 'Database' },
      { name: 'Redis / Dragonfly', tag: 'Cache & Queue' },
      { name: 'BullMQ', tag: 'Job Workers' },
      { name: 'Stripe Billing API', tag: 'Payments' },
      { name: 'Docker / K8s', tag: 'Orchestration' },
      { name: 'AWS (ECS / S3 / RDS)', tag: 'Cloud' },
      { name: 'Grafana / Sentry', tag: 'Observability' },
      { name: 'Terraform', tag: 'Infra as Code' },
      { name: 'TypeScript', tag: 'Type Safety' }
    ],
    process: [
      {
        step: '01',
        title: 'Traffic & Concurrency Modeling',
        desc: 'We analyze expected queries per second (QPS), tenant data volume, background job frequency, and SLA requirements.'
      },
      {
        step: '02',
        title: 'Data Schema & Isolation Strategy',
        desc: 'Designing schema topologies, defining foreign key cascades, configuring Row-Level Security policies, and indexing hot tables.'
      },
      {
        step: '03',
        title: 'Billing & Core Service Implementation',
        desc: 'Building payment webhook receivers, tenant provisioning systems, and decoupling heavy tasks into background worker nodes.'
      },
      {
        step: '04',
        title: 'Load Testing & Chaos Engineering',
        desc: 'Simulating traffic spikes (10k+ concurrent requests via k6), database failovers, and slow network conditions.'
      },
      {
        step: '05',
        title: 'Production Rollout & Telemetry Alarming',
        desc: 'Configuring automated health checks, PagerDuty alerting, memory threshold triggers, and real-time dashboard monitoring.'
      }
    ],
    outcomes: [
      { title: 'Cost-Effective Cloud Spend', desc: 'Optimize resource allocations to avoid overpaying for idle server capacity during quiet hours.' },
      { title: 'Zero Downtime Deployments', desc: 'Ship new software updates seamlessly while users remain active without seeing maintenance screens.' },
      { title: 'Bulletproof Tenant Isolation', desc: 'Absolute guarantee that customer A never has access to or visibility of customer B’s private data.' }
    ],
    portfolio: {
      title: 'NeuralCore SaaS Telemetry & High-Throughput Analytics Hub',
      client: 'NeuralCore Systems',
      summary: 'Designed an enterprise multi-tenant analytics platform processing millions of telemetry events with sub-1ms Redis cache lookups and automated Stripe tiered invoicing.',
      metric: 'Successfully sustained 18,000 concurrent WebSocket connections with 99.99% uptime.',
      image: '/assets/showcase_dashboard.jpg'
    },
    faqs: [
      {
        q: 'What is tenant isolation and why does our SaaS need it?',
        a: 'Tenant isolation ensures that data from one customer account is strictly partitioned from another. We implement PostgreSQL Row-Level Security (RLS) to enforce this at the database level, preventing security breaches.'
      },
      {
        q: 'How do you handle complex billing models like metered usage and seat pricing?',
        a: 'We leverage Stripe Billing APIs combined with idempotent usage meters. Our background workers track events and sync with Stripe so customers are billed accurately down to the minute.'
      },
      {
        q: 'Can you scale an existing slow monolith without rebuilding from scratch?',
        a: 'Yes. We often perform tactical modernization: introducing Redis caching, moving heavy tasks to background workers, and optimizing slow SQL queries without requiring a risky total rewrite.'
      },
      {
        q: 'What cloud provider do you recommend?',
        a: 'We recommend AWS for deep enterprise compliance and scalability, but also build on Google Cloud, DigitalOcean, or modern edge platforms like Vercel and Railway depending on budget.'
      }
    ],
    ctaTitle: 'Planning to scale your SaaS infrastructure?',
    ctaDesc: 'Consult with our distributed systems engineers to audit your current architecture and map out a bulletproof scaling blueprint.'
  },

  'ui-ux-design': {
    slug: 'ui-ux-design',
    category: 'DESIGN',
    categoryTitle: 'DESIGN',
    categoryAccent: '#38BDF8',
    icon: Layout,
    title: 'UI/UX Design',
    heroKicker: 'SPATIAL SYSTEMS & CONVERSION-FOCUSED UX',
    heroHeadline: 'Clean, intuitive digital interfaces engineered to turn visitors into long-term customers.',
    heroSubheadline: 'We craft comprehensive Figma design systems, interactive prototypes, and conversion-optimized user journeys rooted in cognitive ergonomics and refined modern aesthetics.',
    stats: [
      { value: '100%', label: 'Figma Tokenized Design Systems' },
      { value: 'WCAG 2.1', label: 'AAA Accessibility Standard' },
      { value: '60 FPS', label: 'Calibrated Micro-Interactions' },
      { value: '3x', label: 'Average User Engagement Lift' }
    ],
    overview: 'Great design is not just visual ornamentation; it is the structural psychology that determines how effortlessly users accomplish their goals within your digital product. At RovaWare, UI/UX design is deeply interconnected with code feasibility. We establish reusable design tokens, typography scales, contrast ratios, and interactive states in Figma before a single line of code is written.',
    offerings: [
      {
        title: 'End-to-End Product UI/UX Design',
        desc: 'Complete wireframing, high-fidelity mockups, and responsive layouts for web apps, SaaS dashboards, and mobile.'
      },
      {
        title: 'Design Token Systems & Component Libraries',
        desc: 'Modular Figma component libraries synced with developer tokens (colors, typography, spacing, shadows).'
      },
      {
        title: 'Interactive Clickable Prototyping',
        desc: 'High-fidelity prototypes simulating real application micro-interactions, page transitions, and responsive states.'
      },
      {
        title: 'Conversion Rate & Usability Audits',
        desc: 'Analyzing user drop-off points, identifying friction in checkout/onboarding flows, and executing heuristic redesigns.'
      },
      {
        title: 'Information Architecture & User Journeys',
        desc: 'Mapping complex operational workflows into intuitive navigation hierarchies and simplified mental models.'
      },
      {
        title: 'Developer Handoff & Specification Sync',
        desc: 'Clean inspectable Figma assets, exported SVG graphics, responsive behavior documentation, and style guides.'
      }
    ],
    features: [
      'Comprehensive auto-layout components adaptable to all resolutions',
      'Strict color contrast compliance adhering to WCAG 2.1 AAA accessibility',
      'Engineered state variants: Default, Hover, Active, Disabled, Loading, Error',
      'Micro-interaction specifications prepared for CSS & Framer Motion implementation',
      'Consistent 8pt spatial grid architecture across the entire product',
      'User-centric form design with clear validation cues that reduce abandonment'
    ],
    techStack: [
      { name: 'Figma', tag: 'Primary Design' },
      { name: 'FigJam', tag: 'User Flows' },
      { name: 'Design Tokens', tag: 'Architecture' },
      { name: 'Framer', tag: 'Prototypes' },
      { name: 'Stark', tag: 'Accessibility' },
      { name: 'Adobe Creative Suite', tag: 'Graphics' },
      { name: 'Principle', tag: 'Motion Specs' },
      { name: 'Hotjar', tag: 'User Behavior' }
    ],
    process: [
      {
        step: '01',
        title: 'User Research & Discovery',
        desc: 'We interview stakeholders, study target user personas, audit competitor platforms, and establish core design objectives.'
      },
      {
        step: '02',
        title: 'Information Architecture & Wireframes',
        desc: 'Low-fidelity structural wireframes focused on screen hierarchy, user flows, and reducing cognitive friction.'
      },
      {
        step: '03',
        title: 'Visual Identity & Design Tokens',
        desc: 'Establishing the visual language: color palettes, typography scales, elevation shadows, and reusable component sets.'
      },
      {
        step: '04',
        title: 'High-Fidelity Screen Design',
        desc: 'Crafting pixel-perfect views for desktop, tablet, and mobile with complete edge-case and empty-state coverage.'
      },
      {
        step: '05',
        title: 'Interactive Prototyping & Handoff',
        desc: 'Building clickable prototypes for usability validation, followed by seamless Figma developer inspection handoff.'
      }
    ],
    outcomes: [
      { title: 'Lower Onboarding Friction', desc: 'Clear visual cues and natural flow paths guide new users to their first "aha" moment in seconds.' },
      { title: 'Accelerated Dev Velocity', desc: 'Pre-defined tokens and component states eliminate frontend guesswork and reduce rework by 50%.' },
      { title: 'Distinguished Market Brand', desc: 'A bespoke, refined visual identity that positions your company as an undisputed premium category leader.' }
    ],
    portfolio: {
      title: 'RovaWare Spatial Design System & Client Dashboard',
      client: 'RovaWare Internal Core & Partner Platforms',
      summary: 'Developed an enterprise spatial design system comprising 150+ reusable Figma components, tokenized dark/orange styling, and sub-second layout clarity.',
      metric: 'Decreased design-to-production turnaround time by 65% across client projects.',
      image: '/assets/workspace.jpg'
    },
    faqs: [
      {
        q: 'Do you design in Figma and share source files with our team?',
        a: 'Yes. All design work is created in Figma with organized component pages, auto-layout, and token variables. You receive full ownership and edit access to all Figma files.'
      },
      {
        q: 'How do you ensure designs are practical for developers to build?',
        a: 'Our design team works alongside our senior frontend engineers. We design with CSS flexbox, CSS grid, and realistic data states in mind so there are no surprises during implementation.'
      },
      {
        q: 'Do you create both mobile and desktop designs?',
        a: 'Always. Every view is designed responsively for desktop (1440px+), tablet (768px - 1024px), and mobile (375px - 428px) screen sizes.'
      },
      {
        q: 'Can you redesign our existing application without breaking current workflows?',
        a: 'Yes. We specialize in incremental UI/UX refactoring, retaining familiar user mental models while modernizing typography, contrast, hierarchy, and ease of use.'
      }
    ],
    ctaTitle: 'Elevate your product’s user experience',
    ctaDesc: 'Schedule a design review session with our lead product designer to analyze your current user flow and identify conversion opportunities.'
  },

  '3d-modeling-animation': {
    slug: '3d-modeling-animation',
    category: 'DESIGN',
    categoryTitle: 'DESIGN',
    categoryAccent: '#38BDF8',
    icon: Box,
    title: '3D Modeling & Animation',
    heroKicker: 'IMMERSIVE WEBGL & 3D EXPERIENCES',
    heroHeadline: 'Hardware-accelerated 3D visuals, interactive web stages, and product animations.',
    heroSubheadline: 'We build immersive 3D web experiences using Three.js, WebGL, custom GLSL shaders, and Blender asset pipelines—delivering silky 60fps rendering without stalling page load speeds.',
    stats: [
      { value: '60 FPS', label: 'Smooth Hardware Rendering' },
      { value: 'Draco Comp.', label: 'Sub-Megabyte 3D Assets' },
      { value: 'WebGL / WebGPU', label: 'Next-Gen Graphics' },
      { value: '100% Mobile', label: 'Touch & Gyroscope Support' }
    ],
    overview: 'Standard 2D imagery often fails to convey the precision, craftsmanship, and tactile dimension of complex physical products or visionary tech platforms. We bridge the gap between high-end 3D graphics and performant web code. By utilizing low-poly optimization, Draco geometry compression, and custom GLSL vertex shaders, we create 3D experiences that run seamlessly even on mobile browsers.',
    offerings: [
      {
        title: 'Interactive 3D WebGL Showcases',
        desc: 'Browser-based 3D stages where users can rotate, zoom, inspect, and interact with products in real time.'
      },
      {
        title: 'Custom Three.js & Shader Development',
        desc: 'Procedural mathematical shaders, glowing ambient particle fields, glass refractions, and kinetic lighting.'
      },
      {
        title: 'Product Modeling & Texturing in Blender',
        desc: 'Photorealistic 3D asset creation, PBR material texturing, normal maps, and low-poly web asset optimization.'
      },
      {
        title: 'Scroll-Driven Camera Choreography',
        desc: 'Cinematic 3D camera sweeps and asset transformations tied smoothly to natural user page scrolling.'
      },
      {
        title: '3D Exploded-View & Engineering Visuals',
        desc: 'Interactive component breakdown animations illustrating internal mechanics, engineering parts, and structural topology.'
      },
      {
        title: 'Draco Compression & Performance Tuning',
        desc: 'Aggressive asset compression reducing 50MB CAD files down to sub-800KB lightweight glTF/GLB web assets.'
      }
    ],
    features: [
      'Cross-browser WebGL fallback and responsive canvas scaling',
      'Dynamic lighting models with HDR environment reflections',
      'Touch gesture orbital controls with calibrated inertia and damping',
      'Sub-second initial asset load using Draco glTF mesh decimation',
      'Integration with React Three Fiber (R3F) and GSAP timeline engines',
      'Graceful degradation for low-powered mobile devices and battery saving modes'
    ],
    techStack: [
      { name: 'Three.js', tag: 'WebGL Engine' },
      { name: 'GLSL Shaders', tag: 'GPU Code' },
      { name: 'Blender', tag: 'Modeling' },
      { name: 'React Three Fiber', tag: 'React R3F' },
      { name: 'Draco glTF', tag: 'Compression' },
      { name: 'GSAP', tag: 'Timeline Motion' },
      { name: 'Substance Painter', tag: 'PBR Textures' },
      { name: 'Spline', tag: 'Interactive 3D' }
    ],
    process: [
      {
        step: '01',
        title: '3D Art Direction & Asset Scoping',
        desc: 'We review existing CAD files, reference photography, or concept art to define polycount budgets and aesthetic goals.'
      },
      {
        step: '02',
        title: 'Modeling, Retopology & PBR Shading',
        desc: 'Crafting clean mesh topology in Blender, applying realistic PBR material maps, and baking ambient occlusion.'
      },
      {
        step: '03',
        title: 'WebGL Scene & Lighting Setup',
        desc: 'Integrating the model into Three.js, configuring directional rim lights, shadows, and camera perspective bounds.'
      },
      {
        step: '04',
        title: 'Interaction & Scroll Choreography',
        desc: 'Wiring smooth mouse parallax, orbit controls, custom particle sweeps, and scroll-linked timeline sequences.'
      },
      {
        step: '05',
        title: 'Compression & Multi-Device Optimization',
        desc: 'Compressing meshes via Draco, optimizing draw calls, and profiling GPU frame times across desktop and mobile.'
      }
    ],
    outcomes: [
      { title: 'Unforgettable First Impression', desc: 'Differentiate your platform with jaw-dropping, high-tech visual interaction that keeps visitors engaged.' },
      { title: 'Higher Product Comprehension', desc: 'Allow customers to examine every angle and feature of your physical or digital product with complete confidence.' },
      { title: 'Fast Web Performance', desc: 'Our compression techniques guarantee that adding rich 3D visuals will not compromise your site’s speed.' }
    ],
    portfolio: {
      title: 'Vertex Shops — Streamlined Virtual WebGL Stage',
      client: 'Vertex Retail Systems',
      summary: 'Engineered an interactive 3D virtual commerce stage with calibrated orbit controls, procedural ambient lighting, and sub-second Draco mesh loading.',
      metric: 'Achieved consistent 60fps across both desktop and iOS/Android mobile devices.',
      image: '/assets/workspace.jpg'
    },
    faqs: [
      {
        q: 'Will a 3D website slow down loading speeds or drain mobile battery?',
        a: 'Not with our engineering approach. We apply Draco geometry compression, low draw-call batching, and pause rendering loops when the 3D canvas scrolls out of viewport view to preserve battery.'
      },
      {
        q: 'Do users need special plugins to view Three.js 3D web pages?',
        a: 'No. WebGL is supported natively by all modern web browsers (Chrome, Safari, Firefox, Edge) across macOS, Windows, iOS, and Android without any plugins.'
      },
      {
        q: 'Can you work with existing CAD or solid engineering files?',
        a: 'Yes. We import STP, OBJ, FBX, or CAD files, clean the topology, optimize the mesh count, and convert them into lightweight web-ready glTF/GLB formats.'
      },
      {
        q: 'Can 3D models interact with user inputs like clicks and scroll?',
        a: 'Yes. We program custom raycasters for interactive clicking on specific parts, as well as smooth camera moves tied directly to page scroll positions.'
      }
    ],
    ctaTitle: 'Ready to bring 3D dimension to your brand?',
    ctaDesc: 'Discuss your product visualization needs with our 3D WebGL specialists and explore interactive prototype concepts.'
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    category: 'GROW',
    categoryTitle: 'GROW',
    categoryAccent: '#10B981',
    icon: TrendingUp,
    title: 'Digital Marketing',
    heroKicker: 'TECHNICAL ACQUISITION & SEARCH ARCHITECTURE',
    heroHeadline: 'Data-driven growth strategies, programmatic SEO, and conversion optimization.',
    heroSubheadline: 'We combine rigorous technical SEO architecture, high-intent performance marketing, and funnel analytics to acquire qualified corporate and retail customers at sustainable unit economics.',
    stats: [
      { value: '340%+', label: 'Organic Traffic Growth Lift' },
      { value: '100% Clean', label: 'Technical Core Web Vitals' },
      { value: '0% Fluff', label: 'Verified Qualified Inquiries' },
      { value: 'Full Funnel', label: 'GA4 & PostHog Telemetry' }
    ],
    overview: 'Generic social media posts and vanity metrics do not pay enterprise bills. Modern digital marketing for tech startups and B2B services demands precision technical SEO, programmatic page generation, semantic search optimization, and friction-free conversion funnels. We engineer growth engines that capture high-intent buyers exactly when they are searching for high-value solutions.',
    offerings: [
      {
        title: 'Technical & Programmatic SEO Architecture',
        desc: 'Semantic HTML hierarchy, automated JSON-LD schema generation, dynamic sitemaps, and programmatic landing page scale.'
      },
      {
        title: 'Core Web Vitals & Search Indexation Audits',
        desc: 'Resolving crawl budget errors, canonical URL mismatches, index bloat, and slow Largest Contentful Paint (LCP) scores.'
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        desc: 'A/B testing page copy, form field friction reduction, value proposition positioning, and behavioral heatmaps.'
      },
      {
        title: 'High-Intent Performance Search Campaigns',
        desc: 'Laser-focused Google Ads search campaigns targeting specific high-ticket B2B keywords with negative keyword scrubbing.'
      },
      {
        title: 'Full-Funnel Analytics & Attribution Telemetry',
        desc: 'Server-side Google Analytics 4 tracking, PostHog event instrumentation, and custom conversion dashboards.'
      },
      {
        title: 'Content Strategy for Authority & Backlinks',
        desc: 'Technical whitepapers, engineering teardowns, and data-backed industry benchmarks that earn natural editorial citations.'
      }
    ],
    features: [
      'Zero black-hat techniques; 100% white-hat algorithmic search compliance',
      'Automated schema markup for Organizations, Products, FAQs, and Articles',
      'Server-side tracking avoiding ad-blocker tracking loss',
      'In-depth competitor keyword gap and backlink profile analysis',
      'Dedicated high-converting B2B landing pages tailored to specific search intent',
      'Monthly transparent reporting focused on revenue and pipeline metrics'
    ],
    techStack: [
      { name: 'Google Search Console', tag: 'Indexation' },
      { name: 'Google Analytics 4', tag: 'Analytics' },
      { name: 'Ahrefs / SEMrush', tag: 'Keyword Data' },
      { name: 'PostHog', tag: 'Product Funnels' },
      { name: 'Google Ads', tag: 'Search PPC' },
      { name: 'Schema.org', tag: 'Structured Data' },
      { name: 'Segment', tag: 'Customer Data' },
      { name: 'Hotjar', tag: 'Session Heatmaps' }
    ],
    process: [
      {
        step: '01',
        title: 'Technical Audit & Baseline Telemetry',
        desc: 'We inspect crawl errors, indexing bottlenecks, page speed benchmarks, and current conversion funnel drop-offs.'
      },
      {
        step: '02',
        title: 'High-Intent Keyword Gap Analysis',
        desc: 'Identifying high-commercial intent search queries where your direct competitors are winning qualified leads.'
      },
      {
        step: '03',
        title: 'On-Page Architecture & Content Sprint',
        desc: 'Implementing semantic tags, JSON-LD schemas, optimizing metadata, and restructuring high-value landing page copy.'
      },
      {
        step: '04',
        title: 'Conversion Funnel & CRO Tuning',
        desc: 'Refining call-to-action buttons, lead intake forms, and friction points to maximize visitor-to-inquiry conversion rates.'
      },
      {
        step: '05',
        title: 'Continuous Tracking & Iterative Scale',
        desc: 'Reviewing weekly pipeline attribution data, pruning low-performing campaigns, and expanding winning organic clusters.'
      }
    ],
    outcomes: [
      { title: 'Predictable Inbound Pipeline', desc: 'Transition away from cold outreach to a steady stream of incoming qualified inquiries.' },
      { title: 'Compounds Over Time', desc: 'Unlike paid ads that stop the moment you turn off budget, organic technical SEO continues delivering leads for years.' },
      { title: 'Lower Customer Acquisition Cost', desc: 'Maximize the return on every dollar spent by optimizing the conversion efficiency of your landing pages.' }
    ],
    portfolio: {
      title: 'B2B Enterprise Inbound Growth Architecture',
      client: 'Industrial Tech & Solar EPC Sector',
      summary: 'Executed a complete technical SEO overhaul, programmatic landing page generation, and schema automation for an engineering firm.',
      metric: 'Generated 340% increase in inbound RFP quote submissions within 6 months.',
      image: '/assets/showcase_web_dev.jpg'
    },
    faqs: [
      {
        q: 'How long does it take to see tangible results from technical SEO?',
        a: 'Technical fixes (resolving crawl blocks and speed issues) often show improvements within 4 to 8 weeks. Compounding organic ranking gains typically hit significant momentum in 3 to 6 months.'
      },
      {
        q: 'How is RovaWare’s digital marketing different from traditional agencies?',
        a: 'We are software engineers first. We do not just give you PDF recommendations—we directly write the clean code, schemas, and tracking scripts needed to fix problems at the source.'
      },
      {
        q: 'Do you guarantee #1 rankings on Google?',
        a: 'No ethical engineer guarantees #1 rankings because Google algorithms constantly evolve. What we do guarantee is 100% technical indexation health, sub-second speed, and high-converting landing pages.'
      },
      {
        q: 'Can you track exactly which marketing campaigns generated our paying leads?',
        a: 'Yes. We set up multi-touch UTM attribution using GA4 and PostHog so you know precisely which channel and keyword triggered every form submission.'
      }
    ],
    ctaTitle: 'Ready to build an inbound customer engine?',
    ctaDesc: 'Request a comprehensive technical SEO and conversion audit of your website to uncover hidden traffic and revenue opportunities.'
  },

  'chatbot-integration': {
    slug: 'chatbot-integration',
    category: 'GROW',
    categoryTitle: 'GROW',
    categoryAccent: '#10B981',
    icon: Bot,
    title: 'Chatbot Integration',
    heroKicker: 'AUTONOMOUS AI AGENTS & RAG PIPELINES',
    heroHeadline: 'Intelligent AI chatbots and automated workflows that engage, qualify, and convert 24/7.',
    heroSubheadline: 'We build custom autonomous AI agents, retrieval-augmented generation (RAG) vector pipelines, and WhatsApp Business API chatbots that answer complex customer questions with zero hallucination.',
    stats: [
      { value: '< 800ms', label: 'Streaming Response Latency' },
      { value: '24/7/365', label: 'Zero-Downtime Autonomous Lead Triage' },
      { value: '0% Hallucination', label: 'Strict Knowledge Grounding' },
      { value: 'Omnichannel', label: 'Web, WhatsApp, Slack & CRM' }
    ],
    overview: 'Outdated rule-based chatbots that frustrate customers with rigid decision trees are obsolete. Today’s users expect conversational, context-aware intelligence that genuinely resolves issues. We build production AI chatbots powered by cutting-edge Large Language Models (LLMs) grounded strictly in your proprietary documentation, product catalogs, and operational knowledge bases.',
    offerings: [
      {
        title: 'Custom RAG (Retrieval-Augmented Generation)',
        desc: 'Semantic vector search using Qdrant or Pinecone to inject exact proprietary business context into every AI response.'
      },
      {
        title: 'WhatsApp Business Cloud API Automation',
        desc: 'Interactive WhatsApp messaging bots handling customer support, service booking, and automated invoice dispatch.'
      },
      {
        title: 'Autonomous Lead Qualification Agents',
        desc: 'Chatbots that converse with prospects, gather project scope, qualify budget parameters, and auto-book calendar demos.'
      },
      {
        title: 'Multi-Agent Workflows with LangGraph',
        desc: 'Orchestrating specialized sub-agents: one for search, one for calculation, and one for human engineer escalation.'
      },
      {
        title: 'CRM & Helpdesk Bi-Directional Sync',
        desc: 'Automatic lead creation and chat transcript handoff to HubSpot, Salesforce, Zendesk, or Slack channels.'
      },
      {
        title: 'Guardrails & Safety Verification',
        desc: 'Strict prompt engineering and regex filters preventing prompt injection, off-topic chit-chat, and hallucinated claims.'
      }
    ],
    features: [
      'Sub-800ms streaming text responses for fluid conversational interaction',
      'Strict knowledge boundaries: answers ONLY from approved company documentation',
      'Smooth fallback to live human agents when confidence score drops below threshold',
      'Token consumption monitoring and cost-capping optimization per user session',
      'Full conversation history memory preserved within user session scope',
      'Enterprise data privacy: customer data is NEVER used for public model training'
    ],
    techStack: [
      { name: 'OpenAI / Gemini', tag: 'Core LLMs' },
      { name: 'LangChain & LangGraph', tag: 'Agent Orch.' },
      { name: 'Qdrant / Pinecone', tag: 'Vector DB' },
      { name: 'Python / FastAPI', tag: 'AI Backend' },
      { name: 'WhatsApp Cloud API', tag: 'Messaging' },
      { name: 'Node.js', tag: 'Webhooks' },
      { name: 'Redis', tag: 'Session Memory' },
      { name: 'Slack / HubSpot SDK', tag: 'Integrations' }
    ],
    process: [
      {
        step: '01',
        title: 'Knowledge Base Curation & Chunking',
        desc: 'We clean and structure your product manuals, pricing guidelines, FAQs, and policies into semantically searchable vectors.'
      },
      {
        step: '02',
        title: 'Prompt Architecture & Guardrails',
        desc: 'Crafting system prompts, persona tone, safety constraints, and defining precise tool-calling APIs.'
      },
      {
        step: '03',
        title: 'Vector Retrieval & API Integration',
        desc: 'Connecting embedding models, vector databases, and external CRM webhooks for real-time data lookups.'
      },
      {
        step: '04',
        title: 'Adversarial Testing & Tuning',
        desc: 'Subjecting the AI bot to edge-case questioning, prompt jailbreaking attempts, and tuning response confidence thresholds.'
      },
      {
        step: '05',
        title: 'Omnichannel Launch & Monitoring',
        desc: 'Deploying the bot to your website and WhatsApp channel with live telemetry dashboards tracking conversation quality.'
      }
    ],
    outcomes: [
      { title: 'Immediate 24/7 Response Time', desc: 'Engage and qualify international buyers instantly, even outside of your team’s local working hours.' },
      { title: '70% Lower Support Ticket Volume', desc: 'Automate repetitive inquiries so your human support staff can focus on high-touch enterprise accounts.' },
      { title: 'Higher Lead-to-Meeting Rate', desc: 'Frictionless chat scheduling increases calendar demo bookings directly inside the conversation.' }
    ],
    portfolio: {
      title: 'Autonomous Client Triage & Scoping AI Bot',
      client: 'RovaWare Studio & Partner Tech Portals',
      summary: 'Integrated an autonomous AI assistant capable of analyzing user software requirements, suggesting tech stacks, and streaming contextual answers from engineering blueprints.',
      metric: 'Over 2,400 user inquiries resolved autonomously with a 94% satisfaction rating.',
      image: '/assets/showcase_ai.jpg'
    },
    faqs: [
      {
        q: 'How do you prevent the AI chatbot from making up false information (hallucinating)?',
        a: 'We implement Retrieval-Augmented Generation (RAG). The LLM is strictly instructed to synthesize answers ONLY from verified vector excerpts retrieved from your company documentation. If the information does not exist, it politely offers human assistance.'
      },
      {
        q: 'Can the chatbot integrate with our WhatsApp Business number?',
        a: 'Yes. We connect via the official Meta WhatsApp Business Cloud API, enabling automated customer service and lead capture directly on WhatsApp.'
      },
      {
        q: 'Is our proprietary business data used to train public AI models?',
        a: 'No. Enterprise API agreements with providers like OpenAI and Google Gemini explicitly state that API data is private and not used for model training.'
      },
      {
        q: 'What happens when a customer asks a question the bot cannot answer?',
        a: 'The bot triggers an automated escalation webhook, pinging your team via Slack, email, or CRM, allowing a human agent to step in seamlessly.'
      }
    ],
    ctaTitle: 'Ready to deploy an intelligent AI agent?',
    ctaDesc: 'Schedule a discovery session to test interactive AI agent prototypes tailored to your company documentation and workflows.'
  },

  'ai-detection-plagiarism': {
    slug: 'ai-detection-plagiarism',
    category: 'BUSINESS_SUPPORT',
    categoryTitle: 'BUSINESS SUPPORT',
    categoryAccent: '#A855F7',
    icon: ShieldCheck,
    title: 'AI Detection & Plagiarism Checkers',
    heroKicker: 'LINGUISTIC AUDITING & CONTENT INTEGRITY',
    heroHeadline: 'Deep linguistic perplexity analysis, multi-model AI detection, and academic plagiarism verification.',
    heroSubheadline: 'We build enterprise-grade content verification pipelines, synthetic text classifiers, and semantic duplication scanners that protect your brand integrity, academic standards, and SEO standing.',
    stats: [
      { value: '99.4%', label: 'Classification Accuracy' },
      { value: '< 0.5%', label: 'False-Positive Threshold' },
      { value: 'Multi-Model', label: 'GPT-4, Gemini, Claude & LLMs' },
      { value: 'PDF / DOCX', label: 'Automated Audit Certifications' }
    ],
    overview: 'As generative AI tools flood the internet, enterprises, academic institutions, and content publishers face immense risks from low-quality synthetic text, hallucinated citations, and copyright infringement. We engineer advanced linguistic verification engines that analyze semantic perplexity, burstiness variation, sentence entropy, and global web index overlap to verify original human craftsmanship.',
    offerings: [
      {
        title: 'Multi-Model AI Text Classifiers',
        desc: 'Detecting synthetic patterns from ChatGPT, Claude, Gemini, Llama, and paraphrasing spinners using ensemble NLP models.'
      },
      {
        title: 'Global Semantic Plagiarism Scanners',
        desc: 'Indexing and comparing text against billions of web pages, research repositories, and private document archives.'
      },
      {
        title: 'Linguistic Perplexity & Burstiness Analysis',
        desc: 'Deep sentence-by-sentence entropy visualization highlighting robotic phrasing, repetitive cadence, and uniform rhythm.'
      },
      {
        title: 'Automated Integrity Audit Certificates',
        desc: 'Generating branded, verifiable PDF reports with color-coded risk highlights, source URLs, and similarity scores.'
      },
      {
        title: 'Enterprise Batch API & Webhook Pipelines',
        desc: 'High-throughput APIs capable of scanning thousands of incoming student submissions or freelance writer articles in minutes.'
      },
      {
        title: 'Code Plagiarism & Repository Scanners',
        desc: 'Detecting copy-pasted open-source code snippets, license violations, and synthetic boilerplate in software pull requests.'
      }
    ],
    features: [
      'Dual metric evaluation: Perplexity (unpredictability) and Burstiness (sentence variety)',
      'Sentence-level highlight color coding: Human (Green), Mixed (Amber), AI Generated (Red)',
      'Direct integration with PDF, DOCX, TXT, and Markdown file formats',
      'Zero text retention options ensuring sensitive intellectual property is not stored',
      'Configurable sensitivity thresholds tuned for educational, technical, or legal standards',
      'Protection against adversarial character substitution and zero-width space bypasses'
    ],
    techStack: [
      { name: 'Python / PyTorch', tag: 'NLP Models' },
      { name: 'RoBERTa / DeBERTa', tag: 'Classifiers' },
      { name: 'Milvus / Faiss', tag: 'Semantic Search' },
      { name: 'FastAPI', tag: 'Async Engine' },
      { name: 'PDFKit / WeasyPrint', tag: 'Report Gen' },
      { name: 'Elasticsearch', tag: 'Web Crawl Index' },
      { name: 'Docker', tag: 'Microservices' },
      { name: 'TypeScript', tag: 'Client SDK' }
    ],
    process: [
      {
        step: '01',
        title: 'Document Ingestion & Text Normalization',
        desc: 'Parsing uploaded documents, stripping hidden unicode bypasses, extracting raw strings, and tokenizing sentences.'
      },
      {
        step: '02',
        title: 'Entropy & Burstiness Extraction',
        desc: 'Calculating statistical token predictability curves across multiple language model weights to gauge synthetic probability.'
      },
      {
        step: '03',
        title: 'Web & Repository Similarity Matching',
        desc: 'Querying high-speed vector embeddings against web indexes and academic repositories for matching n-gram patterns.'
      },
      {
        step: '04',
        title: 'Confidence Scoring & Discrepancy Flagging',
        desc: 'Combining linguistic markers and literal citation matches into an objective, weighted originality score.'
      },
      {
        step: '05',
        title: 'Verified Audit Report Generation',
        desc: 'Emitting an interactive web view and downloadable tamper-evident PDF certification with full source link citations.'
      }
    ],
    outcomes: [
      { title: 'Preserve Brand & SEO Credibility', desc: 'Protect your website from Google search penalties associated with mass unedited synthetic spam.' },
      { title: 'Academic & Editorial Rigor', desc: 'Ensure that students, contributors, and freelance writers submit authentic, original thought leadership.' },
      { title: 'Mitigate Copyright Liability', desc: 'Identify accidental verbatim duplication before publication to prevent costly legal DMCA notices.' }
    ],
    portfolio: {
      title: 'Enterprise Document Authenticity & Originality Scanner',
      client: 'Educational Institutions & Publishing Platforms',
      summary: 'Engineered a high-throughput content integrity verification engine processing 50,000+ technical submissions with an industry-leading <0.5% false-positive rate.',
      metric: 'Over 12 million words analyzed with sub-2 second response times.',
      image: '/assets/showcase_dashboard.jpg'
    },
    faqs: [
      {
        q: 'Can AI detectors be 100% accurate?',
        a: 'No AI detector can claim 100% mathematical certainty. Rather than relying on a single score, our system combines multi-model perplexity analysis with literal web citation scanning to deliver transparent, evidence-based reports.'
      },
      {
        q: 'How do you prevent false-positive accusations against human writers?',
        a: 'We calibrate our classifiers with high-entropy thresholds and provide sentence-level explanations rather than a crude overall percentage. We flag areas for human editorial review rather than binary disqualification.'
      },
      {
        q: 'Are uploaded documents stored or used for training?',
        a: 'No. We provide an enterprise zero-retention guarantee. Once the scan is completed and your report is generated, the underlying document text is purged from memory.'
      },
      {
        q: 'Can this be integrated directly into our custom LMS or CMS?',
        a: 'Yes. We provide clean REST API endpoints and webhooks that integrate directly into platforms like Moodle, Canvas, WordPress, or custom student portals.'
      }
    ],
    ctaTitle: 'Protect your content and academic integrity',
    ctaDesc: 'Request an API trial of our enterprise verification engine and benchmark detection accuracy against your custom document library.'
  },

  'legal-drafting': {
    slug: 'legal-drafting',
    category: 'BUSINESS_SUPPORT',
    categoryTitle: 'BUSINESS SUPPORT',
    categoryAccent: '#A855F7',
    icon: FileText,
    title: 'Legal Drafting',
    heroKicker: 'TECH CONTRACTS & COMPLIANCE SAFEGUARDS',
    heroHeadline: 'Watertight software development agreements, IP transfers, and privacy frameworks.',
    heroSubheadline: 'We draft structured, enforceable technology contracts tailored to high-growth startups, agency partnerships, and SaaS platforms—protecting intellectual property and eliminating operational ambiguity.',
    stats: [
      { value: '100%', label: 'IP Assignment Protection' },
      { value: 'GDPR / DPDP', label: 'Privacy Law Compliance' },
      { value: 'Zero Ambiguity', label: 'Milestone-Based SOWs' },
      { value: 'DocuSign API', label: 'Automated E-Signatures' }
    ],
    overview: 'Vague contracts, ill-defined milestone scopes, and ambiguous intellectual property assignment clauses are the primary reasons tech partnerships turn into costly legal disputes. We specialize in drafting technology-focused agreements: Master Services Agreements (MSAs), Statements of Work (SOWs), Non-Disclosure Agreements (NDAs), and SaaS Terms of Service crafted specifically for modern software engineering.',
    offerings: [
      {
        title: 'Master Services Agreements (MSAs)',
        desc: 'Comprehensive multi-project framework agreements establishing warranties, liability caps, and dispute resolution mechanisms.'
      },
      {
        title: 'Milestone Statements of Work (SOWs)',
        desc: 'Clear technical acceptance criteria, payment milestone triggers, change request protocols, and delivery schedules.'
      },
      {
        title: 'Intellectual Property (IP) Assignment Deeds',
        desc: 'Watertight assignment of all copyright, code repositories, patents, and design tokens to client ownership upon full payment.'
      },
      {
        title: 'Mutual Non-Disclosure Agreements (NDAs)',
        desc: 'Strong confidential information protection covering source code, customer lists, architecture diagrams, and financial trade secrets.'
      },
      {
        title: 'SaaS Terms of Service & Privacy Policies',
        desc: 'End-user agreements compliant with modern regulations including GDPR, CCPA, and India’s Digital Personal Data Protection (DPDP) Act.'
      },
      {
        title: 'Service Level Agreements (SLAs)',
        desc: 'Defining uptime guarantees (99.9%), support response times, maintenance windows, and service credit formulas.'
      }
    ],
    features: [
      'Tailored specifically to software development, cloud infrastructure, and AI systems',
      'Plain English clauses that business executives and technical leads can actually understand',
      'Clear definition of background vs. foreground intellectual property',
      'Standardized limitation of liability provisions protecting both client and vendor',
      'Automated digital signature workflows ready for DocuSign or HelloSign APIs',
      'Standardized change order mechanisms preventing scope creep and budget disputes'
    ],
    techStack: [
      { name: 'DocuSign API', tag: 'E-Signatures' },
      { name: 'GDPR / DPDP', tag: 'Compliance' },
      { name: 'Contract Lifecycle', tag: 'Workflow' },
      { name: 'OpenAPI Licensing', tag: 'Tech IP' },
      { name: 'SaaS Legal Frameworks', tag: 'Terms & Privacy' },
      { name: 'SOW Automation', tag: 'Milestones' }
    ],
    process: [
      {
        step: '01',
        title: 'Operational & Risk Assessment',
        desc: 'We identify your project specifics: technical deliverables, payment schedules, jurisdiction, liability exposure, and IP requirements.'
      },
      {
        step: '02',
        title: 'Bespoke Clause Drafting',
        desc: 'Drafting structured agreements tailored specifically to your software architecture, avoiding irrelevant boilerplate clauses.'
      },
      {
        step: '03',
        title: 'Mutual Review & Redlining Session',
        desc: 'Walking through key provisions with both legal and technical stakeholders to ensure alignment on milestones and acceptance criteria.'
      },
      {
        step: '04',
        title: 'Final Execution & E-Signature Setup',
        desc: 'Preparing clean, audit-ready digital execution copies with automated timestamping and certificate of completion.'
      },
      {
        step: '05',
        title: 'Repository & Document Vaulting',
        desc: 'Providing secure PDF and editable source files stored alongside your project’s technical documentation.'
      }
    ],
    outcomes: [
      { title: 'Total IP Security', desc: 'Ensure your investors and acquirers find pristine, unencumbered intellectual property chains of title.' },
      { title: 'Eliminate Scope Disputes', desc: 'Unambiguous milestone acceptance criteria prevent arguments over what constitutes a finished feature.' },
      { title: 'Regulatory Peace of Mind', desc: 'Comply fully with international data privacy laws without paying exorbitant law firm retainers.' }
    ],
    portfolio: {
      title: 'Full Startup Legal Suite & IP Handover Framework',
      client: 'B2B SaaS & Freelance Platform Ecosystems',
      summary: 'Drafted complete legal operating suites including MSAs, mutual NDAs, milestone SOWs, and DPDP-compliant privacy policies for software ventures.',
      metric: 'Over $2.5M in contracted development value secured without a single dispute.',
      image: '/assets/workspace.jpg'
    },
    faqs: [
      {
        q: 'Why do we need a tech-specific contract instead of a generic legal template?',
        a: 'Generic legal templates do not understand code repositories, open-source dependencies (GPL/MIT), API rate limits, or server maintenance windows. Tech-specific contracts prevent disputes by defining technical terms accurately.'
      },
      {
        q: 'Does your drafting guarantee that our company owns 100% of the developed code?',
        a: 'Yes. Our IP transfer deeds explicitly assign all foreground intellectual property, git history, database schemas, and designs to you upon milestone settlement.'
      },
      {
        q: 'Can these contracts be signed electronically?',
        a: 'Yes. All our drafts are compatible with legally recognized e-signature platforms like DocuSign, Adobe Sign, and HelloSign under international e-commerce acts.'
      },
      {
        q: 'Do you offer updates if data privacy regulations change?',
        a: 'Yes. We maintain active compliance monitoring and provide updated privacy policy amendments whenever major statutes (like GDPR or DPDP) introduce new mandates.'
      }
    ],
    ctaTitle: 'Secure your software IP and partnerships',
    ctaDesc: 'Request an expert contract drafting consultation to protect your code, establish clear milestones, and eliminate legal risk.'
  }
};

