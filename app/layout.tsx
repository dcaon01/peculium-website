import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { LocaleProvider } from "./locale-provider";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peculium - Costruisci il tuo benessere",
  description:
    "Peculium è il tuo coach finanziario digitale. Ti aiuta a costruire e proteggere il tuo patrimonio con educazione finanziaria, gestione e decision support. | Peculium is your digital financial coach. It helps you build and protect your wealth with financial education, management and decision support.",
  keywords: [
    "Peculium",
    "fintech",
    "fintech Italia",
    "educazione finanziaria",
    "gestione patrimonio",
    "coach finanziario",
    "app finanza personale",
    "risparmio",
    "investimenti",
    "pianificazione finanziaria",
    "financial education",
    "wealth management",
    "financial coach",
    "personal finance app",
    "Italian fintech",
    "savings",
    "investments",
  ],
  authors: [{ name: "Peculium" }],
  creator: "Peculium",
  metadataBase: new URL("https://peculium.it"),
  alternates: {
    canonical: "/",
    languages: {
      "it-IT": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    alternateLocale: "en_US",
    url: "https://peculium.it",
    siteName: "Peculium",
    title: "Peculium - Costruisci il tuo benessere",
    description:
      "Il tuo coach finanziario digitale. Educazione finanziaria, gestione patrimonio e decision support in un'unica app.",
    images: [
      {
        url: "/peculium-logo-rounded.png",
        width: 512,
        height: 512,
        alt: "Peculium Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Peculium - Costruisci il tuo benessere",
    description:
      "Il tuo coach finanziario digitale. Educazione finanziaria, gestione patrimonio e decision support in un'unica app.",
    images: ["/peculium-logo-rounded.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark">
      <body className={`${poppins.className} antialiased`}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
