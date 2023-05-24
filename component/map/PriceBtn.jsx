"use client";
import React, { useState } from "react";

const PriceBtn = ({show, onClick}) => {

  return (
    <div className="relative">
      <button
        onClick={onClick}
        type="button"
        className="flex items-center justify-center gap-3 text-[#2F5E80] bg-white font-medium rounded-full text-md px-5 py-2 "
      >
        Price{" "}
        <svg
          width="8"
          height="8"
          viewBox="0 0 6 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.17983 1.12012L2.9268 3.54646L0.673767 1.12012"
            stroke="#2F5E80"
            strokeWidth="1.24783"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        style={{
          display: show ? "block" : "none",
        }}
        className="z-10 absolute top-[3.2rem] left-[-35px] md:left-0 w-48 bg-white rounded-lg shadow "
      >
        <div className="flex items-center justify-around gap-1 p-3">
          <button
            type="button"
            className="border-[1px] hover:bg-[#2f5f8236] border-[#CFD8DC] text-sm py-1 px-2"
          >
            Min Rent
          </button>
          <button
            type="button"
            className="border-[1px] hover:bg-[#2f5f8236] border-[#CFD8DC] text-sm py-1 px-2"
          >
            Min Rent
          </button>
        </div>
        <ul className="p-2 space-y-1 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <div className="flex items-center py-1 px-2 rounded hover:bg-[#2f5f8236] ">
              <input
                type="checkbox"
                value=""
                className="w-4 h-4 text-[#2f5f82] bg-gray-100 border-gray-300 rounded "
              />
              <label className="w-full ml-2 text-sm font-medium text-[#000] rounded dark:text-gray-300">
                No min
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center py-1 px-2 rounded hover:bg-[#2f5f8236] ">
              <input
                type="checkbox"
                value=""
                className="w-4 h-4 text-[#2f5f82] bg-gray-100 border-gray-300 rounded "
              />
              <label className="w-full ml-2 text-sm font-medium text-[#000] rounded dark:text-gray-300">
                $800
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center py-1 px-2 rounded hover:bg-[#2f5f8236] ">
              <input
                type="checkbox"
                value=""
                className="w-4 h-4 text-[#2f5f82] bg-gray-100 border-gray-300 rounded "
              />
              <label className="w-full ml-2 text-sm font-medium text-[#000] rounded dark:text-gray-300">
                $1,000
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center py-1 px-2 rounded hover:bg-[#2f5f8236] ">
              <input
                type="checkbox"
                value=""
                className="w-4 h-4 text-[#2f5f82] bg-gray-100 border-gray-300 rounded "
              />
              <label className="w-full ml-2 text-sm font-medium text-[#000] rounded dark:text-gray-300">
                $1,200
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center py-1 px-2 rounded hover:bg-[#2f5f8236] ">
              <input
                type="checkbox"
                value=""
                className="w-4 h-4 text-[#2f5f82] bg-gray-100 border-gray-300 rounded "
              />
              <label className="w-full ml-2 text-sm font-medium text-[#000] rounded dark:text-gray-300">
                $1,400
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center py-1 px-2 rounded hover:bg-[#2f5f8236] ">
              <input
                type="checkbox"
                value=""
                className="w-4 h-4 text-[#2f5f82] bg-gray-100 border-gray-300 rounded "
              />
              <label className="w-full ml-2 text-sm font-medium text-[#000] rounded dark:text-gray-300">
                $1,600
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center py-1 px-2 rounded hover:bg-[#2f5f8236] ">
              <input
                type="checkbox"
                value=""
                className="w-4 h-4 text-[#2f5f82] bg-gray-100 border-gray-300 rounded "
              />
              <label className="w-full ml-2 text-sm font-medium text-[#000] rounded dark:text-gray-300">
                $1,800
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceBtn;
