import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Pending from "@/components/Pending";
import { PrayerLine } from "@/components/Phone";
import { links, scriptures } from "@/lib/site";
import { newsletterIssues } from "@/lib/newsletters";

export const metadata: Metadata = {
  title: "Sermons & Bible study",
  description: "Sermons and Bible study resources from Kingdom Restored Life: the scriptures KRL was built on, with questions for your own study.",
};

/** One question per passage, for personal study or a small group. */
const questions: Record<string, string> = {
  "Jeremiah 29:11": "God spoke this to people in exile. Where do you need to hear that His thoughts toward you are peace?",
  "Acts 2:38": "Peter gives three steps and a promise. Which one is God asking you to take next?",
  "Ephesians 4:11–12": "Gifts are given “for the work of the ministry.” What gift has God put in your hands for His people?",
  "Isaiah 53:5": "Read verses 4 and 5 slowly. What has He already carried that you are still trying to carry?",
  "2 Timothy 2:15": "What would it look like this week to study, not just read?",
  "Proverbs 19:17": "Who near you is in need, and what could you lend to the Lord by helping them?",
};

export default function Word() {
  return (
    <>
      <PageHead eyebrow="Sermons & Bible study" title="Study to show thyself approved.">
        <p>The scriptures Kingdom Restored Life was built on, one for each part of our life together, with a question to take with you.</p>
      </PageHead>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {links.sermons ? (
            <a href={links.sermons} target="_blank" rel="noopener" className="block rounded-[1.75rem] bg-green-ink p-8 text-white sm:p-10" data-reveal>
              <p className="eyebrow text-gold">Sermons</p>
              <p className="display mt-4 text-3xl sm:text-4xl">Watch the messages.</p>
              <p className="mt-4 font-semibold text-gold">Open the sermon archive →</p>
            </a>
          ) : (
            <Pending service="Sermons" title="Messages from the pulpit." className="self-start">
              Sermons will be posted here as they’re recorded. Until then, pray with the church every Wednesday at 6:00 pm by
              phone.
            </Pending>
          )}
          <div className="rounded-[1.75rem] bg-stone p-7 sm:p-8" data-reveal="1">
            <p className="eyebrow text-gold-deep">Wednesday · 6:00 pm</p>
            <p className="heading mt-3 text-2xl">The prayer call</p>
            <div className="mt-5">
              <PrayerLine />
            </div>
          </div>
        </div>

        {/* KRL Newsletter — weekly issues appear here as they are published. */}
        <section id="krl-newsletter" className="mt-14" aria-labelledby="krl-newsletter-title">
          <div className="mb-7">
            <p className="eyebrow text-gold-deep">Stay connected to the Kingdom</p>
            <h2 id="krl-newsletter-title" className="display mt-3 text-3xl sm:text-4xl">KRL Newsletter</h2>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink/75">
              Our weekly newsletter will bring together Sunday Encounter highlights, Let’s Talk Bible recaps,
              upcoming announcements, and encouragement for the KRL family.
            </p>
          </div>
          {newsletterIssues.length === 0 ? (
            <Pending service="KRL Newsletter" title="Weekly encouragement is on the way.">
              Coming soon! Check back for the weekly KRL Newsletter, with ministry updates, sermon and Bible
              study highlights, and encouragement to carry with you through the week.
            </Pending>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {[...newsletterIssues]
                .sort((a, b) => b.date.localeCompare(a.date))
                .map((issue) => (
                  <article key={issue.date} className="rounded-[1.5rem] border border-ink/10 bg-stone p-6 sm:p-8">
                    <p className="eyebrow text-gold-deep">
                      {new Date(`${issue.date}T12:00:00Z`).toLocaleDateString("en-US", {
                        timeZone: "UTC",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <h3 className="heading mt-3 text-2xl">{issue.title}</h3>
                    {issue.summary && <p className="mt-3 leading-relaxed text-ink/70">{issue.summary}</p>}
                    <a
                      href={issue.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex font-semibold text-green underline underline-offset-4 hover:text-green-ink"
                    >
                      Read this newsletter (PDF) →
                    </a>
                  </article>
                ))}
            </div>
          )}
        </section>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] bg-ink/10 md:grid-cols-2">
          {scriptures.map((s, i) => (
            <li key={s.ref} data-reveal={i % 2} className="flex flex-col bg-paper p-7 sm:p-10">
              <p className="eyebrow text-gold-deep">{s.theme}</p>
              <p className="display mt-3 text-2xl sm:text-3xl">{s.ref}</p>
              <p className="serif-italic mt-4 flex-1 text-xl leading-snug text-ink/85">“{s.text}”</p>
              {questions[s.ref] && (
                <p className="mt-6 border-t border-ink/10 pt-5 leading-relaxed text-ink/70">
                  <strong className="text-green">For your study: </strong>
                  {questions[s.ref]}
                </p>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-wrap gap-3" data-reveal>
          <Link href="/prayer" className="btn btn-green">
            Send a prayer request
          </Link>
          <Link href={`/contact?topic=${encodeURIComponent("Bible study")}`} className="btn btn-ghost">
            Ask about Bible study
          </Link>
        </div>
      </section>
    </>
  );
}
