import React, { useState } from "react";
import image from "./login/anime.png";
import { FaEyeSlash } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlePost = () => {
    let username = firstName + LastName;
    let date = year + "/" + month + "/" + day;
    localStorage.setItem("userName", username);
    localStorage.setItem("birthday", date);
    console.log(username, date);
    axios
      .post("http://localhost:5001/api/user/createUser", {
        email,
        userName: username,
        password,
        birthday: date,
      })
      .then((response) => {
        handleSignUp();
        console.log(response);
      });
    navigate("/login");
  };

  return (
    <div>
      <p className="text-transparent">.</p>
      <div className="w-[90%] h-[550px] absolute top-[12%] left-[10%] iphone:left-[-150px]">
        <div className=" iphone:blockhidden">
          <img
            src={image}
            alt=""
            className="w-[20%] h-[400px] absolute left-[5%]"
          />
          <p className=" iphone:hidden absolute font-sans font-semibold text-xl text-center w-[30%] h-[39px] top-[420px]  text-white">
            Explore the world of meta fashion
          </p>
        </div>
        <div className=" iphone:left-[60%] w-[30%] h-[500px] absolute left-[40%] rounded-lg bg-login sm:float-left iphone:w-[280px] ">
          <h1 className="font-bold leading-10 tracking-tighter text-center text-lg mr-64 mt-4 text-white iphone:w-20">
            Sign Up
          </h1>

          <div className="ml-8 mt-10">
            <input
              type="text"
              className="bg-transparent border-b-[1px] border-input placeholder:text-white text-white w-11/12"
              placeholder="Email Adress"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-12">
              <input
                type="text"
                className="bg-transparent border-b-[1px] border-input placeholder:text-white text-white w-5/12"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                className="bg-transparent border-b-[1px] border-input ml-4 placeholder:text-white text-white w-[46%]"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className=" inline">
              <input
                type={showPassword ? "text" : "password"}
                className="bg-transparent border-b-[1px] absolute inline border-input placeholder:text-white mt-12 text-white w-10/12"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute top-[15.5rem] left-[88%] text-white"
              />
            </div>
          </div>
          <p className=" absolute top-80 text-white left-[10%]">
            Date Of Birth
          </p>

          <div className=" flex absolute top-[370px]">
            <div className="container mx-auto p-4 inline">
              <select
                className="bg-transparent border-b-[1px]    inline text-placeholder border-input  p-2 w-12/12 iphone:w-9/12"
                defaultValue=""
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="0" className="text-white">
                  Month
                </option>
                <option value="1" className=" text-black">
                  January
                </option>
                <option value="2" className=" text-black">
                  February
                </option>
                <option value="3" className=" text-black">
                  March
                </option>
                <option value="4" className=" text-black">
                  April
                </option>
                <option value="5" className=" text-black">
                  May
                </option>
                <option value="6" className=" text-black">
                  June
                </option>
                <option value="7" className=" text-black">
                  July
                </option>
                <option value="8" className=" text-black">
                  August
                </option>
                <option value="9" className=" text-black">
                  September
                </option>
                <option value="10" className=" text-black">
                  October
                </option>
                <option value="11" className=" text-black">
                  November
                </option>
                <option value="12" className=" text-black">
                  December
                </option>
              </select>
            </div>
            <input
              type="text"
              className=" iphone:ml-[75%] top-[-18px] ml-[103%] bg-transparent border-b-[1px] absolute inline border-input mt-12 text-white w-7/12"
              placeholder="Day"
              onChange={(e) => setDay(e.target.value)}
            />
            <input
              type="text"
              className=" iphone:w-5/12 iphone:ml-[140%] top-[-18px] ml-[175%]   w-7/12 bg-transparent border-b-[1px] absolute inline border-input text-white mt-12 "
              placeholder="Year"
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <button
            onClick={handlePost}
            className="bg-continue text-white p-[1px] px-4 rounded-2xl float-right mt-64 mr-5 "
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
