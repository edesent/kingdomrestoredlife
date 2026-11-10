import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // The parent CRM folder has its own lockfile; pin the root so Turbopack
  // does not pick the wrong one.
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      { source: "/giving", destination: "/give", permanent: true },
      { source: "/calendar", destination: "/events", permanent: true },
      { source: "/history", destination: "/about", permanent: true },
      { source: "/pastor", destination: "/about#pastor", permanent: true },
      { source: "/pastorinfo.html", destination: "/about#pastor", permanent: true },
      { source: "/history.html", destination: "/about", permanent: true },
      { source: "/ministries.html", destination: "/about", permanent: true },
      { source: "/calendar.html", destination: "/events", permanent: true },
      { source: "/contactus.html", destination: "/contact", permanent: true },
      { source: "/aboutus.html", destination: "/visit", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/plan-a-visit", destination: "/visit", permanent: true },
    ];
  },
};

export default nextConfig;
