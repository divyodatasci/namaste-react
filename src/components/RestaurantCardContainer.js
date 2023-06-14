import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_DATA } from "../utils/constant";

const RestaurantCardContainer = ({resData}) => {
    return (
        <div className='res-card-container'>
            {
                resData.map((restaurant)=> <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>)
            }
        </div>
    )
} 

export default RestaurantCardContainer;