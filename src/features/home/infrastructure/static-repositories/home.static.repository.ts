import { IHomeRepository } from "@features/home/definitions/repositories/home.repository.def";
import { getHeroContent } from "./hero.static.repository";
import { getAboutContent } from "./about.static.repository";
import { getFeaturedProjectsContent } from "./featured-projects.static.repository";
import { getFooterContent } from "./footer.static.repository";

export const staticHomeRepository: IHomeRepository = {
  getHeroContent,
  getAboutContent,
  getFeaturedProjectsContent,
  getFooterContent,
};
