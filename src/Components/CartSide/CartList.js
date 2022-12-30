import { useDispatch } from "react-redux";
import dataAboutProducts from "../../data/dataAboutProducts";
import { removeItemFromCart } from "../../redux/cartSlice";



const CartList = ({cartProduct}) => {
    const dishName = dataAboutProducts.find(item => item.id === cartProduct.dishId);
    const dispatch = useDispatch();


    return(
        <div>
            <h3 className="list-name">{dishName.name}</h3>
            <div className="portion-bin-container">
                <p className="list-portion"><span className="boldPortionNumber">{cartProduct.quantity}</span> portion(s) * {dishName.price}</p>
                <span onClick={() => {dispatch(removeItemFromCart({cartItemId: cartProduct.id}))}}>
                    <img className="bin" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png " alt="bin" />
                </span>
            </div>
            <h4 className="list-price">Price: ${(dishName.price * cartProduct.quantity).toFixed(2)}</h4>
            <hr />
            
        </div>
    );
}

export default CartList;