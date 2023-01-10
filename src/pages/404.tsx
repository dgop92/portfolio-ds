import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PrimaryOutlinedButtonLink } from "@components/Button";
import { NextPage } from "next";
import NextLink from "next/link";

// TODO: add translations

const Error404: NextPage = () => {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "titleFontFamily",
          letterSpacing: "0.1rem",
          fontSize: { xs: "2.5rem", sm: "3.5rem" },
          py: 2,
          px: 2,
        }}
        align="center"
      >
        Page Not Found, 404
      </Typography>
      <NextLink href="/" passHref>
        <PrimaryOutlinedButtonLink
          sx={{
            fontFamily: "titleFontFamily",
            // px: 4,
            py: 1,
            px: 4,
            cursor: "pointer",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            borderRadius: "1rem",
          }}
        >
          Go Home
        </PrimaryOutlinedButtonLink>
      </NextLink>
    </Stack>
  );
};

export default Error404;
