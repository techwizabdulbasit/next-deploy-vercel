"use client"
import React, { useState } from "react";
import FilterOptionsBtn from "@/component/map/FilterOptionsBtn";

const FiltersBtn = ({show, onClick}) => {


  return (
    <div className="relative">
      <button
        onClick={onClick}
        type="button"
        className={`flex items-center justify-center gap-3 text-[#2F5E80] bg-white font-medium rounded-full text-md px-5 py-2 `}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.09821 6.21362H5.83131"
            stroke="#2F5F82"
            strokeWidth="1.24783"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.64417 6.21362H14.1502"
            stroke="#2F5F82"
            strokeWidth="1.24783"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.09821 11.7596H9.29751"
            stroke="#2F5F82"
            strokeWidth="1.24783"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.1104 11.7596H14.1503"
            stroke="#2F5F82"
            strokeWidth="1.24783"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.29756 6.2136C9.29756 7.07505 8.59922 7.77339 7.73777 7.77339C6.87632 7.77339 6.17798 7.07505 6.17798 6.2136C6.17798 5.35215 6.87632 4.65381 7.73777 4.65381C8.59922 4.65381 9.29756 5.35215 9.29756 6.2136Z"
            stroke="#2F5F82"
            strokeWidth="1.24783"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.7637 11.7596C12.7637 12.6211 12.0654 13.3194 11.204 13.3194C10.3425 13.3194 9.64417 12.6211 9.64417 11.7596C9.64417 10.8982 10.3425 10.1998 11.204 10.1998C12.0654 10.1998 12.7637 10.8982 12.7637 11.7596Z"
            stroke="#2F5F82"
            strokeWidth="1.24783"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Filter
      </button>
      <div
        style={{
          display: show ? "block" : "none",
        }}
        className={` bg-white z-50 absolute top-[3.2rem] left-[-35px] md:left-0 p-3`}
      >
        <h1 className="text-md font-bold pb-2">Amenities</h1>
        <div className="md:w-[320px] w-[300px] flex-wrap flex items-center justify-between gap-4">
          <FilterOptionsBtn title="Air Conditioning" />
          <FilterOptionsBtn title="Washer/Dryer" />
          <FilterOptionsBtn title="Dishwasher" />
          <FilterOptionsBtn title="Wheelchair Access" />
          <FilterOptionsBtn title="Parking" />
          <FilterOptionsBtn title="Fitness Center" />
          <FilterOptionsBtn title="Pool" />
          <FilterOptionsBtn title="Elevator" />
          <FilterOptionsBtn title="Security cameras" />
          <FilterOptionsBtn title="Pet Friendly" />
          <FilterOptionsBtn title="Furnished" />
          <FilterOptionsBtn title="Lofts" />
          <FilterOptionsBtn title="Utilities Included" />
          <FilterOptionsBtn title="Fireplace" />
          <FilterOptionsBtn title="Patio" />
          <FilterOptionsBtn title="Yard" />
          <FilterOptionsBtn title="Balcony" />
          <FilterOptionsBtn title="Clubhouse" />
        </div>
      </div>
    </div>
  );
};

export default FiltersBtn;
