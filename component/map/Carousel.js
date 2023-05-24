// "use client";
// import React, { Component } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import Image from "next/image";
// import img from "../../public/assets/images/mapcardimg.png";
// import img1 from "../../public/assets/images/mapcardimg1.png";

// export default class NextJsCarousel extends Component {
//   render() {
//     return (
//       <div className="relative">
//         <div className="absolute top-2 right-2 z-40">
//           <svg
//             width="25"
//             height="25"
//             viewBox="0 0 25 25"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle
//               cx="12.0624"
//               cy="12.0624"
//               r="12.0624"
//               fill="#F4F7FF"
//               fillOpacity="0.63"
//             />
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M5.58243 10.8319C5.58243 8.89601 6.94557 7.00171 9.11795 7.00171C10.1249 7.00171 10.8437 7.28528 11.3954 7.71347C11.6571 7.91662 11.8758 8.15033 12.0627 8.37844C12.2475 8.15082 12.464 7.91715 12.7234 7.71457C13.274 7.28443 13.994 7.00171 15.0105 7.00171C17.2077 7.00171 18.546 8.89918 18.546 10.8319C18.546 12.8007 17.5595 14.4849 16.3236 15.7991C15.0859 17.1153 13.5509 18.113 12.3277 18.7246C12.1619 18.8075 11.9666 18.8075 11.8007 18.7246C10.5775 18.113 9.04259 17.1153 7.80481 15.7991C6.56893 14.4849 5.58243 12.8007 5.58243 10.8319ZM9.11795 8.18022C7.75481 8.18022 6.76094 9.37632 6.76094 10.8319C6.76094 12.3902 7.5422 13.7995 8.66334 14.9917C9.69737 16.0913 10.9807 16.9617 12.0642 17.5349C13.1477 16.9617 14.4311 16.0913 15.4651 14.9917C16.5862 13.7995 17.3675 12.3902 17.3675 10.8319C17.3675 9.37315 16.393 8.18022 15.0105 8.18022C14.2371 8.18022 13.7772 8.38685 13.4488 8.64333C13.1445 8.88104 12.9326 9.17077 12.68 9.51608C12.634 9.57895 12.5866 9.64367 12.5371 9.71025C12.426 9.85982 12.2506 9.94798 12.0642 9.94798C11.8779 9.94798 11.7025 9.85982 11.5913 9.71025C11.549 9.65333 11.5081 9.59767 11.4681 9.54327C11.2078 9.1889 10.9869 8.88826 10.6727 8.64443C10.3398 8.38599 9.87878 8.18022 9.11795 8.18022Z"
//               fill="#2F5F82"
//             />
//           </svg>
//         </div>
//         <Carousel showThumbs={false}>
//           <div className="w-full h-full">
//             <Image
//               src={img1.src}
//               alt="logo"
//               width={0}
//               height={0}
//               sizes="100vw"
//               style={{ width: "100%", height: "100%" }}

//             />
//           </div>
//           <div className="w-full h-full">
//             <Image
//               src={img.src}
//               alt="logo"
//               width={0}
//               height={0}
//               sizes="100vw"
//               style={{ width: "100%", height: "100%" }}
//             />
//           </div>
//           <div className="w-full h-full">
//             <Image
//               src={img1.src}
//               alt="logo"
//               width={0}
//               height={0}
//               sizes="100vw"
//               style={{ width: "100%", height: "100%" }}
//             />
//           </div>
//           <div className="w-full h-full">
//             <Image
//               src={img.src}
//               alt="logo"
//               width={0}
//               height={0}
//               sizes="100vw"
//               style={{ width: "100%", height: "100%" }}
//             />
//           </div>
//           <div className="w-full h-full">
//             <Image
//               src={img1.src}
//               alt="logo"
//               width={0}
//               height={0}
//               sizes="100vw"
//               style={{ width: "100%", height: "100%" }}
//             />

//           </div>
//         </Carousel>
//       </div>
//     );
//   }
// }

