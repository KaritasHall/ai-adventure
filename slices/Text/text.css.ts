import { style } from "@vanilla-extract/css";

export const text = style({
  fontSize: 16,
  lineHeight: 1.6,
  textAlign: "justify",

  "@media": {
    "(min-width: 768px)": {
      lineHeight: 2,
      fontSize: 20,
    },
  },
});
