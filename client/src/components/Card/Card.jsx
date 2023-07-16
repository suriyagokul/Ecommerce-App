import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card flex flex-col gap-3 w-[200px]">
        <div className="image w-full h-[300px] relative group">
          <img
            src={item.img1}
            alt="mainImage"
            className="z-40 group-hover:z-0  rounded-lg w-[100%] h-[100%] object-cover absolute "
          />
          <img
            src={item.img2}
            alt="secondImage"
            className="group-hover:z-40 absolute "
          />
        </div>
        <h2 className="text-xs mt-2 text-black font-semibold">{item.title}</h2>
        <div className="flex justify-around">
          <span className="text-xs line-through text-gray-500">
            {item.oldPrice}
          </span>
          <span className="text-xs font-bold">{item.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
