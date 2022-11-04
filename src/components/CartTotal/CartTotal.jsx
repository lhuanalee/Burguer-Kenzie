import { StyleCartTotal } from "./style";

const CartTotal = ({ currentSale, setCurrentSale }) => {
  const someProducts = () => {
    const some = currentSale.reduce(
      (acc, cur) => acc + cur.price * cur.quantidade,
      0
    );
    return some.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  };

  const removeAll = () => {
    setCurrentSale([]);
  };

  return (
    <StyleCartTotal>
      <div>
        <p>Total</p>
        <span>{someProducts()}</span>
      </div>
      <button onClick={removeAll}>Remover todos</button>
    </StyleCartTotal>
  );
};

export default CartTotal;
