import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FeaturedProjectsContent } from "@features/home/definitions/entities/featured-project";
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
      <Stack alignItems="center" pt={4} pb={8}>
        {featuredProjectsContent.featuredProjects.map((project) => (
          <FeaturedProjectCard key={project.title} featuredProject={project} />
        ))}
      </Stack>
    </Stack>
  );
}
