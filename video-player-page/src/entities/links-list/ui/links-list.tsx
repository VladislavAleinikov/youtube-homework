import React, { useRef } from "react";
import type { LinksListType } from "../../../shared/types";
import styles from "./links-list.module.css";
import { ShowMore } from "../../../shared/ui";

interface LinksListProps {
  className?: string;
  links: LinksListType;
  isShowMoreButton?: boolean;
}

export const LinksList: React.FC<LinksListProps> = ({
  className,
  links,
  isShowMoreButton = false,
}) => {
  const linksRef = useRef<HTMLUListElement>(null);
  const showMoreRef = useRef<HTMLAnchorElement>(null);

  const onShowMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!linksRef.current || !showMoreRef.current) {
      return;
    }

    e.preventDefault();

    if (linksRef.current.classList.contains(styles.show)) {
      linksRef.current.classList.add(styles.hide); 
      linksRef.current.classList.remove(styles.show);
    } else {
      linksRef.current.classList.add(styles.show);
      linksRef.current.classList.remove(styles.hide);
    }
    showMoreRef.current.classList.toggle(styles.active);
  };

  return (
    <ul
      ref={linksRef}
      className={`${styles.links} ${
        isShowMoreButton ? styles.show : ""
      } ${className}`}
    >
      {links.map(({ icon, text, isActive }) => (
        <li className={styles["links-item"]} key={text}>
          <a
            href="#"
            className={`${styles.link} ${isActive ? styles.active : ""}`}
          >
            <div className={styles.icon}>{icon}</div>
            <span>{text}</span>
          </a>
        </li>
      ))}
      {isShowMoreButton && (
        <li className={styles["links-item"]}>
          <a
            ref={showMoreRef}
            href="#"
            className={`${styles.link} ${styles["show-more"]} ${styles.active}"`}
            onClick={onShowMoreClick}
          >
            <div className={styles.icon}>
              <ShowMore />
            </div>
            <span className={styles["show-more--show"]}>Show more</span>
            <span className={styles["show-more--hide"]}>Hide</span>
          </a>
        </li>
      )}
    </ul>
  );
};
