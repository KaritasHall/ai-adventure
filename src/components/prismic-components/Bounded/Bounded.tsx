import { container, maxWidth } from "./bounded.css";

export const Bounded = ({
  as: Comp = "div",
  size = "base",
  className,
  children,
}: {
  as?: React.ElementType;
  size?: "small" | "base" | "wide" | "widest";
  className?: string;
  children: React.ReactNode;
}) => {
  // Here I am using Vanilla Extract to generate the class names
  const sizeClasses = `${container} ${maxWidth[size]} ${className}`;

  return (
    <Comp className={sizeClasses}>
      <div>{children}</div>
    </Comp>
  );
};
