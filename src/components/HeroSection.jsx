import React from "react";

const HeroSection = () => {
  return (
    <div className="relative">
      <img
        src="https://media.cars24.com/india/cms/prod/banners/root/2025/02/18/92e4970b-5cd6-4901-b4ce-fc23206b2a57-desktop_banner_new.png"
        alt="HERO_SECTION"
        className="w-full"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ">
        <h1 className="text-4xl font-bold mb-4">Welcome to Cars24</h1>
        <p className="text-8xl">better drives, better Lives</p>
      </div>
    </div>
  );
};

export default HeroSection;
