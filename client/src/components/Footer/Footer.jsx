import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

export default function Footer() {
  return (
    <footer className="w-[100%] px-20">
      <div className="main flex justify-evenly gap-20 mb-10">
        <div className="flex flex-col gap-3 categories  hover:text-green-400">
          <span className="text-black">Categories</span>
          <div className="item ">
            <Link
              to="/products/1"
              className="text-sm  text-gray-500  hover:text-green-400"
            >
              Women
            </Link>
          </div>
          <div className="item">
            <Link
              to="/products/2"
              className="text-sm text-gray-500  hover:text-green-400"
            >
              Men
            </Link>
          </div>
          <div className="item">
            <Link
              to="/products/4"
              className="text-sm  text-gray-500 hover:text-green-400"
            >
              Shoes
            </Link>
          </div>
          <div className="item">
            <Link
              to="/products/5"
              className="text-sm text-gray-500  hover:text-green-400"
            >
              Accessories
            </Link>
          </div>
          <div className="item">
            <Link
              to="/products/6"
              className="text-sm  text-gray-500 hover:text-green-400"
            >
              New Arrivals
            </Link>
          </div>
        </div>
        <div className="links flex flex-col gap-3  ">
          <span className="text-black">Links</span>
          <div className="item">
            <Link
              to="/products/1"
              className="text-sm text-gray-500 hover:text-green-400"
            >
              FAQ
            </Link>
          </div>
          <div className="item">
            <Link
              to="/products/2"
              className="text-sm text-gray-500 hover:text-green-400"
            >
              Pages
            </Link>
          </div>
          <div className="item">
            <Link
              to="/products/4"
              className="text-sm text-gray-500 hover:text-green-400"
            >
              Stores
            </Link>
          </div>
          <div className="item">
            <Link
              to="/products/5"
              className="text-sm text-gray-500 hover:text-green-400"
            >
              Compare
            </Link>
          </div>
          <div className="item">
            <Link to="/products/6" className="text-sm hover:text-green-400">
              Cookies
            </Link>
          </div>
        </div>
        <div className="about  flex flex-col gap-3 text-gray-500">
          <span className="text-black">About</span>
          <div className="item">
            <p className="leading-loose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident aliquam eaque repudiandae ducimus porro veniam earum
              natus sed minus non.
            </p>
          </div>
        </div>
        <div className="contact flex flex-col gap-3 text-gray-500">
          <span className="text-black">Contact</span>
          <div className="item">
            <p className="leading-loose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident aliquam eaque repudiandae ducimus porro veniam earum
              natus sed minus non.
            </p>
          </div>
        </div>
      </div>
      <div className="copyrights flex justify-around items-center mb-20">
        <div className="flex items-center gap-4">
          <span className="text-cyan-500 font-bold text-xl">Shopify</span>
          <small>© Copyright 2023 All rights reserved</small>
        </div>
        <div>
          <img
            src="/img/payment.png"
            alt="payment image"
            className="w-60  object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
