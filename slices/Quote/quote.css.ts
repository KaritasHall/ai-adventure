import { style } from "@vanilla-extract/css";

export const quote = style({
  fontFamily: "Georgia, Cambria, Times New Roman, Times, serif",
  fontSize: 24,
  lineHeight: 30,
  fontStyle: "italic",
  "@media": {
    "(min-width: 768px)": {
      fontSize: 30,
      lineHeight: 36,
    },
  },
});
