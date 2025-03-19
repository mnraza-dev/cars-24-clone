import React from "react";
import Logo from "/logo.webp";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between drop-shadow-lg shadow-md h-22 px-8">
      <img
        src="https://media.cars24.com/cars24/seo/static/1_20230830_1693395013.png"
        alt="Logo"
        className="w-[80px] h-[39px]"
      />

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <p className="text-[#5f5f5f]">Sell</p>
          <p className="text-[#5f5f5f]">Buy</p>
          <p className="text-[#5f5f5f]">Rent</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-[#5f5f5f]">Login</p>
          <p className="text-[#5f5f5f]">Signup</p>
        </div>
    </div>
  );
};

export default Navbar;
