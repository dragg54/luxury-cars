import React from "react";

const News = () => {
  return (
    <div className="h-[800px] md:h-[500px] bg-[#efefef]  lg:flex-row flex flex-col justify-between items-center md:justify-between md:p-0 md:pl-8">
      <div className="w-full flex justify-center flex-col items-center md:w-[40%] h-[350px] md:h-full p-6">
        <h1 className="text-2xl font-extrabold mt-8 text-center font-san">
          <span className="text-red-700">SUBSCRIBE</span> TO NEWS
        </h1>
        <small className="text-gray-700 pt-3">
          YOUR BONUSES AND DISCOUNTS AWAIT YOU
        </small>
        <form action="" className="md:pt-8 w-full md:w-full">
          <input
            type="text"
            placeholder="Name"
            className="p-3 my-4 w-full rounded-3xl"
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            className="p-3 my-4 w-full rounded-3xl"
          />
          <br />
          <input
            type="button"
            value="submit"
            className="w-full p-3 my-4 rounded-full bg-black text-white"
          />
        </form>
      </div>
      <div className="w-full md:w-[60%] h-[400px] md:h-full self-start flex flex-col">
        <div className=" h-5/6 object-contain bg-gradient-to-r from-black to-gray-700 lg:flex justify-center">
          <img src="../../assets/dodger.png" alt="" />
        </div>
        <div className="bg-yellow-400 h-1/6 overflow-hidden object-contain flex items-center">
          <img src="../../assets/dodgers.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default News;
