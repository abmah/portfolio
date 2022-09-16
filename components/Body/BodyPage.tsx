import React, { useEffect, useState } from "react";
import { SiScaleway } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import styles from "./Body.module.css";

export default function Body() {
  const [shouldHeaderMinimize, setShouldHeaderMinimize] = useState(0);
  const { ref: cardsRef, inView: CardsinView } = useInView({ threshold: 0.1 });
  const { ref: cardsReftwo, inView: CardsinViewTwo } = useInView({
    threshold: 0.1,
  });
  // useEffect(() => {
  //   window.onscroll = function () {
  //     scrollFunction();
  //   };
  // }, []);

  // function scrollFunction() {
  //   const distanceFromTop = Math.floor(document.documentElement.scrollTop / 10);
  //   if (distanceFromTop < 100) {
  //     setShouldHeaderMinimize(distanceFromTop);
  //   }
  // }

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

  // const moreStyles =
  //   shouldHeaderMinimize > 60 ? styles.pinkPillerMove : styles.pinkPiller;

  // const blobStyles = {
  //   transform: `translateX(${shouldHeaderMinimize / 3}vh)`,
  // };

  // const [x, setX] = React.useState(0);
  // const [y, setY] = React.useState(0);
  // useEffect(() => {
  //   // mouse event

  //   const handleMouseMove = (e: any) => {
  //     setX(e.clientX / 3);
  //     setY(e.clientY / 10);
  //     console.log(e.clientX);
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  // const styling = {
  //   top: `${y}px`,
  //   left: `${x}px`,
  // };

  return (
    <div className={styles.body}>
      <div className={styles.about}>
        <div
          ref={cardsReftwo}
          className={CardsinViewTwo ? styles.show2 : styles.hide2}
        >
          <div className={styles.aboutText}>Welcome to my portfolio</div>
        </div>
        {/* <div ref={cardsRef} className={CardsinView ? styles.show : styles.hide}>
          <div className={styles.aboutText}>
            Full-Stack developer & designer that loves to make{" "}
            <span className={styles.highlightPretty}>pretty</span> looking
            things, using{" "}
            <span className={styles.highlightPrettyTwo}>pretty</span> looking
            code.
          </div>
        </div> */}
      </div>

      {/* <svg
        className={styles.blob}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FF0066"
          d="M63.2,-24.4C69.4,-1.6,53.2,24.6,33.7,36.5C14.1,48.4,-8.7,45.9,-27,33.5C-45.3,21.1,-59.1,-1.3,-53.8,-22.8C-48.6,-44.4,-24.3,-65.1,2.1,-65.8C28.5,-66.5,57.1,-47.2,63.2,-24.4Z"
          transform="translate(100 100)"
        />
      </svg> */}
      {/* <div className={moreStyles}></div> */}
    </div>
  );
}
