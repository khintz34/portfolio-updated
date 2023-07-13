import react from "react";
import styles from "./archive.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Project from "../../components/Project/Project";
import milk from "../../assets/images/milk.png";
import hipcamp from "../../assets/images/hipcamp.png";
import football from "../../assets/images/footballapi.png";

export default function ProjectArchive() {
  return (
    <main className={styles.archiveMain}>
      <div className={styles.heading}>
        <Link href={"/"}>
          <p className={styles.h4}>
            <FaArrowLeft className={styles.icon} />
            Kevin Hintz
          </p>
        </Link>
      </div>
      <h1>All Projects</h1>
      <div className={styles.projectContainer}>
        <Project
          image={milk}
          title="Pump End Date Calculator"
          about="This was a project I made for my wife to find out when she can be done pumping based on critiera like stored milk, oz needed per day, and oz saved, and milk end date. It was created using React and Next.js, and is deployed through Vercel."
          alt="Pump End Date Calculator"
          tech={["React", "Next.js", "Vercel"]}
        />
        <Project
          image={hipcamp}
          title="Hipcamp Clone"
          about="This site is a clone of the popular camping website, Hipcamp. It utilizes Google Firebase to read and write new campsites from the database to the UI. Users can search for campsites via name, state, city, numbers of guests, pet friendly status and more. After one finds the perfect site they can book it. Additionally, users who would like to add new campsites to the database can do so if authenticated. This site was built using React.js. "
          alt="Hipcamp Clone Image"
          tech={["React", "GH Pages", "Google Firebase"]}
        />
        <Project
          image={football}
          title="EPL Team Tracker"
          about="This project was made to practice using APIs in a variety of different ways. It was created using React, Next.js, and API-Football from RapidAPI. The basic premise is you can find stats, schedules, rosters, and standings from each team in the English Premier League."
          alt="EPL Team Tracker Image"
          tech={["React", "Next.js", "Vercel", "RapidAPI"]}
        />
      </div>
    </main>
  );
}
