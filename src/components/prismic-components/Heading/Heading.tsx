import { fontSize } from "./heading.css";

export const Heading = ({
  as: Comp = "h1",
  size = "4xl",
  children,
  className,
}: {
  as?: React.ElementType;
  size?: "4xl" | "3xl" | "2xl" | "xl";
  children: React.ReactNode;
  className?: string;
}) => {
  const sizeClasses = ` ${fontSize[size]} ${className}`;

  return <Comp className={sizeClasses}>{children}</Comp>;
};
