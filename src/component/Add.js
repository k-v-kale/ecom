import { useProductContext } from "../context/ProductContext";
import Sidebar from "../layout/Sidebar";
import ProductData from "./ProductData";

const Add = () => {
  const { product } = useProductContext();

  return (
    <div className="home">
      <div>
        <Sidebar />
      </div>
      <div className="heading"><h1>List of Products</h1>
         <div className="productdata"> 
          {product.map((ele) => {
            return <ProductData key={ele.id} {...ele} />;
          })}
        </div>
        </div>
    </div>
  );
};

export default Add;
