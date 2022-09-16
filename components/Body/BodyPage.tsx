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
      <svg
        className={styles.blob}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFD6E8"
          d="M35.5,-66.3C43.5,-57,45.7,-42.3,49.1,-30.3C52.6,-18.4,57.4,-9.2,58.7,0.7C60,10.7,57.8,21.4,51.7,28.9C45.7,36.3,35.8,40.6,26.5,50.6C17.2,60.6,8.6,76.4,-1.3,78.7C-11.2,81,-22.5,69.7,-34.4,61.2C-46.3,52.7,-58.9,47,-65.5,37.3C-72,27.5,-72.5,13.8,-71.6,0.6C-70.6,-12.7,-68.2,-25.3,-62.3,-36.2C-56.4,-47,-47,-56.1,-36,-63.7C-25.1,-71.3,-12.5,-77.6,0.6,-78.6C13.8,-79.7,27.6,-75.7,35.5,-66.3Z"
          transform="translate(100 100)"
        />
      </svg>

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
      <div className={moreStyles}></div>
    </div>
  );
}
