import { swiggy_menu_api_URL } from "../constants";
import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in res state variable
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resId);
      const json = await response.json();
      setRestaurant(json.data.cards[0].card.card.info);
      setRestaurantMenu(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      );
    } catch (error) {
      console.log(error);
    }
  }
  return [restaurant, restaurantMenu];
};

export default useRestaurant;
