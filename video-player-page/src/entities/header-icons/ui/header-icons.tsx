import React from "react";
import styles from "./header-icons.module.css";
import { Button, Camera, Menu, Notification } from "../../../shared/ui";

interface HeaderIconsProps {
  className?: string;
  show: boolean;
}

export const HeaderIcons: React.FC<HeaderIconsProps> = ({
  className,
  show,
}) => {
  return (
    <div className={`${styles.icons} ${show ? styles.show : ""} ${className}`}>
      <Button variant="icon">
        <Camera />
      </Button>
      <Button variant="icon">
        <Menu />
      </Button>
      <Button className={styles.notifications} variant="icon">
        <span className={styles["notifications-count"]}>3</span>
        <Notification />
      </Button>
    </div>
  );
};
