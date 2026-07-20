"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import TerminalComp from "@/components/TerminalComp";
import { useShell } from "@/context/ShellContext";

function HomeTerminal() {
  const searchParams = useSearchParams();
  const { setHideIdentityOnMobile } = useShell();
  const section = searchParams.get("section");
  const cmd = searchParams.get("cmd");

  const handleFirstCommand = (): void => {
    setHideIdentityOnMobile(true);
  };

  return (
    <TerminalComp
      onFirstCommand={handleFirstCommand}
      initialSection={section}
      initialCommand={cmd}
    />
  );
}

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Deshan Chandima",
    jobTitle: "Software Developer",
    description:
      "Software developer specializing in full-stack development and Next.js with backend focus and machine learning exploration",
    image: "https://www.github.com/Deshan-Chandima/images/Mirror.JPG",
    email: "deshan.c163@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      addressCountry: "India",
    },
    knowsAbout: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "Python",
      "Machine Learning",
      "TensorFlow",
      "REST APIs",
      "Docker",
      "Git",
      "Backend Development",
      "Software Development",
    ],
    sameAs: [
      "https://www.linkedin.com/in/DeshanChandima",
      "https://github.com/Deshan-Chandima",
      "https://x.com/DeshanChandima",
      "https://www.youtube.com/@morscode7",
      "https://www.instagram.com/github.com/Deshan-Chandima",
      "https://leetcode.com/u/DeshanChandima/",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Amity University",
      sameAs: "https://www.amity.edu/",
    },
    workLocation: {
      "@type": "Place",
      name: "Bhubaneswar, Odisha, India",
    },
    url: "https://www.github.com/Deshan-Chandima/",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.github.com/Deshan-Chandima/",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.github.com/Deshan-Chandima",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.github.com/Deshan-Chandima/#website",
    name: "Deshan Chandima",
    alternateName: "Deshan Chandima Portfolio",
    url: "https://www.github.com/Deshan-Chandima",
    description:
      "Software Developer portfolio showcasing projects, skills, experience, and a developer blog.",
    inLanguage: "en-IN",
    creator: {
      "@type": "Person",
      name: "Deshan Chandima",
      url: "https://www.github.com/Deshan-Chandima",
    },
    publisher: {
      "@type": "Person",
      name: "Deshan Chandima",
      url: "https://www.github.com/Deshan-Chandima",
    },
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
      <Suspense fallback={null}>
        <HomeTerminal />
      </Suspense>
      <Script
        id="seo-meta-tags"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              const metaDescription = document.querySelector('meta[name="description"]');
              if (!metaDescription) {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = 'Software Developer from Bhubaneswar, India. Specializing in backend development, RESTful APIs, React, Node.js, MongoDB, TypeScript, and exploring Machine Learning with TensorFlow.';
                document.head.appendChild(meta);
              }
            }
          `,
        }}
      />
    </>
  );
}
