import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_DATA } from "../utils/constant";

const RestaurantCardContainer = ({resData}) => {
    return (
        <div className='res-card-container flex flex-wrap justify-center'>
            {
                resData.map((restaurant)=> { 
                    return <RestaurantCard key = {restaurant.data.id} resData = {restaurant} />})
            }
        </div>
    )
} 

export default RestaurantCardContainer;