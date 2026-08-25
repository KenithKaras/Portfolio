import { ArrowUp } from "lucide-react";
import { navItems, socials } from "../lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = navItems.filter((n) => n.id !== "home");

  return (
    <footer className="relative border-t border-rule">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="font-mono text-sm font-bold tracking-tight">
            <span className="text-fg">K</span>
            <span className="text-syn-str">K</span>
          </a>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="font-mono text-[12px] text-fg-mid transition-colors hover:text-syn-str"
              >
                {l.label.toLowerCase()}
              </a>
            ))}
          </nav>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-8 w-8 items-center justify-center rounded border border-rule text-fg-mid transition-colors hover:border-syn-str hover:text-syn-str"
          >
            <ArrowUp size={14} />
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-rule pt-6 font-mono text-[11px] text-syn-cmt sm:flex-row sm:items-center sm:justify-between">
          <p>{`// © ${year} Kenith Karas — built with React, TypeScript & Framer Motion`}</p>
          <a href={`mailto:${socials.email}`} className="transition-colors hover:text-fg-mid">
            {socials.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
