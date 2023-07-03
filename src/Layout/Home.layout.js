import React from "react";

const HomeLayout = (props) => {
  return (
    <>
      <div className="container">
        {props.children}
    </div>
    </>
  );
};

export default HomeLayout;
