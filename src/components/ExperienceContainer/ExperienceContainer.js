"use client";
import react from "react";
import Experience from "../Experience/Experience";
import styles from "./ExperienceContainer.module.scss";
import usb from "../../assets/images/usb.png";

export default function ExperienceContainer() {
  return (
    <main className={styles.experienceContainer}>
      <Experience
        title="Software Engineer"
        company="U.S. Bank"
        para="PAra graph about lorem ipsum"
        dates="Sep 2021 - Present"
        image={usb}
        alt="U.S. Bank logo"
      />
    </main>
  );
}
