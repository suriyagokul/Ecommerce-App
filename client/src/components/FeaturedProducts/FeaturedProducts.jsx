import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import "./FeaturedProducts.css";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  );

  console.log(data);
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
        {error
          ? "Something Went Wrong"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
