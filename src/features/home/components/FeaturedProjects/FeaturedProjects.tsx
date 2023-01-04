import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FeaturedProjectsContent } from "@features/home/definitions/entities/featured-project";
import NextLink from "next/link";
import { PrimaryOutlinedButtonLink } from "@components/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FeaturedProjectCard } from "./FeaturedProjectCard";

export interface FeaturedProjectsProps {
  featuredProjectsContent: FeaturedProjectsContent;
}

export function FeaturedProjects({ featuredProjectsContent }: FeaturedProjectsProps) {
  return (
    <Stack my={8}>
      <Box sx={{ width: "90%", maxWidth: 1300, alignSelf: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "titleFontFamily",
            letterSpacing: "0.1rem",
            fontSize: { xs: "1.8rem", sm: "2rem" },
            pl: 2,
          }}
        >
          {featuredProjectsContent.header}
        </Typography>
      </Box>
      <Stack alignItems="center" pt={4} pb={8} gap={2}>
        {featuredProjectsContent.featuredProjects.map((project) => (
          <FeaturedProjectCard
            key={project.title}
            featuredProject={project}
            viewCompleteProjectMessage={
              featuredProjectsContent.viewCompleteProjectMessage
            }
          />
        ))}
      </Stack>
      <Stack direction="row" alignSelf="center" sx={{ width: "90%", maxWidth: 1200 }}>
        <NextLink href="/projects" passHref>
          <PrimaryOutlinedButtonLink
            sx={{
              fontFamily: "titleFontFamily",
              // px: 4,
              py: 1,
              cursor: "pointer",
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
              borderRadius: "1rem",
            }}
            fullWidth
            endIcon={<ChevronRightIcon />}
          >
            {featuredProjectsContent.viewAllButton}
          </PrimaryOutlinedButtonLink>
        </NextLink>
      </Stack>
    </Stack>
  );
}