"use client";
import React, { Component, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import img from "../../public/assets/images/mapcardimg.png";
import img1 from "../../public/assets/images/mapcardimg1.png";

const CarouselComponent = ({ images }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log("Clicked");
  };

  return (
    <>
      <div className="relative">
        <button
          className={`absolute top-2 right-2  z-40 border-none`}
          type="button"
          onClick={() => {
            handleClick();
          }}
        >
          {isClicked ? (
            <div className="w-[20px] h-[20px] flex items-center justify-center bg-[#e3e2e5] rounded-2xl">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 225.000000 225.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                  fill="#2F5F82"
                >
                  <path
                    d="M655 1940 c-173 -27 -325 -148 -391 -309 -35 -85 -44 -239 -21 -347
18 -85 59 -190 100 -259 53 -87 189 -255 262 -323 135 -126 493 -402 520 -402
28 0 333 235 494 379 141 127 291 328 347 465 63 155 71 361 20 487 -135 331
-568 419 -819 167 l-42 -43 -42 43 c-110 110 -279 166 -428 142z"
                  />
                </g>
              </svg>
            </div>
          ) : (
            <div className="w-[20px] h-[20px] flex items-center justify-center rounded-2xl">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12.0624"
                  cy="12.0624"
                  r="12.0624"
                  fill="#F4F7FF"
                  fillOpacity="0.63"
                />
                <path
                  fillRule="nonzero"
                  clipRule="evenodd"
                  d="M5.58243 10.8319C5.58243 8.89601 6.94557 7.00171 9.11795 7.00171C10.1249 7.00171 10.8437 7.28528 11.3954 7.71347C11.6571 7.91662 11.8758 8.15033 12.0627 8.37844C12.2475 8.15082 12.464 7.91715 12.7234 7.71457C13.274 7.28443 13.994 7.00171 15.0105 7.00171C17.2077 7.00171 18.546 8.89918 18.546 10.8319C18.546 12.8007 17.5595 14.4849 16.3236 15.7991C15.0859 17.1153 13.5509 18.113 12.3277 18.7246C12.1619 18.8075 11.9666 18.8075 11.8007 18.7246C10.5775 18.113 9.04259 17.1153 7.80481 15.7991C6.56893 14.4849 5.58243 12.8007 5.58243 10.8319ZM9.11795 8.18022C7.75481 8.18022 6.76094 9.37632 6.76094 10.8319C6.76094 12.3902 7.5422 13.7995 8.66334 14.9917C9.69737 16.0913 10.9807 16.9617 12.0642 17.5349C13.1477 16.9617 14.4311 16.0913 15.4651 14.9917C16.5862 13.7995 17.3675 12.3902 17.3675 10.8319C17.3675 9.37315 16.393 8.18022 15.0105 8.18022C14.2371 8.18022 13.7772 8.38685 13.4488 8.64333C13.1445 8.88104 12.9326 9.17077 12.68 9.51608C12.634 9.57895 12.5866 9.64367 12.5371 9.71025C12.426 9.85982 12.2506 9.94798 12.0642 9.94798C11.8779 9.94798 11.7025 9.85982 11.5913 9.71025C11.549 9.65333 11.5081 9.59767 11.4681 9.54327C11.2078 9.1889 10.9869 8.88826 10.6727 8.64443C10.3398 8.38599 9.87878 8.18022 9.11795 8.18022Z"
                  fill="#2F5F82"
                />
              </svg>
            </div>
          )}
        </button>
        <Carousel showThumbs={false}>
          {images[0].map((i) => {
            // {console.log('i.uri', i.uri)} max-h-[180px]
            return (
              <>
                <div className="w-full max-h-[180px]" >
                  <Image
                    key={i._id}
                    alt={i.title}
                    src={`${i.uri}`}
                    // src={img.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    // loader={true}
                    // layout="fill"
                    style={{ width: "100%", height: "100%" }}
                    // fill={true}
                    // layout="fill"
                    // object-fit="cover"
                    
                  />
                </div>
              </>
            );
          })}
          {/* <div className="w-full h-full">
          <Image
            src={img.src}
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </div> */}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComponent;
