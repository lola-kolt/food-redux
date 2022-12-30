const ChangeQuantity = ({quantity, setQuantity}) => {

const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
}

const removeQuantity = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
}



    return(
        <div className="quantity">
            <button onClick={removeQuantity}>-</button>
            <h4 className="numberOfQuantity">{quantity}</h4>
            <button onClick={addQuantity}>+</button>
            </div>
    )
}

export default ChangeQuantity;