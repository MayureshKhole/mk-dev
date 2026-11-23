export interface NavLink {
  name: string;
  href: string;
}

export interface HeroMetric {
  value: string;
  label: string;
}

export interface ServiceOffering {
  id: string;
  icon: "layers" | "smartphone" | "shield" | "gauge";
  title: string;
  summary: string;
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  impact: string;
  description: string;
  highlights: string[];
  tech: string[];
  href?: string;
  linkLabel?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  iconKey:
    | "typescript"
    | "react"
    | "react-native"
    | "tailwind"
    | "pwa"
    | "indexeddb"
    | "redux"
    | "bootstrap"
    | "node"
    | "express"
    | "mongodb"
    | "api"
    | "aws"
    | "cloudflare"
    | "firebase"
    | "maps"
    | "git"
    | "seo";
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  items: SkillItem[];
}

export interface TrackRecordEntry {
  organization: string;
  role: string;
  duration: string;
  badge?: string;
  bullets: string[];
}

export interface EngagementModel {
  title: string;
  description: string;
}

export const navLinks: NavLink[] = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Track Record", href: "#track-record" },
  { name: "About", href: "#about" },
];

export const heroMetrics: HeroMetric[] = [
  { value: "3+ yrs", label: "Full-Stack Delivery" },
  { value: "100+", label: "REST APIs Shipped" },
  { value: "40%", label: "Faster Render Speed" },
  { value: "+25%", label: "Organic SEO Growth" },
];

