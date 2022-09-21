import React from "react";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  return (
    <div className="h-12 w-full md:h-16">
      <div className="flex justify-between w-full h-full items-center pr-2">
        <div className="w-2/3 h-full flex">
          <div className="w-1/3 bg-[#FFD743] flex items-center">
            <img
              src="../../assets/logo.png"
              alt=""
              width={70}
              height={70}
              className="opacity-80"
            />
          </div>
          <div className="w-1/2 hidden lg:flex justify-around items-center h-full text-xs font-bold opacity-80 font-georgia">
            <li className="nav-list">About Us</li>
            <li className="nav-list">Rent</li>
            <li className="nav-list">Contact</li>
          </div>
        </div>
        <div className=" w-20 h-10 hidden lg:display-block bg-black text-white rounded-2xl p-4 lg:flex justify-center items-center hover:opacity-60 hover:scale-120 hover:cursor-pointer transform transition-500">
          <p className="text-xs">Sign In</p>
        </div>
        <BiMenuAltRight className="h-8 w-8 lg:hidden" />
      </div>
    </div>
  );
};

export default Header;
