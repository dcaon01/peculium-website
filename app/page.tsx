"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "./locale-provider";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const t = useTranslations("Home");
  const { locale, setLocale } = useLocale();
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof Object> | null>(null);

  useEffect(() => {
    if (vantaEffect) return;

    const loadVanta = async () => {
      const THREE = await import("three");
      const NET = (await import("vanta/dist/vanta.net.min")).default;
      if (!vantaRef.current) return;

      const effect = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xc49a2f,
        backgroundColor: 0x2d2d2c,
        points: 10,
        maxDistance: 20.0,
        spacing: 16.0,
      });
      setVantaEffect(effect);
    };

    loadVanta();

    return () => {
      if (vantaEffect) (vantaEffect as { destroy: () => void }).destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="relative flex min-h-screen flex-col text-foreground">
      {/* Top bar */}
      <header className="relative z-10 flex w-full animate-fade-in items-center justify-between px-6 py-4 sm:px-10">
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
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 px-6">
        <Image
          src="/peculium-logo-transparent.png"
          alt="Peculium"
          width={100}
          height={100}
          priority
          className="animate-fade-in-up"
        />
        <h1 className="animate-fade-in-up text-4xl font-bold uppercase tracking-widest text-primary [animation-delay:200ms] sm:text-5xl">
          {t("title")}
        </h1>
        <p className="animate-fade-in-up text-base font-light text-muted-foreground [animation-delay:400ms] sm:text-lg">
          {t("motto")}
        </p>
        <p className="animate-fade-in-up text-xs font-light tracking-wide text-muted-foreground/70 [animation-delay:600ms] sm:text-sm">
          {t("comingSoon")}
        </p>
      </main>
    </div>
  );
}
