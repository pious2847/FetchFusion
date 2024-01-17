/* eslint-disable no-template-curly-in-string */
import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';


const HeroSection = () => {
  return (
<div className="relative h-full justify-center items-center flex flex-col gap-20">
  <div className="justify-center items-center flex flex-col gap-6 w-full">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-sans text-center">
      Immerse yourself
    </h1>
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-sans text-center">
      in a cinematic experience
    </h1>
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-sans max-w-3xl text-center">
      at FetchFusion
    </h1>
  </div>

  <div className="search flex w-[100%] md:w-[70%]  md:px-1 bg-opacity-10 bg-white overflow-hidden rounded-full">
    <button className="text-white px-2 w-[10%] md:w-10 items-center flex justify-center text-xl disabled">
      <AiOutlineSearch />
    </button>
    <input
      type="text"
      className="input p-4 w-[90%] md:w-[100%] text-white bg-white bg-opacity-10"
      placeholder="What do you want to watch?"
    />
  </div>
</div>

  );
};

export default HeroSection;
