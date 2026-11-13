/**
 * Everything a pastor or volunteer is likely to change lives in this file:
 * service times, the prayer line, leaders, ministries, events and giving.
 *
 * Any link left as "" shows a tidy "coming soon" card on the site instead of
 * a broken button. Paste the real link in and the card turns into the real thing.
 */

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kingdomrestoredlife.elijahdesent.com";

/** One official KRL seal image shared across all site placements. */
export const krlSeal = "/photos/krl-crest.png";

/** Preview hosts stay out of search, so a demo never competes with the church's real listing. */
export const isDemo = /(\.dfd\.llc|\.vercel\.app|\.elijahdesent\.com)$/.test(new URL(siteUrl).hostname);

export const church = {
  name: "Kingdom Restored Life",
  legalName: "Kingdom Restored Life, Inc.",
  short: "KRL",
  /** The ribbon on the crest. */
  motto: "Restoring Lives Wholly",
  kind: "A multi-cultural, non-denominational, Bible-based ministry",
  /** Where Sunday worship meets (from the church's 2024 Visit Us page). Confirm. */
  host: "the sanctuary of Iglesia Pentecostal Ebenezer",
  street: "100 Ann Marie Drive",
  landmark: "across from Burger King",
  city: "Charlotte",
  state: "North Carolina",
  stateCode: "NC",
  zip: "28217",
  mailing: "P.O. Box 240332, Charlotte, NC 28224",
  lat: 35.14972,
  lng: -80.89745,
  // (980) 416-9817, base64 so it never sits in the HTML. See components/Phone.tsx.
  phoneB64: "OTgwNDE2OTgxNw==",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=100+Ann+Marie+Dr+Charlotte+NC+28217",
  facebook: "https://www.facebook.com/KingdomRestoredLife84",
  /** Doors first opened in Chesnee, SC; relaunched in Charlotte April 28, 2019. */
  founded: 2017,
  opened: "October 14, 2017",
  relaunched: "April 28, 2019",
  covering: "World Kingdom Fresh Fire Ministries International, Inc.",
};

/**
 * The Wednesday prayer call. Number and access code are base64 so they never
 * sit in the HTML; components/Phone.tsx puts them together in the browser.
 * 425-436-6345, access 828066 (from the church's 2024 Visit Us page).
 */
export const prayerLine = {
  numberB64: "NDI1NDM2NjM0NQ==",
  accessB64: "ODI4MDY2",
};

export const pastor = {
  name: "Pastor Terrell C. Hamlet",
  short: "Pastor Hamlet",
  first: "Pastor Terrell",
  title: "Senior Pastor & Founder",
  photo: "/photos/pastor-terrell-hamlet.jpg",
  wife: "Lady DaShan R. Hamlet",
};

/**
 * Online tools. Leave a value as "" until it exists — the site shows a
 * "coming soon" card in its place. See README → "Placeholders".
 */
export const links = {
  /** Cash App cashtag, without the $. From the church's giving page. */
  cashtag: "krestoredlife",
  /** A link where people can watch Sunday worship online (Facebook Live, YouTube, Zoom…). */
  watch: "",
  /** Where past sermons live (a YouTube channel or Facebook videos page). */
  sermons: "",
  /** PayPal giving link, if the church still uses one. */
  paypal: "",
};

export const cashAppUrl = links.cashtag ? `https://cash.app/$${links.cashtag}` : "";

/** Sunday and Tuesday times confirmed by KRL Administration; confirm the older Wednesday listing. */
export const weekly = [
  {
    name: "Sunday Worship",
    day: "Sunday",
    time: "11:00 AM (EST)",
    note: "Praise, prayer and the preached Word. Come for an Upper-Room Experience.",
  },
  {
    name: "Corporate Prayer",
    day: "Tuesday",
    time: "6:30 PM (EST)",
    note: "Join the KRL family in corporate prayer.",
  },
  {
    name: "Let's Talk Bible",
    day: "Tuesday",
    time: "7:15 PM (EST)",
    note: "Come together for Bible study and grow in the Word.",
  },
  {
    name: "Prayer Call",
    day: "Wednesday",
    time: "6:00 pm",
    note: "Dial in from anywhere. The whole church prays together by phone.",
  },
];

/**
 * Dated events hide themselves the day after `endsOn` (Eastern time).
 * Add one: { title, date: "Sat, Nov 21 · 2 pm", endsOn: "2026-11-21", body }
 */
export type ChurchEvent = {
  title: string;
  date: string;
  endsOn: string;
  body: string;
  detail?: string;
};

export const events: ChurchEvent[] = [];

export function upcoming(now = new Date()) {
  const today = now.toLocaleDateString("en-CA", { timeZone: "America/New_York" });
  return events.filter((e) => e.endsOn >= today);
}

/** Days the church marks every year, from its own history. Not dated, so they never expire. */
export const traditions = [
  {
    month: "Every Wednesday",
    title: "Prayer Call",
    body: "6:00 pm, by phone. The War “Roar” Cry intercessors lead, and anyone can dial in.",
  },
  {
    month: "April 28",
    title: "Charlotte Anniversary",
    body: "The day in 2019 KRL relaunched in Charlotte and became a church family here.",
  },
  {
    month: "October 14",
    title: "Church Anniversary",
    body: "KRL first opened its doors on October 14, 2017, in Chesnee, South Carolina.",
  },
];

