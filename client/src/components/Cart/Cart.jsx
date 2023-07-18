import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../axiosInstance/makeRequest";
import "./Cart.css";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  const total = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51NUrvGSJXrgeqj0WdpoyjngTpm2Qo82IzoXYTnzjRU7NhGexCUrr7GGRhNenAyhSFy0r3RM72r8Bjw0mCCeMb6lt007Aocjv9O"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart w-[400px]">
      <h1 className="mb-4">Products in Your Cart</h1>
      {products.map((item) => (
        <div className="flex w-[100%] items-start gap-3 mb-3" key={item.id}>
          <img
            src={process.env.REACT_APP_UPLOAD_URL + item.img}
            alt=""
            className="h-20 w-[80px] rounded-md"
          />
          <div className="info leading-relaxed flex flex-col justify-center items-start">
            <h2 className="text-sm mb-3">{item.title}</h2>
            <p className="text-xs">{item.desc?.substring(0, 100)}</p>
            <p className="text-xs text-cyan-500 mt-3 mb-3">
              {item.quantity} * $ {item.price}
            </p>
          </div>
          <button>
            <DeleteOutlineIcon
              className="text-red-400 hover:text-red-500"
              onClick={() => dispatch(removeItem(item.id))}
            />
          </button>
        </div>
      ))}
      <div className="subtotal flex justify-between mb-2">
        <span>SUBTOTAL</span>
        <span>$ {total()}</span>
      </div>
      <div className="flex flex-col">
        <button
          className="bg-blue-500 mt-6 mb-5 text-white px-3 py-1 font-bold hover:bg-blue-600"
          onClick={handlePayment}
        >
          PROCEED TO CHECKOUT
        </button>
        <button
          className="text-red-500 hover:text-red-600"
          onClick={() => {
            dispatch(resetCart());
          }}
        >
          Reset Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
