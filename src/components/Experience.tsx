import { m } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "../lib/data";
import { fadeUp, staggerChild, staggerParent, viewportOnce } from "../lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading index="02" label="experience" title="Where I've worked" />

      <m.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
        <div className="flex items-end">
          <span className="tab">
            <span className="h-1.5 w-1.5 rounded-full bg-syn-str" />
            enats.log
          </span>
        </div>

        <article className="panel rounded-tl-none p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="font-mono text-lg font-bold text-fg sm:text-xl">
                {experience.role}
              </h3>
              <p className="mt-1 font-mono text-sm text-syn-key">@ {experience.company}</p>
            </div>
            <span className="font-mono text-[11px] text-fg-dim">{experience.period}</span>
          </div>

          <m.ul
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-6 space-y-3 border-t border-rule pt-6"
          >
            {experience.points.map((point) => (
              <m.li key={point} variants={staggerChild} className="flex gap-3">
                <span className="mt-1 font-mono text-xs text-syn-str">+</span>
                <span className="text-[14px] leading-relaxed text-fg-mid">{point}</span>
              </m.li>
            ))}
          </m.ul>
        </article>
      </m.div>
    </section>
  );
}
