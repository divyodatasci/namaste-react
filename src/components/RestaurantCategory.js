import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({category}) => {

    const [showItems, setShowItems] = useState(false) 
    const clickHandler = () => {
        setShowItems(!showItems);
    }
    return (
        <div className=" p-4 m-4 shadow-md">
            <div className=" flex justify-between cursor-pointer" onClick={clickHandler}>
                <span className=" text-lg font-bold">{category.categoryTitle} ({category.categoryMenuItems.length})</span>
                <span className=" " > 
                    {showItems ? <span> ⬆️ </span>: <span> ⬇️ </span> }
                </span>
            </div>
            {showItems && <ItemList category= {category}/>}
            
         </div>);
}

export default RestaurantCategory;