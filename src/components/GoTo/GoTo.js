import react from "react";
import styles from "./GoTo.module.scss";

export default function GoTo({ title }) {
  return (
    <div className={styles.sectionDiv}>
      <hr className={styles.line} />
      <h4 className={styles.h4}>{title}</h4>
    </div>
  );
}
