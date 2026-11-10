import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { church, isDemo, pastor, siteUrl } from "@/lib/site";
import "./globals.css";

// Events expire on their own; re-render hourly so they drop off without a deploy.
export const revalidate = 3600;

// Fonts are self-hosted so the build never depends on reaching Google.
// Archivo is variable in weight AND width: stretched to 125% it gives the
// wide, heavy capitals of the RESTORED headline.
const archivo = localFont({
  src: [{ path: "../fonts/archivo.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-archivo",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

// Newsreader: Scripture and the church's own words.
const newsreader = localFont({
  src: [{ path: "../fonts/newsreader.woff2", weight: "200 800", style: "normal" }],
  variable: "--font-newsreader",
  display: "swap",
});

const newsreaderItalic = localFont({
  src: [{ path: "../fonts/newsreader-italic.woff2", weight: "200 800", style: "italic" }],
  variable: "--font-newsreader-italic",
  display: "swap",
});

const description = `${church.legalName}: ${church.kind.toLowerCase()} in Charlotte, NC, led by ${pastor.name}. Sunday worship at 12:30 pm and a Wednesday prayer call. ${church.motto}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${church.name} · Charlotte, NC`,
    template: `%s · ${church.name}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: church.name,
    title: `${church.name} · Charlotte, NC`,
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
  appleWebApp: { capable: true, title: church.short },
  robots: isDemo ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#f7f4ef",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: church.legalName,
  alternateName: church.short,
  url: siteUrl,
  description,
  foundingDate: String(church.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: church.street,
    addressLocality: church.city,
    addressRegion: church.stateCode,
    postalCode: church.zip,
    addressCountry: "US",
  },
  sameAs: [church.facebook],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${newsreader.variable} ${newsreaderItalic.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Scroll reveals only hide content once we know JavaScript is running. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Demo tracking (CRM → Demo Tracking). Remove at go-live. */}
        <script async src="https://www.elijahdesent.com/demo.js" />
      </body>
    </html>
  );
}
