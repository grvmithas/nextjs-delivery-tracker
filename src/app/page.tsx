import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      Delivery Tracker home
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
