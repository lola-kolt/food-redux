import ChangeQuantity from '../CartSide/ChangeQuantity';
import { useState } from  'react';
import { addItemToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

const Dish = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return(
        <div className="dishContainer">
            <img className="dishPhoto" src={`./images_for_delivety_project/${product.image}.jpg`} alt="dish" />
            <h3 className="dishName">{product.name}</h3>
            <p className="dishPrice">${product.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className='add' onClick={ () => {dispatch(addItemToCart({product, quantity}))}}>Add to Cart</button>
        </div>
    );
}

export default Dish;