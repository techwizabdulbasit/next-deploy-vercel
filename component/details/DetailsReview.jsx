"use client";
import React, { useState } from "react";
import Review from "./Review";
import DetailsButton from "./DetailsButton";

const DetailsReview = () => {
  const [show, setShow] = useState(false);
  function toggle() {
    setShow(!show);
  }
  return (
    <section className="lg:px-14 px-4 pb-8 lg:pb-20">
      <div className="flex items-center gap-1 py-3 text-center justify-center lg:justify-start lg:text-start">
        <h1 className="text-2xl text-[#000000] font-bold">5.0</h1>
        <h1 className="text-[#7D7F88]">(6 reviews)</h1>
      </div>
      <div
        style={{
          height: show ? "auto" : " ",
        }}
        className="h-[500px] overflow-y-clip flex flex-col items-start gap-7 pt-5"
      >
        <Review
          name="Mark"
          date="August 2022"
          paragraph="We really enjoyed our time at the Brix. Awesome loft style apartment on
        the top floor had sweeping, gorgeous views of downtown Milwaukee to the
        lake, Hoan Bridge lights to the south, with lots of light all year
        round. The grills and rooftop park on site are great for after work
        cocktails, too."
        />
        <Review
          name="Ellie"
          date="August 2022"
          paragraph="I honestly loved living at the Brix and the only reason we moved is because we left the city. The staff is so sweet, friendly and great at what they do. I never had a delay with mail/packages, service requests were taken seriously and promptly addressed, and the property always felt safe and clean."
        />
        <Review
          name="Kyle "
          date="July 2022"
          paragraph="These apartments are beautiful inside and out, it is awesome that they kept so much of the original charm of the building from when it was a candy factory. I love coming into the building, I always enjoy lobby, halls, and especially the great room and outdoor patio space."
        />
        <Review
          name="Kim "
          date="June 2022"
          paragraph="This apartment is brand new and in a great neighborhood. It is built into an old candy factory and is really neat inside. Huge apartments. Huge Windows. It is still being worked on but it suppose to have some neat amenities soon like a elevated garden and a fitness center."
        />
        <Review
          name="Mark"
          date="August 2022"
          paragraph="We really enjoyed our time at the Brix. Awesome loft style apartment on
        the top floor had sweeping, gorgeous views of downtown Milwaukee to the
        lake, Hoan Bridge lights to the south, with lots of light all year
        round. The grills and rooftop park on site are great for after work
        cocktails, too."
        />
        <Review
          name="Ellie"
          date="August 2022"
          paragraph="I honestly loved living at the Brix and the only reason we moved is because we left the city. The staff is so sweet, friendly and great at what they do. I never had a delay with mail/packages, service requests were taken seriously and promptly addressed, and the property always felt safe and clean."
        />
      </div>
      <div className="w-34 pt-5">
        <DetailsButton name="Show reviews" onClick={toggle} />
      </div>
    </section>
  );
};

export default DetailsReview;
