import React from "react";
import Image from "next/image";
import studioImg from "../../public/assets/images/Studio.png";
import DetailsTable from "./DetailsTable";
import DetailsButton from "./DetailsButton";

const DetailsStudio = () => {
  return (
    <section className="lg:w-full w-[90vw] flex flex-col pt-3 pr-0 xl:pr-12 gap-5 lg:gap-10">
      <div className="border-t-2 border-[#E5E7EB]"></div>
      <div className="w-full border-2 border-[#2F5F82] p-5 rounded-md" data-aos="fade-right">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-2xl font-bold text-[#000000]">Studios</h1>
            <h1 className="font-semibold">$1,375 – $1,575</h1>
            <p className="text-[#7D7F88] text-sm w-[155px]">
              1 bed, 1 bath, 750 sq ft $500 deposit
            </p>
            <DetailsButton name="Check Availability"/>
         
          </div>
          <Image
            src={studioImg.src}
            alt="image"
            width={150}
            height={150}
            className="hidden md:block"
          />
        </div>
        <DetailsTable/>
      </div>
    </section>
  );
};

export default DetailsStudio;
