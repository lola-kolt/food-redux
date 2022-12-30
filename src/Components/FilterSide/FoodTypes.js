//importuojam {useSelector}, kad galetume zinoti koks yra state
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, getSelectedFoodType } from "../../redux/dishesSlice";

const FoodTypes = ({foodCategory}) => {

    const selectedFoodType = useSelector(getSelectedFoodType);
    const dispatch = useDispatch();

    return(
        <div className="foodCategory">
            <h4 
            onClick={ () => {dispatch(filterByCategory(foodCategory))} }
            className={selectedFoodType === foodCategory ? 'foodCategoryButtonSelected foodCategoryButton' : 'foodCategoryButton'}>
                {foodCategory}
            </h4>
        </div>
    );
}

export default FoodTypes;