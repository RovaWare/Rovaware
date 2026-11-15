import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const ROUTES = [
  { path: 'services', title: 'Services & Digital Engineering Solutions — ROVAWARE', breadcrumbName: 'Services' },
  { path: 'about/company', title: 'About Us — ROVAWARE Engineering Studio', breadcrumbName: 'About Us' },
  { path: 'careers', title: 'Careers & Open Roles — ROVAWARE Engineering Studio', breadcrumbName: 'Careers' },
  { path: 'career', title: 'Careers & Open Roles — ROVAWARE Engineering Studio', breadcrumbName: 'Career' },
  { path: 'process', title: 'Our Process — ROVAWARE Engineering Studio', breadcrumbName: 'Our Process' },
  { path: 'about/contact', title: 'Contact Us — ROVAWARE Engineering Studio', breadcrumbName: 'Contact' },
  { path: 'about/book-project', title: 'Book a Project — Architecture & Scope Consultation | ROVAWARE', breadcrumbName: 'Book a Project' },
  { path: 'services/web-development', title: 'Web Development Services — ROVAWARE Engineering Studio', breadcrumbName: 'Web Development' },
  { path: 'services/chatbot-integration', title: 'AI Solutions & Autonomous Agents — ROVAWARE Engineering Studio', breadcrumbName: 'AI & Chatbots' },
  { path: 'services/saas-scaling', title: 'SaaS & Cloud Scaling — ROVAWARE Engineering Studio', breadcrumbName: 'SaaS Scaling' },
  { path: 'services/android-development', title: 'Android & Mobile Development — ROVAWARE Engineering Studio', breadcrumbName: 'Android Development' },
  { path: 'services/ui-ux-design', title: 'UI/UX Design Systems — ROVAWARE Engineering Studio', breadcrumbName: 'UI/UX Design' },
  { path: 'blog', title: 'Blog & Technical Insights — ROVAWARE Engineering', breadcrumbName: 'Blog' },
  { path: 'admin/jobs', title: 'Admin Portal — Job Postings Management | ROVAWARE', breadcrumbName: 'Admin Jobs' }
];

function verifyAndMirror() {
  console.log(`\n======================================================`);
  console.log(`Verifying & Mirroring Multi-Page Application (MPA) Pages`);
  console.log(`======================================================\n`);

  let successCount = 0;

  ROUTES.forEach((route) => {
    const routeIndexPath = path.join(distDir, route.path, 'index.html');
    const flatHtmlPath = path.join(distDir, `${route.path}.html`);

    if (!fs.existsSync(routeIndexPath)) {
      console.error(`❌ Missing MPA file: dist/${route.path}/index.html`);
      return;
    }

    const content = fs.readFileSync(routeIndexPath, 'utf-8');

    // Extract title and description
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    const descMatch = content.match(/<meta\s+name=["']description["']\s+content="([^"]*)"/i);

    const title = titleMatch ? titleMatch[1] : 'N/A';
    const desc = descMatch ? descMatch[1] : 'N/A';

    // Mirror to flat .html file for hosts supporting clean URLs via .html files
    const flatDir = path.dirname(flatHtmlPath);
    if (!fs.existsSync(flatDir)) {
      fs.mkdirSync(flatDir, { recursive: true });
    }
    fs.copyFileSync(routeIndexPath, flatHtmlPath);

    console.log(`✓ [MPA Route Verified] /${route.path}`);
    console.log(`   Title:       ${title}`);
    console.log(`   Description: ${desc}`);
    console.log(`   Mirrored:    dist/${route.path}.html\n`);

    successCount++;
  });

  console.log(`\n✓ Total MPA routes successfully verified and mirrored: ${successCount}/${ROUTES.length}\n`);
}

verifyAndMirror();
