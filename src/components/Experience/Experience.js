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
  console.log(image);
  return (
    <main className={styles.experienceMain}>
      <div className={styles.topExp}>
        <div className={styles.image}>
          {/* <Image
            src={image}
            width={80}
            height={80}
            alt={alt}
            objectFit="contain"
          /> */}
          <img src={image.src} alt="" className={styles.image} />
        </div>
        <div>
          <div className={styles.info}>
            <p>{title}</p>
            <p>-</p>
            <p>{company}</p>
          </div>
          <div>{dates}</div>
        </div>
      </div>
      <div className="bottomExp">
        <p>{para}</p>
      </div>
    </main>
  );
}
