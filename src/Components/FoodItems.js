import { useParams } from "react-router-dom"; // import useParams for read id
import { ITEM_IMG_CDN_URL } from "../constants";
import { MenuShimmer } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem, removeItem } from "../utils/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const Fooditems = ({ name, price, description, imageId, id }) => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  // const [restaurant, restaurantMenu] = useRestaurant(resId);
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  const addFoodItem = (item) => {
    dispatch(addItem(item.card.info));
  };
  const removeFoodItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="restaurant-menu-content">
      <div className="menu-items-container">
        <div className="menu-items-list">
          <div className="menu-item" key={id}>
            <div className="menu-item-details">
              <h3 className="item-title">{name}</h3>
              <p className="item-cost">
                {price > 0
                  ? new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR"
                    }).format(price / 100)
                  : " "}
              </p>
              <p className="item-desc">{description}</p>
            </div>
            <div className="menu-img-wrapper">
              {imageId && (
                <img
                  className="menu-item-img"
                  src={ITEM_IMG_CDN_URL + imageId}
                  alt={name}
                />
              )}
              <div className="flex space-x-4 mt-2">
                <button
                  className=" bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => removeFoodItem(id)}
                >
                  -
                </button>
                <button
                  className=" bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => addFoodItem(item)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fooditems;
