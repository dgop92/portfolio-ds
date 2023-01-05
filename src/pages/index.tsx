import { About } from "@features/home/components/About/About";
import { MainHero } from "@features/home/components/MainHero";
import { HeroContent } from "@features/home/definitions/entities/hero";
import { staticHomeRepository } from "@features/home/infrastructure/static-repositories/home.repository.factory";
import type { GetStaticProps, NextPage } from "next";
import { AboutContent } from "@features/home/definitions/entities/about";
import { FeaturedProjects } from "@features/home/components/FeaturedProjects/FeaturedProjects";
import { FeaturedProjectsContent } from "@features/home/definitions/entities/featured-project";
import { FooterContent } from "@features/home/definitions/entities/footer";
import { Footer } from "@features/home/components/Footer";
import { getSupportedLang } from "@/common/helpers";

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

  const heroContent = await staticHomeRepository.getHeroContent(lang);
  const aboutContent = await staticHomeRepository.getAboutContent(lang);
  const featuredProjectsContent = await staticHomeRepository.getFeaturedProjectsContent(
    lang
  );
  const footerContent = await staticHomeRepository.getFooterContent(lang);

  return {
    props: {
      heroContent,
      aboutContent,
      featuredProjectsContent,
      footerContent,
    },
  };
};
