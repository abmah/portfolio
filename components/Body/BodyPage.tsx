import React from "react";
import styles from "./Body.module.css";
export default function () {
  return (
    <div className={styles.body}>
      <div className={styles.welcome}>Welcome to My Portfolio</div>
      <div className={styles.about}>
        <div className={styles.aboutTitle}>About Me</div>
        <div className={styles.aboutText}>
          I am a full-stack developer with a passion for creating beautiful
          responsive websites and applications. I have a strong design
          background and experience with both front-end and back-end
          development.
        </div>
      </div>
    </div>
  );
}
