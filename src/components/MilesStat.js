import React from "react";

const MilesStat = () => {
  return (
    <div className="w-full h-[1300px] sm:h-[1200px] py-10 flex flex-col justify-start items-center">
      <h1 className="text-4xl font-extrabold mt-8 text-center font-san">
        MILES <span className="text-red-700">STATISTICS</span>
      </h1>
      <small className="text-gray-600 mb-8">
        We suggest you use the Audi G3
      </small>
      <div className="flex flex-col w-full h-full justify-start">
        <div className="h-3/5 w-full object-contain overflow-hidden relative flex justify-center">
          <div className=" absolute top-28 left-16 sm:left-20 md:left-36 lg:left-56 xl:left-[35%] ">
            <p className="text-gray-700 mr-4">28L CONSUMTION</p>
            <div className="w-32 h-[1px] bg-black"></div>
          </div>
          <div className=" absolute top-64  left-16 sm:left-20  md:left-36 lg:left-56 xl:left-[35%]">
            <p className="text-gray-700 mr-4">350Km/Hr</p>
            <div className="w-32 h-[1px] bg-black"></div>
          </div>
          <div className=" absolute top-96  left-16 sm:left-20  md:left-36 lg:left-56 xl:left-[34%]">
            <p className="text-gray-700 mr-4">3.5 OVERCLOCKING</p>
            <div className="w-32 h-[1px] bg-black"></div>
          </div>
          <img
            src="../../assets/audi-top.png"
            alt=""
            className="ml-14 sm:ml-0"
          />
        </div>
        <div className="w-full h-2/5 flex justify-center items-center relative">
          <div className="w-56 rounded-full h-56 border border-red-700 flex justify-center items-center p-2">
            <div className="rounded-full border border-red-700 flex justify-center items-center w-full h-full bg-red-700 relative overflow-hidden p-6">
              <div className="rounded-full h-5/6 w-5/6 absolute flex justify-center items-center bg-gray-300">
                <div className="w-3/5 rounded-full h-3/5  border border-red-700 bg-white"></div>
              </div>
            </div>
          </div>
          <div className="h-40 w-28 absolute left-[50%] object-contain overflow-hidden transform -rotate-90">
            <img src="../../assets/audi-top.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilesStat;
