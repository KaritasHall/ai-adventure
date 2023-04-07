import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
  padding: "16px 36px",
  marginLeft: "auto",
  marginRight: "auto",

  "@media": {
    "(min-width: 768px)": {
      padding: "20px 40px",
    },
    "(min-width: 1024px)": {
      padding: "24px 48px",
    },
  },
});

export const maxWidth = styleVariants({
  small: {
    maxWidth: 576,
  },
  base: {
    maxWidth: 768,
  },
  wide: {
    maxWidth: 1024,
  },
  widest: {
    maxWidth: 1536,
  },
});
