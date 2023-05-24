import React from "react";

const Review = ({ name, date, paragraph }) => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-lg text-[#000000] font-bold">{name}</h1>
      <h3 className="text-sm text-[#000000] font-medium">{date}</h3>
      <p className="text-[#7D7F88] text-sm mt-2">{paragraph}</p>
    </div>
  );
};

export default Review;
