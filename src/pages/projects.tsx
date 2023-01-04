import type { GetStaticProps, NextPage } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { ProjectsContent } from "@features/projects/definitions/entities/projects";
import { ProjectsContainer } from "@features/projects/components/ProjectsContainer";
import { staticProjectsRepository } from "@features/projects/infrastructure/static-repositories/projects.static.repository";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LayeredWaves from "../../public/svgs/layered-about-header.svg";
import { getSupportedLang } from "@/common/helpers";

interface ProjectsProps {
  projectsContent: ProjectsContent;
}

const Projects: NextPage<ProjectsProps> = ({ projectsContent }) => {
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
          {projectsContent.header}
        </Typography>
        {/* <LayeredWaves width="100%" /> */}
        <LayeredWaves
          width="100%"
          height="142px"
          viewBox="0 0 1280 142"
          preserveAspectRatio="none"
        />
      </Box>
      <ProjectsContainer projects={projectsContent.projects} />
    </>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const lang = getSupportedLang(locale);
  const projectsContent = await staticProjectsRepository.getProjectsContent(lang);

  return {
    props: {
      projectsContent,
    },
  };
};