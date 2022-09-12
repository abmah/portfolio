import styles from "./Header.module.css";
import { useEffect, useState } from "react";

export default function PageHeader() {
  const [shouldHeaderMinimize, setShouldHeaderMinimize] = useState(false);
  // useEffect(() => {
  //   window.onscroll = function () {
  //     scrollFunction();
  //   };
  // }, []);

  // function scrollFunction() {
  //   if (document.documentElement.scrollTop > 290) {
  //     // activate

  //     setShouldHeaderMinimize(true);
  //   }
  //   if (document.documentElement.scrollTop < 10) {
  //     setShouldHeaderMinimize(false);
  //   }
  // }
  function scrollToProjects() {
    // make it so when this function runs it scrolls by 2000 pixels smoothly to the projects section
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.header}>
      <div className={styles.NameAndTitle}>
        <div
          className={
            shouldHeaderMinimize
              ? styles.HeaderNameContainerSmall
              : styles.HeaderNameContainer
          }
        >
          <span className={styles.HeaderName}>A</span>
          <span className={styles.HeaderName}>.</span>
          <span className={styles.HeaderName}>B</span>
          <span className={`${styles.HeaderName} ${styles.dot}`}>.</span>
        </div>
        {/* <div className={styles.HeaderTitle}>full-stack developer</div> */}
      </div>
      <div
        className={
          shouldHeaderMinimize ? styles.HeaderMenuSmall : styles.HeaderMenu
        }
      >
        <ul className={styles.MenuList}>
          <li onClick={scrollToProjects}>projects</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  );
}
