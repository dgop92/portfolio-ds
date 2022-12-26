import { About } from "@features/home/components/About";
import { MainHero } from "@features/home/components/MainHero";
import Stack from "@mui/material/Stack";
import type { NextPage } from "next";
//  sx={{ overflowX: "hidden" }}

const Home: NextPage = () => {
  return (
    <>
      <MainHero jobTitle="Python data science" name="Diego Puche" />
      <About />
    </>
  );
};

export default Home;
