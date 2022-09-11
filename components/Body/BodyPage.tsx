import React, { useEffect } from "react";
import styles from "./Body.module.css";

export default function () {
  return (
    <div className={styles.body}>
      <div className={styles.about}>
        <div className={styles.aboutTitle}>About Me</div>
        <div className={styles.aboutText}>
          Full-Stack developer that likes to make{" "}
          <span className={styles.highlightPretty}>pretty</span> looking things,
          using pretty looking code.
        </div>
      </div>
    </div>
  );
}
