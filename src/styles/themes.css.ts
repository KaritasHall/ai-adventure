import { createThemeContract, createTheme } from "@vanilla-extract/css";

// Theme contracts
export const themeContract = createThemeContract({
  storyteller: "",
  player: "",
  background: "",
});

export const blogThemeContract = createThemeContract({
  heading: "",
  text: "",
  accent: "",
  background: "",
});

// Game themes
export const defaultTheme = createTheme(themeContract, {
  storyteller: "#FFB347",
  player: "#C7CEEA",
  background: "#292D34",
});

export const forestTheme = createTheme(themeContract, {
  storyteller: "#6CE3B4",
  player: "#D671E5",
  background: "#18181B",
});

export const mansionTheme = createTheme(themeContract, {
  storyteller: "#FF6961",
  player: "#C8E6C9",
  background: "#1B1B24",
});

export const abandonedTheme = createTheme(themeContract, {
  storyteller: "#A2C4C9",
  player: "#FF9AA2",
  background: "#23232F",
});

export const caveTheme = createTheme(themeContract, {
  storyteller: "#FFA07A",
  player: "#B0E0E6",
  background: "#2B2A37",
});

// Blog themes
export const blogThemePeach = createTheme(blogThemeContract, {
  heading: "#FFB6C1",
  text: "#FFDAC1",
  accent: "#FF69B4",
  background: "#221E23",
});

export const blogThemeRoseGarden = createTheme(blogThemeContract, {
  heading: "#B1E7C1",
  text: "#F8E2E6",
  accent: "#FFC0CB",
  background: "#1D1E1F",
});

export const blogThemePurple = createTheme(blogThemeContract, {
  heading: "#B1A7D1",
  text: "#C1E1C5",
  accent: "#A3C3D9",
  background: "#27222D",
});

export const blogThemeWarm = createTheme(blogThemeContract, {
  heading: "#F5D0AA",
  text: "#F1E2CC",
  accent: "#F4A87D",
  background: "#26282D",
});