export const serviceOfferings: ServiceOffering[] = [
  {
    id: "fullstack-saas",
    icon: "layers",
    title: "Full-Stack Web & SaaS Architecture",
    summary:
      "End-to-end design and engineering of multi-tenant web platforms built with React, TypeScript, Node.js, Express, and MongoDB.",
    deliverables: [
      "Multi-tenant compliance & verification platforms",
      "Scalable RESTful API ecosystems (100+ endpoints)",
      "Clean, type-safe frontend & database architecture",
    ],
  },
  {
    id: "pwa-mobile",
    icon: "smartphone",
    title: "Offline-First PWAs & Mobile Apps",
    summary:
      "Resilient field-ready Progressive Web Apps and cross-platform React Native applications engineered for unreliable networks.",
    deliverables: [
      "Offline-first IndexedDB storage & background sync",
      "Google Maps API & geospatial workflow integration",
      "Cloud asset pipelines on AWS S3 & Cloudflare R2",
    ],
  },
  {
    id: "enterprise-ai",
    icon: "shield",
    title: "Enterprise Portals & AI Workflows",
    summary:
      "Secure internal systems, administrative dashboards, and interactive data pipelines tailored to complex organizational workflows.",
    deliverables: [
      "Role-based access control (RBAC) & admin portals",
      "HR, Payroll & user payment workflow automation",
      "AI-assisted data verification & annotation UIs",
    ],
  },
  {
    id: "performance-seo",
    icon: "gauge",
    title: "Modernization, Speed & Technical SEO",
    summary:
      "Targeted architecture refactors, legacy overhauls, and search optimization that translate directly into faster UX and organic growth.",
    deliverables: [
      "Codebase refactoring & render tuning (up to 40% faster)",
      "Heavy media optimization & conversion-focused UX",
      "React Helmet metadata & structured XML sitemaps",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "finraksha",
    title: "FIN₹KSHA — Multi-Tenant FinTech Verification Platform",
    client: "Sutra Heritage And Technologies (Client)",
    impact: "Offline-First PWA • High-Throughput Compliance",
    description:
      "Architected a multi-tenant FinTech verification platform supporting high-throughput background compliance checks, field operations, and resilient cloud media synchronization.",
    highlights: [
      "Designed multi-tenant architecture for concurrent compliance workflows",
      "Built an offline-first PWA with resilient sync backed by IndexedDB",
      "Integrated Google Maps API alongside AWS S3 and Cloudflare R2 storage",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "PWA",
      "IndexedDB",
      "Google Maps API",
      "AWS S3",
      "Cloudflare R2",
    ],
    href: "https://finrakshastage.online",
    linkLabel: "View Live Staging",
    featured: true,
  },
  {
    id: "nipun",
    title: "Nipun — AI-Powered FLN Assessment Platform",
    client: "VOPA Technologies",
    impact: "State-Level Data Verification",
    description:
      "Engineered the frontend architecture for a state-level Foundational Literacy & Numeracy assessment system serving educators and government stakeholders.",
    highlights: [
      "Built interactive data verification and AI annotation pipelines in React",
      "Streamlined multi-role workflows for high-volume state assessments",
    ],
    tech: ["React.js", "TypeScript", "Node.js", "MongoDB", "AI Pipelines"],
  },
  {
    id: "ngo-overhaul",
    title: "Full-Stack NGO Platform Overhaul",
    client: "VOPA Technologies",
    impact: "100+ Custom RESTful APIs",
    description:
      "Spearheaded a ground-up full-stack migration and architecture modernization, pairing a high-throughput API layer with optimized media delivery.",
    highlights: [
      "Developed 100+ RESTful APIs in Node.js and MongoDB",
      "Optimized media assets and page experience without sacrificing speed",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "RESTful APIs"],
  },
  {
    id: "enterprise-hr-seo",
    title: "Enterprise HR, Payroll & SEO Suite",
    client: "Stemmone Cloudworks",
    impact: "+25% Organic Search Traffic",
    description:
      "Delivered secure administrative tools for HR & Payroll operations, payment workflows, and role-managed portals while elevating search visibility.",
    highlights: [
      "Built role-based access control, HR/Payroll modules, and payment flows",
      "Implemented React Helmet & XML sitemaps to boost organic traffic by 25%",
    ],
    tech: ["React.js", "TypeScript", "Firebase", "Technical SEO", "RBAC"],
  },
  {
    id: "property-nexus",
    title: "Property Nexus — Cross-Platform Refactor",
    client: "Human Cloud Private Ltd",
    impact: "40% Faster Frontend Rendering",
    description:
      "Refactored a cross-platform property management codebase across web and mobile to eliminate rendering bottlenecks and elevate responsiveness.",
    highlights: [
      "Refactored frontend architecture for a 40% render performance gain",
      "Delivered reusable web and cross-platform React Native UI components",
    ],
    tech: ["React Native", "React.js", "Redux", "Bootstrap"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    subtitle: "Responsive interfaces, PWAs, and cross-platform apps",
    items: [
      { name: "TypeScript", iconKey: "typescript" },
      { name: "React.js", iconKey: "react" },
      { name: "React Native", iconKey: "react-native" },
      { name: "Tailwind CSS", iconKey: "tailwind" },
      { name: "PWA", iconKey: "pwa" },
      { name: "IndexedDB", iconKey: "indexeddb" },
      { name: "Redux", iconKey: "redux" },
      { name: "Bootstrap", iconKey: "bootstrap" },
    ],
  },
  {
    title: "Backend & Databases",
    subtitle: "High-throughput APIs and resilient data modeling",
    items: [
      { name: "Node.js", iconKey: "node" },
      { name: "Express.js", iconKey: "express" },
      { name: "MongoDB", iconKey: "mongodb" },
      { name: "RESTful APIs", iconKey: "api" },
    ],
  },
  {
    title: "Cloud, Storage & Growth",
    subtitle: "Object storage, geospatial APIs, and search performance",
    items: [
      { name: "AWS S3", iconKey: "aws" },
      { name: "Cloudflare R2", iconKey: "cloudflare" },
      { name: "Firebase", iconKey: "firebase" },
      { name: "Google Maps API", iconKey: "maps" },
      { name: "Git & GitHub", iconKey: "git" },
      { name: "Technical SEO", iconKey: "seo" },
    ],
  },
];

export const trackRecord: TrackRecordEntry[] = [
  {
    organization: "Sutra Heritage And Technologies (Client)",
    role: "Full-Stack Consultant / Developer",
    duration: "Jul 2026 – Present",
    badge: "Active Client Engagement",
    bullets: [
      "Architected FIN₹KSHA (finrakshastage.online), a multi-tenant FinTech verification platform supporting high-throughput background compliance checks.",
      "Engineered an offline-first PWA with resilient sync capabilities, integrating Google Maps API and cloud storage via AWS S3 and Cloudflare R2.",
    ],
  },
  {
    organization: "VOPA Technologies",
    role: "Software Developer",
    duration: "May 2025 – May 2026",
    bullets: [
      "Engineered frontend architecture for Nipun (AI-Powered FLN Assessment Platform) for state-level data verification and interactive annotation pipelines.",
      "Spearheaded full-stack NGO platform overhaul, developing 100+ RESTful APIs in Node.js/MongoDB and optimizing media assets.",
    ],
  },
  {
    organization: "Stemmone Cloudworks",
    role: "Software Developer",
    duration: "Jan 2024 – Jan 2025",
    bullets: [
      "Designed secure HR & Payroll administrative tools, user payment workflows, and role-managed access portals.",
      "Optimized website SEO with React Helmet and XML sitemaps, boosting organic traffic by 25%.",
    ],
  },
  {
    organization: "Human Cloud Private Ltd",
    role: "Software Developer Intern",
    duration: "Mar 2023 – Sep 2023",
    bullets: [
      "Developed web and cross-platform mobile UI components using React Native, Redux, and Bootstrap.",
      "Refactored the Property Nexus codebase to enhance frontend render performance by 40%.",
    ],
  },
];

export const engagementModels: EngagementModel[] = [
  {
    title: "End-to-End Product Build",
    description:
      "Scoped web, mobile, or offline-first PWA builds delivered from system architecture through production launch.",
  },
  {
    title: "Architecture & Consulting",
    description:
      "Hands-on technical direction for multi-tenant systems, offline sync, API design, and cloud storage integrations.",
  },
  {
    title: "Modernization & Audits",
    description:
      "Targeted refactors to speed up rendering, migrate legacy platforms, and strengthen technical SEO performance.",
  },
];

export const contactInfo = {
  email: "mbkhole@gmail.com",
  mailtoHref:
    "mailto:mbkhole@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20MK.dev",
  phoneDisplay: "+91-9561342753",
  phoneHref: "tel:+919561342753",
  githubHref: "https://github.com/Mayureshkhole",
  linkedinHref: "https://linkedin.com/in/mayuresh-khole",
  location: "Pune, India • Partnering with clients remotely",
};
