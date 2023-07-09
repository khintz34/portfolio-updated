"use client";
import Image from "next/image";
import react from "react";
import styles from "./Experience.module.scss";

export default function Experience({
  title,
  company,
  image,
  para,
  companyLink,
  dates,
  alt,
}) {
  return (
    <main className={styles.experienceMain}>
      <div className={styles.leftExp}>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            width={80}
            height={80}
            placeholder="blur"
            alt={alt}
            objectFit="fill"
          />
          <div className={styles.blank}></div>
        </div>
      </div>
      <div className={styles.rightExp}>
        <div className={styles.topExp}>
          <div className={styles.info}>
            <p className={styles.title}>{title}</p>
            <p className={styles.interpunct}>·</p>
            <p className={styles.title}>{company}</p>
          </div>
          <div className={styles.dates}>{dates}</div>
        </div>
        <div className={styles.bottomExp}>
          <p className={styles.para}>{para}</p>
        </div>
      </div>
    </main>
  );
}
