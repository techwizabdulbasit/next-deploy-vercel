"use client"
import Header from "@/component/shared/Header";
import styles from "./page.module.css";
import TopSection from "@/component/home/TopSection.jsx";
import TopRatedAppartment from "@/component/home/TopRatedAppartment.jsx";
import AprovedRentals from "@/component/home/AprovedRentals.jsx";
import AdvertiseYourRental from "@/component/home/AdvertiseYourRental.jsx";
import Footer from "@/component/shared/Footer.jsx";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <main className={styles.main}>
      <Header />
      <TopSection/>
      <TopRatedAppartment/>
      <AprovedRentals />
      <AdvertiseYourRental />
      <Footer />
    </main>
  );
}
