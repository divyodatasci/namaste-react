import { RES_MENU_API_URL } from "../utils/constant";

const useRestaurantMenu = ({resId}) => {
    const [restaurantDetails, setRestaurantDetails] = useState(" ");
    useEffect(() => {
        fetchMenu();
    }, [])
    const fetchMenu = async function(){
        let menuApiData = await fetch(RES_MENU_API_URL+resId);
        let menuJson = await menuApiData.json();
        console.log(menuJson);  
        setRestaurantDetails(menuJson);
    }
}

export default useRestaurantMenu;