import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

// Route configurations with unique titles, descriptions, and breadcrumbs
const ROUTES = [
  {
    path: 'services',
    title: 'Services & Digital Engineering Solutions — ROVAWARE',
    description: 'Explore ROVAWARE services: high-performance web applications, autonomous AI agents, enterprise cloud scaling, and intuitive UI/UX design.',
    breadcrumbName: 'Services'
  },
  {
    path: 'about/company',
    title: 'About Us — ROVAWARE Engineering Studio',
    description: 'Learn about ROVAWARE\'s engineering philosophy, mission, leadership, and commitment to building resilient, high-impact digital products.',
    breadcrumbName: 'About Us'
  },
  {
    path: 'careers',
    title: 'Careers & Open Roles — ROVAWARE Engineering Studio',
    description: 'Join our elite engineering studio. Explore high-impact roles in full-stack web engineering, autonomous AI systems, cloud architecture, and UI/UX design.',
    breadcrumbName: 'Careers'
  },
  {
    path: 'process',
    title: 'Our Process — ROVAWARE Engineering Studio',
    description: 'Our proven 4-stage software lifecycle: Architecture Blueprinting, Spatial UI/UX, Full-Stack AI Toolchain, and Zero-Downtime Launch.',
    breadcrumbName: 'Our Process'
  },
  {
    path: 'about/contact',
    title: 'Contact Us — ROVAWARE Engineering Studio',
    description: 'Get in touch with ROVAWARE engineers to discuss project scope, architectural consulting, or book an instant technical discovery callback.',
    breadcrumbName: 'Contact'
  },
  {
    path: 'about/book-project',
    title: 'Book a Project — Architecture & Scope Consultation | ROVAWARE',
    description: 'Schedule a comprehensive scoping session with ROVAWARE engineers to architect, build, and scale your next-generation digital platform.',
    breadcrumbName: 'Book a Project'
  },
  {
    path: 'services/web-development',
    title: 'Web Development Services — ROVAWARE Engineering Studio',
    description: 'High-performance Next.js 15 platforms, edge microservices, sub-second TTFB, and secure full-stack cloud architecture built for modern scale.',
    breadcrumbName: 'Web Development'
  },
  {
    path: 'services/chatbot-integration',
    title: 'AI Solutions & Autonomous Agents — ROVAWARE Engineering Studio',
    description: 'Enterprise AI solutions: autonomous LLM agents, vector RAG retrieval pipelines, intelligent workflow bots, and private API integrations.',
    breadcrumbName: 'AI & Chatbots'
  },
  {
    path: 'services/saas-scaling',
    title: 'SaaS & Cloud Scaling — ROVAWARE Engineering Studio',
    description: 'Multi-tenant cloud architecture, distributed microservices, real-time data pipelines, zero-trust security, and 99.9% uptime SLA.',
    breadcrumbName: 'SaaS Scaling'
  },
  {
    path: 'services/android-development',
    title: 'Android & Mobile Development — ROVAWARE Engineering Studio',
    description: 'High-performance native Kotlin and cross-platform mobile apps featuring 120Hz fluid UI, offline-first sync, and robust cloud APIs.',
    breadcrumbName: 'Android Development'
  },
  {
    path: 'services/ui-ux-design',
    title: 'UI/UX Design Systems — ROVAWARE Engineering Studio',
    description: 'Spatial interface design, conversion-led user experience, interactive Figma design tokens, and fluid motion design systems.',
    breadcrumbName: 'UI/UX Design'
  },
  {
    path: 'blog',
    title: 'Blog & Technical Insights — ROVAWARE Engineering',
    description: 'Read deep architectural breakdowns, modern web benchmarks, autonomous AI toolchains, and engineering playbooks by ROVAWARE.',
    breadcrumbName: 'Blog'
  }
];

function prerender() {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  console.log(`Prerendering SEO metadata for ${ROUTES.length} routes...`);

  ROUTES.forEach((route) => {
    const routeDir = path.join(distDir, route.path);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    const canonicalUrl = `https://rovaware.com/${route.path}`;

    // Replace Title
    let html = baseHtml.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
    html = html.replace(/<meta name="title" content=".*?" \/>/i, `<meta name="title" content="${route.title}" />`);

    // Replace Description
    html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${route.description}" />`);

    // Replace Canonical
    html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${canonicalUrl}" />`);

    // Replace OpenGraph
    html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${route.title}" />`);
    html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${route.description}" />`);
    html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${canonicalUrl}" />`);

    // Replace Twitter
    html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${route.title}" />`);
    html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${route.description}" />`);
    html = html.replace(/<meta name="twitter:url" content=".*?" \/>/i, `<meta name="twitter:url" content="${canonicalUrl}" />`);

    // Breadcrumbs JSON-LD
    const breadcrumbJson = JSON.stringify({
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
          name: route.breadcrumbName,
          item: canonicalUrl
        }
      ]
    });

    // Inject Breadcrumb JSON-LD before </head>
    html = html.replace('</head>', `  <script type="application/ld+json">${breadcrumbJson}</script>\n  </head>`);

    const targetFile = path.join(routeDir, 'index.html');
    fs.writeFileSync(targetFile, html, 'utf-8');
    console.log(`✓ Generated static SEO route: ${route.path}/index.html`);
  });

  console.log('Static route prerendering complete!');
}

prerender();

