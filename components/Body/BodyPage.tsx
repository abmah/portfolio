import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Body.module.css";

export default function Body() {
  const [shouldHeaderMinimize, setShouldHeaderMinimize] = useState(0);
  const { ref: cardsRef, inView: CardsinView } = useInView({ threshold: 0.1 });
  const { ref: cardsReftwo, inView: CardsinViewTwo } = useInView({
    threshold: 0.1,
  });
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

  // const pillerStyles = {
  //   left: `${90 - shouldHeaderMinimize}vw`,
  //   width: `${110}vw`,
  //   opacity: `${shouldHeaderMinimize / 100}`,
  // };

  const moreStyles =
    shouldHeaderMinimize > 60 ? styles.pinkPillerMove : styles.pinkPiller;

  return (
    <div className={styles.body}>
      <div className={styles.about}>
        <div
          ref={cardsReftwo}
          className={CardsinViewTwo ? styles.show2 : styles.hide2}
        >
          <div className={styles.aboutTitle}>About Me</div>
        </div>
        <div ref={cardsRef} className={CardsinView ? styles.show : styles.hide}>
          <div className={styles.aboutText}>
            Full-Stack developer & designer that loves to make{" "}
            <span className={styles.highlightPretty}>pretty</span> looking
            things, using{" "}
            <span className={styles.highlightPrettyTwo}>pretty</span> looking
            code.
          </div>
        </div>
      </div>
      {/* <div className={moreStyles}></div> */}
    </div>
  );
}
