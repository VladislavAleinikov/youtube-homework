import React from "react";
import styles from "./card.module.css";
import { Title } from "../../../shared/ui";
import type { CardType } from "../../../shared/types";

interface CardProps extends CardType {
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  className,
  imgUrl,
  title,
  time,
  views,
  author,
}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <a href="#" className={styles["card-link"]}>
        <div className={styles.preview}>
          <img src={imgUrl} alt="preview" />
          <span className={styles.timer}>{time}</span>
        </div>
        <Title size="lg" text={title} className={styles.title} />
        <div className={styles.info}>
          <span className={styles.meta}>{views}</span>
          <span className={styles.author}>{author}</span>
        </div>
      </a>
    </div>
  );
};
