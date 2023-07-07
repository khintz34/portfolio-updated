import LeftMain from "@/components/LeftMain/LeftMain";
import RightMain from "@/components/RightMain/RightMain";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  console.log("test");
  return (
    <main className={styles.main}>
      <div className={styles.leftCol}>
        <LeftMain />
      </div>
      <div className={styles.rightCol}>
        <RightMain />
      </div>
    </main>
  );
}
