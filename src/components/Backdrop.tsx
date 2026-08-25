/**
 * Animated background: a slow syntax-colored aurora + editor indent grid.
 * Aurora layers animate transform/opacity only (GPU-composited) and pause
 * under prefers-reduced-motion via CSS. The heavy blur is rasterized once,
 * so this stays smooth even while three layers drift.
 */
export default function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas">
      {/* aurora — blue (keyword), green (string), violet (function) */}
      <div
        className="aurora-a absolute -left-[12%] -top-[18%] h-[46vmax] w-[46vmax] rounded-full blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(122,162,247,0.20), transparent 62%)" }}
      />
      <div
        className="aurora-b absolute -right-[15%] top-[6%] h-[42vmax] w-[42vmax] rounded-full blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(158,206,106,0.15), transparent 62%)" }}
      />
      <div
        className="aurora-c absolute -bottom-[24%] left-[18%] h-[46vmax] w-[46vmax] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(187,154,247,0.14), transparent 62%)" }}
      />

      {/* editor indent-guide grid */}
      <div className="editor-grid" />

      {/* vignette for depth + contrast under text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 28%, transparent 52%, rgba(11,14,19,0.72) 100%)",
        }}
      />
    </div>
  );
}
