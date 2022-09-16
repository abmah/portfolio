import { useRef, useEffect } from "react";
import styles from "./cursor.module.css";

export default function Cursor() {
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  const mainCursor = useRef(null);
  const secondaryCursor = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;
      //@ts-ignore
      positionRef.current.mouseX =
        //@ts-ignore
        mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY =
        //@ts-ignore
        mouseY - secondaryCursor.current.clientHeight / 2;
      //@ts-ignore
      mainCursor.current.style.transform = `translate3d(${
        //@ts-ignore
        mouseX - mainCursor.current.clientWidth / 2
        // @ts-ignore
      }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
    });

    return () => {};
  }, []);
  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      //@ts-ignore
      secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);
  return (
    <>
      <div ref={mainCursor} className={styles.mainCursor}></div>
      <div ref={secondaryCursor} className={styles.secondaryCursor}>
        <div className={styles.cursorbackground}></div>
      </div>
    </>
  );
}
