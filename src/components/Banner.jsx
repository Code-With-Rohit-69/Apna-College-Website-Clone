import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

function Banner() {
  return (
    <div className='bannerPage w-full h-[55vh] bg-[#6472C8] flex justify-center items-center flex-col gap-[1rem] text-white relative'>
      <h3 className='font-bold text-[1.2rem]'>WEB DEVELOPMENT + DSA</h3>
      <h1 className='font-bold text-[2rem]'>JOIN NEW <span className='text-[#FFEB3B]'>SIGMA</span> BATCH</h1>
      <h3 className='font-bold text-[1.2rem]'>Starting from 15th Feb, 2024</h3>
      <a href="#" className='text-black px-[2.4rem] py-[.7rem] bg-[white] rounded-2xl font-bold text-[1.2rem] flex items-center justify-center gap-[6px]'>Join Now <IoIosArrowForward /></a>
    </div>
  )
}

export default Banner
