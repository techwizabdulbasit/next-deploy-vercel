"use client";
import React, { useState } from "react";

const BedsBtn = ({show, onClick}) => {

  return (
    <div className="relative">
      <button
        onClick={onClick}
        type="button"
        className="flex items-center justify-center gap-3 text-[#2F5E80] bg-white font-medium rounded-full text-md px-5 py-2 "
      >
        Beds{" "}
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
        <ul className="p-2 space-y-1 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <div className="flex items-center justify-between py-1 px-2 rounded hover:bg-[#2f5f8236] ">
              <div className="">Bedrooms</div>
              <div className="flex items-center justify-between gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.46184 12.4178C10.5264 12.4178 13.0338 9.91041 13.0338 6.84581C13.0338 3.78121 10.5264 1.2738 7.46184 1.2738C4.39723 1.2738 1.88983 3.78121 1.88983 6.84581C1.88983 9.91041 4.39723 12.4178 7.46184 12.4178Z"
                    stroke="#1A1E25"
                    strokeWidth="0.668641"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.23297 6.84631H9.69058"
                    stroke="#1A1E25"
                    strokeWidth="0.668641"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {1}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.60069 12.4178C10.6653 12.4178 13.1727 9.91041 13.1727 6.84581C13.1727 3.78121 10.6653 1.2738 7.60069 1.2738C4.53609 1.2738 2.02869 3.78121 2.02869 6.84581C2.02869 9.91041 4.53609 12.4178 7.60069 12.4178Z"
                    stroke="#1A1E25"
                    strokeWidth="0.668641"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.37183 6.8457H9.82943"
                    stroke="#1A1E25"
                    strokeWidth="0.668641"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.60059 9.07455V4.61694"
                    stroke="#1A1E25"
                    strokeWidth="0.668641"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </div>
            </div>
          </li>
          <li>
          <div className="flex items-center justify-between py-1 px-2 rounded hover:bg-[#2f5f8236] ">
              <div className="">Baths</div>
              <div className="flex items-center justify-between gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.46184 12.4178C10.5264 12.4178 13.0338 9.91041 13.0338 6.84581C13.0338 3.78121 10.5264 1.2738 7.46184 1.2738C4.39723 1.2738 1.88983 3.78121 1.88983 6.84581C1.88983 9.91041 4.39723 12.4178 7.46184 12.4178Z"
                    stroke="#1A1E25"
                    strokeWidth="0.668641"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.23297 6.84631H9.69058"
                    stroke="#1A1E25"
                    strokeWidth="0.668641"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {1}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.60069 12.4178C10.6653 12.4178 13.1727 9.91041 13.1727 6.84581C13.1727 3.78121 10.6653 1.2738 7.60069 1.2738C4.53609 1.2738 2.02869 3.78121 2.02869 6.84581C2.02869 9.91041 4.53609 12.4178 7.60069 12.4178Z"
                    stroke="#1A1E25"
                    strokeWidth="0.668641"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.37183 6.8457H9.82943"
                    stroke="#1A1E25"
                    strokeWidth="0.668641"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.60059 9.07455V4.61694"
                    stroke="#1A1E25"
                    strokeWidth="0.668641"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BedsBtn;
