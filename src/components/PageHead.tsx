import Mend from "./Mend";

/** The heading band at the top of every inner page; the title mends itself. */
export default function PageHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="grain overflow-hidden border-b border-ink/10 bg-stone">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20">
        <p className="eyebrow rise text-gold-deep">{eyebrow}</p>
        <Mend as="h1" className="display mt-5 text-[clamp(2.4rem,7.4vw,5.6rem)]">
          {title}
        </Mend>
        {children && <div className="rise mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">{children}</div>}
      </div>
    </section>
  );
}
