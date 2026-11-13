import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Mend from "@/components/Mend";
import PageHead from "@/components/PageHead";
import Phone from "@/components/Phone";
import { cashAppUrl, links, pastor, supportCenter } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kingdom Comfort & Peace Support Center",
  description: "The Kingdom Comfort & Peace Support Center, founded by Pastor Terrell Hamlet of Kingdom Restored Life, serves youth and families in North and South Carolina.",
};

export default function SupportCenter() {
  return (
    <>
      <PageHead eyebrow="Community outreach" title="Kingdom Comfort & Peace.">
        <p>
          The {supportCenter.name} was founded by {pastor.name} to serve youth and families in North and South Carolina. It is
          Kingdom Restored Life’s outreach to our neighbors, an extension of God’s love beyond our own walls.
        </p>
      </PageHead>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow text-gold-deep" data-reveal>
            Why it exists
          </p>
          <Mend className="display mt-5 text-[clamp(2.2rem,5vw,3.8rem)]">No one carries it alone.</Mend>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80" data-reveal>
            <p>
              Pastor Hamlet holds a degree in Christian counseling and volunteers as a Guardian ad Litem, speaking for
              children in the Mecklenburg County courts. The Support Center is where the church comes alongside youth and
              families who are going through something hard.
            </p>
            <p>If you or your family need help, or someone to talk to and pray with, reach out.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3" data-reveal>
            <Link href="/contact?topic=support" className="btn btn-green">
              Ask for help
            </Link>
            <Phone className="btn btn-ghost" label="Call the church" fallback="Call the church" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <figure data-reveal className="overflow-hidden rounded-[1.75rem] bg-green-ink p-6 sm:p-8">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/photos/krl-seal.png"
                alt="The Kingdom Restored Life crest with the ribbon Restoring Lives Wholly"
                fill
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-contain"
              />
            </div>
          </figure>
          <div data-reveal="1" className="rounded-[1.75rem] bg-stone p-7 sm:p-9">
            <p className="eyebrow text-gold-deep">Sow a seed</p>
            <p className="heading mt-3 text-2xl">Join the cause.</p>
            <p className="mt-3 leading-relaxed text-ink/75">
              Help spread the love of God to the surrounding communities. Give through Cash App and write “Support Center” in
              the note.
            </p>
            {cashAppUrl && (
              <a href={cashAppUrl} target="_blank" rel="noopener" className="btn btn-green mt-6">
                Give ${links.cashtag} on Cash App
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="bg-green text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="serif-italic text-[clamp(1.5rem,3.4vw,2.4rem)] leading-snug">
            “Surely He has borne our griefs and carried our sorrows… and with the stripes that wounded Him we are healed and
            made whole.”
          </p>
          <p className="eyebrow mt-5 text-gold">Isaiah 53:4–5</p>
        </div>
      </section>
    </>
  );
}
