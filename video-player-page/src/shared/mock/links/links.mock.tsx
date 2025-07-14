import type { LinksListType } from "../../types";
import {
  Favourites,
  Games,
  History,
  Home,
  Library,
  LikedVideos,
  Music,
  Subscriptions,
  Trending,
  WatchLater,
} from "../../ui";

export const mainLinks: LinksListType = [
  { icon: <Home />, text: "Home", isActive: true },
  { icon: <Trending />, text: "Trending", isActive: false },
  { icon: <Subscriptions />, text: "Subscriptions", isActive: false },
];

export const links: LinksListType = [
  { icon: <Library />, text: "Library" },
  { icon: <History />, text: "History" },
  { icon: <WatchLater />, text: "Wath later" },
  { icon: <Favourites />, text: "Favourites" },
  { icon: <LikedVideos />, text: "Liked videos" },
  { icon: <Music />, text: "Music" },
  { icon: <Games />, text: "Games" },
];
