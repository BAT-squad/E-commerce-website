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
            src="https://s3-alpha-sig.figma.com/img/a59c/1e4a/905494d13b92596161da408b21648aa6?Expires=1703462400&Signature=ph1rrOffokpkaiR4HZ8Oto0UR8ExmYlJNwE~n8GUBRj-dY0aM872pO9HOO4OCQnL4pjzj7-RoUDXKjGa7hWNRtLRnl~inYgsjE3UixIJ0E4civNZdYCfEJVVfvQj7Z~mQsUjNH-PPlJfmaNKrQpUdGbqpbn9uUbbIRsTmaQ9HpeoOSOUyUagyWLHVO4IQroHJYpaK5NslbdGnQ8M734dDOkkR3PMRlhLvDaRQXMr311xZlau86vMV2sGUbDz~1~41C~32b0fi-a~OfsdC0UhuhoZH8ZR4xRsUElxBAQI7gmQ1fJYzPJGQ4FWHm6HgwgZRgrIGUWW2VRxT5OSIW6-CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="w-[25%] h-[400px] absolute left-[5%]"
          />
          <p className="absolute font-sans font-semibold text-xl text-center w-[30%] h-[39px] top-[420px] left-[5%] text-white">
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
