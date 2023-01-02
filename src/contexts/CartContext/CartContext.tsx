import { createContext, useState } from "react";

import { iCartProps, iCartProducts, iCartValue } from "./types";

const CartProvider = ({ children }: iCartProps) => {
  const [click, setClick] = useState(false);
  const [currentCart, setCurrentCart] = useState([] as iCartProducts[]);

  return (
    <CartContext.Provider
      value={{
        currentCart,
        setCurrentCart,
        click,
        setClick,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const CartContext = createContext({} as iCartValue);

export default CartProvider;
