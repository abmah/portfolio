import React from "react";
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

  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  useEffect(() => {
    // mouse event
    document.addEventListener("mousemove", (e) => {
      // console.log(e.x, e.y);
      setX(e.x);
      setY(e.y);
    });
  }, []);

  const styling = {
    "--x": x + "px",
    "--y": y + "px",
  };

  // const handleChange = (e: { target: { name: string; value: string } }) => {
  //   if (e.target.name === "name") {
  //     setName(e.target.value);
  //   } else if (e.target.name === "email") {
  //     setEmail(e.target.value);
  //   } else {
  //     setMessage(e.target.value);
  //   }
  // };

  return (
    /*@ts-ignore */
    <div style={styling} className={styles.contactpage}>
      <div className={styles.light}></div>
      <div ref={titleRef} className={titleInView ? styles.show : styles.hide}>
        <div className={styles.contactHeader}>Get in touch</div>
      </div>
      <div className={styles.contactBody}>
        <div ref={linksRef} className={linksInView ? styles.show : styles.hide}>
          <div className={styles.socialsGroup}>
            <div className={styles.socialsGroup}>
              <a href="mailto: 1234@example.com">
                <div className={styles.emailSend}> ab.mahasnh@gmail.com</div>
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
    </div>
  );
}
