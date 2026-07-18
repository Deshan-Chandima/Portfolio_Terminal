import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://www.github.com/Deshan-Chandima")
  ),
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  title: {
    default:
      "Deshan Chandima | Software Developer & Machine Learning Enthusiast",
    template: "%s | Deshan Chandima",
  },
  description:
    "Software Developer from Bhubaneswar, India specializing in backend development, RESTful APIs, and full-stack applications using MongoDB, Express.js, React, Next.js, Node.js, and TypeScript. Currently learning Machine Learning with TensorFlow and scikit-learn.",
  keywords: [
    "Software Developer",
    "Software Developer Bhubaneswar",
    "Software Developer India",
    "TypeScript Developer",
    "Node.js Developer",
    "React Developer",
    "Machine Learning Developer",
    "Web Developer Portfolio",
    "Next.js Developer",
    "Backend Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "REST API Developer",
    "Python Developer",
    "TensorFlow Developer",
    "Developer Portfolio",
    "Freelance Developer",
  ],
  authors: [{ name: "Deshan Chandima", url: "https://www.github.com/Deshan-Chandima" }],
  creator: "Deshan Chandima",
  applicationName: "Deshan Chandima",
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.github.com/Deshan-Chandima",
    siteName: "Deshan Chandima",
    title: "Deshan Chandima | Software Developer",
    description:
      "Software Developer specializing in backend development, RESTful APIs, and Machine Learning. Based in Bhubaneswar, Odisha, India.",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Deshan Chandima - Software Developer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DeshanChandima",
    creator: "@DeshanChandima",
    title: "Deshan Chandima | Software Developer",
    description:
      "Software Developer with backend focus, building RESTful APIs and full-stack applications. Learning Machine Learning.",
    images: ["/images/logo.jpg"],
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
    canonical: "https://www.github.com/Deshan-Chandima",
    types: {
      "application/rss+xml": [
        { url: "https://www.github.com/Deshan-Chandima/blog/rss.xml", title: "Deshan Chandima — Blog RSS" },
      ],
    },
  },
  referrer: "strict-origin-when-cross-origin",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="application-name" content="Deshan Chandima - Developer" />
        <meta name="apple-mobile-web-app-title" content="Deshan Dev" />
        <link rel="icon" href="/images/logo.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://www.github.com/Deshan-Chandima" />
        <link
          rel="alternate"
          type="text/plain"
          title="LLMs Description"
          href="https://www.github.com/Deshan-Chandima/llms.txt"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Deshan Chandima — Blog (RSS)"
          href="https://www.github.com/Deshan-Chandima/blog/rss.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Deshan Chandima",
              alternateName: "Deshan Chandima Portfolio",
              url: "https://www.github.com/Deshan-Chandima/",
              inLanguage: "en-IN",
              publisher: {
                "@type": "Person",
                name: "Deshan Chandima",
                url: "https://www.github.com/Deshan-Chandima/",
              },
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
