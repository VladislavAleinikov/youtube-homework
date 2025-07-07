import React from "react";
import { Card } from "../../../entities/card";
import { Title } from "../../../shared/ui";
import { Swithcer } from "../../../shared/ui";
import styles from "./recomended.module.css"

const cards: React.ComponentProps<typeof Card>[] = [
  {
    imgUrl: "http://localhost:5173/assets/previews/preview-1.png",
    title: "Baby Monitor Technology",
    time: "8:00",
    views: "123k views",
    author: "Dollie Blair",
  },
  {
    imgUrl: "http://localhost:5173/assets/previews/preview-2.png",
    title: "A Good Autoresponder",
    time: "8:00",
    views: "123k views",
    author: "Dollie Blair",
  },
  {
    imgUrl: "http://localhost:5173/assets/previews/preview-3.png",
    title: "Selecting The Right Hotel",
    time: "8:00",
    views: "123k views",
    author: "Dollie Blair",
  },
  {
    imgUrl: "http://localhost:5173/assets/previews/preview-4.png",
    title: "Selecting The Right Hotel",
    time: "8:00",
    views: "123k views",
    author: "Dollie Blair",
  },
];

export const Recomended = () => {
  return (
    <div className={styles.recomended}>
      <Title size="xl" text="Next" />
      <Swithcer text="Autoplay"/>
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
