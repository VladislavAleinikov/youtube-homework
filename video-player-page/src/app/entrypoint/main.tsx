import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import { VideoPlayerPage } from "../../pages/video-player";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VideoPlayerPage />
  </StrictMode>
);
