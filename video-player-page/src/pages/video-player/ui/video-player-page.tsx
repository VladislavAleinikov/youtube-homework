import React, { useState } from "react";
import { Header } from "../../../widgets/header";
import styles from "./video-player-page.module.css";
import { Recomended } from "../../../widgets/recomended";
import { Video } from "../../../widgets/video";
import { Sidebar } from "../../../widgets/sidebar";

export const VideoPlayerPage = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const onToggleSidebar = () => setShowSidebar((prev) => !prev);

  return (
    <div className={styles["video-player-page"]}>
      <Header onToggleSidebar={onToggleSidebar} />
      <Sidebar show={showSidebar} />
      <main className={styles.main}>
        <Video />
        <Recomended />
      </main>
    </div>
  );
};
