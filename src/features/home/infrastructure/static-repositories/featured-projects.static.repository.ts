import { FeaturedProjectsContent } from "@features/home/definitions/entities/featured-project";
import { SupportedLang } from "@/common/types";

export async function getFeaturedProjectsContent(
  lang: SupportedLang
): Promise<FeaturedProjectsContent> {
  const content = await import(`../../../../../content/${lang}/featured-projects.json`);
  return content.default;
}
