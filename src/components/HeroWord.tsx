/**
 * "RESTORED", the home-page hero. The word arrives broken along a crack, its
 * two halves come together, and the crack is left filled with gold, the way
 * the Lord restores the broken pieces of a life. The O is the fire orb from
 * the centre of the KRL crest, and it is never broken.
 *
 * Four copies of the word share one box: the top half, the bottom half, the
 * gold seam, and a transparent copy that carries the orb. Only the top half
 * is in the accessibility tree's way, and the whole thing is aria-hidden: the
 * page's real <h1> sits beside it.
 */
function Word({ orb = false }: { orb?: boolean }) {
  return (
    <>
      Rest
      <span className="relative inline-block">
        <span className="invisible">O</span>
        {orb && (
          <span className="hero-orb absolute left-1/2 top-[0.085em] block h-[0.74em] w-[0.74em] -translate-x-1/2">
            <span className="orb orb-flicker block h-full w-full" />
          </span>
        )}
      </span>
      red
    </>
  );
}

export default function HeroWord() {
  // The word is about 7.05em wide; this keeps it on one line, inside the page margins, from a 320px phone up.
  const size = "text-[min(12.4vw,9.5rem)] whitespace-nowrap";
  return (
    <div aria-hidden className="relative mt-6 select-none sm:mt-10">
      <p className="display rise text-[min(6.2vw,3.6rem)] text-green [animation-delay:80ms]">Kingdom</p>

      <div className={`display relative mt-[0.06em] w-fit ${size}`}>
        <p className="mend-top hero-top">
          <Word />
        </p>
        <p className="mend-bottom hero-bottom">
          <Word />
        </p>
        <p className="mend-seam hero-seam [--seam:var(--gold)]">
          <Word />
        </p>
        <p className="absolute inset-0 text-transparent">
          <Word orb />
        </p>
      </div>

      {/* The ribbon line, after the crest's "Restoring Lives Wholly" banner */}
      <div className="rise mt-3 flex items-center gap-4 [animation-delay:600ms] sm:mt-4">
        <span className="eyebrow shrink-0 text-gold-deep">Restoring Lives Wholly</span>
        <span className="h-px flex-1 bg-gradient-to-r from-gold via-gold/60 to-gold/20" />
        <span className="display text-[min(6.2vw,3.6rem)] text-green">Life</span>
      </div>
    </div>
  );
}
