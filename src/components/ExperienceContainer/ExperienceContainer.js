"use client";
import react from "react";
import Experience from "../Experience/Experience";
import styles from "./ExperienceContainer.module.scss";
import usb from "../../assets/images/usb.png";
import bethel from "../../assets/images/bethel.jpeg";
import odin from "../../assets/images/odin.png";

export default function ExperienceContainer() {
  return (
    <main className={styles.experienceContainer}>
      <Experience
        title="Software Engineer"
        company="U.S. Bank"
        para="Create and debug programs on the merchant processing system which handles millions of credit card transactions daily. Ensure the code meets testing standards set by the business line. Collaborate with cross-functional teams to design, develop, and thoroughly test innovative features, ensuring seamless integration into higher environments while meeting all technical design requirements."
        dates="Sep 2021 - Present"
        image={usb}
        alt="U.S. Bank logo"
      />
      <Experience
        title="Project Manager"
        company="U.S. Bank"
        para="Transformed vast datasets into impactful dashboard reports, leveraging Tableau and Excel, to drive informed decision-making through clear data visualization and facilitate actionable discussions between HR and the Business Line."
        dates="Mar 2021 - Sep 2021"
        image={usb}
        alt="U.S. Bank logo"
      />
      <Experience
        title="HR Coordinator"
        company="U.S. Bank"
        para="Strategically crafted and meticulously maintained the reorganization playbook, ensuring a blueprint for future success and adherence to local, state, and national legal requirements for current and upcoming organization-wide initiatives."
        dates="Jun 2018 - Mar 2021"
        image={usb}
        alt="U.S. Bank logo"
      />
      <Experience
        title="B.A. Business"
        company="Bethel University "
        para="Bachelor of Arts in Business with an emphasis in Human Resources and a minor in Spanish. Graduated suma cum laude with a GPA of 3.96. Captained the varsity soccer team for two years and recieved all-region academic honors."
        dates="Sep 2014 - May 2018"
        image={bethel}
        alt="Bethel University Logo"
      />
      <Experience
        title="Completed"
        company="The Odin Project"
        para="Online curriculum for full stack development focused on HTML, CSS, JavaScript, React, Jest, Express, MongoDB and NodeJS. "
        dates="Oct 2020 - Jan 2023"
        image={odin}
        alt="The Odin Project Logo"
      />
    </main>
  );
}
