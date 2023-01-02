import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext/CartContext";
import { iCartProducts } from "../../../contexts/CartContext/types";

import { ProductCartStyle } from "./ProductCartStyle";

interface iProduct {
  product: iCartProducts;
}

const ProductCart = ({ product }: iProduct) => {
  const { currentCart, setCurrentCart } = useContext(CartContext);

  const increaseProduct = () => {
    const addProduct = currentCart.map((item) =>
      item.id === product.id
        ? { ...product, quantity: product.quantity + 1 }
        : item
    );
    setCurrentCart(addProduct);
  };

  const decreaseProduct = () => {
    if (product.quantity === 1) {
      removeToCart();
    } else {
      const removeProduct = currentCart.map((item) =>
        item.id === product.id
          ? { ...product, quantity: product.quantity - 1 }
          : item
      );
      setCurrentCart(removeProduct);
    }
  };

  const removeToCart = () => {
    const removeProduct = currentCart.filter((item) => item.id !== product.id);
    setCurrentCart(removeProduct);
  };

  return (
    <ProductCartStyle>
      <div className="product">
        <figure>
          <img src={product.img} alt={product.name} />
        </figure>
        <div>
          <p>{product.name}</p>
          <span>{product.category}</span>
        </div>
      </div>
      <div className="buttonCartProduct">
        <div className="buttonCartCounter">
          <button onClick={increaseProduct}>+</button>
          <p>{product.price}</p>
          <button onClick={decreaseProduct}>-</button>
        </div>
        <button className="buttonCartRemove" onClick={removeToCart}>
          Remover
        </button>
      </div>
    </ProductCartStyle>
  );
};

export default ProductCart;
