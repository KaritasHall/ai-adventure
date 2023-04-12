import { style, keyframes } from "@vanilla-extract/css";
import { themeContract } from "./themes.css";

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
    color: themeContract.player,
  },
});

export const mainSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "monospace",
  backgroundColor: themeContract.background,
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
    backgroundColor: themeContract.player,
  },

  "::-webkit-scrollbar-thumb": {
    backgroundColor: themeContract.storyteller,
    borderRadius: "2px",
  },
});

export const typing = keyframes({
  from: { width: 0 },
  to: { width: "100%" },
});

export const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const assistant = style({
  color: themeContract.storyteller,
  paddingBlock: 10,
});

export const latestAssistantMessage = style({
  color: themeContract.storyteller,
  paddingBlock: 10,
  animation: `${fadeIn} 0.5s ease-in`,
});

export const user = style({
  color: themeContract.player,
});

export const playerInputContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: 4,
});

export const typePrompt = style({
  color: themeContract.player,
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
  color: themeContract.player,
  fontFamily: "monospace",
  fontSize: 18,
  width: 300,
});

export const loadingMessage = style({
  color: "#FF00FF",
  paddingTop: 15,
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

// Word animations

export const flickerAnimation = keyframes({
  "0%": { opacity: 1 },
  "25%": { opacity: 0.8 },
  "50%": { opacity: 0.6 },
  "75%": { opacity: 0.9 },
  "100%": { opacity: 0.7 },
});

export const glowAnimation = keyframes({
  "0%": {
    textShadow:
      "0 0 5px #ffcc66, 0 0 10px #ffcc66, 0 0 20px #ffcc66, 0 0 40px #ffcc66",
  },
  "100%": {
    textShadow:
      "0 0 10px #ffcc66, 0 0 20px #ffcc66, 0 0 40px #ffcc66, 0 0 80px #ffcc66",
  },
});

export const rustleAnimation = keyframes({
  "0%": {
    transform: "rotate(0deg) translateX(0)",
  },
  "20%": {
    transform: "rotate(10deg) translateX(2px)",
  },
  "40%": {
    transform: "rotate(-10deg) translateX(-2px)",
  },
  "60%": {
    transform: "rotate(5deg) translateX(1px)",
  },
  "80%": {
    transform: "rotate(-5deg) translateX(-1px)",
  },
  "100%": {
    transform: "rotate(0deg) translateX(0)",
  },
});

export const you = style({
  // for testing!
});

export const flicker = style({
  animation: `${flickerAnimation} 2s infinite, ${glowAnimation} infinite alternate`,
});

export const glow = style({
  animation: `${glowAnimation} 0.5s infinite alternate`,
});

export const rustle = style({
  display: "inline-block",
  color: themeContract.player,
  animation: `${rustleAnimation} 2s infinite`,
});
