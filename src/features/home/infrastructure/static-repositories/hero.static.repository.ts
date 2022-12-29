import { HeroContent } from "@features/home/definitions/entities/hero";
import { SupportedLang } from "@/common/types";
import heroContentEn from "../../../../../content/en/hero.json";
import heroContentEs from "../../../../../content/es/hero.json";

export function getHeroContent(lang: SupportedLang): Promise<HeroContent> {
  if (lang === SupportedLang.EN) {
    return Promise.resolve(heroContentEn);
  }

  if (lang === SupportedLang.ES) {
    return Promise.resolve(heroContentEs);
  }

  throw new Error("Unsupported language");
}
