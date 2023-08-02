
import ItemList from "./ItemList";

const RestaurantCategory = ({category,index, menuExpanded, showItems}) => {

    const clickHandler = () => {
       showItems ? menuExpanded(null) : menuExpanded(index);
    }
    return (
        <div className="  p-4 m-4 shadow-md" key = {category.categoryTitle}>
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