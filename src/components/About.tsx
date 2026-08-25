import { m } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education } from "../lib/data";
import { fadeUp, staggerChild, staggerParent, viewportOnce } from "../lib/motion";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading
        index="01"
        label="about"
        title={
          <>
            Still learning —{" "}
            <span className="text-syn-str">still building.</span>
          </>
        }
      />

      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:gap-12">
        <m.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-5"
        >
          <m.p variants={staggerChild} className="text-[15px] leading-relaxed text-fg-mid sm:text-base">
            I'm a second-year B.Tech Information Technology student at St. Francis Institute of Technology, Mumbai, with a diploma in Computer Engineering from Bhausaheb Vartak Polytechnic behind me. I'm not going to pretend I know everything — I'm still figuring a lot of this out. But I've been slowly moving from just learning concepts in class to actually trying to build real things with them, database, interface, deployment, the whole flow, even if I mess it up a few times along the way.
          </m.p>
          <m.p variants={staggerChild} className="text-[15px] leading-relaxed text-fg-mid sm:text-base">
            <span className="font-mono text-syn-key">Most</span> of what I know I picked up outside class too — going through full-stack and AI courses on my own time, and doing a Web Development internship where I got to work on real interfaces for the first time. I like learning the theory first and then actually going and building something with it, even if it's small.
          </m.p>
          <m.p variants={staggerChild} className="font-mono text-[13px] leading-relaxed text-syn-cmt">
            {"// open to roles that challenge me and help me grow as a developer"}
          </m.p>
        </m.div>

        {/* education, as a log */}
        <m.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="flex items-end">
            <span className="tab">
              <span className="h-1.5 w-1.5 rounded-full bg-syn-key" />
              education.log
            </span>
          </div>
          <div className="panel rounded-tl-none p-5">
            <ul className="space-y-5">
              {education.map((e, i) => (
                <li key={e.school} className="relative pl-5">
                  <span
                    className={`absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-syn-str" : "bg-rule-2"
                      }`}
                  />
                  {i === 0 && (
                    <span className="absolute left-0.75 top-4 h-[calc(100%+0.75rem)] w-px bg-rule" />
                  )}
                  <p className="font-mono text-[13px] text-fg">{e.detail}</p>
                  <p className="mt-1 text-[13px] text-fg-mid">{e.school}</p>
                  <p className="mt-1 font-mono text-[11px] text-fg-dim">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </m.div>
      </div>
    </section>
  );
}
