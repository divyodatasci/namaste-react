import { RES_LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const RestaurantCard = ({resData}) => {
    const {name, cuisines, avgRating, cloudinaryImageId, id} = resData?.data;
    const cusinesString = cuisines.join(', ');
    let res_id = `res_${id}`;
    return (
        <div className='res-card m-4 p-4 w-[350px] rounded-lg bg-orange-100 hover:bg-orange-200 flex items-center' id = {res_id} >
            <Link to={"/restaurants/"+id} className=" my-0 mx-auto">
                <img className="res-logo w-96 h-56 rounded-lg" src={RES_LOGO_URL + cloudinaryImageId}></img>
                <h1 className=" font-bold py-4 text-lg"> {name}</h1>
                <h2>{cusinesString}</h2>
                <h3>{avgRating}*</h3>
            </Link>
        </div>
    )
}

export default RestaurantCard;