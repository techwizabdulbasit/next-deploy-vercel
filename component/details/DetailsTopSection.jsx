"use client";
import React, { useState } from "react";
import Image from "next/image";
import leftImg from "../../public/assets/images/detailsTopLeft.png";
import right1 from "../../public/assets/images/detailsTopRight1.png";
import right2 from "../../public/assets/images/detailsTopRight2.png";
import right3 from "../../public/assets/images/detailsTopRight3.png";
import right4 from "../../public/assets/images/detailsTopRight4.png";
import DetailsButton from "./DetailsButton";
import styles from "../../public/assets/styles/main.css";
import ImagePopUp from "./ImagePopUp";

const DetailsTopSection = () => {
  const [show, setShow] = useState(false);
  function toggle() {
    setShow(!show);
  }
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center  gap-2 px-5 lg:px-14 py-5 bg-white relative">
      <div className="lg:w-[50%] w-full relative">
        <Image
          src={leftImg.src}
          alt="A beautiful image"
          width={0}
          height={0}
          sizes="100vw"
          className=" rounded-tl-lg"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="absolute  md:hidden block top-0 right-3">
          <DetailsButton name="Show all photos" onClick={toggle} />
        </div>
      </div>
      <div className="lg:w-[50%] w-full flex items-center justify-center gap-1 sm:gap-2 flex-wrap relative">
        <div className="w-[49%]">
          <Image
            src={right1.src}
            alt="A beautiful image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-[49%]">
          <Image
            src={right2.src}
            alt="A beautiful image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-[49%]">
          <Image
            src={right3.src}
            alt="A beautiful image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-[49%]">
          <Image
            src={right4.src}
            alt="A beautiful image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="absolute hidden md:block top-0 right-3">
          <DetailsButton name="Show all photos" onClick={toggle} />
        </div>
      </div>
      <ImagePopUp show={show} onClick={toggle} />
    </section>
  );
};

export default DetailsTopSection;
