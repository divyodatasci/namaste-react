import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantDetails = useRestaurantMenu(resId);
    // console.log(restaurantDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards);
    return ( 
        <div className="restaurant-details">
             <h1> {restaurantDetails?.data?.cards[0]?.card?.card?.info?.name} </h1>
             <h4>{restaurantDetails?.data?.cards[0]?.card?.card?.info?.areaName} {restaurantDetails?.data?.cards[0]?.card?.card?.info?.city} </h4>
              
             {
                
                restaurantDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item)=> {
                    return <p key = {item.card.info.id}>
                        {item.card.info.name} -- Rs. {item.card.info.price / 100}
                    </p>
                })
             }
        </div>);
}

export default RestaurantMenu;