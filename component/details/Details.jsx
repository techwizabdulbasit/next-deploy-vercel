import React from 'react'
import RatingStar from "../shared/RatingStar";
import DetailsRow from "./DetailsRow";

const Details = () => {
  return (
    <div className='w-full flex flex-col items-center lg:items-start  gap-6' >
         <div className="flex items-start flex-col gap-2">
          <h1 className="lg:text-4xl text-2xl font-bold lg:text-start text-center">Brix Apartment Lofts</h1>
          <div className="flex items-center flex-wrap justify-center gap-2">
            <RatingStar />
            <span className="text-sm text-[#2F5F82]">4.0</span>
            <p className="text-sm text-[#2F5F82]">(6 reviews)</p>
          </div>
        </div>
        <h1 className="text-lg font-semibold lg:text-start text-center">
          408 W Florida St, Milwaukee, WI 53204
        </h1>
      <DetailsRow/>
        <p className="lg:w-[88%] w-full lg:text-start text-center text-sm py-6 border-y-2 border-[#E5E7EB]"
         data-aos="fade-right">
          Brix Apartments Lofts is a classic Cream City brick structure with 98
          open concept apartment lofts that reflect Milwaukee’s rich heritage,
          authentic culture and bold character. Brix is located on the 400 block
          of West Florida Street adjacent to the Iron Horse Hotel and just south
          of the Harley Davidson Museum.
        </p>
    </div>
  )
}

export default Details
