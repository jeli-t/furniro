import styles from "./page.module.css";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { CategoryPreview } from "@/components/CategoryPreview/CategoryPreview";


export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <CategoryPreview />
    </main>
  );
}
