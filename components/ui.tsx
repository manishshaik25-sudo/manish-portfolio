"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Fades and lifts content into view once, on scroll. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Consistent section shell: eyebrow, heading, optional lead text. */
export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            <span className="text-subtle">{index} /</span> {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{description}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

/** Small gradient icon tile used on cards. */
export function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-gradient-to-br from-accent/20 to-violet/20 text-accent">
      {children}
    </span>
  );
}
