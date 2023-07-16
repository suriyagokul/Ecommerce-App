import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./FeaturedProducts.css";

export const data = [
  {
    id: 1,
    img1: "https://images.pexels.com/photos/9821918/pexels-photo-9821918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/9558787/pexels-photo-9558787.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Long Sleeve Graphic T-shirt",
    isNew: true,
    oldPrice: "$19",
    price: "$12",
  },
  {
    id: 2,
    img1: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=600",
    img2: "https://images.pexels.com/photos/9558787/pexels-photo-9558787.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "White Floral Lace",
    isNew: true,
    oldPrice: "$19",
    price: "$12",
  },
  {
    id: 3,
    img1: "https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=600",
    img2: "https://images.pexels.com/photos/9558787/pexels-photo-9558787.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Striped Black & White Shirt",
    isNew: true,
    oldPrice: "$19",
    price: "$12",
  },
  {
    id: 4,
    img1: "https://images.pexels.com/photos/2092474/pexels-photo-2092474.jpeg?auto=compress&cs=tinysrgb&w=600",
    img2: "https://images.pexels.com/photos/9558787/pexels-photo-9558787.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "White Sleveless",
    isNew: true,
    oldPrice: "$19",
    price: "$12",
  },
];

const FeaturedProducts = ({ type }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await axios.get(
          process.env.REACT_APP_API_URL + "/products",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        console.log(productData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="featuredProducts mt-[50px] mb-[100px] mx-[200px]">
      <div
        className="top flex items-center mb-[50px]"
        style={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <h1 className="product_type capitalize">{type} Products</h1>
        <p className="para text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          laboriosam quidem corrupti sed perferendis deserunt dolore
          consequatur! Autem, praesentium eveniet.
        </p>
      </div>
      <div className="bottom flex gap-[50px] justify-center">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
