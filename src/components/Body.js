import { useState } from "react";
import { RESTAURANT_DATA } from "../utils/constant";
import RestaurantCardContainer from "./RestaurantCardContainer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(RESTAURANT_DATA);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                   let newList = listOfRestaurants.filter((restaurant)=>{
                    return (restaurant.info.avgRating >= 4.0);
                   });
                   setListOfRestaurants(newList);
                }}> Top Rated Restaurants </button>
            </div>    

            <RestaurantCardContainer resData = {listOfRestaurants} />
            
        </div>
    );
}

export default Body;