import styles from "./Dizcord.module.css";

// @ts-ignore
import Tilt from "react-vanilla-tilt";
import { DiGithubBadge } from "react-icons/di";

export default function Projects() {
  const picStyles = {
    width: "fit-content",
    height: "fit-content",
  };

  return (
    <div className={styles.Project}>
      <div className={styles.projectHeader}>personal projects</div>
      <div className={styles.imagesContainer}>
        <h1>Dizcord</h1>
        <div className={styles.Dizcordlinks}>
          <a
            href="https://dizcorddds.herokuapp.com/"
            className={styles.dizcordlink}
          >
            live-demo
          </a>
          <a
            href="https://github.com/abmah/dizcord"
            className={styles.dizcordlink}
          >
            code <DiGithubBadge className={styles.githubLogo} />
          </a>
        </div>
        <p className={styles.DizcordParagraph}>
          Dizcord is a full-stack web chatting program that lets users read
          other peoples messages as they type.
        </p>
        <Tilt
          options={{ transition: false, reset: false }}
          style={picStyles}
          className={styles.dizcordImage1}
        >
          <div>
            <img
              className={styles.dizcordImage1}
              src="https://raw.githubusercontent.com/abmah/portfolio/main/images/dizcord.gif"
            />
            <div className={styles.dizcordButton1}>!!</div>
          </div>
        </Tilt>

        {/* <img src="https://i.imgur.com/vqOyN2l.gif" /> */}
        <p className={styles.DizcordParagraph2}>
          This program has authentication, a fully functional database, and chat
          rooms.
        </p>
      </div>
      <div className={styles.partSection}></div>
    </div>
  );
}
