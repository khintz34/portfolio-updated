"use client";
import react from "react";
import Project from "../Project/Project";
import styles from "./ProjectContainer.module.scss";
import milk from "../../assets/images/milk.png";

export default function ProjectContainer() {
  return (
    <main>
      <Project
        image={milk}
        title="Milk Storage Calculator"
        about="This was a project I made for my wife to find out when she can be done pumping based on critiera like stored milk, oz needed per day, and oz saved, and milk end date. It was created using React and Next.js, and is deployed through Vercel."
        alt="Milk Stoage Calculator"
      />
    </main>
  );
}
