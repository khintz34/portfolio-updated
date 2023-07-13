import react from "react";
import styles from "./archive.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Project from "../../components/Project/Project";
import milk from "../../assets/images/milk.png";
import hipcamp from "../../assets/images/hipcamp.png";
import football from "../../assets/images/footballapi.png";
import ispy from "../../assets/images/ispy.png";
import workout from "../../assets/images/workout.png";
import dadmode from "../../assets/images/dadmode.png";

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
        <Project
          image={ispy}
          title="I Spy"
          about="I Spy is an interative game where users can see how quickly they can find a list of items in an image. Featuring six different levels and a global leaderboard for each image, they can see how they stack up againt the competition. I Spy was created with React.js and Google Firebase."
          alt="I Spy Image"
          tech={["React", "Google Firebase"]}
        />
        <Project
          image={dadmode}
          title="Dad Mode"
          about="Dad Mode is an online shopping site where dads from all walks of life can find solace by buying dad shoes, jorts, lawn mowers, or even fanny packs. As a user shops they can add items to their cart and see their goods and total price when they go to check out. Dad Mode was created using React.js. "
          alt="Dad Mode Image"
          tech={["React"]}
        />
        <Project
          image={workout}
          title="Workout Generator"
          about="I found myself doing the same workouts over and over again with little variation. Even when I tried a new exercise I would forget about it the next time I lifted. So I created a workout generator app that gives you a list of exercises based on muscle groups or exercise types that you input. It randomizes the returned result so you won't be doing the same workout twice in a row. This workout generator was created using React, GH Pages, and the Exercise API from API-Ninja."
          alt="Workout Generator Image"
          tech={["React", "GH Pages", "API-Ninja"]}
        />
      </div>
    </main>
  );
}
