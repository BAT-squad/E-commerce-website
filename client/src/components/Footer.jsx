import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate("/admin");
  };

  return (
    <footer className=" py-6 bg-opacity-50">
      {/* <hr/> */}
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
          <Link to="/" className="text-xl font-bold mb-2 text-white">
            B.A.T-squad
          </Link>
          <h2 className="text-gray-600">Contact</h2>
          <h3 className="text-gray-600">+21624797498</h3>
          <h2
            onClick={handleAdminClick}
            className="cursor-pointer text-gray-600"
          >
            Admin
          </h2>
          <address className="text-gray-600">
            RBK sousse
            <br />
            <a className="text-blue-400" href="mailto:">
              Email Us
            </a>
          </address>
        </div>
        <div>
            


        </div>
        <ul className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 flex flex-wrap gap-10">
          <li className="mb-2 w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-lg font-bold mb-1">
              <Link to="/about" className="text-white">
                About
              </Link>
            </h2>
            <ul className="text-gray-600">
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Resource</a>
              </li>
              <li>
                <a href="#">Term & Condition</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </li>

          <li className="mb-2 w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-lg text-white font-bold mb-1 ">Company</h2>
            <ul className="text-gray-600">
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Partner With Us</a>
              </li>
              <li>
                <a href="#">Privacy & Policy</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
            </ul>
          </li>

          <li className="w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-lg text-white font-bold mb-1">Legal</h2>
            <ul className="text-gray-600">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </li>
        </ul>


        <div className="w-full lg:w-1/4 text-gray-600">
          <p className="hidden lg:block">&copy; 2023 All rights reserved.</p>
          <div className="mt-2">
            <p>
              Made by{" "}
              <span className="text-white-500">
                ♥ Wael Bilel Amine & khalil
              </span>
              <div className="flex gap-6 mt-6">

              <FaYoutube  className="w-10 h-8"/>
              <FaDiscord className="w-10 h-8" />
              <FaInstagram className="w-10 h-8"/>
              </div>
            </p>
          </div>
        </div>
      </div>
      <hr className="mx-[5rem] mt-10" />
    </footer>
  );
};

export default Footer;
