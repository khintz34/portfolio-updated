"use client";
import react from "react";
import styles from "./About.module.scss";

export default function About() {
  return (
    <main className={styles.aboutMain}>
      <div className={styles.intro}>
        Hi, my name is Kevin. I am a software engineer with a passion for Web
        Development! Currently I am working for a{" "}
        <a
          className={styles.link}
          href="https://www.usbank.com/index.html"
          target="_blank"
        >
          U.S. Bank{" "}
        </a>
        as an engineer working on a system that services millions of credit card
        transactions every day. The reason why I have gotten into front-end dev
        work is because I love taking data and turning it into a user-friendly
        interactive web app.
      </div>
      <div className={styles.intro}>
        I went through an internal bootcamp at U.S. Bank to get into software
        and then quickly began exploring other technologies. As a result, I fell
        in love with frontend development and completed{" "}
        <a
          className={styles.link}
          href="https://www.theodinproject.com/"
          target="_blank"
        >
          The Odin Project
        </a>
        , focusing on JavaScript, React, and Node.js. Since completing the
        course, I have created several personal projects ranging from useful to
        whimsical but the common theme is continued learning and development.
      </div>
      <div className={styles.intro}>
        Away from the keyboard you can find me with my family, playing soccer or
        pickleball, hanging with my pups, or reading a book!
      </div>
    </main>
  );
}
