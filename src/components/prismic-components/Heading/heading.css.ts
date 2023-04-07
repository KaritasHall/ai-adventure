import { styleVariants } from "@vanilla-extract/css";

export const fontSize = styleVariants({
  "4xl": {
    fontSize: 30,
    lineHeight: 1,
    "@media": {
      "(min-width: 768px)": {
        fontSize: 36,
        lineHeight: 1.5,
      },
    },
  },

  "3xl": {
    fontSize: 30,
    lineHeight: 1,
  },
  "2xl": {
    fontSize: 24,
  },
  xl: {
    fontSize: 20,
  },
});
