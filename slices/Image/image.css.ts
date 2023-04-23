import { style } from "@vanilla-extract/css";

export const imgContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 14,
});

export const imgCaption = style({
  fontStyle: "italic",
  color: "#4F4F4F",
  letterSpacing: -0.4,
  textAlign: "left",
  fontSize: 12,
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: 14,
    },
  },
});
