import { Metadata } from "next";

// Enhanced SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://www.github.com/Deshan-Chandima"),
  title: "About Me | Software Developer & Machine Learning Enthusiast",
  description:
    "Experienced Software Developer from Bhubaneswar, India specializing in backend development, RESTful APIs, MongoDB, Express.js, React, Node.js, and TypeScript. Currently expanding skills in Machine Learning with TensorFlow and scikit-learn. Building production-ready applications with JWT authentication and cloud deployment. Pursuing BCA at Amity University with CGPA 8.93.",
  keywords: [
    "Software Developer",
    "Software Developer Bhubaneswar",
    "Software Developer India",
    "Backend Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Machine Learning Developer",
    "Machine Learning",
    "TensorFlow",
    "RESTful API Development",
    "JWT Authentication",
    "Tailwind CSS",
    "Docker",
    "Cloud Deployment",
    "Amity University BCA",
    "Web Developer India",
    "API Development",
    "Next.js Developer",
    "Python Developer",
    "Developer Portfolio",
    "Freelance Developer",
  ],
  authors: [{ name: "Deshan Chandima", url: "https://www.github.com/Deshan-Chandima" }],
  creator: "Deshan Chandima",
  publisher: "Deshan Chandima",
  openGraph: {
    title: "About Me | Software Developer & Machine Learning Enthusiast",
    description:
      "Software Developer from Bhubaneswar, India specializing in backend development, RESTful APIs, and full-stack applications. Learning Machine Learning and sharing my journey through content creation. Pursuing BCA at Amity University.",
    type: "profile",
    url: "https://www.github.com/Deshan-Chandima/about",
    siteName: "Deshan Chandima - Developer Portfolio",
    locale: "en_IN",
    images: [
      {
        url: "https://www.github.com/Deshan-Chandima/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Deshan Chandima - Software Developer & Machine Learning Enthusiast",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DeshanChandima",
    creator: "@DeshanChandima",
    title: "About Me | Software Developer & Machine Learning Enthusiast",
    description:
      "Full-stack MERN developer from Bhubaneswar, India focused on backend development and machine learning. Pursuing BCA at Amity University.",
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
    canonical: "https://www.github.com/Deshan-Chandima/about",
    languages: {
      en: "https://www.github.com/Deshan-Chandima/about",
    },
  },
  category: "Technology",
  classification: "Developer Portfolio",
};

// Simplified SVG Icons
const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Code icon"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const SystemIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="System design icon"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

// Enhanced JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.github.com/Deshan-Chandima/#person",
  name: "Deshan Chandima",
  givenName: "Deshan",
  familyName: "Pradhan",
  url: "https://www.github.com/Deshan-Chandima",
  mainEntityOfPage: "https://www.github.com/Deshan-Chandima/about",
  image: "https://www.github.com/Deshan-Chandima/images/logo.jpg",
  email: "mailto:deshan.c163@gmail.com",
  jobTitle: "Junior Software Developer",
  description:
    "Junior Software Developer at CHATI working on AI-powered calling software with WebRTC and SIP. Backend-focused full-stack engineer from Bhubaneswar, India; also a part-time Full Stack / WordPress developer at Prominds Digital. Currently pursuing BCA at Amity University.",
  worksFor: [
    { "@type": "Organization", name: "CHATI" },
    { "@type": "Organization", name: "Prominds Digital" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  nationality: { "@type": "Country", name: "India" },
  knowsLanguage: ["English", "Hindi", "Odia"],
  knowsAbout: [
    "Software Development",
    "Backend Development",
    "Full Stack Development",
    "AI Calling",
    "WebRTC",
    "SIP",
    "Real-time Voice",
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Machine Learning",
    "TensorFlow",
    "RESTful API",
    "JWT Authentication",
    "Tailwind CSS",
    "Docker",
    "Git",
    "Cloudinary",
    "Vercel",
    "Render",
    "Python",
    "scikit-learn",
    "NumPy",
    "pandas",
    "System Design",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Amity University",
      address: { "@type": "PostalAddress", addressCountry: "IN" },
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "Bachelor's Degree",
      about: "Bachelor of Computer Application (BCA)",
      recognizedBy: {
        "@type": "EducationalOrganization",
        name: "Amity University",
      },
    },
  ],
  skills:
    "Software Development, Backend Development, AI Calling, WebRTC, SIP, API Development, Machine Learning, MongoDB, Express.js, React, Node.js, Next.js, TypeScript, Python",
  sameAs: [
    "https://github.com/Deshan-Chandima",
    "https://www.linkedin.com/in/DeshanChandima",
    "https://x.com/DeshanChandima",
    "https://twitter.com/DeshanChandima",
    "https://www.instagram.com/github.com/Deshan-Chandima",
    "https://www.youtube.com/@morscode7",
    "https://leetcode.com/u/DeshanChandima/",
  ],
};

// AboutPage Structured Data — wraps the Person and is the page's primary entity
const aboutPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.github.com/Deshan-Chandima/about#aboutpage",
  url: "https://www.github.com/Deshan-Chandima/about",
  name: "About Deshan Chandima",
  description:
    "About Deshan Chandima — Junior Software Developer at CHATI working on AI calling (WebRTC + SIP), part-time at Prominds Digital, and currently learning system design and automation.",
  inLanguage: "en-IN",
  mainEntity: { "@id": "https://www.github.com/Deshan-Chandima/#person" },
  author: { "@id": "https://www.github.com/Deshan-Chandima/#person" },
  about: { "@id": "https://www.github.com/Deshan-Chandima/#person" },
  primaryImageOfPage: "https://www.github.com/Deshan-Chandima/images/logo.jpg",
  isPartOf: { "@id": "https://www.github.com/Deshan-Chandima/#website" },
  breadcrumb: {
    "@id": "https://www.github.com/Deshan-Chandima/about#breadcrumb",
  },
  datePublished: "2025-03-01",
  dateModified: new Date().toISOString().slice(0, 10),
};

