import { About } from "@features/home/components/About/About";
import { MainHero } from "@features/home/components/MainHero";
import { HeroContent } from "@features/home/definitions/entities/hero";
import { staticHomeRepository } from "@features/home/infrastructure/static-repositories/home.repository.factory";
import type { GetStaticProps, NextPage } from "next";
import { AboutContent } from "@features/home/definitions/entities/about";
import { SupportedLang } from "@/common/types";

interface HomeProps {
  heroContent: HeroContent;
  aboutContent: AboutContent;
}

const Home: NextPage<HomeProps> = ({ heroContent, aboutContent }) => {
  return (
    <>
      <MainHero heroContent={heroContent} />
      <About aboutContent={aboutContent} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let lang: SupportedLang;
  switch (locale) {
    case "en":
      lang = SupportedLang.EN;
      break;
    case "es":
      lang = SupportedLang.ES;
      break;
    default:
      lang = SupportedLang.EN;
      break;
  }

  const heroContent = await staticHomeRepository.getHeroContent(lang);
  const aboutContent = await staticHomeRepository.getAboutContent(lang);

  return {
    props: {
      heroContent,
      aboutContent,
    },
  };
};
