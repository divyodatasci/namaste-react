import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useCategoryWiseMenu from "../utils/useCategoryWiseMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantDetails = useRestaurantMenu(resId);
    console.log(restaurantDetails);
    const restaurantInfo = restaurantDetails?.data?.cards[0]?.card?.card?.info;
    const categories = useCategoryWiseMenu(restaurantDetails);
    const [showIndex, setShowIndex] = useState(null);
    const menuExpanded = (categoryNumber) => {
        setShowIndex(categoryNumber);
    }
    return ( 
        <div className="restaurant-menu  mx-auto my-0 w-2/4">
            <div className="restaurant-details text-center font-bold">
            <h1 className=" text-xl"> {restaurantInfo?.name} </h1>
             <h4>{restaurantInfo?.areaName} {restaurantInfo?.city} </h4>
            </div>
            <div>
            {categories.map((category,index) => {
               return <RestaurantCategory key= {category.categoryKey} 
               category={category} menuExpanded = {menuExpanded} index ={index} 
               showItems = {showIndex === index ? true : false }/>   
            })}
            </div>
        </div>);
}

export default RestaurantMenu;