import React from "react";
const CardServiceItem = () => {
  return (
    <div className="m-4  rounded-2xl  drop-shadow-md max-w-[300px] min-[300px]    border-2  border-gray-200 shadow-2xl">
      <div className="m-0 ">
      <img
        src="https://cdn.24c.in/prod/super-app/root/2024/07/24/8898c45b-7ee1-4f80-8fde-4dc61ef49c70-Drive-home.webp"
        alt="BUY"
        className="w-full rounded-b-4xl"
      />
      <div className="services"></div>
      </div>
      <div className="text-2xl font-semibold">Buy _________</div>
      <div>
        <h2>Drive home your dream car</h2>
      </div>
      <div>
        <button className="bg-[#F5F5F5] ">View all cars</button>
      </div>
    </div>
  );
};

export default CardServiceItem;
