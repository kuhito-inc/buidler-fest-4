/** Intact user-supplied artwork, framed to its decorative regions only. */
export function ReferenceArt({ region, className = "" }: {
  region: "waterfront" | "gathering" | "stage" | "venue";
  className?: string;
}) {
  const windows = {
    waterfront: "450 505 480 208",
    gathering: "480 846 440 178",
    stage: "1149 724 171 106",
    venue: "1148 869 184 153",
  };
  return <svg className={`reference-art ${className}`} viewBox={windows[region]} aria-hidden="true" focusable="false">
    <image href="/decor/reference-composite.png" width="1536" height="1024" />
  </svg>;
}
