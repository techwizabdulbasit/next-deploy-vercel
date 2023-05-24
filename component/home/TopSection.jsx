
import React, { useEffect } from "react";
import Image from "next/image";
import TopSecBacground from "../../public/assets/images/topSectionBg.png";


function TopSection() {


  return (
    <section className="flex lg:flex-row flex-col h-auto lg:h-[90vh] w-full items-center lg:items-stretch justify-between bg-[#305F82] font-poppins">
      <div className="lg:w-[50%] w-full flex items-center justify-center flex-col gap-5 text-center my-24 px-3 text-white" data-aos="fade-up">
        <h1 className="lg:text-6xl text-3xl md:text-5xl">Discover</h1>
        <h1 className="lg:text-6xl text-3xl md:text-5xl">Your Dream Home</h1>
        <p className="lg:text-4xl text-xl md:text-3xl w-[74%] tracking-normal">
          Discover the Best Rentals in the Heart of the Brew City
        </p>
        <div className="flex items-center justify-center gap-2 lg:gap-4 lg:h-16 p-2 lg:mt-7 lg:p-5 w-full ">
          <input
            className="lg:py-2 py-1 text-black w-40 lg:w-80 px-2 lg:px-4 rounded-full"
            type="text"
            placeholder="Milwaukee, WI"
          />
          <button className=" bg-white hover:bg-[#305F82] hover:text-white hover:border-2 border-white text-[#2F5E80] hover:font-medium font-extralight lg:font-bold lg:py-2 py-1 px-2 lg:px-4 rounded-full">
            Search
          </button>
        </div>
      </div>

      <div className="lg:w-[50%] w-full">
        <Image
          src={TopSecBacground.src}
          alt="image"
          width={300}
          height={300}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </section>
  );
}

export default TopSection;
