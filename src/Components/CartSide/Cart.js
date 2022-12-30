import { useSelector } from "react-redux";
import CartList from "./CartList";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";


const Cart = () => {

    const cartProducts = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);


    return(
        <div>
            <div className="cartContainer">
                <div className="total">
                    <h3>TOTAL: ${totalPrice.toFixed(2)}</h3>
                </div>
                <div>
                    <p className="productQuantityInCart">{cartProducts.length}</p>
                    <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="cart" />
                </div>
            </div>
            <div className="showCartList">
            {cartProducts.map((cartProduct, index) => <CartList cartProduct={cartProduct} key={index}/>)}
            </div>
        </div>
    );
}

export default Cart;