"use client";
import Image from "next/image";
import react from "react";
import styles from "./Experience.module.scss";

// todo change topExp to leftExp and have that just be image
// todo change bttomExp to rightExp and make that flex column

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
          {/* <Image
            src={image}
            width={80}
            height={80}
            alt={alt}
            objectFit="contain"
          /> */}
          <img src={image.src} alt="" className={styles.image} />
        </div>
      </div>
      <div className={styles.rightExp}>
        <div className={styles.rando}>
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
