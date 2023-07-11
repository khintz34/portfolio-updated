"use client";
import Image from "next/image";
import react from "react";
import styles from "./Project.module.scss";

// todo why is epl trakcer different than others??

export default function Project({ image, alt, title, about, tech }) {
  return (
    <main className={styles.projectMain}>
      <div className={styles.imageBorder}>
        <Image
          src={image}
          width={150}
          height={80}
          alt={alt}
          objectFit="cover"
          // sizes="(max-width: 501px) 40vw, 10vw"
          // fill
        />
      </div>
      <div className={styles.projectInfo}>
        <h4 className={styles.h4}>{title}</h4>
        <p className={styles.about}>{about}</p>
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
