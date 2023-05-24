import React from "react";
import TopRatedAppartmentCard from "./TopRatedAppartmentCard";
import topRatedAppartmentCard1 from "../../public/assets/images/topRatedAppartmentCard1.png";
import topRatedAppartmentCard2 from "../../public/assets/images/topRatedAppartmentCard2.png";
import topRatedAppartmentCard3 from "../../public/assets/images/topRatedAppartmentCard3.png";
import topRatedAppartmentCard4 from "../../public/assets/images/topRatedAppartmentCard4.png";

function TopRatedAppartment() {
  return (
    <section className="flex flex-col px-5 lg:px-16 py-14 justify-start">
      <h1 className="lg:text-5xl text-xl md:text-3xl text-center font-bold lg:text-start text-black leading-snug ">
        Top-Rated Apartments
      </h1>
      <h1 className="lg:text-5xl text-xl md:text-3xl text-center font-bold lg:text-start text-black leading-snug pt-1 md:pt-5">
        in Milwaukee
      </h1>
      <div className="cardContainer flex-wrap flex items-center justify-center lg:justify-between gap-3 w-full py-8">
        <TopRatedAppartmentCard
          srcPath={`${topRatedAppartmentCard1.src}`}
          location="1029 N Jackson St, Milwaukee, WI 53202"
          name="Juneau Village Towers"
          price="Studio - 2 Beds | $1,095 - $2,295"
        />
        <TopRatedAppartmentCard
          srcPath={`${topRatedAppartmentCard2.src}`}
          location="235 E Pittsburgh Ave, Milwaukee, WI 53204"
          name="Bridgeview at South Water Works"
          price="1-2 Beds | $1,500 - $2,500"
        />
        <TopRatedAppartmentCard
          srcPath={`${topRatedAppartmentCard3.src}`}
          location="111 E Seeboth St, Milwaukee, WI 53204"
          name="Casting Place Apartments"
          price="Studio - 3 Beds | $1,342 - $4,988"
        />
        <TopRatedAppartmentCard
          srcPath={`${topRatedAppartmentCard4.src}`}
          location=" 1237 N Van Buren St, Milwaukee, WI 53202"
          name="Nova"
          price="1-3 Beds | $1,625 - $4,750"
        />
      </div>
    </section>
  );
}

export default TopRatedAppartment;
