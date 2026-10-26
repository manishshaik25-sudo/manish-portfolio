import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/lib/data";
import { IconTile, Reveal, Section } from "./ui";

export function Education() {
  return (
    <Section id="education" index="05" eyebrow="Education & Certifications" title="Formal training in computer science.">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.08}>
            <article className="glass glass-interactive h-full p-6 hover:-translate-y-1 sm:p-7">
              <div className="flex items-start gap-4">
                <IconTile>
                  <GraduationCap className="h-5 w-5" />
                </IconTile>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight">{e.degree}</h3>
                  <p className="mt-1 text-muted">{e.school}</p>
                  <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                    <span className="rounded-full border border-line px-3 py-1 text-muted">{e.period}</span>
                    <span className="rounded-full border border-line-strong bg-accent/10 px-3 py-1 text-accent">GPA {e.gpa}</span>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <h3 className="mb-4 mt-14 font-mono text-xs uppercase tracking-[0.2em] text-subtle">Certifications</h3>
      <ul className="grid gap-4 md:grid-cols-3">
        {certifications.map((c, i) => (
          <li key={c.name}>
            <Reveal delay={i * 0.06} className="h-full">
              <div className="glass glass-interactive flex h-full items-start gap-4 p-5 hover:-translate-y-1">
                <IconTile>
                  <Award className="h-5 w-5" />
                </IconTile>
                <div>
                  <p className="font-semibold leading-snug tracking-tight">{c.name}</p>
                  <p className="mt-1 text-sm text-muted">
                    {c.issuer} · <span className="font-mono">{c.year}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
