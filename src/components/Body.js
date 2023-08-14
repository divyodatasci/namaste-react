import { useContext, useEffect, useState } from "react";
import { RESTAURANT_DATA_API_URL, RESTAURANT_DATA_API_URL_2 } from "../utils/constant";
import RestaurantCardContainer from "./RestaurantCardContainer";
import Shimmer from "./Shimmer";
import Filter from "./Filter";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants,setFilteredListOfRestaurants] = useState([]);
    const data = useContext(UserContext);
    useEffect(()=> {
        fetchData()
    }, []);
    async function fetchData() {
        let apiData = await fetch(RESTAURANT_DATA_API_URL);
        let resJson = await apiData.json();
        console.log(resJson.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // setListOfRestaurants(resJson.data.cards[2].data.data.cards);
        // setFilteredListOfRestaurants(resJson.data.cards[2].data.data.cards);
        setListOfRestaurants(resJson.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredListOfRestaurants(resJson.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const [searchText, setSearchText] = useState("");
    if(!useOnlineStatus()){return (<div>
        <h1> You'r internet seems to be disconnect, Please check your connection!</h1>
    </div>); }
    return (
        <div className="body">
            {  //Conditional Rendering
                (listOfRestaurants.length === 0) ? (<Shimmer />) : (<>
                    <div className="filter-functionalities flex items-center">
                        <div className="search m-4 p-4 flex gap-6">
                            <input type="text" className="border border-solid border-black p-2" placeholder="Search Restaurant" value={searchText} onChange={(e)=>{
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
                        <label className=" m-4 p-2"> Username </label>
                        <input type="text" className="border border-solid border-black p-2" value= {data.loggedInUser} onChange={(e)=>{
                                data.setUserInfo(e.target.value);
                            }}></input>
                    </div>
                    <RestaurantCardContainer resData = {filteredListOfRestaurants} />
                </>)
            }
        </div>
    )
}

export default Body;