"use client";

import { motion } from "motion/react";
import { Briefcase, CheckCircle2, Gauge, MapPin } from "lucide-react";
import { achievements, experience, sqlOptimization } from "@/lib/data";
import { IconTile, Reveal, Section } from "./ui";

function SqlOptimizationCard() {
  const { beforeMs, afterMs, queries, improvement } = sqlOptimization;
  const bars = [
    { label: "Before", ms: beforeMs, className: "bg-subtle/50" },
    { label: "After", ms: afterMs, className: "bg-gradient-to-r from-accent to-violet" },
  ];

  return (
    <div className="glass glass-interactive flex h-full flex-col p-6 sm:col-span-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <IconTile>
            <Gauge className="h-5 w-5" />
          </IconTile>
          <div>
            <h4 className="font-semibold tracking-tight">SQL query optimization</h4>
            <p className="text-sm text-muted">Average execution time across {queries} optimized queries</p>
          </div>
        </div>
        <p className="text-gradient text-4xl font-extrabold tracking-tight">{improvement}</p>
      </div>

      <div className="mt-6 space-y-4">
        {bars.map((b, i) => (
          <div key={b.label}>
            <div className="mb-1.5 flex justify-between font-mono text-xs text-muted">
              <span>{b.label}</span>
              <span className="text-fg">{b.ms} ms</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-fg/[0.06]">
              <motion.div
                className={`h-full rounded-full ${b.className}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${(b.ms / beforeMs) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      eyebrow="Professional Experience"
      title="Enterprise backend work, measured."
      description="Shipping and maintaining logistics software in a production enterprise environment."
    >
      <ol className="relative">
        {experience.map((job) => (
          <li key={job.company} className="relative pl-10 sm:pl-14">
            {/* timeline rail + node */}
            <span aria-hidden className="absolute bottom-0 left-[11px] top-2 w-px bg-gradient-to-b from-accent via-violet/60 to-transparent sm:left-[15px]" />
            <span aria-hidden className="absolute left-0 top-1 grid h-6 w-6 place-items-center rounded-full border border-line-strong bg-bg sm:h-8 sm:w-8">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-accent to-violet shadow-[0_0_14px_var(--accent)]" />
            </span>

            <Reveal>
              <article className="glass p-6 sm:p-8">
                <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-bold tracking-tight">
                      <Briefcase className="h-5 w-5 text-accent" aria-hidden />
                      {job.role} <span className="font-normal text-muted">—</span> {job.company}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                      <MapPin className="h-3.5 w-3.5" aria-hidden /> {job.location}
                    </p>
                  </div>
                  <p className="w-fit shrink-0 rounded-full border border-line bg-fg/[0.03] px-3 py-1 font-mono text-xs text-muted">
                    {job.period}
                  </p>
                </header>

                <ul className="mt-6 space-y-3">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3 leading-relaxed text-muted">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                  {job.stack.map((t) => (
                    <li key={t} className="chip font-mono !text-xs">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <h4 className="mb-4 mt-12 font-mono text-xs uppercase tracking-[0.2em] text-subtle">Engineering impact</h4>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.map((a, i) => (
                <Reveal key={a.label} delay={i * 0.06}>
                  <div className="glass glass-interactive h-full p-6 hover:-translate-y-1">
                    <p className="text-gradient text-4xl font-extrabold tracking-tight">{a.value}</p>
                    <p className="mt-2 font-semibold tracking-tight">{a.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{a.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={0.1}>
              <SqlOptimizationCard />
              <div className="glass glass-interactive flex flex-col justify-center p-6 sm:col-span-2">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">Production fix</p>
                <p className="mt-2 text-lg font-semibold tracking-tight">Cancellation workflow defect resolved</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Traced the issue across the frontend, backend services, and database to resolve it in production.
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
