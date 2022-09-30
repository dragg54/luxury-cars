import React from "react";
import { BiPlusMedical } from "react-icons/bi";

const ItemSection = () => {
  return (
    <>
      <div className="w-full h-[550px] bg-[#efefef] flex relative md:h-[650px]">
        <div className="w-2/3 h-full bg-[#efefef] flex flex-col justify-end items-center pt-16 pb-10 pl-8 md:w-1/2">
          <ul className="flex flex-col items-start w-full ">
            <h1 className="font-black text-sm">
              AUTO <span className="text-red-700">CHARACTERISTICS</span>
            </h1>
            <li className="auto-characteristics-disc">
              <span className="auto-characteristics"> MODEL YEAR 2020</span>
            </li>
            <li className="auto-characteristics-disc">
              <span className="auto-characteristics">
                TRANSMISSION AUTOMATIC
              </span>
            </li>
            <li className="auto-characteristics-disc">
              <span className="auto-characteristics">CONSUMPTION 20LT/HR</span>
            </li>
            <li className="auto-characteristics-disc">
              <span className="auto-characteristics">FULL DRIVE</span>
            </li>
            <li className="auto-characteristics-disc">
              <span className="auto-characteristics">NUMBER OF SEATS 5</span>
            </li>
            <li className="auto-characteristics-disc">
              <span className="auto-characteristics">COLOR GREEN</span>
            </li>
          </ul>
        </div>
        <div className="w-1/3 h-full bg-[#FFD743] md:w-1/2"></div>
        <div className="absolute flex flex-col items-center md:left-1/2 transform md:-translate-x-1/2">
          <img src="../../assets/dodger.png" alt="" />
          <caption className="text-3xl text-red-700 font-black font-san">
            DODGER S29
          </caption>
        </div>
      </div>
      <div className="w-full h-20 flex">
        <div className="bg-[#FFD743] w-1/2 h-full flex justify-center items-center font-bold">
          <p className="text-black">$78 PER DAY</p>
        </div>
        <div className="bg-red-700 w-1/2 h-full font-bold text-white flex justify-center items-center">
          <BiPlusMedical className="mr-2"/> RENT THIS CAR
        </div>
      </div>
    </>
  );
};

export default ItemSection;
