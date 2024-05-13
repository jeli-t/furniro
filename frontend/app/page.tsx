import styles from "./page.module.css";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { CategoryPreview } from "@/components/CategoryPreview/CategoryPreview";
import { ProductsPreview } from "@/components/ProductsPreview/ProductsPreview";


export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <CategoryPreview />
      <ProductsPreview />
    </main>
  );
}
