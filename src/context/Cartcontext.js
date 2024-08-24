
import {createContext, useReducer,useContext, useEffect } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = ()=>{
    let newCartData = localStorage.getItem("addCart");
    if(newCartData == []){
return[];
    }else{
    return JSON.parse(newCartData);
    }
}

const initialState ={
     cart:getLocalCartData(),
    //  cart:[],
};

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState);

    const addToCart = (id,amount, product) => {
        dispatch({type :"ADD_TO_CART",payload:{id, amount,product}});

    }

    const removeItem = (id) => {
        dispatch({type:"REMOVE_ITEM",payload :id});
    }

    const clearCart = () => {
        dispatch({type:"CLEAR_CART"});
    }

    useEffect(()=>{
        localStorage.setItem("addCart",JSON.stringify(state.cart))
    },[state.cart]);

    return(
        <CartContext.Provider value={{...state,addToCart,removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    )
};

const useCartContext =()=>{
    return useContext(CartContext)
}

export {CartProvider,useCartContext};


