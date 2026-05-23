'use client'
import Image from "next/image";
import ProductGrid from "@/components/ProductGrid";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div>
          < ProductGrid />
        </div>
      </div>
    </main>
  );
}