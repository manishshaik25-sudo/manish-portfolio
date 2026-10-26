import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { site } from "@/lib/data";

const title = `${site.name} — ${site.role}`;
const description =
  "Java-focused Software Engineer with 1.5+ years of enterprise experience in Java, Spring Boot, REST APIs, JDBC, SQL, React, and Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  keywords: [
    "Manish Shaik",
    "Java Developer",
    "Java Backend Developer",
    "Software Engineer",
    "Spring Boot",
    "REST APIs",
    "Full-Stack Developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: site.name, title, description },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060814" },
    { media: "(prefers-color-scheme: light)", color: "#f5f7fc" },
  ],
};

// Applies the saved theme before first paint to avoid a flash. Dark is the default.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Sterling", addressRegion: "VA", addressCountry: "US" },
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
