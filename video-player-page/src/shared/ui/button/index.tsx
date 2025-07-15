import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  className?: string;
  variant: "icon" | "primary" | "ghost";
  isActive?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  variant,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`${className} ${styles.button} ${styles[variant]} ${
        isActive && styles.active
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
