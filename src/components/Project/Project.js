"use client";
import Image from "next/image";
import react, { useState, useEffect } from "react";
import styles from "./Project.module.scss";
import { BsArrowUpRight } from "react-icons/bs";

export default function Project({ image, alt, title, about, tech, link }) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 999) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  function gotoLink(el) {
    if (!mobile || (mobile && el)) {
      window.open(link, "blank");
    }
  }

  return (
    <main className={styles.projectMain} onClick={() => gotoLink(false)}>
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
        <h4 className={styles.h4} onClick={() => gotoLink(true)}>
          {title}
          <BsArrowUpRight
            className={styles.icon}
            style={{ textDecoration: "underline" }}
          />
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
