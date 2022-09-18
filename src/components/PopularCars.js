import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { BsSpeedometer2 } from "react-icons/bs";
import "../App.css";

const PopularCars = () => {
  return (
    <div className=" bg-[#e5e5e5] pt-8 w-full">
      <h1 className="text-4xl font-extrabold mt-8 text-center font-san">
        POPULAR <span className="text-red-700">CARS</span>
      </h1>
      <ScrollContainer
        id="image-wrapper"
        className="scroll-container h-[1220px] sm:h-[400px] w-full flex flex-col justify-between items-center  overflow-x-scroll overflow-hidden  bg-[#e5e5e5] lg:flex-row lg:justify-start"
      >
        <div className="flex w-full justify-between flex-col items-center h-[1160px] sm:h-[350px] mt-10 lg:w-[200%] sm:justify-between sm:flex-row  lg:px-10 lg:mt-0">
          <div className="flex flex-col w-full justify-center items-center">
            <div className="w-5/6 h-64 sm:h-72 bg-white flex flex-col justify-around items-center sm:w-96 sm:mr-6 relative rounded-md pb-12">
              <div className="absolute h-12 w-8 bg-gray-300 top-0 right-0 text-gray-900 flex flex-col justify-around items-center mt-4 mr-4">
                <small className="text-red-400">1.3</small>
                <BsSpeedometer2 className="w-6 h-6" />
              </div>
              <img
                src="../../assets/aaron.png"
                alt=""
                className="mt-12 md:mt-0"
              />
              <br />
              <caption className="text-gray-700 -mt-12 text-sm">
                Ferrari
              </caption>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <div className="w-5/6 h-64 sm:h-72 bg-white flex flex-col justify-around items-center sm:w-96 sm:mr-6 relative rounded-md pb-12">
              <div className="absolute h-12 w-8 bg-gray-300 top-0 right-0 text-gray-900 flex flex-col justify-around items-center mt-4 mr-4">
                <small className="text-red-400">1.3</small>
                <BsSpeedometer2 className="w-6 h-6" />
              </div>
              <img
                src="../../assets/aaron.png"
                alt=""
                className="mt-12 md:mt-0"
              />
              <br />
              <caption className="text-gray-700 -mt-12 text-sm">
                Ferrari
              </caption>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <div className="w-5/6 h-64 sm:h-72 bg-white flex flex-col justify-around items-center sm:w-96 sm:mr-6 relative rounded-md pb-12">
              <div className="absolute h-12 w-8 bg-gray-300 top-0 right-0 text-gray-900 flex flex-col justify-around items-center mt-4 mr-4">
                <small className="text-red-400">1.3</small>
                <BsSpeedometer2 className="w-6 h-6" />
              </div>
              <img
                src="../../assets/aaron.png"
                alt=""
                className="mt-12 md:mt-0"
              />
              <br />
              <caption className="text-gray-700 -mt-12 text-sm">
                Ferrari
              </caption>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <div className="w-5/6 h-64 sm:h-72 bg-white flex flex-col justify-around items-center sm:w-96 sm:mr-6 relative rounded-md pb-12">
              <div className="absolute h-12 w-8 bg-gray-300 top-0 right-0 text-gray-900 flex flex-col justify-around items-center mt-4 mr-4">
                <small className="text-red-400">1.3</small>
                <BsSpeedometer2 className="w-6 h-6" />
              </div>
              <img
                src="../../assets/aaron.png"
                alt=""
                className="mt-12 md:mt-0"
              />
              <br />
              <caption className="text-gray-700 -mt-12 text-sm">
                Ferrari
              </caption>
            </div>
          </div>
        </div>
      </ScrollContainer>
    </div>
  );
};

export default PopularCars;
