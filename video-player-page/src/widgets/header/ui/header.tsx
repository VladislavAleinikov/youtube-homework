import React from "react";
import styles from "./header.module.css";
import {
  Avatar,
  Burger,
  Button,
  Camera,
  Menu,
  Notification,
  Search,
} from "../../../shared/ui";
import { SearchInput } from "../../../features";

interface HeaderProps {
  className?: string;
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  className,
  onToggleSidebar,
}) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles["header-left"]}>
        <button className={styles.menu} onClick={onToggleSidebar}>
          <Burger />
        </button>
        <a href="#" className={styles.logo}>
          <img src="http://localhost:5173/assets/logo.png" alt="logo" />
        </a>
        <SearchInput id="search-input" placeholder="Search" />
      </div>
      <div className={styles.right}>
        <div className={styles.icons}>
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
        <Avatar
          size="md"
          avatarUrl="http://localhost:5173/assets/avatars/avatar-1.png"
        />
      </div>
    </header>
  );
};
