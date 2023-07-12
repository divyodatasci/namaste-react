import { useEffect, useState } from "react";
import { RESTAURANT_DATA_API_URL } from "../utils/constant";
import RestaurantCardContainer from "./RestaurantCardContainer";
import Shimmer from "./Shimmer";
import Filter from "./Filter";
import useOnlineStatus from "../utils/useOnlineStatus";

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
    console.log(useOnlineStatus())
    if(!useOnlineStatus()){return (<div>
        <h1> You'r internet seems to be disconnect, Please check your connection!</h1>
    </div>); }
    return (
        <div className="body">
            {  //Conditional Rendering
                (listOfRestaurants.length === 0) ? (<Shimmer />) : (<>
                    <div className="filter-functionalities flex items-center">
                        <div className="search m-4 p-4 flex gap-6">
                            <input type="text" className="search-box border border-solid border-black" placeholder="Search Restaurant" value={searchText} onChange={(e)=>{
                                setSearchText(e.target.value);
                            }}></input>
                            <button className="search-btn px-4 py-2 bg-green-200 rounded-lg" onClick={()=> {
                                let filteredList = listOfRestaurants.filter((res)=>{
                                    return res.data.name.toLowerCase().includes(searchText.toLowerCase());
                                })
                                setFilteredListOfRestaurants(filteredList);
                            }}>Search</button>
                        </div>
                        <Filter resData = {filteredListOfRestaurants} setRes = {setFilteredListOfRestaurants} />
                        
                    </div>
                    <RestaurantCardContainer resData = {filteredListOfRestaurants} />
                </>)
            }
        </div>
    )
}

export default Body;