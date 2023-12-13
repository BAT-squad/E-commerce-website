import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiNike, SiAdidas, SiPuma } from "react-icons/si";
import { FaCopyright } from "react-icons/fa";
import { FaHandHoldingDollar, FaArrowRightArrowLeft } from "react-icons/fa6";
const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/all-products");
  };

  return (
    <div className="text-center p-[10%]">
      <div className="items-center justify-center mb-10">
        <h1 className=" text-3xl text-white font-bold mb-8">
          Shoes are the Spirit of Fashion
        </h1>
        <p className="text-gray-500 mb-6">
          Shoes define style, telling a unique story through <br /> personal choices.
          They are the essence of self-epression and individuality in fashion.
        </p>
        <button
          className="text-white bg-violet-600 rounded-full p-2"
          onClick={handleExploreClick}
        >
          Explore now
        </button>
      </div>
      <div className="flex justify-center space-x-80">
        <SiNike className="w-40 h-40 text-gray-500" />
        <SiAdidas className="w-40 h-40 text-gray-500" />
        <SiPuma className="w-40 h-40 text-gray-500" />
      </div>

      <div className="flex items-center justify-center mt-4 space-x-60">
        <FaHandHoldingDollar className="w-10 h-10 text-violet-500" />
        <FaCopyright className="w-10 h-10 text-violet-500" />
        <FaArrowRightArrowLeft className="w-10 h-10 text-violet-500" />
      </div>
      <div className="justify-center text-white text-[50px] mt-10">
        Freaquently Asked Question
        <h1 className=" text-gray-500 text-[16px]">Wanna Ask Something?</h1>
      </div>
      <div className="flex mt-10  justify-center items-center">
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
