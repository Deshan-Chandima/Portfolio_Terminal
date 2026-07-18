import { Metadata } from "next";
import { durationLabel, formatMonths, monthsBetween } from "@/lib/duration";
import {
  CHATI_INTERN_START,
  CHATI_INTERN_END,
  CHATI_JR_START,
  PROMINDS_START,
} from "@/lib/portfolio-data";

const SITE_URL = "https://www.github.com/Deshan-Chandima";
const AUTHOR_NAME = "Deshan Chandima";


// Static page — re-render daily so durations stay fresh between deploys.
export const revalidate = 86400;

// SEO Metadata for Experience page
export const metadata: Metadata = {
  metadataBase: new URL("https://www.github.com/Deshan-Chandima"),
  title: "Experience | Junior Software Developer (Lead AI Engineer) @ CHATI · FreeSWITCH + WebRTC",
  description:
    "Experience of Deshan Chandima: Junior Software Developer (Lead AI Engineer) at CHATI (Mar 2026–Present) architecting a B2B AI Voice Calling SaaS with FreeSWITCH, ESL, and WebRTC; part-time at Prominds Digital — shipped AutoPulse, a multi-tenant B2B CRM for automotive dealerships with RBAC, WhatsApp automation, and RabbitMQ.",
  keywords: [
    "Deshan Chandima Experience",
    "Junior Software Developer",
    "Lead AI Engineer",
    "Junior Software Developer CHATI",
    "Software Developer Intern CHATI",
    "Software Developer Bhubaneswar",
    "AI Voice Calling SaaS",
    "FreeSWITCH Developer",
    "WebRTC Developer",
    "ESL Developer",
    "VoIP Engineer",
    "STT TTS LLM Pipeline",
    "AI Meeting Assistant",
    "AutoPulse CRM",
    "Prominds Digital",
    "Backend Developer India",
    "Data Pipeline Engineer",
    "Union-Find Deduplication",
    "RabbitMQ",
    "Bhubaneswar Software Developer",
  ],
  authors: [{ name: "Deshan Chandima", url: "https://www.github.com/Deshan-Chandima" }],
  creator: "Deshan Chandima",
  publisher: "Deshan Chandima",
  openGraph: {
    title: "Experience | Junior Software Developer (Lead AI Engineer) @ CHATI · FreeSWITCH + WebRTC",
    description:
      "Junior Software Developer (Lead AI Engineer) at CHATI (Mar 2026–Present) — B2B AI Voice Calling SaaS on FreeSWITCH + WebRTC. Part-time at Prominds Digital — AutoPulse B2B CRM.",
    type: "profile",
    url: "https://www.github.com/Deshan-Chandima/experience",
    siteName: "Deshan Chandima - Developer Portfolio",
    locale: "en_IN",
    images: [
      {
        url: "https://www.github.com/Deshan-Chandima/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Deshan Chandima — Junior Software Developer (Lead AI Engineer) experience",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DeshanChandima",
    creator: "@DeshanChandima",
    title: "Experience | Junior Software Developer (Lead AI Engineer) @ CHATI · FreeSWITCH + WebRTC",
    description:
      "Junior Software Developer (Lead AI Engineer) at CHATI — B2B AI Voice Calling SaaS on FreeSWITCH + WebRTC. Part-time at Prominds Digital — AutoPulse B2B CRM.",
    images: ["https://www.github.com/Deshan-Chandima/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.github.com/Deshan-Chandima/experience",
    languages: {
      en: "https://www.github.com/Deshan-Chandima/experience",
    },
  },
  category: "Technology",
  classification: "Professional Experience",
};

function toIso(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function buildStructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: AUTHOR_NAME,
    url: SITE_URL,
    mainEntityOfPage: `${SITE_URL}/experience`,
    image: `${SITE_URL}/images/logo.jpg`,
    jobTitle: "Junior Software Developer (Lead AI Engineer)",
    hasOccupation: [
      {
        "@type": "EmployeeRole",
        roleName: "Junior Software Developer (Lead AI Engineer)",
        startDate: toIso(CHATI_JR_START),
        worksFor: {
          "@type": "Organization",
          name: "CHATI",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bhubaneswar",
            addressRegion: "Odisha",
            addressCountry: "IN",
          },
        },
      },
      {
        "@type": "EmployeeRole",
        roleName: "Software Developer Intern",
        startDate: toIso(CHATI_INTERN_START),
        endDate: toIso(CHATI_INTERN_END),
        worksFor: { "@type": "Organization", name: "CHATI" },
      },
      {
        "@type": "EmployeeRole",
        roleName: "Part-time Developer",
        startDate: toIso(PROMINDS_START),
        worksFor: {
          "@type": "Organization",
          name: "Prominds Digital",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bhubaneswar",
            addressRegion: "Odisha",
            addressCountry: "IN",
          },
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/experience#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Experience",
        item: `${SITE_URL}/experience`,
      },
    ],
  };

  return { personSchema, breadcrumbSchema };
}

export default function Experience() {
  const { personSchema, breadcrumbSchema } = buildStructuredData();
  const now = new Date();

  const chatiTotal = durationLabel(CHATI_INTERN_START, now);
  const chatiJr = durationLabel(CHATI_JR_START, now);
  const chatiIntern = formatMonths(monthsBetween(CHATI_INTERN_START, CHATI_INTERN_END));
  const promindsTotal = durationLabel(PROMINDS_START, now);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section
        id="experience-section"
        aria-labelledby="experience-heading"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div lang="en">
          <header>
            <h1 id="experience-heading" itemProp="name">
              Experience
            </h1>
            <p>
              Professional roles as a Co-Founder & Fullstack Developer at Syntechcraft and a Software Engineer Intern at the Department of Examination Sri Lanka — building reliable web apps, managing databases, and delivering IT solutions.
            </p>
          </header>

          <div>
            {/* Syntechcraft */}
            <article
              aria-labelledby="syntechcraft-heading"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <header>
                <h2 id="syntechcraft-heading" itemProp="name">
                  Syntechcraft
                </h2>
                <p>
                  <strong>5 mos</strong> · Colombo, Sri Lanka · Remote
                </p>
              </header>

              <section aria-labelledby="syntechcraft-role-heading">
                <h3 id="syntechcraft-role-heading">
                  Co-Founder & Fullstack Developer · Full-time
                </h3>
                <p>
                  <time dateTime="2026-03">Mar 2026</time> — Present · 5 mos
                </p>
                <ul itemProp="description">
                  <li>
                    Web Applications: Building complete, reliable web apps for clients from start to finish.
                  </li>
                  <li>
                    Database Design: Setting up and managing secure databases to store and track backend data smoothly.
                  </li>
                  <li>
                    Team Deployment: Working closely with my team to put projects online and keep our servers running well.
                  </li>
                </ul>
              </section>
            </article>

            {/* Department of Examination Sri Lanka */}
            <article
              aria-labelledby="doels-heading"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <header>
                <h2 id="doels-heading" itemProp="name">
                  Department of Examination Sri Lanka
                </h2>
                <p>
                  <strong>7 mos</strong> · Colombo, Sri Lanka · On-site
                </p>
              </header>

              <section aria-labelledby="doels-role-heading">
                <h3 id="doels-role-heading">
                  Software Engineer Intern · Internship
                </h3>
                <p>
                  <time dateTime="2025-10">Oct 2025</time> —{" "}
                  <time dateTime="2026-04">Apr 2026</time> · 7 mos
                </p>
                <ul itemProp="description">
                  <li>
                    Development & Data: Helped build web apps and manage databases. Wrote fast queries to load data and make useful reports.
                  </li>
                  <li>
                    Fixing Errors: Found and fixed system errors and data issues during very busy times to keep everything running smoothly.
                  </li>
                  <li>
                    Teamwork: Worked with senior staff and users to find out what they needed, create data reports, and help deliver good IT solutions.
                  </li>
                </ul>
              </section>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

