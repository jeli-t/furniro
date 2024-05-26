import styles from "./page.module.css";
import { PageNotFound } from "@/components/PageNotFound/PageNotFound";


export default function Home() {
  return (
    <main className={styles.main}>
      <PageNotFound 
        title1="This Subpage"
        title2="Doesn't Exist"
        description1="This website is only part of my portfolio."
        description2="To contact me visit my main website."
      />
    </main>
  );
}
