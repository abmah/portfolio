import React, { useEffect, useState } from "react";
import { SiRubygems } from "react-icons/si";
import styles from "./Body.module.css";

export default function () {
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
  console.log(shouldHeaderMinimize);

  const dynamicStyle = {
    background: `linear-gradient(90deg, #4c3a69 ${
      75 - shouldHeaderMinimize
    }%, #001854 ${shouldHeaderMinimize}%)`,
  };

  return (
    <div style={dynamicStyle} className={styles.body}>
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
