import Link from "next/link";
import { church, more, nav, pastor, weekly } from "@/lib/site";
import Phone from "./Phone";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="bg-green-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Wordmark light id="ftr" />
            <p className="serif-italic mt-6 max-w-sm text-xl leading-snug text-white/80">
              “For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you
              a future and a hope.”
            </p>
            <p className="eyebrow mt-3 text-gold">Jeremiah 29:11</p>
          </div>
          <div>
            <p className="eyebrow text-gold">Every week</p>
            <ul className="mt-4 space-y-2 text-white/85">
              {weekly.map((w) => (
                <li key={w.name}>
                  <span className="font-semibold">
                    {w.day} <span className="time font-bold">{w.time}</span>
                  </span>{" "}
                  · {w.name}
                </li>
              ))}
            </ul>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-semibold">
              {[...nav, ...more].map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/80 hover:text-gold">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-gold">Find us</p>
            <address className="mt-4 not-italic leading-relaxed text-white/85">
              {church.street}
              <br />
              {church.city}, {church.stateCode} {church.zip}
              <br />
              <span className="text-white/55">Mail: {church.mailing}</span>
            </address>
            <p className="mt-3">
              <Phone className="time font-semibold text-white hover:text-gold" />
            </p>
            <p className="mt-1 text-white/60">
              {pastor.name}, {pastor.title}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              <a href={church.mapsUrl} target="_blank" rel="noopener" className="hover:text-gold">
                Directions
              </a>
              <a href={church.facebook} target="_blank" rel="noopener" className="hover:text-gold">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {church.legalName} · Charlotte, North Carolina
          </p>
          <p className="eyebrow text-gold/80">{church.motto}</p>
        </div>
      </div>
    </footer>
  );
}
