import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { AboutMeItem as AboutMeItemContent } from "../../definitions/entities/about";

interface AboutMeItemProps {
  aboutMeItemContent: AboutMeItemContent;
}
export function AboutMeItem({
  aboutMeItemContent: { title, description, svgIconUrl },
}: AboutMeItemProps) {
  return (
    <Stack component="article">
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "primary.main",
            padding: "0.9rem",
          }}
        >
          <Image
            width="80%"
            height="80%"
            src={svgIconUrl}
            alt={`about me ${title} icon`}
            placeholder="empty"
          />
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            pl: 2,
          }}
        >
          {title}
        </Typography>
      </Stack>
      <Divider sx={{ my: 2, borderColor: "primary.light", height: 5 }} />
      <Typography
        variant="body1"
        sx={{
          fontWeight: "light",
          fontSize: "1rem",
          p: 1,
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
}
