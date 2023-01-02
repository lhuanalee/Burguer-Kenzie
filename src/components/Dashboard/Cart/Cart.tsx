import { useContext } from "react";

import { CartContext } from "../../../contexts/CartContext/CartContext";

// import CartTotal from "../CartTotal/CartTotal";
import Button from "../../Button/Button";
import ProductCart from "../ProductCart/ProductCart";

import AstronautCat from "../../../assets/Astronaut Cat.gif";

import { CartStyle } from "./CartStyle";

const Cart = () => {
  const { currentCart, setClick } = useContext(CartContext);

  return (
    <CartStyle>
      <section>
        <div className="shoppingCart">
          <p>Carrinho de compras</p>
          <Button onClick={() => setClick(false)}>X</Button>
        </div>
        {currentCart.length ? (
          <div className="emptyCart">
            <ul>
              {currentCart.map((product, index) => (
                <ProductCart key={index} product={product} />
              ))}
            </ul>
            <hr></hr>
          </div>
        ) : (
          <div className="emptyCart">
            <p>Sua sacola está vazia</p>
            <span>Adicione itens</span>
            <img src={AstronautCat} alt="" />
          </div>
        )}
      </section>
    </CartStyle>
  );
};

export default Cart;
