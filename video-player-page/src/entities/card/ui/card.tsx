import React from "react";
import styles from './card.module.css'
import { Title } from "../../../shared/ui";

interface CardProps {
  imgUrl: string;
  title: string;
  time: string;
  views: string;
  author: string;
}

export const Card: React.FC<CardProps> = ({
  imgUrl,
  title,
  time,
  views,
  author,
}) => {
  return (
    <div className={styles.card}>
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
