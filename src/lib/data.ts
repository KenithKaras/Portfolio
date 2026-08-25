// Single source of truth for all portfolio content.
// Real facts only — no invented features, stats, or testimonials.

export type Project = {
  index: string;
  name: string;
  tagline: string;
  blurb: string;
  stack: string[];
  github: string;
  live?: string;
  flagship?: boolean;
  marker?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "SwiftBill",
    tagline: "Billing SaaS for small businesses",
    blurb:
      "Invoice creation, PDF export, WhatsApp and email sharing, and payment tracking — built solo, end to end, and sold to real local businesses that use it to get paid.",
    stack: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/KenithKaras/SwiftBill",
    flagship: true,
    marker: "Sold to paying customers",
  },
  {
    index: "02",
    name: "ElderCare AI Companion",
    tagline: "A smart assistant for elder care",
    blurb:
      "Supports elderly individuals and their caregivers with health tracking, medication reminders, SOS emergency alerts, real-time monitoring, and AI-powered assistance.",
    stack: ["React", "TypeScript", "AI"],
    live: "https://elder-care-ai-care-companion.vercel.app",
    github: "https://github.com/KenithKaras/ElderCare---AI-Care-Companion",
  },
  {
    index: "03",
    name: "Skill Gap Analyzer AI",
    tagline: "Résumé-to-roadmap skill analysis",
    blurb:
      "Analyzes a résumé against a job description to pinpoint skill gaps, then generates a personalized learning roadmap — with reasoning and time estimates for each step.",
    stack: ["React", "TypeScript", "AI"],
    live: "https://skill-gap-analyzer-ai.vercel.app",
    github: "https://github.com/KenithKaras/skill-gap-analyzer-ai",
  },
  {
    index: "04",
    name: "GameZone",
    tagline: "Full-stack game discovery platform",
    blurb:
      "Explore, rate, and review video games — with user authentication, personalized favorites, fast game search, and a sleek dark-mode UI.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/KenithKaras/gamezone-online-library",
  },
];

export const experience = {
  role: "Web Development Intern",
  company: "Enats",
  period: "Jun 2025 — Aug 2025",
  points: [
    "Developed responsive web interfaces using HTML, CSS, and JavaScript, with a focus on clean UI, accessibility, and performance.",
    "Worked with Git, APIs, and debugging tools across a range of projects.",
  ],
};

export const education = [
  {
    school: "St. Francis Institute of Technology, Mumbai",
    detail: "B.Tech — Information Technology",
    period: "Aug 2026 — Mar 2029",
  },
  {
    school: "Bhausaheb Vartak Polytechnic",
    detail: "Diploma — Computer Engineering",
    period: "Aug 2023 — May 2026",
  },
];

// Presented as the lead of the Skills section (the four top skills from the brief).
export const topSkills = [
  "Full-Stack Development",
  "Web Development",
  "Artificial Intelligence",
  "React.js",
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Frontend", items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"] },
  { label: "Backend & Data", items: ["Node.js", "PostgreSQL", "Supabase", "PHP"] },
  { label: "AI & Mobile", items: ["Applied AI", "React Native", "Python"] },
  { label: "Foundations", items: ["Git & GitHub", "REST APIs", "Responsive UI", "Accessibility"] },
];

export const certifications: { name: string; issuer: string }[] = [
  { name: "PHP for Beginners", issuer: "Udemy" },
  { name: "Generative AI for Beginners", issuer: "Udemy" },
  { name: "The Complete Full-Stack Web Development Bootcamp", issuer: "Udemy" },
  { name: "Tata GenAI Powered Data Analytics Job Simulation", issuer: "Forage" },
  { name: "Tata Cybersecurity Analyst Job Simulation", issuer: "Forage" },
  { name: "Software Engineering Job Simulation", issuer: "JPMorgan Chase & Co." },
];

export const socials = {
  email: "karaskenith@gmail.com",
  github: "https://github.com/KenithKaras",
  linkedin: "https://www.linkedin.com/in/kenith-karas/",
  location: "Mumbai, Maharashtra, India",
};

// Section anchors — shared by the navbar and the build-log spine.
export const navItems = [
  { id: "home", label: "Home", index: "00" },
  { id: "about", label: "About", index: "01" },
  { id: "experience", label: "Experience", index: "02" },
  { id: "work", label: "Work", index: "03" },
  { id: "skills", label: "Skills", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];

export const sectionIds = navItems.map((n) => n.id);
