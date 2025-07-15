import React from "react";
import { Card } from "../../../entities/card";
import { Title } from "../../../shared/ui";
import { Switcher } from "../../../shared/ui";
import styles from "./recomended.module.css";
import { cards } from "../../../shared/mock";

interface RecomendedProps {
  className?: string;
}

export const Recomended: React.FC<RecomendedProps> = ({ className }) => {
  return (
    <div className={`${styles.recomended} ${className}`}>
      <Title size="xl" text="Next" />
      <Switcher text="Autoplay" />
      <ul className={styles.cards}>
        {cards.map((card) => (
          <li key={card.imgUrl}>
            <Card {...card} />
          </li>
        ))}
      </ul>
    </div>
  );
};
