import { AboutContent } from "@features/home/definitions/entities/about";
import { SupportedLang } from "@/common/types";

export async function getAboutContent(lang: SupportedLang): Promise<AboutContent> {
  const content = await import(`../../../../../content/${lang}/about.json`);
  return content.default;
}
