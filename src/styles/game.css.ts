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
  padding: 10,
  marginTop: 5,
  marginInline: 180,
  fontSize: 16,
  lineHeight: 1.5,
  height: "30vh",
  width: "80%",
  overflow: "auto",
  "::-webkit-scrollbar": {
    width: "8px",
    backgroundColor: themeContract.player,
  },

  "::-webkit-scrollbar-thumb": {
    backgroundColor: themeContract.storyteller,
    borderRadius: "2px",
  },

  "@media": {
    "screen and (min-width: 1024px)": {
      padding: 16,
      marginTop: 8,
      fontSize: 18,
      lineHeight: 1.5,
      height: "40vh",
      width: "70%",
    },

    "screen and (min-width: 1660px)": {
      fontSize: 18,
      lineHeight: 1.5,
      height: "50vh",
      width: "75%",
    },
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

export const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
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
  width: 500,
});

export const loadingMessageContainer = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

export const loadingMessage = style({
  color: "#F5F5F5",
  paddingTop: 15,
  overflow: "hidden",
  whiteSpace: "normal",
  animation: `${fadeIn} 5s steps(40, end) forwards`,
  textAlign: "center",
  fontSize: 14,
  "@media": {
    "screen and (min-width: 420px)": {
      fontSize: 16,
      whiteSpace: "nowrap",
      animation: `${typing} 5s steps(40, end) forwards`,
    },
    "screen and (min-width: 768px)": {
      fontSize: 18,
    },
  },
});

export const errorMessage = style({
  color: "red",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const loadingImage = style({
  margin: "none",
  padding: "none",
  width: 100,
  "@media": {
    "screen and (min-width: 420px)": {
      width: 200,
    },
    "screen and (min-width: 768px)": {
      width: 256,
    },
  },
});

export const loadingImageFadeout = style({
  animation: `${fadeOut} 2s`,
  animationFillMode: "forwards",
});

export const generatedImage = style({
  animation: `${fadeIn} 5s `,
  width: 100,
  marginBottom: 20,
  "@media": {
    "screen and (min-width: 420px)": {
      width: 200,
    },
    "screen and (min-width: 768px)": {
      width: 256,
    },
  },
});

// Word filter animations

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
    transform: "rotate(5deg) translateX(1px)",
  },
  "40%": {
    transform: "rotate(-5deg) translateX(-1px)",
  },
  "60%": {
    transform: "rotate(2deg) translateX(0.5px)",
  },
  "80%": {
    transform: "rotate(-2deg) translateX(-0.5px)",
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
  animation: `${rustleAnimation} 2s infinite`,
  transition: "200ms",
  ":hover": {
    color: themeContract.player,
    animation: `${rustleAnimation} 4s infinite`,
  },
});
