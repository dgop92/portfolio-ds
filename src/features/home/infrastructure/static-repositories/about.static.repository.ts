import { AboutContent } from "@features/home/definitions/entities/about";
import { SupportedLang } from "@/common/types";
import aboutContentEn from "../../../../../content/en/about.json";
import aboutContentEs from "../../../../../content/es/about.json";

export function getAboutContent(lang: SupportedLang): Promise<AboutContent> {
  if (lang === SupportedLang.EN) {
    return Promise.resolve(aboutContentEn);
  }

  if (lang === SupportedLang.ES) {
    return Promise.resolve(aboutContentEs);
  }

  throw new Error("Unsupported language");
}
