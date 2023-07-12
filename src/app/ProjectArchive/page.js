import react from "react";
import styles from "./archive.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ProjectArchive() {
  return (
    <main className={styles.archiveMain}>
      <div className={styles.heading}>
        <Link href={"/ProjectArchive"}>
          <p className={styles.h4}>
            <FaArrowLeft className={styles.icon} />
            Kevin Hintz
          </p>
        </Link>
      </div>
    </main>
  );
}
