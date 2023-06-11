import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_DATA, restaurantData } from "../utils/constant";

const RestaurantCardContainer = () => {
    return (
        <div className='res-card-container'>
            {
                RESTAURANT_DATA.map((restaurant)=> <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>)
            }
        </div>
    )
} 

export default RestaurantCardContainer;