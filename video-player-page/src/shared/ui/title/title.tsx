import React from 'react'

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl";

const mapTagBySize = {
  xs: "h5",
  sm: "h4",
  md: "h3",
  lg: "h2",
  xl: "h1",
} as const;

interface TitleProps {
  text: string;
  size?: TitleSize;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({
  text,
  size = "sm",
  className,
}) => {
  return React.createElement(
    mapTagBySize[size],
    { className:  className },
    text
  );
};
