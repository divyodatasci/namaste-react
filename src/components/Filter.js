const Filter = (props) => {
    return (
        <div className="filter" onClick={()=>{
            let newList = props.resData.filter((restaurant)=>{
                return (restaurant.data.avgRating >= 4.0);
            });
            props.setRes(newList);
            }}>
            <button className="filter-btn bg-gray-300 py-2 px-4 my-auto rounded-lg" >
                     Top Rated Restaurants 
            </button>
        </div>    
    )
}

export default Filter;