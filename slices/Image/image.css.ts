import { style } from "@vanilla-extract/css";

export const imgContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  gap: 14,
});

export const imgBackground = style({
  backgroundColor: "#F3F4F6",
  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
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
