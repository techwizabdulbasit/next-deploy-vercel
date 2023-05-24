// "use client";

import MapNav from "@/component/map/MapNav";
import Header from "@/component/shared/Header";
import MapSection from "@/component/map/MapSection";
import styles from "./page.module.css";


export default function Listing() {
  return (
    <main className={styles.main}>
      <Header />
      <MapNav/>
      <MapSection/>
    </main>
  );
}
