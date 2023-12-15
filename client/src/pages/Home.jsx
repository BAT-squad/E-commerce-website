import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiNike, SiAdidas, SiPuma } from "react-icons/si";
import { FaCopyright } from "react-icons/fa";
import { FaHandHoldingDollar, FaArrowRightArrowLeft } from "react-icons/fa6";
import Products from "../components/products.jsx";
const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/all-products");
  };

  return (
<div className="text-center p-8 md:p-12 lg:p-16 xl:p-20">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold mb-6">
          Shoes are the Spirit of Fashion
        </h1>
        <p className="text-gray-500 mb-6">
          Shoes define style, telling a unique story through personal choices. They are the essence of self-expression and individuality in fashion.
        </p>
        <button
          className="text-white bg-violet-600 rounded-full p-2"
          onClick={handleExploreClick}
        >
          Explore now
        </button>
      </div>
      <div className="flex justify-center space-x-8 md:space-x-12 gap-20 h-20 lg:space-x-20 mb-10">
        <SiNike className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 text-gray-500" />
        <SiAdidas className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 text-gray-500" />
        <SiPuma className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 text-gray-500" />
      </div>
      <div className="flex items-center justify-center space-x-12 gap-20 h-20 mt-4 md:mt-8 lg:mt-12">
        <FaHandHoldingDollar className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-violet-500" />
        <FaCopyright className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-violet-500" />
        <FaArrowRightArrowLeft className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-violet-500" />
      </div>
      <Products />
      <div className="text-white text-2xl md:text-3xl lg:text-4xl mt-8 md:mt-10">
        Frequently Asked Questions
        <h1 className="text-gray-500 text-md md:text-xl lg:text-2xl">
          Wanna Ask Something?
        </h1>
      </div>
      <div className="flex mt-10 justify-center items-center">
        <div className=" flex flex-col flex-1 justify-center items-center">
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind                                                                        +"
          />
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind                                                                        +"
          />
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind                                                                        +"
          />
        </div>
        <div className="  flex flex-col flex-1 justify-center items-center">
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind                                                                        +"
          />
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind                                                                        +"
          />
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind                                                                        +"
          />
        </div>
      </div>
      <div className="bg-purple-500 p-[5%] mx-9 rounded-md mt-[10%]">
        <h1 className="text-3xl text-white font-bold mb-10">
          Highest Quality Collection
        </h1>
        <button className="text-white bg-gray-300 font-bold pl-6  pr-6 p-2 mt-4 rounded-full  ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
