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
        <div className="w-[30%] h-[500px] absolute left-[60%] rounded-lg bg-login sm:float-left ">
          <h1 className="font-bold leading-10 tracking-tighter text-center text-lg mr-64 mt-4 text-white">
            Sign in
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
                <FaEyeSlash className=" absolute top-[15.5rem] left-[88%] text-white"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
