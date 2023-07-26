"use client";
import react from "react";
import styles from "./GoTo.module.scss";

export default function GoTo({ title, status, onClick, reference }) {
  return (
    <div className={styles.sectionDiv} onClick={onClick} ref={reference}>
      <hr className={status ? styles.clicked : styles.line} />
      <h4 className={status ? styles.h4Clicked : styles.h4}>{title}</h4>
    </div>
  );
}
