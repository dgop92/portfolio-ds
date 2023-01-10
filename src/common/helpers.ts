import { SupportedLang } from "./types";

export function getSupportedLang(locale: string | undefined) {
  if (locale === "en") {
    return SupportedLang.EN;
  }

  if (locale === "es") {
    return SupportedLang.ES;
  }

  return SupportedLang.EN;
}

export function slugifyTitle(title: string) {
  return title.toLowerCase().replace(/ /g, "-");
}
