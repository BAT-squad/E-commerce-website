import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Header = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser);
  return (
    <header className="bg-transparent">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-violet-700 text-sm sm:text-xl flex flex-wrap cursor-pointer">
          .SHOP
        </h1>
        <form className="bg-transparent border  rounded-full p-2 flex items-center">
          <input
            type="text"
            placeholder="Search items, Fashion Collections and users"
            className="bg-transparent text-white focus:outline-none w-30 sm:w-64 "
          />
          <button>
            <FaSearch className="text-white" />
          </button>
        </form>
        <ul className="flex gap-7 items-center">
          <Link to="/" className="hidden sm:inline text-white hover:underline">
            Home
          </Link>
          <Link
            to="/all-products"
            className="hidden sm:inline text-white hover:underline"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="hidden sm:inline text-white hover:underline"
          >
            About
          </Link>
          <Link
            to="/admin"
            className="hidden sm:inline text-white hover:underline"
          >
            Dashboard
          </Link>
          <Link to="/" className="hidden sm:inline text-white hover:underline">
            FAQ
          </Link>
          <Link to="/basket">
            <FaCartShopping className="text-white" />
          </Link>
          <li>
            {currentUser ? (
              <div className="flex gap-4 items-center">
                <RiLogoutBoxRLine
                onClick={()=>{
                  localStorage.clear()
                  navigate('/')
                }}
                className="text-white h-9 cursor-pointer" />
                <img
                  onClick={() => {
                    navigate("/profile");
                  }}
                  className="rounded-full h-7 w-7 object-cover"
                  src={currentUser.profilePicture}
                  alt="profile"
                />
              </div>
            ) : (
              <p
                onClick={() => {
                  navigate("/login");
                }}
                className="ml-4 text-violet-400 font-semibold cursor-pointer hover:underline"
              >
                Sign In
              </p>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
