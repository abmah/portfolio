import React, { useEffect, useState } from "react";

import styles from "./Body.module.css";

export default function Body() {
  const [shouldHeaderMinimize, setShouldHeaderMinimize] = useState(0);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    const distanceFromTop = Math.floor(document.documentElement.scrollTop / 10);
    if (distanceFromTop < 100) {
      setShouldHeaderMinimize(distanceFromTop);
    }
  }

  // const dynamicStyle = {
  //   // background: `linear-gradient(90deg, #4c3a69 ${
  //   //   75 - shouldHeaderMinimize
  //   // }%, #833E6C ${shouldHeaderMinimize}%)`,
  // };

  const pillerStyles = {
    left: `${90 - shouldHeaderMinimize}vw`,
    width: `${110}vw`,
    opacity: `${shouldHeaderMinimize / 100}`,
  };

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
      <div style={pillerStyles} className={styles.pinkPiller}>
        hello
      </div>
    </div>
  );
}
