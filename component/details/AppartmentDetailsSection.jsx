import React from "react";
import DetailsTabs from "./DetailsTabs";
import DetailsForm from "./DetailsForm";
import Details from "./Details";
import DetailsStudio from "./DetailsStudio";
import DetailsAmenities from "./DetailsAmenities";

const AppartmentDetailsSection = () => {
  return (
    <section className="lg:px-14 px-3 flex xl:flex-row flex-col  bg-white">
      <div className="xl:w-[70%] w-full flex flex-col items-center lg:items-start px-5 lg:px-0 gap-6">
        <Details />
        <DetailsTabs />
        <DetailsStudio />
        <DetailsAmenities />
      </div>
      <div className="xl:w-[30%] w-full py-5 px-1 xl:px-5 bg-white">
        <DetailsForm />
        <p className="text-[#2F5F82] text-sm pt-3 text-center">
          Report this listing
        </p>
      </div>
    </section>
  );
};

export default AppartmentDetailsSection;
