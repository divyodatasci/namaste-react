import { RES_LOGO_URL } from "../utils/constant";

const ItemList = ({category}) => {
    
    return (
        category.categoryMenuItems.map((menuItem)=>{
            console.log(menuItem);
            return (
            <div key={menuItem.id} >
                <div className=" p-2 text-md font-medium flex justify-between h-24 overflow-hidden"> 
                    <div className=" w-9/12">
                        <p>{menuItem.name}</p> 
                        <p>₹{menuItem.price / 100}</p>
                        <p className=" text-xs font-extralight">{menuItem.description}</p>
                    </div>
                    <div className=" w-2/12 h-6/6 overflow-hidden">
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