"use client";
import React, { useState } from "react";
import PriceBtn from "@/component/map/PriceBtn";
import BedsBtn from "@/component/map/BedsBtn";
import TypesBtn from "@/component/map/TypesBtn";
import FiltersBtn from "@/component/map/FiltersBtn";

const MapNav = () => {

  const [showStates, setShowStates] = useState([false, false, false, false]);

  const toggleShow = (index) => {
    const updatedShowStates = showStates.map((state, i) => (i === index ? !state : false));
    setShowStates(updatedShowStates);
  };

  return (
    <nav className="bg-[#2F5F82] flex items-center px-14 py-3 h-auto lg:h-[9vh]">
      <div className="flex items-center flex-wrap gap-4 justify-center md:justify-start  w-full">
        <div className="relative">
          <input
            className="text-[#2F5E80] bg-white font-medium rounded-full text-md px-5 pl-12 py-2 "
            type="text"
            placeholder="Milwaukee, WI"
          />
          <svg
            className="absolute top-3 left-3"
            width="20"
            height="20"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.843124 6.25125C0.843124 2.80545 3.63649 0.012085 7.08229 0.012085C10.5281 0.012085 13.3215 2.80545 13.3215 6.25125C13.3215 7.7244 12.8109 9.07829 11.9571 10.1457L15.1981 13.3867C15.4689 13.6574 15.4689 14.0964 15.1981 14.3671C14.9274 14.6378 14.4885 14.6378 14.2177 14.3671L10.9767 11.126C9.90933 11.9799 8.55543 12.4904 7.08229 12.4904C3.63649 12.4904 0.843124 9.69704 0.843124 6.25125ZM7.08229 1.39857C4.40223 1.39857 2.22961 3.57119 2.22961 6.25125C2.22961 8.93131 4.40223 11.1039 7.08229 11.1039C9.76235 11.1039 11.935 8.93131 11.935 6.25125C11.935 3.57119 9.76235 1.39857 7.08229 1.39857Z"
              fill="#2F5F82"
            />
          </svg>
        </div>
    
      <PriceBtn show={showStates[0]} onClick={() => toggleShow(0)} />
      <BedsBtn show={showStates[1]} onClick={() => toggleShow(1)} />
      <TypesBtn show={showStates[2]} onClick={() => toggleShow(2)} />
      <FiltersBtn show={showStates[3]} onClick={() => toggleShow(3)} />

      </div>
    </nav>
  );
};

export default MapNav;
