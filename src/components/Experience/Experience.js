"use client";
import Image from "next/image";
import react, { useState, useEffect } from "react";
import styles from "./Experience.module.scss";

// todo mobile images need fixing

export default function Experience({
  title,
  company,
  image,
  para,
  companyLink,
  dates,
  alt,
}) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);
  return (
    <main className={styles.experienceMain}>
      {mobile ? (
        <div className={styles.expMobile}>
          <div className={styles.topDiv}>
            <div className={styles.imageContainer}>
              <Image
                src={image}
                width={85}
                height={85}
                placeholder="blur"
                alt={alt}
                objectFit="fill"
              />
              <div className={styles.blank}></div>
            </div>
            <div className={styles.topExp}>
              <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <p className={styles.interpunct}>·</p>
                <p className={styles.title}>{company}</p>
              </div>
              <div className={styles.dates}>{dates}</div>
            </div>
          </div>
          <div className={styles.bottomExp}>
            <p className={styles.para}>{para}</p>
          </div>
        </div>
      ) : (
        <div className={styles.experienceContainer}>
          <div className={styles.leftExp}>
            <div className={styles.imageContainer}>
              <Image
                src={image}
                width={85}
                height={85}
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
        </div>
      )}
    </main>
  );
}
