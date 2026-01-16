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

export default function Home() {
  const [aboutSection, setAboutSection] = useState(true);
  const [projectSection, setProjectSection] = useState(false);
  const [expSection, setExpSection] = useState(false);

  const option = { threshold: 0.3 };
  const [mobile, setMobile] = useState(false);
  const aboutRefer = useRef(null);
  const projectRefer = useRef();
  const expRefer = useRef();
  const [aboutRef, aboutVis] = useInView(option);
  const { ref: projectRef, inView: projectVis } = useInView(option);
  const { ref: expRef, inView: expVis } = useInView(option);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  useEffect(() => {
    if (!mobile) {
      handleSection();
    } else {
      handleHeaders();
    }
  });

  function handleHeaders() {
    console.log("heand");
  }

  function handleSection() {
    if (aboutVis) {
      setAboutSection(true);
      setProjectSection(false);
      setExpSection(false);
    } else if (projectVis) {
      setAboutSection(false);
      setProjectSection(true);
      setExpSection(false);
    } else {
      setAboutSection(false);
      setProjectSection(false);
      setExpSection(true);
    }
  }

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
              Software Engineer <br></br> Securian Financial
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
                scrollTo(aboutRefer);
              }}
            />
            <GoTo
              title="Projects"
              status={projectSection}
              onClick={() => {
                handleClick("project");
                scrollTo(projectRefer);
              }}
            />
            <GoTo
              title="Experience"
              status={expSection}
              onClick={() => {
                handleClick("exp");
                scrollTo(expRefer);
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.rightCol}>
        <h2 className={styles.heading}>About</h2>
        <div ref={aboutRef}>
          <About reference={aboutRefer} />
        </div>
        <h2 className={styles.heading}>Projects</h2>
        <div ref={projectRef}>
          <ProjectContainer reference={projectRefer} />
        </div>
        <h2 className={styles.heading}>Experience</h2>
        <div ref={expRef}>
          <ExperienceContainer reference={expRefer} />
        </div>
      </div>
    </main>
  );
}
