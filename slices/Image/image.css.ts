import { style } from "@vanilla-extract/css";

export const imgContainer = style({
  // display: "grid",
  // gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  display: "flex",
  flexDirection: "column",
  gap: 14,
  justifyContent: "center",
  alignItems: "center",
});

export const imgBackground = style({});

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
