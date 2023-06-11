import { RES_LOGO_URL } from "../utils/constant";

const RestaurantCard = ({resData}) => {
    const {name, cuisines, avgRatingString, cloudinaryImageId} = resData?.info;
    const cusinesString = cuisines.join(', ');
    return (
        <div className='res-card'>
            <img className="res-logo" src={RES_LOGO_URL + cloudinaryImageId}></img>
            <h1> {name}</h1>
            <h2>{cusinesString}</h2>
            <h3>{avgRatingString}*</h3>
           
        </div>
    )
}

export default RestaurantCard;