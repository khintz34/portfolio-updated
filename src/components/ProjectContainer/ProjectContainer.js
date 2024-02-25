"use client";
import react from "react";
import Project from "../Project/Project";
import styles from "./ProjectContainer.module.scss";
import milk from "../../assets/images/milk.png";
import hipcamp from "../../assets/images/hipcamp.png";
import football from "../../assets/images/footballapi.png";
import nana from "../../assets/images/nana.png";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function ProjectContainer({ reference }) {
  return (
    <main className={styles.projectContainer} ref={reference}>
      <Project
        image={sam}
        title="Sam Pausha Coaching"
        about="This is a project for a freelance client of mine, Sam Pausha Coaching. Its his company website for information about his coaching offersings, ways to contact him, and to learn about Sam Pausha Coaching."
        alt="Sam Pausha Coaching Hero Image - Swim Bike Run"
        tech={["React", "Next.js", "Vercel", "SCSS, TypeScript"]}
        link="https://www.sampaushacoaching.com/"
      />
      <Project
        image={nana}
        title="Nana's Memories"
        about="This project was made as a place to capture memories of my grandma. It serves as a place for my family to post their favorite memories of our grandma. It utilizes Next.js, Vercel, React, and Google Firebase Realtime Databse and Storage. "
        alt="Nana's Memories Image"
        tech={["React", "Next.js", "Vercel", "Google Firebase"]}
        link="https://nanas-memories.vercel.app/"
      />
      <Project
        image={hipcamp}
        title="Hipcamp Clone"
        about="This site is a clone of the popular camping website, Hipcamp. It utilizes Google Firebase to read and write new campsites from the database to the UI. Users can search for campsites via name, state, city, numbers of guests, pet friendly status and more. After one finds the perfect site they can book it. Additionally, users who would like to add new campsites to the database can do so if authenticated. This site was built using React.js. "
        alt="Hipcamp Clone Image"
        tech={["React", "GH Pages", "Google Firebase"]}
        link="https://khintz34.github.io/hipcamp-clone-TOP/"
      />
      <Project
        image={football}
        title="EPL Team Tracker"
        about="This project was made to practice using APIs in a variety of different ways. It was created using React, Next.js, and API-Football from RapidAPI. The basic premise is you can find stats, schedules, rosters, and standings from each team in the English Premier League."
        alt="EPL Team Tracker Image"
        tech={["React", "Next.js", "Vercel", "RapidAPI"]}
        link="https://football-api-app.vercel.app/"
      />

      <p className={styles.h4}>
        <Link href={"/ProjectArchive"}>
          See More Projects <FaArrowRight className={styles.icon} />
        </Link>
      </p>
    </main>
  );
}
