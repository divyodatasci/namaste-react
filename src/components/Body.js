import { useEffect, useState } from "react";
import { RESTAURANT_DATA_API_URL } from "../utils/constant";
import RestaurantCardContainer from "./RestaurantCardContainer";
import Shimmer from "./Shimmer";
import Filter from "./Filter";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants,setFilteredListOfRestaurants] = useState([]);

    useEffect(()=> {
        fetchData()
    }, []);
    async function fetchData() {
        let apiData = await fetch(RESTAURANT_DATA_API_URL);
        let resJson = await apiData.json();
        setListOfRestaurants(resJson.data.cards[2].data.data.cards);
        setFilteredListOfRestaurants(resJson.data.cards[2].data.data.cards);
        console.log(filteredListOfRestaurants);
    }

    const [searchText, setSearchText] = useState("");

    return (
        <div className="body">
            {  //Conditional Rendering
                (listOfRestaurants.length === 0) ? (<Shimmer />) : (<>
                    <div className="search">
                        <input type="text" className="search-box" placeholder="Search" value={searchText} onChange={(e)=>{
                            setSearchText(e.target.value);
                        }}></input>
                        <button className="search-btn" onClick={()=> {
                            let filteredList = listOfRestaurants.filter((res)=>{
                                return res.data.name.toLowerCase().includes(searchText.toLowerCase());
                            })
                            setFilteredListOfRestaurants(filteredList);
                        }}>search</button>
                    </div>
                    <Filter resData = {filteredListOfRestaurants} setRes = {setFilteredListOfRestaurants} />
                    <RestaurantCardContainer resData = {filteredListOfRestaurants} />
                </>)
            }
        </div>
    )
}

export default Body;