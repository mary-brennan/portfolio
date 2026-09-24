// All of the site's text lives here. Edit this file to update your portfolio —
// you shouldn't need to touch the components for normal content changes.

export const site = {
  name: "Mary Brennan",
  role: "Software Engineer",
  location: "Sacramento, CA",
  tagline:
    "I build fast, accessible interfaces with React, Next.js and TypeScript — from design systems to desktop apps that run in locked-down environments.",
  // TODO: replace with your real links
  links: {
    github: "https://github.com/mary-brennan",
    linkedin: "https://www.linkedin.com/in/mary-b-b85a3b249/",
    email: "mbrennan2401@gmail.com",
  },
  openToWork: true,
};

export const about = [
  "Hi there!",
  "I'm an early-career software engineer who came to tech from sales and customer support. I've built my foundation through formal education, contract work, and a lot of self-directed learning.",
  "I've built and deployed applications, modernized client tech stacks, and worked across the full project lifecycle, from planning through testing, debugging, and CI/CD. I use AI-assisted development in my daily workflow, and I'm always eager to pick up new tools and build something real with them.",
  "I'm comfortable working independently, but I thrive in collaborative environments where I can support my teammates and learn from more experienced engineers as we innovate together. I believe technical skill is only part of being a great engineer; fostering an environment where everyone can contribute, learn, and improve their craft is equally important. I strive to be a developer that is dependable and someone my team looks forward to working with everyday.",
 ];

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Design systems",
  "Tauri",
  "Python",
  "Flask",
  "Linux",
  "pnpm monorepos",
  "Git",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string; // live site or repo — leave undefined for private work
};

export const projects: Project[] = [
  {
    title: "Forensic Kiosk App",
    description:
      "Cross-platform desktop application for secure, air-gapped facilities. Built the React/TypeScript UI inside a Tauri shell, backed by a local Flask service — no internet access assumed anywhere.",
    tags: ["Tauri", "React", "TypeScript", "Flask"],
  },
  {
    title: "Component Library",
    description:
      "Contributed components and tokens to a shared UI library monorepo built on a custom design system, used across multiple internal products.",
    tags: ["pnpm", "Tailwind CSS", "Design system"],
  },
  {
    title: "Photography Gallery",
    description:
      "Personal site for showcasing and selling my photography, with a responsive image grid and API-driven galleries.",
    tags: ["Next.js", "React", "REST APIs"],
    // href: "https://your-gallery-url.com",
  },
];

export const experience = [
  {
    role: "Software Engineer (Front-End)",
    company: "Software company — cybersecurity client",
    period: "2024 — 2026", // TODO: adjust dates
    points: [
      "Built the UI for a forensic kiosk desktop app used in air-gapped environments.",
      "Contributed reusable components to a Tailwind-based design system.",
    ],
  },
  {
    role: "A.S. Computer Science",
    company: "Sierra College",
    period: "2019 — 2022",
    points: [],
  },
];
