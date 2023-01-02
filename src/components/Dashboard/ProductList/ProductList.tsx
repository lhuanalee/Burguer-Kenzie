import { useContext } from "react";

import { ProductContext } from "../../../contexts/ProductContext/ProductContext";
import Product from "../Product/Product";

import { ProductListStyle } from "./ProductListStyle";

const ProductsList = () => {
  const { productsList } = useContext(ProductContext);

  return (
    <ProductListStyle>
      {productsList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductListStyle>
  );
};

export default ProductsList;
