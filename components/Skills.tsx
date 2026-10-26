"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Code2, Database, FlaskConical, LayoutGrid, Server, Workflow, Wrench, type LucideIcon } from "lucide-react";
import { skills, type SkillIcon } from "@/lib/data";
import { IconTile, Section } from "./ui";

const icons: Record<SkillIcon, LucideIcon> = {
  code: Code2,
  server: Server,
  layout: LayoutGrid,
  database: Database,
  flask: FlaskConical,
  wrench: Wrench,
  workflow: Workflow,
};

const filters = ["All", ...skills.map((s) => s.category)];

export function Skills() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Technical Skills"
      title="The tools I use to ship reliable software."
      description="Filter by category to focus on what matters for your role."
    >
      <div role="group" aria-label="Filter skills by category" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {filters.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(f)}
              className={`relative isolate shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive ? "text-white" : "border border-line text-muted hover:border-line-strong hover:text-fg"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="skill-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent to-violet"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {f}
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((s) => {
            const Icon = icons[s.icon];
            return (
              <motion.article
                key={s.category}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="glass glass-interactive group p-6 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <IconTile>
                    <Icon className="h-5 w-5" />
                  </IconTile>
                  <div>
                    <h3 className="font-semibold tracking-tight">{s.category}</h3>
                    <p className="font-mono text-xs text-subtle">{s.items.length} skills</p>
                  </div>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
