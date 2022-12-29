import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

interface AboutMeItemProps {
  title: string;
  description: string;
}
export function AboutMeItem({ title, description }: AboutMeItemProps) {
  return (
    <Stack>
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
          }}
        />
        <Typography
          variant="h5"
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