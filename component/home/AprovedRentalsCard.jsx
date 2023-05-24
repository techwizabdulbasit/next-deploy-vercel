import React from "react";

function AprovedRentalsCard({ name, message }) {
  return (
    <div className="lg:w-[48%] w-full flex flex-col items-start justify-between gap-5 p-5" data-aos="zoom-in-left">
      <h1 className="text-xl md:text-3xl font-bold w-56">{name}</h1>
      <p className="text-sm">{message}</p>
    </div>
  );
}

export default AprovedRentalsCard;
