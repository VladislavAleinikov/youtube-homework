import React from 'react'
import styles from './swithcer.module.css'

interface SwithcerProps{
  className?: string;
  text: string;
}

export const Swithcer: React.FC<SwithcerProps> = ({
  className,
  text
}) => {
  return (
    <label className={`${className} ${styles.label}`}>
      <span className={styles.text}>{text}</span>
      <div className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </div>
    </label>
  );
}
