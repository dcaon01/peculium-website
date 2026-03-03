import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = "it";
  return {
    locale,
    timeZone: "Europe/Rome",
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
