import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, sectionIds } from "../lib/data";
import { useActiveSection } from "../lib/motion";

const primaryLinks = navItems.filter((n) => n.id !== "home" && n.id !== "contact");

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[110] transition-colors duration-300 ${
        scrolled ? "border-b border-rule bg-canvas/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5 sm:px-8"
      >
        {/* monogram, styled like a file path */}
        <a
          href="#home"
          className="font-mono text-sm font-bold tracking-tight"
          aria-label="Kenith Karas — home"
        >
          <span className="text-fg">K</span>
          <span className="text-syn-str">K</span>
          <span className="ml-1.5 hidden font-normal text-syn-cmt sm:inline">~/portfolio</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {primaryLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`rounded px-3 py-1.5 font-mono text-[13px] transition-colors duration-200 ${
                  isActive ? "text-syn-str" : "text-fg-mid hover:text-fg"
                }`}
              >
                <span className="text-syn-cmt">{isActive ? "▸ " : ""}</span>
                {link.label.toLowerCase()}
              </a>
            );
          })}
          <a href="#contact" className="btn-solid ml-3 px-4 py-2 text-[13px]">
            contact
          </a>
        </div>

        <button
          type="button"
          className="rounded border border-rule p-2 text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-rule bg-canvas/95 backdrop-blur-md md:hidden"
          >
            <ul className="mx-auto flex max-w-5xl flex-col px-5 py-2 sm:px-8">
              {navItems
                .filter((n) => n.id !== "home")
                .map((link, i) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-4 border-b border-rule/60 py-3.5 font-mono text-base text-fg last:border-0"
                    >
                      <span className="text-[11px] tabular-nums text-fg-dim">
                        {String(i + 2).padStart(2, "0")}
                      </span>
                      {link.label.toLowerCase()}
                    </a>
                  </li>
                ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
