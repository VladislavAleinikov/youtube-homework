import React from 'react'
import styles from "./avatar.module.css"

interface AvatarProps{
  className?: string;
  avatarUrl: string;
  size: "sm" | "md" | "lg"
}

export const Avatar: React.FC<AvatarProps> = ({ className, avatarUrl, size }) => {
  return (
    <img
      src={avatarUrl}
      alt="avatar"
      className={`${styles.avatar} ${styles[size]} ${className}`}
    />
  );
};
