import { style, keyframes, layer } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 20,
  width: "82%",
});

export const gameTitle = style({
  padding: 30,
  fontSize: 36,
  color: "white",
});

export const blogLink = style({
  color: "white",
  fontSize: 18,
  fontFamily: "Lato, sans-serif",
  ":hover": {
    color: "hotpink",
  },
});

export const gameContainer = style({
  backgroundColor: "#0e0e10",
});

export const mainSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "monospace",
  backgroundColor: "black",
  minHeight: "100vh",
});

export const gameContent = style({
  marginInline: 180,
  padding: 28,
  fontSize: 18,
  lineHeight: 1.5,
  height: "60vh",
  overflow: "auto",
  "::-webkit-scrollbar": {
    width: "8px",
    backgroundColor: "pink",
  },

  "::-webkit-scrollbar-thumb": {
    backgroundColor: "hotpink",
    borderRadius: "2px",
  },
});

export const typing = keyframes({
  from: { width: 0 },
  to: { width: "100%" },
});

export const assistant = style({
  color: "#FFC107",
  paddingBlock: 10,
});

export const user = style({
  color: "white",
});

export const playerInputContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: 4,
});

export const typePrompt = style({
  color: "white",
  fontSize: 28,
  paddingTop: 2,
});

export const playerInput = style({
  border: "none",
  outline: "none",
  borderRadius: 4,
  marginTop: 10,
  marginBottom: 10,
  backgroundColor: "transparent",
  color: "white",
  fontFamily: "monospace",
  fontSize: 18,
  width: 300,
});

export const loadingMessage = style({
  color: "#FF00FF",
  overflow: "hidden",
  whiteSpace: "nowrap",
  animation: `${typing} 3.5s steps(40, end)`,
});
export const errorMessage = style({
  color: "red",
  overflow: "hidden",
  whiteSpace: "nowrap",
  animation: `${typing} 3.5s steps(40, end)`,
});
