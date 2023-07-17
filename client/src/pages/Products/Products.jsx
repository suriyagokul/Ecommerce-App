import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";

export default function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  const [selectedSubCategories, SetSelectedSubCategories] = useState([]);

  const { data, loading, error } = useFetch(
    `/subcategories?[filters][categories][id][$eq]=${catId}`
  );

  // console.log(data, catId, maxPrice);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    SetSelectedSubCategories((prevSelectedSubCategories) => {
      if (
        isChecked &&
        !prevSelectedSubCategories.includes(value) &&
        prevSelectedSubCategories.length < 2
      ) {
        return [...prevSelectedSubCategories, value];
      } else if (!isChecked && prevSelectedSubCategories.includes(value)) {
        return prevSelectedSubCategories.filter((item) => item !== value);
      } else {
        return prevSelectedSubCategories;
      }
    });
  };

  return (
    <div className="flex px-[20px] py-[30px]">
      <div
        className="left leading-loose"
        style={{ flex: 1, position: "sticky", height: "100%", top: "50px" }}
      >
        <h1 className="font-bold">Product Categories</h1>
        {data?.map((item) => (
          <div key={item.id}>
            <label>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                className="cursor-pointer"
                onChange={handleChange}
              />{" "}
              {item.attributes?.title}
            </label>
            {/* <label htmlFor="subcat"></label> */}
          </div>
        ))}
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
            <span>{maxPrice}</span>
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
              checked
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
        <List
          categoryId={catId}
          sort={sort}
          maxPrice={maxPrice}
          subCats={selectedSubCategories}
        />
      </div>
    </div>
  );
}
