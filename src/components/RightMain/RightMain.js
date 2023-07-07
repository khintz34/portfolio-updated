"use client";
import react from "react";
import About from "../About/About";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import styles from "./RightMain.module.scss";

export default function RightMain() {
  return (
    <main className={styles.rightCol}>
      <About />
      <ProjectContainer />
    </main>
  );
}
