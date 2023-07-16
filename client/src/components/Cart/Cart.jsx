import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Cart.css";

const Cart = () => {
  const data = [
    {
      id: 1,
      img1: "https://images.pexels.com/photos/9821918/pexels-photo-9821918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/9558787/pexels-photo-9558787.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: "$19",
      price: "$12",
    },
    // {
    //   id: 2,
    //   img1: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   img2: "https://images.pexels.com/photos/9558787/pexels-photo-9558787.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   title: "White Floral Lace",
    //   isNew: true,
    //   oldPrice: "$19",
    //   price: "$12",
    // },
  ];

  return (
    <div className="cart w-[400px]">
      <h1 className="mb-4">Products in Your Cart</h1>
      {data.map((item, index) => (
        <div className="flex w-[100%] items-start gap-3 mb-3">
          <img src={item.img1} alt="" className="h-20 rounded-md" />
          <div className="info leading-relaxed flex flex-col justify-center items-start">
            <h2 className="text-sm mb-3">{item.title}</h2>
            <p className="text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vel
              illum reprehenderit itaque, amet voluptate quae? Nemo doloribus
              dolores libero?
            </p>
            <p className="text-xs text-cyan-500 mt-3 mb-3">1 * $19.9</p>
          </div>
          <button>
            <DeleteOutlineIcon className="text-red-400 hover:text-red-500" />
          </button>
        </div>
      ))}
      <div className="subtotal flex justify-between mb-2">
        <span>SUBTOTAL</span>
        <span>$19.9</span>
      </div>
      <div className="flex flex-col">
        <button className="bg-blue-500 mt-6 mb-5 text-white px-3 py-1 font-bold hover:bg-blue-600">
          PROCEED TO CHECKOUT
        </button>
        <button className="text-red-500 hover:text-red-600">Reset Cart</button>
      </div>
    </div>
  );
};

export default Cart;
