import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./Product.css";

export default function Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [noOfItems, setNoOFItems] = useState(0);

  const images = [
    "https://img.freepik.com/free-photo/portrait-goodlooking-attractive-stylish-bearded-man-brown_285396-4606.jpg?size=626&ext=jpg&ga=GA1.2.659751505.1689488756&semt=ais",
    "https://img.freepik.com/premium-photo/young-man-black_58409-17808.jpg?size=626&ext=jpg&ga=GA1.1.659751505.1689488756&semt=ais",
  ];

  return (
    <div className="p-10 flex transition duration-500">
      <div className="left flex " style={{ flex: 2 }}>
        <div className="smallimages mr-10 cursor-pointer">
          <img
            src={images[0]}
            alt="img1"
            className="w-28 h-28 object-cover object-center mb-3 rounded-lg"
            onClick={() => setSelectedImage(0)}
          />

          <img
            src={images[1]}
            alt="img2"
            className="mainImg w-28 h-28 object-cover"
            onClick={() => setSelectedImage(1)}
          />
        </div>
        <img
          src={images[selectedImage]}
          alt="img1"
          className="max-w-[400px] h-[400px] object-cover object-center mb-3 rounded-lg cursor-pointer"
        />
      </div>
      <div className="right leading-loose" style={{ flex: 2 }}>
        <h2 className="text-3xl font-bold">Title</h2>
        <span className="text-cyan-500">$19.9</span>
        <p className="leading-medium text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis
          rem culpa sed distinctio nesciunt ullam labore aliquid. Aspernatur,
          magnam!
        </p>
        <div className="noOfItems flex items-center mt-3">
          <span
            className="bg-gray-200 cursor-pointer hover:scale-105 rounded-md px-3 py-1 mr-3"
            onClick={() => setNoOFItems((prev) => (prev !== 0 ? prev - 1 : 0))}
          >
            {" "}
            -{" "}
          </span>
          <span className="w-6">{noOfItems}</span>
          <span
            className="bg-gray-200 cursor-pointer hover:scale-105 rounded-md px-3 py-1 mr-3 "
            onClick={() => setNoOFItems((prev) => prev + 1)}
          >
            +
          </span>
        </div>
        <button className="bg-blue-500 mt-6 mb-5 text-white px-10 hover:bg-blue-600">
          <ShoppingCartOutlinedIcon className="" />
          Add To Cart
        </button>
        <div className="wishlist_compare flex gap-5 mb-5">
          <div className="wishlist text-cyan-500 cursor-pointer">
            <FavoriteBorderOutlinedIcon className="mr-2" />
            <span>Add To Wishlist</span>
          </div>
          <div className="compare flex text-cyan-500 cursor-pointer">
            <img
              width={20}
              height={20}
              src="/img/compare.png"
              alt="external-compare-basic-ui-elements-2.3-sbts2018-outline-sbts2018"
              className="mr-2 text-cyan-500 object-contain"
            />

            <span>Add To Compare</span>
          </div>
        </div>
        <div className="info flex flex-col leading-relaxed text-gray-500 text-xs mb-3">
          <span>Vendor: Polo</span>
          <span>Product Type: Shirt</span>
          <span>Tag: Shirt, Men, Polo</span>
        </div>
        <hr />
        <div className="desc mt-3 mb-2 text-xs text-gray-500">
          <span>Description</span>
          <hr />
          <span>Additional Information</span>
          <hr />
          <span>FAQ</span>
          <hr />
        </div>
      </div>
    </div>
  );
}
