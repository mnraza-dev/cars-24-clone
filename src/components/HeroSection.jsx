import React from "react";

const HeroSection = () => {
  return (
    <div className="relative">
      <img
        src="https://media.cars24.com/india/cms/prod/banners/root/2025/02/18/92e4970b-5cd6-4901-b4ce-fc23206b2a57-desktop_banner_new.png"
        alt="HERO_SECTION"
        className="w-full"
      />
      <div className="absolute top-2/6 left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-white ">
        <div className="text-4xl font-bold mb-4 flex gap-2 items-center">
          Welcome to
          <img
            src="https://s3.ap-south-1.amazonaws.com/com.cars24.images/production/india/homepage/cars24_web_super.png"
            alt="Logo"
            className="w-[80px] h-[36px] flex items-center"
          />
        </div>
        <p className="text-8xl font-semibold w-[80%]">better drives, better Lives</p>
      </div>
    </div>
  );
};

export default HeroSection;
