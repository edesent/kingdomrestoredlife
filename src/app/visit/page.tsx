import type { Metadata } from "next";
import { VisitForm } from "@/components/Forms";
import PageHead from "@/components/PageHead";
import Pending from "@/components/Pending";
import Phone, { PrayerLine } from "@/components/Phone";
import { church, links, pastor, weekly } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan your visit",
  description: `Sunday worship at 12:30 pm at ${church.street}, Charlotte, NC, and a Wednesday prayer call by phone. What to expect at ${church.name}.`,
};

const expect = [
  {
    q: "Where do I go?",
    a: `We worship in ${church.host}, ${church.street}, Charlotte, ${church.landmark}.`,
  },
  {
    q: "What is an Upper-Room Experience?",
    a: "Praise, prayer and the preached Word, the way the first believers waited together in the upper room. Come expecting to meet the Lord.",
  },
  {
    q: "What should I wear?",
    a: "Whatever you’d wear to meet family. KRL is a multi-cultural church, and you’ll be welcome as you are.",
  },
  {
    q: "What about my kids?",
    a: "Children are welcome. NuMotion, our youth department, is raising up the next generation to stand for God.",
  },
  {
    q: "Can I pray with you before I visit?",
    a: "Yes. Join the Wednesday prayer call at 6:00 pm from any phone, or send a prayer request any time.",
  },
];

export default function Visit() {
  return (
    <>
      <PageHead eyebrow="Plan your visit" title="Your first Sunday.">
        <p>
          You are invited to worship the Lord with us. Tell us you’re coming and {pastor.short} will look for you. After your
          first visit, you are no longer a visitor.
        </p>
      </PageHead>

      <section className="mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <ul className="space-y-4">
            {weekly.map((w) => (
              <li key={w.name} className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-4">
                <span>
                  <span className="heading block text-xl">{w.name}</span>
                  <span className="text-ink/60">{w.day}</span>
                </span>
                <span className="time text-3xl">{w.time}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 overflow-hidden rounded-[1.5rem] bg-stone">
            <iframe
              title={`Map: ${church.street}, Charlotte`}
              src={`https://www.google.com/maps?ll=${church.lat},${church.lng}&z=15&output=embed`}
              className="block h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 p-5">
              <p className="leading-snug">
                <strong className="block">{church.street}</strong>
                <span className="text-ink/60">
                  Charlotte, NC {church.zip} · {church.landmark}
                </span>
              </p>
              <a href={church.mapsUrl} target="_blank" rel="noopener" className="btn btn-ink !py-2.5">
                Directions
              </a>
            </div>
          </div>

          <dl className="mt-10 space-y-7">
            {expect.map((e) => (
              <div key={e.q}>
                <dt className="heading text-lg">{e.q}</dt>
                <dd className="mt-1.5 leading-relaxed text-ink/75">{e.a}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-8">
          <div className="rounded-[1.75rem] bg-stone p-6 sm:p-10">
            <p className="eyebrow text-gold-deep">Let us know you’re coming</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">We’ll save you a seat.</h2>
            <div className="mt-8">
              <VisitForm />
            </div>
            <p className="mt-6 text-sm text-ink/60">
              Rather call? <Phone className="time font-semibold text-ink underline" />
            </p>
          </div>

          <div id="by-phone" className="scroll-mt-24 rounded-[1.75rem] bg-green-ink p-6 text-white sm:p-10">
            <p className="eyebrow text-gold">Worship from anywhere</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">Wednesday prayer call.</h2>
            <p className="mt-4 leading-relaxed text-white/75">
              Every Wednesday at <span className="time font-bold text-white">6:00 pm</span>. Dial in from any phone.
            </p>
            <div className="mt-6">
              <PrayerLine dark />
            </div>
          </div>

          {links.watch ? (
            <a href={links.watch} target="_blank" rel="noopener" className="btn btn-green">
              Watch Sunday worship online
            </a>
          ) : (
            <Pending service="Online worship" title="Sunday, online.">
              The link for watching Sunday worship online will go here. Until then, join the Wednesday prayer call by phone.
            </Pending>
          )}
        </div>
      </section>
    </>
  );
}
