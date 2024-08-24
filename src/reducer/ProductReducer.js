

const ProductReducer = (state,action) =>{
    if(action.type === "MY_API_DATA"){
        return{
            ...state,
            product: action.payload,
        };
    }if(action.type === "SET_SINGAL_PRODUCT"){
        return{
            ...state,
            sigleProducts:action.payload,
        }
    }
    return state;
};

export default ProductReducer;