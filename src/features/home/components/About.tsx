/* eslint-disable max-len */
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LayeredWaves from "../../../../public/svgs/layered-about-header.svg";
import { AboutMeItem } from "./AboutMeItem";

const ABOUT_ME_ITEMS = [
  {
    title: "Leadership",
    description:
      "As a leader, I analyze my colleagues and assign them tasks based on their competencies",
  },
  {
    title: "Problem Solving",
    description: "Capabilities to implement real-world problems in code",
  },
  {
    title: "Time management",
    description:
      "To manage my time effectively and avoid working under pressure, I carefully plan and organize the tasks I need to complete",
  },
];

export function About() {
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
          About me
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fuga ullam
          debitis veritatis laborum libero et asperiores sequi, alias sapiente ex
          cupiditate esse minima ipsa nisi voluptatem modi fugit quos ipsam a. Nam
          fugit, fugiat neque ipsam molestiae quas magnam fuga voluptates nihil. Nemo
          eius iure quae, nisi sed maiores qui. Perspiciatis explicabo in vitae labore
          deserunt alias aliquid architecto eveniet
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
        {ABOUT_ME_ITEMS.map((item) => (
          <AboutMeItem key={item.title} {...item} />
        ))}
      </Box>
    </Stack>
  );
}
