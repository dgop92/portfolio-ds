import { About } from "@features/home/components/About/About";
import { MainHero } from "@features/home/components/MainHero";
import { HeroContent } from "@features/home/definitions/entities/hero";
import { staticHomeRepository } from "@features/home/infrastructure/static-repositories/home.repository.factory";
import type { NextPage } from "next";
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

export async function getStaticProps() {
  const heroContent = await staticHomeRepository.getHeroContent(SupportedLang.EN);
  const aboutContent = await staticHomeRepository.getAboutContent(SupportedLang.EN);

  return {
    props: {
      heroContent,
      aboutContent,
    },
  };
}
