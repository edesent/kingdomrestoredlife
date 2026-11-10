/**
 * A headline that mends itself, the site's signature: it arrives split along
 * a crack, the halves come together as it scrolls into view, and the crack is
 * left filled with gold. "The Lord restores the broken pieces of lives."
 *
 * The real heading is the top half; the bottom half and the gold seam are
 * decorative copies, hidden from screen readers. Styles: `.mend` in globals.css.
 */
export default function Mend({
  as: Tag = "h2",
  className = "",
  seam,
  children,
}: {
  as?: "h1" | "h2" | "p" | "div";
  className?: string;
  /** Seam color; gold by default. */
  seam?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mend ${className}`} data-reveal style={seam ? ({ "--seam": seam } as React.CSSProperties) : undefined}>
      <Tag className="mend-top">{children}</Tag>
      <span aria-hidden className="mend-bottom">
        {children}
      </span>
      <span aria-hidden className="mend-seam">
        {children}
      </span>
    </div>
  );
}
