export const site = {
  name: "ROVAWARE",
  tagline: "Build • Automate • Scale",
  email: "support@rovaware.com",
  year: new Date().getFullYear(),
  breadcrumb: ["About", "Careers"],
  locations: ["Remote", "Global", "India"],
};

export const images = {
  hero: "/images/hero.jpg",
  studio1:
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
  studio2:
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
  studio3:
    "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
  model1:
    "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1100",
  model2:
    "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1100",
  wall: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1100",
  team1:
    "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
  team2:
    "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
  team3:
    "https://images.pexels.com/photos/3182822/pexels-photo-3182822.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
  desk: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
  lounge:
    "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
};

export const stats = [
  { value: "100", label: "Lighthouse Score" },
  { value: "99", label: "% Uptime SLA" },
  { value: "24", label: "hr Callback Guarantee" },
  { value: "2026", label: "Studio Edition" },
];

export const values = [
  {
    index: "01",
    title: "Architectural dignity, zero fluff.",
    body: "We write clean, high-performance software designed to stand the test of time. We eliminate technical debt upfront through strict TypeScript, sub-second TTFB, and resilient system architecture.",
  },
  {
    index: "02",
    title: "Engineering craft as a daily standard.",
    body: "Every commit, pull request, and design token is reviewed by engineers who care deeply about craft. We value thoughtful autonomy, clean documentation, and kind, constructive peer feedback.",
  },
  {
    index: "03",
    title: "Radical transparency & honest partnership.",
    body: "We speak directly and openly. We show work in progress, share architectural trade-offs, and celebrate contributors by name. No political games—just great engineering.",
  },
  {
    index: "04",
    title: "High velocity without burnout.",
    body: "World-class software comes from rested, sharp minds. We respect quiet focus blocks, keep meetings concise, and support flexible async workflows worldwide.",
  },
];

export const benefits = [
  {
    title: "Remote-First Autonomy",
    body: "Work from wherever you do your best thinking. Fully flexible schedules with async-first collaboration.",
  },
  {
    title: "Top-Tier Hardware & Tools",
    body: "State-of-the-art workstations, private AI developer licenses, Figma, and cloud sandboxes included.",
  },
  {
    title: "Competitive Compensation & Bonuses",
    body: "Above-market salary bands with milestone delivery bonuses and performance profit-sharing.",
  },
  {
    title: "Health & Comprehensive Wellness",
    body: "Comprehensive medical, dental, and mental wellness support for you and your family.",
  },
  {
    title: "Annual Learning Stipend",
    body: "$2,500 annual budget for technical certifications, architecture books, and global developer conferences.",
  },
  {
    title: "Generous Time Off & Recharge Days",
    body: "Flexible paid vacation, national holidays, and paid sabbatical options after major milestones.",
  },
  {
    title: "Direct Client & Product Impact",
    body: "Work directly on high-traffic production web apps, autonomous AI agents, and enterprise cloud systems.",
  },
  {
    title: "Mentorship & Career Progression",
    body: "Clear promotion tracks from engineer to staff architect with regular 1-on-1 career mapping.",
  },
];

export const departments = ["Engineering", "AI & ML", "Cloud & Architecture", "Design"];
export const locations = ["Remote", "Global", "India"];

