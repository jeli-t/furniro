import styles from "./page.module.css";
import { PageNotFound } from "@/components/PageNotFound/PageNotFound";


export default function Home() {
  return (
    <main className={styles.main}>
      <PageNotFound />
    </main>
  );
}
