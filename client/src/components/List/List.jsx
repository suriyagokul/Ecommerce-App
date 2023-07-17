import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ categoryId, maxPrice, sort, subCats }) => {
  console.log(JSON.stringify(subCats));

  const subcategoriesFilter = subCats
    .map((subcategory) => `&[filters][subcategories][id][$eq]=${subcategory}`)
    .join("");

  const sortParam = sort ? `&sort=price:${sort}` : "";

  console.log(subcategoriesFilter); // &[filters][subcategories][id][$eq]=3&[filters][subcategories][id][$eq]=1

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId}${subcategoriesFilter}&[filters][price][$lte]=${maxPrice}${sortParam}`
  );

  // console.log(data);

  return (
    <div className="flex flex-wrap gap-10 mb-[40px]">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
      {error && "Something Went Wrong"}
    </div>
  );
};
export default List;
