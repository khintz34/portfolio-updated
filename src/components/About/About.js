"use client";
import styles from "./About.module.scss";

export default function About({ reference }) {
  return (
    <main className={styles.aboutMain} ref={reference}>
      <div className={styles.intro}>
        Hi, my name is Kevin. I am a software engineer with a passion for
        learning new technologies and building useful tools! Currently I am
        working for{" "}
        <a
          className={styles.link}
          href="https://www.securian.com/"
          target="_blank"
        >
          Securian Financial{""}
        </a>
        as a senior software engineer. I work closely with the business line to
        deliver solutions that align with requirements, adhere to current
        industry standards, and give our clients the best possible experience
        using Securian products. I focus on building clean, intuitive user
        interfaces and writing clear, organized code to ensure that future
        developers can easily support and extend the application.
      </div>
      <div className={styles.intro}>
        Before Securian Financial, I went through an internal bootcamp at U.S.
        Bank to get into software and then quickly began exploring other
        technologies. As a result, I fell in love with frontend development and
        completed{" "}
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
        pickleball, hanging with my pup, or reading a book!
      </div>
    </main>
  );
}
