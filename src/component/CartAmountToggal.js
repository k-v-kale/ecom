   import React from "react";
   import { FaMinus,FaPlus } from "react-icons/fa";

   const CartAomuntToggal  = ({amount,setIncrease,setDecrease}) => {
 return(
    <div>
        <div className="amount-btn">
            <button onClick={()=>setDecrease()}><FaMinus/></button>
            <div className="amount-style">{amount}</div>
            <button onClick={()=>setIncrease()}><FaPlus/></button>
        </div>
    </div>

 )
   }

   export default CartAomuntToggal;