// Breadcrumb Structured Data
const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.github.com/Deshan-Chandima/about#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.github.com/Deshan-Chandima",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://www.github.com/Deshan-Chandima/about",
    },
  ],
};

// Main Server Component - Lightweight Version
export default function About() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <div lang="en">
        {/* Main content */}
        <main>
          {/* Header */}
          <header>
            <h1 itemProp="name">About Me</h1>
            <p>
              By{" "}
              <a
                href="https://www.github.com/Deshan-Chandima"
                rel="author"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <span itemProp="name">Deshan Chandima</span>
              </a>
              {" · "}
              <span itemProp="jobTitle">Junior Software Developer</span> @{" "}
              <span itemProp="worksFor">CHATI</span>
              {" · "}
              <a href="mailto:deshan.c163@gmail.com" rel="me">
                deshan.c163@gmail.com
              </a>
            </p>
          </header>

          <div>
            {/* About Me Section */}
            <section id="about-section" aria-labelledby="about-heading">
              <div>
                <span>$</span>
                <h2 id="about-heading">About Me</h2>
              </div>

              <div>
                <p>
                  I&apos;m a <strong>Fullstack Web Developer</strong> with a strong growing interest in working with data. I build complete web apps using React, Node.js, and Express, and I mainly use <strong>MySQL</strong> to handle and store backend data safely. For the frontend, I use Tailwind CSS to make sure everything looks great on any screen. Right now, I am putting a big focus on studying <strong>Data Analysis</strong> and <strong>Data Engineering</strong>, learning how to understand data, pull useful insights, and build smooth data pipelines. I am fully comfortable handling the deployment side too, using <strong>cPanel</strong> for server hosting, <strong>Vercel</strong> and <strong>Render</strong> for launching apps, and <strong>Git/GitHub</strong> for managing code versions. I focus on writing clean code and always try to learn new things while studying as a Software Engineering undergraduate.
                </p>

                <div role="list" aria-label="Technical skills">
                  {[
                    "React",
                    "Node.js",
                    "Express",
                    "MySQL",
                    "Data Analysis",
                    "Data Engineering",
                    "Tailwind CSS",
                    "Git/GitHub",
                  ].map((tech) => (
                    <span key={tech} role="listitem">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section id="education-section" aria-labelledby="education-heading">
              <div>
                <span>$</span>
                <h2 id="education-heading">Education</h2>
              </div>

              <div
                itemScope
                itemType="https://schema.org/EducationalOccupationalCredential"
              >
                {/* Amity University */}
                <article
                  aria-labelledby="amity-heading"
                  itemScope
                  itemType="https://schema.org/EducationalOrganization"
                >
                  <div>
                    <h3 id="amity-heading" itemProp="name">
                      SLIIT City University
                    </h3>
                    <time dateTime="2023/Present" itemProp="temporalCoverage">
                      2023 — Present
                    </time>
                  </div>
                  <p itemProp="description">
                    Doing my BSc in Software Engineering. I am studying topics like advanced databases (SQL), data structures, system architecture, and QA.
                  </p>
                </article>

                <article
                  aria-labelledby="ack-heading"
                  itemScope
                  itemType="https://schema.org/EducationalOrganization"
                >
                  <div>
                    <h3 id="ack-heading" itemProp="name">
                      Simplilearn SkillUP
                    </h3>
                    <time dateTime="2026-07" itemProp="temporalCoverage">
                      July 2026
                    </time>
                  </div>
                  <p itemProp="description">
                    Completed the &quot;Introduction to Data Science&quot; course to learn the basics of working with data.
                  </p>
                </article>

                <article
                  aria-labelledby="highschool-heading"
                  itemScope
                  itemType="https://schema.org/EducationalOrganization"
                >
                  <div>
                    <h3 id="highschool-heading" itemProp="name">
                      Simplilearn SkillUP
                    </h3>
                    <time dateTime="2026-07" itemProp="temporalCoverage">
                      July 2026
                    </time>
                  </div>
                  <p itemProp="description">
                    Completed the &quot;Introduction to Data Analytics&quot; course to grow my skills in understanding and analyzing data.
                  </p>
                </article>
              </div>
            </section>

            {/* Current focus */}
            <section id="focus-section" aria-labelledby="focus-heading">
              <div>
                <span>$</span>
                <h2 id="focus-heading">What I&apos;m Doing</h2>
              </div>

              <div>
                {/* Junior SWE @ CHATI */}
                <article>
                  <div>
                    <CodeIcon />
                  </div>
                  <h3>Co-Founder @ Syntechcraft</h3>
                  <p>
                    Running a software startup with my co-founders. I build fullstack web apps for clients using <strong>React</strong>, <strong>Node.js</strong>, and <strong>MySQL</strong>. We work together to get our projects live using tools like <strong>cPanel</strong>, <strong>Vercel</strong>, and <strong>Render</strong>.
                  </p>
                </article>

                <article>
                  <div>
                    <SystemIcon />
                  </div>
                  <h3>Data Engineering &amp; Analysis</h3>
                  <p>
                    Studying as a Software Engineering undergraduate with a big focus on data. I am learning how to build smooth data pipelines and understand complex data. My goal is to combine these <strong>data skills</strong> with my <strong>fullstack web development</strong> experience.
                  </p>
                </article>
              </div>
            </section>

            {/* Status footer */}
            <footer>
              <div>
                <span>Status: Ready for new challenges</span>
                <span>Online</span>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
