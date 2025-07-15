import React, { useRef, useState } from "react";
import styles from "./video.module.css";
import {
  Avatar,
  Button,
  Dislike,
  Like,
  More,
  Share,
  ShowMore,
  Title,
  VideoPlayer,
} from "../../../shared/ui";

interface VideoProps{
  className?: string;
}

export const Video: React.FC<VideoProps> = ({className}) => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [like, setLike] = useState<boolean>(false);
  const [dislike, setDislike] = useState<boolean>(false);

  const onShowDescriptionClick = () => {
    if (!aboutRef.current || !descriptionRef.current) return;
    
    aboutRef.current.style.paddingBottom =
      aboutRef.current.offsetHeight <= 80
        ? descriptionRef.current.offsetHeight + 40 + "px"
        : "20px";
  };

  const onLike = () => {
    if (dislike) {
      setDislike(false);
    }
    setLike((prev) => !prev);
  };

  const onDislike = () => {
    if (like) {
      setLike(false);
    }
    setDislike((prev) => !prev);
  };

  return (
    <section className={`${styles.video} ${className}`}>
      <VideoPlayer className={styles.player} />
      <Title
        size="xl"
        text="Dude You Re Getting A Telescope"
        className={styles.title}
      />
      <Button
        className={styles["show-description"]}
        variant="icon"
        onClick={onShowDescriptionClick}
      >
        <ShowMore />
      </Button>
      <div className={styles.info}>
        <span className={styles.views}>123k views</span>
        <div className={styles.buttons}>
          <Button variant="ghost" isActive={like} onClick={onLike}>
            <Like />
            <span className={styles["button-text"]}>123k</span>
          </Button>
          <Button variant="ghost" isActive={dislike} onClick={onDislike}>
            <Dislike />
            <span className={styles["button-text"]}>435k</span>
          </Button>
          <Button variant="ghost">
            <Share />
            <span className={styles["button-text"]}>Share</span>
          </Button>
          <Button variant="icon">
            <More />
          </Button>
        </div>
      </div>
      <div ref={aboutRef} className={styles.about}>
        <Avatar
          size="lg"
          avatarUrl="http://localhost:5173/assets/avatars/avatar-8.png"
        />
        <div className={styles.description}>
          <Title size="lg" text="Food & Drink" />
          <span className={styles.published}>Published on 14 Jun 2019</span>
          <p ref={descriptionRef} className={styles.text}>
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy; it is based on a
            number of factors, including ad placement, demographic, even the
            consumer’s mood when they see your ad.
          </p>
          <a href="#" className={styles["show-more"]}>
            Show more
          </a>
        </div>
        <Button className={styles.subscribe} variant="primary">
          Subscribe 2.3m
        </Button>
      </div>
    </section>
  );
};
