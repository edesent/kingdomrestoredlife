import Mark from "./Mark";

/** The crest's heart beside the name, stacked in wide capitals. */
export default function Wordmark({ light = false, className = "", id = "wm" }: { light?: boolean; className?: string; id?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark id={id} className="h-11 w-9 shrink-0" />
      <span
        className={`flex flex-col text-[0.6rem] font-bold uppercase leading-[1.18] tracking-[0.22em] [font-stretch:122%] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        <span>Kingdom</span>
        <span className={light ? "text-gold" : "text-green"}>Restored</span>
        <span>Life</span>
      </span>
    </span>
  );
}
