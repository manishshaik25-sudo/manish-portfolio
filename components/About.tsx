import { about } from "@/lib/data";
import { Reveal, Section } from "./ui";

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Backend-first engineer who can work across the stack.">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-[1.0625rem] leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {about.interests.map((i) => (
              <span key={i} className="chip">
                {i}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-2 gap-3">
            {about.facts.map((f) => (
              <div key={f.label} className="glass glass-interactive p-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{f.label}</dt>
                <dd className="mt-2 text-lg font-semibold tracking-tight">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
