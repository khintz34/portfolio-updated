import styles from "./archive.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Project from "../../components/Project/Project";
import milk from "../../assets/images/milk.png";
import hipcamp from "../../assets/images/hipcamp.png";
import ispy from "../../assets/images/ispy.png";
import workout from "../../assets/images/workout.png";
import dadmode from "../../assets/images/dadmode.png";
import sam from "../../assets/images/sam.png";
import grocery from "../../assets/images/grocery.png";
import explorepass from "../../assets/images/explorepass.png";

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
          title="Grocery mate"
          about="This is a project I created to make our family's life a little easier at the grocery store. Not only is a grocery list, but it groups the items by category and tells you the path to take based on how you walk around the store. No more going back to Produce because you missed Apples when looking at your list!"
          alt="Grocery Mate Screenshot"
          tech={[
            "React",
            "Next.js",
            "Vercel",
            "SCSS, TypeScript",
            "Google Firebase",
            "Google Auth",
          ]}
          link="https://grocerymate-nine.vercel.app/SignIn"
        />
        <Project
          image={milk}
          title="Pump End Date Calculator"
          about="This was a project I made for my wife to find out when she can be done pumping based on critiera like stored milk, oz needed per day, and oz saved, and milk end date. It was created using React and Next.js, and is deployed through Vercel."
          alt="Pump End Date Calculator"
          tech={["React", "Next.js", "Vercel"]}
          link="https://milk-bottle-storage.vercel.app/"
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
          image={ispy}
          title="I Spy"
          about="I Spy is an interative game where users can see how quickly they can find a list of items in an image. Featuring six different levels and a global leaderboard for each image, they can see how they stack up againt the competition. I Spy was created with React.js and Google Firebase."
          alt="I Spy Image"
          tech={["React", "Google Firebase"]}
          link="https://khintz34.github.io/i-spy/"
        />
        <Project
          image={dadmode}
          title="Dad Mode"
          about="Dad Mode is an online shopping site where dads from all walks of life can find solace by buying dad shoes, jorts, lawn mowers, or even fanny packs. As a user shops they can add items to their cart and see their goods and total price when they go to check out. Dad Mode was created using React.js. "
          alt="Dad Mode Image"
          tech={["React"]}
          link="https://khintz34.github.io/shopping-cart/"
        />
        <Project
          image={workout}
          title="Workout Generator"
          about="I found myself doing the same workouts over and over again with little variation. Even when I tried a new exercise I would forget about it the next time I lifted. So I created a workout generator app that gives you a list of exercises based on muscle groups or exercise types that you input. It randomizes the returned result so you won't be doing the same workout twice in a row. This workout generator was created using React, GH Pages, and the Exercise API from API-Ninja."
          alt="Workout Generator Image"
          tech={["React", "GH Pages", "API-Ninja"]}
          link="https://khintz34.github.io/workout-generator/"
        />
      </div>
    </main>
  );
}
