const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, amount, product } = action.payload;

        let existingProduct = state.cart.find(
            (curItem) => curItem.id == id
        );

        if (existingProduct) {
            let updatedProduct = state.cart.map((curElem) => {
                if (curElem.id == id) {
                    let newAmount = curElem.amount + amount;
                    return {
                        ...curElem,
                        amount: newAmount,
                    };

                } else {
                    return curElem;
                }
            });
            return {
                ...state,
                cart: updatedProduct,
            };
        } else {
            let cartProduct;

            cartProduct = {
                id: id,
                name: product.name,
                amount,
                price: product.price,
                image: product.image[0].url,
                max:product.stock,
            };

            return {
                ...state,
                cart: [...state.cart, cartProduct],
            };
        }
    }

    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let decAmount = curElem.amount - 1;

                if (decAmount <= 1) {
                    decAmount = 1;
                }

                return {
                    ...curElem,
                    amount: decAmount,
                };
            } else {
                return curElem;
            }
        });
        return { ...state, cart: updatedProduct }
    }

    if (action.type === "SET_INCREMENT") {
        let updatedProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let incAmount = curElem.amount + 1;

                if (incAmount >= curElem.max) {
                    incAmount = curElem.max;
                }

                return {
                    ...curElem,
                    amount: incAmount,
                };
            } else {
                return curElem;
            }
        });
        return { ...state, cart: updatedProduct }
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
            (curElem) => curElem.id !== action.payload
        );
        return {
            ...state,
            cart: updatedCart,
        }
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        };
    }

    return state;
};

export default CartReducer;