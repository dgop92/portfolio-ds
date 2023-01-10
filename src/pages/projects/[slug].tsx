import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { ProjectPageContent } from "@features/projects/definitions/entities/projects";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { projectsRepositoryFactory } from "@features/projects/factories/projects.repository.factory";
import { ParsedUrlQuery } from "querystring";
import { FullProjectCard } from "@features/projects/components/FullProjectCard";
import LayeredWaves from "../../../public/svgs/layered-about-header.svg";
import { getSupportedLang } from "@/common/helpers";
import { SupportedLang } from "@/common/types";

interface ProjectPageProps {
  projectContent: ProjectPageContent;
}

const ProjectPage: NextPage<ProjectPageProps> = ({ projectContent }) => {
  return (
    <>
      <Box position="relative">
        <NextLink href="/" passHref>
          <IconButton
            aria-label="delete"
            sx={{
              color: "white",
              position: "absolute",
              top: "45%",
              transform: "translateY(-45%)",
              left: "1rem",
            }}
          >
            <ArrowBackIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </NextLink>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "titleFontFamily",
            letterSpacing: "0.1rem",
            fontSize: { xs: "1.8rem", sm: "2rem" },
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          align="center"
        >
          {projectContent.header}
        </Typography>
        {/* <LayeredWaves width="100%" /> */}
        <LayeredWaves
          width="100%"
          height="142px"
          viewBox="0 0 1280 142"
          preserveAspectRatio="none"
        />
      </Box>
      <Box my={4} display="flex" justifyContent="center">
        <FullProjectCard fullProject={projectContent.project} />
      </Box>
    </>
  );
};

export default ProjectPage;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<ProjectPageProps, IParams> = async ({
  locale,
  params,
}) => {
  const lang = getSupportedLang(locale);
  const repository = projectsRepositoryFactory("static");
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const projectSlug = params!.slug!;
  const projectPageContent = await repository.getPageContent(projectSlug, lang);

  return {
    props: {
      projectContent: projectPageContent,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const repository = projectsRepositoryFactory("static");
  const projects = await repository.getProjects(SupportedLang.EN);
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
