import React, { useState } from "react";
import styles from "./header.module.css";
import { Avatar, Burger, MoreVertical } from "../../../shared/ui";
import { HeaderIcons } from "../../../entities/header-icons";
import { SearchInput } from "../../../features";

interface HeaderProps {
  className?: string;
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  className,
  onToggleSidebar,
}) => {
  const [showIcons, setShowIcons] = useState(false);

  const onShowIconsClick = () => {
    setShowIcons((prev) => !prev);
  };

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
        <HeaderIcons show={showIcons} />
        <Avatar
          size="md"
          avatarUrl="http://localhost:5173/assets/avatars/avatar-1.png"
          className={`${styles.avatar} ${styles["avatar-desc"]}`}
        />
        <button className={styles["show-more"]} onClick={onShowIconsClick}>
          <MoreVertical />
        </button>
      </div>
    </header>
  );
};
