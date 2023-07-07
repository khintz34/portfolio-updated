"use client";
import react, { useState } from "react";
import GoTo from "../GoTo/GoTo";
import styles from "../LeftMain/LeftMain.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function LeftMain() {
  const [aboutSection, setAboutSection] = useState(true);
  const [projectSection, setProjectSection] = useState(false);
  const [expSection, setExpSection] = useState(false);

  function handleClick(item) {
    setAboutSection(false);
    setProjectSection(false);
    setExpSection(false);

    if (item === "about") {
      setAboutSection(true);
    } else if (item === "project") {
      setProjectSection(true);
    } else {
      setExpSection(true);
    }
  }

  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.h1}>Kevin Hintz</h1>
        <h2 className={styles.h2}>Software Engineer at U.S. Bank</h2>
        <h3 className={styles.h3}>
          A tag line of some sort will go hear... havent written it yet
        </h3>
      </div>
      <div className={styles.goTos}>
        <GoTo
          title="About"
          status={aboutSection}
          onClick={() => handleClick("about")}
        />
        <GoTo
          title="Projects"
          status={projectSection}
          onClick={() => handleClick("project")}
        />
        <GoTo
          title="Experience"
          status={expSection}
          onClick={() => handleClick("exp")}
        />
      </div>
      <div className={styles.contacts}>
        <FaLinkedin className={styles.icon} />
        <FaGithub className={styles.icon} />
      </div>
    </main>
  );
}
