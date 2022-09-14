import React from "react";
import { DiGithubAlt, DiGithubBadge } from "react-icons/di";
import { SiLinkedin } from "react-icons/si";
import { useState } from "react";
import styles from "./ContactPage.module.css";
import emailjs from "emailjs-com";
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
          console.log(result.text);
          // @ts-ignore
          e.target.reset();
          setSending(false);
        },
        (error) => {
          console.log(error.text);
          setSending(false);
        }
      );
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
    <div className={styles.contactpage}>
      <div className={styles.contactHeader}>Get in touch</div>
      <div className={styles.contactBody}>
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

        <div className={styles.contactform}>
          <form
            // @ts-ignore
            onSubmit={handleSubmit}
            className={styles.contactforminner}
            method="post"
          >
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required={true} />

            <label htmlFor="message">Message</label>
            <input name="message" id="message" />
            {sending ? <div>sending.....</div> : ""}

            <button disabled={sending}>Send!</button>
          </form>
        </div>
      </div>
    </div>
  );
}
