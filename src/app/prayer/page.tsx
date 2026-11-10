import type { Metadata } from "next";
import { PrayerForm } from "@/components/Forms";
import PageHead from "@/components/PageHead";
import { PrayerLine } from "@/components/Phone";
import { church } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prayer requests",
  description: `Send a prayer request to ${church.legalName} in Charlotte, NC, or join the Wednesday prayer call by phone.`,
};

export default function Prayer() {
  return (
    <>
      <PageHead eyebrow="Prayer requests" title="We’ll seek the Lord with you.">
        <p>
          “Surely He has borne our griefs and carried our sorrows… and with the stripes that wounded Him we are healed and made
          whole.” Isaiah 53:4–5
        </p>
      </PageHead>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-ink/75">
            Tell us what’s on your heart. Your request goes to Pastor Hamlet and the War “Roar” Cry intercessors, unless you
            ask that it stay with the pastor.
          </p>
          <PrayerForm />
        </div>
        <aside className="self-start rounded-[1.75rem] bg-green-ink p-7 text-white sm:p-9 lg:sticky lg:top-28">
          <p className="eyebrow text-gold">Wednesday · 6:00 pm</p>
          <p className="display mt-4 text-3xl">Pray with us live.</p>
          <p className="mt-3 leading-relaxed text-white/75">The whole church prays together on the conference line.</p>
          <div className="mt-6">
            <PrayerLine dark />
          </div>
        </aside>
      </section>
    </>
  );
}
