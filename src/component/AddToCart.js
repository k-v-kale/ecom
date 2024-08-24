import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/Cartcontext";
import CartAomuntToggal from './CartAmountToggal';

const AddToCart = ({ product }) => {
    const { addToCart } = useCartContext();

    const { id, stock } = product;

    const [amount, setAmount] = useState(1);


    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

    return (
        <div>

            <CartAomuntToggal amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />



            <div>
                <NavLink to={"/Cart"} onClick={() => addToCart(id,amount, product)}>
                    <button className="productbtn">Add to cart</button>
                </NavLink>
            </div>
        </div>

    )
}
export default AddToCart;