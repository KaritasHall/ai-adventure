import { style } from "@vanilla-extract/css";

export const field = style({
  fontSize: 14,
  lineHeight: 20,
});

export const inputField = style({
  width: "100%",
  borderRadius: 0,
  borderColor: "#E5E7EB",
  borderBottomWidth: "1px",
  paddingTop: 12,
  paddingBottom: 12,
  paddingRight: 28,
});

export const textAreaField = style({
  width: "100%",
  height: 160,
  borderBottomWidth: 1,
  borderColor: "#E5E7EB",
  paddingTop: 12,
  paddingBottom: 12,
  paddingLeft: 12,
  paddingRight: 12,
  borderRadius: 0,
});

export const contactForm = style({
  display: "grid",
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  gap: 24,
});

export const submitButton = style({
  display: "inline-flex",
  marginLeft: "auto",
  alignItems: "center",
  gap: 8,
});

export const message = style({
  fontSize: 20,
  lineHeight: 28,
});
