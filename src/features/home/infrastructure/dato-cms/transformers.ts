import { AboutContent } from "@features/home/definitions/entities/about";
import { FeaturedProjectsContent } from "@features/home/definitions/entities/featured-project";
import { FooterContent } from "@features/home/definitions/entities/footer";
import { HeroContent } from "@features/home/definitions/entities/hero";
import { AboutContentModel } from "./models/about.datocms.model";
import { FeaturedProjectContentModel } from "./models/featured-project.datocms.model";
import { HeroContentModel } from "./models/hero.datocms.model";
import { FooterContentModel } from "./models/footer.datocms.model";

export function fromHeroDatoCMSModelToDomain(model: HeroContentModel): HeroContent {
  return {
    presentation: {
      name: model.name,
      jobTitle: model.jobTitle,
    },
  };
}

export function fromAboutDatoCMSModelToDomain(model: AboutContentModel): AboutContent {
  return {
    header: model.header,
    mainDescription: model.mainDescription,
    aboutMeItems: model.aboutMeItem.map((item) => ({
      title: item.title,
      description: item.description,
      svgIconUrl: item.svgIcon.url,
    })),
  };
}

export function fromFeaturedProjectContentDatoCMSModelToDomain(
  model: FeaturedProjectContentModel
): FeaturedProjectsContent {
  return {
    header: model.header,
    viewAllButton: model.viewAllButton,
    viewCompleteProjectMessage: model.viewCompleteProjectMessage,
    featuredProjects: model.featuredProject.map((project) => ({
      title: project.title,
      description: project.description,
      image: project.image.url,
      tags: project.tag.map((tag) => tag.name),
    })),
  };
}

export function fromFooterDatoCMSModelToDomain(
  model: FooterContentModel
): FooterContent {
  return {
    header: model.header,
    copyrightMessage: model.copyrightMessage,
    contactMeItems: model.contactMeItem.map((item) => ({
      title: item.title,
      link: item.link,
      icon: item.icon.url,
    })),
  };
}
