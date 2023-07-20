"use client";
import Image from "next/image";
import react, { useState, useEffect } from "react";
import styles from "./Experience.module.scss";
import { BsArrowUpRight } from "react-icons/bs";

// todo fix layout of title and company

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

  function gotoLink(el) {
    if (!mobile || (mobile && el)) {
      window.open(companyLink, "blank");
    }
  }

  return (
    <main className={styles.experienceMain} onClick={() => gotoLink(false)}>
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
                style={{ objectFit: "fill" }}
              />
              <div className={styles.blank}></div>
            </div>
            <div className={styles.topExp}>
              <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <p className={styles.interpunct}>·</p>
                <p className={styles.title} onClick={() => gotoLink(true)}>
                  {company}{" "}
                  <BsArrowUpRight
                    className={styles.icon}
                    style={{ textDecoration: "underline" }}
                  />
                </p>
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
                style={{ objectFit: "fill" }}
              />
              <div className={styles.blank}></div>
            </div>
          </div>
          <div className={styles.rightExp}>
            <div className={styles.topExp}>
              <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <p className={styles.interpunct}>·</p>
                <p className={styles.title}>
                  {company}
                  <BsArrowUpRight
                    className={styles.icon}
                    style={{ textDecoration: "underline" }}
                  />
                </p>
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
