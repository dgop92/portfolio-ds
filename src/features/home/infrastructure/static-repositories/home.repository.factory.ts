import { HomeRepository } from "@features/home/definitions/repositories/home.repository.def";
import { getHeroContent } from "./hero.static.repository";
import { getAboutContent } from "./about.static.repository";

export const staticHomeRepository: HomeRepository = {
  getHeroContent,
  getAboutContent,
};