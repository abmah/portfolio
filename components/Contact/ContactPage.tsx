import React from "react";
import { DiGithubAlt, DiGithubBadge } from "react-icons/di";
import { SiLinkedin } from "react-icons/si";
import styles from "./ContactPage.module.css";
export default function ContactPage() {
  return (
    <div className={styles.contactpage}>
      <div className={styles.contactHeader}>Get in touch</div>
      <div className={styles.contactBody}>
        <div className={styles.socialsGroup}>
          <a href="https://www.linkedin.com/in/ab-mahasnh-23672323a/">
            LinkedIn
          </a>
          <SiLinkedin className={styles.LinkedinLogo} />
        </div>
        <div className={styles.socialsGroup}>
          <a href="https://github.com/abmah">Github</a>
          <DiGithubAlt className={styles.LinkedinLogo} />
        </div>
      </div>
    </div>
  );
}
