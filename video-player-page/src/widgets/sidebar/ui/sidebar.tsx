import React from "react";
import {
  Avatar,
  Favourites,
  Games,
  History,
  Home,
  Library,
  LikedVideos,
  Music,
  Setting,
  Subscriptions,
  Title,
  Trending,
  WatchLater,
} from "../../../shared/ui";
import styles from "./sidebar.module.css";
import type { LinksListType } from "../../../shared/types";
import { LinksList } from "../../../entities/links-list";

interface SidebarProps {
  className?: string;
  show: boolean;
}

const mainLinks: LinksListType = [
  { icon: <Home />, text: "Home", isActive: true },
  { icon: <Trending />, text: "Trending", isActive: false },
  { icon: <Subscriptions />, text: "Subscriptions", isActive: false },
];

const links: LinksListType = [
  { icon: <Library />, text: "Library" },
  { icon: <History />, text: "History" },
  { icon: <WatchLater />, text: "Wath later" },
  { icon: <Favourites />, text: "Favourites" },
  { icon: <LikedVideos />, text: "Liked videos" },
  { icon: <Music />, text: "Music" },
  { icon: <Games />, text: "Games" },
];

const subscriptions: { avatar: string; name: string }[] = [
  { avatar: "avatar-1", name: "Gussie Singleton" },
  { avatar: "avatar-2", name: "Nora Francis" },
  { avatar: "avatar-3", name: "Belle Briggs" },
  { avatar: "avatar-4", name: "Eunice Cortez" },
  { avatar: "avatar-5", name: "Emma Hanson" },
  { avatar: "avatar-6", name: "Leah Berry" },
];

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
