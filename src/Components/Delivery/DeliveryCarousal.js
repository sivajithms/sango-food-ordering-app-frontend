import React from "react";
import DeliveryFoodCategory from "./DeliveryFoodCategory";

const DeliveryCarousal = () => {
  return (
    <>
      <h1 className="text-xl font-semibold">
        Inspiration for your first order
      </h1>
        <br/>
      <div className="flex flex-wrap justify-between">
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
        <DeliveryFoodCategory />
      </div>
    </>
  );
};

export default DeliveryCarousal;
