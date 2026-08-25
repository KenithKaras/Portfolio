import { m } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups, topSkills } from "../lib/data";
import { fadeUp, viewportOnce } from "../lib/motion";

/**
 * Skills rendered like a stack manifest — key/value lines with syntax colouring.
 * Semantically a <dl>, so screen readers get real term/definition pairs.
 */
export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading index="04" label="skills" title="The toolkit" />

      <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:gap-12">
        {/* headline strengths */}
        <m.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-dim">
            core strengths
          </p>
          <ul className="space-y-3">
            {topSkills.map((s) => (
              <li key={s} className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-syn-str">▸</span>
                <span className="font-mono text-base text-fg sm:text-lg">{s}</span>
              </li>
            ))}
          </ul>
        </m.div>

        {/* stack.json */}
        <m.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="flex items-end">
            <span className="tab">
              <span className="h-1.5 w-1.5 rounded-full bg-syn-key" />
              stack.json
            </span>
          </div>
          <div className="panel overflow-x-auto rounded-tl-none p-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
            <p className="text-fg-dim">{"{"}</p>
            <dl>
              {skillGroups.map((group, gi) => (
                <div key={group.label} className="pl-4">
                  <dt className="inline text-syn-key">
                    &quot;{group.label.toLowerCase().replace(/ & /g, "_")}&quot;
                  </dt>
                  <span className="text-fg-dim">: [</span>
                  <dd className="inline">
                    {group.items.map((item, i) => (
                      <span key={item}>
                        <span className="text-syn-str">&quot;{item}&quot;</span>
                        {i < group.items.length - 1 && <span className="text-fg-dim">, </span>}
                      </span>
                    ))}
                  </dd>
                  <span className="text-fg-dim">
                    ]{gi < skillGroups.length - 1 ? "," : ""}
                  </span>
                </div>
              ))}
            </dl>
            <p className="text-fg-dim">{"}"}</p>
          </div>
        </m.div>
      </div>
    </section>
  );
}
