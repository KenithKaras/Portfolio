import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";

// Shared easing — a confident, slightly overshooting ease-out.
export const EASE = [0.22, 1, 0.36, 1] as const;

export const viewportOnce = { once: true, margin: "-80px" } as const;

// Fade + rise, with an optional stagger index via `custom`.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.06 },
  }),
};

// Parent that staggers its children.
export const staggerParent: Variants = {
  hidden: {},
  show: (stagger = 0.08) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

// Child of a stagger parent.
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

// A line that reveals from behind a mask (used for the hero headline).
export const lineReveal: Variants = {
  hidden: { y: "110%" },
  show: (i = 0) => ({
    y: "0%",
    transition: { duration: 0.8, ease: EASE, delay: 0.15 + i * 0.09 },
  }),
};

/**
 * Tracks which section is currently in view, for the build-log spine + nav.
 * `ids` must be a stable reference (define it in module scope).
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
