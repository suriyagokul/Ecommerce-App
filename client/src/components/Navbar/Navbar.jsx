import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import "./Navbar.css";
import "../../index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const openRef = useRef(null);

  const products = useSelector((state) => state.cart.products);

  // close cart component when we click outside of it
  useEffect(() => {
    document.addEventListener(
      "click",
      (e) => {
        if (!openRef.current.contains(e.target)) {
          setOpen(false);
        }
      },
      true
    );
  }, []);

  return (
    <div className="h-[80px]  p-5" ref={openRef}>
      {" "}
      {/* giving ref to navbar.. so that when we click anywhere in the page expect navbar it will close cart component */}
      <div className="wrapper flex items-center justify-between">
        <div className="left flex">
          <div className="item flex">
            <img src="/img/en.png" alt="" className="w-5 h-5" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item flex">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="hidden lg:flex item">
            <Link to="/products/1" className="link">
              Women
            </Link>
          </div>
          <div className="hidden lg:flex item">
            <Link to="/products/2" className="link">
              Men
            </Link>
          </div>
          <div className="hidden lg:flex item">
            <Link to="/products/3" className="link">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link to="/" className="title text-cyan-500">
            Shopify
          </Link>
        </div>
        <div className="hidden lg:flex right flex">
          <div className="item">
            <Link to="/" className="link">
              Home Page
            </Link>
          </div>
          <div className="item">
            <Link to="/" className="link">
              About
            </Link>
          </div>
          <div className="item">
            <Link to="/" className="link">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link to="/" className="link">
              Stores
            </Link>
          </div>
          <div className="icons flex items-center ">
            <SearchOutlinedIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div
              className="cartIcon relative flex items-center justify-center"
              onClick={() => setOpen(!open)}
            >
              {open && <Cart />}
              <ShoppingCartOutlinedIcon />
              <span className="bg-sky-500 rounded-lg px-1 absolute top-[-10px] right-[-10px] text-white">
                {products?.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
