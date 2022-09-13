import styles from "./Project.module.css";

import Tilt from "react-vanilla-tilt";
import { DiGithub, DiGithubAlt, DiGithubBadge, DiReact } from "react-icons/di";
import { SiMongodb, SiNextdotjs, SiSocketdotio } from "react-icons/si";
export default function ProjectDizcord() {
  const picStyles = {
    width: "fit-content",
    height: "fit-content",
  };
  const picStyles2 = {
    width: "fit-content",
    height: "fit-content",
  };
  return (
    <div className={styles.ProjectDizcord}>
      <div className={styles.projectHeader}>personal projects</div>
      <div className={styles.imagesContainer}>
        <h1>Project Dizcord</h1>
        <div className={styles.Dizcordlinks}>
          <a
            href="https://github.com/abmah/dizcord"
            className={styles.dizcordlink}
          >
            code <DiGithubBadge className={styles.githubLogo} />
          </a>
          <a
            href="https://dizcorddds.herokuapp.com/"
            className={styles.dizcordlink}
          >
            live-demo
          </a>
        </div>
        <p className={styles.DizcordParagraph}>
          Dizcord is a full-stack web chatting application that allows users to
          see other peoples messages while they are typing.
        </p>
        <Tilt
          options={{ transition: false, reset: false }}
          style={picStyles}
          className={styles.dizcordImage1}
        >
          <div>
            <img
              className={styles.dizcordImage1}
              src="https://i.imgur.com/VNdR27Y.gif"
            />
            <div className={styles.dizcordButton1}>!!</div>
          </div>
        </Tilt>

        {/* <img src="https://i.imgur.com/vqOyN2l.gif" /> */}
        <p className={styles.DizcordParagraph2}>
          this app has authintication, a connected working database, and a fully
          functional chat rooms.
        </p>
      </div>
    </div>
  );
}
