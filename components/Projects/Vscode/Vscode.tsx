import React from "react";
import styles from "./Vscode.module.css";
// @ts-ignore
import Tilt from "react-vanilla-tilt";
import { DiGithubBadge } from "react-icons/di";
import { useInView } from "react-intersection-observer";
export default function Vscode() {
  const picStyles = {
    width: "fit-content",
    height: "fit-content",
  };

  const { ref: titleRef, inView: titleInView } = useInView({ delay: 50 });
  const { ref: linksRef, inView: linksInView } = useInView({ delay: 100 });
  const { ref: descriptionRef, inView: descriptionInView } = useInView({
    delay: 50,
  });
  const { ref: imageRef, inView: imageInView } = useInView({ delay: 100 });
  const { ref: secondRef, inView: secondInView } = useInView({ delay: 50 });
  return (
    <div className={styles.Project}>
      {/* <div className={styles.partSection}></div> */}
      <div className={styles.imagesContainer2}>
        <div
          ref={titleRef}
          className={titleInView ? styles.show2 : styles.hide2}
        >
          <h1>Visual Studio Code Clone</h1>
        </div>
        <div
          ref={linksRef}
          className={linksInView ? styles.show2 : styles.hide2}
        >
          <div className={styles.Dizcordlinks}>
            <a
              href="https://github.com/abmah/Visual-Studio-Code-Clone"
              className={styles.dizcordlink}
            >
              code <DiGithubBadge className={styles.githubLogo} />
            </a>
          </div>
        </div>
        <div
          ref={descriptionRef}
          className={descriptionInView ? styles.show2 : styles.hide2}
        >
          <p className={styles.DizcordParagraph}>
            A clone of the Visual Studio Code text editor. A front-end-only app
            that types a message that the developer has prewritten.
          </p>
        </div>
        <div
          ref={imageRef}
          className={imageInView ? styles.show2 : styles.hide2}
        >
          <Tilt
            options={{ transition: false, reset: false }}
            style={picStyles}
            className={styles.dizcordImage2}
          >
            <div>
              <img
                className={styles.dizcordImage2}
                src="https://raw.githubusercontent.com/abmah/portfolio/main/images/vscode.gif"
              />
              <div className={styles.dizcordButton1}>!!</div>
            </div>
          </Tilt>
        </div>
        {/* <img src="https://i.imgur.com/vqOyN2l.gif" /> */}
        <div
          ref={secondRef}
          className={secondInView ? styles.show2 : styles.hide2}
        >
          <p className={styles.DizcordParagraph2}>
            this app is meant to be used as a portfolio
          </p>
        </div>
      </div>
      {/* <div className={styles.partSection}></div> */}
    </div>
  );
}
