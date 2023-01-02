import { HeroContent } from "../entities/hero";
import { AboutContent } from "../entities/about";
import { SupportedLang } from "@/common/types";
import { FeaturedProjectsContent } from "../entities/featured-project";

export interface HomeRepository {
  getHeroContent: (lang: SupportedLang) => Promise<HeroContent>;
  getAboutContent: (lang: SupportedLang) => Promise<AboutContent>;
  getFeaturedProjectsContent: (lang: SupportedLang) => Promise<FeaturedProjectsContent>;
}
