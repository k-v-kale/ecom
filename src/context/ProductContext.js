import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
const initialState = {
  product: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const GetAllProducts = async (url) => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      const product = await res.data;
      dispatch({type:"MY_API_DATA", payload: product});
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
