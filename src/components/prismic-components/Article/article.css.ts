import { blogThemeContract } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
export const imgContainer = style({
  position: "relative",
});

export const listItem = style({
  width: "60%",
  textAlign: "justify",
});

export const overview = style({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  gap: 18,
});

export const dateText = style({
  fontStyle: "italic",
  letterSpacing: -0.8,
  color: blogThemeContract.accent,
});

export const excerptText = style({
  lineHeight: "1.625",
  fontSize: 16,
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: 18,
    },
  },
});
