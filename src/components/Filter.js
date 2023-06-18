const Filter = (props) => {
    return (
        <div className="filter" onClick={()=>{
            let newList = props.resData.filter((restaurant)=>{
                return (restaurant.data.avgRating >= 4.0);
            });
            props.setRes(newList);
            }}>
            <button className="filter-btn" >
                     Top Rated Restaurants 
            </button>
        </div>    
    )
}

export default Filter;