/** From the church's own About page. */
export const story = [
  {
    year: "2013",
    title: "A vision",
    body: "God gives Pastor Terrell a vision for a ministry that would meet every possible need of God’s people.",
  },
  {
    year: "2017",
    title: "The doors open",
    body: "Four years later, on October 14, KRL opens its doors for the first time, in the Little Africa community of Chesnee, South Carolina.",
  },
  {
    year: "2019",
    title: "Charlotte",
    body: "On April 28 the ministry relaunches in Charlotte, North Carolina, the city it calls home today.",
  },
  {
    year: "2020",
    title: "By phone",
    body: "When the pandemic closed the building, the church kept praying together. The Wednesday prayer call still meets.",
  },
  {
    year: "Covering",
    title: "Apostle Dr. Ralph Long",
    body: "KRL is in covenant with, and under the apostolic covering of, World Kingdom Fresh Fire Ministries International in Baltimore.",
  },
  {
    year: "Today",
    title: "Restoring lives",
    body: "A multi-cultural family in Charlotte, and the Kingdom Comfort & Peace Support Center for youth and families in both Carolinas.",
  },
];

export const values = [
  { name: "Prayer", body: "Everything at KRL starts on our knees, from Sunday worship to the Wednesday prayer call." },
  { name: "Outreach", body: "Going into the world with the good news, and meeting people’s needs where they are." },
  { name: "Fellowship", body: "A family-oriented ministry that shows the agape, unconditional love of Christ." },
  { name: "Christian Education", body: "Study to show thyself approved: Bible study for every believer and every age." },
];

/** From the church's Ministries page. "Join now" goes to /contact with the ministry chosen. */
export const ministries = [
  {
    name: "War “Roar” Cry",
    kind: "Intercessory Ministry",
    body: "The intercessors. They stand in the gap for the church, the city and every request that reaches us.",
  },
  {
    name: "NuMotion",
    kind: "Youth Department",
    body: "We are raising up the next generation to stand for God. Our youth are the next line of believers who will show agape love to a nation.",
    verse: "“Train up a child in the way he should go…” Proverbs 22:6",
  },
  {
    name: "Greeters",
    kind: "Greeter Ministry",
    body: "The first faces you see on Sunday. After your first visit, you are no longer a visitor.",
  },
  {
    name: "Pastoral Support",
    kind: "Serving the pastor",
    body: "Armor-bearers and helpers who hold up the pastor’s arms so the work of the ministry goes forward.",
  },
];

/** The Kingdom Comfort & Peace Support Center. Confirm details with the church. */
export const supportCenter = {
  name: "Kingdom Comfort & Peace Support Center",
  serves: "Youth and families in North and South Carolina",
};

/** The choices in the contact form's "What's it about?" menu. */
export const contactTopics = [
  "Planning a visit",
  "Talking with the pastor",
  "The Kingdom Comfort & Peace Support Center",
  "Joining War “Roar” Cry (intercessors)",
  "Joining NuMotion Youth",
  "Joining the Greeter Ministry",
  "Joining Pastoral Support",
  "Bible study",
  "Giving",
  "Something else",
];

export const nav = [
  { href: "/visit", label: "Visit" },
  { href: "/about", label: "About" },
  { href: "/ministries", label: "Ministries" },
  { href: "/events", label: "Events" },
  { href: "/give", label: "Give" },
];

/** Pages that live in the phone menu and the footer, but not the top bar. */
export const more = [
  { href: "/support-center", label: "Support Center" },
  { href: "/word", label: "Sermons & Study" },
  { href: "/prayer", label: "Prayer" },
  { href: "/contact", label: "Contact" },
];

/** The scriptures the church built its own website on. Used on /word. */
export const scriptures = [
  {
    ref: "Jeremiah 29:11",
    theme: "Our foundation scripture",
    text: "For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope.",
  },
  {
    ref: "Acts 2:38",
    theme: "Our mission",
    text: "Each of you must repent of your sins and turn to God and be baptized in the name of Jesus Christ for the forgiveness of your sins. Then you will receive the gift of the Holy Spirit.",
  },
  {
    ref: "Ephesians 4:11–12",
    theme: "Our leaders",
    text: "And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers; for the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ.",
  },
  {
    ref: "Isaiah 53:5",
    theme: "Prayer and healing",
    text: "He was wounded for our transgressions, He was bruised for our guilt and iniquities; the chastisement needful to obtain peace and well-being for us was upon Him, and with the stripes that wounded Him we are healed and made whole.",
  },
  {
    ref: "2 Timothy 2:15",
    theme: "Christian education",
    text: "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.",
  },
  {
    ref: "Proverbs 19:17",
    theme: "Outreach",
    text: "Whoever is generous to the poor lends to the Lord, and he will repay him for his deed.",
  },
];

/** The next `count` Sundays, for the plan-a-visit picker. */
export function nextSundays(count: number) {
  const out: { value: string; label: string }[] = [];
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  while (out.length < count) {
    if (d.getDay() === 0) {
      out.push({
        value: d.toLocaleDateString("en-CA"),
        label: d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return out;
}
