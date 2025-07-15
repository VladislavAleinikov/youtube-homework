import React from "react";
import {
  Avatar,
  Setting,
  Title,
} from "../../../shared/ui";
import styles from "./sidebar.module.css";
import { LinksList } from "../../../entities/links-list";
import { links, mainLinks, subscriptions } from "../../../shared/mock";

interface SidebarProps {
  className?: string;
  show: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ className, show }) => {
  return (
    <aside
      className={`${styles.sidebar} ${show ? styles.show : ""} ${className}`}
    >
      <LinksList className={styles["links-main"]} links={mainLinks} />
      <LinksList
        className={styles.categories}
        links={links}
        isShowMoreButton={true}
      />
      <div className={styles.subscribers}>
        <Title className={styles.title} size="md" text="Subscriptions" />
        <ul className={styles["subscribers-list"]}>
          {subscriptions.map(({ avatar, name }) => (
            <li className={styles.subscriber} key={name}>
              <Avatar
                size="sm"
                avatarUrl={`http://localhost:5173/assets/avatars/${avatar}.png`}
              />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
      <a href="#" className={styles["setting-link"]}>
        <div className={styles["setting-link-icon"]}>
          <Setting />
        </div>
        <span>Setting</span>
      </a>
    </aside>
  );
};
