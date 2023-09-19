import { useDispatch } from "react-redux";
import { RES_LOGO_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({category}) => {
    const dispatch = useDispatch();
    const addHandler = (item) => {
        dispatch (addItem(item));
    }
    
    return (
        category.categoryMenuItems.map((menuItem)=>{
            console.log(menuItem);
            return (
            <div key={menuItem.id} >
                <div className=" p-2 text-md font-medium flex justify-between h-24 overflow-hidden"> 
                    <div className=" w-9/12">
                        <p>{menuItem.name}</p> 
                        <p>₹{(menuItem.price ? menuItem.price: menuItem.defaultPrice) / 100}</p>
                        <p className=" text-xs font-extralight">{menuItem.description}</p>
                    </div>
                    <div className=" w-2/12 h-6/6 overflow-hidden relative">
                        <button className=" w-1/2 h-1/12 bg-black text-white 
                        rounded-sm absolute cursor-pointer" onClick={ () => addHandler(menuItem)}> Add </button>
                        <img src= {menuItem.imageId && RES_LOGO_URL + menuItem.imageId} className=" w-6/6 h-6/6"></img>
                    </div>
                </div>
                <hr className="m-2 "></hr>
            </div>    
            )
        })
    );
        
}

export default ItemList;