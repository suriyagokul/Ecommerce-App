import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  // console.log(
  //   process.env.REACT_APP_UPLOAD_URL + item.attributes.img.data.attributes.url
  // );
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card flex flex-col gap-3 w-[200px] transition-all duration-500 ease-in">
        <div className="image w-full h-[300px] relative group">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img?.data?.attributes?.url // http://localhost:1337/uploads/pexels_noelle_otto_906002_d78231eae5.jpg
            }
            alt="mainImage"
            className="z-40 group-hover:z-0  rounded-lg w-[100%] h-[100%] object-cover absolute"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img2?.data?.attributes?.url
            }
            alt="secondImage"
            className="group-hover:z-40 absolute "
          />
        </div>
        <h2 className="text-xs mt-2 text-black font-semibold">
          {item.attributes?.title}
        </h2>
        <div className="flex">
          <span className="text-xs line-through text-gray-500 mr-4">
            ${item.oldPrice || item.attributes?.price + 20}
          </span>
          <span className="text-xs font-bold">${item.attributes?.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
