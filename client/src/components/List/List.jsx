import React from "react";
import Card from "../Card/Card";

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

const List = () => {
  return (
    <div className="flex flex-wrap gap-10 mb-[40px]">
      {data.map((item, index) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
