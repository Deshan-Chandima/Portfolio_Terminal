// Single source of truth for portfolio content.
//
// Each section is rendered twice — once as a static, SEO-friendly page under
// `app/*/page.tsx` and once as an interactive pane under
// `components/TerminalComp/*`. The two renderings differ on purpose, but the
// underlying data must not. Both sides import from here so the lists stay in
// lock-step (they had already drifted before this was centralized).

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    name: "Zandra Travellers ERP System",
    description:
      "A complete web-based Travel ERP Management System with frontend and backend integration, powered by a MySQL database. The system manages flight bookings, ticket and invoice generation, customer handling, and company income & expense tracking through a modern and responsive admin dashboard.",
    imageUrl: "/images/admin zandra.png",
    liveUrl: "https://www.syntechcraft.com/projects",
    githubUrl: "https://github.com/Deshan-Chandima",
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
  },
  {
    name: "ISP Eye: Network Monitoring",
    description:
      "A comprehensive, end-to-end network monitoring and data engineering pipeline. It automatically runs in the background to log historical performance, detect network outages, and track real-time process-level bandwidth usage. Features a FastAPI backend, MySQL data storage, and a premium React dashboard for data visualization.",
    imageUrl: "/images/isp-eye.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Deshan-Chandima/ISP_EYE.git",
    tech: ["Python", "FastAPI", "React", "MySQL", "SQLAlchemy"],
  },
  {
    name: "Paper Cloud.LK",
    description:
      "Paper Cloud.LK is a modern, interactive educational platform built to provide students with easy access to past papers, study materials, educational blogs, and information about classes. The platform is designed with a highly engaging and dynamic user interface to enhance the learning experience.",
    imageUrl: "/images/paper.png",
    liveUrl: "https://papercloud.lk",
    githubUrl: "https://github.com/Deshan-Chandima/Paper-Cloud.LK_frontend.git",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    name: "Samee And Sandu",
    description:
      "Samee And Sandu is a modern e-commerce platform for Korean beauty products with a fully integrated frontend and backend system. It includes an admin panel for managing products, orders, and customers, and a smooth customer dashboard for easy shopping and order tracking.",
    imageUrl: "/images/Samee and Sandu.png",
    liveUrl: "https://sameeandsandu.com",
    githubUrl: "https://github.com/Sandaru03/Korean-Ecommerce-Frontend.git",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  },
  {
    name: "Mazeline Events",
    description:
      "A complete web-based rental management system with frontend and backend integration, powered by a MySQL database. The Admin Dashboard provides a real-time overview of equipment, active rentals, customers, and revenue, helping manage inventory, orders, expenses, and users efficiently.",
    imageUrl: "/images/mazeline.jpeg",
    liveUrl: "https://mazelineevents.com",
    githubUrl: "https://github.com/Deshan-Chandima/Rental_management_frontend.git",
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
  },
  {
    name: "Amy Bot (In Development)",
    description:
      "A multipurpose Discord bot designed for server management, moderation, and community entertainment. Built with a modular Cog architecture, it handles real-time WebSocket events and REST API interactions asynchronously. Features include dynamic help menus, moderation tools, interactive games, and robust error logging.",
    imageUrl: "/images/discord.png",
    liveUrl: "#",
    githubUrl: "#",
    tech: ["Python 3", "discord.py", "asyncio"],
  },
  {
    name: "CeylonEpic Travels",
    description:
      "CeylonEpic Travels is a comprehensive travel booking platform with full frontend and backend integration, ensuring smooth and reliable performance. It includes a fully functional admin panel to efficiently manage bookings, users and customized travel packages. The platform offers a wide range of destinations, competitive pricing, personalized itineraries and a convenient taxi service to deliver a complete and unforgettable travel experience in Sri Lanka.",
    imageUrl: "/images/ceylonepic.png",
    liveUrl: "https://ceylonepic.com/",
    githubUrl: "#",
    tech: ["React", "Node.js", "Express", "Tailwind CSS"],
  }
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export interface SkillsCategory {
  languages: string[];
  frontend: string[];
  backend: string[];
  databases: string[];
  tools: string[];
  deployment: string[];
  data_analytics: string[];
}

export const skills: SkillsCategory = {
  languages: ["JavaScript", "Python", "Java", "PHP", "SQL", "HTML5 / CSS3"],
  frontend: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
  backend: ["Node.js", "Express.js", "REST APIs"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Firebase"],
  tools: ["Git / GitHub", "Postman"],
  deployment: ["cPanel", "Vercel", "Render"],
  data_analytics: ["Data Modeling", "Data Warehousing", "Databricks", "Dashboard Creation"],
};

// Faux shell command shown above each skill category.
export const skillCommands: Record<keyof SkillsCategory, string> = {
  languages: "ls -la /skills/languages/",
  frontend: "cat /skills/frontend/stack.txt",
  backend: "ps aux | grep backend",
  databases: "show databases;",
  tools: "which --all tools",
  deployment: "kubectl get deployments -A",
  data_analytics: "SELECT * FROM analytics_data;",
};

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const CONTACT_EMAIL = "deshan.c163@gmail.com";
export const CONTACT_LOCATION = "Colombo, Sri Lanka";
export const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=1YTcyCgirUAQoIo3uh5e2Tm2U1lEajg2r";

// Icon rendering differs between the static page and the terminal pane, so each
// side keys its own icon set off `name`; only the link metadata lives here.
export interface SocialLinkData {
  name: string;
  href: string;
  color: string;
}

export const socialLinks: SocialLinkData[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/deshan-chandima", color: "blue" },
  { name: "GitHub", href: "https://github.com/Deshan-Chandima", color: "purple" },
  { name: "Discord", href: "https://discord.com/users/d_sh4an", color: "indigo" },
];

// ---------------------------------------------------------------------------
// Experience — role start/end dates
//
// Durations are recomputed from these on every render (see lib/duration), so
// the visible "X mos" labels stay current without manual edits each month.
// ---------------------------------------------------------------------------

export const CHATI_INTERN_START = new Date(2025, 9, 1); // Oct 2025
export const CHATI_INTERN_END = new Date(2026, 2, 1); // Mar 2026 (promotion)
export const CHATI_JR_START = new Date(2026, 2, 1); // Mar 2026
export const PROMINDS_START = new Date(2025, 3, 1); // Apr 2025