export const jobs = [
  {
    id: "lead-fullstack-engineer",
    title: "Lead Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$90k – $130k",
    summary:
      "Architect and ship mission-critical Next.js 15 platforms, edge microservices, and reactive full-stack web applications for global clients.",
    responsibilities: [
      "Lead architecture and development of scalable Next.js 15 applications using React Server Components.",
      "Design high-throughput REST and GraphQL APIs with Node.js, TypeScript, and PostgreSQL.",
      "Enforce rigorous code standards, automated testing, and sub-100ms TTFB across edge CDN deployments.",
      "Collaborate directly with product leads and mentor junior engineers through code reviews.",
    ],
    requirements: [
      "5+ years of production experience with TypeScript, React, Next.js, and Node.js.",
      "Deep understanding of modern web performance, edge rendering, and database query optimization.",
      "Proven ability to translate complex product specifications into resilient software architecture.",
      "Clear, empathetic communication in async environments.",
    ],
  },
  {
    id: "senior-ai-engineer",
    title: "Senior AI & Autonomous Systems Engineer",
    department: "AI & ML",
    location: "Remote",
    type: "Full-time",
    salary: "$100k – $150k",
    summary:
      "Design and deploy production-grade autonomous agent swarms, vector RAG retrieval pipelines, and custom enterprise LLM integrations.",
    responsibilities: [
      "Architect autonomous multi-agent systems using LangChain, LlamaIndex, and Python microservices.",
      "Build low-latency vector search indices and semantic caching layers using pgvector and Pinecone.",
      "Integrate private, zero-data-retention LLM endpoints ensuring strict enterprise compliance.",
      "Benchmark model latency, token economics, and hallucination reduction strategies.",
    ],
    requirements: [
      "4+ years building production Python services; 2+ years shipping LLM or RAG systems.",
      "Hands-on expertise with vector databases, embedding models, and agent orchestration.",
      "Strong background in API security, rate limiting, and distributed background workers.",
      "Curiosity to stay ahead of the rapidly evolving AI landscape.",
    ],
  },
  {
    id: "cloud-devops-architect",
    title: "Cloud Infrastructure & DevOps Architect",
    department: "Cloud & Architecture",
    location: "Remote",
    type: "Full-time",
    salary: "$85k – $125k",
    summary:
      "Own global cloud infrastructure, automated CI/CD pipelines, zero-downtime deployments, and 99.9% uptime SLA across client projects.",
    responsibilities: [
      "Provision and maintain multi-cloud infrastructure on AWS, Vercel, and Cloudflare using Terraform.",
      "Build automated GitHub Actions workflows for continuous integration, linting, and automated testing.",
      "Configure zero-trust security policies, secrets rotation, and automated vulnerability scanning.",
      "Monitor application health, distributed telemetry, and incident response playbooks.",
    ],
    requirements: [
      "4+ years in DevOps / SRE roles managing production cloud environments.",
      "Strong proficiency with Docker, Kubernetes, Terraform, and edge networking.",
      "Familiarity with SOC2, GDPR compliance, and database failover architectures.",
      "Calm, systematic approach to incident mitigation and root-cause analysis.",
    ],
  },
  {
    id: "principal-uiux-designer",
    title: "Principal Spatial UI/UX & Motion Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$75k – $110k",
    summary:
      "Craft award-winning digital experiences, conversion-driven interfaces, Figma design tokens, and fluid 60fps micro-interactions.",
    responsibilities: [
      "Lead end-to-end interface and spatial design for high-impact web apps and client platforms.",
      "Maintain a unified design system with scalable typography, color tokens, and interactive components.",
      "Prototype fluid motion, transitions, and 3D micro-interactions in code or Figma.",
      "Conduct user testing sessions and translate analytics into iterative design enhancements.",
    ],
    requirements: [
      "5+ years designing shipped digital products with a standout visual portfolio.",
      "Expertise in Figma design systems, motion choreography, and component architecture.",
      "Working knowledge of CSS, Tailwind tokens, and developer handover workflows.",
      "Exceptional eye for typography, spatial balance, and dark-mode aesthetics.",
    ],
  },
  {
    id: "mobile-engineer-react-native",
    title: "Mobile Engineer (React Native & Android)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$80k – $120k",
    summary:
      "Build high-performance iOS and Android mobile applications featuring 120Hz fluid interfaces and offline-first data sync.",
    responsibilities: [
      "Develop cross-platform mobile apps using React Native and native Android (Kotlin) modules.",
      "Implement offline-first local database caching with conflict-free synchronization.",
      "Optimize memory usage, startup times, and smooth gesture transitions.",
      "Manage app store releases, code signing, and beta testing distribution.",
    ],
    requirements: [
      "3+ years shipping mobile applications to the Google Play Store and Apple App Store.",
      "Strong knowledge of React Native, TypeScript, and native bridge APIs.",
      "Experience with state management, background push notifications, and biometric auth.",
      "Passion for crafting buttery-smooth mobile user experiences.",
    ],
  },
];

export const processSteps = [
  {
    index: "01",
    title: "Discovery & Scope Chat",
    duration: "30 minutes",
    body: "An informal technical conversation with one of our lead architects. We discuss your background, engineering interests, and what you want to build next.",
  },
  {
    index: "02",
    title: "Architecture Walkthrough",
    duration: "45 minutes",
    body: "We walk through real code and architectural trade-offs together. No abstract puzzle questions—just realistic engineering problem-solving.",
  },
  {
    index: "03",
    title: "Collaborative Sprint",
    duration: "Paid 2-day micro-project",
    body: "A small, paid async project where you build a real feature with our team. We evaluate communication, code quality, and mutual working fit.",
  },
  {
    index: "04",
    title: "Offer & Welcome",
    duration: "Fast turnaround",
    body: "Transparent salary, hardware setup, and onboarding walkthrough. We send you all gear and grant access on day one.",
  },
];

export const testimonials = [
  {
    quote:
      "Working at ROVAWARE has redefined my standard for engineering excellence. We have the autonomy to make real architectural decisions and ship production code that thousands use every day.",
    name: "Alex Rivera",
    role: "Lead Full-Stack Architect",
  },
  {
    quote:
      "The engineering culture here is genuinely respectful of deep work. No endless meetings or fake urgency—just clear goals, cutting-edge AI toolchains, and teammates who truly care about craft.",
    name: "Elena Rostova",
    role: "Senior AI Systems Engineer",
  },
  {
    quote:
      "From day one, I was trusted to own our design systems and motion architecture. It's rare to find a studio that combines technical rigor with such high visual standards.",
    name: "Marcus Vance",
    role: "Principal Product Designer",
  },
];

export const faqs = [
  {
    q: "Are all roles fully remote?",
    a: "Yes. ROVAWARE operates as a remote-first studio. We collaborate asynchronously across time zones and provide home office stipends to ensure your workspace is world-class.",
  },
  {
    q: "What does the interview process look like?",
    a: "Our process is fast, respectful, and practical: a 30-min discovery call, a 45-min architecture walkthrough, and a paid collaborative micro-project. We never ask abstract LeetCode puzzle questions.",
  },
  {
    q: "What technologies and stack do you use?",
    a: "Our core stack includes Next.js 15, React, TypeScript, Tailwind CSS, Python (FastAPI, LangChain), PostgreSQL, Supabase, Docker, Terraform, AWS, and Cloudflare Workers.",
  },
  {
    q: "How does compensation and benefits work?",
    a: "We offer competitive, benchmarked salaries, milestone performance bonuses, full medical coverage, an annual $2,500 learning stipend, and top-spec hardware setups.",
  },
  {
    q: "How can I apply?",
    a: "Click 'Apply for this role' on any open position above, or send your CV and portfolio directly to support@rovaware.com. A senior engineer personally reviews every submission.",
  },
];
