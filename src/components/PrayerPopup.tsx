"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PrayerForm } from "./Forms";

/**
 * The prayer request form as a popup. Every link to /prayer on the site opens
 * this instead of leaving the page. The /prayer page itself still works on its
 * own (direct visits, search, and browsers without JavaScript), and on that
 * page the links are left alone because the form is already there.
 */
export default function PrayerPopup() {
  const ref = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);
  // Changing the key gives a fresh form after a request has been sent.
  const [round, setRound] = useState(0);
  const path = usePathname();

  useEffect(() => {
    if (path === "/prayer") {
      ref.current?.close();
      setMounted(false);
      return;
    }
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!a || a.getAttribute("href") !== "/prayer") return;
      e.preventDefault();
      e.stopPropagation();
      // A thank-you is showing from last time: start a fresh form. Text from a
      // request that was never sent stays put.
      if (ref.current?.querySelector('[role="status"]')) setRound((r) => r + 1);
      setMounted(true);
      ref.current?.showModal();
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [path]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="prayer-popup-title"
      className="m-auto w-[min(40rem,calc(100vw-2rem))] max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-[1.75rem] bg-paper p-0 text-ink shadow-[0_30px_80px_rgb(7_42_13/0.35)] backdrop:bg-green-ink/70 backdrop:backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      <div className="relative p-6 sm:p-9">
        <button
          type="button"
          aria-label="Close"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-2xl leading-none text-ink/60 ring-1 ring-ink/15 transition hover:text-ink"
          onClick={() => ref.current?.close()}
        >
          ×
        </button>
        <p className="eyebrow text-green">Prayer request</p>
        <h2 id="prayer-popup-title" className="display mt-3 pr-10 text-3xl sm:text-4xl">
          We’ll seek the Lord with you.
        </h2>
        <p className="mb-7 mt-3 leading-relaxed text-ink/75">
          Your request goes to Pastor Hamlet and the War “Roar” Cry intercessors, unless you ask that it stay with the
          pastor.
        </p>
        {mounted && <PrayerForm key={round} />}
      </div>
    </dialog>
  );
}
