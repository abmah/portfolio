import React from "react";
import styles from "./Vscode.module.css";
// @ts-ignore
import Tilt from "react-vanilla-tilt";
import { DiGithubBadge } from "react-icons/di";
export default function Vscode() {
  const picStyles = {
    width: "fit-content",
    height: "fit-content",
  };
  return (
    <div className={styles.Project}>
      <div className={styles.partSection}></div>
      <div className={styles.imagesContainer2}>
        <h1>Visual Studio Code Clone</h1>
        <div className={styles.Dizcordlinks}>
          <a
            href="https://github.com/abmah/Visual-Studio-Code-Clone"
            className={styles.dizcordlink}
          >
            code <DiGithubBadge className={styles.githubLogo} />
          </a>
        </div>
        <p className={styles.DizcordParagraph}>
          A clone of the Visual Studio Code text editor It is a front-end-only
          app that types a message that the developer has prewritten.
        </p>
        <Tilt
          options={{ transition: false, reset: false }}
          style={picStyles}
          className={styles.dizcordImage2}
        >
          <div>
            <img
              className={styles.dizcordImage2}
              src="https://i.imgur.com/SA1Iqq9.gif"
            />
            <div className={styles.dizcordButton1}>!!</div>
          </div>
        </Tilt>
        {/* <img src="https://i.imgur.com/vqOyN2l.gif" /> */}
        <p className={styles.DizcordParagraph2}>
          this app is meant to be used as a portfolio
        </p>
      </div>
    </div>
  );
}
