# Kingdom Restored Life, Inc. — Charlotte, NC

Website for **Kingdom Restored Life, Inc. (KRL)**, a multi-cultural, non-denominational, Bible-based church in Charlotte, North Carolina.
Senior Pastor & Founder: **Pastor Terrell C. Hamlet**. Leading Lady: **DaShan R. Hamlet**. Administrator: Sister Diane M. Triplett.
Apostolic covering: Apostle Dr. Ralph R. Long, World Kingdom Fresh Fire Ministries International (Baltimore).
Their old domain, krestoredlife.com, lapsed and now points at someone else's site. The church has no domain yet.

Preview: https://kingdomrestoredlife.elijahdesent.com (hidden from search engines; see "Going live").

## Read this before editing (for people and AI assistants)

- **Next.js 16.2 (App Router) + React 19 + Tailwind CSS v4.** This is NOT Next 13/14:
  - Page `params` and `searchParams` are **Promises**. Write `({ searchParams }: { searchParams: Promise<{ topic?: string }> })` and `await searchParams` (see `src/app/contact/page.tsx`).
  - Never name a component prop `ref`; it is reserved in React 19.
  - Tailwind v4 has no `tailwind.config.js`. Colors and fonts live in `src/app/globals.css` under `:root` and `@theme inline`. Custom classes go inside `@layer components`.
- **Type curly quotes and apostrophes as the characters themselves (’ “ ”), not as `&rsquo;` / `&ldquo;`.** An entity inside a multi-line JSX sentence can silently eat the space before it.
- **Deploys:** every push to `main` auto-deploys on Vercel. Run `npm run build` first. If the type-check fails, the live site does not update.
- **Commit email** must be `Elimark1611@gmail.com`, or Vercel blocks the deploy.
- **Fonts are self-hosted** in `src/fonts/`: Archivo (variable weight AND width; stretched to 125% for the wide headline capitals) and Newsreader (Scripture and quotes). Don’t switch to `next/font/google`; it can fail the Vercel build. **Times are always set in the sans** (`.time` class).
- **Values a component file imports from a `"use client"` file are not real values on the server.** Shared lists (like the contact topics) live in `src/lib/site.ts`.

## Where things live

| To change… | Edit |
| --- | --- |
| Service times, address, pastor, ministries, core values | `src/lib/site.ts` |
| **The Wednesday prayer-call number and access code** | `prayerLine` in `src/lib/site.ts` (base64; see "Phone numbers") |
| **Cash App cashtag**, PayPal, online-worship link, sermon archive | `links` in `src/lib/site.ts` (see "Placeholders") |
| Dated events and announcements | `events` in `src/lib/site.ts` |
| The days KRL marks every year | `traditions` in `src/lib/site.ts` |
| The story timeline (2013 → today) | `story` in `src/lib/site.ts` |
| Scriptures and study questions on /word | `scriptures` in `src/lib/site.ts`, `questions` in `src/app/word/page.tsx` |
| Contact-form topics ("What’s it about?") | `contactTopics` in `src/lib/site.ts` |
| Navigation | `nav` (top bar) and `more` (phone menu + footer) in `src/lib/site.ts` |
| Photos | `public/photos/`. Alt text sits next to each image where it is used |
| The RESTORED hero | `src/components/HeroWord.tsx` |
| The mending headlines | `src/components/Mend.tsx`, `.mend` in `src/app/globals.css` |
| The small crest mark | `src/components/Mark.tsx` |
| Colors | `src/app/globals.css` |

Pages: `/` home · `/visit` · `/about` · `/ministries` · `/events` · `/word` (sermons & Bible study) · `/support-center` (Kingdom Comfort & Peace Support Center) · `/give` · `/prayer` · `/contact`.

## The concept

The crest’s ribbon says **“Restoring Lives Wholly”**, and Pastor Hamlet’s own bio says he lets the Lord **“restore the broken pieces of lives for Kingdom ministry.”** The site is built on that.

- **Home hero:** the name as a lockup, KINGDOM / **RESTORED** / LIFE. The giant word RESTORED arrives broken along a crack, its two halves come together, and the crack is left filled with gold. The **O is the fire orb** from the centre of the crest’s shield, and it is never broken. (`HeroWord.tsx`)
- **Headlines everywhere** mend the same way as they scroll into view (`Mend.tsx`). On a single line the crack runs through the upper third of the letters; that way a heading that wraps to two lines is still cracked through its first line, not the gap.
- **Colors** come from the crest: emerald green, gold and the fire orange, on warm paper and near-black ink.
- **Layout** follows the MBC Reflection demo (mbcelmira) on purpose: Eli asked for “a website like this.”
- **Words are theirs** wherever possible, recovered from their 2024–2025 Wix site through the Wayback Machine: the About page (story, mission, vision, core values), the pastor’s and apostle’s bios, the ministries page, the Visit page (“Upper-Room Experience”, “After your 1st visit, you are no longer a visitor”, “Come and Enjoy the Lord!”), the giving page (Malachi 3, “Sow a seed”, Cash App), the prayer page (Isaiah 53:4–5, “Shalom! We’ve received your request…”), and the home-page welcome prayer signed by Pastor Terrell & Lady DaShan.

