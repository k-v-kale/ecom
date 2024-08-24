import React from "react";
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../context/Cartcontext";
import CartAomuntToggal from "./CartAmountToggal";

const CardItem = ({ id, name, image, price, amount }) => {
    const { removeItem } = useCartContext();



    const setDecrease = () => {
        // amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

    const setIncrease = () => {
        // amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }


    return (
        <div className="cart-heading">
            <div className="cart-item">
                <img className="cart-img" src={image} alt={id}></img>
            </div>
            <p>{name}</p>
            <p>{price}</p>
            
                <CartAomuntToggal amount={amount}
                    setDecrease={setDecrease}
                    setIncrease={setIncrease}
                />
            

            <div>
                <MdDelete className="cart-icon" onClick={() => removeItem(id)} />
            </div>

        </div>
    )
}

export default CardItem;