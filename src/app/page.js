"use client";
import react, { useState, useRef, useEffect } from "react";
import GoTo from "@/components/GoTo/GoTo";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./page.module.css";
import About from "@/components/About/About";
import ProjectContainer from "@/components/ProjectContainer/ProjectContainer";
import ExperienceContainer from "@/components/ExperienceContainer/ExperienceContainer";

// todo create breakpoints to change which section is active... ask Dave avout thiis
// todo position sticky on headings
// todo add links for contact icons

export default function Home() {
  const [aboutSection, setAboutSection] = useState(true);
  const [projectSection, setProjectSection] = useState(false);
  const [expSection, setExpSection] = useState(false);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const expRef = useRef(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });

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

  function scrollTo(el) {
    console.log(el);
    let item = el.current;
    console.log(el.current);
    item.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className={styles.main}>
      <div className={styles.leftCol}>
        <div className={styles.leftMain}>
          <div>
            <h1 className={styles.h1}>Kevin Hintz</h1>
            <h2 className={styles.h2}>
              Software Engineer <br></br> U.S. Bank
            </h2>
            <h3 className={styles.h3}>
              Dedicated to optimizing customer experience through clean UI,
              meticulous code organization, and high-performance solutions.
            </h3>
          </div>
          <div className={styles.contacts}>
            <FaLinkedin className={styles.icon} />
            <FaGithub className={styles.icon} />
          </div>
          <div className={` ${styles.goTos}`}>
            <GoTo
              title="About"
              status={aboutSection}
              onClick={() => {
                handleClick("about");
                scrollTo(aboutRef);
              }}
            />
            <GoTo
              title="Projects"
              status={projectSection}
              onClick={() => {
                handleClick("project");
                scrollTo(projectRef);
              }}
            />
            <GoTo
              title="Experience"
              status={expSection}
              onClick={() => {
                handleClick("exp");
                scrollTo(expRef);
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.rightCol}>
        <h2 className={styles.heading}>About</h2>
        <div ref={aboutRef}>
          <About />
        </div>
        <h2 className={styles.heading}>Projects</h2>
        <div ref={projectRef}>
          <ProjectContainer />
        </div>
        <h2 className={styles.heading}>Experience</h2>
        <div ref={expRef}>
          <ExperienceContainer />
        </div>
      </div>
    </main>
  );
}
