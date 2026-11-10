"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { more, nav } from "@/lib/site";
import Wordmark from "./Wordmark";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-paper/95 shadow-[0_1px_0_rgb(20_20_20/0.08)] backdrop-blur" : "bg-paper"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Kingdom Restored Life, home">
          <Wordmark id="hdr" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`rounded-full px-3.5 py-2 text-[0.82rem] font-bold uppercase tracking-[0.12em] [font-stretch:115%] transition ${
                path === n.href ? "text-green" : "text-ink/75 hover:text-ink"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/prayer" className="btn btn-ink ml-3 !py-2.5 !text-[0.82rem]">
            <span className="orb h-2.5 w-2.5" aria-hidden />
            Prayer request
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-ink/15 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-ink transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-ink transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-ink/10 px-4 pb-6 pt-2 lg:hidden">
          {[...nav, ...more].map((n) => (
            <Link key={n.href} href={n.href} className="display block border-b border-ink/10 py-4 text-2xl">
              {n.label}
            </Link>
          ))}
          <Link href="/prayer" className="btn btn-green mt-6 w-full">
            Send a prayer request
          </Link>
        </nav>
      )}
    </header>
  );
}
