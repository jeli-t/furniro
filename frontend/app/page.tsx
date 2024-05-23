import styles from "./page.module.css";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { CategoryPreview } from "@/components/CategoryPreview/CategoryPreview";
import { ProductsPreview } from "@/components/ProductsPreview/ProductsPreview";
import { Inspirations } from "@/components/Inspirations/Inspirations";


export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <CategoryPreview />
      <ProductsPreview />
      <Inspirations />
    </main>
  );
}
