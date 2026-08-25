import { m, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { EASE } from "../lib/motion";
import { socials } from "../lib/data";

const stack = ["React", "TypeScript", "Node.js", "PostgreSQL"];

export default function Hero() {
  const reduce = useReducedMotion();
  const t = (delay: number) =>
    reduce ? { duration: 0 } : { duration: 0.55, ease: EASE, delay };

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        {/* ---------------- text ---------------- */}
        <div>
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={t(0.05)}
            className="mb-5 font-mono text-xs text-syn-cmt sm:text-[13px]"
          >
            {"// full-stack developer · mumbai, india"}
          </m.p>

          <h1 className="font-mono text-[2.6rem] font-bold leading-[1.02] tracking-tighter text-fg sm:text-6xl lg:text-[4.2rem]">
            <span className="block overflow-hidden">
              <m.span
                className="block"
                initial={{ y: reduce ? 0 : "108%" }}
                animate={{ y: "0%" }}
                transition={reduce ? { duration: 0 } : { duration: 0.7, ease: EASE, delay: 0.12 }}
              >
                Kenith
              </m.span>
            </span>
            <span className="block overflow-hidden">
              <m.span
                className="block"
                initial={{ y: reduce ? 0 : "108%" }}
                animate={{ y: "0%" }}
                transition={reduce ? { duration: 0 } : { duration: 0.7, ease: EASE, delay: 0.2 }}
              >
                Karas<span className="text-syn-str">.</span>
              </m.span>
            </span>
          </h1>

          {/* status line */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.45)}
            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[13px]"
          >
            <span className="flex items-center gap-2 text-syn-str">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-syn-str opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-syn-str" />
              </span>
              open to opportunities
            </span>
            <span className="text-syn-cmt">|</span>
            <span className="text-fg-mid">2nd-yr B.Tech IT · SFIT Mumbai</span>
          </m.div>

          <m.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.55)}
            className="mt-7 max-w-xl text-[15px] leading-relaxed text-fg-mid sm:text-base"
          >
            I build products solo — end to end, from database design to UI to deployment. Clean code,
            consistent shipping, and turning ideas into things people actually use.
          </m.p>

          {/* stack line */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={t(0.65)}
            className="mt-6 flex flex-wrap items-center gap-2"
          >
            {stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.75)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#work" className="btn-solid group">
              view work
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="btn-outline">
              get in touch
            </a>
            <div className="ml-1 flex items-center gap-3">
              <a href={socials.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="p-1.5 text-fg-mid transition-colors hover:text-fg">
                <Github size={18} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="p-1.5 text-fg-mid transition-colors hover:text-fg">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${socials.email}`} aria-label="Email" className="p-1.5 text-fg-mid transition-colors hover:text-fg">
                <Mail size={18} />
              </a>
            </div>
          </m.div>
        </div>

        {/* ---------------- photo, framed like an editor pane ---------------- */}
        <m.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mx-auto w-full max-w-[300px] lg:max-w-none"
        >
          <div className="group panel overflow-hidden">
            {/* macOS-style window chrome */}
            <div className="flex items-center gap-2 border-b border-rule bg-raise px-3.5 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#28C840" }} />
              <span className="ml-2 font-mono text-[11px] text-fg-mid">profile.jpg</span>
            </div>
            {/* Optimized: 880×1100 (~114 KB webp). Swap these files in public/ to change the photo. */}
            <picture>
              <source
                type="image/webp"
                srcSet="/profile.webp 880w, /profile@2x.webp 1400w"
                sizes="(min-width: 1024px) 340px, 300px"
              />
              <img
                src="/Profile.JPG"
                srcSet="/Profile.JPG 880w, /profile@2x.jpg 1400w"
                sizes="(min-width: 1024px) 340px, 300px"
                width={880}
                height={1100}
                alt="Kenith Karas, full-stack developer"
                loading="eager"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </picture>
          </div>
          <p className="mt-2 px-1 font-mono text-[11px] text-syn-cmt">
            {"// mumbai, india"}
          </p>
        </m.div>
      </div>
    </section>
  );
}
