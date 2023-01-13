import { About } from "@features/home/components/About/About";
import { MainHero } from "@features/home/components/MainHero";
import { HeroContent } from "@features/home/definitions/entities/hero";
import type { GetStaticProps, NextPage } from "next";
import { AboutContent } from "@features/home/definitions/entities/about";
import { FeaturedProjects } from "@features/home/components/FeaturedProjects/FeaturedProjects";
import { FeaturedProjectsContent } from "@features/home/definitions/entities/featured-project";
import { FooterContent } from "@features/home/definitions/entities/footer";
import { Footer } from "@features/home/components/Footer";
import { homeRepositoryFactory } from "@features/home/factories/home.repository.factory";
import { getSupportedLang } from "@/common/helpers";
import { APP_ENV_VARS } from "@/common/config/app-env-vars";
import { getAppLogger } from "@/common/logging/logger-factory";

const myLogger = getAppLogger().createLogger(__filename);

interface HomeProps {
  heroContent: HeroContent;
  aboutContent: AboutContent;
  featuredProjectsContent: FeaturedProjectsContent;
  footerContent: FooterContent;
}

const Home: NextPage<HomeProps> = ({
  heroContent,
  aboutContent,
  featuredProjectsContent,
  footerContent,
}) => {
  return (
    <>
      <MainHero heroContent={heroContent} />
      <About aboutContent={aboutContent} />
      <FeaturedProjects featuredProjectsContent={featuredProjectsContent} />
      <Footer footerContent={footerContent} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const lang = getSupportedLang(locale);

  const repository = homeRepositoryFactory(APP_ENV_VARS.repositoryProvider);

  myLogger.info(`fetching home content for language: ${lang}`, { lang });

  const heroContent = await repository.getHeroContent(lang);
  const aboutContent = await repository.getAboutContent(lang);
  const featuredProjectsContent = await repository.getFeaturedProjectsContent(lang);
  const footerContent = await repository.getFooterContent(lang);

  myLogger.info(`fetched home content for language: ${lang}`, { lang });

  return {
    props: {
      heroContent,
      aboutContent,
      featuredProjectsContent,
      footerContent,
    },
  };
};
