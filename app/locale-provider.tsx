"use client";

import { NextIntlClientProvider } from "next-intl";
import { createContext, useContext, useState, useCallback } from "react";
import itMessages from "@/messages/it.json";
import enMessages from "@/messages/en.json";

type Locale = "it" | "en";

const messages = { it: itMessages, en: enMessages };

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
}>({ locale: "it", setLocale: () => {} });

export function useLocale() {
  return useContext(LocaleContext);
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("it");

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.documentElement.lang = l;
  }, []);

  return (
    <LocaleContext value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages[locale]}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext>
  );
}
