import { NextResponse } from "next/server";

export const dynamic = "force-static";

const SITE_URL = "https://www.github.com/Deshan-Chandima";

export async function GET() {
  const content = [
    "# llms.txt",
    "",
    `Site: ${SITE_URL}`,
    "Author: Deshan Chandima",
    "Title: Software Developer Portfolio",
    "Summary: Portfolio covering software development projects, skills, experience, and contact details.",
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /.next/",
    "",
    "# Canonical pages",
    `URL: ${SITE_URL}/`,
    `URL: ${SITE_URL}/about`,
    `URL: ${SITE_URL}/projects`,
    `URL: ${SITE_URL}/skills`,
    `URL: ${SITE_URL}/experience`,
    `URL: ${SITE_URL}/contact`,
    "",
    "# Preferred sources and attribution",
    `Attribution: Please credit "Deshan Chandima" with a link to ${SITE_URL} or https://github.com/Deshan-Chandima`,
    "",
    "# Project highlights",
    "Project: AutoPulse - Multi-tenant dealership and automotive management platform with RBAC and WhatsApp workflows.",
    "Project: AI-powered personal finance tracker (RukiAI) - Expense tracking with AI insights.",
    "Project: WhatsApp Campaign Management Platform - Role-based campaign and client management.",
    "Project: Neural Network From Scratch (Python) - Custom forward/backprop implementation.",
    "Project: YouTube Backend - Node/Express/Mongo backend architecture.",
    "Project: Network Marketing Full-stack - MLM-style referral and transaction workflows.",
    "",
    "# Core technical profile",
    "Skills: JavaScript, TypeScript, Python, React, Next.js, Node.js, Express, FastAPI, MongoDB, PostgreSQL, RabbitMQ, Redis, Docker, WebRTC, SIP, AI APIs.",
    "Current role: Junior Software Developer (Lead AI Engineer) at CHATI — B2B AI Voice Calling SaaS built on FreeSWITCH, ESL, and WebRTC.",
    "",

    "# Rate limits and caching suggestions",
    "Crawl-delay: 2",
    "Cache-max-age: 86400",
    "",
    "# Contact",
    "Contact: mailto:deshan.c163@gmail.com",
    "",
    "# Discovery",
    `Robots: ${SITE_URL}/robots.txt`,
    `Sitemap: ${SITE_URL}/sitemap.xml`,
  ].join("\n");

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
