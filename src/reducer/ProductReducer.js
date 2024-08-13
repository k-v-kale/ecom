
const ProductReducer = (state,action) =>{
    if(action.type === "MY_API_DATA"){
        return{
            ...state,
            product: action.payload,
        };
    }
    return state;
};

export default ProductReducer;