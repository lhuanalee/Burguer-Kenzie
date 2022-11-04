import CartProduct from "../CartProduct/CartProduct";
import CartTotal from "../CartTotal/CartTotal";
import { StyleCart } from "./style";
import AstronautCat from "../../assets/Astronaut Cat.gif";

const Cart = ({ currentSale, setCurrentSale }) => {
  return (
    <StyleCart>
      <div className="shoppin__cart">
        <p>Carrinho de compras</p>
      </div>
      {currentSale.length ? (
        <div>
          <ul>
            {currentSale.map((product) => (
              <CartProduct
                key={product.id}
                product={product}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
              />
            ))}
          </ul>
          <hr className="divider"></hr>
          <CartTotal
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </div>
      ) : (
        <div className="empty__cart">
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
          <img src={AstronautCat} alt="" />
        </div>
      )}
    </StyleCart>
  );
};

export default Cart;
