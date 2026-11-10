import type { Metadata } from "next";
import { ContactForm, NotifyForm } from "@/components/Forms";
import PageHead from "@/components/PageHead";
import Phone from "@/components/Phone";
import { church, contactTopics as topics, pastor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${church.legalName} in Charlotte, NC: call, write, or join the mailing list.`,
};

/** Short ?topic= values used by links around the site → the full topic in the form. */
const topicFor: Record<string, string> = {
  support: "The Kingdom Comfort & Peace Support Center",
  "War “Roar” Cry": "Joining War “Roar” Cry (intercessors)",
  NuMotion: "Joining NuMotion Youth",
  Greeters: "Joining the Greeter Ministry",
  "Pastoral Support": "Joining Pastoral Support",
  "Bible study": "Bible study",
};

export default async function Contact({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const { topic } = await searchParams;
  const chosen = topic ? (topicFor[topic] ?? (topics.includes(topic) ? topic : undefined)) : undefined;

  return (
    <>
      <PageHead eyebrow="Contact" title="Stay connected.">
        <p>Questions about Sunday, a ministry, the Support Center, or anything else. We’ll get back to you.</p>
      </PageHead>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-8">
          <div>
            <p className="eyebrow text-gold-deep">Call</p>
            <Phone className="time mt-3 block text-3xl" />
          </div>
          <div>
            <p className="eyebrow text-gold-deep">Sunday worship</p>
            <address className="heading mt-3 text-xl not-italic leading-snug">
              {church.street}
              <br />
              {church.city}, {church.stateCode} {church.zip}
            </address>
            <a href={church.mapsUrl} target="_blank" rel="noopener" className="mt-2 inline-block font-semibold underline">
              Directions
            </a>
          </div>
          <div>
            <p className="eyebrow text-gold-deep">Mailing address</p>
            <p className="mt-3 leading-relaxed text-ink/80">
              {church.legalName}
              <br />
              {church.mailing}
            </p>
          </div>
          <div>
            <p className="eyebrow text-gold-deep">Pastor</p>
            <p className="heading mt-3 text-xl">{pastor.name}</p>
          </div>
          <div>
            <p className="eyebrow text-gold-deep">Facebook</p>
            <a href={church.facebook} target="_blank" rel="noopener" className="heading mt-3 inline-block text-xl underline">
              Kingdom Restored Life
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div id="message" className="rounded-[1.75rem] bg-stone p-6 sm:p-10">
            <ContactForm topic={chosen} />
          </div>
          <div className="rounded-[1.75rem] bg-ink p-6 text-white sm:p-10">
            <p className="eyebrow text-gold">Join our mailing list</p>
            <p className="heading mt-3 text-2xl">Never miss an update.</p>
            <div className="mt-6 rounded-[1.25rem] bg-paper p-5 text-ink">
              <NotifyForm topic="updates" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
