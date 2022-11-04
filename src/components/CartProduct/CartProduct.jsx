import { StyleCartProduct } from "./style";

const CartProduct = ({ product, currentSale, setCurrentSale }) => {
  const { img, name, category, quantidade, id } = product;

  const removeToCart = () => {
    const removeProduct = currentSale.filter((product) => product.id !== id);
    setCurrentSale(removeProduct);
  };

  const decreaseProduct = () => {
    if (quantidade === 1) {
      removeToCart();
    } else {
      const removeProduct = currentSale.map((product) =>
        product.id === id
          ? { ...product, quantidade: product.quantidade - 1 }
          : product
      );
      setCurrentSale(removeProduct);
    }
  };

  const increaseProduct = () => {
    const addProduct = currentSale.map((product) =>
      product.id === id
        ? { ...product, quantidade: product.quantidade + 1 }
        : product
    );
    setCurrentSale(addProduct);
  };

  return (
    <StyleCartProduct>
      <div className="product">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div>
          <p>{name}</p>
          <span>{category}</span>
        </div>
      </div>
      <div className="button__cart__product">
        <div className="button__cart__counter">
          <button onClick={increaseProduct}>+</button>
          <p>{quantidade} </p>
          <button onClick={decreaseProduct}>-</button>
        </div>
        <button onClick={removeToCart} className="button__cart__remove">
          Remover
        </button>
      </div>
    </StyleCartProduct>
  );
};

export default CartProduct;
