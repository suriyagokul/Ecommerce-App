import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import useFetch from "../../hooks/useFetch";
import { addToCart } from "../../redux/cartReducer";
import Cart from "../../components/Cart/Cart";
import "./Product.css";

export default function Product() {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img");
  const [noOfItems, setNoOFItems] = useState(1);
  const [cartSelected, setCartSelected] = useState(false);

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="p-10 flex transition duration-500">
      <Toaster position="top-center" reverseOrder={false} />
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left flex " style={{ flex: 2 }}>
            <div className="smallimages mr-10 cursor-pointer">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt="img1"
                className="w-28 h-28 object-cover object-center mb-3 rounded-lg"
                onClick={() => setSelectedImage("img")}
              />

              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt="img2"
                className="mainImg w-28 h-28 object-cover"
                onClick={() => setSelectedImage("img2")}
              />
            </div>
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                data?.attributes[selectedImage]?.data?.attributes?.url
              }
              alt="img1"
              className="max-w-[400px] h-[400px] object-cover object-center mb-3 rounded-lg cursor-pointer"
            />
          </div>
          <div className="right leading-loose" style={{ flex: 2 }}>
            <h2 className="text-3xl font-bold">{data?.attributes?.title}</h2>
            <span className="text-cyan-500">${data?.attributes?.price}</span>
            <p className="leading-medium text-sm">{data?.attributes?.desc}</p>
            <div className="noOfItems flex items-center mt-3">
              <span
                className="bg-gray-200 cursor-pointer hover:scale-105 rounded-md px-3 py-1 mr-3"
                onClick={() =>
                  setNoOFItems((prev) => (prev !== 0 ? prev - 1 : 0))
                }
              >
                {" "}
                -{" "}
              </span>
              <span className="w-6">{noOfItems}</span>
              <span
                className="bg-gray-200 cursor-pointer hover:scale-105 rounded-md px-3 py-1 mr-3 "
                onClick={() => setNoOFItems((prev) => prev + 1)}
              >
                +
              </span>
            </div>
            <button
              className="bg-blue-500 mt-6 mb-5 text-white px-10 hover:bg-blue-600"
              onClick={() => {
                // noOfItems &&
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    img: data.attributes.img.data.attributes.url,
                    price: data.attributes.price,
                    quantity: noOfItems,
                  })
                );
                toast.success("Product added to cart!");
              }}
            >
              {" "}
              <ShoppingCartOutlinedIcon className="" />
              Add To Cart
            </button>
            <div className="wishlist_compare flex gap-5 mb-5">
              <div className="wishlist text-cyan-500 cursor-pointer">
                <FavoriteBorderOutlinedIcon className="mr-2" />
                <span>Add To Wishlist</span>
              </div>
              <div className="compare flex text-cyan-500 cursor-pointer">
                <img
                  width={20}
                  height={20}
                  src="/img/compare.png"
                  alt="external-compare-basic-ui-elements-2.3-sbts2018-outline-sbts2018"
                  className="mr-2 text-cyan-500 object-contain"
                />

                <span>Add To Compare</span>
              </div>
            </div>
            <div className="info flex flex-col leading-relaxed text-gray-500 text-xs mb-3">
              <span>Vendor: Polo</span>
              <span>Product Type: Shirt</span>
              <span>Tag: Shirt, Men, Polo</span>
            </div>
            <hr />
            <div className="desc mt-3 mb-2 text-xs text-gray-500">
              <span>Description</span>
              <hr />
              <span>Additional Information</span>
              <hr />
              <span>FAQ</span>
              <hr />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
