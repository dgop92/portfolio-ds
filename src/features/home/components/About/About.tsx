/* eslint-disable max-len */
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AboutContent } from "@features/home/definitions/entities/about";
import LayeredWaves from "../../../../../public/svgs/layered-about-header.svg";
import { AboutMeItem } from "./AboutMeItem";

export interface AboutProps {
  aboutContent: AboutContent;
}

export function About({ aboutContent }: AboutProps) {
  return (
    <Stack>
      <Box position="relative">
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
          {aboutContent.header}
        </Typography>
        {/* <LayeredWaves width="100%" /> */}
        <LayeredWaves
          width="100%"
          height="142px"
          viewBox="0 0 1280 142"
          preserveAspectRatio="none"
        />
      </Box>
      <Box sx={{ maxWidth: 1000, width: "85%", alignSelf: "center", my: 12 }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "light",
            fontSize: { xs: "1.1rem", sm: "1.4rem" },
          }}
          align="center"
        >
          {aboutContent.mainDescription}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "85%",
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(auto-fill, minmax(300px, 1fr))",
            sm: "repeat(auto-fill, minmax(450px, 1fr))",
          },
          gap: 4,
          alignSelf: "center",
          mt: 4,
          mb: 8,
        }}
      >
        {aboutContent.aboutMeItems.map((item) => (
          <AboutMeItem key={item.title} {...item} />
        ))}
      </Box>
    </Stack>
  );
}
