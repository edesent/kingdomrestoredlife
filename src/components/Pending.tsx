/**
 * A placeholder for something the church hasn't set up yet (a Sunday stream
 * link, a sermon archive…). It reads as "coming soon" to visitors — never as
 * a broken button — and says plainly what to use in the meantime.
 *
 * Fill in the matching value in `links` (src/lib/site.ts) and the page shows
 * the real thing instead.
 */
export default function Pending({
  service,
  title,
  children,
  dark = false,
  className = "",
}: {
  service: string;
  title: string;
  children?: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.6rem] border-2 border-dashed p-6 sm:p-8 ${
        dark ? "border-gold/40 bg-white/[0.04] text-white" : "border-green/30 bg-stone/70 text-ink"
      } ${className}`}
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
          dark ? "bg-white/10 text-gold" : "bg-green/10 text-green"
        }`}
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
        Coming soon · {service}
      </span>
      <h3 className="display mt-4 text-2xl sm:text-3xl">{title}</h3>
      {children && <div className={`mt-3 leading-relaxed ${dark ? "text-white/80" : "text-ink/75"}`}>{children}</div>}
    </div>
  );
}
