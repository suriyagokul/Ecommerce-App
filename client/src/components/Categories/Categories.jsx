import React from "react";
import { Link } from "react-router-dom";

export const data = [
  {
    id: 1,
    img1: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Long Sleeve Graphic T-shirt",
    isNew: true,
    oldPrice: "$19",
    price: "$12",
    category: "Men",
  },
  {
    id: 2,
    img1: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "White Floral Lace",
    isNew: true,
    oldPrice: "$19",
    price: "$12",
    category: "New Season",
  },
  {
    id: 3,
    img1: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "White Sleveless",
    isNew: true,
    oldPrice: "$19",
    price: "$12",
    category: "Sale",
  },

  {
    id: 4,
    img1: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "White Sleveless",
    isNew: true,
    oldPrice: "$19",
    price: "$12",
    category: "Accessories",
  },
  {
    id: 5,
    img1: "https://images.pexels.com/photos/17500761/pexels-photo-17500761/free-photo-of-young-woman-in-red-beret-and-sunglasses-buttoning-her-black-pea-coat.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "White Sleveless",
    isNew: true,
    oldPrice: "$19",
    price: "$12",
    category: "Women",
  },
  {
    id: 6,
    img1: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "White Sleveless",
    isNew: true,
    oldPrice: "$19",
    price: "$12",
    category: "SweatShirt",
  },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-5 px-20">
      {data.map((item, index) => (
        <div
          className={`${index === 1 ? "row-span-2 col-span-1" : ""} ${
            index === 5 ? "col-span-2 w-[100%] object-contain" : ""
          } relative cursor-pointer`}
          key={item.id}
        >
          <Link to={`/products/${item.id}`}>
            <img
              src={item.img1}
              alt=""
              className={`${
                index !== 1 ? "h-[272px]" : "h-full"
              } w-full rounded-lg `}
            />
            <p className="absolute bottom-3 left-4 text-white">
              {item.category}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
