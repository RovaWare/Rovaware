import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Detailed route definitions for Multi-Page Application (MPA)
const MPA_PAGES = [
  {
    relPath: 'services/index.html',
    canonicalPath: 'services',
    title: 'Services & Digital Engineering Solutions — ROVAWARE',
    metaTitle: 'Services & Digital Engineering Solutions — ROVAWARE',
    description: 'Explore ROVAWARE services: high-performance web applications, autonomous AI agents, enterprise cloud scaling, and intuitive UI/UX design.',
    breadcrumbName: 'Services',
    themeColor: '#FF8C32',
    h1: 'Digital Engineering & Growth Solutions',
    lead: 'We architect and engineer scalable web platforms, autonomous AI systems, and enterprise cloud infrastructure.',
    sections: [
      { heading: 'Web Development', text: 'High-performance Next.js 15 platforms, edge microservices, and modern web architectures.' },
      { heading: 'AI & Chatbots', text: 'Autonomous LLM agents, vector RAG search pipelines, and workflow automation.' },
      { heading: 'SaaS & Cloud Scaling', text: 'Multi-tenant cloud architecture, distributed microservices, and 99.9% uptime SLA.' },
      { heading: 'Android & Mobile', text: 'Native Kotlin and cross-platform mobile apps with fluid 120Hz interfaces.' }
    ]
  },
  {
    relPath: 'about/company/index.html',
    canonicalPath: 'about/company',
    title: 'About Us — ROVAWARE Engineering Studio',
    metaTitle: 'About Us — ROVAWARE Engineering Studio',
    description: 'Learn about ROVAWARE\'s engineering philosophy, mission, leadership, and commitment to building resilient, high-impact digital products.',
    breadcrumbName: 'About Us',
    themeColor: '#FF8C32',
    h1: 'About ROVAWARE Engineering Studio',
    lead: 'Architectural dignity, high delivery velocity, and cutting-edge software engineering standards.',
    sections: [
      { heading: 'Our Philosophy', text: 'Code with architectural dignity. Deliver with speed and transparent partnership.' },
      { heading: 'Engineering Standards', text: 'Strict TypeScript across full stack, 100% Lighthouse scores, and sub-100ms TTFB.' },
      { heading: 'Global Client Partnerships', text: 'Empowering ambitious businesses worldwide through modern web development and AI solutions.' }
    ]
  },
  {
    relPath: 'careers/index.html',
    canonicalPath: 'careers',
    title: 'Careers & Open Roles — ROVAWARE Engineering Studio',
    metaTitle: 'Careers & Open Roles — ROVAWARE Engineering Studio',
    description: 'Join our elite engineering studio. Explore high-impact roles in full-stack web engineering, autonomous AI systems, cloud architecture, and UI/UX design.',
    breadcrumbName: 'Careers',
    themeColor: '#2a2725',
    h1: 'Careers at ROVAWARE',
    lead: 'Build the future of digital engineering with an elite team of engineers, designers, and AI researchers.',
    sections: [
      { heading: 'Full-Stack Engineers', text: 'Work with Next.js, React, Node.js, and high-concurrency microservices.' },
      { heading: 'AI & ML Engineers', text: 'Architect autonomous agent swarms, vector databases, and enterprise LLM integrations.' },
      { heading: 'UI/UX Architects', text: 'Craft award-winning digital experiences, design tokens, and fluid spatial interfaces.' }
    ]
  },
  {
    relPath: 'career/index.html',
    canonicalPath: 'career',
    title: 'Careers & Open Roles — ROVAWARE Engineering Studio',
    metaTitle: 'Careers & Open Roles — ROVAWARE Engineering Studio',
    description: 'Join our elite engineering studio. Explore high-impact roles in full-stack web engineering, autonomous AI systems, cloud architecture, and UI/UX design.',
    breadcrumbName: 'Career',
    themeColor: '#2a2725',
    h1: 'Careers at ROVAWARE',
    lead: 'Build the future of digital engineering with an elite team of engineers, designers, and AI researchers.',
    sections: [
      { heading: 'Full-Stack Engineers', text: 'Work with Next.js, React, Node.js, and high-concurrency microservices.' },
      { heading: 'AI & ML Engineers', text: 'Architect autonomous agent swarms, vector databases, and enterprise LLM integrations.' },
      { heading: 'UI/UX Architects', text: 'Craft award-winning digital experiences, design tokens, and fluid spatial interfaces.' }
    ]
  },
  {
    relPath: 'process/index.html',
    canonicalPath: 'process',
    title: 'Our Process — ROVAWARE Engineering Studio',
    metaTitle: 'Our Process — ROVAWARE Engineering Studio',
    description: 'Our proven 4-stage software lifecycle: Architecture Blueprinting, Spatial UI/UX, Full-Stack AI Toolchain, and Zero-Downtime Launch.',
    breadcrumbName: 'Our Process',
    themeColor: '#38BDF8',
    h1: 'Our 4-Stage Engineering Process',
    lead: 'A rigorous software development lifecycle designed to eliminate technical debt and ensure flawless production deployment.',
    sections: [
      { heading: 'Stage 01: Blueprinting & Scoping', text: 'Comprehensive requirements gathering, architecture blueprints, and timeline estimation.' },
      { heading: 'Stage 02: Spatial UI/UX & Prototypes', text: 'Interactive Figma design systems, motion architecture, and high-fidelity clickable prototypes.' },
      { heading: 'Stage 03: Full-Stack Engineering & AI Toolchain', text: 'Agile sprints with strict TypeScript, automated testing, and vector RAG pipelines.' },
      { heading: 'Stage 04: Zero-Downtime Launch & Clean Handover', text: 'Production cloud hardening, CDN optimization, and complete intellectual property transfer.' }
    ]
  },
  {
    relPath: 'about/contact/index.html',
    canonicalPath: 'about/contact',
    title: 'Contact Us — ROVAWARE Engineering Studio',
    metaTitle: 'Contact Us — ROVAWARE Engineering Studio',
    description: 'Get in touch with ROVAWARE engineers to discuss project scope, architectural consulting, or book an instant technical discovery callback.',
    breadcrumbName: 'Contact',
    themeColor: '#FF8C32',
    h1: 'Contact ROVAWARE',
    lead: 'Connect directly with technical architects to explore your project requirements.',
    sections: [
      { heading: 'Direct Engineering Inquiry', text: 'Email: support@rovaware.com | Phone: +91-9752264618' },
      { heading: 'Studio Hours', text: 'Monday – Friday, 9:00 AM – 7:00 PM IST with 24hr response guarantee.' },
      { heading: 'Confidentiality', text: 'All discussions protected under mutual NDA agreements.' }
    ]
  },
  {
    relPath: 'about/book-project/index.html',
    canonicalPath: 'about/book-project',
    title: 'Book a Project — Architecture & Scope Consultation | ROVAWARE',
    metaTitle: 'Book a Project — Architecture & Scope Consultation | ROVAWARE',
    description: 'Schedule a comprehensive scoping session with ROVAWARE engineers to architect, build, and scale your next-generation digital platform.',
    breadcrumbName: 'Book a Project',
    themeColor: '#FF8C32',
    h1: 'Book an Architectural Discovery Call',
    lead: 'Define project scope, architecture blueprints, and delivery milestones with our principal engineers.',
    sections: [
      { heading: 'Scope Consultation', text: 'Review product vision, technical feasibility, and architectural options.' },
      { heading: 'Budget & Milestones', text: 'Transparent milestone-based proposals with guaranteed delivery dates.' }
    ]
  },
  {
    relPath: 'services/web-development/index.html',
    canonicalPath: 'services/web-development',
    title: 'Web Development Services — ROVAWARE Engineering Studio',
    metaTitle: 'Web Development Services — ROVAWARE Engineering Studio',
    description: 'High-performance Next.js 15 platforms, edge microservices, sub-second TTFB, and secure full-stack cloud architecture built for modern scale.',
    breadcrumbName: 'Web Development',
    themeColor: '#FF8C32',
    h1: 'High-Performance Web Development',
    lead: 'Next.js 15, edge microservices, and sub-second TTFB built for modern business scale.',
    sections: [
      { heading: 'Next.js 15 & Server Components', text: 'Optimal SEO, streaming SSR, and ultra-fast client-side hydration.' },
      { heading: 'Edge Microservices', text: 'Distributed cloud backends with zero cold starts and global low latency.' },
      { heading: 'Modern UI Engineering', text: 'Tailwind CSS, fluid motion systems, and accessible design tokens.' }
    ]
  },
  {
    relPath: 'services/chatbot-integration/index.html',
    canonicalPath: 'services/chatbot-integration',
    title: 'AI Solutions & Autonomous Agents — ROVAWARE Engineering Studio',
    metaTitle: 'AI Solutions & Autonomous Agents — ROVAWARE Engineering Studio',
    description: 'Enterprise AI solutions: autonomous LLM agents, vector RAG retrieval pipelines, intelligent workflow bots, and private API integrations.',
    breadcrumbName: 'AI & Chatbots',
    themeColor: '#10B981',
    h1: 'Enterprise AI Solutions & Autonomous Agents',
    lead: 'LLM agents, vector RAG pipelines, and intelligent workflow automation.',
    sections: [
      { heading: 'Vector RAG Search', text: 'Semantically index company knowledge bases for zero-hallucination factual search.' },
      { heading: 'Autonomous Agent Workflows', text: 'Multi-agent orchestration that executes complex multi-step business tasks.' },
      { heading: 'Private AI Deployments', text: 'Zero-data-retention private LLMs ensuring complete corporate data compliance.' }
    ]
  },
  {
    relPath: 'services/saas-scaling/index.html',
    canonicalPath: 'services/saas-scaling',
    title: 'SaaS & Cloud Scaling — ROVAWARE Engineering Studio',
    metaTitle: 'SaaS & Cloud Scaling — ROVAWARE Engineering Studio',
    description: 'Multi-tenant cloud architecture, distributed microservices, real-time data pipelines, zero-trust security, and 99.9% uptime SLA.',
    breadcrumbName: 'SaaS Scaling',
    themeColor: '#A855F7',
    h1: 'Enterprise SaaS & Cloud Infrastructure',
    lead: 'Multi-tenant architectures, distributed databases, and high-concurrency microservices.',
    sections: [
      { heading: 'High-Concurrency Backends', text: 'Horizontally scalable API services capable of millions of daily transactions.' },
      { heading: 'Zero-Trust Security', text: 'End-to-end encryption, strict role-based access control, and automated compliance.' },
      { heading: '99.9% Uptime SLA', text: 'Automated failover, distributed backups, and continuous health telemetry.' }
    ]
  },
  {
    relPath: 'services/android-development/index.html',
    canonicalPath: 'services/android-development',
    title: 'Android & Mobile Development — ROVAWARE Engineering Studio',
    metaTitle: 'Android & Mobile Development — ROVAWARE Engineering Studio',
    description: 'High-performance native Kotlin and cross-platform mobile apps featuring 120Hz fluid UI, offline-first sync, and robust cloud APIs.',
    breadcrumbName: 'Android Development',
    themeColor: '#38BDF8',
    h1: 'Mobile Engineering & Native Android Apps',
    lead: 'Fluid 120Hz mobile applications with offline-first synchronization.',
    sections: [
      { heading: 'Native Kotlin Development', text: 'Optimized Android applications with Jetpack Compose and native hardware APIs.' },
      { heading: 'Cross-Platform React Native', text: 'Unified iOS and Android codebases with native performance.' },
      { heading: 'Offline-First Sync', text: 'Seamless local database sync with automatic conflict resolution.' }
    ]
  },
  {
    relPath: 'services/ui-ux-design/index.html',
    canonicalPath: 'services/ui-ux-design',
    title: 'UI/UX Design Systems — ROVAWARE Engineering Studio',
    metaTitle: 'UI/UX Design Systems — ROVAWARE Engineering Studio',
    description: 'Spatial interface design, conversion-led user experience, interactive Figma design tokens, and fluid motion design systems.',
    breadcrumbName: 'UI/UX Design',
    themeColor: '#F472B6',
    h1: 'Spatial UI/UX & Design Systems',
    lead: 'Conversion-led digital product design with interactive design tokens.',
    sections: [
      { heading: 'Design Tokens in Figma', text: 'Scalable typography, color systems, and component libraries synced to code.' },
      { heading: 'Motion Architecture', text: 'Smooth, 60fps micro-interactions that elevate brand perception.' },
      { heading: 'Conversion Optimization', text: 'User testing and data-driven UX enhancements that maximize engagement.' }
    ]
  },
  {
    relPath: 'blog/index.html',
    canonicalPath: 'blog',
    title: 'Blog & Technical Insights — ROVAWARE Engineering',
    metaTitle: 'Blog & Technical Insights — ROVAWARE Engineering',
    description: 'Read deep architectural breakdowns, modern web benchmarks, autonomous AI toolchains, and engineering playbooks by ROVAWARE.',
    breadcrumbName: 'Blog',
    themeColor: '#38BDF8',
    h1: 'ROVAWARE Engineering Blog',
    lead: 'Technical insights, software architecture deep dives, and modern engineering standards.',
    sections: [
      { heading: 'Architecture Case Studies', text: 'Real-world benchmarks and production deployment retrospectives.' },
      { heading: 'Autonomous AI Insights', text: 'How we build and orchestrate production LLM agent swarms.' },
      { heading: 'Web Performance Guides', text: 'Techniques for sub-100ms TTFB and perfect 100 Lighthouse scores.' }
    ]
  },
  {
    relPath: 'admin/jobs/index.html',
    canonicalPath: 'admin/jobs',
    title: 'Admin Portal — Job Postings Management | ROVAWARE',
    metaTitle: 'Admin Portal — Job Postings Management | ROVAWARE',
    description: 'ROVAWARE internal administrative console for managing live job listings.',
    breadcrumbName: 'Admin Jobs',
    themeColor: '#0a0a0b',
    h1: 'ROVAWARE Admin Portal',
    lead: 'Internal job postings and careers board management.',
    sections: [
      { heading: 'Job Creation', text: 'Create and publish new job roles directly to the public careers board.' },
      { heading: 'Management', text: 'View, edit, and delete published openings.' }
    ]
  }
];

