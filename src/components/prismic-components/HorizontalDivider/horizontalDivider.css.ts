import { style } from "@vanilla-extract/css";

export const horizontalDivider = style({
  width: "50%",
  height: 1,
  borderWidth: "0",

  "@media": {
    "(min-width: 768px)": {
      maxWidth: 386,
    },
  },
});
