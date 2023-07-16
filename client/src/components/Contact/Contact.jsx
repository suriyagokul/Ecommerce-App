import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className="contact mb-20 p-4 bg-blue-500">
      <div className="wrapper flex items-center justify-around">
        <span className="text-white font-medium">BE IN TOUCH WITH US:</span>
        <div className="email">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-2 py-1 rounded-md drop-shadow-md outline-none"
          />
          <button className="bg-black text-white px-2 py-1 font-bold rounded-md hover:bg-slate-800">
            JOIN US
          </button>
        </div>
        <div className="icons flex text-white">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
