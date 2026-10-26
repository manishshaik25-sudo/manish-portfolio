import { ArrowUp } from "lucide-react";
import { site } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js, TypeScript & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-fg">
            <GitHubIcon className="h-[18px] w-[18px]" />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-fg">
            <LinkedInIcon className="h-[18px] w-[18px]" />
          </a>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-fg">
            Back to top <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
