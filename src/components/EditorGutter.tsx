import { navItems, sectionIds } from "../lib/data";
import { useActiveSection } from "../lib/motion";

/**
 * Signature element: an editor gutter.
 * A fixed left rail of line numbers — the active section highlights like the
 * caret line in a code editor. Visual index only; the navbar handles real
 * navigation, so this is aria-hidden.
 */
export default function EditorGutter() {
  const active = useActiveSection(sectionIds);

  return (
    <aside
      aria-hidden="true"
      className="fixed left-0 top-1/2 z-[90] hidden -translate-y-1/2 select-none xl:block"
    >
      <div className="flex flex-col border-l border-rule">
        {navItems.map((item, i) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              tabIndex={-1}
              className={`group relative flex items-center gap-3 py-2 pl-4 pr-5 font-mono text-[11px] transition-colors duration-300 ${
                isActive ? "bg-raise/60 text-syn-str" : "text-fg-dim hover:text-fg-mid"
              }`}
            >
              {/* caret bar on the active line */}
              <span
                className={`absolute left-0 top-0 h-full w-0.5 transition-all duration-300 ${
                  isActive ? "bg-syn-str" : "bg-transparent"
                }`}
              />
              <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <span className="tracking-widest">{item.label.toLowerCase()}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
