import React from "react";
import NextJsCarousel from "./Carousel";
import RatingStar from '../../component/shared/RatingStar';
import Image from "next/image";

const MapCard = ({
  productName,
  productLocation,
  rating,
  logo,
  Rooms,
  details,
  number,
  productQuality,
  price,
  images,
}) => {
  return (
    <div className="bg-white flex flex-col items-center justify-center gap-3 p-3">
      <div className="border-b-2 border-[#2f5f8212] flex items-center justify-between w-full">
        <div className="flex flex-col items-start">
          <h1 className="text-sm xl:text-lg font-bold">{productName}</h1>
          <span className="flex items-center justify-center gap-1">
            <svg
              width="15"
              height="15"
              viewBox="0 0 8 10"
              fill="#7D7F88"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.58385 9.36327C3.58385 9.36327 3.58401 9.36339 3.81424 9.06738L4.04447 9.36339C3.90905 9.46871 3.71927 9.46859 3.58385 9.36327Z"
                fill="#7D7F88"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.81424 2.69238C2.98581 2.69238 2.31424 3.36396 2.31424 4.19238C2.31424 5.02081 2.98581 5.69238 3.81424 5.69238C4.64267 5.69238 5.31424 5.02081 5.31424 4.19238C5.31424 3.36396 4.64267 2.69238 3.81424 2.69238ZM3.06424 4.19238C3.06424 3.77817 3.40003 3.44238 3.81424 3.44238C4.22845 3.44238 4.56424 3.77817 4.56424 4.19238C4.56424 4.6066 4.22845 4.94238 3.81424 4.94238C3.40003 4.94238 3.06424 4.6066 3.06424 4.19238Z"
                fill="#7D7F88"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.58385 9.36327L3.81424 9.06738C4.04447 9.36339 4.04486 9.36308 4.04486 9.36308L4.04557 9.36253L4.04789 9.36072L4.05612 9.35425C4.06317 9.34869 4.07334 9.34063 4.0864 9.33018C4.11253 9.30928 4.15027 9.27877 4.19797 9.2394C4.29334 9.16069 4.42869 9.04638 4.59072 8.90235C4.91426 8.61476 5.34676 8.2064 5.78047 7.72449C6.2131 7.2438 6.65414 6.682 6.98874 6.08717C7.32138 5.4958 7.56424 4.84463 7.56424 4.19238C7.56424 3.19782 7.16915 2.24399 6.46589 1.54073C5.76263 0.837471 4.8088 0.442383 3.81424 0.442383C2.81968 0.442383 1.86585 0.837471 1.16259 1.54073C0.459328 2.24399 0.0642395 3.19782 0.0642395 4.19238C0.0642395 4.84463 0.307095 5.4958 0.639742 6.08717C0.974338 6.682 1.41537 7.2438 1.848 7.72449C2.28172 8.2064 2.71422 8.61476 3.03776 8.90235C3.19979 9.04638 3.33514 9.16069 3.43051 9.2394C3.47821 9.27877 3.51595 9.30928 3.54208 9.33018C3.55514 9.34063 3.56531 9.34869 3.57236 9.35425L3.58059 9.36072L3.58291 9.36253L3.58385 9.36327ZM1.69292 2.07106C2.25553 1.50845 3.01859 1.19238 3.81424 1.19238C4.60989 1.19238 5.37295 1.50845 5.93556 2.07106C6.49817 2.63367 6.81424 3.39673 6.81424 4.19238C6.81424 4.66513 6.63522 5.18584 6.33506 5.71947C6.03684 6.24964 5.63412 6.76597 5.223 7.22277C4.81297 7.67836 4.40172 8.06688 4.09245 8.34179C3.98586 8.43654 3.89169 8.51752 3.81424 8.58281C3.73679 8.51752 3.64262 8.43654 3.53603 8.34179C3.22676 8.06688 2.81551 7.67836 2.40547 7.22277C1.99435 6.76597 1.59164 6.24964 1.29342 5.71947C0.993259 5.18584 0.81424 4.66513 0.81424 4.19238C0.81424 3.39673 1.13031 2.63367 1.69292 2.07106Z"
                fill="#7D7F88"
              />
            </svg>
            <p className="text-[#7D7F88] text-[10px] xl:text-xs">{productLocation}</p>
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
         {/* <RatingStar/> */}

          <h3>{rating}</h3>
          <Image
          src={logo}
          alt="logo"
          width={70}
          height={70}
        />
        </div>
      </div>
      <div className="flex xl:flex-row flex-col items-center justify-center gap-3 w-full">
        <div className="w-full xl:w-[45%]">
          <NextJsCarousel images={images}/>
        </div>
        <div className="w-full xl:w-[55%] flex text-start flex-col  gap-2">
          <h1 className="text-sm font-bold text-[#000000]">{Rooms}</h1>
          <p className="text-xs font-medium text-[#000000]">{details}</p>
          <div className="flex p-2 items-center justify-between w-full">
            <h1 className="text-xs md:text-sm font-medium text-[#000000]">{number}</h1>
            <button
              type="button"
              className="w-36 text-white bg-[#2F5F82]  rounded-full text-xs p-[6px] "
            >
              Email{" "}
            </button>
          </div>
          <div className="flex items-center justify-between px-2 text-[#000000]">
            <p className="text-[10px] text-[#000000]">{productQuality}</p>
            <h3 className="font-bold text-xs md:text-sm text-[#000000]">{price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
