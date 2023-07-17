import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ categoryId, maxPrice, sort, subCats }) => {
  const subcategoriesFilter = subCats
    .map((subcategory) => `&[filters][subcategories][id][$eq]=${subcategory}`)
    .join("");

  const sortParam = sort ? `&sort=price:${sort}` : "";

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId}${subcategoriesFilter}&[filters][price][$lte]=${maxPrice}${sortParam}`
  );

  console.log(subcategoriesFilter); // &[filters][subcategories][id][$eq]=3&[filters][subcategories][id][$eq]=1
  // console.log(data);

  return (
    <div className="flex flex-wrap gap-10 mb-[40px]">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Something went wrong</p>
      ) : data && data.length > 0 ? (
        data.map((item) => <Card item={item} key={item.id} />)
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default List;
