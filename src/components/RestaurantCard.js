import { RES_LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const RestaurantCard = ({resData}) => {
    const {name, cuisines, avgRating, cloudinaryImageId, id} = resData?.data;
    const cusinesString = cuisines.join(', ');
    let res_id = `res_${id}`;
    return (
        <div className='res-card' id = {res_id} >
            <Link to={"/restaurants/"+id}>
                <img className="res-logo" src={RES_LOGO_URL + cloudinaryImageId}></img>
                <h1> {name}</h1>
                <h2>{cusinesString}</h2>
                <h3>{avgRating}*</h3>
            </Link>
        </div>
    )
}

export default RestaurantCard;