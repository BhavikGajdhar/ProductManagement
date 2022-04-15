import React, { createContext } from "react";
import { Header } from "./Header";

export const CartContext = createContext(0);

const AddToCart = (props: any) => {
  return (
    <CartContext.Provider value={props.cartValue}>
      <Header/>
    </CartContext.Provider>
  );
};

export default AddToCart;
