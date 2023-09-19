import { useDispatch, useSelector } from "react-redux";
import { RES_LOGO_URL } from "../utils/constant";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="w-1/2 mx-auto my-4">
            <h1 className=" font-bold text-center my-4 text-lg"> Cart </h1>
            <button className=" mx-auto block bg-black text-white text-sm rounded-lg p-2" onClick={handleClearCart}>Clear Cart</button>
            {
                cartItems.map((menuItem)=>{
                console.log(menuItem);
                return (
                <div key={menuItem.id} >
                    <div className=" p-2 text-md font-medium flex justify-between h-24 overflow-hidden"> 
                        <div className=" w-9/12 my-2¬">
                            <p>{menuItem.name}</p> 
                            <p>₹{(menuItem.price ? menuItem.price: menuItem.defaultPrice) / 100}</p>
                            <p className=" text-xs font-extralight">{menuItem.description}</p>
                        </div>
                        <div className=" w-2/12 h-6/6 overflow-hidden relative">
                            <button className=" w-1/2 h-1/12 bg-black text-white 
                            rounded-sm absolute cursor-pointer" onClick={ () => addHandler(menuItem.name)}> Add </button>
                            <img src= {menuItem.imageId && RES_LOGO_URL + menuItem.imageId} className=" w-6/6 h-6/6"></img>
                        </div>
                    </div>
                    <hr className="m-2 "></hr>
                </div>    
                )
            })}
        </div>
    );
    
}

export default Cart;