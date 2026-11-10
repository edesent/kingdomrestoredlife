import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kingdom Restored Life · Charlotte",
    short_name: "KRL",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ef",
    theme_color: "#0b3a12",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
