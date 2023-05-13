import { useSelector } from "react-redux";
import { ITEM_IMG_CDN_URL } from "../constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="">
      <h1 className="">Cart Page</h1>
      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Cart</h3>
            <p className="menu-count">{cartItems?.length} ITEMS</p>
          </div>
          <div className="menu-items-list">
            {cartItems.map((item) => (
              <div className="menu-item" key={item.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item.name}</h3>
                  <p className="item-cost">
                    {item.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR"
                        }).format(item.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + item.imageId}
                      alt={item.name}
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

export default Cart;
