"use client";
import React, { useState } from "react";

import ReactStars from "react-rating-stars-component";

const thirdExample = {
  size: 20,
  count: 5,
  isHalf: false,
  value: 4,
  color: "#7D7F88",
  activeColor: "#2F5F82",
  onChange: (newValue) => {
    console.log(`Example 3: new value is ${newValue}`);
  },
};

const RatingStar = () => {
  return (
    <div className="App">
      <ReactStars {...thirdExample} />
    </div>
  );
};

export default RatingStar;
