"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Reveal, Section } from "./ui";

// No form backend/email service is configured, so contact goes through mailto.
// To add a form later, wire it to a service (e.g. Resend, Formspree) — see README.
const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail, external: false },
  { label: "LinkedIn", value: "linkedin.com/in/manish-shaik", href: site.linkedin, icon: LinkedInIcon, external: true },
  { label: "GitHub", value: "github.com/manishshaik25-sudo", href: site.github, icon: GitHubIcon, external: true },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <Section id="contact" index="06" eyebrow="Contact" title="Let's talk.">
      <Reveal>
        <div className="glass relative overflow-hidden p-6 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full blur-3xl"
            style={{ background: "radial-gradient(closest-side, var(--glow-strong), transparent)" }}
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="max-w-md text-lg leading-relaxed text-muted">
                I&apos;m interested in Java Backend Developer, Software Engineer I/II, and Full-Stack Developer roles.
                Email is the fastest way to reach me.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${site.email}?subject=Hello%20Manish`} className="btn btn-primary">
                  <Mail className="h-4 w-4" /> Email Me
                </a>
                <button type="button" onClick={copyEmail} className="btn btn-secondary" aria-live="polite">
                  {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied" : "Copy email"}
                </button>
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 text-accent" aria-hidden /> {site.location}
              </p>
            </div>

            <ul className="space-y-3">
              {channels.map(({ label, value, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-fg/[0.02] p-4 transition-all hover:-translate-y-0.5 hover:border-line-strong hover:bg-accent/[0.06]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-violet/20 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{label}</span>
                      <span className="block truncate font-medium">{value}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
