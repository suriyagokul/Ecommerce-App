import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";

export default function Products() {
  const params = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  console.log(params, maxPrice);

  return (
    <div className="flex px-[20px] py-[30px]">
      <div
        className="left leading-loose"
        style={{ flex: 1, position: "sticky", height: "100%", top: "50px" }}
      >
        <h1 className="font-bold">Product Categories</h1>
        <div>
          <input type="checkbox" id="shirts" className="cursor-pointer" />
          <label htmlFor="shirts">Shirts</label>
        </div>
        <div>
          <input type="checkbox" id="shoes" className="cursor-pointer" />
          <label htmlFor="shoes">Shoes</label>
        </div>
        <div>
          <input type="checkbox" id="coats" className="cursor-pointer" />
          <label htmlFor="coats">Coats</label>
        </div>
        <div className="filterItem">
          <h2 className="font-bold">Filter by price</h2>
          <div className="">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="cursor-pointer"
            />
            <span>1000</span>
          </div>
        </div>
        <div className="sortby">
          <h2 className="font-bold">Sort by</h2>
          <div className="inputRadio">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              className="cursor-pointer"
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputRadio">
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              className="cursor-pointer"
              onChange={() => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right" style={{ flex: 3 }}>
        <img
          className="catImg w-[100%] h-[300px] object-cover mb-[50px] rounded-lg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List categoryId={params} sort={sort} maxPrice={maxPrice} />
      </div>
    </div>
  );
}
