import { useContext } from "react";

import { iCartProducts } from "../../../contexts/CartContext/types";
import { CartContext } from "../../../contexts/CartContext/CartContext";
import { ProductContext } from "../../../contexts/ProductContext/ProductContext";

import Button from "../../Button/Button";

import { ProductStyle } from "./ProductStyle";
import { iProductList } from "../../../contexts/ProductContext/types";

interface iProduct {
  product: iCartProducts | iProductList;
}

interface iProductFound {
  item: iCartProducts | iProductList;
}

const Product = ({ product }: iProduct) => {
  const { productsList } = useContext(ProductContext);
  const { currentCart, setCurrentCart } = useContext(CartContext);

  const addToCart = (id: number) => {
    const idFound = currentCart.find((product) => product.id === id);
    if (idFound) {
      const productFound = currentCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity! + 1 }
          : product
      );
      setCurrentCart(productFound);
    } else {
      productsList.find((item) => item.id === id);
      setCurrentCart([...currentCart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <ProductStyle>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <div>
        <p className="productName">{product.name}</p>
        <p className="productCategory">{product.category}</p>
        <p className="productPrice">
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <Button onClick={() => addToCart(product.id)}>Adicionar</Button>
      </div>
    </ProductStyle>
  );
};

export default Product;
