import React from "react";

const FilterOptionsBtn = ({title}) => {
  return (
    <button
      type="button"
      className="text-[#7D7F88] bg-[#F0F4F6] hover:bg-[#2F5F82] hover:text-white font-medium rounded-full text-sm p-2  w-[150px]"
    >{title}
      
    </button>
  );
};

export default FilterOptionsBtn;
