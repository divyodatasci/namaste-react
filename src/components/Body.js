import { useEffect, useState } from "react";
import { RESTAURANT_DATA_API_URL } from "../utils/constant";
import RestaurantCardContainer from "./RestaurantCardContainer";
import Shimmer from "./Shimmer";
import Filter from "./Filter";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(()=> {
        fetchData()
    }, []);
    async function fetchData() {
        let apiData = await fetch(RESTAURANT_DATA_API_URL);
        let resJson = await apiData.json();
        setListOfRestaurants(resJson.data.cards[2].data.data.cards);
    }

    return (
        <div className="body">
            {  //Conditional Rendering
                (listOfRestaurants.length === 0) ? (<Shimmer />) : (<>
                    <Filter resData = {listOfRestaurants} setRes = {setListOfRestaurants} />
                    <RestaurantCardContainer resData = {listOfRestaurants} />
                </>)
            }
        </div>
    )
}

export default Body;