import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Mend from "@/components/Mend";
import PageHead from "@/components/PageHead";
import { church, pastor, story, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description: `${church.legalName}: how KRL began, what we believe, and the leaders God has given us. ${church.motto}.`,
};

export default function About() {
  return (
    <>
      <PageHead eyebrow="About Kingdom Restored Life" title="How it began.">
        <p>
          {church.legalName} is {church.kind.toLowerCase()}, established to meet every possible need of God’s people, with a
          mission to evangelize the lost and edify the saints to advance the Kingdom of God.
        </p>
      </PageHead>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <ol className="grid gap-px overflow-hidden rounded-[1.5rem] bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {story.map((t, i) => (
            <li key={t.year} data-reveal={i % 3} className="bg-paper p-7 sm:p-8">
              <p className={`display text-5xl ${t.year === "Today" ? "text-green" : "text-ink"}`}>{t.year}</p>
              <p className="heading mt-4 text-lg">{t.title}</p>
              <p className="mt-2 leading-relaxed text-ink/70">{t.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Mission & vision */}
      <section className="grain bg-stone">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <p className="eyebrow text-gold-deep">Our mission</p>
            <p className="mt-5 text-lg leading-relaxed text-ink/80">
              KRL is called to proclaim the Gospel of Jesus Christ as outlined in scripture: to go into the world and preach
              and teach the good news to all creation, and to make disciples, encouraging people to accept Christ as their
              personal Lord and Savior and to be baptized in His name, bearing witness to His death, burial and resurrection.
            </p>
            <blockquote className="mt-6 border-l-2 border-gold pl-5">
              <p className="serif-italic text-xl leading-snug">
                “Each of you must repent of your sins and turn to God and be baptized in the name of Jesus Christ for the
                forgiveness of your sins. Then you will receive the gift of the Holy Spirit.”
              </p>
              <footer className="eyebrow mt-3 text-ink/50">Acts 2:38</footer>
            </blockquote>
          </div>
          <div data-reveal="1">
            <p className="eyebrow text-gold-deep">Our vision</p>
            <p className="mt-5 text-lg leading-relaxed text-ink/80">
              This covenant assembly is a multi-cultural ministry that brings us together as one in Christ: submitting to
              prayer, letting the Lord transform us by the renewing of our minds, a called-out generation forming a
              family-oriented ministry that shows forth the agape, unconditional love of Christ.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {values.map((v, i) => (
                <li key={v.name} className="rounded-2xl bg-paper p-5">
                  <p className="time text-sm text-gold-deep">0{i + 1}</p>
                  <p className="heading mt-2 text-lg">{v.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Leaders */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="eyebrow text-gold-deep" data-reveal>
          Our leaders
        </p>
        <Mend className="display mt-5 text-[clamp(2.2rem,5vw,3.8rem)]">For the work of the ministry.</Mend>
        <p className="serif-italic mt-6 max-w-2xl text-xl leading-snug text-ink/70" data-reveal>
          “And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers; for the
          perfecting of the saints.” Ephesians 4:11–12
        </p>

        <article className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14" data-reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.75rem] bg-stone">
            <Image
              src="/photos/pastor-and-lady-hamlet.jpg"
              alt="Pastor Terrell Hamlet, seated in a patterned silk shirt, with Lady DaShan Hamlet standing behind him in a navy dress"
              fill
              sizes="(min-width: 1024px) 384px, 90vw"
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="eyebrow text-gold-deep">{pastor.title}</p>
            <h2 className="display mt-4 text-4xl">{pastor.name}</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/80">
              <p>
                Pastor Hamlet is a native of Baltimore, Maryland, and now lives in Charlotte. He is the founder and leader of
                Kingdom Restored Life. The vision God gave him is to be a servant-leader, living a life full of faith that lets
                the Lord restore the broken pieces of lives for Kingdom ministry.
              </p>
              <p>
                He earned a Bachelor’s degree in Christian Counseling (2019) and an Associate of Ministry in Biblical Studies
                (2010) from Kingdom Bible University in Baltimore. In World Kingdom Fresh Fire Ministries he has served as
                greeter, deacon, worship leader, youth Sunday school teacher and armor-bearer, and today he is Chief
                Armor-Bearer and trains armor-bearers across the covenant.
              </p>
              <p>
                He founded the Kingdom Comfort & Peace Support Center to serve North and South Carolina, and he volunteers as a
                Guardian ad Litem with the Mecklenburg County courts.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article data-reveal className="flex gap-5 rounded-[1.5rem] bg-stone p-6 sm:p-8">
            <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl bg-stone-deep sm:h-36 sm:w-28">
              <Image
                src="/photos/lady-dashan-hamlet.jpg"
                alt="Lady DaShan Hamlet smiling, in a navy satin top and a gold collar necklace"
                fill
                sizes="112px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="eyebrow text-gold-deep">Leading Lady</p>
              <h3 className="heading mt-2 text-2xl">{pastor.wife}</h3>
              <p className="mt-2 leading-relaxed text-ink/70">Serving alongside Pastor Hamlet in the life of KRL.</p>
            </div>
          </article>
          <article data-reveal="1" className="flex gap-5 rounded-[1.5rem] bg-stone p-6 sm:p-8">
            <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl bg-stone-deep sm:h-36 sm:w-28">
              <Image
                src="/photos/apostle-ralph-long.jpg"
                alt="Apostle Ralph Long in a clerical collar, a black jacket and a royal-blue stole"
                fill
                sizes="112px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="eyebrow text-gold-deep">Our apostolic covering</p>
              <h3 className="heading mt-2 text-2xl">Apostle Dr. Ralph R. Long</h3>
              <p className="mt-2 leading-relaxed text-ink/70">
                Senior Pastor of World Kingdom in Baltimore and Living Bread Worship Center in Delmar, Maryland. He oversees{" "}
                {church.covering}, a covenant of some 60 churches and ministries.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-14 flex flex-wrap gap-3" data-reveal>
          <Link href="/visit" className="btn btn-green">
            Plan your first Sunday
          </Link>
          <Link href="/ministries" className="btn btn-ghost">
            Our ministries
          </Link>
        </div>
      </section>
    </>
  );
}
