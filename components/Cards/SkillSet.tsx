import styles from "./SkillSet.module.css";
import { useInView } from "react-intersection-observer";
export default function SkillSet() {
  const { ref: skillsTitle, inView } = useInView();
  const { ref: skillItemOne, inView: skillItemOneInView } = useInView({});

  return (
    <div className={styles.skills}>
      <div
        ref={skillsTitle}
        className={`${inView ? styles.skillsTitle : styles.skillsTitleAfter}`}
      >
        skill set
      </div>
      <div
        className={
          skillItemOneInView
            ? styles.cardsContainer
            : styles.cardsContainerHidden
        }
        ref={skillItemOne}
      >
        <div className={`${styles.skillCard} ${styles.skillCardOne}`}>
          Frontend developlment
          <div>
            <div className={styles.skillCardTitle}>HTML</div>
            <div className={styles.skillCardTitle}>CSS</div>
            <div className={styles.skillCardTitle}>JavaScript</div>
            <div className={styles.skillCardTitle}>React</div>
            <div className={styles.skillCardTitle}>Next.js</div>
            <div className={styles.skillCardTitle}>TypeScript</div>
          </div>
        </div>
        <div className={`${styles.skillCard} ${styles.skillCardTwo}`}>
          Backend developlment
          <div>
            <div className={styles.skillCardTitle}>Node.js</div>
            <div className={styles.skillCardTitle}>Express.js</div>
            <div className={styles.skillCardTitle}>MongoDB</div>
            <div className={styles.skillCardTitle}>Socket io</div>
          </div>
        </div>
      </div>
    </div>
  );
}
