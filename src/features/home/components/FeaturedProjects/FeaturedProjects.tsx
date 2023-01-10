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
    <Stack direction="row" my={8} component="section" justifyContent="center">
      <Box sx={{ width: { xs: "95%", sm: "90%" }, maxWidth: 1500 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "titleFontFamily",
            letterSpacing: "0.1rem",
            fontSize: { xs: "1.8rem", sm: "2rem" },
            pl: 2,
          }}
        >
          {featuredProjectsContent.header}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(auto-fill, minmax(300px, 1fr))",
              sm: "repeat(auto-fill, minmax(450px, 1fr))",
            },
            gap: 2,
            alignSelf: "center",
            py: 4,
          }}
        >
          {featuredProjectsContent.featuredProjects.map((project) => (
            <FeaturedProjectCard
              key={project.title}
              featuredProject={project}
              viewCompleteProjectMessage={
                featuredProjectsContent.viewCompleteProjectMessage
              }
            />
          ))}
        </Box>
      </Box>
    </Stack>
  );
}
