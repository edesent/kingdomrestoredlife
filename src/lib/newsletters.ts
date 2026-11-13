/**
 * Weekly KRL Newsletter archive.
 *
 * Add one issue each week, newest first, after the newsletter PDF has been
 * uploaded to the website's public/newsletters/ folder.
 *
 * Example:
 * {
 *   date: "2026-11-15",
 *   title: "KRL Newsletter — November 15, 2026",
 *   summary: "Sunday Encounter, Let’s Talk Bible, and ministry announcements.",
 *   href: "/newsletters/krl-newsletter-2026-11-15.pdf",
 * },
 *
 * Leave the array empty until the first real edition is ready. The website
 * will display a friendly Coming Soon message instead of a broken download.
 */
export type NewsletterIssue = {
  date: string; // YYYY-MM-DD
  title: string;
  href: string; // Public PDF URL, e.g. /newsletters/krl-newsletter-2026-11-15.pdf
  summary?: string;
};

export const newsletterIssues: NewsletterIssue[] = [];
