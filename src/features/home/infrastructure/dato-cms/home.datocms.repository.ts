import { AboutContent } from "@features/home/definitions/entities/about";
import { FeaturedProjectsContent } from "@features/home/definitions/entities/featured-project";
import { HeroContent } from "@features/home/definitions/entities/hero";
import { GraphQLClient } from "graphql-request";
import { IHomeRepository } from "@features/home/definitions/repositories/home.repository.def";
import { FooterContent } from "@features/home/definitions/entities/footer";
import { HOME_QUERY } from "./home-queries";
import { AboutContentModel } from "./models/about.datocms.model";
import { FeaturedProjectContentModel } from "./models/featured-project.datocms.model";
import { HeroContentModel } from "./models/hero.datocms.model";
import { SupportedLang } from "@/common/types";
import {
  fromHeroDatoCMSModelToDomain,
  fromAboutDatoCMSModelToDomain,
  fromFeaturedProjectContentDatoCMSModelToDomain,
  fromFooterDatoCMSModelToDomain,
} from "./transformers";
import { FooterContentModel } from "./models/footer.datocms.model";

export type HomeContent = {
  hero: HeroContentModel;
  about: AboutContentModel;
  featuredProjectContent: FeaturedProjectContentModel;
  footer: FooterContentModel;
};

type Section = keyof HomeContent;

export type HomeContentLocalized = {
  [key in SupportedLang]: HomeContent | null;
};

export class HomeDatoCMSRepository implements IHomeRepository {
  private homeContentLocalized: HomeContentLocalized;

  constructor(private client: GraphQLClient) {
    this.homeContentLocalized = {
      en: null,
      es: null,
    };
  }

  private async getSectionContent<S extends Section>(
    section: S,
    lang: SupportedLang
  ): Promise<HomeContent[S]> {
    if (this.homeContentLocalized[lang] === null) {
      const result = await this.client.request<HomeContent>(HOME_QUERY, {
        locale: lang,
      });
      this.homeContentLocalized[lang] = result;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.homeContentLocalized[lang]![section];
  }

  async getHeroContent(lang: SupportedLang): Promise<HeroContent> {
    const heroContentModel = await this.getSectionContent("hero", lang);
    return fromHeroDatoCMSModelToDomain(heroContentModel);
  }

  async getAboutContent(lang: SupportedLang): Promise<AboutContent> {
    const aboutContentModel = await this.getSectionContent("about", lang);
    return fromAboutDatoCMSModelToDomain(aboutContentModel);
  }

  async getFeaturedProjectsContent(
    lang: SupportedLang
  ): Promise<FeaturedProjectsContent> {
    const featuredProjectsContentModel = await this.getSectionContent(
      "featuredProjectContent",
      lang
    );
    return fromFeaturedProjectContentDatoCMSModelToDomain(featuredProjectsContentModel);
  }

  async getFooterContent(lang: SupportedLang): Promise<FooterContent> {
    const footerContentModel = await this.getSectionContent("footer", lang);
    return fromFooterDatoCMSModelToDomain(footerContentModel);
  }
}
