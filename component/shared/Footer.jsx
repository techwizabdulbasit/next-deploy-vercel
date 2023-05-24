import React from "react";
import FooterListGroup from "./FooterListGroup";
import Link from 'next/link';

function Footer() {
  return (
    <div className=" flex items-center justify-center flex-col bg-[#F0F4F6] px-5 lg:px-14">
      <div className=" flex flex-wrap gap-5 lg:gap-3 items-start justify-start lg:justify-around w-full py-14">
        <FooterListGroup
          name="About"
          value1="About Rentzo"
          value2="Careers"
          value3="Investors"
          value4=""
          value5=""
        />
        <FooterListGroup
          name="Neighborhoods"
          value1="Historic Third Ward"
          value2="Washington Park"
          value3="Riverwest"
          value4="Walker's Point"
          value5="View all neighborhoods"
        />
        <FooterListGroup
          name="Landlords"
          value1="Add a property"
          value2="Renter manger "
          value3=""
          value4=""
          value5=""
        />
        <FooterListGroup
          name="Support"
          value1="Contact"
          value2="Report a property"
          value3=""
          value4=""
          value5=""
        />
      </div>
      <div className="md:p-10 p-5 flex items-center justify-between  border-t-[1px] border-gray-300 w-full">
        <div className="flex flex-col items-center md:items-start justify-center gap-3 ">
          <h1 className="text-lg text-black">POWERED BY RENZO</h1>
          <div className="text-[#2F5F82] flex-wrap gap-2 flex items-center justify-between  md:w-96">
            <Link href="/">© 2023 Rentzo</Link>
            <span className="h-1 w-1 hidden md:block bg-[#2F5F82] rounded-full"></span>
            <Link href="/">Privacy</Link>
            <span className="h-1 w-1 hidden md:block bg-[#2F5F82] rounded-full"></span>
            <Link href="/">Terms</Link>
            <span className="h-1 w-1 hidden md:block bg-[#2F5F82] rounded-full"></span>
            <Link href="/">Sitemap</Link>
          </div>
        </div>
        <div className="md:flex hidden items-center justify-center gap-8">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.25235 12.6887C0.25235 18.8774 4.77217 24.023 10.6827 25.066L10.7525 25.0102C10.7292 25.0057 10.706 25.0011 10.6827 24.9965V16.1655H7.5536V12.6887H10.6827V9.90724C10.6827 6.77814 12.6992 5.03974 15.5502 5.03974C16.4542 5.03974 17.4277 5.17881 18.3316 5.31789V8.51653H16.7323C15.2025 8.51653 14.8549 9.28142 14.8549 10.2549V12.6887H18.1926L17.6363 16.1655H14.8549V24.9965C14.8316 25.0011 14.8083 25.0057 14.7851 25.0102L14.8549 25.066C20.7654 24.023 25.2852 18.8774 25.2852 12.6887C25.2852 5.80464 19.6528 0.172241 12.7688 0.172241C5.88474 0.172241 0.25235 5.80464 0.25235 12.6887Z"
              fill="#2F5F82"
            />
          </svg>
          <svg
            width="35"
            height="34"
            viewBox="0 0 35 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.6615 12.6222C26.6696 12.8307 26.6723 13.039 26.6723 13.2475C26.6723 19.568 22.2262 26.8645 14.0958 26.8645C11.5983 26.8645 9.27592 26.0685 7.31923 24.7135C7.66511 24.7514 8.01638 24.7799 8.37304 24.7799C10.4438 24.7799 12.3511 24.0122 13.864 22.7234C11.9298 22.695 10.2965 21.3021 9.73321 19.4069C10.0036 19.4637 10.2821 19.4922 10.5669 19.4922C10.9685 19.4922 11.3584 19.4354 11.7321 19.3217C9.70803 18.8858 8.18348 16.9528 8.18348 14.6312C8.18348 14.6028 8.18348 14.5932 8.18348 14.5743C8.78001 14.9249 9.46278 15.1427 10.1878 15.1712C9.0001 14.3088 8.2194 12.8401 8.2194 11.1818C8.2194 10.31 8.43681 9.4856 8.81952 8.77491C10.999 11.6745 14.2575 13.5792 17.931 13.7782C17.8555 13.4276 17.8169 13.0581 17.8169 12.6886C17.8169 10.0448 19.796 7.9032 22.2379 7.9032C23.5091 7.9032 24.6572 8.48131 25.4631 9.40995C26.472 9.20148 27.4171 8.80352 28.2723 8.25392C27.9408 9.37208 27.241 10.31 26.3264 10.8975C27.2212 10.7838 28.0747 10.5281 28.8662 10.1491C28.2724 11.1062 27.5249 11.9494 26.6615 12.6222Z"
              fill="#2F5F82"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Footer;
