"use client";
import Project from "../Project/Project";
import styles from "./ProjectContainer.module.scss";
import hipcamp from "../../assets/images/hipcamp.png";
import explorepass from "../../assets/images/explorepass.png";
import sam from "../../assets/images/sam.png";
import grocery from "../../assets/images/grocery.png";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function ProjectContainer({ reference }) {
  return (
    <main className={styles.projectContainer} ref={reference}>
      <Project
        image={explorepass}
        title="The Explore Pass"
        about="The Explore Pass gives you FREE or discounted access to the best Twin Cities attractions written in React, Node, and uses AWS Amplify."
        alt="The Explore Pass Hero Image"
        tech={["React", "Node", "Amplify", "SES", "DynamoDB", "Cognito"]}
        link="https://theexplorepass.com"
      />
      <Project
        image={sam}
        title="Sam Pausha Coaching"
        about="This is a project for a freelance client of mine, Sam Pausha Coaching. Its his company website for information about his coaching offersings, ways to contact him, and to learn about Sam Pausha Coaching."
        alt="Sam Pausha Coaching Hero Image - Swim Bike Run"
        tech={["React", "Next.js", "Vercel", "SCSS", "TypeScript"]}
        link="https://sampaushacoaching.vercel.app"
      />
      <Project
        image={grocery}
        title="Grocery Mate"
        about="This is a project I created to make our family's life a little easier at the grocery store. Not only is a grocery list, but it groups the items by category and tells you the path to take based on how you walk around the store. No more going back to Produce because you missed Apples when looking at your list!"
        alt="Grocery Mate Screenshot"
        tech={[
          "React",
          "Next.js",
          "Vercel",
          "SCSS",
          "TypeScript",
          "Google Firebase",
          "Google Auth",
        ]}
        link="https://grocerymate-nine.vercel.app/SignIn"
      />
      <Project
        image={hipcamp}
        title="Hipcamp Clone"
        about="This site is a clone of the popular camping website, Hipcamp. It utilizes Google Firebase to read and write new campsites from the database to the UI. Users can search for campsites via name, state, city, numbers of guests, pet friendly status and more. After one finds the perfect site they can book it. Additionally, users who would like to add new campsites to the database can do so if authenticated. This site was built using React.js. "
        alt="Hipcamp Clone Image"
        tech={["React", "GH Pages", "Google Firebase"]}
        link="https://khintz34.github.io/hipcamp-clone-TOP/"
      />

      <p className={styles.h4}>
        <Link href={"/ProjectArchive"}>
          See More Projects <FaArrowRight className={styles.icon} />
        </Link>
      </p>
    </main>
  );
}
