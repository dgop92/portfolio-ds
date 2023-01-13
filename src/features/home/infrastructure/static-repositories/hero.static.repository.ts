import { HeroContent } from "@features/home/definitions/entities/hero";
import { SupportedLang } from "@/common/types";

export async function getHeroContent(lang: SupportedLang): Promise<HeroContent> {
  const content = await import(`../../../../../content/${lang}/hero.json`);
  return content.default;
}
