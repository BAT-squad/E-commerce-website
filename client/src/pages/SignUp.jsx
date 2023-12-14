import React from "react";
import image from "./login/anime.png";
import { FaEyeSlash } from "react-icons/fa6";

const SignUp = () => {
  return (
    <div>
      <p className="text-transparent">.</p>
      <div className="w-[90%] h-[550px] absolute top-[12%] left-[10%]">
        <div className="">
          <img
            src={image}
            alt=""
            className="w-[20%] h-[400px] absolute left-[5%]"
          />
          <p className="absolute font-sans font-semibold text-xl text-center w-[30%] h-[39px] top-[420px]  text-white">
            Explore the world of meta fashion
          </p>
        </div>
        <div className="w-[30%] h-[500px] absolute left-[40%] rounded-lg bg-login sm:float-left ">
          <h1 className="font-bold leading-10 tracking-tighter text-center text-lg mr-64 mt-4 text-white">
            Sign Up
          </h1>

          <div className="ml-8 mt-10">
            <input
              type="text"
              className="bg-transparent border-b-[1px] border-input placeholder:text-white text-white w-11/12"
              placeholder="Email Adress"
            />
            <div className="mt-12">
              <input
                type="text"
                className="bg-transparent border-b-[1px] border-input placeholder:text-white text-white w-5/12"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="bg-transparent border-b-[1px] border-input ml-4 placeholder:text-white text-white w-[46%]"
                placeholder="Last Name"
              />
            </div>
            <div className=" inline">
              <input
                type="password"
                className="bg-transparent border-b-[1px] absolute inline border-input placeholder:text-white mt-12 text-white w-10/12"
                placeholder="password"
              />
              <FaEyeSlash className=" absolute top-[15.5rem] left-[88%] text-white" />
            </div>
          </div>
          <p className=" absolute top-80 text-white left-[10%]">
            Date Of Birth
          </p>

          <div className=" flex absolute top-[370px]">
            <div className="container mx-auto p-4 inline" >

              <select
                className="bg-transparent border-b-[1px]    inline text-placeholder border-input  p-2 w-12/12"
                defaultValue="" 
              >
                <option value="0"  className="text-white">
                  Month
                </option>
                <option value="1" className=" text-black">January</option>
                <option value="2" className=" text-black" >February</option>
                <option value="3" className=" text-black" >March</option>
                <option value="4" className=" text-black" >April</option>
                <option value="5" className=" text-black" >May</option>
                <option value="6" className=" text-black" >June</option>
                <option value="7" className=" text-black" >July</option>
                <option value="8" className=" text-black" >August</option>
                <option value="9" className=" text-black" >September</option>
                <option value="10" className=" text-black" >October</option>
                <option value="11" className=" text-black" >November</option>
                <option value="12" className=" text-black"   >December</option>
              </select>
            </div>
            <input
              type="text"
              className=" top-[-18px] ml-[103%] bg-transparent border-b-[1px] absolute inline border-input mt-12 text-white w-7/12"
              placeholder="Day"
            />
            <input
              type="text"
              className=" top-[-18px] ml-[175%]   w-7/12 bg-transparent border-b-[1px] absolute inline border-input text-white mt-12 "
              placeholder="Year"
            />
          </div>
          <button className="bg-continue text-white p-[1px] px-4 rounded-2xl float-right mt-64 mr-5 ">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
