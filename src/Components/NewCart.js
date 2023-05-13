import { useDispatch, useSelector } from "react-redux";
import { ITEM_IMG_CDN_URL } from "../constants";
import Fooditems from "./FoodItems";
import { clearCart } from "../utils/CartSlice";

const NewCart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="m-2 text-center text-lg font-bold p-3">
          Cart Items - {cartItems.length}
        </h1>
        <button
          onClick={() => handleClearCart()}
          className="px-2  m-2 text-lg font-bold text-red-700 bg-slate-500 rounded-lg"
        >
          ✖ Clear Cart
        </button>
      </div>
      {cartItems.map((itemss) => (
        <Fooditems key={itemss.id} {...itemss} />
      ))}
    </div>
  );
};

export default NewCart;
