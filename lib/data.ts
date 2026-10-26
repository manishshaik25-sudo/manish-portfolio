// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site —
// components read from these objects and never hard-code personal details.
// ---------------------------------------------------------------------------

export const site = {
  name: "Manish Shaik",
  role: "Java Backend & Full-Stack Software Engineer",
  headline: "Building reliable backend systems and scalable web applications.",
  intro:
    "I'm a Java-focused Software Engineer with 1.5+ years of professional experience developing enterprise applications using Java, Spring Boot, REST APIs, JDBC, and SQL. I enjoy solving complex backend challenges, optimizing database performance, and building reliable software.",
  email: "manishshaik25@gmail.com",
  linkedin: "https://linkedin.com/in/manish-shaik",
  github: "https://github.com/manishshaik25-sudo",
  location: "Sterling, Virginia",
  // Place the real PDF at public/resume/Manish_Shaik_Resume.pdf
  resume: "/resume/Manish_Shaik_Resume.pdf",
  resumeFileName: "Manish_Shaik_Resume.pdf",
  // Set NEXT_PUBLIC_SITE_URL in Vercel to your production URL for correct SEO tags.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const heroKeywords = [
  "Java",
  "Spring Boot",
  "REST APIs",
  "JDBC",
  "SQL optimization",
  "Oracle & MySQL",
  "JUnit 5 & Mockito",
  "React",
  "Next.js",
];

export const about = {
  paragraphs: [
    "I'm a Software Engineer focused on Java backend development, with 1.5+ years of professional experience building enterprise applications at MillerKnoll. Most of that work supported logistics workflows: backend modules, REST APIs, and the SQL underneath them.",
    "My foundation is Java, Spring Boot, SQL, REST APIs, and JDBC, with hands-on React and Next.js experience that lets me trace a problem from the UI through the service layer down to the database.",
    "I completed my Master's in Computer Science at the University of Central Missouri in May 2026. I'm most interested in backend engineering, testing, performance optimization, and scalable systems.",
  ],
  facts: [
    { label: "Experience", value: "1.5+ years" },
    { label: "Domain", value: "Enterprise logistics" },
    { label: "Education", value: "MS Computer Science" },
    { label: "Based in", value: "Sterling, VA" },
  ],
  interests: [
    "Backend engineering",
    "Testing",
    "Performance optimization",
    "Scalable systems",
  ],
};

export type SkillIcon =
  | "code"
  | "server"
  | "layout"
  | "database"
  | "flask"
  | "wrench"
  | "workflow";

export const skills: { category: string; icon: SkillIcon; items: string[] }[] = [
  { category: "Languages", icon: "code", items: ["Java", "JavaScript", "SQL", "HTML", "CSS"] },
  {
    category: "Backend",
    icon: "server",
    items: ["Spring Boot", "Spring", "Spring Data JPA", "Hibernate", "REST APIs", "JDBC", "Servlets", "JSP"],
  },
  { category: "Frontend", icon: "layout", items: ["React", "Next.js"] },
  {
    category: "Databases",
    icon: "database",
    items: ["Oracle", "MySQL", "Relational schema design", "Indexing", "SQL optimization"],
  },
  { category: "Testing", icon: "flask", items: ["JUnit 5", "Mockito", "Spring MockMvc", "JaCoCo"] },
  {
    category: "Developer Tools",
    icon: "wrench",
    items: ["Git", "GitHub", "Maven", "Jira", "Confluence", "Eclipse", "GitHub Copilot"],
  },
  {
    category: "Engineering Practices",
    icon: "workflow",
    items: ["OOP", "Data Structures", "Algorithms", "Debugging", "Code Reviews", "Agile/Scrum"],
  },
];

export const experience = [
  {
    role: "Java Developer",
    company: "MillerKnoll",
    location: "Bangalore, India",
    period: "July 2023 – December 2024",
    highlights: [
      "Developed and maintained 3 Java/Spring Boot backend modules supporting logistics workflows across 4 operational regions.",
      "Developed and enhanced 5 REST API endpoints connected to MySQL and Oracle through JDBC.",
      "Built 5 reusable React/Next.js components and integrated 3 API endpoints.",
      "Resolved a production cancellation workflow defect through frontend, backend, and database debugging.",
      "Created and executed 24 functional and edge-case test scenarios.",
      "Optimized 4 SQL queries, improving average execution time by 20%, from 400 ms to 320 ms.",
      "Collaborated with engineers using Agile practices and code reviews.",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "JDBC", "MySQL", "Oracle", "React", "Next.js", "Agile"],
  },
];

export const achievements = [
  { value: "3", label: "Spring Boot backend modules", detail: "Logistics workflows across 4 operational regions" },
  { value: "5", label: "REST API endpoints", detail: "Built and enhanced on MySQL & Oracle via JDBC" },
  { value: "5", label: "Reusable UI components", detail: "React/Next.js, integrated with 3 API endpoints" },
  { value: "24", label: "Test scenarios", detail: "Functional and edge-case coverage, created and executed" },
];

export const sqlOptimization = {
  queries: 4,
  beforeMs: 400,
  afterMs: 320,
  improvement: "20%",
};

export const projects = [
  {
    title: "LogiMind AI",
    subtitle: "Logistics Management Platform",
    description:
      "A backend logistics platform providing RESTful shipment management APIs, Oracle database persistence, input validation, centralized exception handling, and automated testing.",
    tech: [
      "Java",
      "Spring Boot",
      "Oracle AI Database 26ai",
      "Spring Data JPA",
      "Hibernate",
      "JUnit",
      "Mockito",
      "MockMvc",
      "JaCoCo",
    ],
    features: [
      "Shipment creation, retrieval, status updates, and deletion",
      "Oracle AI Database 26ai integration",
      "Validation and centralized exception handling",
      "Automated controller and unit tests",
    ],
    coverage: [
      { label: "Controller coverage", value: 91 },
      { label: "Overall instruction coverage", value: 77 },
    ],
    github: "https://github.com/manishshaik25-sudo/logimind-ai-logistics-platform",
    featured: true,
  },
  {
    title: "Technical Blog Platform",
    subtitle: "Responsive content-driven web app",
    description:
      "A responsive blog application featuring reusable components, client-side routing, server-side rendering, static site generation, and dynamic content integration through the Contentful REST API.",
    tech: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "Contentful CMS"],
    features: [
      "Reusable component architecture",
      "Client-side routing",
      "Server-side rendering and static site generation",
      "Dynamic content via the Contentful REST API",
    ],
    coverage: [] as { label: string; value: number }[],
    // Add the repository URL here when it's public, e.g. "https://github.com/manishshaik25-sudo/<repo>"
    github: undefined as string | undefined,
    featured: false,
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Central Missouri",
    period: "January 2025 – May 2026",
    gpa: "3.4/4.0",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "Christ University, Bangalore",
    period: "May 2019 – August 2023",
    gpa: "3.6/4.0",
  },
];

export const certifications = [
  { name: "Advanced Java Certification Training", issuer: "Edureka", year: "2023" },
  { name: "Java Certification Training Course", issuer: "Coskills.in", year: "2023" },
  { name: "Java Language Certification", issuer: "SFI Educational Society", year: "2021" },
];
