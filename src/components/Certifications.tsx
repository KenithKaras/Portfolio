import { m } from "framer-motion";
import { certifications } from "../lib/data";
import { viewportOnce } from "../lib/motion";

// Subtle credibility strip, styled like a checklist file.
export default function Certifications() {
  return (
    <section aria-label="Certifications" className="relative mx-auto max-w-5xl px-5 py-6 sm:px-8">
      <div className="flex items-end">
        <span className="tab">
          <span className="h-1.5 w-1.5 rounded-full bg-syn-fn" />
          certifications.txt
        </span>
      </div>
      <div className="panel rounded-tl-none px-5 py-4">
        <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <m.li
              key={c.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="flex items-baseline gap-2 font-mono text-[12px]"
            >
              <span className="text-syn-str">✓</span>
              <span className="text-fg-mid">{c.name}</span>
              <span className="text-syn-cmt">— {c.issuer}</span>
            </m.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
