import type { Metadata } from "next";
import { NotifyForm } from "@/components/Forms";
import PageHead from "@/components/PageHead";
import { traditions, upcoming } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Events & announcements",
  description: "Events, announcements and the days Kingdom Restored Life marks every year. Join the mailing list to hear first.",
};

export default function Events() {
  const next = upcoming();

  return (
    <>
      <PageHead eyebrow="Events & announcements" title="What’s coming.">
        <p>Special services, outreach and news from KRL. Dated events drop off this page by themselves once they’ve passed.</p>
      </PageHead>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        {next.length > 0 ? (
          <div className="grid gap-6">
            {next.map((e) => (
              <article key={e.title} data-reveal className="rounded-[1.75rem] bg-green-ink p-8 text-white sm:p-12">
                {e.detail && <p className="eyebrow text-gold">{e.detail}</p>}
                <h2 className="display mt-4 text-4xl sm:text-5xl">{e.title}</h2>
                <p className="heading mt-4 text-xl text-gold">{e.date}</p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{e.body}</p>
              </article>
            ))}
          </div>
        ) : (
          <div data-reveal className="rounded-[1.75rem] border-2 border-dashed border-green/30 bg-stone/60 p-8 sm:p-12">
            <p className="eyebrow text-gold-deep">Announcements</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">The next event goes here.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/75">
              When a date is set, it shows here and on the home page, and comes down by itself after the day. Join the mailing
              list below to hear first.
            </p>
          </div>
        )}

        <h2 className="display mt-20 text-[clamp(2rem,4.4vw,3.2rem)]" data-reveal>
          Every year at KRL.
        </h2>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-[1.5rem] bg-ink/10 md:grid-cols-3">
          {traditions.map((t, i) => (
            <li key={t.title} data-reveal={i} className="bg-paper p-7 sm:p-8">
              <p className="eyebrow text-gold-deep">{t.month}</p>
              <p className="heading mt-3 text-2xl">{t.title}</p>
              <p className="mt-2 leading-relaxed text-ink/70">{t.body}</p>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-16 grid gap-8 rounded-[1.75rem] bg-ink p-7 text-white sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow text-gold">Join our mailing list</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">Never miss an update.</h2>
          </div>
          <div className="rounded-[1.25rem] bg-paper p-5 text-ink sm:p-6">
            <NotifyForm topic="updates" />
          </div>
        </div>
      </section>
    </>
  );
}
