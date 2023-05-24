import React from "react";

const DetailsTabs = () => {
  return (
    <section className="lg:w-full w-[90vw] flex flex-col items-center lg:items-start pt-8 xl:pt-16 pr-0 xl:pr-12 gap-5 lg:gap-10">
      <h1 className="lg:text-4xl text-2xl font-bold">Floor Plan</h1>
      <ul className="flex items-center h-[50px] lg:h-[40px] justify-between w-full rounded-3xl border-2 border-[#2F5F82]">
        <li className="flex h-full items-center text-center text-[10px] sm:text-sm lg:text-base justify-center rounded-l-3xl text-[#2F5F82] hover:text-white hover:bg-[#2F5F82] focus:bg-[#2F5F82] active:bg-[#2F5F82] w-full px-2 lg:px-5 py-2">
          All
        </li>
        <li className="flex h-full items-center text-center text-[10px] sm:text-sm lg:text-base justify-center text-[#2F5F82] hover:text-white hover:bg-[#2F5F82] focus:bg-[#2F5F82] active:bg-[#2F5F82] w-full px-2 lg:px-5 py-2">
          Studios
        </li>
        <li className="flex h-full items-center text-center text-[10px] sm:text-sm lg:text-base justify-center text-[#2F5F82] hover:text-white hover:bg-[#2F5F82] focus:bg-[#2F5F82] active:bg-[#2F5F82] w-full px-2 lg:px-5 py-2">
          1 Bedroom
        </li>
        <li className="flex h-full items-center text-center text-[10px] sm:text-sm lg:text-base justify-center rounded-r-3xl text-[#2F5F82] hover:text-white hover:bg-[#2F5F82] focus:bg-[#2F5F82] active:bg-[#2F5F82] w-full px-2 lg:px-5 py-2">
          2 Bedroom
        </li>
      </ul>
    </section>
  );
};

export default DetailsTabs;
