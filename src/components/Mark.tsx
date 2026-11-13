import Image from "next/image";

/**
 * The complete KRL seal, including the lions, swords, dove, and
 * "Restoring Lives Wholly" ribbon, reused in site branding.
 */
export default function Mark({ className = "", id = "m" }: { className?: string; id?: string }) {
  return (
    <Image
      id={id}
      src="/photos/krl-crest.png"
      alt="Kingdom Restored Life, Inc. seal"
      width={480}
      height={600}
      sizes="(min-width: 1024px) 96px, 80px"
      className={`object-contain ${className}`}
    />
  );
}

/** The fire orb on its own, as a round element sized in em. */
export function Orb({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`orb block ${className}`} />;
}
