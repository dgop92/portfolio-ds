import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { FooterContent } from "../definitions/entities/footer";

interface FooterProps {
  footerContent: FooterContent;
}

export function Footer({ footerContent }: FooterProps) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "primary.dark", p: 4 }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.2rem", sm: "1.35rem" },
          mb: 4,
        }}
      >
        {footerContent.header}
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        gap={4}
        mb={4}
        justifyContent="center"
        flexWrap="wrap"
      >
        {footerContent.contactMeItems.map((item) => (
          <Stack
            direction="row"
            key={item.title}
            alignItems="center"
            component="a"
            href={item.link}
            sx={{
              textDecoration: "none",
              color: "text.primary",
            }}
          >
            <Box sx={{ width: { xs: 32, sm: 36 }, height: { xs: 32, sm: 36 } }}>
              <Image
                width="100%"
                height="100%"
                src={item.icon}
                alt="hero image"
                placeholder="empty"
              />
            </Box>
            <Typography
              variant="body1"
              component="span"
              sx={{ pl: 2, fontSize: { xs: "1rem", sm: "1.1rem" } }}
            >
              {item.title}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Typography
        variant="body2"
        sx={{
          my: 2,
        }}
      >
        {footerContent.copyrightMessage} © {new Date().getFullYear()}
      </Typography>
    </Stack>
  );
}
