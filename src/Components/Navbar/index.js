import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

const MobileNav = () => {
  return (
    <>
      <nav className="p-4 flex bg-white shadow-md items-center justify-between md:hidden">
        <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex gap-3 items-center">
          <button className="bg-sango-400 text-white py-2 px-3 rounded-full">
            Use App
          </button>
          <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
            <FaPizzaSlice />
          </span>
        </div>
      </nav>
    </>
  );
};

const WebNav = () => {
  return (
    <>
      <nav className="p-4 md:flex bg-white shadow-md items-center justify-between hidden">
      <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>      </nav>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <MobileNav />
      <WebNav/>
    </>
  );
};

export default Navbar;
