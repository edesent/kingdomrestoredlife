import Image from "next/image";
import Link from "next/link";
import { NotifyForm } from "@/components/Forms";
import HeroWord from "@/components/HeroWord";
import Mark from "@/components/Mark";
import Mend from "@/components/Mend";
import Phone, { PrayerLine } from "@/components/Phone";
import { cashAppUrl, church, links, ministries, pastor, story, supportCenter, traditions, upcoming, values, weekly } from "@/lib/site";

export const revalidate = 3600;

export default function Home() {
  const next = upcoming();

  return (
    <>
      {/* ───────────── Hero: RESTORED, broken and made whole, with the fire orb for its O ───────────── */}
      <section className="grain relative overflow-hidden bg-paper">
        <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
          <div className="rise flex flex-wrap items-center justify-between gap-3 text-ink/60">
            <p className="eyebrow">Charlotte, North Carolina · Since {church.founded}</p>
            <p className="eyebrow hidden md:block">Multi-cultural · Non-denominational · Bible-based</p>
          </div>

          <h1 className="sr-only">
            {church.legalName}, Charlotte, North Carolina. {church.motto}.
          </h1>

          <HeroWord />

          <div className="grid gap-10 pb-16 pt-10 sm:pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
            <div className="rise [animation-delay:400ms]">
              <p className="eyebrow text-gold-deep">Our foundation scripture</p>
              <blockquote className="mt-5">
                <p className="serif-italic text-[clamp(1.6rem,3.2vw,2.35rem)] leading-[1.15] text-ink">
                  “For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give
                  you a future and a hope.”
                </p>
                <footer className="eyebrow mt-4 text-ink/50">Jeremiah 29:11</footer>
              </blockquote>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
                KRL is a multi-cultural, non-denominational, Bible-based church family in Charlotte, led by{" "}
                <strong className="font-semibold text-ink">{pastor.name}</strong>. We believe the Lord restores the broken
                pieces of lives, and we would love to pray with you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/visit" className="btn btn-green">
                  Plan your first Sunday
                </Link>
                <Link href="/prayer" className="btn btn-ghost text-ink">
                  Send a prayer request
                </Link>
              </div>
            </div>

            <figure className="rise relative [animation-delay:550ms]">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-stone shadow-[0_40px_80px_-40px_rgb(20_20_20/0.45)]">
                <Image
                  src="/photos/pastor-and-lady-hamlet.jpg"
                  alt="Pastor Terrell Hamlet, seated in a patterned silk shirt, with Lady DaShan Hamlet standing behind him in a navy dress, her hands on his shoulders"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover object-[50%_18%]"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-ink/55">
                <span>Our pastor and our leading lady</span>
                <span className="text-right font-semibold text-ink/70">Pastor Terrell & Lady DaShan Hamlet</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ───────────── Every week ───────────── */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-3">
          {weekly.map((w, i) => (
            <div key={w.name} data-reveal={i} className="border-white/10 py-9 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0">
              <p className="eyebrow text-gold">{w.day}</p>
              <p className="time mt-3 text-4xl">{w.time}</p>
              <p className="heading mt-2 text-xl">{w.name}</p>
              <p className="mt-2 text-white/65">{w.note}</p>
            </div>
          ))}
          <div data-reveal="2" className="border-white/10 py-9 md:border-l md:px-8">
            <p className="eyebrow text-gold">Any day</p>
            <p className="display mt-3 text-[2.1rem]">Prayer</p>
            <p className="heading mt-2 text-xl">Send a request</p>
            <p className="mt-2 text-white/65">
              The pastor and the intercessors will seek the Lord on your behalf.{" "}
              <Link href="/prayer" className="font-semibold text-gold underline-offset-4 hover:underline">
                Send one →
              </Link>
            </p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-white/75 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>
              Sundays at {church.street}, {church.city} ·{" "}
              <a href={church.mapsUrl} target="_blank" rel="noopener" className="font-semibold text-white underline-offset-4 hover:underline">
                Directions
              </a>
            </p>
            <p>
              Questions? <Phone className="time font-semibold text-white hover:text-gold" />
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── The name ───────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-gold-deep" data-reveal>
              Our name
            </p>
            <Mend className="display mt-5 text-[clamp(2.4rem,6vw,4.6rem)]">Every piece, made whole.</Mend>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/75" data-reveal>
              Pastor Hamlet lives a life of faith that lets the Lord restore the broken pieces of lives for Kingdom ministry.
              The three words on our crest say how.
            </p>
          </div>

          <dl className="divide-y divide-ink/10 border-y border-ink/10">
            {[
              {
                word: "Kingdom",
                gloss: "Advance · Edify · Exalt",
                body: "We are here to evangelize the lost and edify the saints, to advance the Kingdom of God and exalt the name of the Lord Jesus Christ.",
              },
              {
                word: "Restored",
                gloss: "Restoring lives wholly",
                body: "God ordained this fellowship to meet every possible need of His people. Whatever is broken, bring it. He restores the whole person.",
              },
              {
                word: "Life",
                gloss: "Agape",
                body: "A called-out generation, one in Christ: a family-oriented ministry that shows the unconditional, agape love of Christ.",
              },
            ].map((n, i) => (
              <div key={n.word} data-reveal={i} className="grid gap-2 py-7 sm:grid-cols-[13rem_1fr] sm:gap-8">
                <dt>
                  <span className="display block text-[1.7rem]">{n.word}</span>
                  <span className="eyebrow mt-2 block text-gold-deep">{n.gloss}</span>
                </dt>
                <dd className="leading-relaxed text-ink/75">{n.body}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* The crest and the four core values */}
        <div className="mt-20 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <figure data-reveal className="grain flex flex-col overflow-hidden rounded-[1.75rem] bg-green-ink p-6 sm:p-10">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/photos/krl-crest.png"
                alt="The Kingdom Restored Life crest: an emerald oval ringed in gold with a fire orb inside a gold shield, a white dove, two crossed swords, two gold lions and a ribbon reading Restoring Lives Wholly"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-white/65">The KRL crest. Restoring Lives Wholly.</figcaption>
          </figure>

          <div data-reveal="1" className="flex flex-col justify-center">
            <p className="eyebrow text-gold-deep">Our core values</p>
            <ol className="mt-6 grid gap-px overflow-hidden rounded-[1.5rem] bg-ink/10 sm:grid-cols-2">
              {values.map((v, i) => (
                <li key={v.name} className="bg-paper p-7">
                  <p className="time text-sm text-gold-deep">0{i + 1}</p>
                  <p className="heading mt-3 text-xl">{v.name}</p>
                  <p className="mt-2 leading-relaxed text-ink/70">{v.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────────── Wherever you are: the prayer call, sermons, staying connected ───────────── */}
      <section className="grain overflow-hidden bg-green-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-gold" data-reveal>
              Wherever you are
            </p>
            <Mend className="display mt-5 text-[clamp(2.4rem,6vw,4.4rem)]">Pray with us by phone.</Mend>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80" data-reveal>
              Every Wednesday at 6:00 pm the church prays together on a conference line. Join from your car, your kitchen or
              your hospital bed. On a phone, one tap dials in and enters the code.
            </p>
            <div className="mt-8 max-w-lg rounded-[1.5rem] bg-white/[0.06] p-6 ring-1 ring-inset ring-white/15 sm:p-8" data-reveal>
              <p className="heading text-xl">
                Wednesday Prayer Call · <span className="time whitespace-nowrap">6:00 pm</span>
              </p>
              <div className="mt-5">
                <PrayerLine dark />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Link
              href="/word"
              data-reveal
              className="group rounded-[1.5rem] bg-paper p-8 text-ink transition hover:-translate-y-0.5 sm:p-10"
            >
              <p className="eyebrow text-gold-deep">Sermons & Bible study</p>
              <p className="heading mt-4 text-3xl">Study to show thyself approved.</p>
              <p className="mt-3 leading-relaxed text-ink/70">
                The scriptures KRL was built on, with questions for your own study or your small group, and the messages as
                they’re posted.
              </p>
              <p className="mt-5 font-semibold text-green">Open the study page →</p>
            </Link>
            <div data-reveal="1" className="rounded-[1.5rem] bg-white/[0.06] p-8 ring-1 ring-inset ring-white/15 sm:p-10">
              <p className="eyebrow text-gold">Stay connected</p>
              <p className="heading mt-4 text-2xl">Never miss an update.</p>
              <p className="mt-3 leading-relaxed text-white/75">
                Follow Kingdom Restored Life on Facebook, and join our mailing list for services, events and announcements.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={church.facebook} target="_blank" rel="noopener" className="btn btn-gold">
                  KRL on Facebook
                </a>
                <a href="#mailing-list" className="btn btn-ghost text-white">
                  Mailing list
                </a>
                {links.watch && (
                  <a href={links.watch} target="_blank" rel="noopener" className="btn btn-ghost text-white">
                    Worship online
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Pastor ───────────── */}
      <section className="grain bg-stone">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div data-reveal className="relative mx-auto w-full max-w-sm lg:max-w-[26rem]">
            <div className="relative aspect-square overflow-hidden rounded-[1.75rem] bg-stone-deep">
              <Image
                src={pastor.photo}
                alt="Pastor Terrell Hamlet smiling, arms crossed, in a navy suit with a red tie and a blue pocket square, in front of a weathered wood wall"
                fill
                sizes="(min-width: 1024px) 416px, 90vw"
                className="object-cover"
              />
            </div>
            <Mark id="pastor-mark" className="absolute -bottom-7 -right-3 h-24 w-20 drop-shadow-md sm:-right-7" />
          </div>

          <div data-reveal="1">
            <p className="eyebrow text-gold-deep">Our pastor · founder</p>
            <h2 className="display mt-5 text-[clamp(2.2rem,5vw,3.8rem)]">A servant-leader.</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">
              {pastor.name} is a native of Baltimore who now lives in Charlotte. He founded Kingdom Restored Life on a vision
              God gave him in 2013, and his calling is to be a servant-leader: an extension of God’s love to everyone he
              meets. Ministry is his heart. He has a passion to see God’s people grow in their personal and their spiritual
              lives.
            </p>
            <blockquote className="mt-6 border-l-2 border-gold pl-5">
              <p className="serif-italic text-2xl leading-snug">
                “We pray this is a fresh connection with you and the ministry of Jesus Christ… and that God gives you a peace
                that surpasses all understanding.”
              </p>
              <footer className="mt-2 text-sm font-semibold text-ink/55">Pastor Terrell & Lady DaShan Hamlet</footer>
            </blockquote>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-4 rounded-2xl bg-paper p-5">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-stone-deep">
                  <Image
                    src="/photos/lady-dashan-hamlet.jpg"
                    alt="Lady DaShan Hamlet smiling, in a navy satin top and a gold collar necklace"
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>
                <p className="text-sm leading-relaxed text-ink/70">
                  <strong className="block text-base text-ink">{pastor.wife}</strong>
                  Our leading lady, serving alongside Pastor Hamlet.
                </p>
              </div>
              <div className="rounded-2xl bg-paper p-5">
                <p className="display text-2xl text-green">For the children</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  A <strong className="text-ink">Guardian ad Litem</strong> volunteer with the Mecklenburg County courts,
                  speaking up for children in Charlotte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Our story ───────────── */}
      <section className="overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-gold" data-reveal>
                Since {church.founded}
              </p>
              <Mend className="display mt-5 max-w-3xl text-[clamp(2.2rem,5.4vw,4.4rem)]">From a vision to a family.</Mend>
            </div>
            <p className="serif-italic max-w-sm text-xl leading-snug text-white/75" data-reveal>
              “After your first visit, you are no longer a visitor.”
            </p>
          </div>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {story.map((t, i) => (
              <li key={t.year} data-reveal={i % 3} className="bg-ink p-7 sm:p-8">
                <p className={`display text-5xl ${t.year === "Today" ? "text-gold" : "text-white"}`}>{t.year}</p>
                <p className="heading mt-4 text-lg">{t.title}</p>
                <p className="mt-2 leading-relaxed text-white/65">{t.body}</p>
              </li>
            ))}
          </ol>

          <div data-reveal className="mt-10">
            <Link href="/about" className="btn btn-gold">
              Read our story
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── Kingdom Comfort & Peace Support Center ───────────── */}
      <section className="bg-green text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-gold" data-reveal>
              Community outreach
            </p>
            <Mend className="display mt-5 text-[clamp(2.4rem,6vw,4.6rem)]">Comfort & peace.</Mend>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90" data-reveal>
              Pastor Hamlet founded the {supportCenter.name} to serve youth and families in both North and South Carolina.
              If your family is carrying something heavy, you don’t have to carry it alone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" data-reveal>
              <Link href="/support-center" className="btn btn-gold">
                About the Support Center
              </Link>
              <Link href="/contact?topic=support" className="btn btn-ghost text-white">
                Ask for help
              </Link>
            </div>
          </div>

          <div data-reveal="1" className="flex flex-col gap-6">
            <div className="rounded-[1.5rem] bg-green-ink p-8 sm:p-10">
              <p className="eyebrow text-gold">Sow a seed</p>
              <p className="heading mt-4 text-3xl">Join the cause.</p>
              <p className="mt-4 leading-relaxed text-white/75">
                Help spread the love of God to the communities around us. Give to the Support Center through Cash App, and
                add “Support Center” in the note.
              </p>
              {cashAppUrl && (
                <a href={cashAppUrl} target="_blank" rel="noopener" className="mt-6 inline-block font-semibold text-gold underline-offset-4 hover:underline">
                  ${links.cashtag} on Cash App →
                </a>
              )}
            </div>
            <div className="rounded-[1.5rem] bg-white/10 p-8 ring-1 ring-inset ring-white/20 sm:p-10">
              <p className="serif-italic text-2xl leading-snug">
                “Whoever is generous to the poor lends to the Lord, and he will repay him for his deed.”
              </p>
              <p className="eyebrow mt-4 text-gold">Proverbs 19:17</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Ministries ───────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-gold-deep" data-reveal>
              Find your place
            </p>
            <Mend className="display mt-5 text-[clamp(2.2rem,5vw,3.8rem)]">Advance. Edify. Exalt.</Mend>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/75" data-reveal>
              God has called each of us unto salvation, and with that same call we have many callings with the same goal:
              advance the body of Christ, edify the believer, and exalt the name of the Lord Jesus Christ.
            </p>
            <Link
              href="/ministries"
              data-reveal
              className="mt-6 inline-block font-semibold text-ink underline decoration-gold decoration-2 underline-offset-[6px]"
            >
              All ministries →
            </Link>
          </div>
          <ul className="grid content-start gap-px self-start overflow-hidden rounded-[1.5rem] bg-ink/10 sm:grid-cols-2">
            {ministries.map((m, i) => (
              <li key={m.name} data-reveal={i % 2} className="flex flex-col bg-paper p-7">
                <p className="eyebrow text-gold-deep">{m.kind}</p>
                <p className="heading mt-3 text-2xl">{m.name}</p>
                <p className="mt-2 flex-1 leading-relaxed text-ink/70">{m.body}</p>
                <Link href={`/contact?topic=${encodeURIComponent(m.name)}`} className="mt-4 text-sm font-bold text-green hover:underline">
                  Join now →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Events & announcements ───────────── */}
      <section className="border-t border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-gold-deep" data-reveal>
                Events & announcements
              </p>
              <h2 className="display mt-5 text-[clamp(2.2rem,5vw,3.8rem)]" data-reveal>
                What’s coming.
              </h2>
            </div>
            <Link href="/events" className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-[6px]">
              All events →
            </Link>
          </div>

          {next.map((e) => (
            <article key={e.title} data-reveal className="mt-12 rounded-[1.75rem] bg-green-ink p-8 text-white sm:p-12">
              {e.detail && <p className="eyebrow text-gold">{e.detail}</p>}
              <h3 className="display mt-4 text-4xl sm:text-5xl">{e.title}</h3>
              <p className="heading mt-4 text-xl text-gold">{e.date}</p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{e.body}</p>
            </article>
          ))}

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <ul className="grid gap-px overflow-hidden rounded-[1.5rem] bg-ink/10 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {traditions.map((t, i) => (
                <li key={t.title} data-reveal={i} className="bg-stone/60 p-7">
                  <p className="eyebrow text-gold-deep">{t.month}</p>
                  <p className="heading mt-3 text-xl">{t.title}</p>
                  <p className="mt-2 leading-relaxed text-ink/70">{t.body}</p>
                </li>
              ))}
            </ul>
            <div id="mailing-list" data-reveal="1" className="scroll-mt-24 rounded-[1.5rem] bg-ink p-7 text-white sm:p-8">
              <p className="eyebrow text-gold">Join our mailing list</p>
              <p className="heading mt-3 text-2xl">Never miss an update.</p>
              <p className="mt-2 text-white/70">Services, events and announcements, straight from the church.</p>
              <div className="mt-6 rounded-[1.25rem] bg-paper p-5 text-ink">
                <NotifyForm topic="updates" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Come ───────────── */}
      <section className="grain overflow-hidden bg-stone">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28">
          <Mark id="come-mark" className="h-20 w-16" />
          <Mend className="display mx-auto mt-8 text-[clamp(2.4rem,7.4vw,6rem)]">Come and enjoy the Lord.</Mend>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
            Sunday worship at <span className="time font-bold text-ink">11:00 AM (EST)</span>. Join us for an Upper-Room
            Experience. After your first visit, you are no longer a visitor.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/visit" className="btn btn-green">
              Plan your first Sunday
            </Link>
            <a href={church.mapsUrl} target="_blank" rel="noopener" className="btn btn-ghost text-ink">
              {church.street}, {church.city}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
