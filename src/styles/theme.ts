/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createTheme, alpha } from "@mui/material";
// eslint-disable-next-line import/no-extraneous-dependencies
import { SxProps } from "@mui/system";

declare module "@mui/material/styles/createTypography" {
  interface FontStyle {
    titleFontFamily: string;
  }
}

// TODO: dark and light colors are assumptions, change with the real one
export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#22416F",
      light: "#2D5794",
      dark: "#1F2232",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#1E1F22",
      paper: "#0C0C0E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#FDFDFD",
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    titleFontFamily: '"Bebas Neue", "cursive"',
  },

  // Disable some google default styles

  components: {
    MuiButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
        // @ts-ignore
        containedPrimary: ({ theme }) => ({
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.85),
          },
        }),
        // @ts-ignore
        containedSecondary: ({ theme }) => ({
          "&:hover": {
            backgroundColor: alpha(theme.palette.secondary.main, 0.85),
          },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        // @ts-ignore
        colorPrimary: ({ theme }) => ({
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.85),
          },
        }),
        // @ts-ignore
        colorSecondary: ({ theme }) => ({
          "&:hover": {
            backgroundColor: alpha(theme.palette.secondary.main, 0.85),
          },
        }),
      },
    },
  },
});

export type MuiTheme = typeof muiTheme;
export type SxThemeProps = SxProps<MuiTheme>;
