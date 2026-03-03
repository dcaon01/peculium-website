import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Peculium",
    short_name: "Peculium",
    description:
      "Il tuo coach finanziario digitale. Educazione finanziaria, gestione patrimonio e decision support.",
    start_url: "/",
    display: "standalone",
    background_color: "#2d2d2c",
    theme_color: "#c49a2f",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
