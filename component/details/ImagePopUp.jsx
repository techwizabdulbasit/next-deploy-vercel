"use client"
import React, { useState } from "react";
import Image from "next/image";
import right1 from "../../public/assets/images/detailsTopRight1.png";
import right2 from "../../public/assets/images/detailsTopRight2.png";
import right3 from "../../public/assets/images/detailsTopRight3.png";
import right4 from "../../public/assets/images/detailsTopRight4.png";
import styles from "../../public/assets/styles/main.css";

const ImagePopUp = ({show , onClick}) => {
   
  return (
    <div
    style={{
        display: show ? "flex" : "none",
      }}
      onClick={onClick}
    className="w-full h-full py-8 transition-all px-10 lg:px-14 backdrop-blur-sm flex items-center justify-center absolute">
      <div
        className={`${styles.popUp_Over_Flow} overflow-y-scroll popUp_Over_Flow bg-white rounded-lg p-5 h-full w-[100%] lg:w-[90%]`}
      >
        <div className="flex items-center justify-center gap-1 lg:gap-5 flex-wrap rounded-lg">
          <Image
            src={right1.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right2.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right3.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right4.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right1.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right2.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right3.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right4.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right3.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right1.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right2.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right1.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right2.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right1.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right4.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right1.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right2.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right1.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right2.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
          <Image
            src={right1.src}
            alt="A beautiful image"
            width={230}
            height={230}
            className="hover:scale-125 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default ImagePopUp;
