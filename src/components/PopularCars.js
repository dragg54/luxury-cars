import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { BsSpeedometer2 } from "react-icons/bs";
import "../App.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PopularCars = () => {
  useEffect(() => {
       gsap.fromTo(
      "#image1",
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#image1",
          scrub: true,
          end: "center center",
          marker: true,
        },
      }
    );
    gsap.fromTo(
      "#image2",
      {
        scale: 0,
        opacity: 0
      },
      {
        scale:1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#image2",
          scrub: true,
          end: "center center",
          marker: true,
        },
      }
    );
     gsap.fromTo(
       "#image3",
       {
         scale: 0,
         opacity: 0
       },
       {
         scale: 1,
         opacity: 1,
         duration: 1,
         scrollTrigger: {
           trigger: "#image3",
           scrub: true,
           end: "center center",
           marker: true,
         },
       }
     );
      gsap.fromTo(
        "#image4",
        {
          scale: 0,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: "#image4",
            scrub: true,
            end: "center center",
            marker: true,
          },
        }
      );
  })
  return (
    <div className=" bg-[#e5e5e5] pt-8 w-full">
      <h1 className="text-4xl font-extrabold mt-8 text-center font-san">
        POPULAR <span className="text-red-700">CARS</span>
      </h1>
      <ScrollContainer className="scroll-container h-[1220px] sm:h-[400px] w-full flex flex-col justify-between items-center  overflow-x-scroll overflow-hidden  bg-[#e5e5e5] lg:flex-row lg:justify-start">
        <div className="flex w-full justify-between flex-col items-center h-[1160px] sm:h-[350px] mt-10 lg:w-[200%] sm:justify-between sm:flex-row  lg:px-10 lg:mt-0">
          <div className="flex flex-col w-full justify-center items-center">
            <div
              className="w-5/6 h-64 sm:h-72 bg-white flex flex-col justify-around items-center sm:w-96 sm:mr-6 relative rounded-md pb-12 hover:opacity-100 hover:cursor-pointer"
              id="image1"
            >
              <div className="w-16 h-8 bg-red-700 flex justify-center items-center absolute left-4 top-4 rounded-md">
                {" "}
                <small className="text-white text-[10px]">FOR RENT</small>
              </div>
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
              <caption className="text-gray-700 -mt-12 text-sm font-extrabold">
                FERRARI
              </caption>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <div
              className="w-5/6 h-64 sm:h-72 bg-white flex flex-col justify-around items-center sm:w-96 sm:mr-6 relative rounded-md pb-12 hover:opacity-100 hover:cursor-pointer"
              id="image2"
            >
              <div className="w-16 h-8 bg-red-700 flex justify-center items-center absolute left-4 top-4 rounded-md">
                {" "}
                <small className="text-white text-[10px]">FOR RENT</small>
              </div>
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
              <caption className="text-gray-700 -mt-12 text-sm font-extrabold">
                FERRARI
              </caption>
            </div>
          </div>{" "}
          <div className="flex flex-col w-full justify-center items-center">
            <div
              className="w-5/6 h-64 sm:h-72 bg-white flex flex-col justify-around items-center sm:w-96 sm:mr-6 relative rounded-md pb-12 hover:opacity-100 hover:cursor-pointer"
              id="image3"
            >
              <div className="w-16 h-8 bg-red-700 flex justify-center items-center absolute left-4 top-4 rounded-md">
                {" "}
                <small className="text-white text-[10px]">FOR RENT</small>
              </div>
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
              <caption className="text-gray-700 -mt-12 text-sm font-extrabold">
                FERRARI
              </caption>
            </div>
          </div>{" "}
          <div className="flex flex-col w-full justify-center items-center">
            <div
              className="w-5/6 h-64 sm:h-72 bg-white flex flex-col justify-around items-center sm:w-96 sm:mr-6 relative rounded-md pb-12 hover:opacity-100 hover:cursor-pointer"
              id="image4"
            >
              <div className="w-16 h-8 bg-red-700 flex justify-center items-center absolute left-4 top-4 rounded-md">
                {" "}
                <small className="text-white text-[10px]">FOR RENT</small>
              </div>
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
              <caption className="text-gray-700 -mt-12 text-sm font-extrabold">
                FERRARI
              </caption>
            </div>
          </div>{" "}
        </div>
      </ScrollContainer>
    </div>
  );
};

export default PopularCars;
