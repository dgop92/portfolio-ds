import { FeaturedProjectsContent } from "@features/home/definitions/entities/featured-project";
import { SupportedLang } from "@/common/types";
import featuredProjectsContentEn from "../../../../../content/en/featured-projects.json";
import featuredProjectsContentEs from "../../../../../content/es/featured-projects.json";

export function getFeaturedProjectsContent(
  lang: SupportedLang
): Promise<FeaturedProjectsContent> {
  if (lang === SupportedLang.EN) {
    return Promise.resolve(featuredProjectsContentEn);
  }

  if (lang === SupportedLang.ES) {
    return Promise.resolve(featuredProjectsContentEs);
  }

  throw new Error("Unsupported language");
}
