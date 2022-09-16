import { useState, useEffect } from "react";
import styles from "./SkillSet.module.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { useInView } from "react-intersection-observer";
export default function SkillSet() {
  const { ref: skillsTitle, inView } = useInView({
    threshold: 0.1,
    delay: 100,
  });
  const { ref: cardsRef, inView: CardsinView } = useInView({
    threshold: 0.1,
    delay: 100,
  });
  const { ref: cardsReftwo, inView: CardsinViewTwo } = useInView({
    threshold: 0.2,
    delay: 150,
  });

  // <div
  //   ref={cardsRef}
  //   className={CardsinView ? styles.show : styles.hide}
  // ></div>;
  return (
    <div className={styles.skills}>
      <div
        ref={skillsTitle}
        className={`${inView ? styles.skillsTitle : styles.skillsTitleAfter}`}
      >
        skill set
        <h3 className={styles.skillSubTitle}>
          Frameworks and libraries I have worked with and am comfortable with
        </h3>
      </div>
      <div className={styles.cardsContainer}>
        <div ref={cardsRef} className={CardsinView ? styles.show : styles.hide}>
          <div className={`${styles.skillCard} ${styles.skillCardOne}`}>
            <div className={styles.cardName}> Frontend developlment</div>
            <div className={styles.middle}>
              <div className={styles.text}>
                I made a lot of website using these technologies and I can say
                with confidence that I am comfortable with them.
              </div>
            </div>
            <div>
              <div className={styles.skillCardTitle}>
                <div>react</div>
                <DiReact color="pink" />
              </div>
              <div className={styles.skillCardTitle}>
                <div>tainwind css</div>
                <SiTailwindcss color="pink" />
              </div>
              <div className={styles.skillCardTitle}>
                <div>html</div>
                <AiOutlineHtml5 color="pink" />
              </div>
              <div className={styles.skillCardTitle}>
                <div>next js</div>
                <SiNextdotjs color="pink" />
              </div>
              <div className={styles.skillCardTitle}>
                <div>typescript</div>
                <SiTypescript color="pink" />
              </div>

              {/* <div className={styles.skillCardTitle}>CSS</div>
            <div className={styles.skillCardTitle}>TAILWIND CSS</div>
            <div className={styles.skillCardTitle}>React</div>
            <div className={styles.skillCardTitle}>Next.js</div>
            <div className={styles.skillCardTitle}>TypeScript</div> */}
            </div>
          </div>
        </div>
        <div
          ref={cardsReftwo}
          className={CardsinViewTwo ? styles.show2 : styles.hide2}
        >
          <div className={`${styles.skillCard} ${styles.skillCardTwo}`}>
            <div className={styles.middle}>
              <div className={styles.text}>
                When Im not working on the frontend I like to work on the
                backend because its much more calming.
              </div>
            </div>
            <div className={styles.cardName}> backend developlment</div>
            <div>
              <div className={styles.skillCardTitle}>
                <div>node js</div>
                <DiNodejsSmall color="pink" />
              </div>
              <div className={styles.skillCardTitle}>
                <div>express js</div>
                <SiExpress color="pink" />
              </div>
              <div className={styles.skillCardTitle}>
                <div>mongodb</div>
                <SiMongodb color="pink" />
              </div>
              <div className={styles.skillCardTitle}>
                <div>socket io</div>
                <SiSocketdotio color="pink" />
              </div>
              {/* <div className={styles.skillCardTitle}>Node.js</div>
            <div className={styles.skillCardTitle}>Express.js</div>
            <div className={styles.skillCardTitle}>MongoDB</div>
            <div className={styles.skillCardTitle}>Socket io</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const { ref: skillItemOne, inView: skillItemOneInView } = useInView();

// const [shouldHeaderMinimize, setShouldHeaderMinimize] = useState(0);

// useEffect(() => {
//   window.onscroll = function () {
//     scrollFunction();
//   };
// }, []);

// function scrollFunction() {
//   const distanceFromTop = Math.floor(document.documentElement.scrollTop / 10);
//   if (distanceFromTop > 80) {
//     setShouldHeaderMinimize(distanceFromTop);
//   }
// }
// console.log(shouldHeaderMinimize);
