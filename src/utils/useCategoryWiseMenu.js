const useCategoryWiseMenu = (restaurantDetails) => {
    let categories = [];
    const createCategory = (element) => {
        if(element['@type']?.includes('NestedItemCategory')){
            element['categories'].forEach(subCategory => {
                createCategory(subCategory);
            })
        }
        else {
            let menuItems = [];
            element.itemCards?.forEach((item)=>{
                menuItems.push(item.card.info);
             })

            let category = {
                categoryTitle: element.title,
                categoryMenuItems: menuItems,
                categoryKey: element.type ? element.type : element.title.toUpperCase().replaceAll(/[^a-zA-Z0-9 ]/g, '').replaceAll(' ', '_')
            };
            categories.push( category);
        }    
    }
    restaurantDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.
    REGULAR?.cards?.filter((item)=>{
       return item.card.card['@type'].includes('ItemCategory');
    }).forEach(element => {
        createCategory(element.card.card);
    });
    return categories;
}

export default useCategoryWiseMenu;