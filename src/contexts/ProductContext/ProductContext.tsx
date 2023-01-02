import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../../services/api";
import { iProductProps, iProductList, iProductsValue } from "./types";
import { UserContext } from "../UserContext/UserContext";

const ProductProvider = ({ children }: iProductProps) => {
  const [productsList, setProductsList] = useState([] as iProductList[]);
  const { token } = useContext(UserContext);

  useEffect(() => {
    const profile = async () => {
      try {
        if (token) {
          const products = await api.get(`products`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProductsList(products.data);
        }
      } catch (err) {
        localStorage.clear();
      }
    };
    profile();
  }, []);

  return (
    <ProductContext.Provider value={{ productsList, setProductsList }}>
      {children}
    </ProductContext.Provider>
  );
};

export const ProductContext = createContext({} as iProductsValue);

export default ProductProvider;
