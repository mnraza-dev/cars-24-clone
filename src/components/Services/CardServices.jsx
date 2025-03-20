import React from "react";
import CardServiceItem from "./CardServiceItem";

const CardServices = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <CardServiceItem />
      <CardServiceItem />
      <CardServiceItem />
      <CardServiceItem />
      <CardServiceItem />
    </div>
  );
};

export default CardServices;
