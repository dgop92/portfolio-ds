import { AboutContent } from "@features/home/definitions/entities/about";
import { FeaturedProjectsContent } from "@features/home/definitions/entities/featured-project";
import { HeroContent } from "@features/home/definitions/entities/hero";
import { GraphQLClient } from "graphql-request";
import { IHomeRepository } from "@features/home/definitions/repositories/home.repository.def";
import { FooterContent } from "@features/home/definitions/entities/footer";
import {
  HERO_QUERY,
  ABOUT_QUERY,
  FEATURED_PROJECT_QUERY,
  FOOTER_QUERY,
} from "./home-queries";
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

export class HomeDatoCMSRepository implements IHomeRepository {
  constructor(private client: GraphQLClient) {}

  async getHeroContent(lang: SupportedLang): Promise<HeroContent> {
    const result = await this.client.request<{ hero: HeroContentModel }>(HERO_QUERY, {
      locale: lang,
    });
    return fromHeroDatoCMSModelToDomain(result.hero);
  }

  async getAboutContent(lang: SupportedLang): Promise<AboutContent> {
    const result = await this.client.request<{ about: AboutContentModel }>(
      ABOUT_QUERY,
      {
        locale: lang,
      }
    );
    return fromAboutDatoCMSModelToDomain(result.about);
  }

  async getFeaturedProjectsContent(
    lang: SupportedLang
  ): Promise<FeaturedProjectsContent> {
    const result = await this.client.request<{
      featuredProjectContent: FeaturedProjectContentModel;
    }>(FEATURED_PROJECT_QUERY, {
      locale: lang,
    });
    return fromFeaturedProjectContentDatoCMSModelToDomain(
      result.featuredProjectContent
    );
  }

  async getFooterContent(lang: SupportedLang): Promise<FooterContent> {
    const result = await this.client.request<{ footer: FooterContentModel }>(
      FOOTER_QUERY,
      {
        locale: lang,
      }
    );
    return fromFooterDatoCMSModelToDomain(result.footer);
  }
}
