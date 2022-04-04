import React, { useEffect, useState } from "react";
import { deleteAddToCartData, getAddToCartData } from "../product/service/ProductService";
export const CartContext = React.createContext({});

const AddToCart = (props: any) => {
  const [addValue, setValue] = useState<any>(0);
  useEffect(() => {
    getAddToCartData().then((res: any) => {
      setValue(res.data.length);
    });
  }, []);
//   const removeFromCartHandler = (id: number) => {
//       debugger
//     deleteAddToCartData(id).then((res:any)=>{
//       alert("Deleted Cart");
//     });
//     getAddToCartData().then((res: any) => {
//      setValue(res.data.length);
//     });
//   };
  
  return (
    <CartContext.Provider value={addValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default AddToCart;
