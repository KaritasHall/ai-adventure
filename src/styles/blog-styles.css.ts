import { style } from "@vanilla-extract/css";
import { blogThemeContract } from "./themes.css";

export const blogBackdrop = style({
  backgroundColor: blogThemeContract.background,
  minHeight: "100vh",
});

export const blogTitle = style({
  marginBottom: 4,
  fontSize: 18,
  fontWeight: "600",

  "@media": {
    "(min-width: 768px)": {
      fontSize: 20,
    },
  },
});

export const blogDate = style({
  fontStyle: "italic",
  letterSpacing: -0.08,
});

export const blogLink = style({
  fontSize: 16,
  letterSpacing: 0.4,
  fontWeight: "600",
  color: blogThemeContract.accent,
});

export const articleContainer = style({
  paddingBottom: 10,
  paddingTop: 20,
});

export const articleTitle = style({
  marginBottom: 12,
  fontSize: 24,
  fontWeight: "600",
  "@media": {
    "(min-width: 768px)": {
      fontSize: 36,
    },
  },
});

export const articleDate = style({
  fontStyle: "italic",
  color: blogThemeContract.accent,
});

export const latestPostsSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderTop: "1px solid black",
  paddingTop: 36,
});

export const latestPostsContainer = style({
  width: "100%",
});

export const latestPostsHeading = style({
  marginBottom: 30,
  fontSize: 24,
  fontWeight: "400",
});

export const latestPostsList = style({
  display: "grid",
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  gap: 48,
  paddingBottom: 48,
});

// index.tsx

export const indexArticleList = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  gap: 60,
});
