import { useRef } from "react";
import { DiGithubAlt, DiGithubBadge } from "react-icons/di";
import { useState, useEffect } from "react";
import { SiLinkedin } from "react-icons/si";
import { BiMailSend } from "react-icons/bi";
import styles from "./ContactPage.module.css";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";
export default function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const inputData = {
  //   name: name,
  //   email: email,
  //   message: message,
  // };
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [wentWorng, setWentWrong] = useState(false);
  const handleSubmit = (e: {
    target: string | HTMLFormElement;
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    // console.log(inputData);
    setSending(true);
    emailjs
      .sendForm(
        "service_huxpass",
        "template_illumjb",
        e.target,
        "-EKQGbqtkaDYsdD2p"
      )
      .then(
        (result) => {
          // console.log(result.text);
          // @ts-ignore
          e.target.reset();
          setSending(false);
          setSent(true);
          setTimeout(() => {
            setSent(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setSending(false);
          setWentWrong(true);
          setTimeout(() => {
            setWentWrong(false);
          }, 3000);
        }
      );
  };

  const { ref: titleRef, inView: titleInView } = useInView({ delay: 50 });
  const { ref: linksRef, inView: linksInView } = useInView({ delay: 100 });
  const { ref: formRef, inView: fromInView } = useInView({
    delay: 50,
  });

  // const [x, setX] = React.useState(0);
  // const [y, setY] = React.useState(0);
  // useEffect(() => {
  //   // mouse event
  //   document.addEventListener("mousemove", (e) => {
  //     // console.log(e.x, e.y);
  //     setX(e.x);
  //     setY(e.y);
  //   });
  // }, []);

  // const styling = {
  //   "--x": x + "px",
  //   "--y": y + "px",
  // };

  // const handleChange = (e: { target: { name: string; value: string } }) => {
  //   if (e.target.name === "name") {
  //     setName(e.target.value);
  //   } else if (e.target.name === "email") {
  //     setEmail(e.target.value);
  //   } else {
  //     setMessage(e.target.value);
  //   }
  // };
  // const positionRef = useRef({
  //   mouseX: 0,
  //   mouseY: 0,
  //   destinationX: 0,
  //   destinationY: 0,
  //   distanceX: 0,
  //   distanceY: 0,
  //   key: -1,
  // });

  // const blobRef = useRef(null);

  // useEffect(() => {
  //   document.addEventListener("mousemove", (event) => {
  //     const { clientX, clientY } = event;

  //     const mouseX = clientX;
  //     const mouseY = clientY;
  //     console.log(`mouseX: ${mouseX}, mouseY: ${mouseY}`);
  //     // @ts-ignore
  //     blobRef.current.style.transform = `translate(${mouseX / 10}px, ${
  //       mouseY / 10
  //     }px)`;
  //   });

  //   return () => {};
  // }, []);

  return (
    /*@ts-ignore */
    <div className={styles.contactpage}>
      <div ref={titleRef} className={titleInView ? styles.show : styles.hide}>
        <div className={styles.contactHeader}>GET IN TOUCH</div>
      </div>
      <div className={styles.contactBody}>
        <div ref={linksRef} className={linksInView ? styles.show : styles.hide}>
          <div className={styles.socialsGroup}>
            <div className={styles.socialsGroup}>
              <a href="mailto: 1234@example.com">
                <div className={styles.emailSend}>ab.mahasnh@gmail.com</div>
              </a>
            </div>
          </div>
          <div className={styles.socialsGroup}>
            <a href="https://www.linkedin.com/in/ab-mahasnh-23672323a/">
              LinkedIn
            </a>
            <SiLinkedin className={styles.LinkedinLogo} />
          </div>
          <div className={styles.socialsGroup}>
            <a href="https://github.com/abmah">Github</a>
            <DiGithubAlt className={styles.LinkedinLogo} />
          </div>
        </div>
        <div ref={formRef} className={fromInView ? styles.show : styles.hide}>
          <div className={styles.contactform}>
            <h1>send me a message:</h1>
            <form
              // @ts-ignore
              onSubmit={handleSubmit}
              className={styles.contactforminner}
              method="post"
            >
              <label htmlFor="name">Name</label>
              <input required type="text" name="name" id="name" />

              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required={true} />

              <label htmlFor="message">Message</label>
              <input required name="message" id="message" />
              {sending ? <div>sending.....</div> : ""}
              {sent ? <div>sent!</div> : ""}
              {wentWorng ? <div>something went wrong!</div> : ""}

              <button disabled={sending}>Send!</button>
            </form>
          </div>
        </div>
      </div>

      <svg
        className={styles.blob}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="pink"
          d="M44.3,-66.9C58.5,-68.5,71.9,-58.8,74.1,-45.8C76.3,-32.8,67.4,-16.4,60.3,-4.1C53.3,8.3,48.1,16.5,43.9,26.2C39.8,35.8,36.6,46.9,29.5,56.2C22.3,65.4,11.2,72.9,-2,76.3C-15.1,79.8,-30.2,79.2,-36.4,69.4C-42.6,59.5,-39.9,40.5,-47.8,27.4C-55.7,14.3,-74.3,7.2,-75.8,-0.9C-77.3,-8.9,-61.8,-17.8,-49,-22.5C-36.2,-27.2,-26.2,-27.6,-18.5,-29.8C-10.8,-32,-5.4,-35.9,4.8,-44.2C15,-52.6,30.1,-65.3,44.3,-66.9Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}
