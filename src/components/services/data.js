export const capabilities = [
  {
    id: 'research',
    number: '01',
    title: 'Research & Strategy',
    short: 'Evidence before aesthetics.',
    description:
      'We align user needs, business goals, and technical constraints before a single screen is designed. Stakeholder interviews and product audits turn assumptions into a clear, prioritized design direction.',
    deliverables: ['Stakeholder workshops', 'UX audit & benchmarks', 'User personas', 'Success metrics'],
    icon: 'research',
  },
  {
    id: 'architecture',
    number: '02',
    title: 'UX Architecture',
    short: 'Complex journeys, made clear.',
    description:
      'We structure content and functionality around real user tasks. Information architecture, user flows, and low-fidelity wireframes help us validate the experience early—when change is still fast and inexpensive.',
    deliverables: ['Information architecture', 'User flows', 'Wireframes', 'Content hierarchy'],
    icon: 'flows',
  },
  {
    id: 'interface',
    number: '03',
    title: 'UI & Visual Design',
    short: 'A distinct interface with purpose.',
    description:
      'We translate your brand into a responsive digital interface with considered typography, color, spacing, and interaction states. Every visual decision supports hierarchy, accessibility, and ease of use.',
    deliverables: ['High-fidelity screens', 'Responsive layouts', 'Accessibility states', 'Motion direction'],
    icon: 'interface',
  },
  {
    id: 'prototyping',
    number: '04',
    title: 'Prototyping & Testing',
    short: 'Test the experience, not a PDF.',
    description:
      'Clickable prototypes make the product tangible before development. We test critical journeys, observe where users hesitate, and refine interaction details using what we learn—not personal preference.',
    deliverables: ['Interactive prototype', 'Usability test plan', 'Findings report', 'Design iterations'],
    icon: 'prototype',
  },
  {
    id: 'systems',
    number: '05',
    title: 'Design Systems',
    short: 'Consistency that scales with you.',
    description:
      'Reusable components, tokens, and documented patterns keep every new screen coherent. Your team gets a practical shared language for designing and building faster without sacrificing quality.',
    deliverables: ['Component library', 'Design tokens', 'Usage guidelines', 'Pattern documentation'],
    icon: 'system',
  },
  {
    id: 'handoff',
    number: '06',
    title: 'Developer Handoff',
    short: 'Designed to survive production.',
    description:
      'We work alongside engineering through implementation, providing organized Figma files, responsive specifications, and interaction notes. Design QA catches gaps before they reach your users.',
    deliverables: ['Annotated Figma files', 'Responsive specs', 'Engineering support', 'Design QA'],
    icon: 'handoff',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    label: 'Listen, audit, align',
    description:
      'We begin with your goals, users, current product, and constraints. A focused discovery session gives everyone the same definition of success.',
    output: 'Project brief · UX audit · priorities',
  },
  {
    number: '02',
    title: 'Define',
    label: 'Structure the experience',
    description:
      'We map journeys, organize information, and wireframe key screens. You can review the product logic before visual design adds complexity.',
    output: 'User flows · architecture · wireframes',
  },
  {
    number: '03',
    title: 'Design',
    label: 'Make it clear and distinct',
    description:
      'We establish the visual language, design responsive screens, and connect them in a clickable prototype. Feedback happens in focused review rounds.',
    output: 'UI screens · prototype · component library',
  },
  {
    number: '04',
    title: 'Deliver',
    label: 'Build with confidence',
    description:
      'We prepare organized files and specifications, support engineering questions, and review the implementation so the finished product matches the intent.',
    output: 'Handoff · design QA · iteration support',
  },
];

export const faqs = [
  {
    question: 'What does a UI/UX design project include?',
    answer:
      'Scope is tailored to your product, but a typical engagement can include discovery, UX auditing, user flows, wireframes, responsive UI design, an interactive prototype, a component library, and developer handoff. We confirm exact deliverables before work begins.',
  },
  {
    question: 'Can you redesign an existing website or application?',
    answer:
      'Yes. We start by auditing the current experience to identify usability, accessibility, content, and visual consistency issues. We retain what already works and focus the redesign on the journeys and screens that will benefit most.',
  },
  {
    question: 'Do you design for both desktop and mobile?',
    answer:
      'Yes. Responsive behavior is considered throughout the process, not added at the end. Key layouts, navigation, content hierarchy, and interaction states are designed for the screen sizes your audience actually uses.',
  },
  {
    question: 'Will I be able to click through the design?',
    answer:
      'Yes. We create interactive Figma prototypes for important user journeys so you can experience navigation and interactions, share the flow with stakeholders, and give precise feedback before development.',
  },
  {
    question: 'How do feedback and revisions work?',
    answer:
      'Reviews are organized around agreed milestones such as wireframes, visual direction, and final screens. We consolidate feedback, discuss trade-offs openly, and refine the design within the revision rounds defined in your proposal.',
  },
  {
    question: 'Can your developers build the design too?',
    answer:
      'Yes. Rovaware can take an approved design into web or application development. If you have an internal engineering team, we can instead provide a structured handoff and remain available for implementation questions and design QA.',
  },
  {
    question: 'How long does UI/UX design take?',
    answer:
      'Timing depends on the number of unique screens, product complexity, research needs, and feedback availability. After discovery, you receive a scope with milestones and a realistic schedule rather than a generic estimate.',
  },
  {
    question: 'What do you need from us to get started?',
    answer:
      'A short brief is enough: your goals, audience, current product or references, required features, and any brand assets. If some of that is unclear, share what you have and we will help structure the rest during discovery.',
  },
];

export const services = [
  { label: 'Web Development', slug: 'web-development' },
  { label: 'Android Development', slug: 'android-development' },
  { label: 'SaaS Scaling', slug: 'saas-scaling' },
  { label: 'UI/UX Design', slug: 'ui-ux-design' },
];

export const budgetOptions = ['$1k–$3k', '$3k–$7k', '$7k–$15k', '$15k+', 'Not sure yet'];
export const timelineOptions = ['As soon as possible', 'Within 1–2 months', 'Within 3–6 months', 'Just exploring'];

