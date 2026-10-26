"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Boxes, Check, Network } from "lucide-react";
import { projects } from "@/lib/data";
import { GitHubIcon } from "./icons";
import { IconTile, Section } from "./ui";

function CoverageMeter({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-xs">
        <span className="text-muted">{label}</span>
        <span className="font-mono font-medium text-fg">{value}%</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-fg/[0.06]"
        role="meter"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-violet"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Featured Projects"
      title="Things I've built on my own."
      description="Personal projects that show how I design APIs, persist data, and test what I ship."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className={`glass glass-interactive group relative flex flex-col overflow-hidden p-6 sm:p-8 ${
              p.featured ? "lg:col-span-3" : "lg:col-span-2"
            }`}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "radial-gradient(closest-side, var(--glow-strong), transparent)" }}
            />

            <div className="flex items-start justify-between gap-4">
              <IconTile>{p.featured ? <Network className="h-5 w-5" /> : <Boxes className="h-5 w-5" />}</IconTile>
              {p.featured && (
                <span className="rounded-full border border-line-strong bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                  Featured
                </span>
              )}
            </div>

            <h3 className="mt-5 text-2xl font-bold tracking-tight">{p.title}</h3>
            <p className="text-sm font-medium text-accent">{p.subtitle}</p>
            <p className="mt-4 leading-relaxed text-muted">{p.description}</p>

            <ul className="mt-5 space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>

            {p.coverage.length > 0 && (
              <div className="mt-6 space-y-3 rounded-2xl border border-line bg-fg/[0.02] p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">JaCoCo test coverage</p>
                {p.coverage.map((c) => (
                  <CoverageMeter key={c.label} {...c} />
                ))}
              </div>
            )}

            <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${p.title} technologies`}>
              {p.tech.map((t) => (
                <li key={t} className="chip font-mono !text-xs">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-7">
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <GitHubIcon className="h-4 w-4" /> View on GitHub
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
