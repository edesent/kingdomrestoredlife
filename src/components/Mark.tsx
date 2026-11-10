/**
 * The heart of the KRL crest, redrawn as vector so it stays sharp small: the
 * emerald oval with its gold ring, the gold shield, and the fire orb inside
 * it, with the white dove spreading its wings beneath. The full crest (lions,
 * swords and the "Restoring Lives Wholly" ribbon) is /photos/krl-crest.png.
 *
 * `id` must differ when two copies render on one page (gradient ids are global).
 */
export default function Mark({ className = "", id = "m" }: { className?: string; id?: string }) {
  return (
    <svg viewBox="0 0 80 100" className={className} aria-hidden>
      <defs>
        <radialGradient id={`${id}-fire`} cx="40%" cy="36%" r="65%">
          <stop offset="0" stopColor="#fff6c2" />
          <stop offset="0.18" stopColor="#ffd34d" />
          <stop offset="0.42" stopColor="#ff9a1a" />
          <stop offset="0.7" stopColor="#f05a00" />
          <stop offset="1" stopColor="#a11d08" />
        </radialGradient>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6dc7a" />
          <stop offset="0.5" stopColor="#d4a62e" />
          <stop offset="1" stopColor="#9a6a06" />
        </linearGradient>
        <radialGradient id={`${id}-green`} cx="50%" cy="40%" r="70%">
          <stop offset="0" stopColor="#2b7a2c" />
          <stop offset="1" stopColor="#0a3510" />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="50" rx="37" ry="47" fill={`url(#${id}-gold)`} />
      <ellipse cx="40" cy="50" rx="33" ry="43" fill={`url(#${id}-green)`} />
      <ellipse cx="40" cy="50" rx="25" ry="34" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="1.2" opacity="0.8" />
      {/* The shield */}
      <path d="M22 30 L40 23 L58 30 L58 47 C58 60 49 68 40 73 C31 68 22 60 22 47 Z" fill="#0a3510" stroke={`url(#${id}-gold)`} strokeWidth="3" />
      {/* The fire orb */}
      <circle cx="40" cy="45" r="11.5" fill={`url(#${id}-fire)`} />
      {/* The dove, wings spread */}
      <path
        d="M40 60 C36 55 29 53 20 54 C27 57 31 59 34 62 C36 64 37 67 40 69 C43 67 44 64 46 62 C49 59 53 57 60 54 C51 53 44 55 40 60 Z"
        fill="#fff"
      />
    </svg>
  );
}

/** The fire orb on its own, as a round element sized in em. */
export function Orb({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`orb block ${className}`} />;
}
