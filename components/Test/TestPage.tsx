import React, { useEffect } from "react";
import { setInterval } from "timers/promises";
import styles from "./Test.module.css";
export default function TestPage() {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  // useEffect(() => {
  //   // mouse event
  //   document.addEventListener("mousemove", (e) => {
  //     console.log(e.x, e.y);
  //     setX(e.x);
  //     setY(e.y);
  //   });
  // }, []);

  // const styling = {
  //   "--x": x + "px",
  //   "--y": y + "px",
  // };
  return (
    <div>
      <section className={styles.section}>
        <h2>Woke up and let's live</h2>
      </section>
      {/*@ts-ignore */}
      <div style={styling} className={styles.light}></div>
    </div>
  );
}
