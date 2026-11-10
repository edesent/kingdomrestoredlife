import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import { ministries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ministries",
  description: "Intercessors, NuMotion Youth, greeters and pastoral support at Kingdom Restored Life in Charlotte. Find a place for your God-given gifts.",
};

export default function Ministries() {
  return (
    <>
      <PageHead eyebrow="KRL Ministries" title="Advance. Edify. Exalt.">
        <p>
          It is our hope that our ministry will be inviting to all who encounter it, and that you’ll find a place for your
          God-given gifts. Look through the ministries below; choose “Join now” and someone from our ministry team will be in
          touch.
        </p>
      </PageHead>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <ul className="grid gap-6 md:grid-cols-2">
          {ministries.map((m, i) => (
            <li key={m.name} data-reveal={i % 2} className="flex flex-col rounded-[1.75rem] bg-stone p-7 sm:p-10">
              <p className="eyebrow text-gold-deep">{m.kind}</p>
              <h2 className="display mt-4 text-4xl">{m.name}</h2>
              <p className="mt-4 flex-1 text-lg leading-relaxed text-ink/75">{m.body}</p>
              {m.verse && <p className="serif-italic mt-4 text-lg text-ink/60">{m.verse}</p>}
              <Link href={`/contact?topic=${encodeURIComponent(m.name)}`} className="btn btn-green mt-7 self-start">
                Join now
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div data-reveal className="rounded-[1.75rem] bg-green-ink p-7 text-white sm:p-10">
            <p className="eyebrow text-gold">Christian education</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">Bible study.</h2>
            <p className="mt-4 leading-relaxed text-white/80">
              As Paul encouraged Timothy, “study to shew thyself approved unto God, a workman that needeth not to be
              ashamed.” Our study page has the scriptures KRL was built on, with questions to work through.
            </p>
            <Link href="/word" className="btn btn-gold mt-7">
              Sermons & Bible study
            </Link>
          </div>
          <div data-reveal="1" className="rounded-[1.75rem] bg-stone p-7 sm:p-10">
            <p className="eyebrow text-gold-deep">Teach our youth</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">Volunteer.</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              If you would like to volunteer to teach youth Bible study, let us know. We ask that you believe in Jesus Christ
              and have experience teaching young people.
            </p>
            <Link href={`/contact?topic=${encodeURIComponent("NuMotion")}`} className="btn btn-ghost mt-7">
              Ask about NuMotion
            </Link>
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center leading-relaxed text-ink/60" data-reveal>
          Some ministries take more time than others, but all of them ask you to have a relationship with the Lord, a committed
          prayer life and a life of spiritual feeding.
        </p>
      </section>
    </>
  );
}
