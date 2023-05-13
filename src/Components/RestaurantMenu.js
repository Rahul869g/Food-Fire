import { useParams } from "react-router-dom"; // import useParams for read id
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL
} from "../constants";
import { MenuShimmer } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, restaurantMenu] = useRestaurant(resId);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item.card.info));
  };

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines.join(", ")}</p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurant?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div>|</div>
            <div>{restaurant?.sla.slaString}</div>
            <div>|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">
              {restaurantMenu?.card?.itemCards?.length} ITEMS
            </p>
          </div>
          <div className="menu-items-list">
            {(restaurantMenu?.card?.itemCards).map((item) => (
              <div className="menu-item" key={item.card.info.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item.card.info.name}</h3>
                  <p className="item-cost">
                    {item.card.info.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR"
                        }).format(item.card.info.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item.card.info.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item.card.info.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + item.card.info.imageId}
                      alt={item.card.info.name}
                    />
                  )}
                  <button className="add-btn" onClick={() => addFoodItem(item)}>
                    {" "}
                    ADD +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
