"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        solid ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight" aria-label="Manish Shaik, back to top">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-violet text-xs font-bold text-white shadow-[0_6px_20px_-6px_var(--glow-strong)]">
            MS
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => {
            const isActive = active === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative isolate rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    isActive ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-fg/[0.06] ring-1 ring-line"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={site.resume} download={site.resumeFileName} className="btn btn-secondary hidden !h-10 !px-4 text-sm sm:inline-flex">
            <Download className="h-4 w-4" /> Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-card text-fg md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="space-y-1 px-4 pb-5 pt-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base text-muted transition-colors hover:bg-fg/[0.05] hover:text-fg"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href={site.resume} download={site.resumeFileName} className="btn btn-primary w-full">
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
