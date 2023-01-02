import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { imageShimmer, toBase64 } from "@/lib/imageUtils";
import { FullProject } from "../definitions/entities/projects";

export interface FullProjectCardProps {
  fullProject: FullProject;
}

export function FullProjectCard({ fullProject }: FullProjectCardProps) {
  return (
    <Stack
      sx={{
        width: { xs: "95%", sm: "90%" },
        maxWidth: 1200,
        backgroundColor: "primary.dark",
      }}
    >
      <Box height={400} position="relative">
        <Image
          layout="fill"
          src={fullProject.image}
          alt={`project name: ${fullProject.title}`}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(imageShimmer(250, 250))}`}
          objectFit="cover"
          style={{ overflow: "hidden", filter: "blur(5px)" }}
        />
      </Box>

      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          p: 2,
        }}
      >
        &#8618; {fullProject.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: "light",
          fontSize: "1rem",
          px: 4,
          mb: { xs: 1, sm: 4 },
        }}
      >
        {fullProject.content}
      </Typography>
      <Stack
        direction="row"
        sx={{
          alignSelf: { xs: "start", md: "end" },
          gap: 1,
          m: 2,
          flexWrap: "wrap",
        }}
      >
        {fullProject.tags.map((tag) => (
          <Chip key={tag} label={tag} sx={{ backgroundColor: "primary.light" }} />
        ))}
      </Stack>
    </Stack>
  );
}
