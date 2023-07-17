import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantDetails = useRestaurantMenu(resId);
    console.log(restaurantDetails);
    const restaurantInfo = restaurantDetails?.data?.cards[0]?.card?.card?.info;
    return ( 
        <div className="restaurant-menu  mx-auto my-0 w-2/4">
            <div className="restaurant-details text-center font-bold">
            <h1 className=" text-xl"> {restaurantInfo?.name} </h1>
             <h4>{restaurantInfo?.areaName} {restaurantInfo?.city} </h4>
            </div>
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