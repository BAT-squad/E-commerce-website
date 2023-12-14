import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
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
          <Link
            to="/"
            className="hidden sm:inline text-white hover:underline"
          >
            FAQ
          </Link>
          <Link to="/basket">
            <FaCartShopping className="text-white" />
          </Link>
          <Link to="/profile">
            <img
              className="rounded-full h-7 w-7 object-cover"
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
              alt="profile"
            />
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
