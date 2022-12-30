import dataAboutProducts from '../../data/dataAboutProducts';
import Dish from './Dish';
import { useSelector } from 'react-redux';
import { getSelectedFoodType } from '../../redux/dishesSlice';


const AllDishes = () => {

    const selectedFoodType = useSelector(getSelectedFoodType)

    return(
        <div className='allDishesContainer'>
            {dataAboutProducts            
            .filter(product => {
                if (selectedFoodType === 'All') return true;
                return selectedFoodType === product.category
            })
            .map((product, index) => <Dish product={ product } key={ index }/>)}
        </div>
    );
}

export default AllDishes;