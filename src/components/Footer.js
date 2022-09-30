import React from "react";
import { BsInstagram, BsTwitter, BsFacebook, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="h-[300px] w-full p-8 bg-gray-200 text-gray-700 flex flex-col items-start justify-between md:flex-row md:px-40 md:items-start md:pt-12 md:h-[200px]">
        <img
          src="../../assets/logo.png"
          alt=""
          className="w-32 h-32 -ml-6 text-white self-start -mt-10 md:-mt-16"
        />
        <div>
          <h3 className="font-extrabold mb-4 -mt-8 md:mt-0">Contact Us</h3>
          <p>+44 (0)20 361 30220</p>
          <p>Poplar Place, Baywater</p>
          <p>London W2 4AS</p>
          <p></p>
        </div>
        <div className="w-32 flex justify-between">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsYoutube />
        </div>
      </div>
    </>
  );
};

export default Footer;
