import React from "react";

function Hero() {
  return (
    <div className="flex flex-col">
      <div className="h-[460px] md:h-[500px] lg:h-[600px] w-full flex relative">
        <div className="absolute w-full h-full flex flex-col justify-start items-center pt-32">
          <p className="text-xs font-bold opacity-80 self-start ml-16 sm:ml-48 md:self-center md:-ml-48 font-georgia">
            EXCLUSIVE{" "}
          </p>
          <h1 className="text-red-700 text-8xl font-black font-san">CARS</h1>
          <div className="absolute top-14 sm:top-4">
            <img src="../../assets/hero.png" alt="" />
            <p className="font-bold text-xs opacity-80 text-right mr-12 -mt-4 sm:-mt-6 sm:mr-16 md:text-sm font-georgia">
              FOR RENTALS
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full bg-[#efefef]"></div>
        <div className="w-1/2 h-full  bg-[#FFD743]"></div>
      </div>
      <div className="h-10 flex w-full">
        <div className="w-1/2 h-full bg-[#232323] justify-around items-center flex ">
          <img
            src="../../assets/bentley-logo.png"
            alt=""
            className="w-10 h-6 bg-white"
          />
          <img
            src="../../assets/ferrari-logo.png"
            alt=""
            className="w-10 h-6"
          />
          <img src="../../assets/benz-logo.png" alt="" className="w-10 h-6" />
          <img src="../../assets/lambo-logo.png" alt="" className="w-8 h-8" />
        </div>
        <div className="w-1/2  h-full  bg-left overflow-hidden bg-car bg-no-repeat md:bg-cover md:bg-right"></div>
      </div>
    </div>
  );
}

export default Hero;
