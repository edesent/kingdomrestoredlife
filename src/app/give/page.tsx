import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import { cashAppUrl, church, links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Give",
  description: `Give your tithes and offerings to ${church.legalName} through Cash App or in person on Sunday.`,
};

export default function Give() {
  return (
    <>
      <PageHead eyebrow="Tithes & offerings" title="Help this ministry grow.">
        <p>
          “Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this,” says the Lord
          Almighty, “and see if I will not throw open the floodgates of heaven.” Malachi 3:10
        </p>
      </PageHead>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          {cashAppUrl && (
            <div data-reveal className="grain overflow-hidden rounded-[1.75rem] bg-green-ink p-8 text-white sm:p-12">
              <p className="eyebrow text-gold">Online · Cash App</p>
              <p className="mt-6 text-[clamp(1.9rem,5.2vw,3.6rem)] font-extrabold leading-none tracking-[-0.02em] text-gold [font-stretch:110%]">
                ${links.cashtag}
              </p>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/80">
                Open Cash App and send to <strong className="text-white">${links.cashtag}</strong>. In the note, write your
                name and “Tithe” or “Offering” so the church can keep a record of your giving.
              </p>
              <a href={cashAppUrl} target="_blank" rel="noopener" className="btn btn-gold mt-8">
                Give with Cash App
              </a>
            </div>
          )}

          <div className="flex flex-col gap-6">
            <div data-reveal="1" className="rounded-[1.75rem] bg-stone p-7 sm:p-9">
              <p className="eyebrow text-gold-deep">In person</p>
              <p className="heading mt-3 text-2xl">On Sunday.</p>
              <p className="mt-3 leading-relaxed text-ink/75">
                Visit with us for a worship encounter with the Lord. Envelopes are available for your tithes and love
                offerings.
              </p>
              <Link href="/visit" className="mt-5 inline-block font-semibold text-green hover:underline">
                Plan your visit →
              </Link>
            </div>
            <div data-reveal="2" className="rounded-[1.75rem] bg-green p-7 text-white sm:p-9">
              <p className="eyebrow text-gold">Sow a seed</p>
              <p className="heading mt-3 text-2xl">The Support Center.</p>
              <p className="mt-3 leading-relaxed text-white/85">
                To give to the Kingdom Comfort & Peace Support Center for youth and families, write “Support Center” in the
                Cash App note.
              </p>
              <Link href="/support-center" className="mt-5 inline-block font-semibold text-gold hover:underline">
                About the Support Center →
              </Link>
            </div>
            {links.paypal && (
              <a href={links.paypal} target="_blank" rel="noopener" className="btn btn-ghost">
                Give with PayPal
              </a>
            )}
          </div>
        </div>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-ink/55">
          Gifts by mail: {church.legalName}, {church.mailing}. The church reserves the right to use all funds as it deems
          appropriate.
        </p>
      </section>
    </>
  );
}
