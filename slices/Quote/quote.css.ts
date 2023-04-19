import { blogThemeContract } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const quote = style({
  fontFamily: "Georgia, Cambria, Times New Roman, Times, serif",
  fontSize: 16,
  lineHeight: 2,
  fontStyle: "italic",
  color: blogThemeContract.heading,
  paddingTop: 20,
  paddingBottom: 20,
  "@media": {
    "(min-width: 768px)": {
      fontSize: 22,
    },
  },
});
