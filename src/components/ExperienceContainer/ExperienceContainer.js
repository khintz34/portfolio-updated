"use client";
import react from "react";
import Experience from "../Experience/Experience";
import styles from "./ExperienceContainer.module.scss";
import usb from "../../assets/images/usb.png";
import bethel from "../../assets/images/bethel.jpeg";
import odin from "../../assets/images/odin.png";

// todo write paras

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
      <Experience
        title="Project Manager"
        company="U.S. Bank"
        para="PAra graph about lorem ipsum"
        dates="Mar 2021 - Sep 2021"
        image={usb}
        alt="U.S. Bank logo"
      />
      <Experience
        title="HR Coordinator"
        company="U.S. Bank"
        para="PAra graph about lorem ipsum"
        dates="Jun 2018 - Mar 2021"
        image={usb}
        alt="U.S. Bank logo"
      />
      <Experience
        title="B.S. Business"
        company="Bethel University "
        para="PAra graph about lorem ipsum"
        dates="Sep 2014 - May 2018"
        image={bethel}
        alt="Bethel University Logo"
      />
      <Experience
        title="Completed"
        company="The Odin Project"
        para="PAra graph about lorem ipsum"
        dates="Oct 2020 - Jan 2023"
        image={odin}
        alt="The Odin Project Logo"
      />
    </main>
  );
}
