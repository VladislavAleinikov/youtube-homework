import React from 'react'
import styles from './swithcer.module.css'

interface SwitcherProps {
  className?: string;
  text: string;
}

export const Switcher: React.FC<SwitcherProps> = ({ className, text }) => {
  return (
    <label className={`${className} ${styles.label}`}>
      <span className={styles.text}>{text}</span>
      <div className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </div>
    </label>
  );
};
