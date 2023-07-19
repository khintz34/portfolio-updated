"use client";
import Image from "next/image";
import react from "react";
import styles from "./Project.module.scss";
import { BsArrowUpRight } from "react-icons/bs";

// todo mobile images need fixing
// todo mobile turn off mobile click
// todo add modal or links
// todo add arrow animation on hover

export default function Project({ image, alt, title, about, tech }) {
  return (
    <main className={styles.projectMain}>
      <div className={styles.imageBorder}>
        <Image
          src={image}
          width={150}
          height={80}
          alt={alt}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.projectInfo}>
        <h4 className={styles.h4}>
          {title}
          <BsArrowUpRight className={styles.icon} />
        </h4>
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
