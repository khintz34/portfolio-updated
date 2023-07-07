"use client";
import Image from "next/image";
import react from "react";
import styles from "./Project.module.scss";

export default function Project({ image, alt, title, about, tech }) {
  return (
    <main className={styles.projectMain}>
      <Image
        src={image}
        width={225}
        height={75}
        alt={alt}
        className={styles.image}
      />
      <div className={styles.projectInfo}>
        <h4 className={styles.h4}>{title}</h4>
        <p>{about}</p>
        <div className={styles.techContainer}>
          {tech.map((val) => {
            return (
              <div key={`${title}-${val}`} className={styles.tech}>
                {val}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
