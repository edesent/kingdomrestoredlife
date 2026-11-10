"use client";

import { useEffect, useState } from "react";
import { church, prayerLine } from "@/lib/site";

const pretty = (d: string) => `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;

/**
 * The church number, put together in the browser after the page loads so it
 * never sits in the HTML for spam scrapers to harvest.
 */
export default function Phone({
  className = "",
  fallback = "Call the church",
  text = false,
  label,
}: {
  className?: string;
  fallback?: string;
  /** Link to a text message instead of a call. */
  text?: boolean;
  /** Show this instead of the formatted number. */
  label?: string;
}) {
  const [digits, setDigits] = useState<string | null>(null);

  useEffect(() => {
    setDigits(atob(church.phoneB64));
  }, []);

  if (!digits) return <span className={className}>{label ?? fallback}</span>;

  return (
    <a href={`${text ? "sms" : "tel"}:+1${digits}`} className={className}>
      {label ?? pretty(digits)}
    </a>
  );
}

/**
 * The Wednesday prayer call. On a phone, one tap dials the line, waits, and
 * enters the access code. The number and code are shown as well, for anyone
 * dialing from a landline.
 */
export function PrayerLine({ dark = false }: { dark?: boolean }) {
  const [line, setLine] = useState<{ number: string; access: string } | null>(null);

  useEffect(() => {
    setLine({ number: atob(prayerLine.numberB64), access: atob(prayerLine.accessB64) });
  }, []);

  const muted = dark ? "text-white/60" : "text-ink/55";
  const strong = dark ? "text-white" : "text-ink";

  return (
    <div>
      <dl className="flex flex-wrap gap-x-10 gap-y-4">
        <div>
          <dt className={`eyebrow ${muted}`}>Dial</dt>
          <dd className={`time mt-2 whitespace-nowrap text-2xl ${strong}`}>{line ? pretty(line.number) : "…"}</dd>
        </div>
        <div>
          <dt className={`eyebrow ${muted}`}>Access code</dt>
          <dd className={`time mt-2 whitespace-nowrap text-2xl ${strong}`}>{line ? `${line.access} #` : "…"}</dd>
        </div>
      </dl>
      {line ? (
        <a href={`tel:+1${line.number},,${line.access}%23`} className={`btn mt-6 w-full sm:w-auto ${dark ? "btn-gold" : "btn-green"}`}>
          Tap to join the prayer call
        </a>
      ) : (
        <span className={`btn mt-6 w-full sm:w-auto ${dark ? "btn-gold" : "btn-green"}`}>Tap to join the prayer call</span>
      )}
    </div>
  );
}
