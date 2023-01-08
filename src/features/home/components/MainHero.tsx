import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import LanguageIcon from "@mui/icons-material/Language";
import NextLink from "next/link";
import { HeroContent } from "@features/home/definitions/entities/hero";
import { imageShimmer, toBase64 } from "@/common/imageUtils";

interface MainHeroProps {
  heroContent: HeroContent;
}

export function MainHero({ heroContent }: MainHeroProps) {
  return (
    <Stack
      component="header"
      height={560}
      position="relative"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        layout="fill"
        src="/images/data-blocks.png"
        alt="hero image"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(imageShimmer(250, 250))}`}
        objectFit="cover"
        style={{ overflow: "hidden", filter: "blur(5px)" }}
      />
      <Stack
        direction="row"
        alignItems="center"
        component="nav"
        sx={{
          px: 4,
          py: 2,
          zIndex: 2,
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <LanguageIcon fontSize="medium" sx={{ mr: 2 }} />
        <NextLink href="/" passHref locale="es">
          <Typography
            variant="body1"
            sx={{
              p: 1,
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "none",
              color: "text.primary",
            }}
            component="a"
          >
            Es
          </Typography>
        </NextLink>
        <NextLink href="/" passHref locale="en">
          <Typography
            variant="body1"
            sx={{
              p: 1,
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "none",
              color: "text.primary",
            }}
            component="a"
          >
            En
          </Typography>
        </NextLink>
      </Stack>
      <Stack sx={{ zIndex: 2 }} alignItems="center">
        <Typography
          variant="h1"
          sx={{
            fontFamily: "titleFontFamily",
            letterSpacing: "0.2rem",
            fontSize: { xs: "3.5rem", sm: "4rem", xl: "4.5rem" },
          }}
        >
          {heroContent.presentation.name}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "titleFontFamily",
            fontSize: { xs: "1.2rem", sm: "1.375rem", xl: "1.5rem" },
            letterSpacing: "0.1rem",
          }}
        >
          {heroContent.presentation.jobTitle}
        </Typography>
      </Stack>
    </Stack>
  );
}
