import { m } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "../lib/motion";

type Props = {
  index: string;
  label: string;
  title: ReactNode;
  className?: string;
};

/** Section heading styled as a source-code comment + a mono title. */
export default function SectionHeading({ index, label, title, className = "" }: Props) {
  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      <m.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mb-4 flex items-center gap-2 font-mono text-[11px]"
      >
        <span className="text-syn-cmt">{"//"}</span>
        <span className="text-syn-fn">{index}</span>
        <span className="text-syn-cmt">·</span>
        <span className="uppercase tracking-[0.22em] text-fg-mid">{label}</span>
      </m.div>
      <m.h2
        variants={fadeUp}
        custom={1}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="max-w-3xl font-mono text-2xl font-bold leading-tight tracking-tight text-fg sm:text-3xl md:text-4xl"
      >
        {title}
      </m.h2>
    </div>
  );
}
