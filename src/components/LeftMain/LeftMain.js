import react from "react";
import GoTo from "../GoTo/GoTo";
import styles from "../LeftMain/LeftMain.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function LeftMain() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.h1}>Kevin Hintz</h1>
        <h2 className={styles.h2}>Software Engineer at U.S. Bank</h2>
        <h3 className={styles.h3}>
          A tag line of some sort will go hear... havent written it yet
        </h3>
      </div>
      <div className={styles.goTos}>
        <GoTo title="About" />
        <GoTo title="Projects" />
        <GoTo title="Experience" />
      </div>
      <div className={styles.contacts}>
        <FaLinkedin className={styles.icon} />
        <FaGithub className={styles.icon} />
      </div>
    </main>
  );
}
