import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "../App.css"

const PopularCars = () => {
  return (
    <div className=" bg-[#e5e5e5] pt-8 w-full">
      <h1 className="text-4xl font-extrabold mt-8 text-center font-san">
        POPULAR <span className="text-red-700">CARS</span>
      </h1>
      <ScrollContainer
        id="image-wrapper"
        className="scroll-container h-[1300px] md:h-[1500px] lg:h-[400px] w-full flex flex-col justify-between items-center pt-10 overflow-x-scroll overflow-hidden  bg-[#e5e5e5] lg:flex-row lg:justify-start"
      >
        <div className="flex w-full justify-between flex-col items-center h-[1200px] md:h-[1350px] lg:h-[350px] mt-10 lg:w-[200%] lg:justify-between lg:flex-row  lg:px-10 lg:mt-0">
          <div className="w-3/4 h-64 md:h-72 bg-white flex justify-center items-center lg:w-96 lg:mr-6">
            <img src="../../assets/aaron.png" alt="" />
          </div>
          <div className="w-3/4 h-64 md:h-72 bg-white flex justify-center items-center lg:w-96 lg:mr-6">
            <img src="../../assets/aaron.png" alt="" />
          </div>
          <div className="w-3/4 h-64 md:h-72 bg-white flex justify-center items-center lg:w-96 lg:mr-6">
            <img src="../../assets/aaron.png" alt="" />
          </div>
          <div className="w-3/4 h-64 md:h-72 bg-white flex justify-center items-center lg:w-96">
            <img src="../../assets/aaron.png" alt="" />
          </div>
        </div>
      </ScrollContainer>
    </div>
  );
};

export default PopularCars;
