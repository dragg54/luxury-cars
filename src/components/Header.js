import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi'

const Header = () => {
  return (
    <div className="h-12 w-full md:h-16">
      <div className="flex justify-between w-full h-full items-center pr-2">
        <div className="w-1/4 bg-[#FFD743]">
          <img src="../../assets/logo.png" alt="" width={70} height={70} className="opacity-80"/>
        </div>
        <BiMenuAltRight className="h-8 w-8" />
      </div>
    </div>
  );
}

export default Header