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
  ShowMore,
  Subscriptions,
  Title,
  Trending,
  WatchLater,
} from "../../../shared/ui";
import styles from "./sidebar.module.css";

interface SidebarProps {
  className?: string;
  show: boolean;
}

const mainLinks: { icon: React.ReactNode; text: string; isActive: boolean }[] =
  [
    { icon: <Home />, text: "Home", isActive: true },
    { icon: <Trending />, text: "Trending", isActive: false },
    { icon: <Subscriptions />, text: "Subscriptions", isActive: false },
  ];

const links: { icon: React.ReactNode; text: string }[] = [
  { icon: <Library />, text: "Library" },
  { icon: <History />, text: "History" },
  { icon: <WatchLater />, text: "Wath later" },
  { icon: <Favourites />, text: "Favourites" },
  { icon: <LikedVideos />, text: "Liked videos" },
  { icon: <Music />, text: "Music" },
  { icon: <Games />, text: "Games" },
  { icon: <ShowMore />, text: "Show more" },
];

const subscriptions: { avatar: string; name: string }[] = [
  { avatar: "avatar-1", name: "Gussie Singleton" },
  { avatar: "avatar-2", name: "Nora Francis" },
  { avatar: "avatar-3", name: "Belle Briggs" },
  { avatar: "avatar-4", name: "Eunice Cortez" },
  { avatar: "avatar-5", name: "Emma Hanson" },
  { avatar: "avatar-6", name: "Leah Berry" },
];

export const Sidebar: React.FC<SidebarProps> = ({className, show}) => {
  return (
    <aside className={`${styles.sidebar} ${show && styles.show} ${className}`}>
      <ul className={`${styles.links} ${styles["links-main"]}`}>
        {mainLinks.map(({ icon, text, isActive }) => (
          <li className={styles["links-item"]} key={text}>
            <a
              href="#"
              className={`${styles.link} ${isActive && styles.active}`}
            >
              <div className={styles.icon}>{icon}</div>
              <span>{text}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className={styles.links}>
        {links.map(({ icon, text }) => (
          <li className={styles["links-item"]} key={text}>
            <a href="#" className={styles.link}>
              <div className={styles.icon}>{icon}</div>
              <span>{text}</span>
            </a>
          </li>
        ))}
      </ul>
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
      <a href="#" className={`${styles.link} ${styles["link-setting"]}`}>
        <div className={styles.icon}>
          <Setting />
        </div>
        <span>Setting</span>
      </a>
    </aside>
  );
};
