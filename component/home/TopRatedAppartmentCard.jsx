import React from "react";
import Image from "next/image";

function TopRatedAppartmentCard({ name, location, price, srcPath }) {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-[280px] rounded-md" data-aos="zoom-in">
      <div className="h-full w-full lg:w-[90%] lg:h-[90%]">
        <Image src={srcPath} alt="image" width={350} height={350} />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 pt-7 p-1 text-center">
        <h1 className="text-md font-bold mb-2">{name}</h1>
        <p className="text-sm text-[#7D7F88] w-36">{location}</p>
        <p className="text-sm text-[#7D7F88]">{price}</p>
      </div>
    </div>
  );
}

export default TopRatedAppartmentCard;
