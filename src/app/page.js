"use client";
import react, { useState, useRef, useEffect } from "react";
import GoTo from "@/components/GoTo/GoTo";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./page.module.css";
import About from "@/components/About/About";
import ProjectContainer from "@/components/ProjectContainer/ProjectContainer";
import ExperienceContainer from "@/components/ExperienceContainer/ExperienceContainer";
import { useInView } from "react-intersection-observer";

// todo create breakpoints to change which section is active... ask Dave avout thiis
// ! its called intersection observer

export default function Home() {
  const [aboutSection, setAboutSection] = useState(true);
  const [projectSection, setProjectSection] = useState(false);
  const [expSection, setExpSection] = useState(false);

  // const projectRef = useRef();
  // const expRef = useRef();
  // const [aboutVis, setAboutVis] = useState(true);
  // const [projectVis, setProjectVis] = useState(false);
  // const [expVis, setExpVis] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { ref: aboutRef, inView: aboutVis } = useInView();
  const { ref: projectRef, inView: projectVis } = useInView();
  const { ref: expRef, inView: expVis } = useInView();

  console.log("aboutVis: ", aboutVis);
  console.log("projectVis: ", projectVis);
  console.log("expVis: ", expVis);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    // const observer = new IntersectionObserver((entries) => {
    //   const entry = entries[0];
    //   setAboutVis(entry.isIntersecting);
    // });
    // observer.observe(aboutRef.current);

    //! figure out scroll direction then set the section based on which ones are visible
    //! should only be one at a time.
    //! if going up then the bottom on takes precedent, opposite is true as well.

    // if (aboutVis) {}

    // if (projectVis) {
    //   setProjectSection(true);
    // } else {
    //   setProjectSection(false);
    // }
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
    let item = el.current;
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
            <a
              href="https://www.linkedin.com/in/kevin-p-hintz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.icon} />
            </a>
            <a
              href="https://github.com/khintz34"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={styles.icon} />
            </a>
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
