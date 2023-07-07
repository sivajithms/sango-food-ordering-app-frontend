import React from "react";
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

const HomeLayout = (props) => {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-20">
        <Navbar />
      </div>
      <FoodTab />
      <div className="container mx-auto px-4 lg:px-20">
        {props.children}
      </div>
    </>
  );
};

export default HomeLayout;
