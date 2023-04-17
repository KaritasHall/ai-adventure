import { globalStyle } from "@vanilla-extract/css";
import { blogThemeContract } from "./themes.css";

globalStyle("html, body", {
  margin: 0,
  lineHeight: "inherit",
  fontFamily: "Lato, sans-serif",
  backgroundColor: blogThemeContract.background,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

// Applying blog theme styles
globalStyle("p", {
  color: blogThemeContract.text,
});

// 'globalStyle(`${parent} h1`, {

globalStyle("#article p > a", {
  color: blogThemeContract.accent,
  textDecoration: "underline",
});

globalStyle("#article ul > li", {
  color: blogThemeContract.text,
  listStyle: "disc",
});

globalStyle("#article p > a:hover", {
  color: blogThemeContract.heading,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  color: blogThemeContract.heading,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
  transition: "color 0.2s ease-in-out",
});

// Reset and normalize styles

globalStyle("blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre", {
  margin: 0,
});

globalStyle("ol, ul", {
  listStyle: "none",
  margin: 0,
  padding: 0,
});

globalStyle("img, svg, video, canvas, audio, iframe, embed, object", {
  display: "block",
  verticalAlign: "middle",
});

globalStyle("img, video", {
  maxWidth: "100%",
  height: "auto",
});

globalStyle("*, ::before, ::after", {
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: "black",
});

globalStyle("fieldset", {
  margin: 0,
  padding: 0,
});

globalStyle("button", {
  cursor: "pointer",
});
