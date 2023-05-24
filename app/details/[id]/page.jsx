"use client"
import React, { useEffect } from 'react'
import Header from '@/component/shared/Header'
import DetailsTopSection from '@/component/details/DetailsTopSection'
import AppartmentDetailsSection from '../../../component/details/AppartmentDetailsSection'
import DetailsReview from '../../../component/details/DetailsReview'
import styles from "../../../public/assets/styles/main.css";
import Footer from '@/component/shared/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Details = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <main className={styles.main}>
      <Header />
      <DetailsTopSection/>
      <AppartmentDetailsSection/>
      <DetailsReview/>
      <Footer/>
    </main>
  )
}

export default Details