## Placeholders

While a value in `links` is `""`, the site shows a tidy **“Coming soon”** card instead (`src/components/Pending.tsx`), or simply leaves the button out. Paste the real value in and the real thing appears.

| `links.` | What to paste | Shows on |
| --- | --- | --- |
| `cashtag` | Cash App cashtag without the `$` (now `krestoredlife`) | /give, /support-center, home |
| `watch` | Link for watching Sunday worship online (Facebook Live, YouTube, Zoom) | /visit, home |
| `sermons` | Sermon archive (YouTube channel or Facebook videos) | /word |
| `paypal` | PayPal giving link | /give |

`events` is empty, so /events shows “The next event goes here” and the home page shows only the yearly days. Add an event with an `endsOn: "YYYY-MM-DD"` date and it appears on both pages, then disappears by itself the day after.

## Phone numbers

No phone number is ever typed into a page. The church line (`church.phoneB64`) and the prayer-call number and access code (`prayerLine`) are stored base64 and put together in the browser by `src/components/Phone.tsx`. To change one, base64 the digits (`printf 9805551234 | base64`). The prayer-call button dials `number,,access#`, so one tap dials the line, waits, and enters the code.

## Forms

Prayer requests, plan-a-visit, contact (with “Join now” for each ministry and “Ask for help” for the Support Center) and the mailing list all post to `src/app/api/form/route.ts`, which forwards them to the Slack/Teams incoming webhook in the `FORM_WEBHOOK_URL` environment variable. **Until that is set, every form answers “please call the church.”** Spam guards: signed load-time token, honeypot, per-IP rate limit, no links in free text.

## Confirm with the church

Everything below comes from a single source, often their 2024 website, and has not been confirmed:

- **Sunday worship is 11:00 AM (EST)** (updated by KRL Administration in November 2026; the 2024 Visit Us page had listed 12:30 pm). The **Wednesday prayer call at 6:00 pm** on 425-436-6345, access 828066, comes from the 2024 Visit Us page and remains unconfirmed. Is the access code followed by `#`? The tap-to-dial link assumes it is (untested).
- **Where they meet:** the 2024 site said the sanctuary of Iglesia Pentecostal Ebenezer, 100 Ann Marie Drive, Charlotte, NC 28217, across from Burger King, and also that they weren’t meeting in the building because of COVID. Is that still where they worship? (The CRM address, 10075 Revolution Ct Apt A, is a home and is deliberately not on the site.) Map pin is the Census geocode of 100 Ann Marie Dr.
- **“Virtual worship details”** they asked for: the only virtual piece we know is the prayer call. Do they stream Sundays? Where? (`links.watch`)
- **Mailing address** P.O. Box 240332, Charlotte, NC 28224 (2024 site). Still current?
- **Cash App $krestoredlife** (2024 giving page; their request form says “Giving today: Cash App”). Do they still use PayPal?
- **Kingdom Comfort & Peace Support Center:** what it offers, where, and when. The site only says it serves youth and families in North and South Carolina (pastor’s bio, giving page). The name also appears as “Kingdom Comfort & Peace Center, Inc.”
- **Bible study:** no day or time was found. The /word page is a study guide built from the scriptures on their old site, with questions written for this demo.
- **Sermons:** no archive found (Facebook was not readable from here).
- The one-line descriptions of War “Roar” Cry, Greeters and Pastoral Support were written for this demo from the ministry names; NuMotion’s is their own.
- “2020 · By phone” in the story is inferred from the 2024 COVID note plus the conference line.
- The old site called Dr. Long “Arch Bishop of the Diocese of WKFFM”; the site uses “Apostle Dr. Ralph R. Long” as the About page did.

## Photos

Real photos only, from their old Wix site (originals on static.wixstatic.com): Pastor & Lady Hamlet (2400×3000, shown at ≤2000), Pastor Hamlet (624×624), Lady DaShan (524×658), Apostle Long (393×768, shown small), and the crest (transparent PNG). **Not used:** the roaring-lion, “Horn of His Anointing”, praying-hands and church-door images on the old site, which are stock or downloaded art. No stock and no AI images.

## Going live

1. Pick and register a domain, then attach it to the Vercel project.
2. Set `NEXT_PUBLIC_SITE_URL` to the real domain in Vercel. That alone turns search-engine indexing on (`isDemo` in `src/lib/site.ts`).
3. Remove the two demo-tracking lines at the end of `src/app/layout.tsx` (the comment and the `demo.js` script), then search the repo for `elijahdesent.com/demo.js` and confirm there are no matches.
4. Set `FORM_WEBHOOK_URL` so the forms deliver.
