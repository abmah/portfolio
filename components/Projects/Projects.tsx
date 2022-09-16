import React from "react";
import Dizcord from "./Dizcord/Dizcord";
import Vscode from "./Vscode/Vscode";
import styles from "./projects.module.css";
import { useInView } from "react-intersection-observer";
export default function Projects() {
  const { ref, inView } = useInView();
  return (
    <>
      <div ref={ref} className={inView ? styles.show1 : styles.hide1}>
        <div className={styles.projectHeader}>personal projects</div>
      </div>
      <Dizcord />
      <Vscode />
    </>
  );
}
