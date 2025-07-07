import React from 'react'
import styles from "./avatar.module.css"

interface AvatarProps{
  avatarUrl: string;
  size: "sm" | "md" | "lg"
}

export const Avatar: React.FC<AvatarProps> = ({avatarUrl, size}) => {
  return (
    <img src={avatarUrl} alt="avatar" className={`${styles.avatar} ${styles[size]}`} />
  )
}
