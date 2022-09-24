import React from "react";
import { BsSpeedometer2 } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const NewCars = () => {
  useEffect(() => {
    gsap.fromTo(
      "#img1",
      {
        y: 150,
      },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#img1",
          scrub: true,
          end: "center center",
          marker: true,
        },
      }
    );
    gsap.fromTo(
      "#img2",
      {
        y: 150,
      },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#img2",
          scrub: true,
          end: "center center",
          marker: true,
        },
      }
    );
  },[]);

  return (
    <div className="h-[1000px] w-full flex flex-col justify-start items-center p-8 md:h-[600px]">
      <h1 className="text-4xl font-extrabold mt-8 text-center font-san">
        NEW <span className="text-red-700">CARS</span>
      </h1>
      <div className="w-full flex flex-col md:flex-row">
        <div className="h-[400px] w-full md:w-1/2 bg-[#efefef] mt-8 md:m-4">
          <div className="h-2/3 bg-yellow-400 w-full object-contain flex justify-center items-center relative">
            <div
              className="h-7
             w-10 rounded-md bg-red-700 absolute top-4 left-2 flex justify-center items-center text-white"
            >
              <p className="text-xs">NEW</p>
            </div>
            <div className="absolute h-12 w-8 bg-gray-300 top-0 right-0 text-gray-900 flex flex-col justify-around items-center mt-4 mr-4">
              <small className="text-red-400">1.3</small>
              <BsSpeedometer2 className="w-6 h-6" />
            </div>
            <img src="../../assets/giorgio avianto.png" alt="" id="img1" />
          </div>
          <div className="h-1/3 p-4 flex flex-col justify-between">
            <p className="text-red-700 font-semibold">LUXURY CAR</p>
            <h1 className="text-2xl font-bold">GIOGIO AVANTO</h1>
            <div className="h-9 w-16 bg-gray-700 text-white flex justify-center items-center rounded-sm">
              <small className="text-xs">FROM $50</small>
            </div>
          </div>
        </div>
        <div className="h-[400px] w-full bg-[#efefef] mt-8 md:w-1/2 md:m-4">
          <div className="h-2/3 bg-yellow-400 w-full object-contain flex justify-center items-center relative">
            <div
              className="h-7
             w-10 rounded-md bg-red-700 absolute top-4 left-2 flex justify-center items-center text-white"
            >
              <p className="text-xs">NEW</p>
            </div>
            <div className="absolute h-12 w-8 bg-gray-300 top-0 right-0 text-gray-900 flex flex-col justify-around items-center mt-4 mr-4">
              <small className="text-red-400">1.3</small>
              <BsSpeedometer2 className="w-6 h-6" />
            </div>
            <img src="../../assets/giorgio avianto.png" alt="" id="img2" />
          </div>
          <div className="h-1/3 p-4 flex flex-col justify-between">
            <p className="text-red-700 font-semibold">LUXURY CAR</p>
            <h1 className="text-2xl font-bold">GIOGIO AVANTO</h1>
            <div className="h-9 w-16 bg-gray-700 text-white flex justify-center items-center rounded-sm">
              <small className="text-xs">FROM $50</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCars;
