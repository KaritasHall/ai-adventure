import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  lineHeight: "inherit",
  fontFamily: "Lato, sans-serif",
  backgroundColor: "#F9EBEA ",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

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

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("fieldset", {
  margin: 0,
  padding: 0,
});

globalStyle("button", {
  cursor: "pointer",
});
