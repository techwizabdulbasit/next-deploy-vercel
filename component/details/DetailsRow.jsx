import React from "react";

const DetailsRow = () => {
  return (
    <div
      className="flex items-center flex-wrap justify-center gap-8 "
      data-aos="flip-down"
    >
      <div className="flex items-center justify-center flex-col">
        <h2 className="font-semibold text-md">Monthly Rent</h2>
        <p className="text-[#000] text-xs">$1,625 - $4,750</p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <h2 className="font-semibold text-md">Bedrooms</h2>
        <p className="text-[#000] text-xs">1 - 3 bd</p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <h2 className="font-semibold text-md">Bathrooms</h2>
        <p className="text-[#000] text-xs">1 - 2.5 ba</p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <h2 className="font-semibold text-md">Square Feet</h2>
        <p className="text-[#000] text-xs">577 - 1,545 sq ft</p>
      </div>
    </div>
  );
};

export default DetailsRow;
