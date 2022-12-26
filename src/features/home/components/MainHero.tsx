import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { imageShimmer, toBase64 } from "@/lib/imageUtils";

interface MainHeroProps {
  name: string;
  jobTitle: string;
}

export function MainHero({ name, jobTitle }: MainHeroProps) {
  return (
    <Stack height={560} position="relative" justifyContent="center" alignItems="center">
      <Image
        layout="fill"
        src="/images/data-blocks.png"
        alt="hero image"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(imageShimmer(250, 250))}`}
        objectFit="cover"
        style={{ overflow: "hidden", filter: "blur(5px)" }}
      />
      <Stack sx={{ zIndex: 2 }} alignItems="center">
        <Typography
          variant="h1"
          sx={{
            fontFamily: "titleFontFamily",
            letterSpacing: "0.2rem",
            fontSize: { xs: "3.5rem", sm: "4rem", xl: "4.5rem" },
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "titleFontFamily",
            fontSize: { xs: "1.2rem", sm: "1.375rem", xl: "1.5rem" },
            letterSpacing: "0.1rem",
            color: "#BFBFBF",
          }}
        >
          {jobTitle}
        </Typography>
      </Stack>
    </Stack>
  );
}
