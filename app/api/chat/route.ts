import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { projects, skills } from "@/lib/portfolio-data";

const apiKey = process.env.GEMINI_API_KEY;
const modelId = process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";
const genAI = new GoogleGenerativeAI(apiKey || "");

const projectsContext = "Projects (type 'cd projects' to see all): " + projects.map((p, i) => `${i + 1}) ${p.name} — ${p.description}; Tech: ${p.tech.join(", ")}.`).join(" ");

const skillsContext = "Tech: " + Object.entries(skills).map(([category, list]) => `${category} — ${list.join(", ")}`).join(". ");

const CONTEXT_PARTS = {
  base: `You are Deshan Chandima's AI assistant on his portfolio terminal. CRITICAL: Reply in 2–3 short sentences only. Never write long paragraphs or list everything—give a direct, brief answer to what was asked. Deshan is a Fullstack Web Developer focused on building web apps with React, Node.js, Express, and MySQL, with a strong growing interest in Data Analysis and Data Engineering. Based in Colombo, Sri Lanka.`,

  skills: skillsContext,

  projects: projectsContext,

  experience: `Current roles: (1) Syntechcraft — Co-Founder & Fullstack Developer, Full-time, Mar 2026–Present, Colombo, Sri Lanka (Remote). Building complete, reliable web apps for clients from start to finish. Setting up and managing secure databases to store and track backend data smoothly. Working closely with my team to put projects online and keep our servers running well. (2) Department of Examination Sri Lanka — Software Engineer Intern, Internship, Oct 2025–Apr 2026, Colombo, Sri Lanka (On-site). Helped build web apps and manage databases. Wrote fast queries to load data and make useful reports. Found and fixed system errors and data issues during very busy times to keep everything running smoothly. Worked with senior staff and users to find out what they needed, create data reports, and help deliver good IT solutions. Note: Any of the projects listed were built and delivered by my team at our startup (Syntechcraft), while more of them are personal projects.`,

  contact: `Contact: Email deshan.c163@gmail.com. LinkedIn linkedin.com/in/deshan-chandima. GitHub github.com/Deshan-Chandima. Resume: https://drive.google.com/uc?export=download&id=1YTcyCgirUAQoIo3uh5e2Tm2U1lEajg2r (also linked on contact page). Location: Colombo, Sri Lanka.`,

  education: `Education: BSc in Software Engineering at SLIIT City University (2023–Present). Completed Introduction to Data Science (July 2026) and Introduction to Data Analytics (July 2026) at Simplilearn SkillUP.`,
};

function getRelevantContext(question: string): string {
  const q = question.toLowerCase();
  let context = CONTEXT_PARTS.base;

  if (
    q.includes("skill") ||
    q.includes("tech") ||
    q.includes("stack") ||
    q.includes("know") ||
    q.includes("language") ||
    q.includes("tool")
  ) {
    context += "\n" + CONTEXT_PARTS.skills;
  }

  if (
    q.includes("project") ||
    q.includes("built") ||
    q.includes("portfolio") ||
    q.includes("github") ||
    q.includes("app")
  ) {
    context += "\n" + CONTEXT_PARTS.projects;
  }

  if (
    q.includes("experience") ||
    q.includes("job") ||
    q.includes("work") ||
    q.includes("company") ||
    q.includes("chati") ||
    q.includes("prominds") ||
    q.includes("internship") ||
    q.includes("role")
  ) {
    context += "\n" + CONTEXT_PARTS.experience;
  }

  if (
    q.includes("contact") ||
    q.includes("reach") ||
    q.includes("email") ||
    q.includes("linkedin") ||
    q.includes("resume") ||
    q.includes("hire") ||
    q.includes("connect")
  ) {
    context += "\n" + CONTEXT_PARTS.contact;
  }

  if (
    q.includes("study") ||
    q.includes("education") ||
    q.includes("university") ||
    q.includes("college") ||
    q.includes("bca") ||
    q.includes("cgpa")
  ) {
    context += "\n" + CONTEXT_PARTS.education;
  }

  if (
    q.includes("who") ||
    q.includes("about deshan") ||
    q.includes("tell me about") ||
    q.includes("introduce")
  ) {
    context +=
      "\n" +
      CONTEXT_PARTS.skills +
      "\n" +
      CONTEXT_PARTS.experience +
      "\n" +
      CONTEXT_PARTS.projects;
  }

  return context;
}

export async function POST(request: NextRequest) {
  try {
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured", success: false },
        { status: 500 }
      );
    }

    const { message } = await request.json();

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { error: "No message provided", success: false },
        { status: 400 }
      );
    }

    const relevantContext = getRelevantContext(message);

    console.log("📊 Context tokens (approx):", relevantContext.length / 4);

    const model = genAI.getGenerativeModel({
      model: modelId,
      systemInstruction: relevantContext,
    });

    const chat = model.startChat({ history: [] });
    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return NextResponse.json({
      response: text,
      success: true,
    });
  } catch (error: unknown) {
    const errMsg =
      error instanceof Error ? error.message : typeof error === "string" ? error : String(error);

    console.error("Gemini Error:", error);

    // Rate limit / quota exceeded (429) – show friendly message, don't expose raw API error
    const isRateLimit =
      errMsg.includes("429") ||
      errMsg.includes("Too Many Requests") ||
      errMsg.includes("quota") ||
      errMsg.includes("rate limit");

    if (isRateLimit) {
      return NextResponse.json(
        {
          error: "Rate limit reached. Please try again in a few minutes.",
          success: false,
        },
        { status: 429 }
      );
    }

    return NextResponse.json(
      {
        error: "AI temporarily unavailable",
        details: errMsg,
        success: false,
      },
      { status: 500 }
    );
  }
}
