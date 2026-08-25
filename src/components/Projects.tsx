import { m } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects, type Project } from "../lib/data";
import { EASE, viewportOnce } from "../lib/motion";

// Language dot colours, the way a repo list shows them.
const langColor: Record<string, string> = {
  React: "#61DAFB",
  TypeScript: "#3178C6",
  "Node.js": "#9ECE6A",
  PostgreSQL: "#7AA2F7",
  AI: "#BB9AF7",
  "Tailwind CSS": "#38BDF8",
};

// Real repo slug, taken from the GitHub URL (never invented from the title).
const repoName = (url: string) => url.split("/").filter(Boolean).pop() ?? "";

function Repo({ project, i }: { project: Project; i: number }) {
  return (
    <m.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
      className="group border-t border-rule px-1 py-6 transition-colors duration-200 last:border-b hover:bg-raise/40"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="break-words font-mono text-sm font-medium text-syn-key transition-colors hover:underline sm:text-base"
              >
                <span className="text-fg-dim">KenithKaras/</span>
                {repoName(project.github)}
              </a>
            </h3>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-syn-str/40 px-2 py-0.5 font-mono text-[10px] text-syn-str transition-colors hover:bg-syn-str/10"
              >
                <span className="h-1 w-1 rounded-full bg-syn-str" />
                live
              </a>
            )}
          </div>

          <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-fg-mid">{project.blurb}</p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-fg-dim">
            {project.stack.map((s) => (
              <span key={s} className="inline-flex items-center gap-1.5">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: langColor[s] ?? "#5B6470" }}
                />
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-8 w-8 items-center justify-center rounded border border-rule text-fg-mid transition-colors hover:border-syn-str hover:text-syn-str"
            aria-label={`${project.name} — source on GitHub`}
          >
            <Github size={15} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-8 w-8 items-center justify-center rounded border border-rule text-fg-mid transition-colors hover:border-syn-str hover:text-syn-str"
              aria-label={`${project.name} — live demo`}
            >
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </m.article>
  );
}

function Flagship({ project }: { project: Project }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: EASE }}
      className="mb-10"
    >
      <div className="flex items-end">
        <span className="tab">
          <span className="h-1.5 w-1.5 rounded-full bg-syn-num" />
          {repoName(project.github)}/README.md
        </span>
      </div>

      <article className="panel relative overflow-hidden rounded-tl-none p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] text-syn-fn">{project.index}</span>
              {project.marker && (
                <span className="inline-flex items-center gap-1.5 rounded border border-syn-num/40 bg-syn-num/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-syn-num">
                  ★ {project.marker}
                </span>
              )}
            </div>

            <h3 className="font-mono text-2xl font-bold tracking-tight text-fg sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-2 font-mono text-sm text-syn-str">{project.tagline}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-fg-mid">{project.blurb}</p>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-fg-dim">
              {project.stack.map((s) => (
                <span key={s} className="inline-flex items-center gap-1.5">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: langColor[s] ?? "#5B6470" }}
                  />
                  {s}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-outline group shrink-0"
          >
            <Github size={16} />
            source
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </article>
    </m.div>
  );
}

export default function Projects() {
  const [flagship, ...rest] = projects;

  return (
    <section id="work" className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading
        index="03"
        label="work"
        title={
          <>
            Things I&rsquo;ve built <span className="text-syn-str">and shipped.</span>
          </>
        }
      />

      {flagship.flagship ? <Flagship project={flagship} /> : <Repo project={flagship} i={0} />}

      <div>
        {rest.map((p, i) => (
          <Repo key={p.name} project={p} i={i} />
        ))}
      </div>
    </section>
  );
}
