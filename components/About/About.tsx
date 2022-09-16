import React from "react";
import styles from "./about.module.css";
import Blob from "../Blob/Blob";
export default function About() {
  return (
    <div className={styles.about}>
      <Blob />
      <div className={styles.aboutText}>
        {" "}
        Full-Stack developer & designer that loves to make{" "}
        <span className={styles.highlightPretty}>pretty</span> looking things,
        using <span className={styles.highlightPrettyTwo}>pretty</span> looking
        code.
      </div>
    </div>
  );
}
