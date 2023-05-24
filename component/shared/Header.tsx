"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/vector/logo.png";
import vector from "../../public/assets/vector/navVector.png";

const Header = () => {
  const [show, setShow] = useState(false);
  function toggle() {
    setShow(!show);
  }
  return (
    <nav className="h-[10vh] py-3 px-6 lg:px-16 bg-white flex items-center justify-between">
      <Link href="/">
        <Image src={logo.src} alt="logo" width={60} height={60} />
      </Link>
      <div className="md:hidden block relative"   onClick={toggle}>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="#2F5F82"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <div
        style={{
          display: show ? "flex" : "none",
        }}
         className="flex flex-col w-[200px] bg-white z-50 rounded-md p-5 items-center justify-center gap-2 absolute top-11 right-0">
          <Image src={vector.src} alt="logo" width={80} height={80} />
          <h5 className="text-sm font-bold text-center">Chris Johnson</h5>
          <p className="text-xs font-bold text-[#2F5F82]">Renter</p>
          <div className="flex items-center justify-around w-full gap-2 ">
            <svg
              width="30"
              height="20"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.3209 2.90768V12.8846C19.3209 14.2583 18.1984 15.3788 16.8223 15.3788H3.49669C2.12059 15.3788 0.998138 14.2583 0.998138 12.8846V2.90768C0.998138 1.53016 2.11678 0.413452 3.49669 0.413452H16.8223C18.2022 0.413452 19.3209 1.53016 19.3209 2.90768ZM2.75261 2.53683C2.89034 2.26494 3.17358 2.07627 3.49669 2.07627H16.8223C17.1454 2.07627 17.4287 2.26494 17.5664 2.53683L10.1595 7.71268L2.75261 2.53683ZM2.66384 4.50453L9.20429 9.07491C9.77783 9.47569 10.5412 9.47569 11.1147 9.07491L17.6552 4.50453V12.8846C17.6552 13.34 17.2785 13.716 16.8223 13.716H3.49669C3.04053 13.716 2.66384 13.34 2.66384 12.8846V4.50453Z"
                fill="#2F5F82"
              />
            </svg>
            <svg
              width="30"
              height="20"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.64267 5.98619C0.64267 3.2548 2.56933 0.582031 5.63978 0.582031C7.06298 0.582031 8.07901 0.982143 8.85868 1.58629C9.22859 1.87292 9.53771 2.20269 9.80185 2.52453C10.0631 2.20337 10.3691 1.87368 10.7357 1.58784C11.514 0.980935 12.5316 0.582031 13.9683 0.582031C17.0739 0.582031 18.9654 3.25927 18.9654 5.98619C18.9654 8.76406 17.5711 11.1404 15.8243 12.9947C14.0748 14.8519 11.9053 16.2595 10.1765 17.1224C9.94203 17.2395 9.66605 17.2395 9.43158 17.1224C7.70274 16.2595 5.53326 14.8519 3.78378 12.9947C2.03698 11.1404 0.64267 8.76406 0.64267 5.98619ZM5.63978 2.24485C3.71312 2.24485 2.30837 3.93249 2.30837 5.98619C2.30837 8.18485 3.41261 10.1734 4.99723 11.8556C6.45872 13.407 8.27261 14.6351 9.80404 15.4438C11.3355 14.6351 13.1494 13.407 14.6109 11.8556C16.1955 10.1734 17.2997 8.18485 17.2997 5.98619C17.2997 3.92802 15.9224 2.24485 13.9683 2.24485C12.8751 2.24485 12.2251 2.5364 11.761 2.89827C11.3309 3.23368 11.0313 3.64246 10.6743 4.12968C10.6093 4.21839 10.5424 4.30971 10.4725 4.40365C10.3153 4.61469 10.0674 4.73907 9.80404 4.73907C9.54064 4.73907 9.29276 4.61469 9.13562 4.40365C9.07582 4.32334 9.01801 4.2448 8.96152 4.16805C8.59351 3.66805 8.2813 3.24386 7.83731 2.89983C7.36674 2.53519 6.71513 2.24485 5.63978 2.24485Z"
                fill="#2F5F82"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="md:flex hidden items-center justify-center gap-5 ">
        <div className="flex items-center justify-center gap-2 pr-8 border-r-[1px] h-8 border-[#2F5F82] ">
          <svg
            width="30"
            height="20"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.3209 2.90768V12.8846C19.3209 14.2583 18.1984 15.3788 16.8223 15.3788H3.49669C2.12059 15.3788 0.998138 14.2583 0.998138 12.8846V2.90768C0.998138 1.53016 2.11678 0.413452 3.49669 0.413452H16.8223C18.2022 0.413452 19.3209 1.53016 19.3209 2.90768ZM2.75261 2.53683C2.89034 2.26494 3.17358 2.07627 3.49669 2.07627H16.8223C17.1454 2.07627 17.4287 2.26494 17.5664 2.53683L10.1595 7.71268L2.75261 2.53683ZM2.66384 4.50453L9.20429 9.07491C9.77783 9.47569 10.5412 9.47569 11.1147 9.07491L17.6552 4.50453V12.8846C17.6552 13.34 17.2785 13.716 16.8223 13.716H3.49669C3.04053 13.716 2.66384 13.34 2.66384 12.8846V4.50453Z"
              fill="#2F5F82"
            />
          </svg>
          <svg
            width="30"
            height="20"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.64267 5.98619C0.64267 3.2548 2.56933 0.582031 5.63978 0.582031C7.06298 0.582031 8.07901 0.982143 8.85868 1.58629C9.22859 1.87292 9.53771 2.20269 9.80185 2.52453C10.0631 2.20337 10.3691 1.87368 10.7357 1.58784C11.514 0.980935 12.5316 0.582031 13.9683 0.582031C17.0739 0.582031 18.9654 3.25927 18.9654 5.98619C18.9654 8.76406 17.5711 11.1404 15.8243 12.9947C14.0748 14.8519 11.9053 16.2595 10.1765 17.1224C9.94203 17.2395 9.66605 17.2395 9.43158 17.1224C7.70274 16.2595 5.53326 14.8519 3.78378 12.9947C2.03698 11.1404 0.64267 8.76406 0.64267 5.98619ZM5.63978 2.24485C3.71312 2.24485 2.30837 3.93249 2.30837 5.98619C2.30837 8.18485 3.41261 10.1734 4.99723 11.8556C6.45872 13.407 8.27261 14.6351 9.80404 15.4438C11.3355 14.6351 13.1494 13.407 14.6109 11.8556C16.1955 10.1734 17.2997 8.18485 17.2997 5.98619C17.2997 3.92802 15.9224 2.24485 13.9683 2.24485C12.8751 2.24485 12.2251 2.5364 11.761 2.89827C11.3309 3.23368 11.0313 3.64246 10.6743 4.12968C10.6093 4.21839 10.5424 4.30971 10.4725 4.40365C10.3153 4.61469 10.0674 4.73907 9.80404 4.73907C9.54064 4.73907 9.29276 4.61469 9.13562 4.40365C9.07582 4.32334 9.01801 4.2448 8.96152 4.16805C8.59351 3.66805 8.2813 3.24386 7.83731 2.89983C7.36674 2.53519 6.71513 2.24485 5.63978 2.24485Z"
              fill="#2F5F82"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center gap-2 ">
          <Image src={vector.src} alt="logo" width={30} height={30} />
          <div className="flex items-start flex-col justify-center">
            <h5 className="text-sm font-medium">Chris Johnson</h5>
            <p className="text-xs font-bold text-[#2F5F82]">Renter</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;