"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { heroKeywords, site } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "./icons";

const ease = [0.22, 1, 0.36, 1] as const;
const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };

function RotatingKeyword() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % heroKeywords.length), 2200);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <span className="relative inline-flex h-7 min-w-[11ch] items-center overflow-hidden align-middle" aria-hidden="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={heroKeywords[i]}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ duration: 0.35, ease }}
          className="text-gradient font-semibold"
        >
          {heroKeywords[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function ProfileTerminal() {
  const rows: [string, string][] = [
    ["name", `"${site.name}"`],
    ["role", `"Java Developer"`],
    ["experience", `"1.5+ years"`],
    ["backend", `["Java", "Spring Boot", "REST", "JDBC"]`],
    ["data", `["SQL", "Oracle", "MySQL"]`],
    ["frontend", `["React", "Next.js"]`],
    ["testing", `["JUnit 5", "Mockito", "MockMvc"]`],
    ["education", `"MS Computer Science, UCM '26"`],
    ["location", `"Sterling, VA"`],
  ];

  return (
    <div className="glass relative overflow-hidden">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-subtle">profile.json</span>
      </div>
      <pre className="whitespace-pre-wrap break-words p-5 font-mono text-[12px] leading-6 sm:text-[13px]">
        <code>
          <span className="text-subtle">$ cat profile.json</span>
          {"\n"}
          <span style={{ color: "var(--code-punct)" }}>{"{"}</span>
          {rows.map(([k, v], idx) => (
            <span key={k} className="block pl-8 -indent-4">
              <span style={{ color: "var(--code-key)" }}>&quot;{k}&quot;</span>
              <span style={{ color: "var(--code-punct)" }}>: </span>
              <span style={{ color: "var(--code-str)" }}>{v}</span>
              {idx < rows.length - 1 && <span style={{ color: "var(--code-punct)" }}>,</span>}
            </span>
          ))}
          <span style={{ color: "var(--code-punct)" }}>{"}"}</span>
          {"\n"}
          <span className="text-subtle">$ </span>
          <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent" />
        </code>
      </pre>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[560px] w-[1000px] max-w-[160vw] -translate-x-1/2 rounded-full opacity-80 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--glow-strong), var(--glow) 55%, transparent)" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
        <motion.div variants={container} initial="hidden" animate="show" className="min-w-0">
          <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs text-muted backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-accent" /> {site.location}
          </motion.p>

          <motion.h1 variants={item} id="hero-title" className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {site.name}
          </motion.h1>

          <motion.p variants={item} className="text-gradient mt-3 text-lg font-semibold sm:text-xl">
            {site.role}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-2xl font-semibold leading-snug tracking-tight sm:text-[1.7rem]">
            {site.headline}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl leading-relaxed text-muted">
            {site.intro}
          </motion.p>

          <motion.p variants={item} className="mt-6 flex items-center gap-2 font-mono text-sm text-muted">
            <span className="text-accent">&gt;</span> working with <RotatingKeyword />
            <span className="sr-only">{heroKeywords.join(", ")}</span>
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3 [&>.btn]:px-[1.1rem]">
            <a href="#projects" className="btn btn-primary">
              View My Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href={site.resume} download={site.resumeFileName} className="btn btn-secondary">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-5 text-sm text-muted">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-fg">
              <GitHubIcon className="h-[18px] w-[18px]" /> GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-fg">
              <LinkedInIcon className="h-[18px] w-[18px]" /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="relative min-w-0"
        >
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-violet/25 blur-2xl" />
          <ProfileTerminal />
        </motion.div>
      </div>
    </section>
  );
}