function generatePageHtml(page) {
  const canonicalUrl = `https://rovaware.com/${page.canonicalPath}`;

  const breadcrumbsJson = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://rovaware.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.breadcrumbName,
        item: canonicalUrl
      }
    ]
  });

  const webPageJson = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: canonicalUrl,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'ROVAWARE',
      url: 'https://rovaware.com/'
    }
  });

  const sectionsHtml = page.sections
    .map(
      (sec) => `
        <article style="margin-bottom: 24px;">
          <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">${sec.heading}</h2>
          <p style="font-size: 0.95rem; line-height: 1.6; opacity: 0.85;">${sec.text}</p>
        </article>`
    )
    .join('\n');

  return `<!doctype html>
<html lang="en" data-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="${page.themeColor}" />

    <!-- Canonical URL -->
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Primary SEO Meta Tags (Individual Page Optimization for Google Sitelinks) -->
    <title>${page.title}</title>
    <meta name="title" content="${page.metaTitle}" />
    <meta name="description" content="${page.description}" />
    <meta name="keywords" content="ROVAWARE, ${page.breadcrumbName.toLowerCase()}, web development, AI software, enterprise SaaS, cloud architecture" />
    <meta name="author" content="ROVAWARE" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
    <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large" />

    <!-- Multi-Resolution Favicons & Brand Icons (Optimized for Google & Bing Search Snippets) -->
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />

    <!-- Open Graph / Facebook / LinkedIn / WhatsApp -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="ROVAWARE" />
    <meta property="og:title" content="${page.metaTitle}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:image" content="https://rovaware.com/assets/rovaware_og.jpg" />
    <meta property="og:image:secure_url" content="https://rovaware.com/assets/rovaware_og.jpg" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="801" />
    <meta property="og:image:height" content="533" />
    <meta property="og:image:alt" content="${page.title}" />

    <!-- Twitter / X -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:site" content="@rovaware_" />
    <meta name="twitter:creator" content="@rovaware_" />
    <meta name="twitter:title" content="${page.metaTitle}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="https://rovaware.com/assets/rovaware_og.jpg" />
    <meta name="twitter:image:alt" content="${page.title}" />

    <!-- Schema.org Structured Data: Breadcrumbs & WebPage -->
    <script type="application/ld+json">
    ${breadcrumbsJson}
    </script>
    <script type="application/ld+json">
    ${webPageJson}
    </script>

    <!-- Google Fonts Preconnect & Async Display -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500;600;700;800&family=Orbitron:wght@700;800;900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <!-- App Root for React Hydration -->
    <div id="root">
      <!-- Semantic Crawlable Fallback Content for Search Crawlers without JS -->
      <noscript>
        <main style="max-width: 900px; margin: 40px auto; padding: 20px; font-family: sans-serif; color: #f8fafc; background: #070A10;">
          <header style="margin-bottom: 32px;">
            <p style="text-transform: uppercase; letter-spacing: 0.15em; font-size: 0.85rem; color: #38bdf8;">ROVAWARE // ${page.breadcrumbName}</p>
            <h1 style="font-size: 2.5rem; font-weight: 800; margin: 8px 0;">${page.h1}</h1>
            <p style="font-size: 1.15rem; line-height: 1.6; opacity: 0.9;">${page.lead}</p>
          </header>
          <section>
            ${sectionsHtml}
          </section>
          <footer style="margin-top: 48px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px;">
            <p><a href="/" style="color: #38bdf8; text-decoration: none;">← Return to ROVAWARE Homepage</a></p>
            <p>© 2026 ROVAWARE STUDIO. ALL RIGHTS RESERVED.</p>
          </footer>
        </main>
      </noscript>
    </div>

    <!-- Client-Side Hydration Script -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;
}

function run() {
  console.log(`Generating ${MPA_PAGES.length} Multi-Page Application (MPA) entry HTML files...`);

  MPA_PAGES.forEach((page) => {
    const fullPath = path.join(rootDir, page.relPath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const html = generatePageHtml(page);
    fs.writeFileSync(fullPath, html, 'utf-8');
    console.log(`✓ Created MPA source page: ${page.relPath}`);
  });

  console.log('All MPA source entry files generated successfully!');
}

run();

