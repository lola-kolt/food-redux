import FoodTypes from "./FoodTypes";

const AllFoodTypes = () => {
    return(
        <div className="catCont">
            <h1 className="question">What kind of food do you like?</h1>
            <div className="categoriesContainer">
                { ['All', 'Seafood', 'Pasta', 'Soup', 'Burger', 'Dessert', 'Salad'].map((foodCategory, index) => <FoodTypes foodCategory ={ foodCategory } key={ index }/>) }
            <FoodTypes />

            </div>

        </div>
    );
}

export default AllFoodTypes;