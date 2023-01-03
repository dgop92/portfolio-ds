import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import { compiler } from "markdown-to-jsx";

const headingOverride = {
  component: Typography,
  props: {
    variant: "h3",
    sx: {
      fontSize: "1.171rem",
      fontWeight: "bold",
      py: 1.5,
    },
  },
};

const overrides = {
  p: {
    component: Typography,
    props: {
      variant: "body1",
      sx: {
        fontWeight: "light",
        fontSize: "1rem",
        py: 1.5,
      },
    },
  },
  ul: {
    component: List,
    props: {
      sx: {
        listStyleType: "disc",
        pl: 4,
        "& .MuiListItem-root": {
          display: "list-item",
        },
      },
    },
  },
  li: {
    component: ListItem,
    props: {
      sx: {
        pl: 0,
        fontWeight: "light",
        fontSize: "1rem",
      },
    },
  },
  a: {
    component: Link,
    props: {
      target: "_blank",
      underline: "always",
      rel: "noopener",
      color: "inherit",
    },
  },
  // all heading tags will be h3, because this markdown is only used for
  // separate the project description into sections
  h1: headingOverride,
  h2: headingOverride,
  h3: headingOverride,
  h4: headingOverride,
  h5: headingOverride,
  h6: headingOverride,
};

export interface MarkdownProps {
  text: string;
}

export const Markdown = ({ text }: MarkdownProps) =>
  compiler(text, { overrides, forceBlock: true });
