import { useEffect, useState } from "react";
import { RESTAURANT_DATA } from "../utils/constant";
import RestaurantCardContainer from "./RestaurantCardContainer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(()=> {
        fetchData()
    }, []);
    async function fetchData() {
        let apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5683324&lng=88.5094512&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING");
        let resJson = await apiData.json();
        console.log(resJson.data.cards);
        setListOfRestaurants(resJson.data.cards);
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                   let newList = listOfRestaurants.filter((restaurant)=>{
                    return (restaurant.data.data.avgRating >= 4.0);
                   });
                   setListOfRestaurants(newList);
                }}> Top Rated Restaurants </button>
            </div>    

            <RestaurantCardContainer resData = {listOfRestaurants} />
            
        </div>
    );
}

export default Body;