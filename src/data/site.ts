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

// Short intro line under each page title. Edit freely.
export const pageIntros = {
  projects: "A selection of things I've built professionally and personally.",
  experience: "Where I've worked, what I've studied, and the tools I use every day.",
  contact: "I'm looking for my next role. The fastest way to reach me is email.",
};

// Grouped by category. Keys are shown as the group labels.
export const skills: Record<string, string[]> = {
  Languages: ["Java", "JavaScript", "JSON", "HTML/CSS", "TypeScript", "Python", "Bash", "PowerShell"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Zustand", "Zod"],
  "Backend & Frameworks": ["Node.js", "Express", "Flask", "Tauri", "REST APIs"],
  Databases: ["SQL/PostgreSQL", "Supabase", "Schema design"],
  "Operating Systems": ["Linux", "Microsoft Windows"],
  Testing: ["Playwright"],
  "DevOps & Tools": ["Docker", "Git", "GitLab CI/CD", "GitHub", "Jira", "Makefiles", "Netlify", "VS Code", "Visual Studio"],
  AI: ["Claude Code", "Claude API", "GitHub Copilot","MCP Servers/Clients", "Ollama", "Local LLM integration", "Prompt engineering"],
  Methodologies: ["Agile", "Scrum"],
};


type ProjectBase = {
  title: string;
  description: string;
  tags: string[];
};

// Use one or the other (never both, since links can't nest):
// `href` makes the whole card a link (live site or repo; leave undefined for private work),
// `link` adds a link at the end of the description instead.
export type Project = ProjectBase &
  ({ href?: string; link?: never } | { link: { label: string; href: string }; href?: never });

export const projects: { work: Project[]; side: Project[] } = {
 work: [
  {
    title: "Forensic Kiosk App",
    description:
      "Cross-platform desktop application for secure, air-gapped facilities. Built the React/TypeScript UI inside a Tauri shell, backed by a local Flask service — no internet access assumed anywhere.",
    tags: ["Tauri", "React", "TypeScript", "Flask", "Docker",]
  },
  {
    title: "Component Library",
    description:
      "Contributed components and tokens to a shared UI library monorepo built on a custom design system, used across multiple internal products.",
    tags: ["pnpm", "Tailwind CSS", "React", "Typescript"],
  },
 
],
side: [
  {
    title: "Photography Gallery - Coming soon",
    description:
      "Online gallery showcasing my photography with interactive maps to view the locations I've shot. To see some of my work,",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "MapLibre GL JS"],
    link: { label: "view my photos on Unsplash", href: "https://unsplash.com/@marybrennan" },
  },
  {
    title: "Coffee Website",
    description: "Coffee website that mocks the 2025 Starbucks website layout.",
    tags: ["TypeScript", "Tailwind CSS", "Next.js", "Supabase", "REST APIs"],
    href: "https://github.com/mary-brennan/Mock-Starbucks-App",
  },
  {
    title: "Mock version of HipCamp Home Page",
    description: "This project was purely to test my HTML and CSS skills. I built the page from scratch and used the original website's code through the dev tools elements tab. I didn't implement any JS code so the website has no functionality.",
    tags: ["HTML", "CSS"],
    href: "https://hipcampmyversion.netlify.app/"
  },
  {
    title: "Photo Infinity Scroll",
    description: "This app uses the Unsplash API to fetch random images. Every time the user scrolls down a certain length, the application fetches more images to display, causing endless scrolling.",
    tags: ["Javascript", "HTML", "CSS", "Rest APIs"],
    href: "https://brennaninfinityscroll.netlify.app/"
  },
  {
    title: "Express Movie App",
    description:
      "This Express app uses a movie database API to display the movies currently playing in theaters and further information about each film when clicked on. It also handles various searches the user makes.",
    tags: ["Express", "Node.js", "JavaScript", "REST APIs"],
    href: "https://github.com/mary-brennan/Express-App",
  },
  {
    title: "PSQL Hospital Database w Linux Bash",
    description:
      "The database is created with PostgreSQL and the user interface attached to it is created using Linux Bash. This database only works for Sierra College Students & Staff who have the proper credentials.",
    tags: ["PostgreSQL", "Bash", "Linux"],
    href: "https://github.com/mary-brennan/sql_project",
  },
],
};

// A client engagement within a job (e.g. contract work placed with different clients).
export type ClientEngagement = {
  client: string;
  description: string;
  period: string;
  points: string[];
};

export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  points?: string[];
  clients?: ClientEngagement[];
};

// Mirrors the resume. Newest first.
export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Clutch, Inc - (Remote)",
    location: "Remote",
    period: "Dec 2024 — Jul 2026",
    clients: [
      {
        client: "Zetier",
        description: "Cybersecurity firm",
        period: "Oct 2025 — Jul 2026",
        points: [
          "Aided in the development of a company-specific React library to fulfill client UI needs. Then we utilized this to develop a 1:1 front-end replacement of their Flask app with a Tauri-React desktop application.",
          "Integrated our Tauri desktop app into the client's mono-repo via git-subtree and verified functionality for continual development within the client's codebase.",
          "Assisted my senior engineer with grasping client requirements for building and distributing our desktop app for offline development and answered clarifying questions. Then I assisted in the process of building a docker containerized AppImage of our desktop app.",
          "Cut onboarding time significantly for my team by tackling dense client documentation and source code to produce streamlined internal guides for my senior engineers to use.",
          "Improved my team's development experience by documenting solutions I created to fix our client's software configuration issues, eliminating the need for my team to possess deep knowledge of the codebase to run software.",
        ],
      },
      {
        client: "FEMA",
        description: "U.S. Fire Administration",
        period: "Dec 2024 — Oct 2025",
        points: [
          "Diagnosed and resolved production issues by debugging application failures in existing Grails applications and implementing code fixes through deployment pipelines.",
          "Developed responsive webpages by replicating existing Grails functionality in React while incorporating requested enhancements and modern UI/UX standards.",
          "Implemented RESTful API integrations within React applications to enable seamless data exchange between front-end interfaces and backend services.",
          "Created interactive web forms with a front-end validation library to guide user data entry and reduce submission errors.",
          "Ensured federal accessibility compliance by addressing Section 508 violations in live applications and incorporating WCAG 2.1 AA standards into React applications currently in development.",
        ],
      },
    ],
  },
  {
    role: "Sales Associate",
    company: "Pottery World - Rocklin, CA",
    location: "Rocklin, CA",
    period: "May 2018 — May 2024",
    points: [
      "Brought in over 3 million dollars in sales while working part time getting my degree.",
      "Developed daily plans and led projects among different departments to keep operations running smoothly.",
      "Diagnosed customer issues over the phone and in-person or connected them to the appropriate personnel.",
      "Trained new employees in business procedures while mentoring their work and helping them fix mistakes.",
      "Assisted designers in developing product floor plans or implemented my own if designers were away.",
    ],
  },
  {
    role: "A.S. Computer Science",
    company: "Sierra College",
    period: "2019 — 2022",
  },
];
