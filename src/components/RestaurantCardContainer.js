import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { RESTAURANT_DATA } from "../utils/constant";

const RestaurantCardContainer = ({resData}) => {
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
    return (
        <div className='res-card-container flex flex-wrap justify-center'>
            {
                resData.map((restaurant)=> { 
                    return (restaurant.data.promoted ? <PromotedRestaurantCard key = {restaurant.data.id} resData = {restaurant}/> : <RestaurantCard key = {restaurant.data.id} resData = {restaurant} />)})
            }
        </div>
    )
} 

export default RestaurantCardContainer;