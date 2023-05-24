import React from "react";
import AprovedRentalsCard from "./AprovedRentalsCard";

function AprovedRentals() {
  return (
    <section className="flex flex-col xl:flex-row px-5 lg:px-16 py-8 bg-[#2f5f8212]">
      <div className="flex flex-col lg:items-start items-center text-center lg:text-start justify-center gap-5 lg:gap-10 p-5 w-full xl:w-[45%]" data-aos="zoom-in-right">
        <h1 className="lg:text-5xl text-xl md:text-3xl font-bold text-black " style={{lineHeight: '1.3'}}>
          City of Milwaukee Approved Rentals
        </h1>
        <p className="lg:w-[65%] w-full">
          With an extensive database of apartments, you can browse and compare
          the best options available to you.
        </p>
        <button className="bg-[#2F5F82] hover:bg-white active:bg-white  border-2 border-[#2f5f82] hover:text-[#2f5f82] active:text-[#2f5f82]  text-white hover:font-bold font-medium py-2 px-4 rounded-full">
          View More Rentals
        </button>
      </div>
      <div className="xl:w-[55%] w-full flex items-center justify-center flex-wrap gap-5 p-3 ">
        <AprovedRentalsCard
          name="Renting made easy"
          message="
        Browse the highest quality listings, apply online, sign your lease, and
        even pay your rent from any device."
        />
        <AprovedRentalsCard
          name="Apply online 
        in minutes"
          message="Easily submit your rental application without the need for time-consuming paperwork or in-person meetings."
        />
        <AprovedRentalsCard
          name="Real-time 
        alerts"
          message="Immediate notifications regarding new property listings and updates, ensuring they stay up-to-date with the latest opportunities."
        />
        <AprovedRentalsCard
          name="Affordable
           options "
          message="Cost-effective rental properties that fit within a your budget, making it easier to find a suitable home without breaking the bank."
        />
      </div>
    </section>
  );
}

export default AprovedRentals;
