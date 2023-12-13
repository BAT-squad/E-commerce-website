import React from "react";
import image from "./login/anime.png";
import Facebook from "./login/continue/facebook";
import Google from "./login/continue/google";
import Apple from "./login/continue/apple";

const Login = () => {
  return (
    <div >
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
          <h1 className="font-bold leading-10 tracking-tighter text-center text-lg mr-64 mt-4 text-white">Sign in</h1>
          <div className="mt-10 ml-8">
            <p className="inline text-white">New user? </p>
            <p className="inline text-mauve">Create an account</p>
          </div>
          <div className="ml-8 mt-10">
            <input
              type="text"
              className="bg-transparent border-b-[1px] border-input text-white w-11/12"
              placeholder="Email Adress"
            />
            <button className="bg-continue text-white p-[1px] px-4 rounded-2xl float-right mt-2 mr-5">Continue</button>
          </div>
          <div className="mt-16">
            <p className="text-white text-center">Or</p>
          </div>
          <div>
            <Google />
            <Facebook />
            <Apple />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
