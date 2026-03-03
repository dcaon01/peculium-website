"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "./locale-provider";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const t = useTranslations("Home");
  const { locale, setLocale } = useLocale();
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<{ destroy: () => void } | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (effectRef.current) return;

    let cancelled = false;

    const loadVanta = async () => {
      const THREE = await import("three");
      const NET = (await import("vanta/dist/vanta.net.min")).default;
      if (cancelled || !vantaRef.current) return;

      effectRef.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x5c460e,
        backgroundColor: 0x2d2d2c,
        points: 10,
        maxDistance: 20.0,
        spacing: 16.0,
      });

      if (!cancelled) setReady(true);
    };

    loadVanta();

    return () => {
      cancelled = true;
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <div ref={vantaRef} className="relative flex h-screen flex-col overflow-hidden text-foreground after:pointer-events-none after:absolute after:inset-0 after:z-1 after:backdrop-blur-lg">
      {/* Top bar */}
      <header className={`relative z-10 flex w-full items-center justify-between px-6 py-4 transition-opacity duration-700 sm:px-10 ${ready ? "opacity-100" : "opacity-0"}`}>
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
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 px-6">
        <div className={`flex flex-col items-center gap-5 px-8 py-6 sm:gap-8 sm:px-12 sm:py-10 ${ready ? "" : "opacity-0"}`}>
          <Image
            src="/peculium-logo-transparent.png"
            alt="Peculium"
            width={100}
            height={100}
            priority
            className={`${ready ? "animate-fade-in-up" : "opacity-0"}`}
          />
          <h1 className={`text-5xl font-bold uppercase tracking-widest text-primary drop-shadow-lg sm:text-6xl ${ready ? "animate-fade-in-up [animation-delay:200ms]" : "opacity-0"}`}>
            {t("title")}
          </h1>
          <p className={`text-lg font-light text-foreground drop-shadow-md sm:text-xl ${ready ? "animate-fade-in-up [animation-delay:400ms]" : "opacity-0"}`}>
            {t("motto")}
          </p>
          <p className={`text-sm font-light tracking-wide text-foreground drop-shadow-md sm:text-base ${ready ? "animate-fade-in-up [animation-delay:600ms]" : "opacity-0"}`}>
            {t("comingSoon")}
          </p>
        </div>
      </main>
    </div>
  );
}
