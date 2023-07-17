import { useState, useEffect } from "react";
import { RES_MENU_API_URL } from "../utils/constant";

const useRestaurantMenu = (resId) => {
    const [restaurantDetails, setRestaurantDetails] = useState("");
    useEffect(() => {
        fetchMenu();
    }, [])
    const fetchMenu = async function(){
        let menuApiData = await fetch(RES_MENU_API_URL+ resId);
        let menuJson = await menuApiData.json();
        setRestaurantDetails(menuJson);
    }
    return restaurantDetails;
}

export default useRestaurantMenu;