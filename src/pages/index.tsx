import { About } from "@features/home/components/About/About";
import { MainHero } from "@features/home/components/MainHero";
import { HeroContent } from "@features/home/definitions/entities/hero";
import { staticHomeRepository } from "@features/home/infrastructure/static-repositories/home.repository.factory";
import type { GetStaticProps, NextPage } from "next";
import { AboutContent } from "@features/home/definitions/entities/about";
import { FeaturedProjects } from "@features/home/components/FeaturedProjects/FeaturedProjects";
import { FeaturedProjectsContent } from "@features/home/definitions/entities/featured-project";
import { getSupportedLang } from "@/common/helpers";

interface HomeProps {
  heroContent: HeroContent;
  aboutContent: AboutContent;
  featuredProjectsContent: FeaturedProjectsContent;
}

const Home: NextPage<HomeProps> = ({
  heroContent,
  aboutContent,
  featuredProjectsContent,
}) => {
  return (
    <>
      <MainHero heroContent={heroContent} />
      <About aboutContent={aboutContent} />
      <FeaturedProjects featuredProjectsContent={featuredProjectsContent} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const lang = getSupportedLang(locale);

  const heroContent = await staticHomeRepository.getHeroContent(lang);
  const aboutContent = await staticHomeRepository.getAboutContent(lang);
  const featuredProjectsContent = await staticHomeRepository.getFeaturedProjectsContent(
    lang
  );

  return {
    props: {
      heroContent,
      aboutContent,
      featuredProjectsContent,
    },
  };
};
