import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { FeaturedProject } from "@features/home/definitions/entities/featured-project";
import Image from "next/image";
import NextLink from "next/link";
import { imageShimmer, toBase64 } from "@/lib/imageUtils";

export interface FeaturedProjectCardProps {
  featuredProject: FeaturedProject;
  viewCompleteProjectMessage: string;
}

export function FeaturedProjectCard({
  featuredProject,
  viewCompleteProjectMessage,
}: FeaturedProjectCardProps) {
  return (
    <Stack
      sx={{
        width: { xs: "95%", sm: "90%" },
        maxWidth: 1200,
        backgroundColor: "primary.dark",
      }}
      component="article"
    >
      <Box height={400} position="relative">
        <Image
          layout="fill"
          src={featuredProject.image}
          alt={`project name: ${featuredProject.title}`}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(imageShimmer(250, 250))}`}
          objectFit="cover"
          style={{ overflow: "hidden", filter: "blur(5px)" }}
        />
      </Box>

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          p: 2,
        }}
      >
        &#8618; {featuredProject.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: "light",
          fontSize: "1rem",
          px: 4,
          mb: { xs: 1, sm: 2 },
        }}
      >
        {featuredProject.description}
      </Typography>
      <NextLink href="/projects" passHref>
        <Button
          sx={{ color: "text.primary", width: "fit-content", my: 1, mx: 4 }}
          variant="text"
          startIcon={<VisibilityIcon />}
        >
          {viewCompleteProjectMessage}
        </Button>
      </NextLink>
      <Stack
        direction="row"
        sx={{
          alignSelf: { xs: "start", md: "end" },
          gap: 1,
          m: 2,
          flexWrap: "wrap",
        }}
      >
        {featuredProject.tags.map((tag) => (
          <Chip key={tag} label={tag} sx={{ backgroundColor: "primary.light" }} />
        ))}
      </Stack>
    </Stack>
  );
}
