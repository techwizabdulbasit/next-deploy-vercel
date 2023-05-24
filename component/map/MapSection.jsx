"use client";
import React, { useEffect, useState, useRef
 } from "react";
import MapCard from "@/component/map/MapCard";
import MapComponent from "@/component/map/MapComponent";
import styles from "../../public/assets/styles/main.css";
// import styles from "../../app/listing/page.module.css";
import map from "../../public/assets/images/map.png";
import Image from "next/image";
import logo from '../../public/assets/images/mapCardLogo.png'
import logo1 from '../../public/assets/images/mapCardLogo1.png'

const baseUrl = process.env.BASE_URL;

const MapSection = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const res = await fetch(`${baseUrl}/properties/all`);
      const jsonData = await res.json();
      setData(jsonData);
    }
    getData();
  }, []); 

  // const [data1, setData1] = useState([]);
  // const [page, setPage] = useState(1);
  // const scrollRef = useRef();

  // const fetchData = async () => {
  //   const response = await fetch(`${baseUrl}/properties`);
  //   const newData = await response.json();
  //   setData1((prevData) => [...prevData, ...newData]);
  //   setPage((prevPage) => prevPage + 1);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <section
      className={`${styles.font} flex lg:flex-row flex-col items-start justify-center h-auto lg:h-[81vh] w-full`}
    >
      <div className="lg:w-[50%] w-full h-full flex items-center lg:items-start flex-col">
        <div className="flex flex-col items-start bg-white w-full pt-5 pl-8">
          <h1 className="text-lg text-[#000000] font-bold">
            Apartments in Milwaukee
          </h1>
          <p className="text-[#7D7F88] text-sm">{data.length} results</p>
        </div>
        <div
          className={`${styles.cardContainer} cardContainer scrollbar-w-0 overflow-y-scroll h-76 flex flex-col gap-3 py-2 px-5`}
        >
          {/* <MapCard
            productName="Bridgeview at South Water Works"
            productLocation="235 E Pittsburgh Ave, Milwaukee, WI 53204"
            rating="4.0 (8)"
            logo={`${logo.src}`}
            Rooms="1-2 Beds"
            details="
            Dog & Cat Friendly Fitness Center Maintenance on site Property
            Manager on Site Business Center Controlled Access Elevator"
            number="414-759-5022"
            productQuality="Month to Month Leases "
            price=" $1,500 - $2,500/month"
          /> */}
          {
            data.map((c) => 
           {
            // console.log('Map section list c ', c)  ;
              return (
              <MapCard
              key={c._id}
              productName={c.name}
              productLocation={c.address}
              rating="4.0 (8)"
              logo={`${logo.src}`}
              Rooms="1-2 Beds"
              details={c.description}
              number="414-759-5022"
              productQuality="Month to Month Leases "
              price={`$${c.floorplans[0].min_price}-$${c.floorplans[0].max_price}/month`}
              images={[c.images]}
            />
            )}
            )
          }

        </div>
      </div>
      <div className="lg:w-[50%] w-full h-full relative right-0 top-0">
       <MapComponent/>
        {/* <Image
          src={map.src}
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="flex flex-col items-center justify-center  absolute bottom-10 right-5 z-50">
          <button
            type="button"
            className="font-bold text-[#6B6F7B] rounded-t-md bg-white border-[1px] border-gray-400 py-1 px-2"
          >
            -
          </button>
          <button
            type="button"
            className="font-bold text-[#6B6F7B] rounded-b-md bg-white border-[1px] border-gray-400 py-1 px-2"
          >
            +
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default MapSection;
