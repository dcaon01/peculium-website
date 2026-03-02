"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "./locale-provider";

export default function Home() {
  const t = useTranslations("Home");
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Top bar */}
      <header className="flex w-full animate-fade-in items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="mailto:info@peculium.it"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          info@peculium.it
        </a>
        <div className="flex gap-1 text-sm">
          <button
            onClick={() => setLocale("it")}
            className={`rounded px-2 py-1 transition-colors ${
              locale === "it"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            IT
          </button>
          <button
            onClick={() => setLocale("en")}
            className={`rounded px-2 py-1 transition-colors ${
              locale === "en"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            EN
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6">
        <Image
          src="/peculium-logo-transparent.png"
          alt="Peculium"
          width={100}
          height={100}
          priority
          className="animate-fade-in-up"
        />
        <h1 className="animate-fade-in-up text-2xl font-semibold tracking-tight text-primary [animation-delay:200ms] sm:text-3xl">
          {t("comingSoon")}
        </h1>
        <p className="animate-fade-in-up text-base font-light text-muted-foreground [animation-delay:400ms] sm:text-lg">
          {t("motto")}
        </p>
        {/* <a
          href={`mailto:info@peculium.it?subject=${encodeURIComponent(t("emailSubject"))}&body=${encodeURIComponent(t("emailBody"))}`}
          className="animate-fade-in-up rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity [animation-delay:600ms] hover:opacity-90"
        >
          {t("cta")}
        </a> */}
      </main>
    </div>
  );
}
