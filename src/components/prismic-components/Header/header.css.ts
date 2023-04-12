import { blogThemeContract } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const profileSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 16,
});

export const profileContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "center",
  maxWidth: 600,
  gap: 24,
});

export const navContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  textTransform: "capitalize",
  gap: 36,
  paddingBottom: 36,
});

export const navItem = style({
  fontSize: 18,
  ":hover": {
    color: blogThemeContract.accent,
  },
});

export const imgContainer = style({
  overflow: "hidden",
  position: "relative",
  width: 160,
  height: 160,
  borderRadius: "50%",
});

export const titleContainer = style({
  display: "grid",
  textAlign: "center",
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  gap: 8,
});

export const descriptionText = style({
  fontSize: 20,
  lineHeight: 1.5,
  fontStyle: "italic",
});
